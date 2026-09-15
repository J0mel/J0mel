$(document).ready(function() {
    // Initialize Bootstrap Modal instance
    const projectModal = new bootstrap.Modal(document.getElementById('projectModal'));

    // Listen for click events on any project card using jQuery
    $('.project-card').on('click', function() {
        const title = $(this).data('title');
        const desc = $(this).data('desc');
        const repo = $(this).data('repo');
        const icon = $(this).data('icon');

        // Populate modal fields
        $('#modalTitle').html(`<span class="material-icons">${icon}</span> ${title}`);
        $('#modalDesc').text(desc);
        $('#modalRepoBtn').attr('href', repo);

        // Show the modal via Bootstrap
        projectModal.show();
    });
});
