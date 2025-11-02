import AboutColumns from "./Columns";
export default function AboutMain({ onImageClick }) {
  return (
    <div className="w-full bg-brand-beige px-30 flex gap-30 justify-center items-center">
      <AboutColumns />
    </div>
  );
}
