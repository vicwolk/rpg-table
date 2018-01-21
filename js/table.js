$(document).ready(function () {
    createBoard();
    createPlayer();
});

function createBoard() {
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

}


function createPlayer() {
    $(".box").on("click", function (e) {
        var color = "#fff";
        console.log(this);
        // var answer = confirm("Deseja criar um personagem na coluna " + $(this).attr("data-index") + " da linha " + $(this).parent().attr("data-index") + "?");

        // $(".jscolor").css("display", "block");

        // $(".jscolor").on("change", function (e){
        //     color = "#" + this.value;
        //     console.log(color);
        // });

        // if(answer) {
        //     $(this).css("backgroundColor", color);
        //     $(this).text("player");
        // }
    });
}
