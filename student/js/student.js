// --------------最优方法---------------------

// 单例模式
var studentScore = {
    score: '',
    init: function() {
        this.getScore()
    },
    // 获取成绩等级
    getScore: function() {
        var scoreValue = document.getElementById('studentScore');
        var scoreBtn = document.getElementById("checkScore");

        scoreBtn.onclick = function() {
            studentScore.score = scoreValue.value;
            if (studentScore.score == '') {
                studentScore._finalScore = "您尚未输入成绩！";
            };
            // 调用方法一  判断等级
            studentScore._calculateOne();
            // 调用方法二  switch case 判断等级
            // studentScore._calculateTwo();
            // 调用方法三 判断等级
            // studentScore._calculateThree();
        }
    },


    // 方法一 判断等级
    _calculateOne: function() {
        var score = studentScore.score;
        var rank = null;
        if (score >= 0 && score <= 100) {
            rank = 10 - Math.floor(score / 10);
            rank += '等生';
        } else {
            rank = "请输入0到100的数字！";
        };
        this._finalScore(rank);

    },

    // 方法二  switch case 判读等级
    _calculateTwo: function() {
        var score = studentScore.score;
        switch (true) {
            case score > 90 && score <= 100:
                studentScore._finalScore("1等生");
                alert("1邓生");
                break;
            case score > 80 && score <= 90:
                studentScore._finalScore("1等生");
                break;
            case score > 70 && score <= 80:
                studentScore._finalScore("1等生");
                break;
            case score > 60 && score <= 70:
                studentScore._finalScore("1等生");
                break;
            case score > 50 && score <= 60:
                studentScore._finalScore("1等生");
                break;
            case score > 40 && score <= 50:
                studentScore._finalScore("1等生");
                break;
            case score > 30 && score <= 40:
                studentScore._finalScore("1等生");
                break;
            case score > 20 && score <= 30:
                studentScore._finalScore("1等生");
                break;
            case score > 10 && score <= 20:
                studentScore._finalScore("1等生");
                break;
            case score > 0 && score <= 10:
                studentScore._finalScore("差生生");
                break;
            default:
                studentScore._finalScore("请输入0到100的数字！");
                break;

        }
    },

    // 方法三 判断等级
    _calculateThree: function() {
        var score = studentScore.score;
        if (score > 90 && score <= 100) {
            studentScore._finalScore("1等生");
        } else if (score > 80 && score <= 90) {
            studentScore._finalScore("2等生");
        } else if (score > 70 && score <= 80) {
            studentScore._finalScore("3等生");
        } else if (score > 60 && score <= 70) {
            studentScore._finalScore("4等生");
        } else if (score > 50 && score <= 60) {
            studentScore._finalScore("5等生");
        } else if (score > 40 && score <= 50) {
            studentScore._finalScore("6等生");
        } else if (score > 30 && score <= 40) {
            studentScore._finalScore("7等生");
        } else if (score > 20 && score <= 30) {
            studentScore._finalScore("8等生");
        } else if (score > 10 && score <= 20) {
            studentScore._finalScore("9等生");
        } else if (score > 0 && score <= 10) {
            studentScore._finalScore("差生");
        } else {
            studentScore._finalScore("请输入0到100的数字");
        };
    },

    // 将等级传给页面对应标签
    _finalScore: function(str) {
        var finalScore = document.getElementById("finalScore");
        finalScore.innerHTML = str;
    }


};
// 永久执行函数
(function() {
    studentScore.init();
})();



// -------------首次练习------------------
function student() {
    var score, result;
    score = document.getElementById("score").value;

    if (!score) {
        alert("输入为空， 请输入0到100的分数");
        document.getElementById("result").value = '';
        return;
    };


    if (score <= 100 && score > 90) {
        result = "一等";
    } else if (score <= 90 && score > 80) {
        result = "二等";
        console.log(2);
    } else if (score <= 80 && score > 70) {
        result = "三等";
        console.log(3);
    } else if (score <= 70 && score > 60) {
        result = "四等";
        console.log(4);
    } else if (score <= 60 && score > 50) {
        result = "五等";
        console.log(5);
    } else if (score <= 50 && score > 40) {
        result = "六等";
        console.log(6);
    } else if (score <= 40 && score > 30) {
        result = "七等";
        console.log(7);
    } else if (score <= 30 && score > 20) {
        result = "八等";
        console.log(8);
    } else if (score <= 20 && score > 10) {
        result = "九等";
        console.log(9);
    } else if (score <= 10 && score > 0) {
        result = "劝退";
        console.log("劝退");
    } else {
        result = "输入错误，请输入0到100的分数";
    }

    document.getElementById("result").value = result;
}
