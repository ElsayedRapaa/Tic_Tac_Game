const player_box = document.querySelector('.container-select'),
    btn_payerX = player_box.querySelector('.player-x'),
    btn_payerO = player_box.querySelector('.player-o'),
    play_Board = document.querySelector('.play-board'),
    player = play_Board.querySelector('.player'),
    the_Slider = document.querySelector('.slider'),
    all_Box = document.querySelectorAll('.player-area section span'),
    result_Box = document.querySelector('.result-box'),
    winner_Text = result_Box.querySelector('.won-text'),
    replay_Btn = result_Box.querySelector('.btn button');

window.onload = function() {

    for (let i = 0; i < all_Box.length; i++) {

        all_Box[i].setAttribute("onclick", "clicked(this)");

    }

    btn_payerX.onclick = function() {

        player_box.classList.add('hied');
        play_Board.classList.add('show');

    }

    btn_payerO.onclick = function() {

        player_box.classList.add('hied');
        play_Board.classList.add('show');
        player.setAttribute('class', 'players active player');

    };
}

let player_X = 'las la-times';
let player_O = 'lar la-circle';
let player_Sing = 'X';
let runBot = true;

function clicked(ele) {

    // console.log(ele);

    if (player.classList.contains('players')) {

        ele.innerHTML = `<i class="${player_O}"><i>`;
        player.classList.add('active');
        player_Sing = 'O';
        ele.setAttribute('id', player_Sing);

    } else {

        ele.innerHTML = `<i class="${player_X}"><i>`;
        player.classList.add('active');
        player_Sing = 'X';
        ele.setAttribute('id', player_Sing);

    }
    getWinner();

    // play_Board.style.pointerEvents = 'none';
    ele.style.pointerEvents = 'none';

    let the_Dilay = (Math.random() * 1000 + 200).toFixed();

    setTimeout(() => {

        bot(runBot);

        console.log(the_Dilay);

    }, the_Dilay);


}

function bot(runBot) {

    if (runBot) {
        player_Sing = 'O';

        let array = [];

        for (let i = 0; i < all_Box.length; i++) {

            if (all_Box[i].childElementCount == 0) {

                array.push(i);
            }
        }


        let the_Random = array[Math.floor(Math.random() * array.length)];


        if (array.length > 0) {

            if (player.classList.contains('players')) {

                all_Box[the_Random].innerHTML = `<i class="${player_X}"><i>`;
                player.classList.remove('active');
                player_Sing = 'X';
                all_Box[the_Random].setAttribute('id', player_Sing);

            } else {

                all_Box[the_Random].innerHTML = `<i class="${player_O}"><i>`;
                player.classList.remove('active');
                all_Box[the_Random].setAttribute('id', player_Sing);

            }
        }
        getWinner();

        // all_Box[the_Random].style.pointerEvents = 'none';
        checkAllClass()
            // play_Board.style.pointerEvents = 'none';
    }

}

function getIdName(idName) {

    return document.querySelector('.box' + idName).id;

}

function checkClass(val1, val2, val3, sign) {

    if (getIdName(val1) == sign && getIdName(val2) == sign && getIdName(val3) == sign) {

        return true;

    }

}

function getWinner() {

    if (checkClass(1, 2, 3, player_Sing) || checkClass(4, 5, 6, player_Sing) || checkClass(7, 8, 9, player_Sing) || checkClass(1, 4, 7, player_Sing) || checkClass(2, 5, 8, player_Sing) || checkClass(3, 6, 9, player_Sing) || checkClass(1, 5, 9, player_Sing) || checkClass(3, 5, 7, player_Sing)) {

        console.log(player_Sing + ' This Is Winner');
        play_Board.style.pointerEvents = 'none';
        runBot = false;
        bot(runBot);

        setTimeout(() => {

            play_Board.classList.remove('show');
            result_Box.classList.add('show');

        }, 700);

        winner_Text.innerHTML = `Player <span>${player_Sing}</span> Won the Game`;
    };
};

function checkAllClass() {

    if (getIdName(1) != '' && getIdName(2) != '' && getIdName(3) != '' && getIdName(4) != '' && getIdName(5) != '' && getIdName(6) != '' && getIdName(7) != '' && getIdName(8) != '' && getIdName(9) != '') {

        setTimeout(() => {

            play_Board.classList.remove('show');
            result_Box.classList.add('show');

        }, 700);

        winner_Text.textContent = `Match Has Been Drawn`;
    };
};

replay_Btn.onclick = function() {

    window.location.reload();

}