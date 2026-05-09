function TripCard({ trip }) {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition">
      <div className="bg-gray-200 h-40 rounded-2xl flex items-center justify-center mb-4">
        {trip.place} Image
      </div>

      <h2 className="text-2xl font-bold">{trip.place}</h2>

      <div className="mt-3 text-gray-600 space-y-2">
        <p>Budget: {trip.budget}</p>
        <p>Duration: {trip.days}</p>
      </div>

      <button className="mt-5 w-full bg-black text-white py-3 rounded-2xl">
        View Plan
      </button>
    </div>
  )
}

export default TripCard