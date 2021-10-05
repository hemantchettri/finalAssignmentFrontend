import { Component } from "react";
import axios from "axios";

class Users extends Component {
  state = {
    users: [],
    config: {
      headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
    },
  };

  componentDidMount() {
    axios
      .get("http://localhost:90/profile/showall" , this.state.config)
      .then((res) => {
        this.setState({
          users:res.data.data,
        });
        console.log(res.data);
      })
      .catch();
  }

  /****** START OF DELETE USER FUNCTION *****/
    deleteUser = (user_id) => {
        axios
        .delete("http://localhost:90/profile/delete/" + user_id, this.state.config)
        .then((res) => {
            window.location.reload(true);
            // window.location= ("/movie/show")
        })
        .catch();
    };

  render() {
    return (
      <>
        <div className="hero common-hero">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="hero-ct">
                  <h1> users listing</h1>
                  <ul className="breadcumb">
                    <li className="active">
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <span className="ion-ios-arrow-right"></span> users listing
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
              <div className="col-md-10 col-sm-12 col-xs-12">
                {this.state.users.map((user) => {
                  return (
                    <div className="blog-item-style-1 blog-item-style-3">
                      <img src={"http://localhost:90/" + user.profile_pic} alt="" />
                      <div className="blog-it-infor">
                        <h3>
                          <a href="#">
                            {user.firstname +" "+ user.lastname}
                          </a>
                        </h3>
                        <p>
                          Africa's burgeoning animation scene got a boost this
                          week with the announcement of an ambitious new
                          partnership that will pair rising talents from across
                          the continent ...
                        </p>
                        <p><span className="time">Username : { user.username }</span></p>
                        <p><span className="time">Email : { user.email }</span></p>
                        <h3><p><span > <button className="fa fa-trash" onClick={()=> this.deleteUser(user._id)}> Delete</button> </span></p></h3>
                        
                      </div>
                    </div>
                  );
                })}

                <ul className="pagination">
                  <li className="icon-prev">
                    <a href="#">
                      <i className="ion-ios-arrow-left"></i>
                    </a>
                  </li>
                  <li className="active">
                    <a href="#">1</a>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">4</a>
                  </li>
                  <li>
                    <a href="#">...</a>
                  </li>
                  <li>
                    <a href="#">21</a>
                  </li>
                  <li>
                    <a href="#">22</a>
                  </li>
                  <li className="icon-next">
                    <a href="#">
                      <i className="ion-ios-arrow-right"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Users;