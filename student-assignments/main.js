const zoe = {
    instructor: true,
    student: false,
    firstName: "Zoe",
    lastName: "Ames"
  }
  
  const nathan = {
    instructor: true,
    student: false,
    firstName: "Nathan",
    lastName: "Gonzalez"
  }
  
  const mo = {
    instructor: false,
    student: true,
    firstName: "Mo",
    lastName: "Silvera"
  }
  
  const lissa = {
    instructor: false,
    student: true,
    firstName: "Lissa",
    lastName: "Goforth"
  }
  
  /* 
    Define a function with three parameters in the following order
       1. An instructor object
       2. A student object
       3. A string name of an exercise
       
    The purpose of this function is return a string in the following format:
      "Zoe Ames assigned the Overly Excited exercise to Lissa Goforth"
  */
  const assignExercise = (instructorObj, studentObj, exerciseStr) => {
    return `${instructorObj.firstName} ${instructorObj.lastName} assigned the ${exerciseStr} exercise to ${studentObj.firstName} ${studentObj.lastName}`;
    
  
  }
  
  // Invoke the function and store its return value
  
  
  // Log the message to the console
  console.log(assignExercise(zoe, lissa, "Overly Excited"));
  
  
  