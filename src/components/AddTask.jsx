import { useState } from 'react';
import './styles/AddTask.css';

function AddTask({ SetAddTaskbtn, setDeleteTaskbtn }) {
    return (
        <>
            <div className="Addtaskcontainer">
                <p>🔴🟡🟢</p>
                <input type="text" className="searchbar" placeholder="Search..." />
                <select className="sortby">
                    <option>Sort by</option>
                    <option>Task</option>
                    <option>Time</option>
                </select>
            </div>
            <div className="buttons">
                <button className="addbtn" onClick={SetAddTaskbtn}>
                    Add Task
                </button>
                <button className="deletebtn" onClick={setDeleteTaskbtn}>
                    Delete Task
                </button>
            </div>
        </>
    );
}

export default AddTask;
