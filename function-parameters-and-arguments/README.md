Here's my repl.it link: https://repl.it/@TrinityTerry/Function-Parameters-and-Arguments

Different Function Behavior Using Parameters
When you define a function in JavaScript, it can perform a simple task over and over again the same exact way. For example, a function could simply display a message to the user.

const displayMessage = () => {
    window.alert("You have completed this section!"
}

The above function will do the same thing each time you call it.

You could also define a function that requires the caller to send information to it so that it can perform its task. You could write a function that constructs a new object that represents a flower. You would put this code in a function when the object's values are dependant upon values that a user provides.

If a function requires information to do its job, then you define parameters.

const createFlower = (type, color) => {
    return {
        flowerColor: color,
        flowerType: type
    }
}

Unlike the first function, the behavior of this function will vary. It will always return and object, but that object's values must be provided when the function in invoked. In the example below, the strings of "Tulip" and "Orange" are arguments that become the values of the parameters defined in the function.

const tulip = createFlower("Tulip", "Orange")

The tulip variable's value will be the following object.

{
    flowerColor: "Orange",
    flowerType: "Tulip"
}

If you invoke the exact same function, but with different arguments, the behavior will change.

const rose = createFlower("Rose", "White")

The rose variable will contain the following object.

{
    flowerColor: "White",
    flowerType: "Rose"
}

Assignment

Your assignment is to create 2 functions.

Student Name Generator

Define a function named fullName whose job is to generate a string that has a person's first, middle, and last name. Each part of the name will be its own parameter.

const michael = fullName("Michael", "Henry", "Ramirez")

The value of the student variable must be "Michael Henry Ramirez".

Generate the following 5 students using that function.

Michael Henry Ramirez
Johnathon James Killibrew
Sarah Jane Johnson
Annabelle Ruth Tanner
Pauline Emelie Lemonson

Use console.log() to output each name.

Student Object Generator

Define a function named createStudent whose job is to generate a new object that represents a student. The object must have the firstName , lastName , and middleName properties.

const nancy = createStudent("Nancy", "Anne", "Drew")

The value of nancy must be the following.

{
    firstName: "Nancy",
    middleName: "Anne",
    lastName: "Drew"
}

Generate an object to represent the following 5 students using that function.

Yvonne Kate Ostrander
James Richard Donner
Kevin Pyle Bacon
Mary Lynn Smoot
Abigail Beth Green

Use console.log() to output each object.