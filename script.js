 document.getElementById('addTaskButton').addEventListener('click', function() {
            const taskInput = document.getElementById('taskInput');
            const taskText = taskInput.value.trim();

            if (taskText) {
                const li = document.createElement('li');
                li.innerHTML = `
                    <input type="checkbox" class="checkbox">
                    <span class="task-text">${taskText}</span>
                    <button class="editButton">Edit</button>
                    <button class="deleteButton">Delete</button>
                `;
                
                document.getElementById('taskList').appendChild(li);
                taskInput.value = ''; // Clear the input field

                // Add event listener for the delete button
                li.querySelector('.deleteButton').addEventListener('click', function() {
                    li.remove(); // Remove the task from the list
                });

                // Add event listener for the edit button
                li.querySelector('.editButton').addEventListener('click', function() {
                    const taskSpan = li.querySelector('.task-text');
                    const currentText = taskSpan.textContent;
                    const newText = prompt("Edit your task:", currentText);

                    if (newText !== null && newText.trim() !== '') {
                        taskSpan.textContent = newText.trim(); // Update the task text
                    }
                });
            }
        });
    
