import './App.css';
import {Routes,Route} from "react-router-dom";
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import Skills from './components/Skills';
import Experience from './components/Experience';
import MyWork from './components/MyWork';

function App() {
  return (
    <div className="app-container container-fluid">
      <div className="row flex-nowrap">
        
        <Sidebar></Sidebar>
        <Routes>
          <Route path="/abhishek-portfolio" element={ <Home/> } exact></Route>
          <Route path="/skills" element={<Skills/>}></Route>
          <Route path="/experience" element={<Experience/>}></Route>
          <Route path="/mywork" element={<MyWork/>}></Route>
          <Route path="/" element={<Home/>}></Route>
        </Routes>

      </div>
    </div>
  );
}

export default App;
