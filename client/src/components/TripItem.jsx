import { truncateText } from "../utils/text";
import Tag from "./Tag";

export default function TripItem({ trip, onTagClick }) {
  const handleCopyLink = () => {
    navigator.clipboard.writeText(trip.url);
    alert("คัดลอกลิงก์เรียบร้อยแล้ว");
  };

  return (
    <div className="flex gap-8 relative mb-14">
      {/* รูปภาพใหญ่ */}
      <img
  src={trip.photos[0]}
  alt={trip.title}
  className="w-72 h-56 object-cover rounded-lg"
/>

      {/* รายละเอียด */}
      <div className="flex-1">
        {/* Title + Copy button */}
        <div className="flex items-start justify-between">
        <a
  href={trip.url}
  target="_blank"
  rel="noreferrer"
  className="text-xl font-semibold text-sky-400 hover:underline truncate max-w-[85%]"
>
  {trip.title}
</a>


          {/* ปุ่ม Copy link */}
          <button
            onClick={handleCopyLink}
            className="text-orange-400 hover:text-green-500"
            title="คัดลอกลิงก์"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-link-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
          </button>
        </div>

        {/* Description */}
        <p className="mt-2 text-gray-500">
          {truncateText(trip.description, 100)}
          <a
            href={trip.url}
            target="_blank"
            rel="noreferrer"
            className="text-green-500 ml-1"
          >
            อ่านต่อ
          </a>
        </p>

        {/* Tags */}
        <div className="text-sm text-pink-400 mt-3 flex flex-wrap items-center">
  <span className="mr-1">หมวด</span>

  {trip.tags.map((tag, index) => {
    const isLast = index === trip.tags.length - 1;
    const isBeforeLast = index === trip.tags.length - 2;

    return (
      <span key={tag} className="flex items-center">
        <button
          onClick={() =>
            onTagClick((prev) =>
              prev.includes(tag) ? prev : `${prev} ${tag}`.trim()
            )
          }
          className="underline whitespace-nowrap"
        >
          {tag}
        </button>

        {/* ตัวคั่น */}
        {!isLast && !isBeforeLast && <span>,&nbsp;</span>}
        {isBeforeLast && <span>&nbsp;และ&nbsp;</span>}
      </span>
    );
  })}
</div>




        {/* รูปเล็ก 3 รูป */}
  <div className="absolute bottom-2 left- flex gap-4">
    {trip.photos.slice(1, 4).map((photo, index) => (
      <img
        key={index}
        src={photo}
        alt={`${trip.title}-${index}`}
        className="w-24 h-20 object-cover rounded-md border border-white"
      />
          ))}
        </div>
      </div>
    </div>
  );
}