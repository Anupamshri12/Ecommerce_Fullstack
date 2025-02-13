
import './App.css';
import Navbar from './components/Navbar';
import Fronte from './Fronte';
import { BrowserRouter as Router , Route ,Routes } from 'react-router-dom';
import Header from './components/Header'
import CONTACT from './components/Contact'
import DESCRIBE from './components/DESCRIBE';
import Login from './components/Login';
import Protected from './components/Protected';
import Signup from './components/Signup';
import Brands from './components/Brands';
function App() {
  
  return (
 <>
 <Router>
<Navbar />

<Routes>
  <Route path = "/" element ={<Fronte/>}></Route>
  <Route path = "/Header" element ={<Protected Component = {Header}/>}></Route>
  <Route path = "/CONTACT" element = {<CONTACT/>}></Route>
  <Route path = "/brands" element = {<Brands/>}></Route>
  <Route path = "/DESCRIBE-details/:id" element = {<DESCRIBE/>}></Route>
  <Route path = "/signin" element = {<Login/>}></Route>
  <Route path = "/signup" element = {<Signup/>}></Route>
 
</Routes>



 </Router>

 
 </>
  );
}

export default App;
