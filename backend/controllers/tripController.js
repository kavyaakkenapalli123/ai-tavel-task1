export const getTrips = (req, res) => {

  const trips = [
    {
      id: 1,
      place: "Goa",
      budget: "₹15,000",
      days: "3 Days"
    },
    {
      id: 2,
      place: "Kerala",
      budget: "₹18,000",
      days: "4 Days"
    }
  ]

  res.json(trips)
}