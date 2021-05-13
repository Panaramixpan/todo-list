import React from 'react'
import './App.css';
import {TodoList} from "./TodoList";

function App() {
    const tasks1 = [
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false},
        {id: 4, title: 'React API', isDone: false},
        {id: 5, title: 'GraphQL', isDone: false},
    ];

    return (
        <div className="App">
            <TodoList title="What to learn." tasks={tasks1}/>
        </div>
    )
}

export default App;

