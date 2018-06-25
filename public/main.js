window.onload = createButton;

function ChangeInputType() {
  var chosen = document.getElementById("select").value;
  var enteredValues = document.getElementById(chosen).value;

  if (chosen === "email") {
    validateEmail(enteredValues);
  } else if (chosen === "telephone") {
    validateTel(enteredValues);
  }
}
function validateEmail(emailField) {
  console.log(typeof emailField);
  var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (reg.test(emailField) == false) {
    alert("please enter a valid email address ");
    return false;
  }
  return true;
}
function validateTel(phone) {
  console.log("p", phone);

  {
    var phoneNo = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (phone.match(phoneNo)) {
      return true;
    } else {
      alert("Not a valid Phone Number");
      return false;
    }
  }
}
function openModal() {
  var newBtn = document.createElement("div");
  newBtn.setAttribute("id", "dv");
  var newContent = document.createTextNode("Contact me");
  newBtn.appendChild(newContent);
  var currentDiv = document.getElementById("form");
  document.body.insertBefore(newBtn, currentDiv);
  var showForm = document.getElementById("dv");
  showForm.innerHTML = `<form method="post" action="http://localhost:3003/data" target=blank>

                              Name :
                              <input type="text" name="name" id="name" />
                              <br/> Last name:
                              <input type="text" name="last-name" id="last-name" />
                              <br/> Email:
                              <input type="email" name="email" id="email">
                              <br/> Telephone:
                              <input type="tel" name="tel" id="telephone">
                              <br/>
                              <select name="contact-preference" id="select" onclick="ChangeInputType()">
                                  <option value="select">contact preference</option>
                                  <option value="email">Email</option>
                                  <option value="telephone">Telephone</option>
                              </select>
                              <div id="selected"></div>
                          <input onclick="onFormSubmit()" type="submit" value="submit">
                          </form>
  `;
}

function createButton() {
  var newBtn = document.createElement("button");
  newBtn.setAttribute("id", "btn");
  newBtn.setAttribute("onclick", "openModal()");
  var newContent = document.createTextNode("Contact me");
  newBtn.appendChild(newContent);
  var currentDiv = document.getElementById("form");
  document.body.insertBefore(newBtn, currentDiv);
}
function onFormSubmit() {
  console.log("should work");
  document.getElementById("dv").innerHTML = "";
}
