import React from 'react';
import '../App.css';

function Todoapp() {

  const taskForm = document.getElementById("task-form");
  const confirmCloseDialog = document.getElementById("confirm-close-dialog");
  const openTaskFormBtn = document.getElementById("open-task-form-btn");
  const closeTaskFormBtn = document.getElementById("close-task-form-btn");
  const addOrUpdateTaskBtn = document.getElementById("add-or-update-task-btn");
  const cancelBtn = document.getElementById("cancel-btn");
  const discardBtn = document.getElementById("discard-btn");
  const tasksContainer = document.getElementById("tasks-container");
  const titleInput = document.getElementById("title-input");
  const dateInput = document.getElementById("date-input");
  const descriptionInput = document.getElementById("description-input");
  
  const taskData = JSON.parse(localStorage.getItem("data")) || [];
  let currentTask = {};
  
  const removeSpecialChars = (val) => {
    return val.trim().replace(/[^A-Za-z0-9\-\s]/g, '')
  }
  
  const addOrUpdateTask = () => {
     if(!titleInput.value.trim()){
      alert("Please provide a title");
      return;
    }
    const dataArrIndex = taskData.findIndex((item) => item.id === currentTask.id);
    const taskObj = {
      id: `${removeSpecialChars(titleInput.value).toLowerCase().split(" ").join("-")}-${Date.now()}`,
      title: removeSpecialChars(titleInput.value),
      date: removeSpecialChars(dateInput.value),
      description: removeSpecialChars(descriptionInput.value),
    };
  
    if (dataArrIndex === -1) {
      taskData.unshift(taskObj);
    } else {
      taskData[dataArrIndex] = taskObj;
    }
  
    localStorage.setItem("data", JSON.stringify(taskData));
    updateTaskContainer()
    reset()
  };
  
  const updateTaskContainer = () => {
    tasksContainer.innerHTML = "";
  
    taskData.forEach(
      ({ id, title, date, description }) => {
          (tasksContainer.innerHTML += `
          <div class="task" id="${id}">
            <p><strong>Title:</strong> ${title}</p>
            <p><strong>Date:</strong> ${date}</p>
            <p><strong>Description:</strong> ${description}</p>
            <button onclick="editTask(this)" type="button" class="btn">Edit</button>
            <button onclick="deleteTask(this)" type="button" class="btn">Delete</button> 
          </div>
        `)
      }
    );
  };
  
  
  const deleteTask = (buttonEl) => {
    const dataArrIndex = taskData.findIndex(
      (item) => item.id === buttonEl.parentElement.id
    );
  
    buttonEl.parentElement.remove();
    taskData.splice(dataArrIndex, 1);
    localStorage.setItem("data", JSON.stringify(taskData));
  }
  
  const editTask = (buttonEl) => {
      const dataArrIndex = taskData.findIndex(
      (item) => item.id === buttonEl.parentElement.id
    );
  
    currentTask = taskData[dataArrIndex];
  
    titleInput.value = currentTask.title;
    dateInput.value = currentTask.date;
    descriptionInput.value = currentTask.description;
  
    addOrUpdateTaskBtn.innerText = "Update Task";
  
    taskForm.classList.toggle("hidden");  
  }
  
  const reset = () => {
    addOrUpdateTaskBtn.innerText = "Add Task";
    titleInput.value = "";
    dateInput.value = "";
    descriptionInput.value = "";
    taskForm.classList.toggle("hidden");
    currentTask = {};
  }
  
  if (taskData.length) {
    updateTaskContainer();
  }
  
  openTaskFormBtn.addEventListener("click", () =>
    taskForm.classList.toggle("hidden")
  );
  
  closeTaskFormBtn.addEventListener("click", () => {
    const formInputsContainValues = titleInput.value || dateInput.value || descriptionInput.value;
    const formInputValuesUpdated = titleInput.value !== currentTask.title || dateInput.value !== currentTask.date || descriptionInput.value !== currentTask.description;
  
    if (formInputsContainValues && formInputValuesUpdated) {
      confirmCloseDialog.showModal();
    } else {
      reset();
    }
  });
  
  cancelBtn.addEventListener("click", () => confirmCloseDialog.close());
  
  discardBtn.addEventListener("click", () => {
    confirmCloseDialog.close();
    reset()
  });
  
  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
    addOrUpdateTask();
  });
    
  return (
    <section>

<h1>Todo App</h1>
    <div class="todo-app">
      <button id="open-task-form-btn" class="btn large-btn">
        Add New Task
      </button>
      <form class="task-form hidden" id="task-form">
        <div class="task-form-header">
          <button id="close-task-form-btn" class="close-task-form-btn" type="button" aria-label="close">
            <svg class="close-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#F44336" d="M21.5 4.5H26.501V43.5H21.5z" transform="rotate(45.001 24 24)" /><path fill="#F44336" d="M21.5 4.5H26.5V43.501H21.5z" transform="rotate(135.008 24 24)" /></svg>
          </button>
        </div>
        <div class="task-form-body">
          <label class="task-form-label" for="title-input">Title</label>
          <input required type="text" class="form-control" id="title-input" value="" />
          <label class="task-form-label" for="date-input">Date</label>
          <input type="date" class="form-control" id="date-input" value="" />
          <label class="task-form-label" for="description-input">Description</label>
          <textarea class="form-control" id="description-input" cols="30" rows="5"></textarea>
        </div>
        <div class="task-form-footer">
          <button id="add-or-update-task-btn" class="btn large-btn" type="submit">
            Add Task
          </button>
        </div>
      </form>
      <dialog id="confirm-close-dialog">
        <form method="dialog">
          <p class="discard-message-text">Discard unsaved changes?</p>
          <div class="confirm-close-dialog-btn-container">
            <button id="cancel-btn" class="btn">
              Cancel
            </button>
            <button id="discard-btn" class="btn">
              Discard
            </button>
          </div>
        </form>
      </dialog>
      <div id="tasks-container"></div>
    </div>

    </section>
  );
}

export default Todoapp;
