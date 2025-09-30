import style from './style.module.css';

interface HolderProps {
  headerText: string;
  description: string;
}

export const Holder: React.FC<HolderProps> = ({ headerText, description }) => {
  return (
    <div className={style.holder}>
      <span className={style.holder__number}>{headerText}</span>
      <span className={style.holder__label}>{description}</span>
    </div>
  );
};
