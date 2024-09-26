let ori_pass = document.querySelector("#idpassword");
let confir_pass = document.querySelector("#idconfirm_password");
let truth = true;

const form = document.querySelector("form");

form.addEventListener("submit",(e) => {
    if (truth == false) {
        e.preventDefault();
        return;
    }
    truth = true;
})

confir_pass.addEventListener('input',() => {
    if (confir_pass.value != ori_pass.value) {
        document.querySelector("#matchs").textContent = "Confirm Password***"
        truth = false;
    }
    else{
        document.querySelector("#matchs").textContent = "Confirm Password"
        truth = true;
    }
})

ori_pass.addEventListener('input',() => {
    if (confir_pass.value != ori_pass.value) {
        document.querySelector("#matchs").textContent = "Confirm Password***"
        truth = false;
    }
    else{
        document.querySelector("#matchs").textContent = "Confirm Password"
        truth = true;
    }
})

















// let style = document.querySelector("#matchs").style;
// style.setProperty('textContent',"Hi")

// confir_pass.addEventListener('input',() => {
//     if (confir_pass.value != ori_pass.value) {
//         console.log("yes")
//         document.querySelector("#matchs").textContent = "Confirm Password***"
//     }
//     else{
//         document.querySelector("#matchs").textContent = "Confirm Password"
//     }
// })

// ori_pass.addEventListener('input',() => {
//     if (confir_pass.value != ori_pass.value) {
//         console.log("yes")
//         document.querySelector("#matchs").textContent = "Confirm Password***"
//     }
//     else{
//         document.querySelector("#matchs").textContent = "Confirm Password"
//     }
// })