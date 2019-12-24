const fullName = (first, middle, last) => {
    return studentName = `${first} ${middle} ${last}`;
  
  };
  
  const michael = fullName("Michael", "Henry", "Ramirez");
  const johnathon = fullName("Johnathon", "James", "Killibrew");
  const sarah = fullName("Sarah", "Jane", "Johnson");
  const annabelle = fullName("Annabelle", "Ruth", "Tanner");
  const pauline = fullName("Pauline", "Emelie", "Lemonson");
  
  console.log(michael);
  console.log(johnathon);
  console.log(sarah);
  console.log(annabelle);
  console.log(pauline);
  
  
  const createStudent = (first, middle, last) => {
    return student = { 
      firstName: first,
      middleName: middle,
      lastName: last,
    };
    
  };
  
  const yvonne = createStudent("Yvonne", "Kate", "Ostrander");
  const james = createStudent("James", "Richard", "Donner");
  const kevin = createStudent("Kevin", "Pyle", "Bacon");
  const mary = createStudent("Mary", "Lynn", "Smoot");
  const abigail = createStudent("Abigail", "Beth", "Green");
  
  console.log(yvonne);
  console.log(james);
  console.log(kevin);
  console.log(mary);
  console.log(abigail);