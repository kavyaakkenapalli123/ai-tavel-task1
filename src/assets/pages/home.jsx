import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import TripCard from '../components/TripCard'
import BudgetDashboard from '../components/BudgetDashboard'
import Itinerary from '../components/Itinerary'
import ChatAssistant from '../components/ChatAssistant'
import { trips } from '../data'

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-7xl mx-auto space-y-8">

        <Navbar />

        <SearchBar />

        <div>
          <h2 className="text-3xl font-bold mb-6">
            AI Recommended Trips
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {trips.map((trip) => (
              <TripCard
                key={trip.id}
                trip={trip}
              />
            ))}

          </div>
        </div>

        <Itinerary />

        <BudgetDashboard />

        <ChatAssistant />

      </div>

    </div>
  )
}

export default Home