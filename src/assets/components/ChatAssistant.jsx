function ChatAssistant() {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4">
        AI Travel Assistant
      </h2>

      <div className="space-y-4">

        <div className="bg-gray-100 p-4 rounded-2xl w-fit">
          Suggest places to visit in Goa
        </div>

        <div className="bg-blue-600 text-white p-4 rounded-2xl w-fit ml-auto">
          I recommend Baga Beach and Fort Aguada
        </div>

      </div>

      <div className="mt-6 flex gap-4">
        <input
          type="text"
          placeholder="Ask AI Assistant..."
          className="flex-1 border p-4 rounded-2xl"
        />

        <button className="bg-black text-white px-6 rounded-2xl">
          Send
        </button>
      </div>
    </div>
  )
}

export default ChatAssistant