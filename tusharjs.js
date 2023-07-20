document.addEventListener("DOMContentLoaded", function () {

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