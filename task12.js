var pers = [];

function myLoad() {
    let htmlSelect = document.getElementById("personList");
    htmlSelect.style.visibility = "hidden";

    if (sessionStorage.getItem("hasCodeRunBefore") === null) {
        sessionStorage.setItem("persons", JSON.stringify(pers));
        sessionStorage.setItem("hasCodeRunBefore", true);
    } else {
        pers = JSON.parse(sessionStorage.getItem("persons"));
        let i = 0;
        pers.forEach(function(p) {
            let optItem = document.createElement("option");
            optItem.innerHTML = p.name.first;
            optItem.value = i;
            i = i + 1;
            htmlSelect.appendChild(optItem);
        });
        if (i > 0) {
            htmlSelect.style.visibility = "visible";
        }
    }
}

function Person(artistn, title, album, gender, interests) {
    this.name = {
        first: first,
        last: last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
}

function addPerson() {
    pers = JSON.parse(sessionStorage.getItem("persons"));
    let newPerson = new Person(
        document.getElementById("artistn").value,
        document.getElementById("title").value,
        document.getElementById("album").value,
        document.getElementById("gender").value,
    );
    pers.push(newPerson);
    sessionStorage.setItem("persons", JSON.stringify(pers));
}

function ChangeActiveUser(indexOfPersonObj) {
    pers[indexOfPersonObj].bio = function() {
        alert(
            this.name.first +
                " " +
                this.name.last +
                " is " +
                this.age +
                " years old. " +
                this.name.first +
                " likes " +
                this.interests +
                "."
        );
    };
    pers[indexOfPersonObj].bio();
}