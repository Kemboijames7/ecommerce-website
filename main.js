  const shopBtn = document.getElementById('shopBtn');
        const signinModal = document.getElementById('signinModal');
        const closeModal = document.getElementById('closeModal');
        const signinForm = document.getElementById('signinForm');
        const forgotLink = document.getElementById('forgotLink');
        const signupLink = document.getElementById('signupLink');
        const googleBtn = document.getElementById('googleBtn');
        const facebookBtn = document.getElementById('facebookBtn');

        // Open modal
        shopBtn.addEventListener('click', () => {
            signinModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        // Open modal from Sign in / Register link
        // This targets any link with class 'in-register'
          document.addEventListener('DOMContentLoaded', () => {
            const signinLinks = document.querySelectorAll('.in-register');
            signinLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault(); // Prevent navigation
                    signinModal.classList.add('active');
                    document.body.style.overflow = 'hidden';
                });
            });
        });

        // Close modal
        closeModal.addEventListener('click', () => {
            signinModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });

        // Close on overlay click
        signinModal.addEventListener('click', (e) => {
            if (e.target === signinModal) {
                signinModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && signinModal.classList.contains('active')) {
                signinModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });

        // Handle form submission
        signinForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            alert(`Welcome back!\nEmail: ${email}\n\nThis is a demo. In production, this would authenticate with your backend.`);
            signinModal.classList.remove('active');
            document.body.style.overflow = 'auto';
            signinForm.reset();
        });

        // Handle forgot password
        forgotLink.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Password reset link would be sent to your email.\n\nThis is a demo feature.');
        });

        // Handle sign up link
        signupLink.addEventListener('click', (e) => {
            e.preventDefault();
            alert('This would redirect to the Sign Up page.\n\nThis is a demo feature.');
        });

        // Handle Google sign in
        googleBtn.addEventListener('click', () => {
            alert('Google Sign In would be initialized here.\n\nThis is a demo feature.');
        });

        // Handle Facebook sign in
        facebookBtn.addEventListener('click', () => {
            alert('Facebook Sign In would be initialized here.\n\nThis is a demo feature.');
        });