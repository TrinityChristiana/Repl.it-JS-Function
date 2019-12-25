Here's my repl.it link to this assignment: https://repl.it/@TrinityTerry/Car-Factory-Functions

# Sending Objects from One Function to Another

When you write functions, you should always try to ensure that the function does one thing only. Combining multiple tasks into a single function will almost always lead to your code being refactored by either you, or someone else, later because you eventually run into a use case where the function needs to be used, but for only one of its tasks, and not the other.

Imagine a scenario where you baking cookies. There are several stages to the process, and it requires multiple tools to complete the job. There is no single appliance or tool that mixes the ingredients, cuts the individual cookies, and bakes them. Each step is done with a separate tool. Here's how you could express that in JavaScript.

``` js
const mixIngredients = () => {
    return {
        cookieDoughOunces: 8
    }
}

const cutCookies = (cookies) => {
    if ("cookieDoughOunces" in cookieDough) {
        cookieDough.rawCookies = 6
    }       
}

const bakeCookies = (cookies) => {
    if ("rawCookies" in cookieDough) {
        cookieDough.bakedCookies = 6
    }
}

const dough = mixIngredients()
const rawCookies = cutCookies(dough)
const bakedCookies = bakeCookies(rawCookies)
```

# Practice: Automated Minivan Manufacturing with Functions

You need to simulate how a minivan gets manufactured. Modern manufacturing is largely automated, and as the vehicle and parts move down the assembly line, there are 6 stations which assemble different parts of the vehicle.

1. Chassis Station
2. Engine Station
3. Suspension Station
4. Exhaust Station
5. Body Station
6. Interior Station

## Chassis Station

Define an `addChassis` function that generates an object with a property of  `chassis` and its value should be "`Minivan`" . This function should take no arguments, and should return the object.

## Engine Station

Define an `addEngine` function that accepts an object as a parameter. You should verify that the object has a `chassis` property using the `prop in object` operator.

```js
const toy = {
    color: "Green",
    material: "Plastic"
}

if ("color" in toy) {
    console.log(`The toy is ${toy.color}`)
} else {
    console.log("The toy doesn't have a color yet")
}
```

This function should add a new property to the incoming object named `engine` and its value should be "`V6`" . The function should then return the object.

## Suspension Station

Define an `addSuspension` function that accepts an object as a parameter. You should verify that the object has a `chassis` property, and an `engine` property. This function should add a new property named `suspension` and its value should be "`independent`" . The function should return the object.

## Exhaust Station

Define an `addExhaust` function that accepts an object as a parameter. You should verify that the object has a `chassis` property, an `engine` property, and a `suspension` property. This function should add a new property named `exhaust` and its value should be "`dual side exhaust`" . The function should return the object.

## Body Station

Define an `addBody` function that accepts an object as a parameter. You should verify that the object has a `chassis` property, an `engine` property, a `suspension` property, and an `exhaust` property. This function should add a new property named body and its value should be "`minivan`" . The function should return the object.

## Interior Station

Define an `addInterior` function that accepts an object as a parameter. You should verify that the object has a `chassis` property, an `engine` property, a `suspension` property, and a `body` property. This function should add a new property named `interior` and its value should be "`leather`" . The function should return the object.

After the minivan object has been completed, output the final object to the console.