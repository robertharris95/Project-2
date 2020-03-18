$(document).ready(function() {

    const $signUp = $("form.signup");
    const $userNameInput = $("#first_name");
    const $userLastInput = $("#last_name");
    const $emailInput = $("#email");
    const $passInput = $("#password");

    $signUp.on("submit", function(event) {
        event.preventDefault();

        let userData = {
            name: $userNameInput.val().trim(),
            last: $userLastInput.val().trim(),
            email: $emailInput.val().trim(),
            password: $passInput.val().trim()
        }

        const valid = validInput(userData);

        if (valid) {
            $.post("/api/signup", {
                name: userData.name,
                last: userData.last,
                email: userData.email,
                password: userData.password   
            })
            .then( () => {
                window.location.replace("/")
            })
            .catch(handleSignupErr);
        }
    })

    function validInput(object) {
        for (const val in object) {
            if (object[val] === null){
                return false
            }
        }
        return true;
    }

    function handleSignupErr(err) {
        $("#alert .msg").text(err.responseJSON);
        $("#alert").fadeIn(500);
    }
})