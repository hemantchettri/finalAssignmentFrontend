import axios from "axios";
import { Component } from "react";

class Review extends Component {
    state = {
        review: "",
        reviewTitle: "",
        reviews: [],
        id: this.props.match.params.id,
        config: {
            headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
        },
    };

    reviewText = (e) => {
        this.setState({
        [e.target.name]: e.target.value,
        });
    };

    reviewButton = (e) => {
        e.preventDefault();
        const reviewData = {
        reviewTitle: this.state.reviewTitle,
        review: this.state.review,
        };

        // reviewData.append("review", this.state.review);
        axios
        .post(
            "http://localhost:90/movies/review/" + this.state.id,
            reviewData,
            this.state.config
        )
        .then((result) => {
            console.log(result);
            // window.location.reload(true);
            this.getReview();
        })
        .catch();
    };

    componentDidMount() {
        this.getReview();
        this.getDate();
    }

    getReview() {
        axios
        .get("http://localhost:90/movies/review/" + this.state.id)
        .then((res) => {
            this.setState({
            reviews: res.data.data,
            });
            console.log(res.data.data);
        });
    }

    getDate() {
        this.setState({
        date: new Date().toLocaleString(),
        });
    }

    render() {
        return (
        <>
            {/* <div classNameName="hero common-hero">
            <div classNameName="container">
                <div classNameName="row">
                <div classNameName="col-md-12">
                    <div classNameName="hero-ct">
                    <h1>Movie Review </h1>
                    <ul classNameName="breadcumb">
                        <li classNameName="active">
                        <a href="/">Home</a>
                        </li>
                        <li>
                        <span classNameName="ion-ios-arrow-right"></span> movie review
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            </div> */}

            <div classNameName="hero mv-single-hero">
            <div classNameName="container">
                <div classNameName="row">
                <div classNameName="col-md-12"></div>
                </div>
            </div>
            </div>

            <div>
            <div classNameName="page-single movie-single movie_single">
                <div classNameName="container">
                <div classNameName="row ipad-width2">
                    <div classNameName="movie-single-ct main-content">
                    <div classNameName="movie-tabs">
                        <div classNameName="tabs">
                        <div classNameName="tab-content">
                            <div id="reviews" classNameName="tab active">
                            <div classNameName="row blog-detail-ct">
                                <div classNameName="col-md-10 col-sm-12 col-xs-12">
                                <div classNameName="rv-hd">
                                    <div classNameName="div">
                                    <h3>Related Movies To</h3>
                                    <h2>Skyfall: Quantum of Spectre</h2>
                                    </div>
                                    <a href="#userReview" classNameName="redbtn"> Write Review </a>
                                </div>
                                <div classNameName="topbar-filter">
                                    <p> Found <span>56 reviews</span> in total </p>
                                    <label>Filter by:</label>
                                    <select>
                                    <option value="popularity">
                                        Popularity Descending
                                    </option>
                                    <option value="popularity">
                                        Popularity Ascending
                                    </option>
                                    <option value="rating">
                                        Rating Descending
                                    </option>
                                    <option value="rating">
                                        Rating Ascending
                                    </option>
                                    <option value="date">
                                        Release date Descending
                                    </option>
                                    <option value="date">
                                        Release date Ascending
                                    </option>
                                    </select>
                                </div>
                                {this.state.reviews.map((movieReview) => {
                                    return (
                                    <div classNameName="mv-user-review-item">
                                        <div classNameName="user-infor">
                                        <img src="images/uploads/userava1.jpg" alt="" />
                                        <div>
                                            <h3>{movieReview.reviewTitle}</h3>
                                            <div classNameName="no-star">
                                            <i classNameName="ion-android-star"></i>
                                            <i classNameName="ion-android-star"></i>
                                            <i classNameName="ion-android-star"></i>
                                            <i classNameName="ion-android-star"></i>
                                            <i classNameName="ion-android-star"></i>
                                            <i classNameName="ion-android-star"></i>
                                            <i classNameName="ion-android-star"></i>
                                            <i classNameName="ion-android-star"></i>
                                            <i classNameName="ion-android-star"></i>
                                            <i classNameName="ion-android-star last"></i>
                                            </div>
                                            <p classNameName="time">
                                            {movieReview.date.substring(0, 10)}
                                            <a href="#"> {movieReview.user.username} </a>
                                            </p>
                                        </div>
                                        </div>
                                        <p>{movieReview.review}</p>
                                    </div>
                                    );
                                })}
                                <div classNameName="topbar-filter">
                                    <label>Reviews per page:</label>
                                    <select>
                                    <option value="range">5 Reviews</option>
                                    <option value="saab">10 Reviews</option>
                                    </select>
                                    <div classNameName="pagination2">
                                    <span>Page 1 of 6:</span>
                                    <a classNameName="active" href="#">
                                        1
                                    </a>
                                    <a href="#">2</a>
                                    <a href="#">3</a>
                                    <a href="#">4</a>
                                    <a href="#">5</a>
                                    <a href="#">6</a>
                                    <a href="#">
                                        <i classNameName="ion-arrow-right-b"></i>
                                    </a>
                                    </div>
                                </div>
                                <div id="userReview" classNameName="comment-form">
                                    <h4>Leave your review</h4>
                                    <form action="#">
                                    <div classNameName="row">
                                        <div classNameName="col-md-6">
                                        <input type="text" name="reviewTitle" placeholder="Review Title" onChange={this.reviewText} value={this.state.reviewTitle} />
                                        </div>
                                    </div>
                                    <div classNameName="row">
                                        <div classNameName="col-md-10">
                                        <textarea name="review" placeholder="Write your review here..." onChange={this.reviewText} value={this.state.review} />
                                        </div>
                                    </div>
                                    <input classNameName="submit" type="submit" placeholder="submit" value="Submit review" onClick={this.reviewButton} />
                                    </form>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
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

export default Review;
