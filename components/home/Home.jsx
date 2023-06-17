import { Pages } from '../Pages';

function Home() {

  const iconStyle = {
    height: "6em",
    padding: "1.5em",
  };

  return (
    <>
      <h1>ホーム</h1>
      マップへの遷移のみ実装<br/>
      切り替わるんじゃなくて追加されちゃうんだね

      <p><a href={Pages.home.path}>{Pages.home.displayName}</a></p>
      <p><a href={Pages.map.path}>{Pages.map.displayName}</a></p>
      <p><a href={Pages.kikaku.path}>{Pages.kikaku.displayName}</a></p>
      <p><a href={Pages.access.path}>{Pages.access.displayName}</a></p>

    </>
  )
}

export default Home
