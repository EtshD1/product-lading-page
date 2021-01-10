(() => {
    const burger = document.querySelector("#burger");
    const modal = document.querySelector("#modal");
    const navBar = document.querySelector("#nav-links");
    const navClose = document.querySelector(".nav-close");

    function deactivate() {
        modal.classList.remove("active");
        navBar.classList.remove("active");
    }

    burger.addEventListener("click", () => {
        navBar.classList.add("active");
        modal.classList.add("active");
    });

    navClose.addEventListener("click", deactivate);

    modal.addEventListener("click", deactivate);
})()