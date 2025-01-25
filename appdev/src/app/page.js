import Image from "next/image";
import ViewNotes from "./components/ViewNotes";
import NewNotes from "../../Fuctions/NewNotes"

export default function Home() {
           
    input_user_notes = document.getElementById('notes').value;

    return (
    
    <div class="container mx-auto p-4">
        <div class="text-center mb-8">
            <h1 class="text-4xl font-bold text-gray-800">Note Taking App</h1>
        </div>
        <div class="flex justify-center mb-8">
            <input type="text" placeholder="Enter your note here..." class="w-3/4 p-2 border border-gray-300 rounded-l-md"  id="notes"/>
            <button onClick={<NewNotes/>} class="w-1/4 p-2 bg-green-500 text-white rounded-r-md hover:bg-green-600">Add Note</button>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ViewNotes/>
        </div>
    </div>
  )
}
