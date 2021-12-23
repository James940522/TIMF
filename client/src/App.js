import { Switch, Route, useLocation, useHistory } from 'react-router-dom';
// Components
import Nav from './Components/Nav';
import Main from './Pages/Main'
import Business from './Components/Business';


function App() {
  const site = useLocation();



  return (
    <div>
      <Nav />
      <Main />
      <Business />
      Hello World
    </div>
  );
}

export default App;
