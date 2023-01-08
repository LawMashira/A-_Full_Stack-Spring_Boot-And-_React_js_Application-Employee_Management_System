
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import ApplicationBar from './components/ApplicationBar';
import AddEmployee from './Employee/AddEmployee';
import Home from './components/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import EditEmployee from './Employee/EditEmployee';
import DisplayEmployee from './Employee/DisplayEmployee';
function App() {
  return (
    <div className="App">
    
    <Router>
    <ApplicationBar/ >
    <Routes>
      <Route exact path="/"element={<Home/>}/>
      <Route exact path="add"element={<AddEmployee/>}/>
      <Route exact path="/editemployee/:id"element={<EditEmployee/>}/>
      <Route exact path="display"element={<DisplayEmployee/>}/>

    </Routes>
    </Router>
    
       </div>
  );
}

export default App;
