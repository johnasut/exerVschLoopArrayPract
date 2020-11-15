var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

var computers = 0

for (var i = 0; i < officeItems.length; i++) {
    if (officeItems[i] === "computer") {
        computers ++
    }
}

console.log(computers)

//

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    },{
      name: "Pat",
      age: 17,
      gender: "non-binary"  
    }
  ] 

for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i ++) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[i]['age'] >= 18) {
        if (peopleWhoWantToSeeMadMaxFuryRoad[i]['gender'] === "male") {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i]['name'] + " is old enough to see Mad Max Fury Road. Let him in.")
        } else if (peopleWhoWantToSeeMadMaxFuryRoad[i]['gender'] === "female") {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i]['name'] + " is old enough to see Mad Max Fury Road. Let her in.")
        } else {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i]['name'] + " is old enough to see Mad Max Fury Road. Let them in.")
        }
    } else {
        if (peopleWhoWantToSeeMadMaxFuryRoad[i]['gender'] === "male") {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i]['name'] + " is only " + peopleWhoWantToSeeMadMaxFuryRoad[i]['age'] + " years old. Don't let him watch Mad Max Fury Road.")
        } else if (peopleWhoWantToSeeMadMaxFuryRoad[i]['gender'] === "female") {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i]['name'] + " is only " + peopleWhoWantToSeeMadMaxFuryRoad[i]['age'] + " years old. Don't let her watch Mad Max Fury Road.")
        } else {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i]['name'] + " is only " + peopleWhoWantToSeeMadMaxFuryRoad[i]['age'] + " years old. Don't let them watch Mad Max Fury Road.")
        }
    }
}

//

lightOn = 0

var array0 = [2, 3, 2]

for (var i = 0; i < array0.length; i ++) {
    lightOn += array0[i]
}

if (lightOn % 2 === 0) {
    console.log("The button was toggled " + lightOn + " times. The light is off.")
} else {
    console.log("The button was toggled " + lightOn + " times. The light is on.")
}

lightOn = 0

var array1 = [2, 5, 435, 4, 3] // "The light is on"

for (var i = 0; i < array1.length; i ++) {
    lightOn += array1[i]
}

if (lightOn % 2 === 0) {
    console.log("The button was toggled " + lightOn + " times. The light is off.")
} else {
    console.log("The button was toggled " + lightOn + " times. The light is on.")
}

lightOn = 0

var array2 = [1, 1, 1, 1, 3]   // "The light is on"

for (var i = 0; i < array2.length; i ++) {
    lightOn += array2[i]
}

if (lightOn % 2 === 0) {
    console.log("The button was toggled " + lightOn + " times. The light is off.")
} else {
    console.log("The button was toggled " + lightOn + " times. The light is on.")
}

lightOn = 0

var array3 = [9, 3, 4, 2]      // "The light is off"

for (var i = 0; i < array3.length; i ++) {
    lightOn += array3[i]
}

if (lightOn % 2 === 0) {
    console.log("The button was toggled " + lightOn + " times. The light is off.")
} else {
    console.log("The button was toggled " + lightOn + " times. The light is on.")
}