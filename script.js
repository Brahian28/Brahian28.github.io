// Variables para almacenar elementos DOM
const taskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');
const addTaskBtn = document.getElementById('add-task-btn');

// Función para añadir una nueva tarea
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // Crear un nuevo elemento de lista (li)
    const li = document.createElement('li');
    
    // Crear el texto de la tarea
    const taskSpan = document.createElement('span');
    taskSpan.className = 'task-text';
    taskSpan.textContent = taskText;

    // Crear botón de borrar
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';
    
    // Añadir funcionalidad al botón de borrar
    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(li);
    });

    // Añadir funcionalidad para marcar como completado
    taskSpan.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    // Añadir los elementos al elemento de lista (li)
    li.appendChild(taskSpan);
    li.appendChild(deleteBtn);

    // Añadir la tarea a la lista de tareas (ul)
    taskList.appendChild(li);

    // Limpiar el campo de entrada
    taskInput.value = '';
}

// Añadir evento al botón de añadir tarea
addTaskBtn.addEventListener('click', addTask);

// Permitir añadir tarea presionando "Enter"
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});