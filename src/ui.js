import {projects} from "./createProject.js"
import {divform} from "./createProjectform.js"
import {divTDF} from "./createToDoForm.js"
import { setCurrentProject } from "./createToDoForm.js";

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
        let divPC=document.createElement('div');
        divPC.classList.add('divPC');
        let divP=document.createElement('div');
        divP.classList.add('divP');
        let divPT=document.createElement('div');
        let pName = document.createElement('h5');
        pName.textContent = element.name;
        pName.addEventListener('click', ()=>{
        main.innerHTML='';
        let mContainer=document.createElement('div');
        mContainer.classList.add('mContainer');

        let mPTitle=document.createElement('div');
        mPTitle.classList.add('mPTitle');
        mPTitle.textContent=element.name;

        let mToDos=document.createElement('div');
        mToDos.classList.add('mToDos');
        element.todos.forEach(todo=>{
            let title=todo.title;
            let des=todo.description;
            let dueD=todo.dueDate;
            let priority=todo.priority;
            let divC=document.createElement('div');
            divC.classList.add('divC');
            let divT=document.createElement('div');
            divT.classList.add('divT');
            divT.textContent=title;
            let divD=document.createElement('div');
            divD.classList.add('divD');
            divD.textContent=des;
            let divDD=document.createElement('div');
            divDD.classList.add('divDD');
            divDD.textContent=dueD;
            let divP=document.createElement('div');
            divP.textContent=priority;
            if(priority=='High')
            {
                divC.classList.add('highP');
            }
            else if(priority=='Medium')
            {
                divC.classList.add('mediumP');
            }
            else{
                divC.classList.add('lowP');
            }
            divC.append(divT, divD, divDD, divP);
            mToDos.append(divC);

        })

        mContainer.append(mPTitle, mToDos);
        main.appendChild(mContainer);}
        )
        pName.classList.add('pName', 'clickable');

        let addTDB=document.createElement('button');
        addTDB.type='button';
        addTDB.name=element.name;
        addTDB.textContent='+';
        addTDB.classList.add('addTDB');
        addTDB.addEventListener('click', ()=>{
            main.innerHTML="";
            setCurrentProject(element);
            main.append(divTDF);           
            divTDF.classList.remove('hidden');

        });
        

        divP.append(pName, addTDB);

        element.todos.forEach(todo => {
            let todoP = document.createElement("h6");
            todoP.textContent = todo.title + " " + todo.dueDate;
            todoP.classList.add('todoP', 'clickable');
            divPT.appendChild(todoP);
        });
        divPC.append(divP, divPT);

        allPro.append(divPC);
    });
}
renderProjects();

panel.append(pTitle,actionB,allPro);


//main
