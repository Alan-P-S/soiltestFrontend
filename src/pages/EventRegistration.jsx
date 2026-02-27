import { useState } from "react";
import useEventStore from "../store/useEventStore.js";
import toast from "react-hot-toast";
export default function CreateEvent() {
  const {addEvent} = useEventStore();
  const [eventData, setEventData] = useState({
    title: "",
    Description: "",
    topic: "",
    date: "",
    time: "",
    Image: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      setEventData({ ...eventData, Image:"sample" });
    } else {
      setEventData({ ...eventData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...eventData,
    };
    try{
      await addEvent(payload);
      console.log("Event Created:", payload);
      toast.success("Event Created");
      setEventData({
      title: "",
      Description: "",
      topic: "",
      date: "",
      time: "",
      Image: null,
    });
    }catch(err){
      console.log(err);
      toast.error(err.response?.data?.message || "Error in Event Creation")
    }
    
  };

  return (
    <div className="min-h-screen bg-base-100 flex flex-col">

      {/* Header */}
      <div className="navbar bg-base-200 px-6 shadow-sm">
        <span className="text-lg font-semibold">
          Create New Event
        </span>
      </div>

      {/* Main */}
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-2xl">

          {/* Title */}
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold text-base-content">
              Event Creation Form
            </h1>
            <p className="text-base-content/70 mt-2">
              Create soil testing camps or awareness events
            </p>
          </div>

          {/* Form */}
          <div className="card bg-base-100 border border-base-300 shadow-sm">
            <form onSubmit={handleSubmit} className="card-body space-y-5">

              {/* Title */}
              <div>
                <label className="label">
                  <span className="label-text">Event Title</span>
                </label>
                <input
                  type="text"
                  name="title"
                  value={eventData.title}
                  onChange={handleChange}
                  placeholder="e.g. Soil Testing Camp – Palakkad"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* Topic */}
              <div>
                <label className="label">
                  <span className="label-text">Event Topic</span>
                </label>
                <input
                  type="text"
                  name="topic"
                  value={eventData.topic}
                  onChange={handleChange}
                  placeholder="Soil Health Awareness / Sample Collection"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* Description */}
              <div>
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  name="Description"
                  value={eventData.Description}
                  onChange={handleChange}
                  placeholder="Brief details about the event"
                  className="textarea textarea-bordered w-full"
                  rows={3}
                  required
                />
              </div>

              {/* Image Upload */}
              <div>
                <label className="label">
                  <span className="label-text">Upload Event Image</span>
                </label>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleChange}
                  className="file-input file-input-bordered w-full"
                />
                <p className="text-xs text-base-content/60 mt-1">
                  Optional: Upload camp photo or banner
                </p>
              </div>

              {/* Date & Time */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="label">
                    <span className="label-text">Event Date</span>
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={eventData.date}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                    required
                  />
                </div>

                <div>
                  <label className="label">
                    <span className="label-text">Event Time</span>
                  </label>
                  <input
                    type="time"
                    name="time"
                    value={eventData.time}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                    required
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="pt-4 flex justify-end">
                <button type="submit" className="btn btn-primary">
                  Create Event
                </button>
              </div>

            </form>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-base-200 text-base-content/60 text-center py-3 text-sm">
        Authorized Laboratory Personnel Only
      </footer>
    </div>
  );
}
