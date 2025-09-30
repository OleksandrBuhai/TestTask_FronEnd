import { type ReactNode } from 'react';
import style from './style.module.css';

interface ParentSlideProps {
  children: ReactNode;
}

export const ParentSlide: React.FC<ParentSlideProps> = ({ children }) => {
  return <section className={style.parentSlide}>{children}</section>;
};
