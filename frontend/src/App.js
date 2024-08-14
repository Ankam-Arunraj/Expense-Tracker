import logo from './logo.svg';
import css from'./App.css';
import Login from './pages/login';
import Signup from './pages/signup';
import ChangePassword from './pages/ChangePassword';
import PrivateRoutes from './pages/PrivateRoutes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard' ;
import Profile from './pages/Profile'
import CreateExp from './pages/CreateExp';
import ExpenseList from './pages/ExpenseList';
import Users from './pages/Users';
//import ExpenseForm from './pages/CreateExp';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/login' element = {<Login/>}></Route>
      <Route path='/signup' element = {<Signup/>}></Route>
      <Route element = {<PrivateRoutes/>}>
      <Route path='/' element = {<Dashboard/>}>
        <Route index element={<ExpenseList />} />
      </Route>
      <Route path='/profile' element = {<Profile/>}></Route>
      <Route path='/create-expense' element = {<CreateExp/>}></Route>
      <Route path='/usersList' element = {<Users/>}></Route>
      {/* <Route path='//my-expense' element = {<ExpenseList/>}></Route> */}
      

      <Route path='/change_password' element = {<ChangePassword/>}></Route>

      </Route>

      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
