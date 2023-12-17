import React from 'react';

const AddTodo = ({text, handleInput, handleSubmit}) => {
    return (
        <label className="formAddTodo">
            <input type="text" value={text} onChange={(e)=> handleInput(e.target.value)}/>
            <button onClick={handleSubmit}>Add todo</button>
        </label>
    );
};

export default AddTodo;