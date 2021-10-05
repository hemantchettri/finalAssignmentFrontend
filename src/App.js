<<<<<<< HEAD
// import "bootstrap/dist/css/bootstrap.min.css";
=======
>>>>>>> admin
import { Fragment } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
// import Mid from "./Mid/Mid";
// import { BrowserRouter } from "react-router-dom";
// import UserProfile from "./Mid/UserProfile";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Header from "../Header/Header";
import Home from "./Mid/Home";
import LandingPage from "./Mid/LandingPage";
import MovieInsert from "./Admin/Mid/MovieInsert";
import Movies from "./Mid/Movies";
import MovieSingle from "./Mid/MovieSingle";
import Series from "./Mid/Series";
import MovieUpdate from "./Admin/Mid/MovieUpdate";
import UserProfile from "./Mid/UserProfile";
import AdminLogin from "./Admin/Mid/AdminLogin";
import AdminSignup from "./Admin/Mid/AdminSignup";
import AdminMid from "./Admin/Mid/AdminMid";
import AdminHeader from "./Admin/Header/AdminHeader";
import AdminMovies from "./Admin/Mid/AdminMovies";
import Users from "./Admin/Mid/Users";
import Review from "./Mid/Review";

function App() {
  if (localStorage.getItem("userType") === "ADMIN") {
    return (
      <BrowserRouter>
        <AdminHeader />
        <AdminMid />
        <Switch>
          <Route path="/admin/login" exact component={AdminLogin} />
<<<<<<< HEAD
          <Route path="/admin/signup" component={AdminSignup} />
=======
          {/* <Route path="/admin/signup" component={AdminSignup} /> */}
>>>>>>> admin
          <Route path="/movieinsert" component={MovieInsert} />
          <Route path="/movie/show" component={AdminMovies} />
          <Route path="/update/:idd" component={MovieUpdate} />
          <Route path="/userdetails" component={Users} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin/login" component={AdminLogin} />
<<<<<<< HEAD
        <Route path="/admin/signup" component={AdminSignup} />
=======
        {/* <Route path="/admin/signup" component={AdminSignup} /> */}
>>>>>>> admin
        <Route path="/admin" component={AdminMid} />
        <Fragment>
          <Header />
          <Route path="/" exact component={LandingPage} />
          <Route path="/home" component={Home} />
          <Route path="/movies" component={Movies} />
          <Route path="/series" component={Series} />
          <Route path="/movie/:id" component={MovieSingle} />
          <Route path="/userprofile" component={UserProfile} />
          {/*  */}
<<<<<<< HEAD
            <Route path="/review/:id" component={Review} />
=======
          <Route path="/review/:id" component={Review} />
>>>>>>> admin
          {/*  */}
          <Footer />
        </Fragment>
      </Switch>
<<<<<<< HEAD
      
=======
>>>>>>> admin
    </BrowserRouter>
  );

}

export default App;
