//Header Elements
var timeDisplay = document.querySelector(".time")
var dateDisplay = document.querySelector(".date")
var projectForm = document.querySelector(".infoForm")


// Form Elements
var projectName = document.querySelector(".nameInput")
var projectType = document.querySelector(".projectTypeInput")
var wage = document.querySelector(".wageInput")
var dueDate = document.querySelector(".dueDateInput")

//Table Elements
var tableProjects = document.querySelector(".projectsTableBody")


//Sets current time and day on header
dateDisplay.textContent = moment().format("[Today is] Do MMM YYYY");
timeDisplay.textContent = moment().format("[The Time is]  h:mm:ss a");

//Sets current time 
function setTime() {
    timeDisplay.textContent = moment().format("[The time is]  h:mm:ss a");
}

//Deletes targets row in the table 
function deleteRow(event) {
    event.target.parentElement.remove()
}

// Creates a new row based on forms info
function addRow(event) {
    event.preventDefault();

    //creating elements
    var newRow = document.createElement("tr")

    var newName = document.createElement("td")
    newName.textContent = projectName.value;
    projectName.value = "";

    var newType = document.createElement("td")
    newType.textContent = projectType.value;
    projectType.value = "";

    var newWage = document.createElement("td")
    newWage.textContent = wage.value;
    

    var newDueDate = document.createElement("td")
    newDueDate.textContent = dueDate.value;
    

    var newDaysUntil = document.createElement("td")
    var daysTill = moment(dueDate.value).diff(moment().subtract(1,"days"),"days");
    newDaysUntil.textContent = daysTill;

    var newEstimatedTotal = document.createElement("td")
    newEstimatedTotal.textContent = "$" + parseInt(daysTill) * parseInt(wage.value) * 8;
    wage.value = "";
    dueDate.value = "";

    var newDeleteBtn = document.createElement("td")
    newDeleteBtn.textContent = "x";
    newDeleteBtn.setAttribute("style","cursor:pointer")
    newDeleteBtn.addEventListener("click",deleteRow)

    //Appending elements to themselves
    newRow.appendChild(newName)
    newRow.appendChild(newType)
    newRow.appendChild(newWage)
    newRow.appendChild(newDueDate)
    newRow.appendChild(newDaysUntil)
    newRow.appendChild(newEstimatedTotal)
    newRow.appendChild(newDeleteBtn)
    

    tableProjects.appendChild(newRow)

    //Closes Modal
    $('.formModal').modal('hide');
}


projectForm.addEventListener("submit",addRow)

var updateTime = setInterval(setTime,1000)

dueDate.setAttribute("min",moment().format("YYYY-MM-DD"))