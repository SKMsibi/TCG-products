
function ChangeInputType() {

    var chosen = document.getElementById("select").value;
    var enteredValues = document.getElementById(chosen).value;

    if (chosen === "email") {
        validateEmail(enteredValues)
    } else if (chosen === "telephone") {
        validateTel(enteredValues)
    }
}
function validateEmail(emailField) {
    console.log(typeof emailField)
    var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(emailField) == false) {
        alert('please enter a valid email address ');
        return false;
    }
    return true;
}
function validateTel(phone) {
    console.log("p", phone)

    {
        var phoneNo = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if (phone.match(phoneNo)) {
            return true;
        }
        else {
            alert("Not a valid Phone Number");
            return false;
        }



    }
}