import { Typography } from "@mui/material";
import React from "react";
import { emojiList } from "./emoji";

function EmojiDictionary() {
  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        maxWidth: "60%",
        flexFlow: "wrap",
        marginTop: "2em",
        border: "1px solid",
      }}
    >
      {emojiList.map((emoji) => {
        return (
          <Typography
            style={{ margin: "0.5em", fontSize: "1.5em" }}
            key={emoji.name}
          >
            {emoji.emoji}
          </Typography>
        );
      })}
    </div>
  );
}

export default EmojiDictionary;
