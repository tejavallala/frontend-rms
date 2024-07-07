import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import NewUserForm from './components/Accounts/userAccountCreation';
import LoginForm from './components/Accounts/userLogin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/Dashboard/MainDashboard';
import ForgotPassword from './components/Accounts/forgotPassword';
import Admin from './components/Accounts/adminLogin';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import RestaurantAddForm from './components/forms/restuaruntAddForm';
import RestaurantDashboard from './components/Dashboard/userDashboard';
import BookedDataPage from './components/forms/BookData';
import RestaurantList from './components/forms/restuarntList';

function App() {
  return (
    <>
    <Router>
    <div className='App'>
      <Routes>
<Route path='/' element={<NavigationBar/>}/>
<Route path="/user-registration" element={<NewUserForm />} />
<Route path="/user-login" element={<LoginForm/>} />
<Route path='/forgot-password'element={<ForgotPassword/>}/>
<Route path='/admin-login'element={<Admin/>}/>
<Route path='/AdminDashboard'element={<AdminDashboard/>}/>
<Route path='/add-restaurant'element={<RestaurantAddForm/>}/>
<Route path='/Dashboard'element={<RestaurantDashboard/>}/>
<Route path='booked-data'element={<BookedDataPage/>}/>
<Route path='Restuarnt-List'element={<RestaurantList/>}/>
      </Routes>
    </div>
   </Router>

    </>
  );
}

export default App;
