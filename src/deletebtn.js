import {projects} from "./createProject.js"
import { renderProjects } from "./ui.js";
export function deletePro(element){
  let i= projects.indexOf(element);
  projects.splice(i, 1);
  renderProjects();
}
export function deleteToDo(element,todo){
    let i=projects.indexOf(element);
    let j=projects[i].todos.indexOf(todo);
    projects[i].todos.splice(j,1);
    renderProjects();
}