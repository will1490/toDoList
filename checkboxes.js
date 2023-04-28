import { tasks } from "./script.js";
import { updateList } from "./updateList.js";

/*
Cette fonction obtient d'abord l'élément ul et efface son contenu.
Ensuite, il parcourt le tableau des tâches, crée un nouvel élément li pour chaque tâche,
 ajoute une case à cocher, une étiquette et un bouton de suppression à chaque li,
  et ajoute le li à l'ul.
  */
// Ajouter un écouteur d'événement à chaque case à cocher
// pour marquer les tâches comme terminées lorsque l'utilisateur clique dessus


export function checkboxes() {
  const checkboxes = document.querySelectorAll('.list-item input[type="checkbox"]');

  checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener('change', () => {
      tasks[index].completed = checkbox.checked;
      updateList();
      localStorage.setItem('tasks', JSON.stringify(tasks));
    });
  });
}
