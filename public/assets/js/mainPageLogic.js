$(document).ready(function () {
    $('.dropdown-trigger').dropdown();
    $('input#input_text, textarea#textarea2').characterCounter();
});

let theCookie = localStorage.getItem("localThing");
if (theCookie === null) {
    console.log("No Cookies For You!");
    $('.balls').append(
        "<ul id='dropdown1' class='dropdown-content'><li><a href='/userloginpage'>Log In</a></li><li><a href='/usercreatepage'>Create Account</a></li>");
} else {
    $('.balls').append('<ul id="dropdown1" class="dropdown-content"><li><a href="/posting">Submit A Post</a></li><li><a class="posts">Your Articles</a></li><li><a class="bookmarks">Bookmarks</a></li><li><a href="/settings">Edit Account</a></li><li><a class="logout">Logout</a></li></ul>');
    console.log("Eat Away!");
}


$(".logout").on('click', function () {
    localStorage.removeItem('localThing');
    console.log("Delete the cookie!");
    window.location.href = "/";
})

$(".posts").on('click', function () {
    let localStoragePosts = localStorage.getItem("localThing");
    $.get('/posts/' + localStoragePosts).then(function (req, res) {
        setTimeout(() => {
            window.location.href = "/posts/" + localStoragePosts;
        }, 300);
    })
})

$(".bookmarks").on('click', function () {
    let localStoragePosts = localStorage.getItem("localThing");
    $.get('/bookmarks/' + localStoragePosts).then(function (req, res) {
        setTimeout(() => {
            window.location.href = "/bookmarks/" + localStoragePosts;
        }, 300);

    })
})
