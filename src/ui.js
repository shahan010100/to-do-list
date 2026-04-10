import {projects} from "./createProject.js"
import {divform} from "./createProjectform.js"
let body=document.querySelector('body');
let content=document.createElement('div');
let panel=document.createElement('div');
let main=document.createElement('div');
content.append(panel, main);
body.appendChild(content);
content.classList.add('content');
panel.classList.add('panel');
main.classList.add('main');

//panel
let pTitle=document.createElement('div');
pTitle.textContent="#T0-DO";
pTitle.classList.add('pTitle');

let actionB=document.createElement('div');
actionB.classList.add('actionP');
let pBtn=document.createElement('button');
pBtn.textContent='+ New Project';
actionB.append(pBtn, divform);
pBtn.classList.add('btn');
pBtn.addEventListener('click', ()=>{
    divform.classList.toggle('hidden');
});



let allPro=document.createElement('div');
allPro.classList.add('projects');
export function renderProjects() {
    allPro.innerHTML = "";

    projects.forEach(element => {
        let pName = document.createElement('h5');
        pName.textContent = element.name;
        pName.classList.add('pName');

        element.todos.forEach(todo => {
            let todoP = document.createElement("h6");
            todoP.textContent = todo.title + " " + todo.dueDate;
            todoP.classList.add('todoP');
            pName.appendChild(todoP);
        });

        allPro.appendChild(pName);
    });
}
renderProjects();

panel.append(pTitle,actionB,allPro);