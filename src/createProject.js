import {ToDo} from "./createToDo.js";
export let projects=[];

const stored = localStorage.getItem("projects");

if (stored) {
    const parsed = JSON.parse(stored);

    // Rehydrate into class instances
    projects = parsed.map(p => {
        const project = new NewProject(p.name);
        project.todos = p.todos;
        return project;
    });
}
export class NewProject{
    constructor(name){
        this.name=name;
        this.todos=[];
        projects.push(this);
        }
    addToDo(title, description, dueDate, priority){
        let todo=new ToDo(title, description, dueDate, priority);
        this.todos.push(todo);
    }
}
if(!localStorage.getItem("projects")){
const def=new NewProject('Default');
const school=new NewProject('School');
const tuition=new NewProject('Tuition');
localStorage.setItem('projects',JSON.stringify(projects));
}