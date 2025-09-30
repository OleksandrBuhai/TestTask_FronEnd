import { type ButtonHTMLAttributes, type ReactNode } from 'react';
import styles from './style.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  withBorder?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  withBorder = false,
  className = '',
  type = 'button',
  ...rest
}) => {
  const buttonClass = `${styles.button} ${
    withBorder ? styles['button--bordered'] : ''
  } ${className}`.trim();

  return (
    <button className={buttonClass} type={type} {...rest}>
      <span className={styles.button__text}>{children}</span>
    </button>
  );
};
