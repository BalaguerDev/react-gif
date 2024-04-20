import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['gif']);
    
    const onAddCategory = (newCategory) => {
        setCategories([newCategory]);
    }

    return (
        <>
            <h1>GifExpertApp - BALADEV</h1>

            <AddCategory 
                onNewCategory={onAddCategory}
            />
          
            { 
                categories.map((category) => (
                    <GifGrid 
                        key={category} 
                        category={category} 
                    />
                ))
            }
        </>
    )
}