$(document).ready(function() {
    // 1. Project Modal Interactivity
    $('.project-card').on('click', function() {
        const title = $(this).attr('data-title');
        const desc = $(this).attr('data-desc');
        const repo = $(this).attr('data-repo');
        const icon = $(this).attr('data-icon');

        $('#modalTitle').html(`<span class="material-icons text-accent">${icon}</span> ${title}`);
        $('#modalDesc').text(desc);
        $('#modalRepoBtn').attr('href', repo);

        const projectModal = new bootstrap.Modal(document.getElementById('projectModal'));
        projectModal.show();
    });

    // 2. JavaScript Continuous Moving Gradient Animation
    let angle = 0;
    let posX = 0;
    let posY = 0;

    setInterval(function() {
        angle = (angle + 1) % 360; // Increment angle continuously
        posX = Math.sin(angle * Math.PI / 180) * 50 + 50; // Calculate flowing X position
        posY = Math.cos(angle * Math.PI / 180) * 50 + 50; // Calculate flowing Y position

        $('body.bg-slate').css({
            'background': `linear-gradient(${angle}deg, #0f172a, #1e1b4b, #0f172a, #172554)`,
            'background-position': `${posX}% ${posY}%`,
            'background-size': '400% 400%'
        });
    }, 50); // Updates every 50ms for smooth movement
});
