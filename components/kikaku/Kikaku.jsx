import { Pages } from '../Pages';

function Kikaku() {
  
  const iconStyle = {
    height: "6em",
    padding: "1.5em",
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="../img/kikakuIcon.png" style={iconStyle} alt="kikakuIcon" />
        </a>
      </div>
      <h1>企画</h1>

      <p><a href={Pages.home.path}>{Pages.home.displayName}</a></p>
      <p><a href={Pages.map.path}>{Pages.map.displayName}</a></p>
      <p><a href={Pages.kikaku.path}>{Pages.kikaku.displayName}</a></p>
      <p><a href={Pages.access.path}>{Pages.access.displayName}</a></p>

    </>
  )
}

export default Kikaku
