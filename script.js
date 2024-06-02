// Get the container and items
const itemsContainer = document.querySelector('.items');
const items = document.querySelectorAll('.item');

// Initialize variables
let isDragging = false;
let startX = 0;
let translateX = 0;

// Event listeners
itemsContainer.addEventListener('mousedown', handleMouseDown);
itemsContainer.addEventListener('mousemove', handleMouseMove);
itemsContainer.addEventListener('mouseup', handleMouseUp);
itemsContainer.addEventListener('mouseleave', handleMouseUp);

function handleMouseDown(e) {
    isDragging = true;
    startX = e.clientX;
    translateX = getTranslateX();
}

function handleMouseMove(e) {
    if (!isDragging) return;
    const deltaX = e.clientX - startX;
    itemsContainer.style.transform = `translateX(${translateX + deltaX}px)`;
}

function handleMouseUp() {
    isDragging = false;
}

function getTranslateX() {
    const transform = window.getComputedStyle(itemsContainer).transform;
    const matrix = new DOMMatrix(transform);
    return matrix.m41;
}
