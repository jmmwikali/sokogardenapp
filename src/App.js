import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Getproducts from './components/Getproducts';
import Addproducts from './components/Addproducts';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Notfound from './components/Notfound';
import 'bootstrap/dist/css/bootstrap.min.css'
import Makepayment from './components/Makepayment';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Welcome To Sokogarden</h1>
        </header>

        <nav>
          <Link className='btn btn-primary btn-sm' to="/">Home</Link>
          <Link className="btn btn-success btn-sm m-1" to="/addproducts">Add Product</Link>
          <Link className="btn btn-danger btn-sm m-1" to="/signin">Signin</Link>
          <Link className="btn btn-info btn-sm m-1" to="/signup">Signup</Link>
        </nav>

        {/* Below are our different routes together with the rendered components */}
        <Routes>
          <Route path='/' element={<Getproducts />} />
          <Route path='/addproducts' element={<Addproducts />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/makepayment' element={<Makepayment />} />
          <Route path='*' element={<Notfound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
