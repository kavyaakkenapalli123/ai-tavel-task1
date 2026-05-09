function BudgetDashboard() {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6">
        AI Budget Dashboard
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        <div className="bg-gray-100 p-5 rounded-2xl">
          <p>Flights</p>
          <h3 className="text-2xl font-bold">₹6,000</h3>
        </div>

        <div className="bg-gray-100 p-5 rounded-2xl">
          <p>Hotel</p>
          <h3 className="text-2xl font-bold">₹5,000</h3>
        </div>

        <div className="bg-gray-100 p-5 rounded-2xl">
          <p>Food</p>
          <h3 className="text-2xl font-bold">₹2,000</h3>
        </div>

        <div className="bg-gray-100 p-5 rounded-2xl">
          <p>Activities</p>
          <h3 className="text-2xl font-bold">₹2,000</h3>
        </div>

      </div>
    </div>
  )
}

export default BudgetDashboard