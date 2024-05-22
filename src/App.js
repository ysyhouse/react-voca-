import './App.css';

import {BrowserRouter,Route,Routes} from "react-router-dom";
import DayList from './component/DayList';
//import Hello from './component/Hello';
import Header from './component/Header';
import Day from './component/Day';
import EmptyPage from './component/EmptyPage';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path="/" element={<DayList/>}></Route>
        <Route path="/day/:day" element={<Day/>}></Route>
        <Route path="*" element={<EmptyPage/>}></Route>
      </Routes>

    </div>
    </BrowserRouter>
    
  );
}

export default App;
