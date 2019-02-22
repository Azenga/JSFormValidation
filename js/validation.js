function validate() {

    if (!checkNames()) return false;
    else if (!checkEmail()) return false;

}

function checkNames() {
    const nameTargets = Array.of(document.forms.register.first_name, document.forms.register.middle_name, document.forms.register.last_name)

    let pattern = /^[a-zA-Z]+$/

    for (let i = 0; i < nameTargets.length; i++) {
        const target = nameTargets[i];

        if (!pattern.test(target.value.trim())) {
            alert("Names Validation Failed")
            target.focus()
            target.style.border = "1px solid red"
            setTimeout(() => target.style.border = "1px solid #ccc", 3000)
            target.style.margin = "margin: 20px auto"
            return false;
        }


    }

    return true;
}

function checkEmail() {
    const emailTarget = document.forms.register.email;
    pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/

    if (!pattern.test(emailTarget.value.trim())) {
        alert("Invalid Email Address")
        return false;
    }

    return true;
}

function selectsValidator() {

    const selectTargets = document.querySelectorAll("select");

    for (let i = 0; i < select.length; i++) {
        const element = select[i];

        let pattern = /--[\w_ ]+--/
        if (pattern.test(element.value.trim())) {
            if (element.getAttribute("name") == "faculty") {

            }
        }

    }

}