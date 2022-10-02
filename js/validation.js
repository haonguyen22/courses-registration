function validation() {
     let id = document.getElementById("id");
     let fullName = document.getElementById("name");
     let address = document.getElementById("address");
     let phone = document.getElementById("phone");
     let email = document.getElementById("email");
     let flag = true;
     if (!checkId(id)) {
          showError(id);
          flag = false;
     } else resetError(id);

     if (!checkMoreThan2Words(fullName.value)) {
          showError(fullName);
          flag = false;
     } else resetError(fullName);

     if (!checkMoreThan2Words(address.value)) {
          showError(address);
          flag = false;
     } else resetError(address);

     if (!checkPhone(phone)) {
          showError(phone);
          flag = false;
     } else resetError(phone);

     if (!checkEmail(email)) {
          showError(email);
          flag = false;
     } else resetError(email);

     return flag;
}

function showError(selector) {
     selector.style.border = "2px solid red";
}

function resetError(selector) {
     selector.style.border = "";
}

function checkId(selector) {
     let regex = new RegExp("^(17|18|19|20|21|22)[0-9]{6}$");
     if (!regex.test(selector.value)) return false;
     return true;
}

function checkMoreThan2Words(string) {
     var arrString = string.trim();
     var count = 0;
     for (let i = 0; i < arrString.length; i++)
          if (arrString[i] === " ") count++;
     if (count >= 1) return true;
     return false;
}
function checkPhone(selector) {
     let regex = new RegExp("^[0]+[0-9]{9}$");
     if (!regex.test(selector.value)) return false;
     return true;
}

function checkEmail(selector) {
     let regex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
     if (!regex.test(selector.value)) return false;
     return true;
}
