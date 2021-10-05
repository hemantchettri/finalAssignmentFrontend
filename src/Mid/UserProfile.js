import axios from "axios";
import { Component } from "react";
import { Redirect } from "react-router-dom";
// import { eventManager } from "react-toastify/dist/core";

class UserProfile extends Component {
    state = {
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        filename: null,
        config: {
        headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
        },
        id: localStorage.getItem("id"),
    };

    componentDidMount() {
        axios
        .get(
            "http://localhost:90/profile/single/" + this.state.id,
            this.state.config
        )
        .then((res) => {
            this.setState({
            firstname: res.data.firstname,
            lastname: res.data.lastname,
            username: res.data.username,
            email: res.data.email,
            profile_pic: res.data.profile_pic,
            });
            console.log(res.data);
        })
        .catch();
    }

    newUpdatedProfile = (e) => {
        this.setState({
        [e.target.name]: e.target.value,
        });
    };

    changeFileHandler = (e) => {
        console.log(e.target.files[0]);
        // this.setState({
        //   filename: e.target.files[0],
        // });
        this.state.filename = e.target.files[0];
        console.log("working");
    };

    updateProfile = (e) => {
        e.preventDefault();
        const userUpdateData = {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        username: this.state.username,
        email: this.state.email,
        profile_pic: this.state.profile_pic,
        };
        axios
        .put(
            "http://localhost:90/profile/update/" + this.state.id,
            userUpdateData,
            this.state.config
        )
        .then((res) => {
            window.location.reload(true);
        })
        .catch();
    };

    showPreview = (event) => {
        if (event.target.files.length > 0) {
        var src = URL.createObjectURL(event.target.files[0]);
        var preview = document.getElementById("file-ip-1-preview");
        preview.src = src;
        preview.style.display = "block";
        // Update
        const data = new FormData();
        data.append("myimage", this.state.filename);
        console.log(this.state.filename);
        axios
            .post("http://localhost:90/profile/update", data, this.state.config)
            .then((result) => {
            console.log(result);
            // window.location = ("/movie/show");
            })
            .catch();
        }
    };

    twoFunctionHandler = (e) => {
        this.changeFileHandler(e);
        this.showPreview(e);
    };

    render() {
        if (!localStorage.getItem("token")) {
        return <Redirect to="/" />;
        }

        return (
        <>
            <div classNameName="hero user-hero">
            <div classNameName="container">
                <div classNameName="row">
                <div classNameName="col-md-12">
                    <div classNameName="hero-ct">
                    <h1>
                        {this.state.firstname + " " + this.state.lastname}’ s
                        profile
                    </h1>
                    <ul classNameName="breadcumb">
                        <li classNameName="active">
                        <a href="/">Home</a>
                        </li>
                        <li>
                        <span classNameName="ion-ios-arrow-right"></span>Profile
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div classNameName="page-single">
            <div classNameName="container">
                <div classNameName="row ipad-width">
                <div classNameName="col-md-3 col-sm-12 col-xs-12">
                    <div classNameName="user-information">
                    <div classNameName="user-img">
                        <a href="#">
                        {/* <img src="images/uploads/user-img.png" alt="" /> */}
                        <img id="file-ip-1-preview" src={"http://localhost:90/" + this.state.profile_pic} alt="" />
                        <br />
                        </a>
                        <input type="file" id="file" accept="image/*" onChange={this.twoFunctionHandler} />
                        <label for="file" classNameName="redbtn">
                        Change avatar
                        </label>
                    </div>
                    <div classNameName="user-fav">
                        <p>Account Details</p>
                        <ul>
                        <li classNameName="active">
                            <a href="userprofile.html">Profile</a>
                        </li>
                        <li>
                            <a href="userfavoritelist.html">Favorite movies</a>
                        </li>
                        <li>
                            <a href="userrate.html">Rated movies</a>
                        </li>
                        </ul>
                    </div>
                    <div classNameName="user-fav">
                        <p>Others</p>
                        <ul>
                        <li>
                            <a href="#">Change password</a>
                        </li>
                        <li>
                            <a href="#">Log out</a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div classNameName="col-md-9 col-sm-12 col-xs-12">
                    <div classNameName="form-style-1 user-pro" action="#">
                    <form action="#" classNameName="user">
                        <h4>01. Profile details</h4>
                        <div classNameName="row">
                        <div classNameName="col-md-6 form-it">
                            <label>Username</label>
                            <input type="text" placeholder="edwardkennedy" name="username" value={this.state.username} onChange={this.newUpdatedProfile} />
                        </div>
                        <div classNameName="col-md-6 form-it">
                            <label>Email Address</label>
                            <input type="text" placeholder="edward@kennedy.com" name="email" value={this.state.email} onChange={this.newUpdatedProfile} />
                        </div>
                        </div>
                        <div classNameName="row">
                        <div classNameName="col-md-6 form-it">
                            <label>First Name</label>
                            <input type="text" placeholder="Edward " name="firstname" value={this.state.firstname} onChange={this.newUpdatedProfile} />
                        </div>
                        <div classNameName="col-md-6 form-it">
                            <label>Last Name</label>
                            <input type="text" placeholder="Kennedy" name="lastname" value={this.state.lastname} onChange={this.newUpdatedProfile} />
                        </div>
                        </div>

                        <div classNameName="row">
                        <div classNameName="col-md-2">
                            <input classNameName="submit" type="submit" value="save" onClick={this.updateProfile} />
                        </div>
                        </div>
                    </form>
                    <form action="#" classNameName="password">
                        <h4>02. Change password</h4>
                        <div classNameName="row">
                        <div classNameName="col-md-6 form-it">
                            <label>Old Password</label>
                            <input type="text" placeholder="**********" />
                        </div>
                        </div>
                        <div classNameName="row">
                        <div classNameName="col-md-6 form-it">
                            <label>New Password</label>
                            <input type="text" placeholder="***************" />
                        </div>
                        </div>
                        <div classNameName="row">
                        <div classNameName="col-md-6 form-it">
                            <label>Confirm New Password</label>
                            <input type="text" placeholder="*************** " />
                        </div>
                        </div>
                        <div classNameName="row">
                        <div classNameName="col-md-2">
                            <input classNameName="submit" type="submit" value="change" />
                        </div>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </>
        );
    }
}

export default UserProfile;
