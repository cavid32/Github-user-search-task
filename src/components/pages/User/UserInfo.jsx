import React from "react";
import "./UserInfo.css";
const UserInfo = ({ data, userInfo }) => {
  return (
    <div className="container-user-info">
      {data.length <= 0 ? (
        <h2 style={{ color: "#fff" }}>Data is not here</h2>
      ) : (
        <section className="profile">
          <header className="header">
            <div className="details">
              <img
                src={userInfo.imageUrl}
                alt={userInfo.login}
                className="profile-pic"
              />
              <h1 className="heading">{userInfo.login}</h1>
              <p>{userInfo.email}</p>
              <p>
                <span>Create User: </span>
                {userInfo.created_at}
              </p>
              {userInfo.location && (
                <div className="location">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12 ,2Z"></path>
                  </svg>
                  <p style={{ marginLeft: "5px" }}>{userInfo.location}</p>
                </div>
              )}
              <div className="stats">
                <div className="col-4">
                  <h4>{userInfo.reposCount}</h4>
                  <p>Repositories</p>
                </div>
                <div className="col-4">
                  <h4>{userInfo.following}</h4>
                  <p>Following</p>
                </div>
                <div className="col-4">
                  <h4>{userInfo.followers}</h4>
                  <p>Followers</p>
                </div>
              </div>
            </div>
          </header>
        </section>
      )}
    </div>
  );
};

export default UserInfo;
