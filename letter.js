// Add gentle fade-in animation to letter paragraphs
document.addEventListener('DOMContentLoaded', function() {
    const paragraphs = document.querySelectorAll('.letter-text, .letter-signature');
    
    paragraphs.forEach((paragraph, index) => {
        paragraph.style.opacity = '0';
        paragraph.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            paragraph.style.transition = 'all 0.8s ease-out';
            paragraph.style.opacity = '1';
            paragraph.style.transform = 'translateY(0)';
        }, 200 * index);
    });
});