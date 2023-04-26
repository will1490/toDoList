import {form} from "./form.js";
import {updateList} from "./form.js";
import {checkboxes} from "./form.js";
import deleteButtonElements from "./form.js";
import {deleteCompletedTasksButton} from "./form.js";

function init() {
  form();
  updateList();
  checkboxes();
  deleteButtonElements();
  deleteCompletedTasksButton();
}

init();



