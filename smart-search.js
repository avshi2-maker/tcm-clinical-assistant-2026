// Smart Search Module - Ensures alphabet is initialized
// Works with dynamically loaded component from page_components
// Date: February 5, 2026

console.log('Loading Smart Search module V3...');

// Re-initialize alphabet when components are loaded
function checkAndInitAlphabet() {
    var container = document.getElementById('alphabetNav');
    if (container && container.children.length === 0) {
        if (typeof window.initAlphabetNav === 'function') {
            window.initAlphabetNav();
            console.log('Alphabet re-initialized by smart-search.js');
        }
    }
}

// Try multiple times to ensure alphabet is initialized
setTimeout(checkAndInitAlphabet, 500);
setTimeout(checkAndInitAlphabet, 1500);
setTimeout(checkAndInitAlphabet, 3000);

console.log('Smart Search module V3 loaded');
