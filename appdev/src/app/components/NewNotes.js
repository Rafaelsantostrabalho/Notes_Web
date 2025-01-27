"use client";

import React from "react";
import {useState, useEffect} from "react";

const NewNotes = () => {
    
    const [notes, setNotes] = useState(1);

    useEffect(() => {
        setNotes([document.getElementById("notes").value]);
        
    }, []);

    function Notes() { 

        
        
        return (<h1>{notes}</h1>);
        
    }
    
    
    return (
        
    <div class="container mx-auto p-4">
         <div class="text-center mb-8">
            <h1 class="text-4xl font-bold text-gray-800">Note Taking App</h1>
         </div>
         <div class="flex justify-center mb-8">
            <input type="text" placeholder="Enter your note here..." class="w-3/4 p-2 border border-gray-300 rounded-l-md"  id="notes"/>
            <button onClick={Notes} class="w-1/4 p-2 bg-green-500 text-white rounded-r-md hover:bg-green-600">Add Note</button>
        </div>
            <h1 color="white"><Notes/></h1>
    </div>
    
)



}

export default NewNotes;