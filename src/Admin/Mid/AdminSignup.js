import axios from "axios";
import { Component } from "react";
import { NavLink } from "react-router-dom";

class AdminSignup extends Component {

    state = {
        username: "",
        email: "",
        password: ""
    }

    onChangeAdminRegister = (e) => {
        this.setState({
            [e.target.name] : e.target.value,
        })
    }

    registerAdminButton = (e) => {
        e.preventDefault();
        const signUpAdminData = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
        }
        axios.post("http://localhost:90/admin/register", signUpAdminData);
    }

    render() {
        return (
        <>
            <form>
                <input type="text" name="username" placeholder="Username" required value={this.state.username} onChange={this.onChangeAdminRegister}/> <br />
                <input type="text" name="email" placeholder="email" required value={this.state.email} onChange={this.onChangeAdminRegister}/> <br />
                <input type="password" name="password" placeholder="*****" required value={this.state.password} onChange={this.onChangeAdminRegister}/> <br />
                <button type="submit" onClick={this.registerAdminButton}> Sign up </button>
                <p>Already have an account?</p> <NavLink to="/admin/login">Login</NavLink>
            </form>
        </>
        );
    }
}

export default AdminSignup;
