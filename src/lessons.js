
export const lessons = [
  {
    id: 1,
    title: "Safe Investing Principles",
    description: "Learn the foundational principles of safe investing, including diversification, risk tolerance, and the importance of an emergency fund.",
    content: `
        <h3>Core Foundation</h3>
        <ul>
            <li><strong>Diversification:</strong> Your primary defense against risk. Never concentrate more than 5-10% of your portfolio in a single investment.</li>
            <li><strong>Asset Allocation:</strong> The classic model adjusts based on age: subtract your age from 110 to determine your stock percentage (e.g., at 30 years old: 80% stocks, 20% bonds).</li>
        </ul>
        <h3>Risk Tolerance Assessment</h3>
        <ul>
            <li><strong>Conservative:</strong> 60-70% bonds/fixed income, 30-40% stocks.</li>
            <li><strong>Moderate:</strong> 50-50 split between stocks and bonds.</li>
            <li><strong>Aggressive:</strong> 70-80% stocks, 20-30% bonds.</li>
        </ul>
        <h3>Emergency Fund First</h3>
        <p>Before investing, establish 3-6 months of living expenses in a high-yield savings account (HYSA). This prevents forced selling of investments during emergencies.</p>
        <h3>Dollar-Cost Averaging (DCA)</h3>
        <p>Instead of investing lump sums, invest fixed amounts regularly. This strategy reduces timing risk, buys more shares when prices are low, and removes emotion from decision-making.</p>
        <h3>Tax-Advantaged Accounts Priority</h3>
        <ol>
            <li><strong>401(k) up to employer match:</strong> This is free money and a 100% immediate return.</li>
            <li><strong>Roth IRA:</strong> Tax-free growth and withdrawals in retirement.</li>
            <li><strong>Max out 401(k).</strong></li>
            <li><strong>HSA (Health Savings Account):</strong> Offers a triple tax advantage if you are eligible.</li>
            <li><strong>Taxable Brokerage Accounts.</strong></li>
        </ol>
    `,
    quiz: [
        { question: "What is the primary defense against risk in investing?", options: ["Market timing", "Concentrated bets", "Diversification", "Leverage"], answer: "Diversification" },
        { question: "According to the classic model, a 40-year-old should have what percentage of their portfolio in stocks?", options: ["60%", "70%", "80%", "50%"], answer: "70%" },
        { question: "Before investing, you should have how many months of living expenses in a high-yield savings account?", options: ["1-2 months", "3-6 months", "7-9 months", "12 months"], answer: "3-6 months" },
        { question: "What is the main benefit of Dollar-Cost Averaging (DCA)?", options: ["Guarantees higher returns", "Eliminates all risk", "Reduces timing risk and emotional decision-making", "Is only for expert traders"], answer: "Reduces timing risk and emotional decision-making" },
        { question: "Which account should be your first priority if your employer offers a match?", options: ["Roth IRA", "Taxable Brokerage", "401(k)", "HSA"], answer: "401(k)" },
    ]
  },
  {
    id: 2,
    title: "Brokerages: Choosing and Using",
    description: "Discover the top brokerages, understand different account types (Taxable, Roth IRA, Traditional), and learn about brokerage safety.",
    content: `
        <h3>Top-Tier Brokerages</h3>
        <ul>
            <li><strong>Fidelity:</strong> Zero commissions, excellent research tools, great for beginners.</li>
            <li><strong>Charles Schwab:</strong> Great checking account features and international investing options.</li>
            <li><strong>Vanguard:</strong> Best for buy-and-hold index investors, lowest expense ratios on proprietary funds.</li>
            <li><strong>Interactive Brokers:</strong> Best for professional and international traders, lowest margin rates.</li>
        </ul>
        <h3>Account Types</h3>
        <ul>
            <li><strong>Taxable Brokerage:</strong> No contribution limits, full liquidity. You pay capital gains tax.</li>
            <li><strong>Roth IRA:</strong> Tax-free growth and withdrawals in retirement. Contributions can be withdrawn anytime penalty-free. Income limits apply.</li>
            <li><strong>Traditional IRA/401(k):</strong> Tax deduction now, but you pay taxes on withdrawals in retirement.</li>
        </ul>
        <h3>Brokerage Safety</h3>
        <p>All major brokerages have SIPC insurance covering up to $500,000 in securities ($250,000 for cash). If a brokerage fails, your investments are typically transferred to another institution. Your assets are held separately from the brokerage's own funds.</p>
    `,
    quiz: [
        { question: "Which brokerage is known for its low-cost index funds and is favored by buy-and-hold investors?", options: ["Fidelity", "Charles Schwab", "Vanguard", "Interactive Brokers"], answer: "Vanguard" },
        { question: "What does SIPC insurance cover up to?", options: ["$1,000,000 in cash", "$500,000 in securities", "$100,000 in gold", "Unlimited coverage"], answer: "$500,000 in securities" },
        { question: "Which account offers tax-free growth and withdrawals in retirement?", options: ["Traditional IRA", "Taxable Brokerage", "Roth IRA", "401(k)"], answer: "Roth IRA" },
        { question: "What is a major advantage of a taxable brokerage account?", options: ["Tax-free withdrawals", "No contribution limits", "Guaranteed returns", "No market risk"], answer: "No contribution limits" },
        { question: "If a brokerage firm fails, what happens to your investments?", options: ["You lose everything", "They are sold for cash", "They are transferred to another institution", "The government reimburses you in full"], answer: "They are transferred to another institution" },
    ]
  },
  {
    id: 3,
    title: "Bonds and Yields",
    description: "Understand bond fundamentals, the different types of bonds, and how yields are calculated.",
    content: `
        <h3>Bond Fundamentals</h3>
        <p>Bonds are loans you make to governments or corporations. You receive the principal back at maturity and coupon (interest) payments. When interest rates rise, existing bond prices fall, and vice versa.</p>
        <h3>Types of Bonds</h3>
        <ul>
            <li><strong>U.S. Treasury Securities:</strong> The safest type of bond, backed by the U.S. government. Includes T-Bills, T-Notes, T-Bonds, and TIPS.</li>
            <li><strong>Corporate Bonds:</strong> Higher yields than Treasuries but come with credit risk based on the company's financial health.</li>
            <li><strong>Municipal Bonds:</strong> Issued by state/local governments. Often tax-exempt from federal taxes.</li>
        </ul>
        <h3>Bond Funds vs. Individual Bonds</h3>
        <p>Individual bonds offer a guaranteed return of principal if held to maturity. Bond funds offer diversification but their Net Asset Value (NAV) fluctuates and they have no maturity date.</p>
    `,
    quiz: [
        { question: "When interest rates rise, what happens to the price of existing bonds?", options: ["They rise", "They fall", "They stay the same", "They double"], answer: "They fall" },
        { question: "Which type of bond is generally considered the safest?", options: ["Junk Bonds", "Corporate Bonds", "U.S. Treasury Securities", "Municipal Bonds"], answer: "U.S. Treasury Securities" },
        { question: "What is a major benefit of Municipal Bonds for high earners?", options: ["They have the highest yields", "They are exempt from federal taxes", "They are insured by the FDIC", "They are risk-free"], answer: "They are exempt from federal taxes" },
        { question: "What is a key difference between an individual bond and a bond fund?", options: ["Bond funds are riskier", "Individual bonds have a set maturity date", "Only funds pay interest", "Individual bonds can't be sold"], answer: "Individual bonds have a set maturity date" },
        { question: "What does YTM stand for in the context of bonds?", options: ["Yearly Taxable Money", "Yield To Maturity", "Yesterday's Top Mover", "Yearly Treasury Market"], answer: "Yield To Maturity" }
    ]
  },
  {
    id: 4,
    title: "Long-Term Investment Strategies",
    description: "Explore foundational long-term strategies like index funds, target-date funds, and dividend investing.",
    content: `
        <h3>Index Funds: The Foundation</h3>
        <p>The "Three-Fund Portfolio" is a classic strategy providing maximum diversification with minimal costs. It typically includes a U.S. Total Stock Market fund, a Total International Stock fund, and a Total Bond Market fund.</p>
        <h3>Target-Date Funds (TDFs)</h3>
        <p>TDFs are an all-in-one solution that automatically rebalances and becomes more conservative as your target retirement year approaches. They are designed to be a simple, set-it-and-forget-it option.</p>
        <h3>Dividend Investing</h3>
        <p>This strategy focuses on buying stocks that pay regular dividends. DRIP (Dividend Reinvestment Plans) automatically reinvests those dividends to buy more shares, dramatically accelerating compound growth.</p>
        <h3>Rebalancing</h3>
        <p>Review your portfolio annually. If your asset allocation has drifted from your target (e.g., from 70/30 stocks/bonds to 80/20), sell the overweight asset and buy the underweight one to restore balance. This enforces a "buy low, sell high" discipline.</p>
    `,
    quiz: [
        { question: "What is a common name for the simple, diversified, three-fund index portfolio?", options: ["The Buffet Method", "The Bogleheads Approach", "The Lynch Strategy", "The Graham Technique"], answer: "The Bogleheads Approach" },
        { question: "What is a key advantage of index funds over actively managed funds?", options: ["Guaranteed returns", "Higher dividend payments", "Low expense ratios", "No risk of loss"], answer: "Low expense ratios" },
        { question: "What does a Target-Date Fund automatically do over time?", options: ["Increase its risk level", "Focus on a single stock", "Become more conservative", "Only invest in bonds"], answer: "Become more conservative" },
        { question: "What is the primary goal of rebalancing your portfolio annually?", options: ["To maximize short-term gains", "To maintain your target asset allocation", "To eliminate all investment risk", "To concentrate on the best-performing asset"], answer: "To maintain your target asset allocation" },
        { question: "What does DRIP stand for in dividend investing?", options: ["Dividend Risk and Insurance Policy", "Dividend Reinvestment Plan", "Direct Return Investment Product", "Daily Real-time Investment Program"], answer: "Dividend Reinvestment Plan" }
    ]
  },
   {
    id: 5,
    title: "Real Estate Investment",
    description: "Learn about investing in primary residences, rental properties, and REITs.",
    content: `
        <h3>Primary Residence</h3>
        <p>While a home is a place to live, it's also a leveraged investment. The <strong>28/36 Rule</strong> is a guide for affordability: your housing costs should be ≤ 28% of your gross monthly income, and total debt ≤ 36%.</p>
        <h3>Rental Properties</h3>
        <p>The <strong>1% Rule</strong> is a guideline suggesting the gross monthly rent should be at least 1% of the property's purchase price. Remember to account for all expenses: mortgage, taxes, insurance, maintenance (1-2% of property value annually), vacancy (5-10%), and capital expenditures (new roof, HVAC).</p>
        <h3>Real Estate Investment Trusts (REITs)</h3>
        <p>REITs are companies that own or finance income-producing real estate. They allow you to invest in a diversified portfolio of properties and are traded on stock exchanges, providing liquidity.</p>
        <ul>
            <li><strong>Equity REITs:</strong> Own properties.</li>
            <li><strong>Mortgage REITs:</strong> Invest in mortgages.</li>
        </ul>
    `,
    quiz: [
        { question: "What does the '1% Rule' in real estate investing suggest?", options: ["Your down payment should be 1%", "The property should appreciate by 1% annually", "Monthly rent should be at least 1% of the purchase price", "The interest rate should be 1%"], answer: "Monthly rent should be at least 1% of the purchase price" },
        { question: "Which of the following is an example of a capital expenditure in a rental property?", options: ["Monthly electricity bill", "Replacing a broken doorknob", "Replacing the entire roof", "Repainting a single room"], answer: "Replacing the entire roof" },
        { question: "What does REIT stand for?", options: ["Real Equity and Investment Trust", "Real Estate Investment Trust", "Rapid Equity Investment Tool", "Real Estate Income and Tax"], answer: "Real Estate Investment Trust" },
        { question: "According to the 28/36 rule, your total debt payments should not exceed what percentage of your gross monthly income?", options: ["28%", "36%", "40%", "50%"], answer: "36%" },
        { question: "What is a major benefit of publicly-traded REITs for investors?", options: ["Guaranteed rental income", "They are tax-free", "Liquidity (they trade like stocks)", "Physical ownership of property"], answer: "Liquidity (they trade like stocks)" }
    ]
  },
  {
    id: 6,
    title: "Compound Interest: The Eighth Wonder",
    description: "Understand the powerful force of compound interest and how it is the key to building wealth over time.",
    content: `
        <h3>The Mathematics of Wealth</h3>
        <p>Compound interest is the interest you earn on your initial principal plus the accumulated interest from previous periods. The formula is A = P(1 + r/n)^(nt).</p>
        <p>A simple example: $10,000 invested at 8% annually for 40 years becomes $217,245. The power is in <strong>TIME</strong>, not timing the market.</p>
        <h3>Rule of 72</h3>
        <p>The Rule of 72 is a quick way to estimate how long it will take for an investment to double. Simply divide 72 by the annual interest rate. For example, an investment with an 8% return will double in approximately 9 years (72 / 8 = 9).</p>
        <h3>Monthly Contribution Impact</h3>
        <p>Consistent contributions are supercharged by compounding. Investing $500 per month at an 8% return can grow to over $745,000 in 30 years.</p>
    `,
    quiz: [
        { question: "What is the 'Rule of 72' used to estimate?", options: ["Your credit score", "How long it takes for an investment to double", "Your tax bracket", "The best stocks to buy"], answer: "How long it takes for an investment to double" },
        { question: "In the compound interest formula A = P(1 + r/n)^(nt), what does 't' represent?", options: ["The tax rate", "The total amount", "Time in years", "The principal investment"], answer: "Time in years" },
        { question: "What is the most critical factor for maximizing compound interest?", options: ["Timing the market perfectly", "Starting with a large sum", "A high-risk tolerance", "Starting early and investing for a long time"], answer: "Starting early and investing for a long time" },
        { question: "Which factor accelerates compound growth dramatically when investing in dividend stocks?", options: ["Selling dividends for cash", "Only investing in high-yield stocks", "Reinvesting dividends (DRIP)", "Waiting for dividends to get larger"], answer: "Reinvesting dividends (DRIP)" },
        { question: "What is Sequence of Returns Risk?", options: ["The risk that your returns are not in the right order", "The risk of receiving lower or negative returns early in a withdrawal period", "The risk that a company's financial sequence is wrong", "The risk of not getting a return"], answer: "The risk of receiving lower or negative returns early in a withdrawal period" }
    ]
  },
  {
    id: 7,
    title: "Cryptocurrency: High-Risk Speculation",
    description: "Learn about the high-risk nature of cryptocurrency, how to store it safely, and the major types.",
    content: `
        <h3>Understanding the Asset Class</h3>
        <p>Cryptocurrencies produce no cash flows or dividends. Their value comes from supply/demand dynamics. Only invest what you can afford to lose completely (e.g., 1-5% of your portfolio).</p>
        <h3>Major Cryptocurrencies</h3>
        <ul>
            <li><strong>Bitcoin (BTC):</strong> The first and most well-known crypto, often seen as "digital gold" due to its limited supply of 21 million coins.</li>
            <li><strong>Ethereum (ETH):</strong> A platform for smart contracts, dApps, and NFTs. It is the backbone of Decentralized Finance (DeFi).</li>
        </ul>
        <h3>Storage and Security</h3>
        <p><strong>"Not your keys, not your coins"</strong> is the cardinal rule. Never leave significant amounts of crypto on an exchange long-term.</p>
        <ul>
            <li><strong>Hardware Wallets (Safest):</strong> Offline devices like Ledger or Trezor that are immune to online hacks.</li>
            <li><strong>Software Wallets:</strong> Apps like MetaMask or Trust Wallet. Convenient but can be vulnerable to malware.</li>
        </ul>
        <h3>Unique Risks</h3>
        <p>Crypto is subject to extreme volatility, regulatory uncertainty, and technological risks like smart contract bugs. There are no SIPC/FDIC protections.</p>
    `,
    quiz: [
        { question: "What is the cardinal rule of crypto storage?", options: ["Always use an exchange", "Keep your password simple", "Not your keys, not your coins", "Only buy Bitcoin"], answer: "Not your keys, not your coins" },
        { question: "What is the safest method for storing cryptocurrency?", options: ["On a major exchange like Coinbase", "A software wallet on your phone", "A hardware wallet like a Ledger or Trezor", "A text file on your computer"], answer: "A hardware wallet like a Ledger or Trezor" },
        { question: "How does the IRS generally treat cryptocurrency for taxation?", options: ["As a foreign currency", "As property", "As a tax-free asset", "As a collectible"], answer: "As property" },
        { question: "Which of these is a major, well-known risk of cryptocurrency?", options: ["Low returns", "Extreme volatility", "Guaranteed losses", "FDIC insurance fees"], answer: "Extreme volatility" },
        { question: "For investing in a volatile asset like crypto, which strategy is highly recommended over lump-sum investing?", options: ["Day Trading", "Leverage Trading", "Dollar-Cost Averaging (DCA)", "Short Selling"], answer: "Dollar-Cost Averaging (DCA)" }
    ]
  },
  {
    id: 8,
    title: "Sample Investment Portfolios",
    description: "See how to combine everything you've learned into sample portfolios for different risk tolerances.",
    content: `
      <h3>Putting It All Together</h3>
      <p>These sample portfolios combine the principles of diversification and risk tolerance. They are templates that you can adapt to your specific situation.</p>
      
      <h4>Conservative Portfolio (Near or In Retirement)</h4>
      <ul>
        <li><strong>40%</strong> Total Bond Market (e.g., BND, FXNAX)</li>
        <li><strong>20%</strong> Treasury Bonds / TIPS</li>
        <li><strong>25%</strong> U.S. Total Stock Market (e.g., VTI, FSKAX)</li>
        <li><strong>10%</strong> International Stocks (e.g., VXUS, FTIHX)</li>
        <li><strong>5%</strong> REITs (e.g., VNQ, SCHH)</li>
      </ul>
      
      <h4>Moderate Portfolio (Mid-Career)</h4>
      <ul>
        <li><strong>30%</strong> Total Bond Market</li>
        <li><strong>40%</strong> U.S. Total Stock Market</li>
        <li><strong>20%</strong> International Stocks</li>
        <li><strong>5%</strong> REITs</li>
        <li><strong>5%</strong> Crypto (only if you have a high risk tolerance)</li>
      </ul>

      <h4>Aggressive Portfolio (Young Investor)</h4>
      <ul>
        <li><strong>10%</strong> Bonds</li>
        <li><strong>50%</strong> U.S. Total Stock Market</li>
        <li><strong>25%</strong> International Stocks</li>
        <li><strong>10%</strong> Individual dividend stocks / REITs</li>
        <li><strong>5%</strong> Crypto</li>
      </ul>
    `,
    quiz: [
      { question: "In a Conservative Portfolio, what asset class typically has the largest allocation?", options: ["U.S. Stocks", "International Stocks", "Bonds", "Crypto"], answer: "Bonds" },
      { question: "An Aggressive Portfolio is most suitable for what type of investor?", options: ["Someone in retirement", "A young investor with a long time horizon", "Someone who dislikes all risk", "A conservative, cautious investor"], answer: "A young investor with a long time horizon" },
      { question: "What percentage is allocated to U.S. Total Stock Market in the sample Moderate Portfolio?", options: ["30%", "40%", "50%", "60%"], answer: "40%" },
      { question: "Which two asset classes appear in all three sample portfolios?", options: ["Crypto and REITs", "Bonds and International Stocks", "U.S. Stocks and Individual Stocks", "TIPS and Bonds"], answer: "Bonds and International Stocks" },
      { question: "What is the suggested maximum allocation for cryptocurrency in the Aggressive and Moderate portfolios?", options: ["1%", "5%", "10%", "20%"], answer: "5%" }
    ]
  }
];
