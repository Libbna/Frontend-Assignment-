import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';


function App() {
  return (
    <Router>
      <RightPanel />  
      <LeftPanel />    
    </Router>
  );
}

export default App;
