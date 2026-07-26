import styles from './page.module.css';
import Introduction from '@/components/Introduction';
import Grid from '@/components/Grid';

export const dynamic = 'force-static';

export default function Home() {
  return (
    <>
      <main className={styles.container}>

        <Introduction className={styles.introduction} introduction="Viajar é a minha forma favorita de colecionar histórias. Aqui, divido tudo o que aprendo na estrada! Você vai encontrar os roteiros que funcionaram para mim, 
        dicas sinceras sobre as melhores companhias aéreas, como aproveito os clubes de descontos e o que fazer em cada destino com base nas minhas próprias descobertas. 
        Sabe aquela sensação boa de sentar com um amigo em um café e passar horas conversando sobre as últimas férias? É exatamente essa a ideia deste blog! Não sou nenhuma agência de turismo. Sou apenas alguém que respira viagem e que ama trocar figurinhas sobre o próximo destino.Criei este espaço para compartilhar as minhas memórias, 
        os meus acertos e, claro, os perrengues que me ensinaram a viajar melhor." />
        
        <Grid/>

      </main>
    </>
  )
}





