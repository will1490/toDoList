//Création de l'array de stockage des tâches
let tasks = [];

// Ajout de la date du jour

const dateElement = document.getElementById("date");
const currentDate = new Date();

// Options de formatage pour la date
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

// Création d'un nouvel objet Intl.DateTimeFormat avec les options de formatage
const dateFormatter = new Intl.DateTimeFormat('fr-FR', options);

// Formatage de la date
const formattedDate = dateFormatter.format(currentDate);

// Mise à jour du texte de l'élément HTML avec la date formatée
dateElement.innerText = formattedDate;

/*
Cette fonction écoute le formulaire à soumettre, obtient la valeur d'entrée,
 supprime tout espace blanc, vérifie s'il y a une tâche à ajouter, 
 l'ajoute au tableau des tâches, appelle la fonction updateList 
 pour mettre à jour la liste HTML et efface le champ d'entrée .
 */

export function form() {
 const form = document.getElementById('add-item');

 form.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.getElementById('taskInput');
    const task = input.value.trim();
    if (task) {
      tasks.push({ description: task, completed: false });
      updateList();
      input.value = '';
    }
  });
}



// Créer une fonction pour updater la To Do List

// Ajouter un attribut "completed" aux éléments li
export function updateList() {
  const list = document.getElementById('taskList');
  list.innerHTML = '';
  tasks.forEach((task, index) => {
    const listItem = document.createElement('li');
    listItem.classList.add('list-item');
    // Ajouter l'attribut "completed" à l'élément li
    listItem.setAttribute('completed', task.completed);
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('id', `checkbox-${index}`);
    checkbox.checked = task.completed;
    const label = document.createElement('label');
    label.setAttribute('for', `checkbox-${index}`);
    label.innerText = task.description;
    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.setAttribute('id', `delete-${index}`);
    button.innerText = 'Delete';
    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(button);
    list.appendChild(listItem);

    button.addEventListener('click', () => {
      tasks.splice(index, 1);
      updateList();
    });

    checkbox.addEventListener('change', () => {
      tasks[index].completed = checkbox.checked;
      // Mettre à jour l'attribut "completed" de l'élément li
      listItem.setAttribute('completed', checkbox.checked);
      updateList();
    });
  });
}


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
    });
  });
}

/*
Cette fonction obtient toutes les cases à cocher avec la méthode querySelectorAll, 
les parcourt en boucle et ajoute un écouteur d'événement à chaque case à cocher.
 Lorsque l'utilisateur clique sur une case à cocher, la fonction met à jour la propriété terminée 
 de la tâche correspondante dans le tableau des tâches 
 et appelle la fonction updateList pour mettre à jour la liste HTML.
 */

 // Ajouter un écouteur d'événement à chaque bouton de suppression 
 // pour supprimer les tâches terminées de la liste lorsque l'utilisateur clique dessus

 export default function deleteButtonElements() {
  const buttons = document.querySelectorAll('[id^="delete-"]');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const index = parseInt(button.id.split('-')[1]);
      tasks.splice(index, 1);
      updateList();
    });
  });
}

 

/*
 Ajout d'un identifiant "delete-button" au bouton "Delete" pour le cibler avec document.querySelector().
  Lorsqu'on clique sur le bouton, l'écouteur d'événements parcourt tous les éléments de la liste et
   supprime les éléments avec case cochée. checkbox.parentElement pour cibler l'élément parent (élément li),
    à supprimer de la liste avec remove(). => un seul bouton delete !
*/

export function deleteCompletedTasksButton() {
  const button = document.getElementById("delete-completed-tasks");
  button.addEventListener("click", () => {
    const checkboxes = document.querySelectorAll('.list-item input[type="checkbox"]');
    const tasksToDelete = [];
    checkboxes.forEach((checkbox, index) => {
      if (checkbox.checked && index !== tasks.length - 1) {
        tasksToDelete.push(index);
      }
    });
    for (let i = tasksToDelete.length - 1; i >= 0; i--) {
      tasks.splice(tasksToDelete[i], 1);
    }
    updateList();
  });
}


