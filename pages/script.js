document.addEventListener('DOMContentLoaded', function() {
    // Multi-step form functionality
    let currentStep = 0;
    const steps = document.querySelectorAll(".step");
    const nextButtons = document.querySelectorAll(".next");
    const prevButtons = document.querySelectorAll(".prev");

    function showStep(index) {
        if (index >= 0 && index < steps.length) {
            steps.forEach(step => step.classList.remove("active"));
            steps[index].classList.add("active");
        }
    }

    nextButtons.forEach(button => {
        button.addEventListener("click", function() {
            if (currentStep < steps.length - 1) {
                currentStep++;
                showStep(currentStep);
            }
        });
    });

    prevButtons.forEach(button => {
        button.addEventListener("click", function() {
            if (currentStep > 0) {
                currentStep--;
                showStep(currentStep);
            }
        });
    });

    showStep(currentStep);

    // Sidebar toggle functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');

    if (menuToggle && sidebar && mainContent) {
        menuToggle.addEventListener('click', function() {
            sidebar.classList.toggle('active');
            mainContent.classList.toggle('active');
        });
    }

    // Tab navigation functionality
    function showTab(tabId) {
        document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        
        document.getElementById(tabId).classList.add('active');
        document.querySelector(`button[onclick="showTab('${tabId}')"]`).classList.add('active');
    }

    window.showTab = showTab;

    // Authentication button functionality
    const authButton = document.getElementById("auth-button");
    
    if (authButton) {
        const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    
        function updateAuthButton() {
            if (isLoggedIn) {
                authButton.innerHTML = '<i class="fas fa-sign-out-alt"></i> Logout';
                authButton.style.backgroundColor = "red";
                authButton.onclick = function () {
                    localStorage.setItem("isLoggedIn", "false"); // Hapus status login
                    location.reload(); // Refresh halaman
                };
            } else {
                authButton.innerHTML = '<i class="fas fa-sign-in-alt"></i> Login';
                authButton.style.backgroundColor = "blue";
                authButton.onclick = function () {
                    window.location.href = "../pages/login-register.html"; // Arahkan ke halaman login
                };
            }
        }
    
        updateAuthButton();
    }
});