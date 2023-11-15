import React, { useState } from "react";
import DataObj from "./MemeData.js";

function Meme() {
  const [url, setUrl] = useState("");

  function handleClick(e) {
    const dataMemes = DataObj.data.memes;
    const getUrl =
      dataMemes[Math.floor(Math.random() * dataMemes.length + 1)].url;
    setUrl(getUrl);
    e.preventDefault();
  }
  return (
    <form>
      <div className="input_div">
        <input type="text" placeholder="Top Text" />
        <input type="text" placeholder="Bottom Text" />
      </div>
      <button onClick={handleClick}>Get a new meme image 🖼️</button>
      <img src={url} alt="" />
    </form>
  );
}

export default Meme;
