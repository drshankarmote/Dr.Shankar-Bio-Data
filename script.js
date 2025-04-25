// script.js

// Function to handle responsiveness adjustments
function adjustLayout() {
    const screenWidth = window.innerWidth;

    // Handling image size for different screen sizes
    const images = document.querySelectorAll("img");
    const videos = document.querySelectorAll("video");
    
    if (screenWidth < 768) {
        // On small screens, adjust image size
        images.forEach((img) => {
            img.style.maxWidth = "100%";
            img.style.height = "auto";
        });
        
        // Resize videos for smaller screens
        videos.forEach((video) => {
            video.style.width = "100%";
            video.style.height = "auto";
        });

        // Adjust layout for tables
        const tables = document.querySelectorAll("table");
        tables.forEach((table) => {
            table.style.width = "100%";
            table.style.margin = "10px 0";
        });

        // Hide marquee for mobile view
        const marquee = document.querySelector("marquee");
        if (marquee) marquee.style.display = "none";
        
    } else {
        // Revert styles to default for larger screens
        images.forEach((img) => {
            img.style.maxWidth = "100%";
            img.style.height = "auto";
        });
        
        videos.forEach((video) => {
            video.style.width = "550px";
            video.style.height = "350px";
        });

        const tables = document.querySelectorAll("table");
        tables.forEach((table) => {
            table.style.width = "95%";
        });

        // Show marquee for larger screens
        const marquee = document.querySelector("marquee");
        if (marquee) marquee.style.display = "block";
    }
}

// Run the function on load and resize
window.addEventListener("load", adjustLayout);
window.addEventListener("resize", adjustLayout);
