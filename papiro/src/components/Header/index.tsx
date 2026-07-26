import Image from 'next/image';
import Title from '../Title';
import styles from './Header.module.css';
import imgHeaderPng from './images/img-header.png';
import imgDireita from './images/decor-direita.png';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__decorLeft}>
          <Image 
            src={imgHeaderPng} 
            alt="Decoração esquerda" 
            width={60} 
            height={60} 
            priority //
          />
        </div>
        
        <Title className={styles.header__title} title="Papiro, Blog de Viagens!" />

        <div className={styles.header__decorRight}>
          <Image 
            src={imgDireita}
            alt="Decoração direita" 
            width={60} 
            height={60} 
            priority //
          />
        </div>
      </div>
    </header>
  );
}
export default Header;