import Link from 'next/link';
import { getPosts } from '@/lib/api/higraph';
import styles from './Grid.module.css';
import Image from 'next/image';


export default async function Grid() {
  const posts = await getPosts.aboutPost();

  if (!posts || posts.length === 0) {
    return (
      <main className={styles.container}>
        <p className={styles.emptyState}>Nenhum post encontrado.</p>
      </main>
    );
  }

  return (
    <div className={styles.grid}>
      {posts.map((post) => (
        <article key={post.id} className={styles.card}>
          <div>
            <Link href={`/artigos/${post.slug}`}>
              {post.thumbnail?.url && (
                <div className={styles.imageWrapper}>
                  <Image
                    src={post.thumbnail.url}
                    alt={`Capa do post: ${post.title}`}
                    width={400} 
                    height={210} 
                    className={styles.thumbnail}
                    priority={true} 
                  />
                </div>
              )}
              <h2 className={styles.cardTitle}>{post.title}</h2>
              <p className={styles.cardSummary}>{post.summary}</p>
            </Link>
          </div>

          <Link href={`/artigos/${post.slug}`} className={styles.link}>
            ler post...
          </Link>
        </article>
      ))}
    </div>
  );
}
