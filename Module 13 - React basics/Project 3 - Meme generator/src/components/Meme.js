import React from "react";
/* import memesData from "../memesData"; */

export default function Form() {
  /* 6. Setting default state with meme-related object data */
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  /* 1. Getting all meme images from data to allMeme object */
  const [allMeme, setAllMeme] = React.useState([]);

  /* 2 / 9 Making API call to get the data from internet */
  /* Look line 100 for more information */
  React.useEffect(() => {
    /* Fetch JSON data from internet */
    fetch("https://api.imgflip.com/get_memes")
      /* Parse json */
      .then((res) => res.json())
      /* Set fetched json data to setAllMeme state, which causes re-render */
      .then((data) => setAllMeme(data.data.memes));

    /* Cleanup function */
    return () => {};
  }, []);

  /* 2. Function to get and set new meme image when button is pressed */
  function getMemeImage() {
    /* 3. Getting data from allMeme object and placing it to variable */
    const memesArray = allMeme;
    /* 4. Randomising number from objects in memesArray  (this can be simplified)*/
    const rndNumber = Math.floor(Math.random() * memesArray.length);
    /* 5. Getting image url based on randomised number AND updating setMeme state*/
    const url = memesArray[rndNumber].url;

    /* 7. Accessing setMeme function to change url image object to new random one */
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: url,
      };
    });
  }

  /* 8. Handling form data and updating it automatically to image*/
  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMemeData) => {
      return {
        ...prevMemeData,
        [name]: value,
      };
    });
  }

  return (
    <main>
      <div class="mx-20">
        <div class="flex gap-4 mt-8 mb-4">
          <input
            class="shadow appearance-none border-2 rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-2 focus:border-indigo-500"
            name="topText"
            type="text"
            placeholder="Top text"
            onChange={handleChange}
            value={meme.topText}
          />
          <input
            class="shadow appearance-none border-2 rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-2 focus:border-indigo-500"
            name="bottomText"
            type="text"
            placeholder="Bottom text"
            onChange={handleChange}
            value={meme.bottomText}
          />
        </div>
        <button
          onClick={getMemeImage}
          class="shadow text-white text-lg rounded-xl py-2 px-8 btn bg-indigo-500 w-full"
        >
          Get a new meme image
        </button>
      </div>
      <div className="meme">
        <img
          src={meme.randomImage}
          className="meme--image"
          alt={meme.randomImage}
        />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}

/*
    useEffect takes a function as its parameter. If that function
    returns something, it needs to be a cleanup function. Otherwise,
    it should return nothing. If we make it an async function, it
    automatically retuns a promise instead of a function or nothing.
    Therefore, if you want to use async operations inside of useEffect,
    you need to define the function separately inside of the callback
    function, as seen below: (line 20 ->)
    */

/*  This is asynchronous way to use useEffect
    React.useEffect(() => {
      async function getMemes() {

        const res = await fetch("https://api.imgflip.com/get_memes");
        
        const data = await res.json();
        
        setAllMeme(data.data.memes);
      }
      getMemes();
    }, []);
    
    */
