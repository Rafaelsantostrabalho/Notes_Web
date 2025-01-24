import Image from "next/image";

export default function Home() {
  return (
    
    <div class="container mx-auto p-4">
        <div class="text-center mb-8">
            <h1 class="text-4xl font-bold text-gray-800">Note Taking App</h1>
        </div>
        <div class="flex justify-center mb-8">
            <input type="text" placeholder="Enter your note here..." class="w-3/4 p-2 border border-gray-300 rounded-l-md" />
            <button class="w-1/4 p-2 bg-green-500 text-white rounded-r-md hover:bg-green-600">Add Note</button>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="relative p-6 bg-white rounded-lg shadow-lg cursor-move">
                <h2 class="text-2xl font-bold mb-2">Note Title 1</h2>
                <p class="text-gray-600">This is the content of note 1.</p>
                <i class="fas fa-trash absolute top-4 right-4 text-red-500 cursor-pointer hover:text-red-700"></i>
            </div>
            <div class="relative p-6 bg-white rounded-lg shadow-lg cursor-move">
                <h2 class="text-2xl font-bold mb-2">Note Title 2</h2>
                <p class="text-gray-600">This is the content of note 2.</p>
                <i class="fas fa-trash absolute top-4 right-4 text-red-500 cursor-pointer hover:text-red-700"></i>
            </div>
            <div class="relative p-6 bg-white rounded-lg shadow-lg cursor-move">
                <h2 class="text-2xl font-bold mb-2">Note Title 3</h2>
                <p class="text-gray-600">This is the content of note 3.</p>
                <i class="fas fa-trash absolute top-4 right-4 text-red-500 cursor-pointer hover:text-red-700"></i>
            </div>
            <div class="relative p-6 bg-white rounded-lg shadow-lg cursor-move">
                <h2 class="text-2xl font-bold mb-2">Note Title 4</h2>
                <p class="text-gray-600">This is the content of note 4.</p>
                <i class="fas fa-trash absolute top-4 right-4 text-red-500 cursor-pointer hover:text-red-700"></i>
            </div>
            <div class="relative p-6 bg-white rounded-lg shadow-lg cursor-move">
                <h2 class="text-2xl font-bold mb-2">Note Title 5</h2>
                <p class="text-gray-600">This is the content of note 5.</p>
                <i class="fas fa-trash absolute top-4 right-4 text-red-500 cursor-pointer hover:text-red-700"></i>
            </div>
            <div class="relative p-6 bg-white rounded-lg shadow-lg cursor-move">
                <h2 class="text-2xl font-bold mb-2">Note Title 6</h2>
                <p class="text-gray-600">This is the content of note 6.</p>
                <i class="fas fa-trash absolute top-4 right-4 text-red-500 cursor-pointer hover:text-red-700"></i>
            </div>
            <div class="relative p-6 bg-white rounded-lg shadow-lg cursor-move">
                <h2 class="text-2xl font-bold mb-2">Note Title 7</h2>
                <p class="text-gray-600">This is the content of note 7.</p>
                <i class="fas fa-trash absolute top-4 right-4 text-red-500 cursor-pointer hover:text-red-700"></i>
            </div>
            <div class="relative p-6 bg-white rounded-lg shadow-lg cursor-move">
                <h2 class="text-2xl font-bold mb-2">Note Title 8</h2>
                <p class="text-gray-600">This is the content of note 8.</p>
                <i class="fas fa-trash absolute top-4 right-4 text-red-500 cursor-pointer hover:text-red-700"></i>
            </div>
            <div class="relative p-6 bg-white rounded-lg shadow-lg cursor-move">
                <h2 class="text-2xl font-bold mb-2">Note Title 9</h2>
                <p class="text-gray-600">This is the content of note 9.</p>
                <i class="fas fa-trash absolute top-4 right-4 text-red-500 cursor-pointer hover:text-red-700"></i>
            </div>
            <div class="relative p-6 bg-white rounded-lg shadow-lg cursor-move">
                <h2 class="text-2xl font-bold mb-2">Note Title 10</h2>
                <p class="text-gray-600">This is the content of note 10.</p>
                <i class="fas fa-trash absolute top-4 right-4 text-red-500 cursor-pointer hover:text-red-700"></i>
            </div>
            <div class="relative p-6 bg-white rounded-lg shadow-lg cursor-move">
                <h2 class="text-2xl font-bold mb-2">Note Title 11</h2>
                <p class="text-gray-600">This is the content of note 11.</p>
                <i class="fas fa-trash absolute top-4 right-4 text-red-500 cursor-pointer hover:text-red-700"></i>
            </div>
            <div class="relative p-6 bg-white rounded-lg shadow-lg cursor-move">
                <h2 class="text-2xl font-bold mb-2">Note Title 12</h2>
                <p class="text-gray-600">This is the content of note 12.</p>
                <i class="fas fa-trash absolute top-4 right-4 text-red-500 cursor-pointer hover:text-red-700"></i>
            </div>
            <div class="relative p-6 bg-white rounded-lg shadow-lg cursor-move">
                <h2 class="text-2xl font-bold mb-2">Note Title 13</h2>
                <p class="text-gray-600">This is the content of note 13.</p>
                <i class="fas fa-trash absolute top-4 right-4 text-red-500 cursor-pointer hover:text-red-700"></i>
            </div>
            <div class="relative p-6 bg-white rounded-lg shadow-lg cursor-move">
                <h2 class="text-2xl font-bold mb-2">Note Title 14</h2>
                <p class="text-gray-600">This is the content of note 14.</p>
                <i class="fas fa-trash absolute top-4 right-4 text-red-500 cursor-pointer hover:text-red-700"></i>
            </div>
            <div class="relative p-6 bg-white rounded-lg shadow-lg cursor-move">
                <h2 class="text-2xl font-bold mb-2">Note Title 15</h2>
                <p class="text-gray-600">This is the content of note 15.</p>
                <i class="fas fa-trash absolute top-4 right-4 text-red-500 cursor-pointer hover:text-red-700"></i>
            </div>
        </div>
    </div>
  )
}
