import { Button } from '@/components/reusableComponents/Button/Button';
import { ParentSlide } from '@/components/Slide/ParentsSlide';
import style from './style.module.css';
import { motion } from 'framer-motion';

interface FirstSlideProps {
  hasScrolled?: boolean;
}

export const FirstSlide: React.FC<FirstSlideProps> = ({
  hasScrolled = false,
}) => {
  return (
    <ParentSlide>
      <motion.div
        className={style.firstSlide}
        animate={{ top: hasScrolled ? -100 : 0 }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 30,
          duration: 0.6,
        }}
      >
        <motion.h1 className={style['firstSlide__title']}>
          <motion.span
            className={style['firstSlide__title-text']}
            animate={{
              backgroundImage: hasScrolled
                ? 'linear-gradient(0deg, rgba(255,255,255,0.2), rgba(255,255,255,0.2)), linear-gradient(106.2deg, #FFD6F9 -12.33%, #FFCBB4 50.28%, #FFBEC3 114.17%)'
                : 'linear-gradient(108.88deg, #b53ea4 -2.82%, #fc6f32 34.48%, #ff4a59 93.08%)',
            }}
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 30,
              duration: 0.8,
            }}
          >
            A new economic primitive <br /> for funding decentralized AI
          </motion.span>
        </motion.h1>

        <motion.p
          className={style['firstSlide__description']}
          animate={{ opacity: hasScrolled ? 0.6 : 0.85 }}
          transition={{
            type: 'spring',
            stiffness: 150,
            damping: 25,
            duration: 0.6,
          }}
        >
          We track, rank and pay for the best open source decentralized LLMs to
          compete against OpenAI
        </motion.p>

        <motion.div
          className={style['firstSlide__actions']}
          animate={{ opacity: hasScrolled ? 0.7 : 1, y: hasScrolled ? -10 : 0 }}
          transition={{
            type: 'spring',
            stiffness: 180,
            damping: 20,
            duration: 0.7,
          }}
        >
          <Button withBorder>Buy Salt AI</Button>
          <Button>Try Now</Button>
        </motion.div>
      </motion.div>
    </ParentSlide>
  );
};
