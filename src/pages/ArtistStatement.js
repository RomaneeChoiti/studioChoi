import SEO from '../components/SEO';
import styles from '../css/Home.module.css';

function ArtistStatement() {
  return (
    <>
      <SEO
        title="작가 노트 — STUDIO CHOI"
        description="최승원의 작가 노트 모음 — 작품의 개념, 과정, 실험적 기록을 공유합니다."
        image={require('../assets/images/choi.png')}
        keywords={['작가노트','STUDIO CHOI','아트노트']}
        authors={['최승원']}
        techs={['media-art','web']}
        url={typeof window !== 'undefined' ? window.location.href : ''}
      />

      <main className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>ARTIST STATEMENT</h1>
        </header>

        <article className={styles.content}>
          <section>
            <h2>Theme: 관계성 (Relationality)</h2>

            <p>
              나의 작업은 ‘관계’에 대한 탐구에서 출발한다. 모든 존재는 홀로 서 있는 듯 보이지만,
              실제로는 서로의 영향 속에서 살아간다. 나는 그 보이지 않는 연결의 흐름, 즉 관계의 흔적을
              시각적으로 드러내고자 한다.
            </p>

            <p>
              관계는 뿌리처럼 얽혀 있고, 별자리처럼 패턴을 이루며, 공전자전처럼 균형의 운동 속에 존재하며,
              때로는 파도처럼 부딪히고 흩어지며 서로의 에너지를 교환한다. <br/>
            </p>
          </section>

          <section>
            <h3>결론 및 질문</h3>
            <p>
              이러한 시각적 상징들은 결국 하나의 질문으로 귀결된다.
            </p>
            <blockquote>“우리는 어디에서부터 서로를 구성하고 있는가?”</blockquote>

            <p>
              나의 예술은 존재를 고정된 개체로 보지 않고, <strong>서로의 영향으로 인해 생성되는 존재,
              즉 관계로서의 존재(being-in-relation)</strong>로 이해한다. 나의 작업은 이러한 관계적 세계의
              감각을 시각적으로 체험하게 하는 장치이자, 서로 다른 존재들이 만나 만들어내는 리듬과 흐름의 기록이다.
            </p>
          </section>
        </article>
      </main>
    </>
  );
}

export default ArtistStatement;
