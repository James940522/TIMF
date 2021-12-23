import { Routes, Route, useLocation, useHistory } from 'react-router-dom';
// Components
import Nav from './Components/Nav';
import Main from './Pages/Main'



function App() {
  const site = useLocation();

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
