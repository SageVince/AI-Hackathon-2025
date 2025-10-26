// @ts-nocheck
import stonkPorkImg from './assets/stonkpork.png';
import johnPorkImg from './assets/johnpork.png';
import snoopDogImg from './assets/snoopdog.jpg';
import porkBondyImg from './assets/porkbondy.png';
import yapDollarImg from './assets/yapdollar.jpg';
import ecuadorKnucklesImg from './assets/ecuadorianknuckles.jpg';
import cyberSageImg from './assets/cybersage.png';
import whaleWhispererImg from './assets/thewhalewhisperer.png';
import samuelJacksonImg from './assets/samueljackson.png';
import yenjuImg from './assets/yenju.png';

export const characters = {
  stonkPork: { name: 'Stonk Pork', img: stonkPorkImg, isProtagonist: true },
  johnPork: { name: 'John Pork', img: johnPorkImg },
  snoopDog: { name: 'Snoop Dogg', img: snoopDogImg },
  porkBondy: { name: 'Pork Bondy', img: porkBondyImg },
  yapDollar: { name: 'Yap Dollar', img: yapDollarImg },
  ecuadorKnuckles: { name: 'Ecuador Knuckles', img: ecuadorKnucklesImg },
  cyberSage: { name: 'Cyber Sage', img: cyberSageImg },
  saga: { name: 'Saga', img: null },
  whaleWhisperer: { name: 'The Whale Whisperer', img: whaleWhispererImg },
  samuelJackson: { name: 'Samuel L. Jackson', img: samuelJacksonImg },
  yenju: { name: 'Yenju', img: yenjuImg },
  narrator: { name: 'Narrator', img: null }
};

export const scenes = [
    {
        title: 'Chapter 1: The Flip',
        background: 'bg-gray-800',
        lines: [
            { speaker: 'porkBondy', text: 'Listen, Stonk. You ever heard of Capital One’s new app, The Flip?' },
            { speaker: 'stonkPork', text: 'The Flip? Sounds like a pancake move, bro.' },
            { speaker: 'porkBondy', text: 'Nah, it’s a banking app that helps you save smarter. You can track your cash, learn about stocks, even get personalized finance tips. They say it makes saving feel like a game.' },
            { speaker: 'snoopDog', text: 'Yo, my lil piggies—less talk, more work. Them spreadsheets ain’t gonna flip themselves.' },
            { speaker: 'stonkPork', text: 'Aight, aight, we back at it, Uncle Snoop.' },
            { speaker: 'narrator', text: 'But curiosity gets the best of him. He clicks on the Capital One Flip App link on his monitor. The screen flickers. The office distorts. Everything pixelates— WHOOOOSH—' },
            { speaker: 'narrator', text: 'And just like that… Stonk Pork was flipped into another world.' },
        ]
    },
    {
        title: 'Chapter 2: Enter the Game',
        background: 'bg-blue-900',
        lines: [
            { speaker: 'narrator', text: 'Stonk Pork lands face-first on a glowing floor of dollar bills.' },
            { speaker: 'yapDollar', text: 'Yo! Watch your snout, newcomer! Name’s Yap. Yap Dollar. You’re inside The Flip Game, where your choices in finance decide your fate.' },
            { speaker: 'stonkPork', text: 'Wait—so this ain’t a dream? How do I get out?' },
            { speaker: 'yapDollar', text: 'Only one way out, my porky pal. You gotta hit the top.' },
            { speaker: 'stonkPork', text: 'The top? Like... top what?' },
            { speaker: 'yapDollar', text: 'Top of the charts, baby! You gotta climb the market ladder using smart moves and knowledge. Buy low, sell high, learn your fundamentals.' },
            { speaker: 'narrator', text: 'Yap Dollar shows two holographic stock charts floating in midair.' },
            { speaker: 'yapDollar', text: 'Alright, hotshot. Which chart’s heading higher?' },
            {
                speaker: 'stonkPork',
                text: 'Stonk squints. He picks one—wrong.',
                choice: {
                    question: 'Which stock do you choose?',
                    options: [
                        { text: 'Stock A: Apple', money: -200, knowledge: -10 },
                        { text: 'Stock B: Goldman Sachs', money: 200, knowledge: 10 }
                    ]
                }
            },
            { speaker: 'yapDollar', text: 'Oof! You just bought into a hype stock. Gotta do your DD—Due Diligence. Look at the Earnings Per Share, growth rate, company news—that’s how you value a play.' },
            { speaker: 'stonkPork', text: 'Dang, I didn’t know stocks had homework.' },
            { speaker: 'yapDollar', text: 'Everything’s got homework if you want that cheddar, champ.' },
        ]
    },
    {
        title: 'Chapter 3: The Stonk Pork',
        background: 'bg-purple-900',
        lines: [
            { speaker: 'stonkPork', text: 'Yo, who dis?' },
            { speaker: 'johnPork', text: 'Bro—it’s me, Chungus! Your cousin John Pork just blew up his portfolio. Went all-in on options. Got liquidated, fam.' },
            { speaker: 'stonkPork', text: 'Oh no, not John Pork… tell him I’m on it.' },
            { speaker: 'narrator', text: 'Cut to John Pork, sitting in a pixelated café holding a phone, surrounded by red charts.' },
            { speaker: 'johnPork', text: 'I thought options were a shortcut to the moon, bro.' },
            { speaker: 'stonkPork', text: 'Nah, man. Sometimes the moon got claws. You gotta play it smart—diversify, check out bonds, and use that Capital One 360 Savings Account. Compound interest, baby—it’s like free money growing while you sleep.' },
            { speaker: 'snoopDog', text: 'Yo, Stonk! You preaching finance now instead of pushing paper?' },
            { speaker: 'stonkPork', text: 'Yeah, Snoop. I’m getting down on that fiscal grind.' },
            { speaker: 'snoopDog', text: 'Aight then, let’s test that knowledge. Pop quiz, playa—' },
        ]
    },
    {
        title: 'Chapter 4: The Market Never Sleeps',
        background: 'bg-indigo-900',
        lines: [
            { speaker: 'narrator', text: 'After the chaos of The Flip Game, Stonk Pork’s screen shatters into a swirl of data that reforms into… a field of maize. The air smells of earth and roasted cacao. He blinks, dazed, then hears a familiar voice.' },
            { speaker: 'johnPork', text: 'Cousin! You finally made it to Ecuador, hermano!' },
            { speaker: 'stonkPork', text: 'Bro! What happened to Wall Street?' },
            { speaker: 'johnPork', text: 'I left it. Markets move fast, but life here—life teaches patience. I trade to grow the village now, not just my ego.' },
            { speaker: 'narrator', text: 'Stonk Pork looks around at the villagers. They’re farming… but also watching live Forex charts on a projector. Currency pairs flicker: USD/EUR, JPY/GBP, BTC/ETH.' },
            { speaker: 'johnPork', text: 'See, cousin—money never sleeps. The Forex market runs 24 hours, from London to Tokyo to New York. When one closes, another opens. It’s the heartbeat of the world.' },
            { speaker: 'johnPork', text: 'Patience, humility, discipline—that’s the real alpha. Chasing quick gains makes you a slave to emotion. But when you respect the market… it rewards you in time.' },
            { speaker: 'stonkPork', text: 'You sound like a monk with a portfolio.' },
            { speaker: 'johnPork', text: 'Nah, just a farmer with a trading view account.' },
            { speaker: 'ecuadorKnuckles', text: 'Ah! You must be Stonk Pork, the one who flipped through the system. John speaks of your curiosity.' },
            { speaker: 'stonkPork', text: 'And you must be the finance advisor. Heard you’re the legend of the Andes.' },
            { speaker: 'ecuadorKnuckles', text: 'I am Ecuador Knuckles, cousin of Ugandan Knuckles. I show da whey… to the index funds.' },
            { speaker: 'ecuadorKnuckles', text: 'In the jungle of the market, there are many paths. Some sprint—others climb slowly. I hold ETFs, index funds, LEAPs—long-term options that stretch like vines to the future.' },
            { speaker: 'stonkPork', text: 'That’s poetic, but what happens when you miss the short-term rockets?' },
            { speaker: 'ecuadorKnuckles', text: 'Sometimes I get tempted by the moon… and end up with crater hands.' },
            { speaker: 'stonkPork', text: 'Then maybe I can help. You’ve got the long-term vision, but I can teach you how to ride the waves without wiping out.' },
            { speaker: 'stonkPork', text: 'Let’s talk options greeks: Delta, Gamma, Theta, Vega. They tell you how your option breathes, how it feels the market move. You don’t fight the waves—you surf them.' },
            { speaker: 'ecuadorKnuckles', text: 'Ahhh… so the Greeks are the wind behind the sails. I see now… long-term is the ship, Greeks are the currents.' },
            { speaker: 'stonkPork', text: 'Exactly. You blend patience with precision—that’s how you reach the top.' },
            { speaker: 'ecuadorKnuckles', text: 'Then allow me to return da whey.' },
            { speaker: 'narrator', text: 'He pulls out a golden data chip engraved with a moon and a dollar sign.' },
            { speaker: 'ecuadorKnuckles', text: 'This chip holds the coordinates to the Moon Long-Term Style. It’s the secret of compounding returns. Add a little discipline, and you’ll never fall again.' },
            { speaker: 'johnPork', text: 'Cousin… you’ve leveled up.' },
            { speaker: 'narrator', text: 'The night fades. The world hums. Stonk Pork looks to the sky—knowing that beyond the next sunrise lies the next chart, the next lesson. Because in this world… the market never sleeps.' },
        ]
    },
    {
        title: 'Chapter 5: Crypto in the Clouds',
        background: 'bg-gray-900',
        lines: [
            { speaker: 'narrator', text: 'After mastering patience and long-term investing in Ecuador, Stonk Pork found himself drawn to a shimmering signal from the sky—a transmission of infinite data.' },
            { speaker: 'cyberSage', text: 'You’ve seen the markets of man. Now come learn the currencies of code.' },
            { speaker: 'narrator', text: 'The sky cracks open. Data rains down. Stonk Pork is lifted by a glowing blockchain elevator.' },
            { speaker: 'cyberSage', text: 'Welcome, Stonk Pork. I am Cyber Sage—the keeper of the Chains.' },
            { speaker: 'stonkPork', text: 'Chains? Like prison chains?' },
            { speaker: 'cyberSage', text: 'No. Blockchains. The backbone of digital currency. A chain of data blocks, each recording transactions, secured by cryptography, and verified by thousands of nodes. Immutable. Transparent. Eternal.' },
            { speaker: 'saga', text: 'Each blockchain is its own world, Stonk. With its own rules, its own culture, its own story. I am Saga. I will help you navigate them.' },
            { speaker: 'stonkPork', text: 'So... it’s like a spreadsheet that everyone shares but no one can edit?' },
            { speaker: 'cyberSage', text: 'Exactly, my enlightened swine.' },
            { speaker: 'narrator', text: 'Cyber Sage waves his hand. Four holographic symbols appear: Bitcoin, Ethereum, Solana, and XRP.' },
            { speaker: 'cyberSage', text: 'First, Bitcoin—the Original Block. The Genesis. Forged in the fires of the 2008 financial crisis by the mysterious Satoshi Nakamoto. It is pure, digital gold. Limited to 21 million coins, mined by machines burning electricity to validate blocks. It is sound money, but slow, and lacks adaptability. A relic and a foundation.' },
            { speaker: 'cyberSage', text: 'Next, Ethereum: “The Smart Contract King.” It isn’t just a coin—it’s a computer for the world. It runs decentralized apps—DeFi, NFTs, DAOs. But its gas fees? Heavier than your average mortgage.' },
            { speaker: 'cyberSage', text: 'Then, Solana: “The Speed Demon.” Its gift is speed. It processes thousands of transactions per second with low fees. But with great speed comes risk—it’s young, it breaks, it restarts. Yet it represents the hunger of innovation.' },
            { speaker: 'cyberSage', text: 'And XRP: “The Banker’s Coin.” Designed for cross-border payments, XRP moves funds between banks faster than any wire system. Loved by institutions, hated by purists. Some say it’s too centralized… others say it’s the bridge between the old world and the new.' },
            { speaker: 'stonkPork', text: 'So each coin’s got its own hustle.' },
            { speaker: 'narrator', text: 'Cyber Sage snaps his fingers. A hologram forms—digital art, music, collectibles spinning in light.' },
            { speaker: 'cyberSage', text: 'Now, let us speak of NFTs—Non-Fungible Tokens. Each one a unique digital asset, recorded forever on the blockchain.' },
            { speaker: 'stonkPork', text: 'You mean, like, digital bacon pics?' },
            { speaker: 'cyberSage', text: 'In a sense—if you minted them. For creators, NFTs are a revolution. Artists earn royalties automatically each time their work is resold. Code enforces fairness—no middleman, no galleries. Just value, verified.' },
            { speaker: 'stonkPork', text: 'So it’s like every resale pays you back forever?' },
            { speaker: 'cyberSage', text: 'Exactly. Ownership redefined.' },
            { speaker: 'narrator', text: 'The platform transforms into a glowing digital farm—plants made of tokens grow under beams of neon light.' },
            { speaker: 'cyberSage', text: 'Welcome to the realm of DeFi—Decentralized Finance. Here, money works for you. We plant crypto seeds and harvest yields.' },
            { speaker: 'stonkPork', text: 'You mean… farming money?' },
            { speaker: 'saga', text: 'Think of it as putting your money to work in a garden. Staking is like planting a tree that gives you fruit every season. But beware of weeds... and storms.' },
            { speaker: 'cyberSage', text: 'Indeed. Platforms like Aave, Osmosis, Curve—they allow you to lend, borrow, and stake your assets. When you stake, you lock tokens into the network, helping secure it. In return—you earn yields.' },
            { speaker: 'narrator', text: 'He demonstrates by staking ETH into a glowing vault. Numbers climb: +5%, +8%, +12%.' },
            { speaker: 'cyberSage', text: 'Yield farming is risk and reward intertwined. The higher the yield, the deeper the danger. Protocol hacks, impermanent loss… the DeFi jungle is not for the faint of snout.' },
            { speaker: 'stonkPork', text: 'So… patience and caution, huh? Just like my cousin John said.' },
            { speaker: 'cyberSage', text: 'Exactly. The same virtues apply—only the playing field changed. Whether stocks or chains, knowledge protects you from greed.' },
            { speaker: 'cyberSage', text: 'Remember, Stonk Pork—every chain is built by people seeking truth, freedom, or profit. But the market mirrors the soul. If greed drives you, you’ll drown. If purpose guides you, you’ll thrive.' },
            { speaker: 'cyberSage', text: 'These are tools. Not gods. Learn them, respect them, and you may yet reach the moon—not in price, but in wisdom.' },
            { speaker: 'cyberSage', text: 'Take this, the Token of Continuum. It tracks no value… only growth of the mind.' },
            { speaker: 'stonkPork', text: 'Thank you, Sage. I’ll stake it in my heart.' },
            { speaker: 'narrator', text: 'And so, Stonk Pork learned the digital art of finance—the power and peril of decentralized dreams. But as his screen shimmered, a new alert flashed before him: “ALERT: MARKET CRASH INCOMING.”' },
            { speaker: 'narrator', text: 'The charts trembled. The greed cycle turned. The question remained… can wisdom survive the dip? To be continued… in Chapter 6: “The Crash and the Calm.”' }
        ]
    },
    {
        title: 'Chapter 6: The Crash and the Calm',
        background: 'bg-red-900',
        lines: [
            { speaker: 'narrator', text: 'Stonk Pork had made it. The Moon—the top of the charts. His wallets overflowed, his coins multiplied, his NFTs shimmered like jewels. But something about the silence between the stars felt… wrong.' },
            { speaker: 'stonkPork', text: 'Everyone’s rich. No one’s worried. Even the janitor’s flipping JPEGs. That’s gotta mean something, right?' },
            { speaker: 'saga', text: 'When the taxi driver gives you stock tips, its time to sell. It is a sign of market euphoria, little pig.' },
            { speaker: 'whaleWhisperer', text: 'It means the cycle nears its turn, my pig.' },
            { speaker: 'whaleWhisperer', text: 'The higher you climb, the thinner the air. The market feeds on fear and greed—too much of either, and balance is lost.' },
            { speaker: 'narrator', text: 'He waves his staff; holograms form—of history itself. The 2020 pandemic crash, the stimulus-fueled recovery, the NFT mania of 2021.' },
            { speaker: 'whaleWhisperer', text: 'When too many enter the market chasing profit—not understanding value—a bubble forms. Every tulip, every tech boom, every token shares the same fate. Euphoria first… silence later.' },
            { speaker: 'narrator', text: 'The Moon trembles. Charts flicker red. Alarms blare. A loud roar echoes—panic selling.' },
            { speaker: 'stonkPork', text: 'It’s happening—the crash!' },
            { speaker: 'whaleWhisperer', text: 'Yes. This is the cleansing. When speculation burns away and truth remains. Hold strong, observe, and remember your lessons.' },
            { speaker: 'stonkPork', text: 'But how do I survive?' },
            { speaker: 'saga', text: 'By holding wisdom, not just wealth. Remember your teachings: Do your due diligence, be patient, think long-term, and understand the system.' },
            { speaker: 'whaleWhisperer', text: 'The market always recovers, but it never forgives ignorance. Those who seek only the moon will miss the stars. Learn to see beyond price—to purpose.' },
            { speaker: 'narrator', text: 'The wizard vanishes, leaving behind a glowing pearl labeled "Cycle of Wisdom."' },
            { speaker: 'narrator', text: 'And in that silence, Stonk Pork understood: wealth wasn’t the goal—it was a tool. The market wasn’t an enemy—it was a mirror. The crash was not his end—it was his education.' },
            { speaker: 'stonkPork', text: 'The Whale Whisperer was right… every fall is just the start of a new climb.' },
            { speaker: 'narrator', text: 'To be continued… in Chapter 7: “The Rebuild.”' }
        ]
    },
    {
        title: 'Chapter 7: The Rebuild',
        background: 'bg-gray-700',
        lines: [
            { speaker: 'narrator', text: 'The great crash had come and gone. The euphoria had dried up. Fortunes vanished faster than a meme coin on a Tuesday morning.' },
            { speaker: 'stonkPork', text: 'I told them… I told them to take profits. But greed’s gravity pulls harder than wisdom ever does.' },
            { speaker: 'narrator', text: 'Holograms appear of his old friends — each one representing a region of the global economy, renamed as allegories.' },
            { speaker: 'yenju', text: 'My portfolio’s frozen. Energy costs skyrocketed. Inflation… it’s eating everything.' },
            { speaker: 'narrator', text: 'The crash wasn’t digital alone. It rippled through the world. Economies became mirrors of their traders: overleveraged, overconfident, and underprepared.' },
            { speaker: 'narrator', text: 'The friends gather in a small lunar café made of repurposed server racks. The mood is somber. They look to Stonk Pork.' },
            { speaker: 'yenju', text: 'You warned us, man. You said, ‘pigs get fed, hogs get slaughtered.’ Guess I got roasted.' },
            { speaker: 'stonkPork', text: 'The market humbles everyone eventually. But what matters isn’t how high you flew — it’s what you do after you crash.' },
            { speaker: 'stonkPork', text: 'Listen. Here’s the path forward: Diversify. Never hold your entire dream in one coin or country. Take profits. The moon’s not for holding — it’s for visiting. Study fundamentals. Risk management. Cash is a position. When others panic, liquidity becomes your sword.' },
            { speaker: 'yenju', text: 'So it’s not about timing the moon… it’s about surviving the gravity.' },
            { speaker: 'stonkPork', text: 'Exactly. The top isn’t a number — it’s a mindset.' },
            { speaker: 'narrator', text: 'From ashes, understanding grew. Wealth was redefined — not as numbers, but as knowledge. The friends lost money… but found meaning.' },
            { speaker: 'narrator', text: 'The group stands on the lunar ridge, looking back at Earth glowing blue.' },
            { speaker: 'yenju', text: 'So, what now?' },
            { speaker: 'stonkPork', text: 'Now we rebuild — smarter. This time, we don’t just flip coins… we build foundations.' },
            { speaker: 'yenju', text: 'And when the next bull run comes?' },
            { speaker: 'stonkPork', text: 'We’ll ride it. But we’ll know when to land.' },
            { speaker: 'narrator', text: 'And thus began The Rebuild — a chapter not of profit, but of purpose. The market had spoken, the lesson learned: “Wisdom isn’t found in the peaks of the chart, but in the patience to climb again.”' }
        ]
    },
    {
        title: 'Chapter 8: Bulls vs. Bears',
        background: 'bg-green-900',
        lines: [
            { speaker: 'cyberSage', text: 'You’ve seen emotion. Now learn its footprint—the patterns that emotion leaves behind.' },
            { speaker: 'narrator', text: 'Holograms bloom: green and red candles dance in the air.' },
            { speaker: 'cyberSage', text: 'Candlesticks show the battle. Long green bodies mean the bulls are in control. Long red bodies show the bears striking back. A Doji candle? That is indecision; a balance of fear and greed.' },
            { speaker: 'cyberSage', text: 'Now, the RSI (Relative Strength Index). When RSI is over 70, bulls are overextended—expect exhaustion. When RSI is under 30, bears have overhunted—patience brings opportunity.' },
            { speaker: 'cyberSage', text: 'And the MACD (Moving Average Convergence Divergence). Two rivers of momentum. When they cross upward, energy returns. Cross downward, and momentum fades. Listen to the current, not the noise.' },
            { speaker: 'cyberSage', text: 'Finally, Support and Resistance. Support is trust; Resistance is doubt. Every breakout is faith being tested.' },
            { speaker: 'stonkPork', text: 'So RSI shows emotion, MACD shows momentum, and candles show the fight?' },
            { speaker: 'cyberSage', text: 'Precisely. When you read them together, you don’t predict—you understand. The market is interchangeable; it changes its mind as quickly as humans do.' },
            { speaker: 'narrator', text: 'The storm calms. Stonk Pork watches the charts breathe—no longer monsters, but mirrors.' }
        ]
    },
    {
        title: 'Chapter 9: The Gratitude Run',
        background: 'bg-yellow-800',
        lines: [
            { speaker: 'narrator', text: 'Lunar Dawn. The arena fades; Stonk Pork stands before a glowing bull charging upward—sign of a new bull run. The world he helped rebuild awakens to green candles. Markets recover, innovation blooms, and confidence returns—not as greed, but as growth.' },
            { speaker: 'narrator', text: 'Yenju launches a community investment fund. Lira Luxe builds sustainable energy chains. Peso Pete uses blockchain for local farmers. Yenji teaches financial literacy.' },
            { speaker: 'narrator', text: 'The bull run is different this time—measured, mindful, mature.' },
            { speaker: 'narrator', text: 'Moon Base Zero transforms into a memorial garden of data and light.' },
            { speaker: 'stonkPork', text: 'I walked through crashes and corrections, through FOMO and fear. But what mattered wasn’t the profit—it was the people who stayed. Every loss was a lesson, every dip a chance to grow. If I reached the moon, it’s because you helped me build the rocket.' },
            { speaker: 'narrator', text: 'He bows. The crowd cheers softly—no hype, just respect.' },
            { speaker: 'samuelJackson', text: 'Now hold on a second, Stonk Pork! All this moon talk, crypto, and technical analysis is real cute… but lemme tell you something.' },
            { speaker: 'samuelJackson', text: 'If you never wanted to ride these emotional roller coasters—you could’ve just invested in a Capital One 360 Savings Account at 5% interest and slept like a baby!' },
            { speaker: 'stonkPork', text: 'Guess the real alpha was financial discipline all along.' },
            { speaker: 'samuelJackson', text: 'Exactly. Consistency beats chaos, my porky friend.' },
            { speaker: 'narrator', text: 'Through tribulations and trials, Stonk Pork discovered that finance was never about fortune—it was about faith: faith in learning, in others, and in resilience.' },
            { speaker: 'stonkPork', text: 'The market moves on. But so do we.' },
            { speaker: 'narrator', text: 'THE END' }
        ]
    }
];
