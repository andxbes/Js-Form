window.console.log("include");

var checkTheForm = new CheckTheForm();


function CheckTheForm() {
    var obj = this;
    window.console.log("constructor");
    var loginField = document.getElementById("login");
    var passField = document.getElementById("pass");
    var repassField = document.getElementById("r_pass");
    var emailField = document.getElementById("email");




    this.addActionCheckedField = function () {

        window.console.log("addActions");
        loginField.oninput = function () {
            obj.checkLogin(getLastWord(this));
        };

        passField.oninput = function () {
            obj.checkpass(getLastWord(this), this);
        };

        repassField.oninput = function () {
            obj.checkpass(getLastWord(this), this);
        };

        emailField.oninput = function () {
            obj.checkEmail(getLastWord(this));
        };

    };




    function getLastWord(ob) {
        var word = ob.value[ob.value.length - 1];
        window.console.info(word);
        return word;

    }

    this.checkLogin = function (word) {
        var patt = new RegExp("[a-z0-9A-Z]");
        actionEntry(loginField, patt.test(word));
    };



    this.checkpass = function (word, ob) {
        var patt = new RegExp("[a-z0-9A-Z]");
        actionEntry(ob, patt.test(word));
    };

    this.checkEmail = function (word) {
        var patt = new RegExp("[a-z0-9\.@A-Z]");
        actionEntry(emailField, patt.test(word));
    };


    function actionEntry(ob, isTrue) {

        if (isTrue) {
            if (ob.hasAttribute("class"))
                ob.removeAttribute("class");
        } else {
            ob.setAttribute("class", "error");
            ob.value = "";
        }
        return isTrue;
    }


    this.submit = function () {
        window.console.log("submit");
        var regLogin = new RegExp("^[a-zA-z]{1}[a-zA-Z1-9]{3,20}$");
        var regmail = new RegExp("^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$");
        var regPass = new RegExp("[a-zA-Z1-9]{6,20}");
        
        // window.console.info(loginField.value + "   " + regLogin.test(loginField.value));
            // window.console.info(passField.value + "   " + regPass.test(passField.value));
                // window.console.info(emailField.value + "   " + regmail.test(emailField.value));

        if (actionEntry(loginField, regLogin.test(loginField.value))
                && actionEntry(emailField, regmail.test(emailField.value))
                && actionEntry(passField, regPass.test(passField.value))
                && actionEntry(repassField, regPass.test(repassField.value))
                && actionEntry(passField, (repassField.value == passField.value))) {
            send();
        }
    };

    function send() {
        window.console.info("send");
    }



    this.addActionCheckedField();

}

