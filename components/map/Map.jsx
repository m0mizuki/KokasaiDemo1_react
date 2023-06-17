import { Pages } from '../Pages';

function Map() {
  
  const iconStyle = {
    height: "6em",
    padding: "1.5em",
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="../img/mapIcon.png" style={iconStyle} alt="mapIcon" />
        </a>
      </div>
      <h1>マップ</h1>

      <p><a href={Pages.home.path}>{Pages.home.displayName}</a></p>
      <p><a href={Pages.map.path}>{Pages.map.displayName}</a></p>
      <p><a href={Pages.kikaku.path}>{Pages.kikaku.displayName}</a></p>
      <p><a href={Pages.access.path}>{Pages.access.displayName}</a></p>

    </>
  )
}

export default Map
