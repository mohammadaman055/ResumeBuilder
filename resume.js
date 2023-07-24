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
        const Project = document.getElementById("pname").value;
        const Projectdesc = document.getElementById("pdesc").value;

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
        doc.text(Project, 20, startY + lineHeight * 7);
        doc.text(Projectdesc, 20, startY + lineHeight * 8);

        //printing dynamic skills

        

        const certificatesData = getCertificatesData();
    let cstartY = 20 + lineHeight * 9; // Start after the previous content
    certificatesData.forEach((certificate, index) => {
        doc.text("Certificate " + (index + 1) + ": " + certificate, 20, cstartY + lineHeight * index);
    });

        const skillsData = getSkillsData();
    let sstartY = startY + lineHeight * certificatesData.length + 10; // Add some spacing between certificates and skills
    skillsData.forEach((skill, index) => {
        doc.text("Skill " + (index + 1) + ": " + skill, 20, sstartY + lineHeight * index);
    });


     qualificationsData = getQualificationsData();
    let qstartY = 20 + lineHeight * 9; // Start after the previous content
    qualificationsData.forEach((qualification, index) => {
        doc.text("Qualification " + (index + 1) + ": " + qualification, 20, qstartY + lineHeight * index);
    });

     placesData = getPlacesData();
    let qpstartY = startY + lineHeight * qualificationsData.length + 10; // Add some spacing between qualifications and places
    placesData.forEach((place, index) => {
        doc.text("Place of Qualification " + (index + 1) + ": " + place, 20, qpstartY + lineHeight * index);
    });

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

let qnum = 1;
let qpnum = 1;
let cnum = 1;
let snum = 1;
     var qualificationsData = [];
      var  placesData = [];


function addInput() {

    const currentQlf = document.createElement("input");
    currentQlf.type = "text";
    currentQlf.className = "form-group d-flex flex-column form-control";
    currentQlf.id = "qualification " + qnum;
    currentQlf.placeholder = "Qualification Certificate " + qnum;

    const placeQlf = document.createElement("input");
    placeQlf.type = "text";
    placeQlf.className = "form-group d-flex flex-column form-control";
    placeQlf.id = "qualificationplace "+qpnum;
    placeQlf.placeholder = "Qualification Place "+qpnum;

    qualificationsData.push(currentQlf);
    placesData.push(placeQlf);

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

     qnum++;
    qpnum++;
}

function getQualificationsData() {
    return qualificationsData.map((input) => input.value);
}
function getPlacesData() {
    return placesData.map((input) => input.value);
}



    function addInputCertificate() {
        const certificateName = document.createElement("input");
        certificateName.type = "text";
        certificateName.className = "form-group d-flex flex-column form-control"
        certificateName.id="certificate"+cnum;
        certificateName.placeholder = "Certification Course"+cnum;

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

        cnum++;
    }

    function addInputSkills() {
        const skillType = document.createElement("input");
        skillType.type = "text";
        skillType.className = "form-group d-flex flex-column form-control"
        skillType.id="skill"+snum
        skillType.placeholder = "Skills"+snum;

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

        snum++;
    }

    //num to dec saparately
    function removeInput() {
        const flex = this.parentElement;
        flex.remove();
        qnum--;
        qpnum--;
        cnum--;
        qnum--
    }



    //accessing data

    //skill
    function getSkillsData() {
    const skillsData = [];
    const skillsInputs = document.querySelectorAll(".inp-skills input");
    skillsInputs.forEach((input) => {
        skillsData.push(input.value);
    });

    return skillsData;
    }
    function getCertificatesData() {
    const certificatesData = [];
    const certificateInputs = document.querySelectorAll(".inp-certificate input");
    certificateInputs.forEach((input) => {
        certificatesData.push(input.value);
    });
    return certificatesData;
}

});





