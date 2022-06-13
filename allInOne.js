function quickTest() {
    alert("quickTest")
}

function madLibs() {
    //things
    let verb1 = prompt('Pick a verb in the past tense', [])
    let verb2 = prompt('Pick another verb', [])
    let verb3 = prompt('Pick a another verb', [])
    let name1 = prompt('Pick a name', [])
    let noun1 = prompt('Pick a noun', [])
    let noun2 = prompt('Pick another noun', [])
    let pnoun1 = prompt('Pick a plural noun', [])
    let adjective1 = prompt('Pick an adjective', [])
    let adjective2 = prompt('Pick another adjective', [])
    //setting
    let setting1 = Math.floor(Math.random() * 3)
    let setting2 = Math.floor(Math.random() * 3)
    //assign setting to string via switch
    function setting() {
        switch (setting1) {
            case '0':
                setting1 = "dirty bussy";
                break;
            case '1':
                setting1 = "gloomy green grotto";
                break;
            case '2':
                setting1 = "unfortunate sprawl of flowers";
                break;
            case '3':
                setting1 = "upscale crack-house";
                break;
            default:
                setting1 = "place"

        }
        switch (setting2) {
            case 0:
                setting2 = "inside a clean bussy"
                break;
            case 1:
                setting2 = "inside of a whale";
                break;
            case 2:
                setting2 = "unfortunate looking bathroom";
                break;
            case 3:
                setting2 = "lavish crack-house";
                break;
            default:
                setting2 = "second place"
        }

    }
    setting()
    //storytimelol
    alert(`'${name1} continued his journey through the ${setting1}.  
The ${adjective1} ${noun1} he ${verb1} was ${verb2}ing along behind him.
In his pocket he idly thumbed the sacred ${noun2} his ${adjective2} mother
had left him. ${name1} knew his ${pnoun1} were yearning for him further ahead in
${setting2}.  He ${verb3} forward.
'`)
}

function testFight() {
    let randomEncounter = Math.floor(Math.random() * 10)
    let targetHP = 100
    let xpGained = 0
    let totalXP = 0
    let playerLvl = 0
    // hp modifiers
    if (randomEncounter < 5) {
        targetHP -= 25
    }
    if (randomEncounter > 5) {
        targetHP += 25
    }
    if (randomEncounter === 5) {
        targetHP = 150
    }
    // xp modifiers
    if (randomEncounter < 5) {
        xpGained += 10
    }
    if (randomEncounter > 5) {
        xpGained += 15
    }
    if (randomEncounter === 5) {
        xpGained += 100
    }
    // level up
    function lvlUp() {
        totalXP += xpGained
        if (totalXP + xpGained > 100) {
            playerLvl++;
            alert(`'Ding! You\'re now ${playerLvl}'`)
        } else alert(`'You need ${100 - totalXP} more XP to level up!'`)
    }
    //if (totalXP + xpGained > 100){playerLvl ++;alert(`'Ding! You\'re now ${playerLvl}'`)}
    //possible mobs
    if (randomEncounter === 0) {
        randomEncounter = 'A Sentient Void'
    }
    if (randomEncounter === 1) {
        randomEncounter = 'A Giant Crab'
    }
    if (randomEncounter === 2) {
        randomEncounter = 'An Angry Leech'
    }
    if (randomEncounter === 3) {
        randomEncounter = 'A Crazy Calico'
    }
    if (randomEncounter === 4) {
        randomEncounter = 'A Dirty Dog'
    }
    if (randomEncounter === 5) {
        randomEncounter = 'An Esoteric Egg'
    }
    if (randomEncounter === 6) {
        randomEncounter = 'A Fiendish Fence'
    }
    if (randomEncounter === 7) {
        randomEncounter = 'A Green Goblin'
    }
    if (randomEncounter === 8) {
        randomEncounter = 'A High Hippo'
    }
    if (randomEncounter === 9) {
        randomEncounter = 'An Ignorant Iguana'
    }
    if (randomEncounter === 10) {
        randomEncounter = 'A Jubilant Jester'
    }
    alert(`'${randomEncounter} appears!  It has ${targetHP} HP.'`)
    //basic attack with prompt to follow up
    function attack() {
        while (targetHP > 0) {
            targetHP -= 25;
            alert(`'You hit the ${randomEncounter} for 25 damage! It has ${targetHP} remaining.'`)
            if (confirm(`'Follow up with another heavy slash?'`) === true) {
                attack()
            } else {
                alert('okie')
            }
        }
        lvlUp()
    }
    //instakill to test xp stuff
    function kill() {
        targetHP -= targetHP;
        alert(`'You've slain ${randomEncounter}!  You've earned ${xpGained} XP!`)
    }
    attack()
}

function testLogin() {
    let login = prompt('User?')
    if (login == 'Admin') {
        let password = prompt('Password?');
        if (password == 'TheMaster') alert('Welcome!');
        else alert('Wrong Password')
    } else if (login == '' || login == null) {
        alert('Canceled')
    } else alert('That\'s my purse! I don\'t know you')
}

function countToTen() {
    let number = prompt('Pick a number and count to 10', [])
    let n = Number(number)
    while (n >= 20) {
        alert('Here we go! ' + n)
        n -= 10
    }
    while (n < 20 & n > 10) {
        alert('Countdown! ' + n);
        n -= 1
    }
    while (n < 0) {
        alert('Getting spicy?' + n)
        n += 10
    }
    while (n < 10 > 0) {
        alert('Going up! ' + n);
        n += 1;
    }
    if (n === 10) {
        alert(n + '!')
        alert('We did it!')
    }
}

function isItPrime() {
      //this one has finally accepted that 9 is not prime!
      let newPrimeCheckerNumber = prompt("Check if a newPrimeCheckerNumberber is prime:", []);
      if (newPrimeCheckerNumber % 2 == 0) {
          alert(newPrimeCheckerNumber + ' is not prime.')
      } else if (newPrimeCheckerNumber % 3 == 0) {
          alert(newPrimeCheckerNumber + ' is not prime.')
      } else if (newPrimeCheckerNumber % 5 == 0) {
          alert(newPrimeCheckerNumber + ' is not prime.')
      } else {
          alert(newPrimeCheckerNumber + ' might be prime.')
      }

      //prime numberIsItPrime finder
      /*
      const numberIsItPrime = prompt('Is this prime?', [])
      let numberPrimeThing = Number(numberIsItPrime)
      
      function isPrime() {
        if (numberPrimeThing === 1) {
          alert(`'1 is neither prime nor composite'`)
        }
        if (Number.isInteger(numberPrimeThing / 2 || numberPrimeThing / 3 || numberPrimeThing / 5 || numberPrimeThing / 9 || numberPrimeThing / 7)) {
          alert(numberPrimeThing + ' is not prime')
          return;
      
        }
        */
      /*
      //OG method before condensing into above
      if (Number.isInteger(numberPrimeThing / 2)) {
         alert(`'${numberPrimeThing} is not prime'`)
         return;
       }
       if (Number.isInteger(numberPrimeThing / 3)) {
         alert(`'${numberPrimeThing} is not prime'`)
         return;
       }
       if (Number.isInteger(numberPrimeThing / 5)) {
         alert(`'${numberPrimeThing} is not prime'`)
         return;
       }*/
      /* else if (!Number.isInteger(numberPrimeThing / 2 || numberPrimeThing / 3 || numberPrimeThing / 5 || numberPrimeThing / 9 || numberPrimeThing / 7)) {
         alert(numberPrimeThing + ' is probably a prime...')
       }
     }
     
     isPrime()
     
     function divideNine() {
       let nine = 9
       alert(Number.isInteger(nine / 2))
     }
     
     divideNine()
     
     */
  }
function eightBall() {
    let eightBallrng = Number(Math.floor(Math.random() * 3) + 1);
    let eightBallQuestion = prompt("What's your question?")
    //trying stuff with the replace method
    eightBallQuestion = eightBallQuestion
        .replace("I ", "you ")
        .replace("i ", "you ")
        .replace("Am ", "Are ")
        .replace("am ", "are ")
    switch (eightBallrng) {
        case 1:
            alert(`${eightBallQuestion}... Yes.`);
            break;
        case 2:
            alert(`${eightBallQuestion}... No.`);
            break;
        case 3:
            alert(`${eightBallQuestion}... Maybe.`);
            break;
        default:
            alert("Something's wrong")
    }

}
function weedNameGenerator() {
    let weedColor, weedAdjective, weedType;
    let weedColorRNG = Math.floor(Math.random() * 5) + 1;
    let weedAdjectiveRNG = Math.floor(Math.random() * 5) + 1;
    let weedTypeRNG = Math.floor(Math.random() * 5) + 1;
    switch (weedColorRNG) {
        case 1:
            weedColor = "Purple";
            break;
        case 2:
            weedColor = "Green";
            break;
        case 3:
            weedColor = "Joe Rogan";
            break;
        case 4:
            weedColor = "Blue";
            break;
        case 5:
            weedColor = "Black";
            break;
        default:
            break;
    }
    switch (weedAdjectiveRNG) {
        case 1:
            weedAdjective = "Sticky";
            break;
        case 2:
            weedAdjective = "Home-grown";
            break;
        case 3:
            weedAdjective = "Jamaican";
            break;
        case 4:
            weedAdjective = "Yummy"
            break;
        case 5:
            weedAdjective = "Deadly";
            break;
        default:
            break;
    }
    switch (weedTypeRNG) {
        case 1:
            weedType = "Chronic";
            break;
        case 2:
            weedType = "Fucky-Uppy";
            break;
        case 3:
            weedType = "Ghost Buster";
            break;
        case 4:
            weedType = "Gelato";
            break;
        case 5:
            weedType = "Dream";
            break;
        default:
            break;
    }
    alert(weedColor + ' ' + weedAdjective + ' ' + weedType)

}
function myTestPage() {
    let activity = Number(prompt("Enter the number of the script you want to run: \n 1 : Madlibs \n 2 : Test Fight (fucky) \n 3 : TestLogin (User is \"Admin\", password is \"TheMaster\"\)\n 4 : Count To Ten \n 5 : Prime Tester (9 confuses it)\n 6 : Magic Eight Ball\n 7 : Weed Name Generator\n", []))

    switch (activity) {
        case 11:
            quickTest();
            break;
        case 1:
            madLibs();
            break;
        case 2:
            testFight();
            break;
        case 3:
            testLogin();
            break;
        case 4:
            countToTen();
            break;
        case 5:
            isItPrime();
            break;
        case 6:
            eightBall();
            break;
        case 7: weedNameGenerator();
            break;
        default:
            alert('Error!  Make sure you\'re putting in a number!')
    }
    let myTestContinue = confirm("Try something else?")
    if (myTestContinue === true) {
        myTestPage()
    } else {
        alert("Hope it was neato, cya!")
    }

}
myTestPage()
