const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const clearBtn = document.getElementById('clear');
const counter = document.getElementById('counter');
const errorMsg = document.getElementById('error');

let count = 0;

// Function to update counter display
function updateCounter() {
    counter.innerHTML = count;
}

// Function to check and toggle clear button
function checkClearButton() {
    if (count > 1) {
        clearBtn.style.display = 'block';
    } else {
        clearBtn.style.display = 'none';
    }
}

// Increment button click handler
incrementBtn.addEventListener('click', () => {
    count++;
    updateCounter();
    checkClearButton();
    errorMsg.classList.add('hidden'); // Hide error message when count > 0
});

// Decrement button click handler
decrementBtn.addEventListener('click', () => {
    if (count > 0) {
        count--;
        updateCounter();
        checkClearButton();
    } else {
        errorMsg.classList.remove('hidden'); // Show error message if count < 0
    }
});

// Clear button click handler
clearBtn.addEventListener('click', () => {
    count = 0;
    updateCounter();
    clearBtn.style.display = 'none'; // Hide clear button when count = 0
});
