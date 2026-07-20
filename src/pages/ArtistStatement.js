import { useState } from 'react';
import SEO from '../components/SEO';
import styles from '../css/Home.module.css';
import '../css/ArtistStatement.css';
import artistStatementsData from '../data/ArtistStatement/Text';

function ArtistStatement() {
  const [visibleCount, setVisibleCount] = useState(1);

  const sortedStatements = [...artistStatementsData].sort((a, b) => {
    const yearA = Number(a.year) || 0;
    const yearB = Number(b.year) || 0;
    return yearB - yearA;
  });

  const visibleStatements = sortedStatements.slice(0, visibleCount);
  const hasMore = visibleCount < sortedStatements.length;

  return (
    <>
      <SEO
        title="작가 노트 — STUDIO CHOI"
        description="최승원의 작가 노트 모음 — 작품의 개념, 과정, 실험적 기록을 공유합니다."
        keywords={['작가노트','STUDIO CHOI','아트노트']}
        authors={['최승원']}
        techs={['media-art','web']}
        url={typeof window !== 'undefined' ? window.location.href : ''}
      />

      <main className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>ARTIST STATEMENT</h1>
        </header>

        <article className={`${styles.content} artist-statement-content`}>
          {visibleStatements.map((statement, index) => (
            <section className="artist-statement-section" key={statement.id || index}>
              <h2>{statement.title}</h2>
              <p>{statement.year}</p>
              {statement.paragraphs.map((paragraph, paragraphIndex) => (
                <p key={`${statement.id || index}-${paragraphIndex}`}>{paragraph}</p>
              ))}
            </section>
          ))}

          {hasMore && (
            <button
              type="button"
              className="artist-statement-button"
              onClick={() => setVisibleCount((prev) => prev + 1)}
            >
              더 보기 ({visibleCount}/{sortedStatements.length})
            </button>
          )}
        </article>
      </main>
    </>
  );
}

export default ArtistStatement;
