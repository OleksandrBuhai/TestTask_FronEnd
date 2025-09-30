import React, { type ReactNode, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import blue from '@/assets/heroImg/blue_up.png';
import planet from '@/assets/heroImg/planet.png';
import red from '@/assets/heroImg/red_low.png';
import style from './style.module.css';
import { Holder } from '@/components/reusableComponents/Holder/Holder';

interface HeroProps {
  children: ReactNode;
}

export const Hero: React.FC<HeroProps> = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const lockRef = useRef(false);
  const slideRef = useRef(currentSlide);

  const slides = React.Children.toArray(children);
  const totalSlides = slides.length;

  const lockAnimation = () => {
    lockRef.current = true;
    setTimeout(() => (lockRef.current = false), 900);
  };

  const goNext = () => {
    if (slideRef.current < totalSlides - 1) {
      setCurrentSlide((prev) => {
        slideRef.current = prev + 1;
        return prev + 1;
      });
      setScrolled(false);
      lockAnimation();
    }
  };

  const goPrev = () => {
    if (slideRef.current > 0) {
      setCurrentSlide((prev) => {
        slideRef.current = prev - 1;
        return prev - 1;
      });
      setScrolled(false);
      lockAnimation();
    }
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (lockRef.current) return;
      if (Math.abs(e.deltaY) < 15) return;

      if (e.deltaY > 0) {
        if (slideRef.current === 0 && !scrolled) {
          setScrolled(true);
          lockAnimation();
        } else {
          goNext();
        }
      } else {
        if (slideRef.current === 0 && scrolled) {
          setScrolled(false);
          lockAnimation();
        } else {
          goPrev();
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [scrolled, totalSlides]);

  const holdersText = [
    { headerText: '1,873', description: 'LLM models' },
    { headerText: '$326,734', description: 'Paid to data scientists' },
    { headerText: '6,557', description: 'Developers' },
  ];

  return (
    <div className={style.heroViewport}>
      <div className={style.heroBackground}>
        <motion.img
          src={blue}
          alt="Blue"
          className={style.blue_img}
          animate={{
            y: scrolled ? -60 : 0,
            x: scrolled ? -30 : 0,
            scale: scrolled ? 1.1 : 1,
            top: currentSlide === 1 ? -100 : undefined,
          }}
          transition={{ duration: 0.6 }}
        />
        <motion.img
          src={red}
          alt="Red"
          className={style.red_img}
          animate={{ y: scrolled ? 40 : 0, left: scrolled ? -60 : 0 }}
          transition={{ duration: 0.6 }}
        />
        <motion.img
          src={planet}
          alt="Planet"
          className={style.planet_img}
          animate={{
            y: scrolled ? -100 : 0,
            top: currentSlide === 1 ? -100 : undefined,
          }}
          transition={{ duration: 0.6 }}
        />
      </div>

      <div className={style.heroContainer}>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: currentSlide === 0 ? -200 : 200 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: currentSlide === 0 ? -200 : 200 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className={style.slidesWrapper}
        >
          {React.cloneElement(
            slides[currentSlide] as React.ReactElement<{
              hasScrolled?: boolean;
            }>,
            { hasScrolled: scrolled }
          )}{' '}
        </motion.div>

        {currentSlide === 0 && (
          <div className={style.holderGroup}>
            {holdersText.map((holder, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 200 }}
                animate={
                  scrolled ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
                }
                transition={{ delay: i * 0.15, duration: 0.5 }}
              >
                <Holder
                  headerText={holder.headerText}
                  description={holder.description}
                />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
