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
    title: 'Chapter 1: The Call',
    background: 'bg-gray-800',
    lines: [
      { speaker: 'narrator', text: 'In the neon-drenched city of Neo-Pork, Stonk Pork, a down-on-his-luck trader, receives a mysterious message.' },
      { speaker: 'stonkPork', text: 'Another day, another loss. I need a big win, or I\'m out of the game.' },
      { speaker: 'johnPork', text: 'Hey, Stonk! I got a hot tip for you. Interested?' },
      {
        speaker: 'stonkPork',
        text: 'A tip from John Pork? This could be my ticket to the moon or a one-way trip to liquidation.',
        choice: {
          question: 'What should Stonk Pork do?',
          options: [
            { text: 'Trust John Pork and take the tip.', money: -100, knowledge: 10 },
            { text: 'Ignore the tip and play it safe.', money: 0, knowledge: -5 }
          ]
        }
      }
    ]
  },
  {
    title: 'Chapter 2: The Deal',
    background: 'bg-blue-900',
    lines: [
      { speaker: 'narrator', text: 'Stonk Pork meets John Pork in a shady corner of the digital marketplace.' },
      { speaker: 'johnPork', text: 'The coin is called \'CyberSwine\'. It\'s going to revolutionize the pork-chain industry.' },
      { speaker: 'stonkPork', text: 'CyberSwine? Sounds ridiculous. But I\'m desperate.' },
      { speaker: 'snoopDog', text: 'Yo, what\'s crackin\'? I hear you talkin\' \'bout CyberSwine. That\'s my jam.' },
      {
        speaker: 'stonkPork',
        text: 'Snoop Dogg? What are you doing here?',
        choice: {
          question: 'What is Stonk Pork\'s next move?',
          options: [
            { text: 'Partner with Snoop Dogg.', money: 500, knowledge: 20 },
            { text: 'Go all in on CyberSwine alone.', money: 1000, knowledge: 5 }
          ]
        }
      }
    ]
  }
];