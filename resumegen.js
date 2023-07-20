document.addEventListener("DOMContentLoaded", function () {
    
        var adin = document.getElementById("btn1");

    adin.addEventListener("click", function () {
        addInput();
    });

    function addInput() {
        const currentQlf = document.createElement("input");
        currentQlf.type = "text";
        currentQlf.placeholder = "Qualification Certificate";

        const placeQlf = document.createElement("input");
        placeQlf.type = "text";
        placeQlf.placeholder = "Qualification Place";

        const btn = document.createElement("button"); 
        btn.type = "button";
        btn.textContent = "Remove";
        btn.addEventListener("click", removeInput);

        const flex = document.createElement("div"); // Corrected class name for the div
        flex.className = "form-group flex"; 

        const inputGroup = document.querySelector(".inp-grp");
        inputGroup.appendChild(flex);
        flex.appendChild(currentQlf);
        flex.appendChild(placeQlf);
        flex.appendChild(btn);
    }

    function removeInput() {
        const flex = this.parentElement;
        flex.remove();
    }

    
    
    var bld = document.getElementById("rbuild");

  bld.addEventListener("click", function () {
        const name = document.getElementById("name").value;
        const tag = document.getElementById("tag").value;
        const phone = document.getElementById("phone").value;
        const email = document.getElementById("email").value;
        const address = document.getElementById("address").value;
        const gitId = document.getElementById("gitId").value;
        const linkedInId = document.getElementById("LinkedIn").value;
        const currentQlf = document.getElementById("currentQlf").value;
        const placeQlf = document.getElementById("placeQlf").value;
        const certificate = document.getElementById("certificate").value;
        const skills = document.getElementById("Skills").value;
        const pname = document.getElementById("pname").value;
        const summary = document.getElementById("summary").value;
    
        window.jsPDF = window.jspdf.jsPDF;
        var doc = new jsPDF()


const startY = 20; 
const lineHeight = 10; 

doc.text(name, 20, startY);
doc.text(tag, 20, startY + lineHeight);
doc.text(phone, 20, startY + lineHeight * 2);
doc.text(email, 20, startY + lineHeight * 3);
doc.text(address, 20, startY + lineHeight * 4);
doc.text(gitId, 20, startY + lineHeight * 5);
doc.text(linkedInId, 20, startY + lineHeight * 6);

        doc.save('Resume.pdf')
    })
  });


