import { Typography } from "@mui/material";
import React from "react";
import { emojiList } from "./emoji";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "2em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  emoji: {
    border: "1px solid",
    display: "flex",
    flexFlow: "wrap",
    maxWidth: "60%",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "95%",
    },
  },
}));

function EmojiDictionary(props) {
  const { setSearchValue } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography
        style={{ margin: "0.5em", fontSize: "1em", fontWeight: "bold" }}
      >
        Emoji Dictionary
      </Typography>
      <div className={classes.emoji}>
        {emojiList.map((emoji) => {
          return (
            <Typography
              onClick={() => {
                setSearchValue(`${emoji.emoji}- ${emoji.name}`);
              }}
              style={{ margin: "0.5em", fontSize: "1.5em", cursor: "pointer" }}
              key={emoji.name}
            >
              {emoji.emoji}
            </Typography>
          );
        })}
      </div>
    </div>
  );
}

export default EmojiDictionary;
