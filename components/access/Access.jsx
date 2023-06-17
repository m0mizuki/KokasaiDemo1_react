import { Pages } from '../Pages';

function Access() {
  
  const iconStyle = {
    height: "6em",
    padding: "1.5em",
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="../img/accessIcon.png" style={iconStyle} alt="accessIcon" />
        </a>
      </div>
      <h1>アクセス</h1>

      <p><a href={Pages.home.path}>{Pages.home.displayName}</a></p>
      <p><a href={Pages.map.path}>{Pages.map.displayName}</a></p>
      <p><a href={Pages.kikaku.path}>{Pages.kikaku.displayName}</a></p>
      <p><a href={Pages.access.path}>{Pages.access.displayName}</a></p>

    </>
  )
}

export default Access
