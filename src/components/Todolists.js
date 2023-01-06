import React from 'react';

const Todolists = ({todoLists,delTodoLists}) => {
    return (
        <div>
            <ul className='todoLists'>
                {todoLists.map(todo=><li key={todo.id}>{todo.text}
                <button onClick={()=> delTodoLists(todo.id)}>X</button></li>)}
            </ul>
        </div>
    );
};

export default Todolists;