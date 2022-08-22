import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';

//importamos la hoja de estilos de task.scss
import '../../styles/task.scss'
import TaskForm from '../pure/forms/taskForm';

const TaskListComponent = () => {

    const defaultTask1 = new Task('Example1', 'description1', true, LEVELS.NORMAL)
    const defaultTask2 = new Task('Example2', 'description2', false, LEVELS.URGENT)
    const defaultTask3 = new Task('Example3', 'description3', false, LEVELS.BLOCKING)


    //Estado del componente
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);

    //Control del ciclo setLoadingde vida del componente
    useEffect(() => {
        console.log('Task State has been modified')
        setTimeout(() => {
            setLoading(false)
        }, 2000);
        return () => {
            console.log('TaskList component is going to unmount...')
        };
    }, [tasks]);

    function completeTask(task) {
        console.log('Complete this Task:', task)
        const index = tasks.indexOf(task)
        const tempTasks = [...tasks]
        tempTasks[index].completed = !tempTasks[index].completed
        // we update the state of the component with the new list of tasks and it will update the
        //iteration of the tasks in order to show the task update
        setTasks(tempTasks)
    }

    function removeTask(task) {
        console.log('Delete this Task:', task)
        const index = tasks.indexOf(task)
        const tempTasks = [...tasks]
        tempTasks.splice(index, 1)
        setTasks(tempTasks)
    }


    function addTask(task) {
        console.log('Added this Task:', task)
        const tempTasks = [...tasks]
        tempTasks.push(task)
        setTasks(tempTasks)
    }

    const Table = () => {
        return (
            <table>
                <thead>
                    <tr>
                        <th scope='col'>Title</th>
                        <th scope='col'>Description</th>
                        <th scope='col'>Priority</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task, index) => {
                        return (
                            <TaskComponent
                                key={index}
                                task={task}
                                complete={completeTask}
                                remove={removeTask}
                            >
                            </TaskComponent>
                        )
                    })}

                </tbody>
            </table>
        )
    }

    let tasksTable = <Table></Table>

    if (tasks.length > 0) {
        tasksTable = <Table></Table>
    } else {
        tasksTable = (
            <div>
                <h3>There are no tasks to show</h3>
                <h4>Please, create one</h4>
            </div>
        )
    }

    const loadingStyle = {
        color: 'grey',
        fontSize: '30px',
        fontWeight: 'bold'
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    {/* card header (title) */}
                    <div className='card-header p-3'>
                        <h5>
                            Your Tasks:
                        </h5>
                    </div>
                    {/* card body (content) */}
                    <div className='card-body' data-mdb-perfect-scrollbar='true' tyle={{ position: 'relative', height: '400px' }}>
                        {/* TODO: Add Loading Spinner */}
                        {loading ? (<p style={loadingStyle}>Loading Tasks...</p>) : tasksTable}
                    </div>
                </div>
            </div>
            <TaskForm add={addTask} length={tasks.length}></TaskForm>
        </div>
    );
};



export default TaskListComponent;
