const form = document.querySelector('.feedback-form');
const labels = document.querySelectorAll('.feedback-form label');
const emailInput = form.querySelector('input[name="email"]');
const messageTextarea = form.querySelector('textarea[name="message"]');
const button = document.querySelector('button');

let formData = {
    email: "", 
    message: ""
}
function addToLocalStorage() {
    localStorage.setItem('feedback-form-state', JSON.stringif(formData));

}