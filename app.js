(() => {
    // Interactive Buttons
    const burger = document.querySelector("#burger");
    const navClose = document.querySelector(".nav-close");
    // Modal for background covering
    const modal = document.querySelector("#modal");
    // Navigation bar
    const navBar = document.querySelector("#nav-links");
    // Sections
    const howSection = document.querySelector("#how");
    const featureSection = document.querySelector("#features");
    const getStartedSection = document.querySelector("#getStarted");
    // Anchor tags
    const scrollers = document.querySelectorAll("#nav-links a");

    // Function to deactivate modal and navbar
    function deactivate() {
        modal.classList.remove("active");
        navBar.classList.remove("active");
    }
    // Enable modal and show navbar
    burger.addEventListener("click", () => {
        navBar.classList.add("active");
        modal.classList.add("active");
    });
    // Display modal and show navbar
    navClose.addEventListener("click", deactivate);
    modal.addEventListener("click", deactivate);
    // Scroll to the 'how it works' section
    scrollers[0].addEventListener("click", (e) => {
        e.preventDefault();
        howSection.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
        deactivate();
    });
    // Scroll to the 'features' section
    scrollers[1].addEventListener("click", (e) => {
        e.preventDefault();
        featureSection.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
        deactivate();
    });
    // Scroll to the 'get start' section
    scrollers[2].addEventListener("click", (e) => {
        e.preventDefault();
        getStartedSection.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
        deactivate();
    });
})()