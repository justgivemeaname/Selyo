$(function() {

    'use strict';

    var $input = $("#range"),
        $min = $("#btn-min"),
        $max = $("#btn-add"),
        $people = $(".container-three p span"),
        me = this,
        $send = $("#send"),
        $killerText = $("#killer span"),
        $killer = $("#killer"),
        $killerArr = [],
        $citizenText = $("#citizen span"),
        $citizen = $("#citizen"),
        $citizenArr = [],
        new_num;

    /**BTN控制range的值 **/
    this.getVal = function() {
        new_num = $input.val();
        return parseFloat(new_num);
    }

    $input.on('change', function() {
        $people.text(me.getVal());
        Killer_Citizen();
    });

    $max.on("click", function() {
        var a = me.getVal();
        if (a < 18) {
            a += 1;
        }
        $people.text(a);
        $input.val(a);
        Killer_Citizen();
    });

    $min.on("click", function() {
        var a = me.getVal();
        if (a > 4) {
            a -= 1;
        }
        $people.text(a);
        $input.val(a);
        Killer_Citizen();
    });

    /*动态设置杀手平民的数量*/
    function Killer_Citizen() {
        var a = me.getVal();

        if (a <= 5) {
            $killerArr = new Array(1);
            $citizenArr = new Array(a - 1);

            for (let i = 0; i < 1; i++) {
                $killerArr[i] = 1;
            }

            for (let i = 0; i < a - 1; i++) {
                $citizenArr[i] = 0;
            }

            $killerText.text(`
            杀  手 1 人
            `);
            $citizenText.text(`
            平  民 ` + (a - 1) + `人`);
        } else if (a <= 8) {
            $killerArr = new Array(2);
            $citizenArr = new Array(a - 2);

            for (let i = 0; i < 2; i++) {
                $killerArr[i] = 1;
            }

            for (let i = 0; i < a - 2; i++) {
                $citizenArr[i] = 0;
            }

            $killerText.text(`
            杀  手 2 人`);

            $citizenText.text(`平  民 ` + (a - 2) + `人`);
        } else if (a <= 11) {
            $killerArr = new Array(3);
            $citizenArr = new Array(a - 3);

            for (let i = 0; i < 3; i++) {
                $killerArr[i] = 1;
            }

            for (let i = 0; i < a - 3; i++) {
                $citizenArr[i] = 0;
            }

            $killerText.text(`
            杀  手 3 人`);

            $citizenText.text(`平  民 ` + (a - 3) + `人`);

        } else if (a <= 15) {
            $killerArr = new Array(4);
            $citizenArr = new Array(a - 4);

            for (let i = 0; i < 4; i++) {
                $killerArr[i] = 1;
            }

            for (let i = 0; i < a - 4; i++) {
                $citizenArr[i] = 0;
            }
            $killerText.text(`杀  手 4 人`);

            $citizenText.text(`平  民 ` + (a - 4) + `人`);

        } else {
            $killerArr = new Array(5);
            $citizenArr = new Array(a - 5);

            for (let i = 0; i < 5; i++) {
                $killerArr[i] = 1;
            }

            for (let i = 0; i < a - 5; i++) {
                $citizenArr[i] = 0;
            }

            $killerText.text(`杀  手 5 人`);

            $citizenText.text(`平  民 ` + (a - 5) + `人`);
        }
    }


    //洗牌。
    function shuffle() {
        Killer_Citizen();
        var b = [],
            arr = $killerArr.concat($citizenArr);
        while (arr.length) {
            var index = Math.floor(Math.random() * arr.length);
            b.push(arr[index]);
            arr.splice(index, 1);
        }

        return b;
    }
});