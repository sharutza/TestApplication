(function (global) {
    var LoginViewModel,
    app = global.app = global.app || {};

    LoginViewModel = kendo.data.ObservableObject.extend({
        isLoggedIn: false,
        username: "",
        password: "",

        onLogin: function () {
            var that = this,
            username = that.get("username").trim(),
            password = that.get("password").trim();

            if (username === "" || password === "") {
                var mes="";
                  $.get("http://192.168.4.120/TestWebApi/api/Values/16", function(data) {
                    //$(".textContent").innerText = data;
                      
                      navigator.notification.alert(data,
                                             function () {
                                             }, "Login failed", 'OK');
                });
                
              
                return;
            }

            that.set("isLoggedIn", true);
        },

        onLogout: function () {
            var that = this;

            that.clearForm();
            that.set("isLoggedIn", false);
        },

        clearForm: function () {
            var that = this;

            that.set("username", "");
            that.set("password", "");
        }
    });

    app.loginService = {
        viewModel: new LoginViewModel()
    };
})(window);