 document.addEventListener('DOMContentLoaded', () => {
            const applyBtn = document.getElementById('applyBtn');
            const applyModal = document.getElementById('applyModal');
            const closeBtn = document.getElementById('closeBtn');

            // Open Modal Handler
            applyBtn.addEventListener('click', (e) => {
                e.preventDefault();
                applyModal.style.display = 'flex';
            });

            // Close Modal Handler
            closeBtn.addEventListener('click', () => {
                applyModal.style.display = 'none';
                // You would typically redirect to an ATS here:
                // window.location.href = "https://your-ats-link.com";
            });

            // Close Modal when clicking outside the content block
            window.addEventListener('click', (e) => {
                if (e.target === applyModal) {
                    applyModal.style.display = 'none';
                }
            });
        });
