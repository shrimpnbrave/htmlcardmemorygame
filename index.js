const cardArray = [
    {
        name: "cat",
        img: "./memory/cat.jpg",
        id: null,
        done: false,
    },
    {
        name: "cat",
        img: "./memory/cat.jpg",
        id: null,
        done: false,
    },
    {
        name: "dog",
        img: "./memory/dog.jpg",
        id: null,
        done: false,
    },
    {
        name: "dog",
        img: "./memory/dog.jpg",
        id: null,
        done: false,
    },
    {
        name: "icecream",
        img: "./memory/icecream.jpg",
        id: null,
        done: false,
    },
    {
        name: "icecream",
        img: "./memory/icecream.jpg",
        id: null,
        done: false,
    },
    {
        name: "kkobuggi",
        img: "./memory/kkobuggi.png",
        id: null,
        done: false,
    },
    {
        name: "kkobuggi",
        img: "./memory/kkobuggi.png",
        id: null,
        done: false,
    },
    {
        name: "puppy",
        img: "./memory/puppy.jpg",
        id: null,
        done: false,
    },
    {
        name: "puppy",
        img: "./memory/puppy.jpg",
        id: null,
        done: false,
    },
    {
        name: "shrimp",
        img: "./memory/shrimp.jpg",
        id: null,
        done: false,
    },
    {
        name: "shrimp",
        img: "./memory/shrimp.jpg",
        id: null,
        done: false,
    },
];
const gameDOM = [];
let clickFirst = -1;
let clickSecond = -1;
let clickCount = 0;

const getGameDOM = () => {
    const rows = document.querySelectorAll(".container .row");
    for (let i = 0; i < rows.length; i++) {
        gameDOM[i] = rows[i].querySelectorAll(".column");
    }
};

const setIDtoCardArray = () => {
    cardArray[0].id = "0-0";
    cardArray[1].id = "0-1";
    cardArray[2].id = "0-2";
    cardArray[3].id = "0-3";
    cardArray[4].id = "1-0";
    cardArray[5].id = "1-1";
    cardArray[6].id = "1-2";
    cardArray[7].id = "1-3";
    cardArray[8].id = "2-0";
    cardArray[9].id = "2-1";
    cardArray[10].id = "2-2";
    cardArray[11].id = "2-3";
};

const createBoard = () => {
    for (let i = 0; i < gameDOM.length; i++) {
        for (let j = 0; j < gameDOM[i].length; j++) {
            const card = document.createElement("img");
            card.setAttribute("src", "./memory/cover.jpg");
            card.classList.add("eachImage");
            gameDOM[i][j].appendChild(card);
        }
    }
};

const setClickHistory = (location) => {
    if (clickFirst === -1) {
        clickFirst = location;
    } else {
        clickSecond = location;
    }
};

const backFlip = () => {
    const parsedIdFirst = cardArray[clickFirst].id.split("-");
    const parsedIdSecond = cardArray[clickSecond].id.split("-");
    setTimeout (() => {
        gameDOM[parsedIdFirst[0]][parsedIdFirst[1]].querySelector("img").src =
        "./memory/cover.jpg";
        gameDOM[parsedIdSecond[0]][parsedIdSecond[1]].querySelector("img").src =
        "./memory/cover.jpg";
    }, 500);
};

const isCorrect = () => {
    if (cardArray[clickFirst].name === cardArray[clickSecond].name) {
        cardArray[clickFirst].done = true;
        cardArray[clickSecond].done = true;
    } else {
        backFlip();
    }
};

const flip = (location) => {
    if (!cardArray[location].done) {
    setClickHistory(location);
    const parseId = cardArray[location].id.split("-");
    gameDOM[parseId[0]][parseId[1]].querySelector("img").src =
        cardArray[location].img;
    clickCount++;
    if (clickCount === 2) {
        clickCount = 0;
        isCorrect();
    }
    if (clickFirst !== -1 && clickSecond !== -1) {
        clickFirst = -1;
        clickSecond = -1;
        }
    }
};

onload = () => {
    getGameDOM();
    cardArray.sort(() => 0.5 - Math.random());
    setIDtoCardArray();
    createBoard();
};