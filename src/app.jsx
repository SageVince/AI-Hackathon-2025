import React, { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import VisualNovel from "./components/VisualNovel";

const knowledgeTabs = [
  {
    title: "Safe Investing Principles",
    content: `
Diversification is your defense against risk — never invest more than 5–10% in one stock.
Keep 3–6 months of expenses in a high-yield savings account before investing.
Use Dollar-Cost Averaging to invest regularly instead of lump sums.
`,
  },
  {
    title: "Brokerages",
    content: `
Top brokerages like Fidelity, Vanguard, and Schwab offer zero commissions.
Roth IRAs grow tax-free; 401(k)s give pre-tax benefits.
Your brokerage account is insured by SIPC up to $500,000.
`,
  },
  {
    title: "Bonds and Yields",
    content: `
Bonds are loans to governments or companies.
When rates rise, bond prices fall.
Use a bond ladder for stable income and risk reduction.
`,
  },
  {
    title: "Compound Interest",
    content: `
The 8th wonder of the world — compound interest!
Rule of 72: Divide 72 by your rate to find how long it takes to double your money.
Start early — time beats timing.
`,
  },
  {
    title: "Cryptocurrency",
    content: `
Crypto is high-risk. Only invest what you can afford to lose.
Never leave crypto on exchanges — use hardware wallets.
Avoid FOMO and speculative coins.
`,
  },
];

const quizQuestions = [
  {
    category: "Safe Investing Principles",
    question: "If you're 30 years old, what’s the classic stock allocation formula suggest?",
    options: ["50% stocks / 50% bonds", "80% stocks / 20% bonds", "30% stocks / 70% bonds"],
    correct: "80% stocks / 20% bonds",
    explanation: "Subtract your age from 110 → 110 - 30 = 80% stocks, 20% bonds.",
  },
  {
    category: "Bonds and Yields",
    question: "When interest rates rise, what happens to existing bond prices?",
    options: ["They rise", "They fall", "They stay the same"],
    correct: "They fall",
    explanation: "Bond prices move inversely to interest rates.",
  },
  {
    category: "Compound Interest",
    question: "At 8% return, about how long does it take to double your money?",
    options: ["6 years", "9 years", "12 years"],
    correct: "9 years",
    explanation: "Rule of 72 → 72 ÷ 8 = 9 years.",
  },
  {
    category: "Cryptocurrency",
    question: "What’s the golden rule of crypto investing?",
    options: [
      "Invest as much as possible",
      "Use margin for faster gains",
      "Only invest what you can afford to lose",
    ],
    correct: "Only invest what you can afford to lose",
    explanation: "Crypto is volatile; treat it as speculation, not a core investment.",
  },
];

function Quiz({ backToMenu }) {
  const [phase, setPhase] = useState("knowledge"); // "knowledge" | "quiz" | "results"
  const [tab, setTab] = useState(0);
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);

  const progress = ((tab + 1) / knowledgeTabs.length) * 100;
  const quizProgress = ((step + 1) / quizQuestions.length) * 100;

  const nextTab = () => {
    if (tab < knowledgeTabs.length - 1) setTab(tab + 1);
    else setPhase("quiz");
  };

  const handleSelect = (opt) => {
    setSelected(opt);
    if (opt === quizQuestions[step].correct) {
      setScore((s) => s + 1);
      confetti({ particleCount: 80, spread: 70 });
    }
  };

  const nextQuestion = () => {
    if (step < quizQuestions.length - 1) {
      setStep(step + 1);
      setSelected(null);
    } else {
      setPhase("results");
    }
  };

  const restart = () => {
    setPhase("knowledge");
    setTab(0);
    setStep(0);
    setScore(0);
    setSelected(null);
  };

  return (
    <div style={styles.container}>
        <button style={styles.backButton} onClick={backToMenu}>
            Back to Menu
        </button>
      <div style={styles.card}>
        {phase === "knowledge" && (
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={styles.fadeIn}
          >
            <h1 style={styles.title}>📚 Learn Before You Flip</h1>
            <h2 style={styles.category}>{knowledgeTabs[tab].title}</h2>
            <p style={styles.text}>{knowledgeTabs[tab].content}</p>
            <button style={styles.nextButton} onClick={nextTab}>
              {tab === knowledgeTabs.length - 1 ? "Start Quiz ➜" : "Next Topic ➜"}
            </button>

            <div style={styles.progressBar}>
              <div style={{ ...styles.progressFill, width: `${progress}%` }}></div>
            </div>
          </motion.div>
        )}

        {phase === "quiz" && (
          <>
            <h1 style={styles.title}>💸 The Flip Quiz</h1>
            <h2 style={styles.category}>{quizQuestions[step].category}</h2>
            <p style={styles.question}>{quizQuestions[step].question}</p>
            {quizQuestions[step].options.map((opt) => (
              <motion.button
                key={opt}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleSelect(opt)}
                disabled={!!selected}
                style={{
                  ...styles.option,
                  ...(selected
                    ? opt === quizQuestions[step].correct
                      ? styles.correct
                      : opt === selected
                      ? styles.incorrect
                      : styles.disabled
                    : {}),
                }}
              >
                {opt}
              </motion.button>
            ))}

            {selected && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                style={styles.explanationBox}
              >
                <p style={styles.explanation}>{quizQuestions[step].explanation}</p>
                <button style={styles.nextButton} onClick={nextQuestion}>
                  Next ➜
                </button>
              </motion.div>
            )}

            <div style={styles.progressBar}>
              <div style={{ ...styles.progressFill, width: `${quizProgress}%` }}></div>
            </div>
          </>
        )}

        {phase === "results" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            style={styles.results}
          >
            <h2 style={styles.finalTitle}>🎉 You Completed The Flip!</h2>
            <p style={styles.finalScore}>
              You scored <b>{score}</b> / {quizQuestions.length}
            </p>
            <button style={styles.restartButton} onClick={restart}>
              Restart 🔁
            </button>
            <p style={styles.footer}>
              Keep learning — knowledge compounds like interest 💡
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default function App() {
    const [view, setView] = useState("menu");

    if (view === "quiz") {
        return <Quiz backToMenu={() => setView("menu")} />;
    }

    if (view === "visualNovel") {
        return <VisualNovel backToMenu={() => setView("menu")} />;
    }

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h1 style={styles.title}>Main Menu</h1>
                <button style={styles.menuButton} onClick={() => setView("quiz")}>
                    Start Quiz
                </button>
                <button style={styles.menuButton} onClick={() => setView("visualNovel")}>
                    Start Visual Novel
                </button>
            </div>
        </div>
    );
}

const styles = {
    container: {
      background: "linear-gradient(135deg, #1e3a8a, #4c1d95, #0f172a)",
      color: "white",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "system-ui, sans-serif",
      padding: "20px",
    },
    card: {
      background: "rgba(17, 24, 39, 0.85)",
      padding: "30px",
      borderRadius: "20px",
      boxShadow: "0 0 30px rgba(0,0,0,0.5)",
      maxWidth: "600px",
      width: "100%",
      textAlign: "center",
    },
    title: { fontSize: "1.8rem", marginBottom: "0.5rem" },
    category: { color: "#93c5fd", fontSize: "1.2rem", marginBottom: "1rem" },
    text: { color: "#e0e7ff", whiteSpace: "pre-line", lineHeight: "1.6" },
    question: { fontSize: "1.2rem", margin: "1rem 0" },
    option: {
      background: "#334155",
      color: "white",
      border: "none",
      padding: "12px",
      borderRadius: "10px",
      width: "100%",
      margin: "8px 0",
      cursor: "pointer",
      fontSize: "1rem",
      transition: "all 0.2s ease",
    },
    correct: { background: "#16a34a" },
    incorrect: { background: "#dc2626" },
    disabled: { opacity: 0.6 },
    nextButton: {
      background: "#6366f1",
      color: "white",
      border: "none",
      padding: "10px 20px",
      borderRadius: "8px",
      cursor: "pointer",
      marginTop: "15px",
    },
    progressBar: {
      marginTop: "20px",
      height: "8px",
      width: "100%",
      background: "#1e293b",
      borderRadius: "8px",
    },
    progressFill: {
      height: "100%",
      background: "#60a5fa",
      borderRadius: "8px",
    },
    explanationBox: { marginTop: "20px" },
    explanation: { color: "#a5b4fc", fontStyle: "italic" },
    results: { textAlign: "center" },
    finalTitle: { fontSize: "2rem", marginBottom: "0.5rem" },
    finalScore: { fontSize: "1.2rem", marginBottom: "1rem" },
    restartButton: {
      background: "#10b981",
      padding: "10px 20px",
      border: "none",
      borderRadius: "8px",
      color: "white",
      cursor: "pointer",
    },
    footer: { marginTop: "1rem", color: "#94a3b8", fontSize: "0.9rem" },
    menuButton: {
        background: "#6366f1",
        color: "white",
        border: "none",
        padding: "10px 20px",
        borderRadius: "8px",
        cursor: "pointer",
        marginTop: "15px",
        display: "block",
        width: "100%",
    },
    backButton: {
        background: "#6366f1",
        color: "white",
        border: "none",
        padding: "10px 20px",
        borderRadius: "8px",
        cursor: "pointer",
        marginTop: "15px",
        position: "absolute",
        top: "10px",
        left: "10px",
    }
  };