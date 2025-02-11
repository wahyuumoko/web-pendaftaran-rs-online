$(document).ready(function() {
    let currentStep = 0;
    const steps = $(".step");
    
    function showStep(index) {
        if (index >= 0 && index < steps.length) {
            steps.removeClass("active");
            $(steps[index]).addClass("active");
        }
    }
    
    $(".next").click(function() {
        if (currentStep < steps.length - 1) {
            currentStep++;
            showStep(currentStep);
        }
    });
    
    $(".prev").click(function() {
        if (currentStep > 0) {
            currentStep--;
            showStep(currentStep);
        }
    });
    
    showStep(currentStep);
});