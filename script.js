document.querySelectorAll('.count').forEach(counter => {
    counter.innerText = '0';
    
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText;

        const increment = target / 100; // Increment value

        if (c < target) {
            counter.innerText = Math.ceil(c + increment);
            setTimeout(updateCounter, 10); // Update every 10ms
        } else {
            counter.innerText = target; // Cap to target
        }
    }
    
    updateCounter();
});
