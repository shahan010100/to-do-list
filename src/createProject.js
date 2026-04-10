import {ToDo} from "./createToDo.js";
export const projects=[];
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
const def=new NewProject('Default');
const school=new NewProject('School');
const tuition=new NewProject('Tuition');