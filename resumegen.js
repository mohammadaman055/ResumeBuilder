{/* <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script> */}

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
        const currentQlf = document.getElementById("currentQlf").value;
        const placeQlf = document.getElementById("placeQlf").value;
        const certificate = document.getElementById("certificate").value;
        const skills = document.getElementById("Skills").value;
        const pname = document.getElementById("pname").value;
        const summary = document.getElementById("summary").value;
    
        window.jsPDF = window.jspdf.jsPDF;
        var doc = new jsPDF()


const startY = 20; // Starting Y-coordinate
const lineHeight = 10; // Line height (adjust as needed)

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


