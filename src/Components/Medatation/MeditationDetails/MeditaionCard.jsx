import { Rating } from "@smastrom/react-rating";

export default function MeditationCard({ title, poster, author }) {
  return (
    <div className="mb-3">
      <div>
        <img
          src={poster}
          className=" w-100 poster"
          alt="meditation"
          loading="lazy"
        />
      </div>
      <h2 className="header2-size mt-2">{title}</h2>
      <div className="d-flex pb-3 justify-content-between">
        <span className="color">{author}</span>
        <Rating className="rating-size" value={2} readOnly />
      </div>
    </div>
  );
}
