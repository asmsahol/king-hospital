/** @format */
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import AuthProvider from "./Context/AuthProvider";
import Services from "./pages/Home/Services/Services";
import Home from "./pages/Home/Home";
import Header from "./pages/Home/Header/Header";
import About from "./pages/About/About";
import ServiceDetail from "./pages/Home/Services/ServiceDetails";
import SignUp from "./pages/Home/SignUp/SignUp";
import PrivateRoute from "./pages/PrivateRoute/PrivateRoute";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Login from "./pages/Home/Login/Login";
import NoFound from "./pages/Home/NotFount/NotFound";
import Footer from "./pages/Home/Footer/Footer";

function App() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://asmsahol.github.io/myData/services.json")
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);
  return (
    <div className='App'>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <div className='services'>
                {services.slice(0, 4).map(service => (
                  <Home service={service} key={service.id}></Home>
                ))}
              </div>
            </Route>
            <Route path='/home'>
              <div className='services'>
                {services.slice(0, 4).map(service => (
                  <Home service={service} key={service.id}></Home>
                ))}
              </div>
            </Route>
            <Route path='/about'>
              <About></About>
            </Route>
            <Route path='/services'>
              <div className='services'>
                {services.map(service => (
                  <Services service={service} key={service.id}></Services>
                ))}
              </div>
            </Route>
            <Route path='/service/:serviceId'>
              <ServiceDetail></ServiceDetail>
            </Route>
            <Route path='/departments'></Route>
            <Route path='/department/:departmentId'></Route>
            <Route path='/signup'>
              <SignUp></SignUp>
            </Route>
            <PrivateRoute path='/order'>
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route>
              <NoFound></NoFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
