import React, { useEffect, useState } from "react";

function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImg: "http://i.imgflip.com/1bij.jpg",
  });
  const [allImagesData, setAllimagesData] = useState([]);

  function handleClick(e) {
    const url =
      allImagesData[Math.floor(Math.random() * allImagesData.length + 1)].url;
    setMeme((prev) => {
      return { ...prev, randomImg: url, topText: "", bottomText: "" };
    });
    e.preventDefault();
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((e) => e.json())
      .then((item) => setAllimagesData(item.data.memes));
  }, []);
  return (
    <form>
      <div className="input_div">
        <input
          type="text"
          placeholder="Top Text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Bottom Text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
      </div>
      <button onClick={handleClick}>Get a new meme image 🖼️</button>
      <div className="imgCon">
        <img src={meme.randomImg} alt="" className="meme--image" />
        <div className="topText memeText">{meme.topText}</div>
        <div className="bottomText memeText">{meme.bottomText}</div>
      </div>
    </form>
  );
}

export default Meme;
