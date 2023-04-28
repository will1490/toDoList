import { updateList } from "./updateList.js";
import { tasks } from "./script.js";

/*
 Ajout d'un identifiant "delete-button" au bouton "Delete" pour le cibler avec document.querySelector().
  Lorsqu'on clique sur le bouton, l'écouteur d'événements parcourt tous les éléments de la liste et
   supprime les éléments avec case cochée. checkbox.parentElement pour cibler l'élément parent (élément li),
    à supprimer de la liste avec remove(). => un seul bouton delete !
*/

export function deleteCompletedTasksButton() {
  const button = document.getElementById("deleteCompletedTasks");
  button.addEventListener("click", () => {
    const checkboxes = document.querySelectorAll('.list-item input[type="checkbox"]');
    const tasksToDelete = [];
    checkboxes.forEach((checkbox, index) => {
      if (checkbox.checked && index !== tasks.length - 1) {
        tasksToDelete.push(index);
        checkbox.parentElement.remove(); // supprime l'élément HTML li correspondant à la tâche
      }
    });
    for (let i = tasksToDelete.length - 1; i >= 0; i--) {
      tasks.splice(tasksToDelete[i], 1);
    }
    localStorage.setItem("tasks", JSON.stringify(tasks)); // stocke la liste mise à jour dans le local storage
    updateList();
  });
}