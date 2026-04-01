let body=document.querySelector('body');
let content=document.createElement('div');
let panel=document.createElement('div');
let main=document.createElement('div');
content.append(panel, main);
body.appendChild(content);
content.classList.add('content');
panel.classList.add('panel');
main.classList.add('main');
main.textContent="Simplicity is the soul of efficiency!"
let panelTitle=document.createElement('h2');
panelTitle.textContent="To-Do List";
panel.append(panelTitle);
panelTitle.classList.add('panelTitle');