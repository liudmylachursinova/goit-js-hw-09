const formData = {
    email: "",
    message: "",
}

const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector(".feedback-form");

function populateForm() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (saveData) {
        try {
            const parsedData = JSON.parse(savedData);
            formData.email = parsedData.email || "";
            formData.message = parsedData.message || "";
            form.elements.email.value = formData.email;
            form.elements.message.value = formData.message;
        } catch (error) {
            consolez.error(error);
        }
    }
}

populateForm();

form.addEventListener("input", (event) => {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
     if (formData.email === "" || formData.message === "") {
    alert("Fill please all fields");
    return;
    }
    console.log("Form Submitted:", formData);
    ocalStorage.removeItem(STORAGE_KEY);
  formData.email = "";
  formData.message = "";
  form.reset();
});