import { Pages } from '../Pages';
import './commonStyle.css'

function MenuButtons() {

    return (
        <>
            <div>
                <p><a href={Pages.home.path}><img className='menuButtons' id='menuButtonHome' src={Pages.home.icon} /></a></p>
                <p><a href={Pages.map.path}><img className='menuButtons' id='menuButtonMap' src={Pages.map.icon} /></a></p>
                <p><a href={Pages.kikaku.path}><img className='menuButtons' id='menuButtonKikaku' src={Pages.kikaku.icon} /></a></p>
                <p><a href={Pages.access.path}><img className='menuButtons' id='menuButtonAccess' src={Pages.access.icon} /></a></p>
            </div>
        </>
    )
}

export default MenuButtons