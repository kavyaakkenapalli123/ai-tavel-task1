function Itinerary() {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6">AI Generated Itinerary</h2>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-gray-100 p-5 rounded-2xl">
          <h3 className="text-xl font-bold mb-2">Day 1</h3>
          <p>Arrival, beach visit, local food exploration.</p>
        </div>

        <div className="bg-gray-100 p-5 rounded-2xl">
          <h3 className="text-xl font-bold mb-2">Day 2</h3>
          <p>Water sports, sightseeing and nightlife.</p>
        </div>

        <div className="bg-gray-100 p-5 rounded-2xl">
          <h3 className="text-xl font-bold mb-2">Day 3</h3>
          <p>Shopping and return journey.</p>
        </div>
      </div>
    </div>
      )
}

export default Itinerary