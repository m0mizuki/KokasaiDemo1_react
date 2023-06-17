import { Pages } from '../Pages';

function MenuButtons() {

    const menuButtons = {
        width: "100px",
        bottom: "0%",
        borderRadius: "10%",
        position: "fixed",
        zIndex: "100"
    };

    return (
        <>
            <p style={menuButtons}>
                <p style={{left:"0px"}}><a href={Pages.home.path}><img src={Pages.home.icon} /></a></p>
                <p style={{left:"50px"}}><a href={Pages.map.path}><img src={Pages.map.icon} /></a></p>
                <p style={{left:"100px"}}><a href={Pages.kikaku.path}><img src={Pages.kikaku.icon} /></a></p>
                <p style={{left:"150px"}}><a href={Pages.access.path}><img src={Pages.access.icon} /></a></p>
            </p>
        </>
    )
}

export default MenuButtons