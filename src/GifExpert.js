import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpert = () => {
  
   const [categories, setCategories] = useState(['full meral alchemist'])
   
 
   return (
        <>
            <h2> GifExpert</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            
                <ol>
                    
                    {
                    categories.map((category)=> 
                    <GifGrid 
                    key={category}
                    category={category}/>
                    )
                    }
                    
                </ol>
                
           
        </>
    )
}
