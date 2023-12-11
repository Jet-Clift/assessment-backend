
const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const coinBtn = document.getElementById("coinButton")
const diceBtn = document.getElementById('yahtzee')
const catPicBtn = document.getElementById('catPicButton')

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};


const flipCoin = () => {
    axios.get("http://localhost:4000/api/coin/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const rollDice = () => {
    axios.get("http://localhost:4000/api/dice/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const catPic = () => {
    axios.get("http://localhost:4000/api/cat/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};






complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
coinBtn.addEventListener('click', flipCoin)
diceBtn.addEventListener('click', rollDice)
catPicBtn.addEventListener('click', catPic)























