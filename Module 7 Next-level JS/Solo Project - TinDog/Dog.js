class Dog {
  // Assigning Dog data to this
  constructor(data) {
    Object.assign(this, data);
  }

  render() {
    return `
    <img class="rounded-xl px-1 absolute w-72" src="${this.avatar}" alt="">
    <div class="absolute text-white pl-4">
        <p class="text-xl font-bold mb-2 mt-72">${this.name}, ${this.age}</p>
        <p class="font-light text-sm w-64">${this.bio}</p>
    </div>
    `;
  }
  // This doesnt work :)
  /*   
  setMatchStatus(bool) {
    this.hasBeenLiked = bool;
    this.hasBeenSwiped = true;
  } 
  */

  // Render like/disliked on button presses
  likePress() {
    likeOrDislike.innerHTML = `
      <img src="images/badge-like.png" class="w-36 -rotate-45 mt-12 ml-4 absolute animate-pulse" alt=""></img>
    `;
    setTimeout(() => (likeOrDislike.innerHTML = ""), 1500);
  }

  dislikePress() {
    likeOrDislike.innerHTML = `
      <img src="images/badge-nope.png" class="w-36 -rotate-45 mt-12 ml-4 absolute animate-pulse" alt=""></img>
    `;
    setTimeout(() => (likeOrDislike.innerHTML = ""), 1500);
  }
}

export default Dog;
