import { Header } from './components/Header';
import { Home } from './components/Home';
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Details } from './components/Details';
import { Login } from './components/Login';

function App() {
  
  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/details/:id' element={<Details />} />
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

