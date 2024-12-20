// JavaScript to add dynamic functionality if needed (e.g., tracking clicks)
document.querySelectorAll('.link').forEach(link => {
    link.addEventListener('click', function(event) {
        console.log(`Link clicked: ${event.target.textContent}`);
    });
});
