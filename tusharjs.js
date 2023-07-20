// console.log("hiiiiii");
// const addBtn = document.querySelector(".btn btn-primary rounded-pill");
// 

// function removeInput() {
//     this.parentElement.remove();
// }


// addBtn.addEventListener("click", addInput);


// const input = document.querySelector(".inp-grp");
// document.addEventListener("DOMContentLoaded", function () {
//     var adin = document.getElementById("btn1");

//     adin.addEventListener("click", function () {
//         // Your code to generate and log the resume data
//         function addInput() {
//             const currentQlf = document.createElement("input");
//             currentQlf.type = "text";
//             currentQlf.placeholder = "Qualification Certificate";

//             const placeQlf = document.createElement("input");
//             placeQlf.type = "text";
//             placeQlf.placeholder = "Qualification Place";

//             const btn = document.createElement("bt");
//             btn.currentQlf = "delete";
//             btn.innerHTML = "&times";

//             btn.addEventListener("click", removeInput);

//             const flex = document.createElement("form-group div1");
//             flex.className = "flex";

//             input.appendChild(flex);
//             flex.appendChild(currentQlf);
//             flex.appendChild(placeQlf);
//             flex.appendChild(btn);

//         }

//     });
// });


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

        const btn = document.createElement("button"); // Corrected button creation
        btn.type = "button";
        btn.textContent = "Remove";
        btn.addEventListener("click", removeInput);

        const flex = document.createElement("div"); // Corrected class name for the div
        flex.className = "form-group flex"; // Adding "form-group" class to div

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
});