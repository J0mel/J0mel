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

    // 2. JavaScript Continuous Moving Gradient Animation (Reads CSS automatically)
    let angle = 0;
    
    // Grab the base background style defined in your CSS sheet once on load
    const bodyElement = document.querySelector('body.bg-slate');
    const computedStyle = window.getComputedStyle(bodyElement);
    let baseLinearGradient = computedStyle.backgroundImage;

    // Fallback if computedStyle doesn't catch it immediately
    if (!baseLinearGradient || baseLinearGradient === 'none') {
        baseLinearGradient = 'linear-gradient(135deg,  #354c8c, #243959, #28283c, #1b3c41)';
    }

    // Strip out any old angle declarations so we can dynamically inject our moving angle loop
    let cleanGradientColors = baseLinearGradient.replace(/linear-gradient\([^,]+,\s*/, '');

    setInterval(function() {
        angle = (angle + 1) % 360; // Increment angle continuously
        let posX = Math.sin(angle * Math.PI / 180) * 50 + 50; 
        let posY = Math.cos(angle * Math.PI / 180) * 50 + 50; 

        // Dynamically rebuilds the background using the rotating angle + your CSS colors
        $('body.bg-slate').css({
            'background': `linear-gradient(${angle}deg, ${cleanGradientColors}`,
            'background-position': `${posX}% ${posY}%`,
            'background-size': '400% 400%'
        });
    }, 50); // Updates every 50ms for smooth movement
});
