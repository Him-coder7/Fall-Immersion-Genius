document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("myModal");
    const openModalButton = document.getElementById("");
    const closeModalButton = document.getElementById("");
    openModalButton.addEventListener("click", () => {
        modal.style.display = "block";
    });
    closeModalButton.addEventListener("click", () => {
        modal.style.display = "none";
    });
    window.addEventListener("click", (event) => {
    });
});
