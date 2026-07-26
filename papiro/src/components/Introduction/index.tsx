import styles from './Introduction.module.css';


type Props = {
  introduction: string;
  className?: string;
};

const Introduction = ({ introduction, className }: Props) => {
  return (
    <p className={`${styles.introduction} ${className ?? ''}`}>{introduction}</p>
  );
}

export default Introduction;