window.console.log("include");

var checkTheForm = new CheckTheForm();


function CheckTheForm() {
    var obj = this;
    window.console.log("constructor");
    var loginField = document.getElementById("login");
    var passField = document.getElementById("pass");
    var repassField = document.getElementById("r_pass");
    var emailField = document.getElementById("email");

    this.addActionCheckedField();


    this.addActionCheckedField = function () {

        window.console.log("addActions");
        loginField.onchange = function () {
            obj.checkLogin(this);
        };

        passField.onchange = function () {
            obj.checkpass(this,false);
        };

        repassField.onchange = function () {
            obj.checkpass(this,true);
        };

        emailField.onchange = function () {
            obj.checkEmail(this);
        };

    };





    this.checkLogin = function (ob) {
        window.console.log('value:' + ob.value);
    };


    this.checkpass = function (ob,isRePass) {

    };

    this.checkEmail = function (ob) {

    };


    this.submit = function (ob){
        
    };



};
