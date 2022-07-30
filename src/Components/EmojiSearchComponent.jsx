import { Typography, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import { emojiList } from "./emoji";
import EmojiDictionary from "./EmojiDictionary";

function EmojiSearchComponent() {
  const [emoji, setEmoji] = useState("");
  const [searchValue, setSearchValue] = React.useState("");

  const onChange = (e) => {
    setEmoji(e.target.value);
  };

  useEffect(() => {
    if (emoji) {
      const list = emojiList.map((item) => item.emoji);

      if (list.includes(emoji)) {
        const emojiName = emojiList.find((item) => item.emoji === emoji).name;
        setSearchValue(`${emoji}- ${emojiName}`);
      } else {
        setSearchValue(`${emoji}- ${"No Emoji Found"}`);
      }
    } else {
      setSearchValue("Translation will appear here");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [emoji]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "2em",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <TextField
        value={emoji}
        onChange={onChange}
        variant="outlined"
        placeholder="Enter any Emoji"
      />
      <Typography
        style={{
          marginTop: "0.5em",
          textTransform: "capitalize",
          fontWeight: "bold",
        }}
      >
        {searchValue ? searchValue : "Translation will appear here"}
      </Typography>

      <EmojiDictionary />
    </div>
  );
}

export default EmojiSearchComponent;