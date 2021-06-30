import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './component/Home'

function App() {
  return (
    <Router>
      <Route path="/" > <Home/> </Route>
    </Router>
  );
}

export default App;