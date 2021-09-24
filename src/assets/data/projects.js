import { v4 as uuidv4 } from 'uuid';
import MediciaImg from '../images/Medicia.jpg';
import MusicImg from '../images/music.jpeg';
import UrlImg from '../images/url.jpg';
import QrImg from '../images/QR.png';
import QuizImg from '../images/cointracker.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Medicia',
    desc:
      'A REST API for the medical history tracking application. Developed for the convience of patients and doctors.',
    img: MediciaImg,
    link : 'https://github.com/Shubhojeetban/MediciaApi.git',
  },
  {
    id: uuidv4(),
    name: 'Ban Music Player',
    desc:
      'An android music player for making the music experince more exciting and gripping.',
    img: MusicImg,
    link : 'https://github.com/Shubhojeetban/MusicPlayer.git',
  },
  {
    id: uuidv4(),
    name: 'URL Shortner',
    desc:
      'Using this application you can shorten a long url and use it in alternative for the original URL.',
    img: UrlImg,
    link : 'https://github.com/Shubhojeetban/url-shortner.git',
  },
  {
    id: uuidv4(),
    name: 'QR Code Scanner and Generator',
    desc:
      'An application to generate QR codes and can be used commercially. Also it can scan any QR code.',
    img: QrImg,
    link : 'https://github.com/Shubhojeetban/javaQRScannerGenerator.git',
  },
  {
    id: uuidv4(),
    name: 'Quiz App',
    desc:
      'A Quiz app to check your general knowledge while having fun.',
    img: QuizImg,
    link : 'https://github.com/Shubhojeetban/QuizzApp---React.git',
  },
];

export default projects;
