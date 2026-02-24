import { useNavigate } from "react-router-dom";

export default function FarmerDashboard() {
  const navigate = useNavigate();

  // Later this will come from backend
  const bookingStatus = {
    hasBooking: true,
    status: "Pending",
    bookingDate: "2026-02-05",
  };

  // Dummy upcoming events (later from API)
  const upcomingEvents = [
    {
      id: 1,
      title: "Soil Testing Camp",
      topic: "Free Soil Health Check",
      description: "Bring soil samples for free testing and expert advice.",
      date: "2026-02-12",
      time: "10:00 AM",
      place: "Palakkad",
    },
    {
      id: 2,
      title: "Farmer Awareness Program",
      topic: "Balanced Fertilizer Usage",
      description: "Learn how to use fertilizers efficiently based on soil report.",
      date: "2026-02-18",
      time: "09:30 AM",
      place: "Erode",
    },
  ];

  return (
    <div className="min-h-screen bg-base-100 flex flex-col">

      {/* Header */}
      <div className="navbar bg-base-200 px-6 shadow-sm">
        <div className="flex-1">
          <span className="text-lg font-semibold">
            Farmer Dashboard
          </span>
        </div>
      </div>

      {/* Main */}
      <main className="flex-1 p-6 space-y-10">

        {/* Welcome */}
        <div>
          <h1 className="text-2xl font-bold text-base-content">
            Welcome
          </h1>
          <p className="text-base-content/70">
            Track your soil test requests, results, and upcoming events
          </p>
        </div>

        {/* Status Card */}
        <div className="card bg-base-100 border border-base-300 shadow-sm">
          <div className="card-body">

            <h2 className="card-title text-lg">
              Soil Test Booking Status
            </h2>

            {bookingStatus.hasBooking ? (
              <div className="space-y-3 mt-2">

                <div className="flex justify-between">
                  <span className="text-base-content/70">
                    Booking Date
                  </span>
                  <span>
                    {bookingStatus.bookingDate}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-base-content/70">
                    Current Status
                  </span>
                  <span className="badge badge-outline badge-lg">
                    {bookingStatus.status}
                  </span>
                </div>

                {bookingStatus.status === "Completed" && (
                  <button
                    className="btn btn-primary btn-sm mt-4"
                    onClick={() => navigate("/farmer/soil-report")}
                  >
                    View Soil Health Card
                  </button>
                )}

              </div>
            ) : (
              <p className="text-base-content/70 mt-2">
                No soil test booked yet.
              </p>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* Book Soil Test */}
          <div className="card bg-base-100 border border-base-300 shadow-sm">
            <div className="card-body">
              <h2 className="card-title">
                Book Soil Test
              </h2>
              <p className="text-sm text-base-content/70">
                Request a soil test for your land and crops
              </p>
              <button
                className="btn btn-primary btn-sm mt-4"
                onClick={() => navigate("/farmer/book-test")}
              >
                Book Now
              </button>
            </div>
          </div>

          {/* History */}
          <div className="card bg-base-100 border border-base-300 shadow-sm">
            <div className="card-body">
              <h2 className="card-title">
                Past Test History
              </h2>
              <p className="text-sm text-base-content/70">
                View previous soil test reports and results
              </p>
              <button className="btn btn-outline btn-sm mt-4" disabled>
                Coming Soon
              </button>
            </div>
          </div>

        </div>

        {/* 🔹 Upcoming Events Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Upcoming Events & Camps
          </h2>

          {upcomingEvents.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="card bg-base-100 border border-base-300 shadow-sm"
                >
                  <div className="card-body">
                    <h3 className="card-title">
                      {event.title}
                    </h3>

                    <p className="text-sm text-base-content/70">
                      {event.topic}
                    </p>

                    <p className="text-sm mt-2">
                      {event.description}
                    </p>

                    <div className="mt-4 text-sm space-y-1">
                      <p>
                        <strong>Date:</strong> {event.date}
                      </p>
                      <p>
                        <strong>Time:</strong> {event.time}
                      </p>
                      <p>
                        <strong>Location:</strong> {event.place}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-base-content/70">
              No upcoming events announced yet.
            </p>
          )}
        </div>

      </main>

      {/* Footer */}
      <footer className="bg-base-200 text-base-content/60 text-center py-3 text-sm">
        Farmer Access • Mobile Soil Testing Service
      </footer>
    </div>
  );
}
