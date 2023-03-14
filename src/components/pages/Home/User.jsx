import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, Link } from "@mui/material";
import { NavLink } from "react-router-dom";
import axios from "axios";
const User = ({ user, userInfo, setUserInfo, searchUser }) => {
  const handleUserInfo = () => {
    axios
      .get(`https://api.github.com/users/${user.login}`)
      .then((res) => {
        console.log(res.data);
        setUserInfo({
          ...userInfo,
          login: res.data.login,
          imageUrl: res.data.avatar_url,
          reposCount: res.data.public_repos,
          email: res.data.blog,
          created_at: res.data.created_at.substr(0, 10),
          following: res.data.following,
          followers: res.data.followers,
          location: res.data.location,
        });
      })
      .catch((error) => console.log(error.message));
    console.log(userInfo);
  };
  return (
    <Card sx={{ maxWidth: 390 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100%"
          width="100%"
          style={{ objectFit: "cover" }}
          src={user.avatar_url}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h5"
            style={{
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
            }}
          >
            {user.login}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
            }}
          >
            <i className="fa-brands fa-github" style={{ fontSize: "22px" }}></i>
            <Link
              href={user.html_url}
              target="_blank"
              underline="none"
              style={{
                fontSize: "22px",
                marginLeft: "6px",
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "nowrap",
              }}
            >
              {user.login}
            </Link>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <NavLink
          to={`/user/${user.login}`}
          size="large"
          color="primary"
          style={{
            textDecoration: "none",
            fontFamily: "Roboto,Helvetica,Arial,sans-serif",
            fontSize: "22px",
          }}
          onClick={handleUserInfo}
        >
          Go to User
        </NavLink>
      </CardActions>
    </Card>
  );
};

export default User;
