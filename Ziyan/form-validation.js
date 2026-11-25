const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");
const fields = [
    { input: document.getElementById("Firstn"), name: "Primary Name" },
    { input: document.getElementById("Lastn"), name: "Last Name" },
    { input: document.getElementById("Email"), name: "Email Id" }
];

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const missingFields = fields
        .filter(function (field) {
            return !field.input.value.trim();
        })
        .map(function (field) {
            return "Entering " + field.name + " is mandatory.";
        });

    if (missingFields.length > 0) {
        message.textContent = missingFields.join(" ");
        message.className = "form-error";
        return;
    }

    form.reset();
    message.textContent = "Successfully submitted!";
    message.className = "form-success";
});
