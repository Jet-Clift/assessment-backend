module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = ["Stick with it, hopefully 2028 will be your year...", "Black cats don't bring bad luck. Whoever tells you otherwise are in fact bad luck.", "Always remember: fish are friends, not food. -Some vegan shark", "There's an old saying in Tennessee—I know it's in Texas, probably in Tennessee—that says, 'Fool me once, shame on... shame on you. Fool me—you can't get fooled again.' -Bush", "You are about to be crushed by a giant corn."];
      
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },
    flipCoin: (req, res) => {
        const coinOrientation = ["Heads!", "Tails!", "Heads!", "Tails!", "Heads!", "Tails!", "Heads!", "Tails!", "Heads!", "Tails!", "Heads!", "Tails!", "Heads!", "Tails!", "Heads!", "Tails!", "Heads!", "Tails!", "Heads!", "Tails!", "Heads!", "Tails!", "Heads!", "Tails!", "Heads!", "Tails!", "Heads!", "Tails!", "Heads!", "Tails!", "Heads!", "Tails!", "Heads!", "Tails!", "Heads!", "Tails!", "Heads!", "Tails!", "Heads!", "Tails!", "Heads!", "Tails!", "Heads!", "Tails!", "Heads!", "Tails!", "Heads!", "Tails!", "Heads!", "Tails!", "Heads!", "Tails!", "Heads!", "Tails!", "Heads!", "Tails!", "Heads!", "Tails!", "Heads!", "Tails!", "Heads!", "Tails!", "Heads!", "Tails!", "Heads!", "Tails!", "Heads!", "Tails!", "Heads!", "Tails!", "Heads!", "Tails!", "Heads!", "Tails!", "Heads!", "Tails!", "Heads!", "Tails!", "Heads!", "Tails!", "Heads!", "Tails!", "Heads!", "Tails!", "Heads!", "Tails!", "Heads!", "Tails!", "Heads!", "Tails!", "Heads!", "Tails!", "Heads!", "Tails!", "Heads!", "Tails!", "Heads!", "Tails!", "Heads!", "Tails!", "Heads!", "Tails!", "It landed on its edge!! SUPER Lucky!"];
      
        let randomIndex = Math.floor(Math.random() * coinOrientation.length);
        let randomOrientation = coinOrientation[randomIndex];
      
        res.status(200).send(randomOrientation);
    },
    rollDice: (req, res) => {
        const diceNums = ["1", "2", "3", "4", "5", "6"];
        const diceArr = [];
    
        for (let i = 0; i < 5; i++) {
            let diceRoll = Math.floor(Math.random() * diceNums.length);
            let randomDiceNum = diceNums[diceRoll];
            diceArr.push(randomDiceNum);
        }
    
        if (+diceArr[0] === +diceArr[1] && +diceArr[0] === +diceArr[2] && +diceArr[0] === +diceArr[3] && +diceArr[0] === +diceArr[4] ) {
            console.log(`Your dice read: (${diceArr}) You rolled a Yahtzee!!`);
            res.status(200).send(`Your dice read: (${diceArr}) You rolled a Yahtzee!! BOOOOM BABYYY!!`);
        } else {
            console.log(`Your dice read: (${diceArr}) You did not roll a Yahtzee.`);
            res.status(200).send(`Your dice read: (${diceArr}) You did not roll a Yahtzee.`);
        }
    },
    catPic: (req, res) => {
      
      const cat1 = "Heres this lovely video to cheer you up! (video is too large to embed): https://www.youtube.com/watch?v=bv3hXOCfdAw"
  const catURL = [cat1];
        let randomIndex = Math.floor(Math.random() * catURL.length);
        let randomURL = catURL[randomIndex];
      
        res.status(200).send(randomURL);
    },
}





//According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don't care what humans think is impossible. Yellow, black. Yellow, black. Yellow, black. Yellow, black. Ooh, black and yellow! Let's shake it up a little. Barry! Breakfast is ready! Coming! Hang on a second. Hello? Barry? Adam? Can you believe this is happening? I can't. I'll pick you up. Looking sharp. Use the stairs, Your father paid good money for those. Sorry. I'm excited. Here's the graduate. We're very proud of you, son. A perfect report card, all B's. Very proud. Ma! I got a thing going here. You got lint on your fuzz. Ow! That's me! Wave to us! We'll be in row 118,000. Bye! Barry, I told you, stop flying in the house! Hey, Adam. Hey, Barry. Is that fuzz gel? A little.  special day, graduation. Never thought I'd make it. Three days grade school, three days high  school. Those were awkward. Three days college. I'm glad I took a day and hitchhiked around  The Hive. You did come back different. Hi, Barry. Artie, growing a mustache? Looks good. Hear about Frankie? Yeah. You going to the funeral? No, I'm not going. Everybody knows, sting  someone, you die. Don't waste it on a squirrel. Such a hothead. I guess he could have just gotten out of the way. I love this incorporating an amusement park into our day. That's why we don't need vacations. Boy, quite a bit of pomp under the circumstances. Well, Adam, today we are men. We are! Bee-men. Amen! Hallelujah! Students, faculty, distinguished bees, please welcome Dean Buzzwell. Welcome, New Hive City graduating class of 9:15. That concludes our ceremonies And begins your career at Honex Industries! Will we pick our job today? I heard it's just orientation. Heads up! Here we go. Keep your hands and antennas inside the tram at all times. Wonder what it'll be like? A little scary. Welcome to Honex, a division of Honesco and a part of the Hexagon Group. This is it! Wow.
