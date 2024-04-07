document.getElementById("marksForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var regNumber = document.getElementById("regNumber").value;
    var semester = document.getElementById("semester").value;
    var subjects = fetchSubjects(regNumber, semester);

    displaySubjects(subjects);
});

function fetchSubjects(regNumber, semester) {
    return ["Subject 1", "Subject 2", "Subject 3", "Subject 4", "Subject 5"];
}

function displaySubjects(subjects) {
    var subjectListDiv = document.getElementById("subjectList");
    subjectListDiv.innerHTML = "";

    subjects.forEach(function (subject) {
        var subjectInput = document.createElement("input");
        subjectInput.type = "text";
        subjectInput.placeholder = "Marks for " + subject;
        subjectInput.addEventListener("input",function(){
            this.value = this.value.replace(/\D/g,'');
        });
        subjectListDiv.appendChild(subjectInput);
    });
}