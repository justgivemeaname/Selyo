(function() {


    var timer = null;
    var end = document.getElementById("end");
    var start = document.getElementById('start')
    var ns = document.getElementsByClassName('n');



    function init() {
        for (let i = 0; i < ns.length; i++) {
            ns[i].style.backgroundColor = '#fea500';
        }
    }

    function randomColor() {
        var r = Math.floor(Math.random() * 256),
            g = Math.floor(Math.random() * 256),
            b = Math.floor(Math.random() * 256);
        return "rgb(" + r + "," + g + "," + b + ")";
    }

    function randomNum() {
        return Math.floor(Math.random() * 9);
    }


    function Begin() {
        init();

        var arr = new Array(3);
        for (var i = 0; i < arr.length; i++) {
            var num = randomNum();
            if (i == 0)
                arr[i] = num;
            else {
                for (var j = 0; j < i; j++) {
                    if (arr[j] == num) {
                        i--;
                    } else {
                        arr[i] = num
                    }
                }
            }
        }

        for (var i = 0; i < arr.length; i++) {
            ns[arr[i]].style.backgroundColor = randomColor();

        }

    }


    start.onclick = function() {
        clearInterval(timer);

        timer = setInterval(function() {
            Begin();
        }, 1000);
    };

    end.onclick = function() {
        clearInterval(timer);
        init();
    };

})()