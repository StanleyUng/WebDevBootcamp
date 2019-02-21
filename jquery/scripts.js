if (!jQuery) {
    alert("missing jQuery ");
}

var styles = {
    color: "red",
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

var allSpans = $("span");

var btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    var item = $("#item").val();
    if (item !== "") {
        //$("#list").append("<li>" + $("#item").val() + "</li>");
        $("#list").append("<li><span>X</span>" + $("#item").val() + "</li>")
        allSpans = $("span");
    }
});


// $("li").hover(
//     // While hovering
//     function () {
//         $(this).css("margin", "7px");
//     },
//     // No longer hovering
//     function () {
//         $(this).css("margin", "auto");
//     }
// );

var item = $("li input");

if (item.is(":checked")) {

}

// When an li inside of a ul is clicked, run this code
$("ul").on("click", "li", function(){
    $(this).toggleClass("task-completed");
});

$("ul").on("click", "span", function(){
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function (event) {

    if (event.which === 13) {
        var item = $("#item").val();
        if (item !== "") {
            $("#list").append("<li><span>X</span><input type=\"checkbox\">" + item.val() + "</li>");
        }
    }
});