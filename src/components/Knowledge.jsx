
import React, { useState } from 'react';
import CryptocurrencyGuide from './knowledge/CryptocurrencyGuide';
import OptionsGuide from './knowledge/OptionsGuide';
import ForexGuide from './knowledge/ForexGuide';
import Web3Guide from './knowledge/Web3Guide';
import DerivativesGuide from './knowledge/DerivativesGuide';
import RealEstateGuide from './knowledge/RealEstateGuide';
import LongTermTradingGuide from './knowledge/LongTermTradingGuide';
import AlternativeInvestingGuide from './knowledge/AlternativeInvestingGuide';
import MarketingGuide from './knowledge/MarketingGuide';
import MasterQuiz from './knowledge/MasterQuiz'; // Import MasterQuiz


// Import character images
import cyberSageImg from '../assets/cybersage.png';
import whaleWhispererImg from '../assets/thewhalewhisperer.png';
import yenjiImg from '../assets/yenji.png';
import johnPorkImg from '../assets/johnpork.png';
import yapDollarImg from '../assets/yapdollar.jpg';
import porkBondyImg from '../assets/porkbondy.png';
import stonkPorkImg from '../assets/stonkpork.png';
import snoopDoggImg from '../assets/snoopdog.jpg';
import ecuadorKnucklesImg from '../assets/ecuadorianknuckles.jpg';

const Knowledge = ({ theme }) => {
  const [view, setView] = useState('main'); // main, topic, quiz
  const [selectedTopic, setSelectedTopic] = useState(null);

  const guides = {
    longterm: {
        name: 'Long-Term Investing',
        title: 'Stonk Pork\'s Guide to Long-Term Investing',
        description: 'Build generational wealth with the wisdom of a seasoned investor.',
        component: LongTermTradingGuide,
        expert: 'Stonk Pork',
        expertImg: stonkPorkImg,
        questions: [
            {
                question: 'What is the primary goal of long-term investing?',
                options: ['Quick profits', 'Generational wealth', 'Day trading', 'Speculation'],
                correctAnswer: 'Generational wealth',
            },
        ]
      },
      altinvest: {
        name: 'Alternative Investing',
        title: 'Pork Bondy\'s Guide to Alternative Investing',
        description: 'Explore assets beyond the stock market like real estate, commodities, and art.',
        component: AlternativeInvestingGuide,
        expert: 'Pork Bondy',
        expertImg: porkBondyImg,
        imgStyle: { objectPosition: 'top' },
        questions: [
            {
                question: 'Which of the following is considered a commodity?',
                options: ['A stock', 'A bond', 'Gold', 'A REIT'],
                correctAnswer: 'Gold',
            },
            {
                question: 'What is a major benefit of investing in real estate?',
                options: ['High liquidity', 'Tax advantages and potential for rental income', 'Guaranteed appreciation', 'No maintenance costs'],
                correctAnswer: 'Tax advantages and potential for rental income',
            },
            {
                question: 'What is a derivative?',
                options: ['A type of stock', 'A physical commodity', 'A contract whose value is derived from an underlying asset', 'A government bond'],
                correctAnswer: 'A contract whose value is derived from an underlying asset',
            },
        ]
      },
      marketing: {
        name: 'Marketing',
        title: 'Snoop Dogg\'s Guide to Marketing',
        description: 'Learn how to build a brand and market your ideas, from a master of the craft.',
        component: MarketingGuide,
        expert: 'Snoop Dogg',
        expertImg: snoopDoggImg,
        imgStyle: { objectPosition: 'top' },
        questions: [
            {
                question: 'What is the key to building a strong brand, according to the guide?',
                options: ['Copying your competitors', 'Authenticity and a unique identity', 'Having the lowest prices', 'Spending the most on advertising'],
                correctAnswer: 'Authenticity and a unique identity',
            },
            {
                question: 'What is the importance of a product launch?',
                options: ['It doesn\'t matter', 'It\'s a chance to create hype and excitement', 'It should be done quietly', 'It\'s only for big companies'],
                correctAnswer: 'It\'s a chance to create hype and excitement',
            },
            {
                question: 'How do you stay relevant over time?',
                options: ['Never change anything', 'Adapt and evolve your brand', 'Stop marketing', 'Ignore your audience'],
                correctAnswer: 'Adapt and evolve your brand',
            },
        ]
      },
    crypto: {
      name: 'Cryptocurrency',
      title: 'Cryptocurrency Guide',
      description: 'An overview of Bitcoin, Ethereum, and more.',
      component: CryptocurrencyGuide,
      expert: 'Cyber Sage',
      expertImg: cyberSageImg,
      questions: [],
    },
    options: {
        name: 'Options Trading',
      title: 'Options Trading',
      description: 'Learn about calls, puts, and basic strategies.',
      component: OptionsGuide,
      expert: 'The Whale Whisperer',
      expertImg: whaleWhispererImg,
      questions: [],
    },
    forex: {
        name: 'Forex Trading',
      title: 'Forex Trading',
      description: 'An introduction to the foreign exchange market.',
      component: ForexGuide,
      expert: 'Yenji',
      expertImg: yenjiImg,
      questions: [],
    },
    web3: {
        name: 'Web3',
      title: 'Web3 Explained',
      description: 'Understand the next generation of the internet.',
      component: Web3Guide,
      expert: 'John Pork',
      expertImg: johnPorkImg,
      questions: [],
    },
    derivatives: {
        name: 'Derivatives',
      title: 'Financial Derivatives',
      description: 'Explore futures, options, and swaps with a master of the trade.',
      component: DerivativesGuide,
      expert: 'Yap Dollar',
      expertImg: yapDollarImg,
      questions: [],
    },
    realestate: {
        name: 'Real Estate',
      title: 'Real Estate Investing',
      description: 'Uncover hidden gems in the property market.',
      component: RealEstateGuide,
      expert: 'Ecuador Knuckles',
      expertImg: ecuadorKnucklesImg,
      questions: [],
    },
  };

  const styles = {
    container: {
        padding: '50px',
        background: theme.background,
        color: theme.text,
        minHeight: 'calc(100vh - 60px)',
    },
    title: {
        textAlign: 'center',
        fontSize: '3rem',
        fontWeight: 'bold',
        color: theme.primary,
        marginBottom: '20px',
    },
    subtitle: {
        textAlign: 'center',
        fontSize: '1.2rem',
        color: theme.textSecondary,
        marginBottom: '50px',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '30px',
    },
    card: {
        background: theme.cardBg,
        border: `1px solid ${theme.borderColor}`,
        borderRadius: '12px',
        padding: '25px',
        cursor: 'pointer',
        transition: 'transform 0.2s, box-shadow 0.2s',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
    },
    cardImage: {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        objectFit: 'cover',
        border: `3px solid ${theme.primary}`,
        marginBottom: '20px',
    },
    cardTitle: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: theme.primary,
        marginBottom: '10px',
    },
    cardDescription: {
        fontSize: '1rem',
        lineHeight: '1.6',
        flexGrow: 1,
    },
    expertName: {
        fontSize: '1rem',
        fontWeight: 'bold',
        color: theme.textSecondary,
        marginTop: '15px',
    },
    quizButton: {
        display: 'block',
        width: 'fit-content',
        margin: '40px auto 0',
        background: theme.primary,
        color: 'white',
        border: 'none',
        padding: '15px 30px',
        borderRadius: '8px',
        cursor: 'pointer',
        fontSize: '1.2rem',
        fontWeight: 'bold',
    }
  };

  const handleSelectTopic = (topicId) => {
    setSelectedTopic(topicId);
    setView('topic');
  }

  if (view === 'topic' && selectedTopic) {
      const guide = guides[selectedTopic];
      const SelectedComponent = guide.component;
      return <SelectedComponent 
                theme={theme} 
                onBack={() => setView('main')} 
                expertImg={guide.expertImg} 
                expertName={guide.expert} 
                imgStyle={guide.imgStyle}
             />
  }

  if (view === 'quiz') {
      return <MasterQuiz 
                theme={theme} 
                guides={guides} 
                onBack={() => setView('main')} 
             />
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Financial Knowledge Base</h1>
      <p style={styles.subtitle}>Learn from our team of AI experts. Choose a topic to begin.</p>
      <div style={styles.grid}>
        {Object.entries(guides).map(([id, guide]) => (
          <div key={id} style={styles.card} onClick={() => handleSelectTopic(id)}>
            <img 
              src={guide.expertImg} 
              alt={guide.expert} 
              style={{...styles.cardImage, ...guide.imgStyle}} 
            />
            <h2 style={styles.cardTitle}>{guide.title}</h2>
            <p style={styles.cardDescription}>{guide.description}</p>
            <p style={styles.expertName}>Taught by: {guide.expert}</p>
          </div>
        ))}
      </div>
      <button style={styles.quizButton} onClick={() => setView('quiz')}>
          Take a Master Quiz
      </button>
    </div>
  );
};

export default Knowledge;
