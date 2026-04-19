import { renderProjects } from "./ui.js";
import { projects } from "./createProject.js";
let currPro;
export function setCurrentProject(project)
{
    currPro=project;
}
const divTDF=document.createElement('div');
divTDF.classList.add('divTDF', 'hidden');

const formTD=document.createElement('form');
formTD.classList.add('formB');

const labelT=document.createElement('label');
labelT.htmlFor='title';
labelT.textContent='Title:';

const titleTd=document.createElement('input');
titleTd.type='text';
titleTd.name='title';
titleTd.id='title';
titleTd.required='true';
titleTd.placeholder='Enter the title for your todo';

const labelDes=document.createElement('label');
labelDes.htmlFor='des';
labelDes.textContent='Description:';

const desTD=document.createElement('textarea');
desTD.rows=5;
desTD.name='description';
desTD.id='des';
desTD.required='true';
desTD.placeholder='Enter the description here';

const labelDD=document.createElement('label');
labelDD.htmlFor='date';
labelDD.textContent='Due Date:'

const dueD=document.createElement('input');
dueD.type='date';
dueD.id='date';
dueD.name='date';
dueD.required='true';

const labelPri=document.createElement('label');
labelPri.htmlFor='priority';
labelPri.textContent='Priority:'

const priorityTD=document.createElement('select');
priorityTD.name='priority';
priorityTD.id='priority';

const optA=document.createElement('option');
optA.value='High';
optA.textContent='High';
const optB=document.createElement('option');
optB.value='Medium';
optB.textContent='Medium';
const optC=document.createElement('option');
optC.value='Low';
optC.textContent='Low';

const submitTD=document.createElement('button');
submitTD.type='submit';
submitTD.textContent='Submit';

priorityTD.append(optA, optB, optC);
formTD.append(labelT, titleTd, labelDes, desTD, labelDD, dueD, labelPri, priorityTD, submitTD);
divTDF.append(formTD);

formTD.addEventListener('submit', (e)=>{
    e.preventDefault();
    let title=titleTd.value;
    let descrip=desTD.value;
    let duedate=dueD.value;
    let priority=priorityTD.value;
    currPro.addToDo(title, descrip, duedate, priority);
    localStorage.clear();
    localStorage.setItem('projects', JSON.stringify(projects));
    
    divTDF.classList.add('hidden');
    renderProjects();
    formTD.reset();
})

export{divTDF};