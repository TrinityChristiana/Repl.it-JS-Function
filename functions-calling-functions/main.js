// Capitalize letter of food
let capitalize = (word) => {
    if (word){
      let capWord = word[0].toUpperCase() + word.slice(1, word.length);
      return capWord;
    }
    
  };
  
  // Define a cook function
  const cook = (food) => {
    return `Cooked ${food}`;
  };
  
  // Define a slice function
  const slice = (food) => {
    if (food){
      let foodWord = capitalize(food);
      return `${foodWord} slices`;
    }
   
  };
  
  // Define a mealMaker function
  const mealMaker = (array) => {
    let newFoodArray = [];
    for(let i = 0; i < array.length; i++){
      if(array[i].type === "vegetable") {
        newFoodArray.push(slice(array[i].food));
      } else if (array[i].type === "meat") {
        newFoodArray.push(cook(array[i].food));
        
      }
    }
    
   return newFoodArray;
  };
  
  // Define four objects in the following array. Two of each type
  const arrayOfFoodObjects = [
    {
      "food": "carrot",
      "type": "vegetable"
    },
    {
      "food": "beef",
      "type": "meat"
    },
    {
      "food": "cucumber",
      "type": "vegetable"
    },
    {
      "food": "beet",
      "type": "vegetable"
    }
  ];
  
  
  // Invoke the mealMaker function and pass the array to it as an argument
  mealMaker(arrayOfFoodObjects);