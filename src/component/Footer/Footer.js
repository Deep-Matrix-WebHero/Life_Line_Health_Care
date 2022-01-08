import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* col-1 */}
          <div className="col-md-3 col-sm-6">
            <h4>Life_Line</h4>
            <ul className="list-unstyled">
              <li>018-00000000</li>
              <li>413,Shaheen Bag</li>
              <li>Shaheenbag,Dhaka-1215</li>
            </ul>
          </div>

          {/* col2 */}
          <div className="col-md-3 col-sm-6">
            <ul className="list-unstyled">
              <li>About Departments</li>
              <br />

              <li>Read our articles</li>
            </ul>
          </div>
          {/* col3 */}
          <div className="col-md-3 col-sm-6">
            <ul className="list-unstyled">
              <li>About Health care</li>
              <br />
              <li>Read our blogs</li>
            </ul>
          </div>
          <hr />
        </div>
        <div className="row">
          <div className="col-sm">
            &copy;{new Date().getUTCFullYear()} Life_Line_Health_Care |All right
            reserved to Ataur |Tearms of services | Privacy
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
