import styles from './Title.module.css';

type Props = {
  title: string;
  className?: string;
};

const Title = ({ title, className }: Props) => {
  return (
    <h1 className={`${styles.title} ${className ?? ''}`}>{title}</h1>
  );
}

export default Title;