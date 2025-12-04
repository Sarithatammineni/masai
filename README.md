# Enhanced Todo List Application

This is a simple and interactive **Todo List Web Application** built using HTML, CSS, and JavaScript.  
It allows users to add tasks, mark them as completed, delete tasks, and search tasks in real time.  
All tasks are stored in **localStorage**, so they remain saved even after refreshing or reopening the page.

## Features

###  Add Tasks  
Users can enter a task in the input box and click **Add Task** to store it.

### Mark as Completed  
Each task has a **Complete** button, which toggles between:
- **Complete** → marks the task as done  
- **Undo** → marks the task as not completed  

Completed tasks appear with:
 A green color
A line-through effect

### Delete Tasks  
Tasks can be removed permanently by clicking the **Delete** button.

###  Real-Time Search  
Typing in the **Search** bar filters the displayed tasks instantly.

### Persistent Storage (localStorage)  
All tasks are saved in the browser’s localStorage as a JSON array.  
Each task object contains:
```json
{
  "id": 123456789,
  "text": "Sample Task",
  "completed": false
}
