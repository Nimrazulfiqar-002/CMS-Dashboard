const pages = document.querySelectorAll(".page");

pages.forEach(page => {
    page.addEventListener("click", () => {
        document.querySelector(".page.active").classList.remove("active");
        page.classList.add("active");
    });
});

// Items per page dropdown
document.getElementById("itemsPerPage").addEventListener("change", function() {
    alert("Show " + this.value + " items per page");
    // Here you will reload table data based on selected number
});