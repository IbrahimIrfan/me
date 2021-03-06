window.addEventListener("load", function () {
    populate_nav()
});

function populate_nav() {
    var body = document.body;
    nav = "<ul class='nav justify-content-center'>" +
        "<li class='nav-item'>" +
        "    <a class='nav-link active' href='/'>" +
        "       <img class='nav-logo' src='/img/logo.png'>" +
        "</a>" +
        "</li>" +
        "<li class='nav-item'>" +
        "    <a class='nav-link' href='/writing'>Writing</a>" +
        "</li>" +
        "<li class='nav-item'>" +
        "    <a class='nav-link' href='/courses'>Courses</a>" +
        "</li>" +
        "<li class='nav-item'>" +
        "    <a class='nav-link' href='/notes'>Notes</a>" +
        "</li>" +
        "<li class='nav-item'>" +
        "    <a class='nav-link' href='/contact'>Contact</a>" +
        "</li>" +
        "</ul>"
    body.innerHTML = nav + body.innerHTML;
}