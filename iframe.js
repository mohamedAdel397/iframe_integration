document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementsByClassName("payment-container");
    if (container) {
        const iframe = document.createElement("iframe");
        iframe.src = "https://mohamedadel397.github.io/iframe_integration/iframe.html"; // The URL of the iframe content
        iframe.width = container.getAttribute('data-iframe-width') || "100%";
        iframe.height = container.getAttribute('data-iframe-height') || "400px";
        iframe.style.border = "none";
        container.appendChild(iframe);
    }
});
