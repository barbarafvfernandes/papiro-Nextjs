import { getPostDetails, getPosts } from '@/lib/api/higraph';
import Link from 'next/link';
import styles from './artigo.module.css'
import Image from 'next/image';

export const dynamic = 'force-static';

type Props = {
    params: Promise<{
        slug: string;
    }>;
};

export async function generateStaticParams() {
    const posts = await getPosts.aboutPost(); 
    
    if (!posts) return [];

    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export const generateMetadata = async ({ params }: Props) => {
    const { slug } = await params;
    const details = await getPostDetails(slug);

    if (!details) return;

    return {
        title: `${details.title} | Papiro`
    }
}

const DetalhePost = async ({ params }: Props) => {
    const { slug } = await params;
    const details = await getPostDetails(slug);

    if (!details) return;

    const { title, summary, content, thumbnail, date, author } = details;

    return (
        <div className={styles.pageContainer}>
            <Link className={styles.detalhes__voltar} href="/">Voltar</Link>
            
            <article className={styles.articleContent}>
                <h1 className={styles.title}>{title}</h1>
                
                {thumbnail?.url && (
                    <div className={styles.imageWrapper}>
                        <Image
                            src={thumbnail.url}
                            alt={`foto do post: ${title}`}
                            width={1200} 
                            height={600}
                            className={styles.thumbnail}
                            priority={true} 
                        />
                    </div>
                )}
                
                <h2 className={styles.summary}>{summary}</h2>
                
                <div
                    className={styles.htmlContent}
                    dangerouslySetInnerHTML={{ __html: content.html }}
                />
                <p>Escrito por: {author?.name}</p>
                <p>Data de publicação: {date}</p>
            </article>
            <Link className={styles.detalhes__voltar} href="/">Voltar</Link>
        </div>
    )
}
export default DetalhePost;

