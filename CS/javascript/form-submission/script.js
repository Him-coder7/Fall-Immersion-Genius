document.addEventListener("DOMContentLoaded", () => {
    const MYFORM = document.getElementById("myForm");
    MYFORM.addEventListener('submit', function(event) {
        event.preventDefault();
        userName = document.getElementById("");
         email = document.getElementById("");
         message = document.getElementById("");
        if (userName && email && message) {
            alert(`Form submitted successfully!\nName: ${username.value}\nEmail: ${email.value}\nMessage: ${message.value}`);

        } else {
            alert(`Fill all the fields`);
        }
    });
});
