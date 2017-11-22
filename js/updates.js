$(function () {

    loadMotivationalQuote();
    loadLatestNews();

    function loadMotivationalQuote() {

        $.ajax({
            type: "get",
            url: "http://littlemoon-admin-server.herokuapp.com/notification/get/MotivationalQuote",
            success: function (data) {
                console.log("Motivational quote downloaded ", data);
                if (data.message && data.message.notificationText) {
                    // set motivational quote in html
                }
            }
        })
    }

    function loadLatestNews() {

        $.ajax({
            type: "get",
            url: "http://littlemoon-admin-server.herokuapp.com/notification/get/Bulletin",
            success: function (data) {
                console.log("Bulletin downloaded ", data);
                if (data.message && data.message.notificationText) {
                    $("#latest-update-content").html(data.message.notificationText);
                }
            }
        })
    }
})