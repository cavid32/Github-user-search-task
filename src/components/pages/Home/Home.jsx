import React, { useState } from "react";
import SearchBox from "./SearchBox";
import User from "./User";
import AlertBox from "./AlertBox";
import "./Home.scss";
const Home = ({
  data,
  setData,
  searchUser,
  setSearchUser,
  userInfo,
  setUserInfo,
}) => {
  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const [bool, setBool] = useState(false);
  const [resCount, setResCount] = useState(0);

  return (
    <div style={{ height: "100%",width:"1170px", maxWidth: "95vw" }}>
      <AlertBox state={state} setState={setState} />
      <h1 style={{ color: "#fff",textAlign:"center" }}>Github Users. Search any user at once</h1>
      <SearchBox
        setData={setData}
        searchUser={searchUser}
        setSearchUser={setSearchUser}
        state={state}
        setState={setState}
        setBool={setBool}
        setResCount={setResCount}
      />
      {resCount > 0 && (
        <h3 style={{ color: "#fff" }}>
          <span>{resCount}</span>
          <span> in search</span>
        </h3>
      )}
      <div
        className="user-container"
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto",
          columnGap: 20,
          rowGap: 20,
        }}
      >
        {bool && (
          <h2 style={{ color: "#fff" }}>No github user in this search !</h2>
        )}
        {data.length > 0 &&
          data.map((user) => (
            <User
              key={user.id}
              user={user}
              userInfo={userInfo}
              setUserInfo={setUserInfo}
              searchUser={searchUser}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
