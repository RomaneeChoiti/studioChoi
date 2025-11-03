import styles from "../css/Home.module.css";
import SEO from "../components/SEO";

function Home() {


  return (
    <>
      <SEO
        title="STUDIO CHOI"
        description="최승원의 스튜디오 및 예술 아카이빙"
        image={require('../assets/images/choi.png')}
        keywords={'STUDIO CHOI,portfolio,blog,frontend,art'}
        authors={['최승원']}
        techs={['React','p5.js']}
        url={window.location.href}
      />
  <main className={styles.container}>
    <header className={styles.header}>
      <h1 className={styles.title}>
        STUDIO CHOI SEUNG-WON
      </h1>
    </header>
      <article className={styles.content}>
        <p>
          관계는 단순한 ‘연결’로서 존재하지 않는다.
          서로 알 수 없는 에너지들이 충돌하고, 스치고, 때로는 아무 이유 없이 얽혀버린다.
          그 무작위의 얽힘 속에서 나는 관계의 근원을 찾기 시작한다.
          <br/><br/>
          찾는 동안 관계는 나를 통과하며 스스로의 이야기를 만든다.
          그 이야기들은 리듬이 되고, 리듬은 다시 순환의 패턴을 만든다.
          파도처럼 반복되지만, 결코 같은 파도는 없다.
          <br/><br/>
          나의 작업은 그 흐름을 붙잡으려는 시도이자,
          붙잡을 수 없음을 인정하는 과정이다.
          존재는 홀로 설 수 없고, 언제나 서로의 움직임을 통해 드러난다.
          나는 그 움직임의 흔적을 시각으로 남긴다.
        </p>
        <address className={styles.contact}>
            <a href="mailto:choidevmail@gmail.com" className={styles.email}>
              choidevmail@gmail.com
            </a>
          </address>
        </article>
    </main>
    </>
  );
}

export default Home;
