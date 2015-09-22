window.console.log("include");
var checkTheForm;

$(document).ready(function () {
    checkTheForm = new CheckTheForm();

});



function CheckTheForm() {
    //ссылка на текущий объект CheckTheForm
    var obj = this;
    //задаем переменные для работы (поля формы)
    var $loginField = $("#login");
    var $passField = $("#pass");
    var $repassField = $("#r_pass");
    var $emailField = $("#email");



    //вешаем обработчики событий 
    this.addActionCheckedField = function () {

        window.console.log("addActions");
        
        $loginField.on("input", function () {
            obj.checkLogin(getLastWord(this));
        });

        $passField.on("input", function () {
            obj.checkpass(getLastWord(this), this);
        });

        $repassField.on("input", function () {
            obj.checkpass(getLastWord(this), this);
        });

        $emailField.on("input", function () {
            obj.checkEmail(getLastWord(this));
        });

    };

 

    //получаем последний символ из строки 
    function getLastWord(ob) {
        var word = ob.value[ob.value.length - 1];
        window.console.info(word);
        return word;
    }
    //задаем параметры для проверки "живого" ввода данных 
    this.checkLogin = function (word) {
        var patt = new RegExp("[a-z0-9A-Z]");
        actionEntry($loginField, patt.test(word));
    };

    this.checkpass = function (word, ob) {
        var patt = new RegExp("[a-z0-9A-Z]");
        actionEntry($(ob), patt.test(word));
    };

    this.checkEmail = function (word) {
        var patt = new RegExp("[a-z0-9\.@A-Z]");
        actionEntry($emailField, patt.test(word));
    };

     //действие при корректном или не корректном вводе 
    function actionEntry($ob, isTrue) {

        var error = "error";

        if (isTrue) {
            $ob.removeClass(error);
        } else {
            $ob.addClass(error);
            //убрал стираниее всей строки , я видимо не правильно понял тогда ДЗ
            $ob.val($ob.val().slice(0, -1));
        }
        return isTrue;
    }

    //проверка перед отправкой 
    this.submit = function () {
        window.console.log("submit");
        var regLogin = new RegExp("^[a-zA-z]{1}[a-zA-Z1-9]{3,20}$");
        var regmail = new RegExp("^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$");
        var regPass = new RegExp("[a-zA-Z1-9]{6,20}");

        if (actionEntry($loginField, regLogin.test($loginField.val()))
                && actionEntry($emailField, regmail.test($emailField.val()))
                && actionEntry($passField, regPass.test($passField.val()))
                && actionEntry($repassField, regPass.test($repassField.val()))
                && actionEntry($passField, ($repassField.val() === $passField.val()))) {
            send();
        }
    };
    //отправка
    function send() {
        window.console.info(" Very  Well !!!");
    }



    this.addActionCheckedField();

}

