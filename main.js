document.addEventListener('DOMContentLoaded', function () {
    // Modal logic
    const modal = document.getElementById('projectModal');
    const closeModal = document.getElementById('closeModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    document.querySelectorAll('.project-thumb').forEach((thumb, idx) => {
        thumb.addEventListener('click', function (e) {
            e.preventDefault();
            modal.classList.add('active');
            modalTitle.textContent = `Project ${idx + 1}`;
            modalDescription.textContent = `Detailed description for Project ${idx + 1}.`;
        });
    });
    closeModal.addEventListener('click', function () {
        modal.classList.remove('active');
    });
    window.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') modal.classList.remove('active');
    });
});
