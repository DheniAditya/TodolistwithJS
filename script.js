// Ambil elemen
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Event klik tombol tambah
addTaskBtn.addEventListener("click", function () {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        addTask(taskText);
        taskInput.value = "";
    }
});

// Fungsi menambahkan tugas ke daftar
function addTask(text) {
    const li = document.createElement("li");
    li.innerHTML = `
        <span>${text}</span>
        <button onclick="removeTask(this)">❌</button>
    `;
    li.addEventListener("click", function () {
        li.classList.toggle("completed");
    });
    taskList.appendChild(li);
}

// Fungsi menghapus tugas
function removeTask(button) {
    button.parentElement.remove();
}
