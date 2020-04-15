import React, { useState, useEffect } from "react";
import NavBar from "../components/nav/nav";
import "../sass/profile.scss";
import Cookies from "js-cookie";
import API from "../utils/API";

import { Link } from "react-router-dom";
import Isolated from "../components/isolatedSvg";
function Profile() {
  const [activeUser] = useState(Cookies.get("name"));
  const [userPlaygroundCode, setUserPlaygroundCode] = useState([]);

  useEffect(() => {
    API.getPlaygroundCode(activeUser)
      .then(data => {
        console.log(data.data);
        setUserPlaygroundCode(data.data);
      })
      .catch(error => console.log(error));
  }, [activeUser]);

  return (
    <div>
      <div>
        <NavBar name={activeUser} />
      </div>
      {/* <h2 className="playUserName">Welcome to your Dashboard: {activeUser}</h2> */}
      <h1 className="d-flex justify-content-center authorText">
        {activeUser}'s Playmations
      </h1>
      <div className="profileContainer">
        {userPlaygroundCode.map(code => {
          return (
            <div key={code._id}>
              <Link
                to={{
                  pathname: "/playground/" + code._id,
                  state: {
                    fromProfile: true,
                    id: code._id,
                    html: code.html
                  }
                }}
              >
                <Isolated />
                <h3 className="profilePlaymations">{code.playmation_name}</h3>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Profile;
