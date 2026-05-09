function Navbar() {
  return (
    <div className="bg-black text-white p-5 rounded-3xl flex justify-between items-center">
      <h1 className="text-2xl font-bold">AI Travel Planner</h1>

      <div className="flex gap-6 text-lg">
        <p>Home</p>
        <p>Trips</p>
        <p>Budget</p>
        <p>Assistant</p>
      </div>
    </div>
  )
}

export default Navbar