$(document).ready(function () {
    $('.dropdown-trigger').dropdown();
    $('input#input_text, textarea#textarea2').characterCounter();
});

let theCookie = localStorage.getItem("localThing");
if (theCookie === null) {
    console.log("No Cookies For You!");
    $('.container').append(
        "<ul id='dropdown1' class='dropdown-content'><li><a href='/userloginpage'>Log In</a></li><li><a href='/usercreatepage'>Create Account</a></li>");
} else {
    $('.container').append('<ul id="dropdown1" class="dropdown-content"><li><a href="/posting">Submit A Post</a></li><li><a class="posts">Your Articles</a></li><li><a class="bookmarks">Bookmarks</a></li><li><a href="/settings">Edit Account</a></li><li><a class="logout">Logout</a></li></ul>');
    console.log("Eat Away!");
}


$(".logout").on('click', function () {
    localStorage.removeItem('localThing');
    console.log("Delete the cookie!");
    window.location.href = "/";
})

$(".posts").on('click', function () {
    let localStoragePosts = localStorage.getItem("localThing");
    window.location.href = "/posts/" + localStoragePosts;
    $.get('/posts/' + localStoragePosts, function (req, res) {

    })
})

$(".bookmarks").on('click', function () {
    let localStoragePosts = localStorage.getItem("localThing");
    window.location.href = "/bookmarks/" + localStoragePosts;
    $.get('/posts/' + localStoragePosts, function (req, res) {

    })
})
