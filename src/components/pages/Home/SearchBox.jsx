import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import "./SearchBox.scss";
const SearchBox = ({
  setData,
  searchUser,
  setSearchUser,
  state,
  setState,
  setBool,
  setResCount,
}) => {
  const handleSearchUser = async (e) => {
    e.preventDefault();
    try {
      if (searchUser !== "" || searchUser !== " ") {
        let result = await axios.get(
          `https://api.github.com/search/users?q=${searchUser}`
        );
        console.log(result.data.items);
        setData(result.data.items);
        setResCount(result.data.items.length);
        if (result.data.items.length === 0) {
          setBool(true);
        } else {
          setBool(false);
        }
      }
    } catch (error) {
      setState({ ...state, open: true });
      console.log(state);
    }
  };

  return (
    <Paper
      style={{
        position: "sticky",
        top: "0",
        zIndex: "2",
        width: "100%",
        marginBottom: "30px",
        padding:"5px 0 5px 0"
      }}
      component="form"
      autoComplete="on"
      onSubmit={(e) => handleSearchUser(e)}
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search github user"
        inputProps={{ "aria-label": "search google maps" }}
        value={searchUser}
        onChange={(e) => setSearchUser(e.target.value)}
      />
      <IconButton
        className="search-btn"
        type="submit"
        sx={{ p: "10px", backgroundColor: "#3498db", color: "#fff", marginRight:"5px" }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28 }} />
    </Paper>
  );
};

export default SearchBox;
