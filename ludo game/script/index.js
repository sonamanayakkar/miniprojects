
let dise = document.querySelector(".dise");
let roll = document.querySelector(".roll");
let gc_1 = document.querySelector("#gc-1");
let one = document.querySelector("#one");

const pathBoxes = [

    document.querySelector("#pos_1"),
    document.querySelector("#pos_2"),
    document.querySelector("#pos_3"),
    document.querySelector("#pos_4"),
    document.querySelector("#pos_5"),
    document.querySelector("#pos_6"),
    document.querySelector("#pos_7"),
    document.querySelector("#pos_8"),
    document.querySelector("#pos_9"),
    document.querySelector("#pos_10"),
    document.querySelector("#pos_11"),
    document.querySelector("#pos_12"),
    document.querySelector("#pos_13"),
    document.querySelector("#pos_14"),
    document.querySelector("#pos_15"),
    document.querySelector("#pos_16"),
    document.querySelector("#pos_17"),
    document.querySelector("#pos_18"),
    document.querySelector("#pos_19"),
    document.querySelector("#pos_20"),
    document.querySelector("#pos_21"),
    document.querySelector("#pos_22"),
    document.querySelector("#pos_23"),
    document.querySelector("#pos_24"),
    document.querySelector("#pos_25"),
    document.querySelector("#pos_26"),
    document.querySelector("#pos_27"),
    document.querySelector("#pos_28"),
    document.querySelector("#pos_29"),
    document.querySelector("#pos_30"),
    document.querySelector("#pos_31"),
    document.querySelector("#pos_32"),
    document.querySelector("#pos_33"),
    document.querySelector("#pos_34"),
    document.querySelector("#pos_35"),
    document.querySelector("#pos_36"),
    document.querySelector("#pos_37"),
    document.querySelector("#pos_38"),
    document.querySelector("#pos_39"),
    document.querySelector("#pos_40"),
    document.querySelector("#pos_41"),
    document.querySelector("#pos_42"),
    document.querySelector("#pos_43"),
    document.querySelector("#pos_44"),
    document.querySelector("#pos_45"),
    document.querySelector("#pos_46"),
    document.querySelector("#pos_47"),
    document.querySelector("#pos_48"),
    document.querySelector("#pos_49"),
    document.querySelector("#pos_50"),
    document.querySelector("#pos_51"),
    document.querySelector("#pos_52"),
];

var players = [
    {
        color: "green",
        position: "1"
    },
    {
        color: "yellow",
        position: "0"
    },
    {
        color: "blue",
        position: "0"
    },
    {
        color: "red",
        position: "0"
    }
];

let currentPlayer = 0;
let position = parseInt(players[currentPlayer].position);
console.log(position)


function game() {
    disevalue();
    if (position == "0") {
        if (random == "6") {
            console.log("coin moved from home position!")
        }
        else {
            console.log("sorry bad luck!")
            nextplayer();
        }
    }
    else {
        if (random == "6" || random == "1") {
            players[currentPlayer].position+= random;
            console.log(position);
            console.log(players[currentPlayer].color)
        }
        else {
            players[currentPlayer].position+= random;
            console.log(position);
            nextplayer();
            return;
        }


    }
}


roll.addEventListener("click", () => {
    game();
})
let random;
function disevalue() {
    random = Math.floor(Math.random() * 6) + 1;
    dise.innerHTML = random;
    return random;
}


//nextplayer

function nextplayer() {
    currentPlayer = (currentPlayer + 1) % players.length;
    console.log("Next player:", players[currentPlayer].color);
}








