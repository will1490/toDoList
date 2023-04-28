import { tasks } from "./script.js";

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
      localStorage.setItem('tasks', JSON.stringify(tasks));
    });

    checkbox.addEventListener('change', () => {
      tasks[index].completed = checkbox.checked;
      // Mettre à jour l'attribut "completed" de l'élément li
      listItem.setAttribute('completed', checkbox.checked);
      updateList();
    });
  });
}
