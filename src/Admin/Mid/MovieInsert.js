import { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

class MovieInsert extends Component {
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
    config: {
      headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
    },
  };

  textChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  changeFileHandler = (e) => {
    this.setState({
      filename: e.target.files[0],
    });
  };

  showMoviePreview = (event) => {
    if (event.target.files.length > 0) {
      var src = URL.createObjectURL(event.target.files[0]);
      var preview = document.getElementById("movie-image-preview");
      preview.src = src;
      preview.style.display = "block";
    }
  };

  twoFunction = (e) => {
    this.changeFileHandler(e);
    this.showMoviePreview(e);
  };

  sendData = (e) => {
    e.preventDefault();
    const data = new FormData();

    data.append("moviename", this.state.moviename);
    data.append("movierate", this.state.movierate);
    data.append("moviecast", this.state.moviecast);
    data.append("moviedirector", this.state.moviedirector);
    data.append("moviewriter", this.state.moviewriter);
    data.append("movieoverview", this.state.movieoverview);
    data.append("movieruntime", this.state.movieruntime);
    data.append("moviegenre", this.state.moviegenre);
    data.append("moviempaa", this.state.moviempaa);
    data.append("moviereleasedate", this.state.moviereleasedate);
    data.append("movieimage", this.state.filename);
    axios
      .post("http://localhost:90/movies/insert", data, this.state.config)
      .then((result) => {
        console.log(result);
        // window.location = ("/movie/show");
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
                  <h1>Movie Inserting </h1>
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

                <div className="page-single">
                  <div className="container">
                    <div className="row ipad-width">
                      <div className="col-md-9 col-sm-12 col-xs-12">
                        <div className="form-style-1 user-pro" action="#">
                          <form action="#" className="user">
                            <h4>Movie Insert</h4>

                            <div className="movie-item-style-2 movie-item-style-1">
                              <a href="#">
                                <img id="movie-image-preview" src="" alt="" />
                                <br />
                              </a>
                            </div>
                            <div className="row">
                              <div className="col-md-6 form-it">
                                <input
                                  type="file"
                                  name="files"
                                  onChange={this.twoFunction}
                                  value={this.state.movieimage}
                                  id="file"
                                  accept="image/*"
                                />
                                <label for="file" className="redbtn">
                                  Movie Image
                                </label>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-md-6 form-it">
                                <label>Movie Name</label>
                                <input
                                  type="text"
                                  name="moviename"
                                  placeholder="Moive Name"
                                  onChange={this.textChangeHandler}
                                  value={this.state.moviename}
                                />
                              </div>
                              <div className="col-md-6 form-it">
                                <label>Movie Rating</label>
                                <input
                                  type="text"
                                  name="movierate"
                                  placeholder="Movie Rating"
                                  onChange={this.textChangeHandler}
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
                                  onChange={this.textChangeHandler}
                                  value={this.state.moviecast}
                                />
                              </div>
                              <div className="col-md-6 form-it">
                                <label>Movie Director</label>
                                <input
                                  type="text"
                                  name="moviedirector"
                                  placeholder="Movie Director"
                                  onChange={this.textChangeHandler}
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
                                  onChange={this.textChangeHandler}
                                  value={this.state.moviewriter}
                                />
                              </div>
                              <div className="col-md-6 form-it">
                                <label>Movie OverView</label>
                                <input
                                  type="text"
                                  name="movieoverview"
                                  placeholder="Movie Overview"
                                  onChange={this.textChangeHandler}
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
                                  onChange={this.textChangeHandler}
                                  value={this.state.movieruntime}
                                />
                              </div>
                              <div className="col-md-6 form-it">
                                <label>Movie Genre</label>
                                <input
                                  type="text"
                                  name="moviegenre"
                                  placeholder="Movie Genre"
                                  onChange={this.textChangeHandler}
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
                                  onChange={this.textChangeHandler}
                                  value={this.state.moviempaa}
                                />
                              </div>
                              <div className="col-md-6 form-it">
                                <label>Movie Release Date</label>
                                <input
                                  type="text"
                                  name="moviereleasedate"
                                  placeholder="Movie Release Date"
                                  onChange={this.textChangeHandler}
                                  value={this.state.moviereleasedate}
                                />
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-md-2">
                                <button
                                  className="redbtn btn"
                                  onClick={this.sendData}
                                >
                                  Insert
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

export default MovieInsert;
