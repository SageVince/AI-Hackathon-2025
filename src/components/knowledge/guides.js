import stonkPorkImg from '../assets/stonkpork.png';
import porkBondyImg from '../assets/porkbondy.png';
import snoopDoggImg from '../assets/snoopdog.jpg';
import yapDollarImg from '../assets/yapdollar.jpg';
import johnPorkImg from '../assets/johnpork.png';
import ecuadorKnucklesImg from '../assets/ecuadorianknuckles.jpg';
import cyberSageImg from '../assets/cybersage.png';
import whaleWhispererImg from '../assets/thewhalewhisperer.png';
import yenjiImg from '../assets/yenji.png';

export const guides = {
  longterm: {
    name: 'Long-Term Investing',
    title: 'Stonk Pork\'s Guide to Long-Term Investing',
    description: 'Build generational wealth with the wisdom of a seasoned investor.',
    expert: 'Stonk Pork',
    expertImg: stonkPorkImg,
    content: [
      {
        type: 'header',
        text: 'The Two Rules of Investing',
      },
      {
        type: 'paragraph',
        text: 'Lets start with the most important lesson. There are only two rules of investing:',
      },
      {
        type: 'quote',
        text: 'Rule No. 1: Never lose money. Rule No. 2: Never forget Rule No. 1.',
      },
      {
        type: 'paragraph',
        text: 'This isnt a joke. The preservation of capital is the bedrock of successful investing. Big losses are devastating because they require even bigger gains just to get back to where you started. A 50% loss requires a 100% gain to break even. It is far more important to avoid the losers than it is to pick the winners.',
      },
      {
        type: 'header',
        text: 'The Eighth Wonder of the World: Compound Interest',
      },
      {
        type: 'paragraph',
        text: 'The most powerful force in finance is compound interest. It is the process of earning returns on your original investment, and then earning returns on those returns. Its a snowball effect that, over a long period, can turn a small sum into a fortune.',
      },
      {
        type: 'paragraph',
        text: 'Time is your greatest ally. The sooner you start, the more powerful compounding becomes. It is not about timing the market, but about time *in* the market.',
      },
      {
        type: 'header',
        text: 'Buy Wonderful Companies at Fair Prices',
      },
      {
        type: 'paragraph',
        text: 'Forget the speculative noise and the get-rich-quick schemes. The secret is to buy pieces of wonderful businesses. A stock is not a lottery ticket; its ownership in a real company.',
      },
      {
        type: 'paragraph',
        text: 'Look for businesses with a durable competitive advantage (a moat), a long history of profitability, and honest, capable management. Then, the final piece of the puzzle is to buy them at a sensible price.',
      },
      {
        type: 'header',
        text: 'The Margin of Safety',
      },
      {
        type: 'paragraph',
        text: 'This is the cornerstone of value investing. The margin of safety is the difference between the intrinsic value of a business and the price you pay for it. A large margin of safety protects you from bad luck, miscalculations, or the unpredictable swings of the market.',
      },
      {
        type: 'blockquote',
        text: 'The function of margin of safety is, in essence, that of rendering unnecessary an accurate estimate of the future. - Benjamin Graham',
      },
      {
        type: 'header',
        text: 'Further Reading',
      },
      {
        type: 'link',
        text: 'Investopedia: Value Investing',
        url: 'https://www.investopedia.com/terms/v/valueinvesting.asp',
      },
    ],
    questions: [
      {
        question: 'What is the most powerful force for wealth creation, according to the guide?',
        options: ['Day trading', 'Market timing', 'Compound interest'],
        correctAnswer: 'Compound interest',
      },
      {
        question: 'What is a margin of safety?',
        options: [
          'A type of insurance',
          'Buying a stock for significantly less than its intrinsic value',
          'Diversifying across many stocks',
        ],
        correctAnswer: 'Buying a stock for significantly less than its intrinsic value',
      },
      {
        question: 'What is the first rule of investing?',
        options: ['Maximize returns', 'Never lose money', 'Always follow the hype'],
        correctAnswer: 'Never lose money',
      },
    ],
  },
  altinvest: {
    name: 'Alternative Investing',
    title: 'Pork Bondy\'s Guide to Alternative Investing',
    description: 'Explore assets beyond the stock market like real estate, commodities, and art.',
    expert: 'Pork Bondy',
    expertImg: porkBondyImg,
    imgStyle: { objectPosition: 'top' },
    content: [],
    questions: [
      {
        question: 'Which of the following is considered a commodity?',
        options: ['A stock', 'A bond', 'Gold', 'A REIT'],
        correctAnswer: 'Gold',
      },
      {
        question: 'What is a major benefit of investing in real estate?',
        options: [
          'High liquidity',
          'Tax advantages and potential for rental income',
          'Guaranteed appreciation',
          'No maintenance costs',
        ],
        correctAnswer: 'Tax advantages and potential for rental income',
      },
      {
        question: 'What is a derivative?',
        options: [
          'A type of stock',
          'A physical commodity',
          'A contract whose value is derived from an underlying asset',
          'A government bond',
        ],
        correctAnswer: 'A contract whose value is derived from an underlying asset',
      },
    ],
  },
  marketing: {
    name: 'Marketing',
    title: 'Snoop Dogg\'s Guide to Marketing',
    description: 'Learn how to build a brand and market your ideas, from a master of the craft.',
    expert: 'Snoop Dogg',
    expertImg: snoopDoggImg,
    imgStyle: { objectPosition: 'top' },
    content: [],
    questions: [
      {
        question: 'What is the key to building a strong brand, according to the guide?',
        options: [
          'Copying your competitors',
          'Authenticity and a unique identity',
          'Having the lowest prices',
          'Spending the most on advertising',
        ],
        correctAnswer: 'Authenticity and a unique identity',
      },
      {
        question: 'What is the importance of a product launch?',
        options: [
          'It doesnt matter',
          'Its a chance to create hype and excitement',
          'It should be done quietly',
          'Its only for big companies',
        ],
        correctAnswer: 'Its a chance to create hype and excitement',
      },
      {
        question: 'How do you stay relevant over time?',
        options: ['Never change anything', 'Adapt and evolve your brand', 'Stop marketing', 'Ignore your audience'],
        correctAnswer: 'Adapt and evolve your brand',
      },
    ],
  },
  crypto: {
    name: 'Cryptocurrency',
    title: 'Cryptocurrency Guide',
    description: 'An overview of Bitcoin, Ethereum, and more.',
    expert: 'Cyber Sage',
    expertImg: cyberSageImg,
    content: [],
    questions: [],
  },
  options: {
    name: 'Options Trading',
    title: 'Options Trading',
    description: 'Learn about calls, puts, and basic strategies.',
    expert: 'The Whale Whisperer',
    expertImg: whaleWhispererImg,
    content: [],
    questions: [],
  },
  forex: {
    name: 'Forex Trading',
    title: 'Forex Trading',
    description: 'An introduction to the foreign exchange market.',
    expert: 'Yenji',
    expertImg: yenjiImg,
    content: [],
    questions: [],
  },
  web3: {
    name: 'Web3',
    title: 'Web3 Explained',
    description: 'Understand the next generation of the internet.',
    expert: 'John Pork',
    expertImg: johnPorkImg,
    content: [],
    questions: [],
  },
  derivatives: {
    name: 'Derivatives',
    title: 'Financial Derivatives',
    description: 'Explore futures, options, and swaps with a master of the trade.',
    expert: 'Yap Dollar',
    expertImg: yapDollarImg,
    content: [],
    questions: [],
  },
  realestate: {
    name: 'Real Estate',
    title: 'Real Estate Investing',
    description: 'Uncover hidden gems in the property market.',
    expert: 'Ecuador Knuckles',
    expertImg: ecuadorKnucklesImg,
    content: [],
    questions: [],
  },
};
