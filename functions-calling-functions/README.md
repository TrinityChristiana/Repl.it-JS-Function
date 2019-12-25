Here's my repl.it link to this assignment: https://repl.it/@TrinityTerry/Functions-calling-functions

# Functions Invoking other Functions

You task in this exercise is to write three functions.

1. mealMaker
2. slice
3. cook

The `mealMaker` function should accept an array of objects. Each object in the array should represent a food item. Each should have a `food` and a `type` key. The `type` key should have one of two values: `meat` or `vegetable`. 

```js
{
  "food": "beef",
  "type": "meat"
}
```

or 

```js
{
  "food": "zucchini",
  "type": "vegetable"
}
```

The `mealMaker` function should iterate the array. Determine if each object in the array represents a meat or a vegetable. If it is a meat, the cook function should be invoked and the object sent as an argument. If it represents a vegetable, then the `slice` function should be invoked and the object sent as an argument.

The `cook` function should return the string "Cooked beef" if the argument's value is "beef".

The `slice` function should return the string "Beet slices" if the argument's value is "beet".

The `mealMaker` function should return a **new array** that contains the strings representing the prepared food. For example, if the original contains the objects above, the final array returned by the function should be the following.

```js
["Cooked beef", "Zucchini slices"]
```