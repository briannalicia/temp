import React from 'react'
import { FaPlus } from 'react-icons/fa'

export default function App() {
  const [title, setTitle] = React.useState('')
  const [content, setContent] = React.useState('')
  const [entries, setEntries] = React.useState([])

  const handleSubmit = (event) => {
    event.preventDefault()
    const newEntry = { title, content }
    setEntries([...entries, newEntry])
    setTitle('')
    setContent('')
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-pink-100">
      <h1 className="font-semibold text-3xl mb-6">
        Welcome to my app!
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <div className="flex flex-col mb-4">
          <label htmlFor="title" className="mb-2 font-semibold text-lg">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className="border border-gray-400 rounded-md px-4 py-2 w-80"
            required
          />
        </div>
        <div className="flex flex-col mb-6">
          <label htmlFor="content" className="mb-2 font-semibold text-lg">
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(event) => setContent(event.target.value)}
            className="border border-gray-400 rounded-md px-4 py-2 w-80 h-32"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white rounded-md px-4 py-2 flex items-center">
          <FaPlus className="mr-2" />
          Add Entry
        </button>
      </form>
      <div className="flex flex-col mt-8">
        {entries.map((entry, index) => (
          <div key={index} className="border border-gray-400 rounded-md px-4 py-2 mb-4">
            <h2 className="font-semibold text-lg mb-2">{entry.title}</h2>
            <p>{entry.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}