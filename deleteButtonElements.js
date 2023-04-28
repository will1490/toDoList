import { updateList } from "./updateList.js";
import { tasks } from "./script.js";

// Ajouter un écouteur d'événement à chaque bouton de suppression 
// pour supprimer les tâches terminées de la liste lorsque l'utilisateur clique dessus



export default function deleteButtonElements() {
  const buttons = document.querySelectorAll('[id^="delete-"]');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const index = parseInt(button.id.split('-')[1]);
      tasks.splice(index, 1);
      updateList();
      localStorage.setItem('tasks', JSON.stringify(tasks));
    });
  });
}
