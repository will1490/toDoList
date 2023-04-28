import { addNewTask } from "./addNewTask.js";
import { updateList } from "./updateList.js";
import { checkboxes } from "./checkboxes.js";
import deleteButtonElements from "./deleteButtonElements.js";
import { deleteCompletedTasksButton } from "./deleteCompletedTasksButton.js";

//Création de l'array de stockage des tâches
export let tasks = [];

// Ajout de la date du jour

const dateElement = document.getElementById("date");
const currentDate = new Date();

// Options de formatage pour la date
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

// Création d'un nouvel objet Intl.DateTimeFormat avec les options de formatage
const dateFormatter = new Intl.DateTimeFormat('en', options);

// Formatage de la date
const formattedDate = dateFormatter.format(currentDate);

// Mise à jour du texte de l'élément HTML avec la date formatée
dateElement.innerText = formattedDate;

function init() {
  addNewTask();
  updateList();
  checkboxes();
  deleteButtonElements();
  deleteCompletedTasksButton();
}

init();

const storedList = JSON.parse(localStorage.getItem("tasks"));

window.addEventListener("load", () => {
  const storedList = JSON.parse(localStorage.getItem("tasks"));
  if (storedList) {
    tasks.splice(0, tasks.length, ...storedList);
    updateList();
  }
});



