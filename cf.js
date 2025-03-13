let active = false
const formInputs = document.querySelectorAll(
  ".form-input"
);

const up = document.querySelector(".contact-icon .up")

const contactIcon = document.querySelector(
  ".contact-icon"
);

const comment = document.querySelector(".comment")

const formContainer = document.querySelector(
  ".form-container"
);

contactIcon.addEventListener("click", () => {
	if(!active){
     active = true
     formContainer.style.bottom = "0"
     up.style.bottom = "0"
     comment.style.bottom = "-100%"
  }
  else {
     active = false
     formContainer.style.bottom = "-150%"
     up.style.bottom = "-100%"
     comment.style.bottom = "0"
  }
});

formInputs.forEach((i) => {
  i.addEventListener("blur", () => {
    if (i.value === "") {
      i.previousElementSibling.classList.remove("active");
    }
  });
});
async function cfSubmitMessage() {
    var cfvalue = {
      name: GEBID("name").value,
      email: GEBID("email").value.toLowerCase(),
      message: GEBID("message").value,
    };
    console.log(cfvalue);
    
    let emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    
    if (cfvalue.name === "" || cfvalue.email === ""   || cfvalue.message === "") {
        return;
    } 
    else if (!emailRegex.test(cfvalue.email)) {
        return;
    } else {
        GEBID("submit").removeAttribute("onclick");
        GEBID("submit").classList.remove("color");
        GEBID("submit").classList.add("onclick");
        GEBID("submit").innerHTML = "Sending...";

        try {
        var sendmessage = await (
            await fetch(
            'https://cf-worker.shauryachandrakar26.workers.dev/',
            {
                method: "POST",
                body: JSON.stringify(cfvalue),
            }
            )
        ).json();

        console.log(sendmessage);
        

        if (sendmessage.status) {
            GEBID("submit").innerHTML = "Sent!";

            localStorage.setItem(
            "contact-form",
            JSON.stringify({
                sent: true,
                canSendUnix: new Date().getTime() + 43200000,
            })
            );
        } else {
            throw new Error("Error");
        }
        } catch (error) {
        console.log(error);
        GEBID("submit").innerHTML = "Error!";
        }
      }
}

function GEBID(id) {
    return document.getElementById(id);
}
