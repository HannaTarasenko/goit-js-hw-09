
let formData = {
    email: "", 
    message: ""
}

const form = document.querySelector('.feedback-form');
const labels = document.querySelectorAll('.feedback-form label');
const emailInput = document.querySelector('input[name="email"]');
const messageTextArea = document.querySelector('textarea[name="message"]');
const submitButton = document.querySelector('button');

labels.forEach(label => {
    label.classList.add('form-label')
});
emailInput.classList.add('form-input');
messageTextArea.classList.add('form-text-area');
submitButton.classList.add('form-button');

form.addEventListener('input', (event) => {
    formData[event.target.name] = event.target.value.trim();
    addToLocalStorage();
});

window.addEventListener('load', () => {
    fillFromLocalStorage();
});

function addToLocalStorage() {
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function fillFromLocalStorage() {
    const savedData = localStorage.getItem('feedback-form-state');
    if (savedData) {
        const parsedData = JSON.parse(savedData);
        form.elements.email.value = parsedData.email;
        form.elements.message.value = parsedData.message;
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (formData.email === ""|| formData.message === "") {
        alert('Fill please all fields');
        return;
    }

    console.log(formData);

    localStorage.removeItem('feedback-form-state');
    form.reset();
    formData.email = "";
    formData.message = "";
});