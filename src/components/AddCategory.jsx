import { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ({ target }) => {
        setInputValue(target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const trimmedValue = inputValue.trim();

        if (trimmedValue.length <= 1) return
        
            // setCategories(categories => [...categories, trimmedValue]);
            setInputValue('');
            onNewCategory( trimmedValue )
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func,
    onNewCategory: PropTypes.func,
};
