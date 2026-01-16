import TripItem from "./TripItem";

export default function TripList({ trips, onTagClick }) {
  return (
    <div className="space-y-8">
      {trips.map((trip) => (
        <TripItem
          key={trip.eid}
          trip={trip}
          onTagClick={onTagClick}
        />
      ))}
    </div>
  );
}
