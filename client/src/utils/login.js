// Google login initialization
var googleAuth;
var googleUser;
var path = window.location.pathname;
var page = path.split("/").pop();
console.log("page: " + page);

var signinChanged = function(val) {
    console.log('Signin state changed to ', val);
    document.getElementById('signed-in-cell').innerText = val;
};


gapi.load("auth2", function() {
    googleAuth = gapi.auth2.init({
        client_id: "480117956346-0vqf12ip31h7jj0ardhsjdtsg34eglne.apps.googleusercontent.com",
        scope: "profile"
    });
    if (sessionStorage.getItem("userSessionEntity") == null) {
        googleLogin(document.getElementById("btnLogin"));
    }

    // Listen for sign-in state changes.
    //googleAuth.isSignedIn.listen(signinChanged);

});


function postGoogleLogin(googleUser) {
    console.log("Google login successful");

    var user = {};
    user.user_email = googleUser.getBasicProfile().getEmail();
    user.user_fname = googleUser.getBasicProfile().getName();
    user.user_image = googleUser.getBasicProfile().getImageUrl();


    $.ajax({
        url: "https://floating-temple-72911.herokuapp.com/api/user",
        // url: "http://localhost:3000/api/user",
        method: "POST",
        crossDomain: true,
        data: user,
        // dataType: 'json',
    }).done(function(user) {
        console.log(user);
        //Store the entity object in sessionStorage where it will be accessible from all pages of the site.
        var userSessionEntity = {};
        userSessionEntity.id = user.user_id;
        userSessionEntity.googleId = googleUser.getBasicProfile().getId();
        userSessionEntity.name = user.user_fname;
        userSessionEntity.imageUrl = user.user_image;
        userSessionEntity.email = user.user_email;
        userSessionEntity.idToken = googleUser.getAuthResponse().id_token;
        sessionStorage.setItem("userSessionEntity", JSON.stringify(userSessionEntity));

        if (page == "submit.html" || page == "respond") {
            // Do not redirect
            // Update the nav bar menu options
            $("#navSignedIn").show();
            $("#navSignedOut").hide();
        } else {
            // Redirect to users home page
            window.location.href = "/" + userSessionEntity.id + "/survey";
        }



    }).fail(function(xhr, status, error) {
        console.log("User API call failed: " + error);
        window.location.href = "/";
    });

};


function googleLoginErrorHandler(error) {
    console.log("failed signin");
    console.log(error);
    window.location.href = "/";
}

function googleLogin(element) {
    googleAuth.attachClickHandler(element, {}, postGoogleLogin, googleLoginErrorHandler);
}

$(function() {
    $(document).on("click", "#navSignout", async function(event) {
        console.log("In function Signout");

        googleAuth.signOut().then(function() {
            sessionStorage.removeItem("userSessionEntity");
            console.log('User signed out.');
            window.location.href = "/";
        });
    });
});