import { tasks } from "./script.js";
import { updateList } from "./updateList.js";

/*
Cette fonction écoute le formulaire à soumettre, obtient la valeur d'entrée,
 supprime tout espace blanc, vérifie s'il y a une tâche à ajouter,
 l'ajoute au tableau des tâches, appelle la fonction updateList
 pour mettre à jour la liste HTML et efface le champ d'entrée .
 */



export function addNewTask() {
  const form = document.getElementById('addTaskForm');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.getElementById('taskInput');
    const task = input.value.trim();
    if (task) {
      tasks.push({ description: task, completed: false });
      updateList();
      localStorage.setItem('tasks', JSON.stringify(tasks));
      input.value = '';
    }
  });
}
