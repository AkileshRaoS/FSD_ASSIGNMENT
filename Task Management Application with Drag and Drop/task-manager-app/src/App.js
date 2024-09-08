// import React, { useState, useEffect } from "react";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import "./App.css";

// const initialData = {
//   tasks: {
//     'task-1': { id: 'task-1', content: 'Task 1' },
//     'task-2': { id: 'task-2', content: 'Task 2' },
//     'task-3': { id: 'task-3', content: 'Task 3' }
//   },
//   columns: {
//     'column-1': {
//       id: 'column-1',
//       title: 'To Do',
//       taskIds: ['task-1', 'task-2', 'task-3']
//     },
//     'column-2': {
//       id: 'column-2',
//       title: 'In Progress',
//       taskIds: []
//     },
//     'column-3': {
//       id: 'column-3',
//       title: 'Completed',
//       taskIds: []
//     }
//   },
//   columnOrder: ['column-1', 'column-2', 'column-3']
// };

// const App = () => {
//   const [data, setData] = useState(initialData);
//   const [newTaskContent, setNewTaskContent] = useState("");

//   useEffect(() => {
//     const storedData = JSON.parse(localStorage.getItem("taskManagerData"));
//     if (storedData) {
//       setData(storedData);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("taskManagerData", JSON.stringify(data));
//   }, [data]);

//   const handleAddTask = () => {
//     if (newTaskContent.trim() === "") return;

//     const newTaskId = `task-${Date.now()}`;
//     const newTask = { id: newTaskId, content: newTaskContent };
//     const newTasks = { ...data.tasks, [newTaskId]: newTask };
//     const newTaskIds = [...data.columns['column-1'].taskIds, newTaskId];

//     const newColumn = {
//       ...data.columns['column-1'],
//       taskIds: newTaskIds
//     };

//     const newData = {
//       ...data,
//       tasks: newTasks,
//       columns: {
//         ...data.columns,
//         'column-1': newColumn
//       }
//     };

//     setData(newData);
//     setNewTaskContent("");
//   };

//   const handleDeleteTask = (columnId, taskId) => {
//     const newTasks = { ...data.tasks };
//     delete newTasks[taskId];

//     const newTaskIds = data.columns[columnId].taskIds.filter(id => id !== taskId);
//     const newColumn = {
//       ...data.columns[columnId],
//       taskIds: newTaskIds
//     };

//     const newData = {
//       ...data,
//       tasks: newTasks,
//       columns: {
//         ...data.columns,
//         [columnId]: newColumn
//       }
//     };

//     setData(newData);
//   };

//   const onDragEnd = (result) => {
//     const { destination, source, draggableId } = result;

//     if (!destination) return;

//     if (destination.droppableId === source.droppableId && destination.index === source.index) {
//       return;
//     }

//     const start = data.columns[source.droppableId];
//     const finish = data.columns[destination.droppableId];

//     if (start === finish) {
//       const newTaskIds = Array.from(start.taskIds);
//       newTaskIds.splice(source.index, 1);
//       newTaskIds.splice(destination.index, 0, draggableId);

//       const newColumn = {
//         ...start,
//         taskIds: newTaskIds
//       };

//       const newData = {
//         ...data,
//         columns: {
//           ...data.columns,
//           [newColumn.id]: newColumn
//         }
//       };

//       setData(newData);
//       return;
//     }

//     const startTaskIds = Array.from(start.taskIds);
//     startTaskIds.splice(source.index, 1);
//     const newStart = {
//       ...start,
//       taskIds: startTaskIds
//     };

//     const finishTaskIds = Array.from(finish.taskIds);
//     finishTaskIds.splice(destination.index, 0, draggableId);
//     const newFinish = {
//       ...finish,
//       taskIds: finishTaskIds
//     };

//     const newData = {
//       ...data,
//       columns: {
//         ...data.columns,
//         [newStart.id]: newStart,
//         [newFinish.id]: newFinish
//       }
//     };

//     setData(newData);
//   };

//   return (
//     <div className="app">
//       <h1>Task Manager</h1>
//       <div className="task-input">
//         <input
//           type="text"
//           placeholder="Enter a new task"
//           value={newTaskContent}
//           onChange={(e) => setNewTaskContent(e.target.value)}
//         />
//         <button onClick={handleAddTask}>Add Task</button>
//       </div>
//       <DragDropContext onDragEnd={onDragEnd}>
//         {data.columnOrder.map((columnId) => {
//           const column = data.columns[columnId];
//           const tasks = column.taskIds.map(taskId => data.tasks[taskId]);

//           return (
//             <Droppable key={column.id} droppableId={column.id}>
//               {(provided) => (
//                 <div
//                   className="column"
//                   {...provided.droppableProps}
//                   ref={provided.innerRef}
//                 >
//                   <h2>{column.title}</h2>
//                   <ul className="task-list">
//                     {tasks.map((task, index) => (
//                       <Draggable key={task.id} draggableId={task.id} index={index}>
//                         {(provided) => (
//                           <li
//                             ref={provided.innerRef}
//                             {...provided.draggableProps}
//                             {...provided.dragHandleProps}
//                           >
//                             {task.content}
//                             <button onClick={() => handleDeleteTask(column.id, task.id)}>Delete</button>
//                           </li>
//                         )}
//                       </Draggable>
//                     ))}
//                     {provided.placeholder}
//                   </ul>
//                 </div>
//               )}
//             </Droppable>
//           );
//         })}
//       </DragDropContext>
//     </div>
//   );
// };

// export default App;
// import React, { useState, useEffect } from "react";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import "./App.css";

// const initialData = {
//   tasks: {
//     'task-1': { id: 'task-1', content: 'Task 1' },
//     'task-2': { id: 'task-2', content: 'Task 2' },
//     'task-3': { id: 'task-3', content: 'Task 3' }
//   },
//   columns: {
//     'column-1': {
//       id: 'column-1',
//       title: 'To Do',
//       taskIds: ['task-1', 'task-2', 'task-3']
//     },
//     'column-2': {
//       id: 'column-2',
//       title: 'In Progress',
//       taskIds: []
//     },
//     'column-3': {
//       id: 'column-3',
//       title: 'Completed',
//       taskIds: []
//     }
//   },
//   columnOrder: ['column-1', 'column-2', 'column-3']
// };

// const App = () => {
//   const [data, setData] = useState(initialData);
//   const [newTaskContent, setNewTaskContent] = useState("");
//   const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     const storedData = JSON.parse(localStorage.getItem("taskManagerData"));
//     if (storedData) {
//       setData(storedData);
//     }
//     const storedTheme = JSON.parse(localStorage.getItem("darkMode"));
//     if (storedTheme !== null) {
//       setDarkMode(storedTheme);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("taskManagerData", JSON.stringify(data));
//   }, [data]);

//   useEffect(() => {
//     localStorage.setItem("darkMode", JSON.stringify(darkMode));
//     document.body.classList.toggle('dark-mode', darkMode);
//   }, [darkMode]);

//   const handleAddTask = () => {
//     if (newTaskContent.trim() === "") return;

//     const newTaskId = `task-${Date.now()}`;
//     const newTask = { id: newTaskId, content: newTaskContent };
//     const newTasks = { ...data.tasks, [newTaskId]: newTask };
//     const newTaskIds = [...data.columns['column-1'].taskIds, newTaskId];

//     const newColumn = {
//       ...data.columns['column-1'],
//       taskIds: newTaskIds
//     };

//     const newData = {
//       ...data,
//       tasks: newTasks,
//       columns: {
//         ...data.columns,
//         'column-1': newColumn
//       }
//     };

//     setData(newData);
//     setNewTaskContent("");
//   };

//   const handleDeleteTask = (columnId, taskId) => {
//     const newTasks = { ...data.tasks };
//     delete newTasks[taskId];

//     const newTaskIds = data.columns[columnId].taskIds.filter(id => id !== taskId);
//     const newColumn = {
//       ...data.columns[columnId],
//       taskIds: newTaskIds
//     };

//     const newData = {
//       ...data,
//       tasks: newTasks,
//       columns: {
//         ...data.columns,
//         [columnId]: newColumn
//       }
//     };

//     setData(newData);
//   };

//   const onDragEnd = (result) => {
//     const { destination, source, draggableId } = result;

//     if (!destination) return;

//     if (destination.droppableId === source.droppableId && destination.index === source.index) {
//       return;
//     }

//     const start = data.columns[source.droppableId];
//     const finish = data.columns[destination.droppableId];

//     if (start === finish) {
//       const newTaskIds = Array.from(start.taskIds);
//       newTaskIds.splice(source.index, 1);
//       newTaskIds.splice(destination.index, 0, draggableId);

//       const newColumn = {
//         ...start,
//         taskIds: newTaskIds
//       };

//       const newData = {
//         ...data,
//         columns: {
//           ...data.columns,
//           [newColumn.id]: newColumn
//         }
//       };

//       setData(newData);
//       return;
//     }

//     const startTaskIds = Array.from(start.taskIds);
//     startTaskIds.splice(source.index, 1);
//     const newStart = {
//       ...start,
//       taskIds: startTaskIds
//     };

//     const finishTaskIds = Array.from(finish.taskIds);
//     finishTaskIds.splice(destination.index, 0, draggableId);
//     const newFinish = {
//       ...finish,
//       taskIds: finishTaskIds
//     };

//     const newData = {
//       ...data,
//       columns: {
//         ...data.columns,
//         [newStart.id]: newStart,
//         [newFinish.id]: newFinish
//       }
//     };

//     setData(newData);
//   };

//   return (
//     <div className="app">
//       <h1>Task Manager</h1>
//       <div className="theme-toggle">
//         <button onClick={() => setDarkMode(!darkMode)}>
//           {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
//         </button>
//       </div>
//       <div className="task-input">
//         <input
//           type="text"
//           placeholder="Enter a new task"
//           value={newTaskContent}
//           onChange={(e) => setNewTaskContent(e.target.value)}
//         />
//         <button onClick={handleAddTask}>Add Task</button>
//       </div>
//       <DragDropContext onDragEnd={onDragEnd}>
//         {data.columnOrder.map((columnId) => {
//           const column = data.columns[columnId];
//           const tasks = column.taskIds.map(taskId => data.tasks[taskId]);

//           return (
//             <Droppable key={column.id} droppableId={column.id}>
//               {(provided) => (
//                 <div
//                   className="column"
//                   {...provided.droppableProps}
//                   ref={provided.innerRef}
//                 >
//                   <h2>{column.title}</h2>
//                   <ul className="task-list">
//                     {tasks.map((task, index) => (
//                       <Draggable key={task.id} draggableId={task.id} index={index}>
//                         {(provided) => (
//                           <li
//                             ref={provided.innerRef}
//                             {...provided.draggableProps}
//                             {...provided.dragHandleProps}
//                           >
//                             {task.content}
//                             <button onClick={() => handleDeleteTask(column.id, task.id)}>Delete</button>
//                           </li>
//                         )}
//                       </Draggable>
//                     ))}
//                     {provided.placeholder}
//                   </ul>
//                 </div>
//               )}
//             </Droppable>
//           );
//         })}
//       </DragDropContext>
//     </div>
//   );
// };

// export default App;


import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./App.css";

const initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Task 1' },
    'task-2': { id: 'task-2', content: 'Task 2' },
    'task-3': { id: 'task-3', content: 'Task 3' }
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To Do',
      taskIds: ['task-1', 'task-2', 'task-3']
    },
    'column-2': {
      id: 'column-2',
      title: 'In Progress',
      taskIds: []
    },
    'column-3': {
      id: 'column-3',
      title: 'Completed',
      taskIds: []
    }
  },
  columnOrder: ['column-1', 'column-2', 'column-3']
};

const App = () => {
  const [data, setData] = useState(initialData);
  const [newTaskContent, setNewTaskContent] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("taskManagerData"));
    if (storedData) {
      setData(storedData);
    }
    const storedTheme = JSON.parse(localStorage.getItem("darkMode"));
    if (storedTheme !== null) {
      setDarkMode(storedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("taskManagerData", JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  const handleAddTask = () => {
    if (newTaskContent.trim() === "") return;

    const newTaskId = `task-${Date.now()}`;
    const newTask = { id: newTaskId, content: newTaskContent };
    const newTasks = { ...data.tasks, [newTaskId]: newTask };
    const newTaskIds = [...data.columns['column-1'].taskIds, newTaskId];

    const newColumn = {
      ...data.columns['column-1'],
      taskIds: newTaskIds
    };

    const newData = {
      ...data,
      tasks: newTasks,
      columns: {
        ...data.columns,
        'column-1': newColumn
      }
    };

    setData(newData);
    setNewTaskContent("");
  };

  const handleDeleteTask = (columnId, taskId) => {
    const newTasks = { ...data.tasks };
    delete newTasks[taskId];

    const newTaskIds = data.columns[columnId].taskIds.filter(id => id !== taskId);
    const newColumn = {
      ...data.columns[columnId],
      taskIds: newTaskIds
    };

    const newData = {
      ...data,
      tasks: newTasks,
      columns: {
        ...data.columns,
        [columnId]: newColumn
      }
    };

    setData(newData);
  };

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    const start = data.columns[source.droppableId];
    const finish = data.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds
      };

      const newData = {
        ...data,
        columns: {
          ...data.columns,
          [newColumn.id]: newColumn
        }
      };

      setData(newData);
      return;
    }

    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds
    };

    const newData = {
      ...data,
      columns: {
        ...data.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
      }
    };

    setData(newData);
  };

  return (
    <div className="app">
      <h1 className="title">Task Manager</h1>
      <div className="task-input-wrapper">
        <input
          type="text"
          className="task-input"
          placeholder="Enter a new task"
          value={newTaskContent}
          onChange={(e) => setNewTaskContent(e.target.value)}
        />
        <button className="add-task-button" onClick={handleAddTask}>Add Task</button>
      </div>
      <div className="theme-toggle">
        <button className="theme-button" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="columns-container">
          {data.columnOrder.map((columnId) => {
            const column = data.columns[columnId];
            const tasks = column.taskIds.map(taskId => data.tasks[taskId]);

            return (
              <Droppable key={column.id} droppableId={column.id}>
                {(provided) => (
                  <div
                    className="column"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    <h2 className="column-title">{column.title}</h2>
                    <ul className="task-list">
                      {tasks.map((task, index) => (
                        <Draggable key={task.id} draggableId={task.id} index={index}>
                          {(provided) => (
                            <li
                              className="task-item"
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              {task.content}
                              <button className="delete-task-button" onClick={() => handleDeleteTask(column.id, task.id)}>Delete</button>
                            </li>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </ul>
                  </div>
                )}
              </Droppable>
            );
          })}
        </div>
      </DragDropContext>
    </div>
  );
};

export default App;

