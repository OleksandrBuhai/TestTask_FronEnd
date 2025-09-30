import { ParentSlide } from '../Slide/ParentsSlide';
import styles from './style.module.css';
import arweave from '@/assets/secondSlideImg/arweave.png';
import solana from '@/assets/secondSlideImg/solana.png';
import telegram from '@/assets/secondSlideImg/telegram.png';
import bittensor from '@/assets/secondSlideImg/bittensor.png';
import red from '@/assets/secondSlideImg/red.png';

export const SecondSlide = () => {
  const partners = [
    { src: solana, alt: 'Solana' },
    { src: arweave, alt: 'Arweave' },
    { src: bittensor, alt: 'Bittensor' },
    { src: red, alt: 'Red' },
    { src: telegram, alt: 'Telegram' },
  ];

  return (
    <ParentSlide>
      <section className={styles.ecosystem}>
        <header className={styles.ecosystem__header}>
          <h2 className={styles.ecosystem__title}>
            Projects integrated into the Arrakis AI Ecosystem
          </h2>
        </header>
        <div className={styles.ecosystem__partners}>
          {partners.map((partner) => (
            <img
              key={partner.alt}
              src={partner.src}
              alt={partner.alt}
              className={styles.ecosystem__logo}
              loading="lazy"
            />
          ))}
        </div>
      </section>
    </ParentSlide>
  );
};
