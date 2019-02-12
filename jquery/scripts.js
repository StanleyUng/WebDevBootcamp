if (!jQuery) {
    alert("missing jQuery ");
}

var styles = {
    color : "red",
    background: "pink",
    border: "1px solid red"
};

// Debug stuff
// $("li").click(function() {
//     alert("Clicked");
// });

// $("h1").css(styles);
// $("div").css("background", "purple");
// $(".highlight").css("width", "200px");
// $("#third").css("border", "1px solid orange");

var btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    $("#list").append("<li>" + $("#item").val() + "</li>");
});


$("li").hover(
    function() {
        $(this).css("margin", "7px");
    },
    function() {
        $(this).css("margin", "auto");
    }
);

var item = $("li input");

if (item.is(":checked")) {
    
}