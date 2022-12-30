var form = document.getElementById("form");
var submit = document.querySelector(".submit");
var element = form.elements;
var display = document.querySelector(".display");
var i;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    data();
    form.reset();
});

var loadFile = function (event) {
    i = URL.createObjectURL(event.target.files[0]);
}

function data() {
    var div = document.createElement("div");
    var div1 = document.createElement("div");
    var name = document.createElement("div");
    var id = document.createElement("div");
    var email = document.createElement("div");
    var gender = document.createElement("div");
    var expertise = document.createElement("div");
    var img = document.createElement("img");

    name.innerHTML = "NAME: " + element[0].value;
    id.innerHTML = "STUDENT ID: " + element[1].value;
    email.innerHTML = "EMAIL ID: " + element[2].value;
    gender.innerHTML = "GENDER: " + element[3].value;
    img.src = "images/user-img.jpg";
    img.alt = "student image";
    if (element[4].value != "") {
        img.src = i;
    }

    if (element[5].checked) { expertise.innerHTML = "EXPERTISE: HTML"; }
    if (element[6].checked) { expertise.innerHTML = "EXPERTISE: CSS"; }
    if (element[7].checked) { expertise.innerHTML = "EXPERTISE: JS"; }
    if (element[8].checked) { expertise.innerHTML = "EXPERTISE: Java"; }
    if (element[5].checked && element[6].checked) { expertise.innerHTML = "EXPERTISE: HTML,CSS"; }
    if (element[5].checked && element[7].checked) { expertise.innerHTML = "EXPERTISE: HTML,JS"; }
    if (element[6].checked && element[7].checked) { expertise.innerHTML = "EXPERTISE: CSS,JS"; }
    if (element[5].checked && element[6].checked && element[7].checked) { expertise.innerHTML = "EXPERTISE: HTML,CSS,JS,Java"; }

    div1.appendChild(name);
    div1.appendChild(id);
    div1.appendChild(email);
    div1.appendChild(gender);
    div1.appendChild(expertise);
    div.appendChild(div1);
    div.appendChild(img);
    display.appendChild(div);

    img.classList.add("img");
    div.classList.add("d");
    div1.classList.add("div1");
    display.classList.add("display");
}