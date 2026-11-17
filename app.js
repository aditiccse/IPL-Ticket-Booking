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
// Activity 7 - Live Booking Summary

const matchSelect = document.getElementById("match");
const standSelect = document.getElementById("stand");
const quantityInput = document.getElementById("tickets") || document.getElementById("quantity");

const summaryMatch = document.getElementById("summaryMatch");
const summaryStand = document.getElementById("summaryStand");
const summaryPrice = document.getElementById("summaryPrice");
const summaryQuantity = document.getElementById("summaryQuantity");
const summaryTotal = document.getElementById("summaryTotal");

function updateBookingSummary() {

    const match = matchSelect.value;
    const stand = standSelect.value;
    const quantity = Number(quantityInput.value);

    let price = 0;

    if (stand === "General") {
        price = 800;
    }
    else if (stand === "Premium") {
        price = 2000;
    }
    else if (stand === "VIP") {
        price = 5000;
    }

    const total = price * quantity;

    summaryMatch.textContent = match || "Not Selected";
    summaryStand.textContent = stand || "Not Selected";
    summaryPrice.textContent = price;
    summaryQuantity.textContent = quantity;
    summaryTotal.textContent = total;

    showToast("Booking summary updated!");
}

matchSelect.addEventListener("change", updateBookingSummary);
standSelect.addEventListener("change", updateBookingSummary);
quantityInput.addEventListener("input", updateBookingSummary);