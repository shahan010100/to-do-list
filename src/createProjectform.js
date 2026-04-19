import {projects, NewProject} from "./createProject.js"
import {renderProjects} from "./ui.js"

const divform=document.createElement('div');
divform.classList.add('form', 'hidden');

const projectForm=document.createElement('form');
projectForm.classList.add('formA');

const labelP=document.createElement('label');
labelP.textContent='Project Name';
labelP.setAttribute("for", "inputP");
projectForm.append(labelP);

const inputP=document.createElement('input');
inputP.type='text';
inputP.placeholder="Enter new project name";
inputP.id="inputP";
projectForm.append(inputP);

const submitP=document.createElement('button');
submitP.type='submit';
submitP.textContent="Submit";
projectForm.append(submitP);

divform.append(projectForm);

projectForm.addEventListener("submit", (e)=>{
 e.preventDefault();
 let tC=inputP.value;
 new NewProject(tC);
 inputP.value="";
 localStorage.clear();
 localStorage.setItem('projects', JSON.stringify(projects));
 divform.classList.add('hidden');
 renderProjects();
});


export {divform};
