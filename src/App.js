import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact={true} Component={''}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
