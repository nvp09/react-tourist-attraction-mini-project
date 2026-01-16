import { useEffect, useState } from "react";
import { fetchTrips } from "./services/tripService";
import SearchInput from "./components/SearchInput";
import TripList from "./components/TripList";

export default function App() {
  const [keyword, setKeyword] = useState("");
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    fetchTrips(keyword).then(setTrips);
  }, [keyword]);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-blue-500 mb-6">
        เที่ยวไหนดี
      </h1>

      <SearchInput value={keyword} onChange={setKeyword} />
      <TripList trips={trips} onTagClick={setKeyword} />
    </div>
  );
}
