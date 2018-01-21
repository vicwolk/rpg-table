$(document).ready(function () {
    _init();
});

function _init() {
    _createBoard();
    toggleToolBox();
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

            for (let boxIndex = 1; boxIndex <= boxs; boxIndex++) {
                elem += `<div class="box" data-index="${boxIndex}"></div>`;
            };

            elem += '</div>';
            $('.container').append(elem);
        }
    })();

    $('.box').css({ width: '40px', height: '40px' });
};

function toggleToolBox() {
    'use strict';

    $('.box').on('click', function() {

        const rowIndex = $(this).parent('.row').data('index');
        const boxIndex = $(this).data('index');

        $('.tool-box').toggleClass('show');
    });
};


// function createPlayer() {
//     $(".box").on("click", function (e) {
//         console.log(this);
//         var answer = confirm("Deseja criar um personagem na coluna " + $(this).attr("data-index") + " da linha " + $(this).parent().attr("data-index") + "?");

//         if(answer) {
//             $(this).css("backgroundColor", "#f00");
//         }
//     });
// }
