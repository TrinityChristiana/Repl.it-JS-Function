// Capitalize letter of food
let capitalize = (word) => {
    let capWord = word[0].toUpperCase() + word.slice(1, word.length);
    return capWord;
  };
  
  // Define a cook function
  const cook = (obj) => {
    return `Cooked ${obj.food}`;
  };
  
  // Define a slice function
  const slice = (obj) => {
    let foodWord = capitalize(obj.food);
    return `${foodWord} slices`;
  };
  
  // Define a mealMaker function
  const mealMaker = (array) => {
    let newFoodArray = [];
    for(let i = 0; i < array.length; i++){
      if(array[i].type == "vegetable") {
        newFoodArray.push(slice(array[i]));
      } else if (array[i].type == "meat") {
        newFoodArray.push(cook(array[i]));
        
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
      "food": "chicken",
      "type": "meat"
    }
  ];
  
  
  // Invoke the mealMaker function and pass the array to it as an argument
  mealMaker(arrayOfFoodObjects);