//variabile e funzione per iniziare esame
const proceed = document.querySelector("#btn-exam")
const checkBox = document.querySelector(".checkbox-style");

proceed.addEventListener("click", () => {
    if (checkBox.checked == true){
    window.location.href = "exam.html";
    }
    else{
        alert("Your promise is needed to proceed");
    }
})

