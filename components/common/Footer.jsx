import { Pages } from '../Pages';
import Static from '../../static/json/testText.json';
import './commonStyle.css'

function Footer({ children }) {

    return (
        <>
            <p className='footer'>
                {children}
                <p><a href={Pages.home.path}>{Pages.home.displayName}</a></p>
                <p><a href={Pages.map.path}>{Pages.map.displayName}</a></p>
                <p><a href={Pages.kikaku.path}>{Pages.kikaku.displayName}</a></p>
                <p><a href={Pages.access.path}>{Pages.access.displayName}</a></p>

                <p>{Static.text1}</p>
            </p>
        </>
    )
}

export default Footer