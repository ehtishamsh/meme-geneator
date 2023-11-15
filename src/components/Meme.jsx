import React, { useState } from "react";
import DataObj from "./MemeData.js";

function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImg: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages, setallMemeImages] = useState(DataObj);
  function handleClick(e) {
    const dataMemes = allMemeImages.data.memes;
    const getUrl =
      dataMemes[Math.floor(Math.random() * dataMemes.length + 1)].url;
    setMeme((prev) => {
      return { ...prev, randomImg: getUrl };
    });
    e.preventDefault();
  }
  return (
    <form>
      <div className="input_div">
        <input type="text" placeholder="Top Text" />
        <input type="text" placeholder="Bottom Text" />
      </div>
      <button onClick={handleClick}>Get a new meme image 🖼️</button>
      <img src={meme.randomImg} alt="" className="meme--image" />
    </form>
  );
}

export default Meme;
