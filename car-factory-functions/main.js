// Define factory functions
// Chassis Station
const addChassis = () => {
    return {
      "chassis" : "Minivan"
    }
  }
  
  // Engine Station
  const addEngine = (obj) => {
    if ("chassis" in obj){
       obj.engine = "V6";
    }
    return obj;
  }
  
  // Suspension Station
  const addSuspension = (obj) => {
    if (("chassis" && "engine") in obj){
      obj.suspension = "independent";
    }
    return obj;
  }
  
  // Exhaust Station
  const addExhaust = (obj) => {
    if (("chassis" && "engine" && "suspension") in obj ) {
      obj.exhaust = "dual side exhaust";
    }
    return obj;
  }
  
  // Body Station
  const addBody = (obj) =>{
    if (("chassis" && "engine" && "suspension" && "exhaust") in obj ) {
      obj.body = "minivan";
    }
    return obj;
  }
  
  // Interior Station
  const addInterior = (obj) => {
    if (("chassis" && "engine" && "suspension" && "exhaust" && "body") in obj ) {
      obj.interior = "leather";
    }
    return obj;
  }
  
  
  // Invoke each one in the right order to move down the assembly line
  let miniVan = addChassis();
   miniVan = addEngine(miniVan);
   miniVan = addSuspension(miniVan)
   miniVan = addExhaust(miniVan)
   miniVan = addBody(miniVan)
   miniVan = addInterior(miniVan);
  // Use console.log() to output the final car object
  console.log(miniVan);
  