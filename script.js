// Food Delivery Landing Page

document.addEventListener("DOMContentLoaded", function () {
    console.log("Landing Page Loaded Successfully!");

    // Order Now Button
    const orderBtn = document.querySelectorAll(".btn");

    orderBtn.forEach(button => {
        button.addEventListener("click", function (e) {
            e.preventDefault();
            alert("Thank you! Your order request has been received.");
        });
    });

    // Learn More Button
    const learnBtn = document.querySelector(".btn-outline");

    if (learnBtn) {
        learnBtn.addEventListener("click", function (e) {
            e.preventDefault();
            alert("More features coming soon!");
        });
    }
});