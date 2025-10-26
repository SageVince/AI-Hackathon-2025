
import React, { useRef, useEffect, useCallback, useState } from 'react';

// --- CONFIG (Capital One Theme) ---
const WIDTH = 900, HEIGHT = 600;
const LANES_X = [WIDTH * 0.28, WIDTH * 0.5, WIDTH * 0.72];
const LANE_INDEX_START = 1;

const PLAYER_W = 60, PLAYER_H = 90;
const SCROLL_SPEED_BASE = 5.0;
const SCROLL_SPEED_MAX = 18.0;

// Finance model remains the same
const INV_APR = 0.08, DEBT_APR = 0.10, INVEST_CHUNK = 10, LOAN_AMOUNT = 50, LOAN_SPEED_BOOST = 3.5, LOAN_BOOST_TIME = 5.0;
const SPAWN_RATES = { coin: 1.4, bad: 1.0, obst: 0.8, bank: 0.2, loan: 0.12 };

// --- GAME LOGIC ---
let game = {};
const keys = {};

const initGame = () => {
  game = { lane: LANE_INDEX_START, player_y: HEIGHT - 120, player_vy: 0, on_ground: true, jump_power: -15, gravity: 0.9, slide_timer: 0.0, slide_dur: 0.5, scroll_speed: SCROLL_SPEED_BASE, entities: [], spawn_accum: { coin: 0, bad: 0, obst: 0, bank: 0, loan: 0 }, coins: 0.0, debt: 0.0, investment: 0.0, net_worth: 0.0, last_finance_ts: Date.now() / 1000, loan_boost_left: 0.0, running: true, paused: false, game_over: false, show_tutorial: true, distance: 0.0, start_ts: Date.now() / 1000, last_time: Date.now() / 1000 };
};

const player_rect = () => { const h = PLAYER_H * (game.slide_timer > 0 ? 0.6 : 1.0); return { x: LANES_X[game.lane] - PLAYER_W / 2, y: game.player_y - h / 2, w: PLAYER_W, h }; };
const try_invest = () => { if (game.coins >= INVEST_CHUNK) { game.coins -= INVEST_CHUNK; game.investment += INVEST_CHUNK; } };
const take_loan = () => { game.coins += LOAN_AMOUNT; game.debt += LOAN_AMOUNT; if (game.scroll_speed < SCROLL_SPEED_MAX) { game.scroll_speed = Math.min(SCROLL_SPEED_MAX, game.scroll_speed + LOAN_SPEED_BOOST); } game.loan_boost_left = LOAN_BOOST_TIME; };
const spawn_entity = (kind, theme) => { const lane = Math.floor(Math.random() * 3); const x = LANES_X[lane]; let entity = { kind, lane, x, y: -60, w: 0, h: 0, vy: game.scroll_speed, color: '' }; if (kind === "coin") { Object.assign(entity, { w: 26, h: 26, color: "#FFD700" }); } else if (kind === "bad") { Object.assign(entity, { w: 36, h: 36, color: theme.accentNegative }); } else if (kind === "bank") { Object.assign(entity, { w: 36, h: 36, color: theme.primary }); } else if (kind === "loan") { Object.assign(entity, { w: 36, h: 36, color: "#692B80" }); } else if (kind === "obst_low") { Object.assign(entity, { w: 70, h: 30, color: theme.textSecondary }); } else if (kind === "obst_tall") { Object.assign(entity, { w: 60, h: 90, color: theme.textSecondary }); } game.entities.push(entity); };
const spawn_step = (dt, theme) => { for (const kind in SPAWN_RATES) { game.spawn_accum[kind] += SPAWN_RATES[kind] * dt; while (game.spawn_accum[kind] >= 1) { if (kind === 'obst') spawn_entity(Math.random() < 0.6 ? "obst_low" : "obst_tall", theme); else spawn_entity(kind, theme); game.spawn_accum[kind] -= 1; } } };
const update_entities = () => { game.entities.forEach(e => { e.vy = game.scroll_speed; e.y += e.vy; }); game.entities = game.entities.filter(e => e.y < HEIGHT + 80); };
const handle_collisions = () => { const pr = player_rect(); let remove_idx = []; game.entities.forEach((e, i) => { const er = { x: e.x - e.w / 2, y: e.y - e.h / 2, w: e.w, h: e.h }; if (pr.x < er.x + er.w && pr.x + pr.w > er.x && pr.y < er.y + er.h && pr.y + pr.h > er.y) { if (e.kind === "coin") { game.coins += 3; remove_idx.push(i); } else if (e.kind === "bad") { const cost = 5; if (game.coins >= cost) game.coins -= cost; else { game.debt += cost - game.coins; game.coins = 0; } remove_idx.push(i); } else if (e.kind === "obst_low") { if (game.slide_timer <= 0 && (pr.y + pr.h) > er.y + 10) game.game_over = true; } else if (e.kind === "obst_tall") { if (game.slide_timer <= 0) game.game_over = true; } } }); for (let i = remove_idx.length - 1; i >= 0; i--) game.entities.splice(remove_idx[i], 1); };
const finance_tick = (dt) => { if (dt <= 0) return; const inv_rate_sec = INV_APR / 31536000; const debt_rate_sec = DEBT_APR / 31536000; game.investment *= Math.pow(1 + inv_rate_sec, dt); game.debt *= Math.pow(1 + debt_rate_sec, dt); game.net_worth = game.coins + game.investment - game.debt; if (game.loan_boost_left > 0) { game.loan_boost_left = Math.max(0.0, game.loan_boost_left - dt); if (game.loan_boost_left <= 0) game.scroll_speed = Math.max(SCROLL_SPEED_BASE, game.scroll_speed - LOAN_SPEED_BOOST); } };
const update = (dt, theme) => { if (keys['ArrowLeft']) { game.lane = Math.max(0, game.lane - 1); keys['ArrowLeft'] = false; } if (keys['ArrowRight']) { game.lane = Math.min(2, game.lane + 1); keys['ArrowRight'] = false; } if (keys['ArrowUp'] && game.on_ground) { game.player_vy = game.jump_power; game.on_ground = false; } if (keys['ArrowDown']) game.slide_timer = game.slide_dur; if (keys['i']) { try_invest(); keys['i'] = false; } if (keys['l']) { take_loan(); keys['l'] = false; } if (!game.on_ground) { game.player_vy += game.gravity; game.player_y += game.player_vy; if (game.player_y >= HEIGHT - 120) { game.player_y = HEIGHT - 120; game.player_vy = 0; game.on_ground = true; } } if (game.slide_timer > 0) game.slide_timer = Math.max(0, game.slide_timer - dt); spawn_step(dt, theme); update_entities(); handle_collisions(); const now = Date.now() / 1000; const financeDt = now - game.last_finance_ts; finance_tick(financeDt); game.last_finance_ts = now; game.distance += game.scroll_speed * dt; game.scroll_speed = Math.min(SCROLL_SPEED_MAX, SCROLL_SPEED_BASE + (game.distance / 900.0)); };
const draw = (ctx, theme) => { ctx.fillStyle = theme.background; ctx.fillRect(0, 0, WIDTH, HEIGHT); ctx.strokeStyle = theme.borderColor; ctx.lineWidth = 2; for (const x of LANES_X) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, HEIGHT); ctx.stroke(); } for (const e of game.entities) { ctx.fillStyle = e.color; if (e.kind === 'coin') { ctx.beginPath(); ctx.arc(e.x, e.y, e.w / 2, 0, 2 * Math.PI); ctx.fill(); } else { ctx.fillRect(e.x - e.w / 2, e.y - e.h / 2, e.w, e.h); } } const pr = player_rect(); ctx.fillStyle = theme.primary; ctx.fillRect(pr.x, pr.y, pr.w, pr.h); ctx.font = "bold 18px 'Segoe UI', 'Roboto', sans-serif"; ctx.fillStyle = theme.accentPositive; ctx.fillText(`Coins: ${Math.floor(game.coins)}`, 16, 28); ctx.fillStyle = theme.primary; ctx.fillText(`Invest: ${Math.floor(game.investment)} (+${INV_APR * 100}% APR)`, 16, 52); ctx.fillStyle = theme.accentNegative; ctx.fillText(`Debt: ${Math.floor(game.debt)} (+${DEBT_APR * 100}% APR)`, 16, 76); ctx.font = "bold 20px 'Segoe UI', 'Roboto', sans-serif"; ctx.fillStyle = theme.text; ctx.fillText(`Net Worth: ${Math.floor(game.net_worth)}`, 16, 108); ctx.font = "16px 'Segoe UI', 'Roboto', sans-serif"; ctx.fillStyle = theme.textSecondary; ctx.fillText(`Speed: ${game.scroll_speed.toFixed(1)}`, 16, 134); ctx.fillText("I=Invest, L=Loan, ↑ Jump, ↓ Slide, P=Pause", 16, HEIGHT - 20); if (game.loan_boost_left > 0) { ctx.fillStyle = "#D97706"; ctx.font = "bold 18px 'Segoe UI', 'Roboto', sans-serif"; ctx.fillText(`Loan boost: ${game.loan_boost_left.toFixed(1)}s`, WIDTH - 220, 28); } if (game.show_tutorial) { ctx.fillStyle = `rgba(${theme.background === '#1a1a1d' ? '26,26,29,0.9' : '241,245,249,0.9'})`; ctx.fillRect(0, 0, WIDTH, HEIGHT); ctx.fillStyle = theme.primary; ctx.textAlign = 'center'; ctx.font = "bold 36px 'Segoe UI', 'Roboto', sans-serif"; ctx.fillText("STONKS! The Minigame", WIDTH / 2, 120); ctx.textAlign = 'left'; ctx.font = "bold 20px 'Segoe UI', 'Roboto', sans-serif"; ctx.fillStyle = theme.text; ctx.fillText("GOAL: Maximize your Net Worth!", 150, 200); ctx.fillText("CONTROLS:", 150, 250); ctx.font = "18px 'Segoe UI', 'Roboto', sans-serif"; ctx.fillText("← → : Switch Lanes", 200, 290); ctx.fillText("↑   : Jump (over low obstacles)", 200, 320); ctx.fillText("↓   : Slide (under tall obstacles)", 200, 350); ctx.fillText("I   : Invest $10 to grow your wealth", 200, 380); ctx.fillText("L   : Take a $50 Loan for a speed boost", 200, 410); ctx.font = "bold 24px 'Segoe UI', 'Roboto', sans-serif"; ctx.textAlign = 'center'; ctx.fillStyle = theme.primary; ctx.fillText("Press 'Enter' to Start!", WIDTH / 2, 500); } if (game.paused) { ctx.font = "bold 42px 'Segoe UI', 'Roboto', sans-serif"; ctx.fillStyle = theme.text; ctx.textAlign = "center"; ctx.fillText("PAUSED", WIDTH / 2, HEIGHT / 2 - 50); } if (game.game_over) { ctx.fillStyle = `rgba(${theme.background === '#1a1a1d' ? '26,26,29,0.9' : '241,245,249,0.9'})`; ctx.fillRect(0,0,WIDTH,HEIGHT); ctx.font = "bold 48px 'Segoe UI', 'Roboto', sans-serif"; ctx.fillStyle = theme.accentNegative; ctx.textAlign = "center"; ctx.fillText("GAME OVER", WIDTH / 2, HEIGHT / 2 - 80); ctx.font = "bold 28px 'Segoe UI', 'Roboto', sans-serif"; ctx.fillStyle = theme.text; ctx.fillText(`Final Net Worth: ${Math.floor(game.net_worth)}`, WIDTH / 2, HEIGHT / 2); ctx.font = "20px 'Segoe UI', 'Roboto', sans-serif"; ctx.fillText("Click the button below to claim your earnings.", WIDTH / 2, HEIGHT / 2 + 50); } ctx.textAlign = "left"; };

function StonksMinigame({ backToMenu, onGameEnd, theme }) {
  const canvasRef = useRef(null);
  const frameId = useRef(null);
  const [isGameOver, setIsGameOver] = useState(false);

  const gameLoop = useCallback(() => {
    if (!game.running) return;

    const now = Date.now() / 1000;
    const dt = now - game.last_time;
    game.last_time = now;

    if (!game.show_tutorial && !game.paused && !game.game_over) {
      update(dt, theme);
    }

    if (game.game_over && !isGameOver) {
        setIsGameOver(true);
    }

    const ctx = canvasRef.current?.getContext('2d');
    if (ctx) draw(ctx, theme);

    frameId.current = requestAnimationFrame(gameLoop);
  }, [isGameOver, theme]);

  useEffect(() => {
    initGame();
    setIsGameOver(false); // Reset on mount

    const handleKeyDown = (e) => {
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(e.key)) e.preventDefault();
      keys[e.key] = true;

      if (game.show_tutorial && e.key === 'Enter') {
        game.show_tutorial = false;
        const t = Date.now() / 1000;
        game.start_ts = t; game.last_time = t; game.last_finance_ts = t;
        return;
      }
      if (e.key === 'p' && !game.show_tutorial && !game.game_over) game.paused = !game.paused;
    };
    const handleKeyUp = (e) => { keys[e.key] = false; };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    frameId.current = requestAnimationFrame(gameLoop);

    return () => {
      cancelAnimationFrame(frameId.current);
      game.running = false;
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [gameLoop]);

  const handleButtonClick = () => {
    if (isGameOver) {
        onGameEnd(Math.floor(game.net_worth));
    } else {
        backToMenu();
    }
  }

  return (
    <div style={{ background: theme.background, minHeight: 'calc(100vh - 60px)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <canvas ref={canvasRef} width={WIDTH} height={HEIGHT} style={{ background: theme.cardBg, border: `1px solid ${theme.borderColor}`, borderRadius: '8px', boxShadow: `0 4px 6px rgba(0,0,0,${theme.background === '#1a1a1d' ? 0.2 : 0.05})` }} />
      <button onClick={handleButtonClick} style={{ marginTop: '20px', padding: '12px 25px', background: isGameOver ? theme.accentPositive : theme.primary, color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem' }}>
        {isGameOver ? `Claim ${Math.floor(game.net_worth)} & Exit` : 'Quit Minigame'}
      </button>
    </div>
  );
}

export default StonksMinigame;
