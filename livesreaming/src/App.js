import logo from './logo.svg';
import {Routes,Route} from 'react-router-dom'
import HomePage from './pages/Home';
import './App.css';
import RoomPage from './pages/room';

function App() {
  return (
   <div>
    <Routes>
      <Route path='/'element={<HomePage/>}/>
      <Route path='/room/:roomId' element={<RoomPage/>}/>
    </Routes>
   </div>
  );
}

export default App;
