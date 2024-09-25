import { BrowserRouter as Router ,Routes ,Route } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/SignUp';
import About from './Pages/About';
import BookDetails from './Components/BookDetails'
import BookList from './Components/BookList/BookList'
import './App.css'
import Home from './Pages/Home';

function App() {

  return (
    <div>

      
       {/* <h1 className='text-5xl'>Library</h1> */}
       <Router>
       <Routes>
          <Route index  path='/' element={ <Home/> }/>
          <Route path='/about'  element={ <About/> }/>
          <Route path='/book'  element={ <BookList/> }/>
          <Route path='/book/:id'  element={ <BookDetails/> }/>
          <Route path='/login'  element={ <Login/> }/>
       </Routes>
     </Router>

     
    </div>
  )
}

export default App
