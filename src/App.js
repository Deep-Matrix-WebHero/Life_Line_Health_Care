import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Blogs from './component/Blogs/Blogs';
import Details from './component/Departments/Details/Details';
import Doctors from './component/Doctors/Doctors';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Notfound from './component/Notfound/Notfound';
import LoginRegistration from './component/User/Login/LoginRegistration';
import PrivateRoute from './component/User/PrivateRoute/PrivateRoute';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/doctors">
              <Doctors></Doctors>
            </Route>
            <PrivateRoute path="/blogs">
              <Blogs></Blogs>
            </PrivateRoute>
            <PrivateRoute path="/details/:departmentId">
              <Details></Details>
            </PrivateRoute>
            <Route path="/login">
              <LoginRegistration></LoginRegistration>
            </Route>
            <Route path="/register">
              <LoginRegistration></LoginRegistration>
            </Route>
            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
