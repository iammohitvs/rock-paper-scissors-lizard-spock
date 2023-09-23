function userWins(loss = 0) {
    if (loss) {
        console.log("userLoses");
        computerScore.textContent = `${
            parseInt(computerScore.textContent) + 1
        }`;
        info.textContent = "You lost this round :(";
        info.classList.remove("green");
        info.classList.add("red");
    } else {
    console.log("userwins");
    userScore.textContent = `${parseInt(userScore.textContent) + 1}`;
    info.textContent = "You won this round!!";
    info.classList.remove("red");
    info.classList.add("green");
    }

    if (userScore.textContent === "4" || computerScore.textContent === "4") {
        info.textContent = "Game over. Refresh to play again";
        sub.classList.add("closed");
        info.classList.remove("green");
        info.classList.remove("red");
    }
}

function Battle(user, computer) {
    if (user === computer) {
        info.textContent = "Draw";
        info.classList.remove("green");
        info.classList.remove("red");
    } else if (user != computer) {
        for (obJect of choices_array) {
            if (obJect.id === user) {
                obJect.win.includes(computer) ? userWins() : userWins(1);
            }
        }
    } else {
        console.log("some error occured?");
    }
}

function setUserChoice(src_user, alt_user) {
    const user_tab = main.querySelector(".user");
    const user_img = user_tab.querySelector("img");
    const user_caption = user_tab.querySelector("figcaption");

    user_img.setAttribute("src", src_user);
    user_caption.textContent = alt_user;

    return alt_user;
}

function setCoputerChoice() {
    let value = Math.floor(Math.random() * 5);
    const computer_choice = choices_array[value].id;
    const src_computer = choices_array[value].src;

    const computer_tab = main.querySelector(".computer");
    const computer_img = computer_tab.querySelector("img");
    const computer_caption = computer_tab.querySelector("figcaption");

    computer_img.setAttribute("src", src_computer);
    computer_caption.textContent = computer_choice;
    return computer_choice;
}

function choiceClickedFunction(e) {
    const alt_user = e.target.alt;
    const src_user = e.target.src;

    const user_id = setUserChoice(src_user, alt_user);
    const computer_id = setCoputerChoice();

    Battle(user_id, computer_id);
}

const choices_array = [
    {
        id: "rock",
        src: "image/rock.png",
        win: ["scissor", "lizard"],
        lose: ["paper", "spock"],
    },
    {
        id: "paper",
        src: "image/paper.png",
        win: ["rock", "spock"],
        lose: ["lizard", "scissor"],
    },
    {
        id: "scissor",
        src: "image/scissor.png",
        win: ["paper", "lizard"],
        lose: ["spock", "rock"],
    },
    {
        id: "lizard",
        src: "image/lizard.png",
        win: ["spock", "paper"],
        lose: ["rock", "scissor"],
    },
    {
        id: "spock",
        src: "image/spock.png",
        win: ["scissor", "rock"],
        lose: ["lizard", "paper"],
    },
];

const sub = document.querySelector(".sub");
const choices = sub.querySelectorAll("img");
const main = document.querySelector(".main");
const info = document.querySelector(".info");
const score = document.querySelector(".score-para");
const userScore = score.querySelector(".user");
const computerScore = score.querySelector(".computer");

choices.forEach((choice) => {
    choice.addEventListener("click", choiceClickedFunction);
});
