import { Component } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { Redirect } from "react-router";

class Movies extends Component {
  state = {
    movies: [],
    config: {
      headers: { 'authorization': `Bearer ${localStorage.getItem("token")}` },
    },
  };

  componentDidMount() {
    axios
      .get("http://localhost:90/movies/showall", this.state.config)
      .then((res) => {
        this.setState({
          movies: res.data.data,
        });
      })
      .catch((err) => {
        //error area
      });
  }

  /****** START OF DELETE MOVIE FUNCTION *****/
  // deleteMovie = (mov_id) => {
  //   axios.delete("http://localhost:90/movie/remove/" + mov_id, this.state.config)
  //     .then()
  //     .catch()
  // };
  /****** END OF DELETE MOVIE FUNCTION *****/

  render() {

    if (!localStorage.getItem("token")) {
      return <Redirect to="/" />;
    }

    return (
      <>
        <div className="hero common-hero">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="hero-ct">
                  <h1>Movie Listing</h1>
                  <ul className="breadcumb">
                    <li className="active">
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <span className="ion-ios-arrow-right"></span> movie listing
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page-single">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="topbar-filter fw">
                  <p>
                    Found <span>1,608 movies</span> in total
                  </p>
                  <label>Sort by:</label>
                  <select>
                    <option value="popularity">Popularity Descending</option>
                    <option value="popularity">Popularity Ascending</option>
                    <option value="rating">Rating Descending</option>
                    <option value="rating">Rating Ascending</option>
                    <option value="date">Release date Descending</option>
                    <option value="date">Release date Ascending</option>
                  </select>
                  <a href="movielist.html" className="list">
                    <i className="ion-ios-list-outline "></i>
                  </a>
                  <a href="moviegridfw.html" className="grid">
                    <i className="ion-grid active"></i>
                  </a>
                </div>
                <div className="flex-wrap-movielist mv-grid-fw">
                  {this.state.movies.map((movie) => {
                    return (
                      <div className="movie-item-style-2 movie-item-style-1">
                        <img src={"http://localhost:90/" + movie.movieimage} alt="" />
                        <div className="hvr-inner">
                          <NavLink to={"/movie/" + movie._id}>
                            Read more
                            <i className="ion-android-arrow-dropright"></i>
                          </NavLink>
                        </div>
                        <div className="mv-item-infor">
                          <h6>
                            <a href="#">{movie.moviename}</a>
                          </h6>
                          <p className="rate">
                            <i className="ion-android-star"></i>
                            <span>{movie.movierate}</span> /10
                          </p>
                        </div>
                        {/* <button><NavLink to={"/review/" + movie._id}>Review</NavLink></button> */}
                      </div>
                    );
                  })}
                </div>

                <div className="topbar-filter">
                  <label>Movies per page:</label>
                  <select>
                    <option value="range">20 Movies</option>
                    <option value="saab">10 Movies</option>
                  </select>

                  <div className="pagination2">
                    <span>Page 1 of 2:</span>
                    <a className="active" href="#">
                      1
                    </a>
                    <a href="#">2</a>
                    <a href="#">3</a>
                    <a href="#">...</a>
                    <a href="#">78</a>
                    <a href="#">79</a>
                    <a href="#">
                      <i className="ion-arrow-right-b"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Movies;
