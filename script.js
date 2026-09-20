// ===============================
// LOGIN
// ===============================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const email =
            document.getElementById("email").value.trim();

        const password =
            document.getElementById("password").value.trim();

        const message =
            document.getElementById("message");

        if (email === "" || password === "") {

            message.textContent =
                "Please enter email and password.";

            return;
        }

        window.location.href = "dashboard.html";

    });

}


// ===============================
// DASHBOARD FUNCTIONS
// ===============================

function logout() {
    window.location.href = "index.html";
}

function giveFeedback() {
    window.location.href = "feedback.html";
}

function feedbackHistory() {
    window.location.href = "history.html";
}

function viewCourses() {
    window.location.href = "courses.html";
}

function feedbackSummary() {
    window.location.href = "summary.html";
}