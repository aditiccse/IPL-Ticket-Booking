function showToast(message) {
    const toast = document.createElement("div");

    toast.className = "toast";
    toast.textContent = message;

    document.body.appendChild(toast);

    setTimeout(function () {
        toast.remove();
    }, 3000);
}
document.querySelectorAll(".book-btn").forEach(function (button) {
    button.addEventListener("click", function (event) {
    event.preventDefault();

    showToast("Opening booking section!");

    document.querySelector("#booking").scrollIntoView({
        behavior: "smooth"
    });
    });
});