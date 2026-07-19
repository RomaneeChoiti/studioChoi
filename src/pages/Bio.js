import { useEffect } from 'react';
import SEO from '../components/SEO';
import styles from '../css/Home.module.css';

function Bio() {
  // Inject Person JSON-LD for stronger author signals
  useEffect(() => {
    const id = 'person-jsonld';
    if (document.getElementById(id)) return;
    const p = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: '최승원',
      alternateName: 'Choi Seung-won',
      jobTitle: '작가',
      affiliation: 'studio choi',
      description: '미디어 아트와 인터랙티브 디자인을 기반으로 관계와 생성의 주제를 탐구하는 작가',
      url: typeof window !== 'undefined' ? window.location.href : undefined,
      sameAs: [
        /* Add public profile links here for stronger identity signals, e.g.:
        'https://www.instagram.com/yourhandle',
        'https://www.linkedin.com/in/yourprofile'
        */
      ].filter(Boolean),
    };

    const s = document.createElement('script');
    s.type = 'application/ld+json';
    s.id = id;
    s.text = JSON.stringify(p, null, 2);
    document.head.appendChild(s);

    return () => {
      const el = document.getElementById(id);
      if (el) el.remove();
    };
  }, []);

  return (
    <>
      <SEO
        title="최승원 작가 — Bio | STUDIO CHOI"
        description="STUDIO CHOI의 작가 소개 페이지 — 최승원(Choi Seung-won)의 약력과 연락처"
        keywords={['최승원','studio choi','작가','media-art','아티스트']}
        authors={['최승원']}
        techs={['p5.js','React']}
        url={typeof window !== 'undefined' ? window.location.href : ''}
      />
      <main className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>BIOGRAPHY</h1>
        </header>
        <article className={styles.content}>
          <p>
            Choi Seung-won (Korean: 최승원) <br/>
            Born March 3, 1997 — Gwangju, South Korea <br/>
            Lives and works in Seoul and Gwangju, South Korea <br/>
            Graduated from Chosun University, Department of Contemporary Form & Media Art
          </p>
          <p>
            Based on media art, he develops works centered on interaction with the audience 
            (interactive) and algorithmic generation (generative).
          </p>
        </article>
      </main>
    </>
  );
}

export default Bio;
