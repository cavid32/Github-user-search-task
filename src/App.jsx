import React, { useState, useEffect } from "react";
import Home from "./components/pages/Home/Home";
import UserInfo from "./components/pages/User/UserInfo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  const [data, setData] = useState([]);
  const [searchUser, setSearchUser] = useState("");
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => console.log(userInfo), [userInfo]);
  return (
    <div
      className="App"
      style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                data={data}
                setData={setData}
                searchUser={searchUser}
                setSearchUser={setSearchUser}
                setUserInfo={setUserInfo}
                userInfo={userInfo}
              />
            }
          />
          <Route
            path="/user/:login"
            element={<UserInfo data={data} userInfo={userInfo} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
