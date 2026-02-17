function goNext(page){
window.location.href=page;
}
function updateProgress(currentPage) {
    const pages = [
        'index.html',           // Login
        'verification.html',    // Verification
        'userType.html',        // User Type
        'finance.html',         // Finance
        'collateral.html',      // Collateral
        'social.html',          // Social
        'summary.html'          // Summary
    ];

    const progressBar = document.getElementById("progressBar");
    const index = pages.indexOf(currentPage);

    if(index !== -1) {
        const progressPercent = ((index + 1) / pages.length) * 100;
        progressBar.style.width = progressPercent + "%";
    }
}
