import axios from "axios";
import { Component } from "react";
import { Redirect } from "react-router";

class MovieUpdate extends Component {
  state = {
    moviename: "",
    movierate: "",
    moviecast: "",
    moviedirector: "",
    moviewriter: "",
    movieoverview: "",
    movieruntime: "",
    moviegenre: "",
    moviempaa: "",
    moviereleasedate: "",
    filename: null,
    id: this.props.match.params.idd,
    config: {
      headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
    },
  };

  componentDidMount() {
    axios
      .get("http://localhost:90/movie/single/" + this.state.id)
      .then((res) => {
        this.setState({
          moviename: res.data.moviename,
          movierate: res.data.movierate,
          moviecast: res.data.moviecast,
          moviedirector: res.data.moviedirector,
          moviewriter: res.data.moviewriter,
          movieoverview: res.data.movieoverview,
          movieruntime: res.data.movieruntime,
          moviegenre: res.data.moviegenre,
          moviempaa: res.data.moviempaa,
          moviereleasedate: res.data.moviereleasedate,
          movieimage: res.data.filename,
        });
        console.log(res.data);
      })
      .catch();
  }

  newUpdated = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  updateMovie = (e) => {
    e.preventDefault();
    /************/
    // data = {
    //     mname: this.state.mname,
    //     id : this.state.id
    // }
    //axios.put("http://localhost:90/movie/update", this.state.data)
    /************/
    axios
      .put("http://localhost:90/movie/update", this.state, this.state.config)
      .then((res) => {
        // console.log("updated")
      })
      .catch();
  };

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
                  <h1>Movie Updating</h1>
                  <ul className="breadcumb">
                    <li className="active">
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <span className="ion-ios-arrow-right"></span> movie updating
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

                {/* <div className="flex-wrap-movielist mv-grid-fw">
                  <div className="movie-item-style-2 movie-item-style-1">
                    <form className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        name="moviename"
                        value={this.state.moviename}
                        onChange={this.newUpdated}
                      />
                      <button onClick={this.updateMovie}>UPDATE</button>
                    </form>
                  </div>
                </div> */}

                <div className="page-single">
                  <div className="container">
                    <div className="row ipad-width">
                      <div className="col-md-9 col-sm-12 col-xs-12">
                        <div className="form-style-1 user-pro" action="#">
                          <form action="#" className="user">
                            <h4>Movie Update</h4>

                            <div className="user-img">
                              <a href="#">
                                <img
                                  src={"http://localhost:90/" + this.movieimage}
                                  alt=""
                                />
                                <br />
                              </a>
                              <div className="row">
                                <div className="col-md-6 form-it">
                                  <input
                                    type="file"
                                    name="files"
                                    onChange={this.changeFileHandler}
                                    value={this.state.movieimage}
                                    id="file"
                                    accept="image/*"
                                  />
                                  <label for="file" className="redbtn">
                                    Change Image
                                  </label>
                                </div>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-md-6 form-it">
                                <label>Movie Name</label>
                                <input
                                  type="text"
                                  name="moviename"
                                  placeholder="Moive Name"
                                  onChange={this.newUpdated}
                                  value={this.state.moviename}
                                />
                              </div>
                              <div className="col-md-6 form-it">
                                <label>Movie Rating</label>
                                <input
                                  type="text"
                                  name="movierate"
                                  placeholder="Movie Rating"
                                  onChange={this.newUpdated}
                                  value={this.state.movierate}
                                />
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-6 form-it">
                                <label>Movie Cast</label>
                                <input
                                  type="text"
                                  name="moviecast"
                                  placeholder="Moive Cast"
                                  onChange={this.newUpdated}
                                  value={this.state.moviecast}
                                />
                              </div>
                              <div className="col-md-6 form-it">
                                <label>Movie Director</label>
                                <input
                                  type="text"
                                  name="moviedirector"
                                  placeholder="Movie Director"
                                  onChange={this.newUpdated}
                                  value={this.state.moviedirector}
                                />
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-md-6 form-it">
                                <label>Movie Writer</label>
                                <input
                                  type="text"
                                  name="moviewriter"
                                  placeholder="Movie Writer"
                                  onChange={this.newUpdated}
                                  value={this.state.moviewriter}
                                />
                              </div>
                              <div className="col-md-6 form-it">
                                <label>Movie OverView</label>
                                <input
                                  type="text"
                                  name="movieoverview"
                                  placeholder="Movie Overview"
                                  onChange={this.newUpdated}
                                  value={this.state.movieoverview}
                                />
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-md-6 form-it">
                                <label>Movie Runtime</label>
                                <input
                                  type="text"
                                  name="movieruntime"
                                  placeholder="Movie Run Time"
                                  onChange={this.newUpdated}
                                  value={this.state.movieruntime}
                                />
                              </div>
                              <div className="col-md-6 form-it">
                                <label>Movie Genre</label>
                                <input
                                  type="text"
                                  name="moviegenre"
                                  placeholder="Movie Genre"
                                  onChange={this.newUpdated}
                                  value={this.state.moviegenre}
                                />
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-md-6 form-it">
                                <label>Movie MPAA Rating</label>
                                <input
                                  type="text"
                                  name="moviempaa"
                                  placeholder="Movie MPAA"
                                  onChange={this.newUpdated}
                                  value={this.state.moviempaa}
                                />
                              </div>
                              <div className="col-md-6 form-it">
                                <label>Movie Release Date</label>
                                <input
                                  type="text"
                                  name="moviereleasedate"
                                  placeholder="Movie Release Date"
                                  onChange={this.newUpdated}
                                  value={this.state.moviereleasedate}
                                />
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-md-2">
                                <button
                                  className="redbtn btn"
                                  onClick={this.updateMovie}
                                >
                                  Update
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
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

export default MovieUpdate;
