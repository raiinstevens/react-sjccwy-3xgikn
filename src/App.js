import React, { useState } from 'react';

function InputSync() {
    const [input1Value, setInput1Value] = useState('');
    const [input2Value, setInput2Value] = useState('');

    const handleInput1Change = (event) => {
        const value = event.target.value;
        setInput1Value(value);
        setInput2Value(value);
    };

    const handleInput2Change = (event) => {
        const value = event.target.value;
        setInput2Value(value);
    };
    const handleButtonCancelar = () => {
        setInput2Value(input1Value);
    };
    const handleButtonClick = () => {
        setInput1Value(input2Value);
    };

    return (
        <div className="flex gap-2">
            <input
                type="text"
                value={input1Value}
                onChange={handleInput1Change}
            />
            <div className="flex flex-column gap-2">
                <input
                    type="text"
                    value={input2Value}
                    onChange={handleInput2Change}
                />
                <div className="flex gap-2">
                    <button onClick={handleButtonCancelar}>Cancelar</button>
                    <button onClick={handleButtonClick}>Actualizar</button>
                </div>
            </div>
        </div>
    );
}

export default InputSync;
