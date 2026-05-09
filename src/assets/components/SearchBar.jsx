function SearchBar() {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4">AI Travel Search</h2>

      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Example: 3-day Goa trip under ₹15,000"
          className="flex-1 border border-gray-300 p-4 rounded-2xl"
        />

        <button className="bg-blue-600 text-white px-6 py-4 rounded-2xl">
          Generate Trip
        </button>
      </div>
    </div>
  )
}

export default SearchBar