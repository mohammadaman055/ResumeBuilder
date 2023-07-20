document.addEventListener("DOMContentLoaded", function () {
    
    var bld = document.getElementById("rbuild");

    bld.addEventListener("click", function () {
        const name = document.getElementById("name").value;
        const tag = document.getElementById("tag").value;
        const phone = document.getElementById("phone").value;
        const email = document.getElementById("email").value;
        const address = document.getElementById("address").value;
        const gitId = document.getElementById("gitId").value;
        const linkedInId = document.getElementById("LinkedIn").value;

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

    var adin = document.getElementById("btn1");
    var adin1 = document.getElementById("btnCertificate");
    var adin2 = document.getElementById("btnSkills");

    adin.addEventListener("click", function () {
        addInput();
    });
    adin1.addEventListener("click", function () {
        addInputCertificate();
    });
    adin2.addEventListener("click", function () {
        addInputSkills();
    });

function addInput() {
    const currentQlf = document.createElement("input");
    currentQlf.type = "text";
    currentQlf.className = "form-group d-flex flex-column form-control";
    currentQlf.id = "qualification";
    currentQlf.placeholder = "Qualification Certificate";

    const placeQlf = document.createElement("input");
    placeQlf.type = "text";
    placeQlf.className = "form-group d-flex flex-column form-control";
    placeQlf.id = "qualificationplace";
    placeQlf.placeholder = "Qualification Place";

    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = "Remove";
    btn.className = "btn btn-primary rounded-pill btn-danger";
    btn.addEventListener("click", removeInput);

    const flex = document.createElement("div"); // Corrected class name for the div
    flex.className = "form-group flex";

    const inputGroup = document.querySelector(".inp-grp");
    inputGroup.appendChild(flex);
    flex.appendChild(currentQlf);
    flex.appendChild(placeQlf);
    flex.appendChild(btn);
}


    function addInputCertificate() {
        const certificateName = document.createElement("input");
        certificateName.type = "text";
        certificateName.className = "form-group d-flex flex-column form-control"
        certificateName.placeholder = "Certification Course";

        const btn = document.createElement("button");
        btn.type = "button";
        btn.textContent = "Remove";
        btn.className = "btn btn-primary rounded-pill btn-danger"
        btn.addEventListener("click", removeInput);

        const flex = document.createElement("div"); // Corrected class name for the div
        flex.className = "form-group flex";

        const inputGroup = document.querySelector(".inp-certificate");
        inputGroup.appendChild(flex);
        flex.appendChild(certificateName);
        flex.appendChild(btn);
    }

    function addInputSkills() {
        const skillType = document.createElement("input");
        skillType.type = "text";
        skillType.className = "form-group d-flex flex-column form-control"
        skillType.placeholder = "Skills";

        const btn = document.createElement("button");
        btn.type = "button";
        btn.textContent = "Remove";
        btn.className = "btn btn-primary rounded-pill btn-danger"
        btn.addEventListener("click", removeInput);

        const flex = document.createElement("div"); // Corrected class name for the div
        flex.className = "form-group flex";

        const inputGroup = document.querySelector(".inp-skills");
        inputGroup.appendChild(flex);
        flex.appendChild(skillType);
        flex.appendChild(btn);
    }

    function removeInput() {
        const flex = this.parentElement;
        flex.remove();
    }

});





