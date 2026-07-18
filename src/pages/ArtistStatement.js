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
              2025
            </p>
            <p>
              나의 작업은 ‘관계’에 대한 탐구에서 출발한다.
            </p>
            <p>
              사회적 고립의 시간을 지나며 관계를 원하면서도 거부하는 감정 사이를 오갔고, 홀로 존재한다고 느낀 순간에도
              우리는 언제나 서로 영향을 주고받는 관계 속에서 존재했음을 깨달았다. 이러한 깨달음은 프로그래밍이라는
              새로운 언어를 통해 타인과 연결되고 소통하는 가능성을 열어주었으며, 이는 곧 작업의 매체이자 개념적 기반이되었다.
            </p>
            <p>
              관계는 단순한 정적인 ‘연결’이 아닌, 보이지 않는 에너지들이 무작위로 충돌하고 얽히며 생성되는 역동적인
              ‘리듬’이다. 나는 이러한 관계의 근원을 탐구하며, 그 모든 과정을 끊임없이 생성되고 소멸하는 순환의 구조로
              파악한다. 혼돈처럼 보이는 움직임 속에서도 자율적으로 반복되는 리듬이 존재하며, 이는 파도처럼 밀려왔다
              사라지며 지속적으로 새로운 관계를 창발시킨다.
            </p>
            <p>
              나의 작업은 이러한 ‘무작위의 질서’와 감각적 흐름을 시각화하는 시도이며, 현재 진행 중인 ‘관계성’ 시리즈의
              핵심 주제이다. 웹 기반의 미디어 아트를 중심으로, 코드와 알고리즘이 구동하는 시스템의 자율성을 통해 움직임과
              패턴을 탐구한다.
            </p>
            <p>
              ‘관계성’ 시리즈는 이 주제를 다각도로 구현하기 위해 '뿌리', '파도', '공전', '별자리'라는 시각적 은유를
              활용한다. 예를 들어, 시리즈의 일부 작업들은 ‘뿌리’가 얽히는 근원적인 연결 패턴을 시각화하며, 다른 작업들은
              공전하는 궤적의 반복, 파도의 리듬, 그리고 멀리서 형성된 별자리 같은 질서를 탐색한다.
            </p>
            <p>
              빛, 결, 움직임이 서로를 스치며 만들어내는 데이터의 흔적을 통해 ‘관계로서의 존재(being-in-relation)’를 
              감각적으로 기록하고자 한다. 나는 존재를 고정된 형태로 보지 않는다. 존재는 서로의 영향 속에서 끊임없이
              변화하며, 그 흔적 속에서 스스로 드러난다. 이 작업들은 관계의 에너지가 만들어내는 보이지 않는 질서와 움직임을 시각적으로
              드러내고자 한다.
            </p>
          </section>
        </article>
      </main>
    </>
  );
}

export default ArtistStatement;
