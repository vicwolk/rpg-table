$(document).ready(function () {
    _init();
});

var selectedRow = 0;
var selectedCol = 0;
var boxColor = "#fff";
var playerCount = 0;
var monsterCount = 0;

function _init() {
    _createBoard();
    getSelectedBox();
    colorPicker();
    createCharacter();
    deletePlayer();
};

function _createBoard() {
    'use strict';

    const screenW = $(window).width();
    const screenH = $(window).height();

    const rows = String(screenH / 40).split('.')[0];
    const boxs = String(screenW / 40).split('.')[0];

    (() => {
        for (let rowIndex = 1; rowIndex <= rows; rowIndex++) {
            let elem = `<div class="row" data-index="${rowIndex}">`;

            for (let colIndex = 1; colIndex <= boxs; colIndex++) {
                elem += `<div class="col" data-index="${colIndex}"> <div class="box"></div> </div>`;
            };

            elem += '</div>';
            $('.container').append(elem);
        }
    })();

    $('.col').css({ width: '40px', height: '40px' });
};

function getSelectedBox() {
    'use strict';

    $('.box').on('click', function () {

        selectedRow = $(this).parent('.col').parent('.row').data('index');
        selectedCol = $(this).parent('.col').data('index');

        $('.tool-box').toggleClass('show');
    });
};


// todo: diferenciar entre jogador/monstro
// todo: pegar as demais informações do form
function createCharacter() {
    $(".btn-create").on("click", function (e) {
        const box = $(".row").eq(selectedRow - 1).children().eq(selectedCol - 1);
        box.css("backgroundColor", boxColor);
        box.css("color", invertColor(boxColor, true));

        const number = playerCount++ + 1;
        var charObj = {};
        charObj.type = "jogador";
        charObj.isActive = true;
        charObj.status = "created";
        charObj.number = number;

        box.attr("data-char", JSON.stringify(charObj));

        box.text("J" + number);

        // fecha o menu
        $('.tool-box').toggleClass('show');

    });
}

function deletePlayer() {
    $(".btn-delete").on("click", function (e) {
        const box = $(".row").eq(selectedRow - 1).children().eq(selectedCol - 1);
        box.css("backgroundColor", "");
        box.text("");
        var charObj = box.data("char");
        charObj.isActive = false;
        charObj.status = "deleted";

        $('.tool-box').toggleClass('show');
    });
}

function colorPicker() {
    $(".jscolor").on("change", function (e) {
        boxColor = "#" + this.value;
    });
}
