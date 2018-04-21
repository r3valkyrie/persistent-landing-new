$.getJSON("https://api.github.com/repos/Persistent-SS13/Persistent-Bay/pulls?state=closed", function(data) {
    var items = [];
    var mergeStatus = '';
    $('.pulls .throbber-loader').remove();
    $.each(data, function(key, val) {
        if (key < 5) {
            if (data[key]['merged_at'] == null) {
                mergeStatus = "assets/closed.svg";
            } else {
                mergeStatus = "assets/merged.svg";
            }
            items.push("<div class='pull-request'><a href='" + data[key]['user']['html_url'] + "'><img class='avatar' src='" + data[key]['user']['avatar_url'] + "'></img></a><a href='" + data[key]['html_url'] + "'><h5 class='title'>" + "<img class='mergestatus' src='" + mergeStatus + "'>" + data[key]['title'] + "</h5></a></div>");
        };
    });
    $("<ul/>", {
        "class": "pr-list",
        html: items.join("")
    }).appendTo(".pulls");
});
