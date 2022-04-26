// This program generates random message based on 3 separate datasets.

// random index number generator
const createRandom = maxNum => {
    return Math.floor(Math.random() * maxNum);
  }
  // House dataset
  const houseList = ['Griffindor', 'Ravenclaw', 'Slytherin', 'Hufflepuff'];
  
  // Lesson dataset
  const lessonList = ['Charms', 'Transfiguration', 'Potions', 'History of Magic', 'Astronomy', 'Herbology', 'Defense against the Dark Arts'];
  
  // Friends dataset
  const friendList = ['Harry Potter', 'Ronald Weasley', 'Hermione Granger', 'Neville Longbottom'];
  
  // Choose a random item from each list. Store in variable.
  let house = houseList[createRandom(houseList.length)];
  let lesson = lessonList[createRandom(lessonList.length)];
  let friend = friendList[createRandom(friendList.length)];
  
  // Output the message to the console.
  console.log(`Welcome to Hogwarts. Your house is "${house}", your first lesson today is "${lesson}" and you will practice with ${friend}.`);