import React from 'react'
import memesData from '../memesData'
import '../App.css'

function MemeContent() {

  // const [memeImage, setMemeImage] = React.useState("https://i.imgflip.com/1bij.jpg");
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1bij.jpg"
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function getRandomImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }));
  }

  return (
    <main>
        <div className='form'>
            <input type='text' className='form--input' placeholder='Top Text' />
            <input type='text' className='form--input' placeholder='Bottom Text' />
            <button className='form--button' onClick={getRandomImage}>Get a new meme image 🖼️</button>
            <img src={meme.randomImage} className='meme--image' />
        </div>
    </main>
  )
}

export default MemeContent