import '../src/App.css';
import { Pages } from './Pages';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './home/Home';
import Map from './map/Map';
import Kikaku from './kikaku/Kikaku';
import Access from './access/Access';

import Footer from './common/Footer';
import MenuButtons from './common/MenuButtons';
import MapMovement_1 from './tests/MapMovement_1';

function App() {

  return (
    <>

      <BrowserRouter>
        <Switch>
          <Route exact path={Pages.home.path}><Home /></Route>
          <Route exact path={Pages.map.path}><Map /></Route>
          <Route exact path={Pages.kikaku.path}><Kikaku /></Route>
          <Route exact path={Pages.access.path}><Access /></Route>
        </Switch>
      </BrowserRouter>

      <MapMovement_1 />
      <Footer>ふったー</Footer>
      <MenuButtons />

    </>
  )
}

export default App
