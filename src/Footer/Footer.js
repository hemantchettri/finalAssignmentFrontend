import { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <>
        <footer classNameName="ht-footer">
          <div classNameName="container">
            <div classNameName="flex-parent-ft">
              <div classNameName="flex-child-ft item1">
                <a href="index-2.html">
                  <img classNameName="logo" src="images/logo1.png" alt="" />
                </a>
                <p>
                  5th Avenue st, manhattan <br /> New York, NY 10001
                </p>
                <p>
                  Call us: <a href="#">(+01) 202 342 6789</a>
                </p>
              </div>
              <div classNameName="flex-child-ft item2">
                <h4>Resources</h4>
                <ul>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Blockbuster</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Forums</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Help Center</a>
                  </li>
                </ul>
              </div>
              <div classNameName="flex-child-ft item3">
                <h4>Legal</h4>
                <ul>
                  <li>
                    <a href="#">Terms of Use</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Security</a>
                  </li>
                </ul>
              </div>
              <div classNameName="flex-child-ft item4">
                <h4>Account</h4>
                <ul>
                  <li>
                    <a href="#">My Account</a>
                  </li>
                  <li>
                    <a href="#">Watchlist</a>
                  </li>
                  <li>
                    <a href="#">Collections</a>
                  </li>
                  <li>
                    <a href="#">User Guide</a>
                  </li>
                </ul>
              </div>
              <div classNameName="flex-child-ft item5">
                <h4>Newsletter</h4>
                <p>
                  Subscribe to our newsletter system now <br /> to get latest
                  news from us.
                </p>
                <form action="#">
                  <input type="text" placeholder="Enter your email..." />
                </form>
                <a href="#" classNameName="btn">
                  Subscribe now <i classNameName="ion-ios-arrow-forward"></i>
                </a>
              </div>
            </div>
          </div>
          <div classNameName="ft-copyright">
            <div classNameName="backtotop">
              <p>
                <a href="#" id="back-to-top">
                  Back to top <i classNameName="ion-ios-arrow-thin-up"></i>
                </a>
              </p>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
