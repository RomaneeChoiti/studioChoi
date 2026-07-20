import styles from "../css/Home.module.css";
import SEO from "../components/SEO";

function Home() {


  return (
    <>
      <SEO
        title="STUDIO CHOI"
        description="최승원의 스튜디오 및 예술 아카이빙"
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
          현실은 살아가기 위한 공간이 되었고, 예술은 살아 있음을 확인하는 공간이 되었다.
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
