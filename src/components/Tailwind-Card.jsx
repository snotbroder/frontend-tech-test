import Image from "next/image";
import hike from "../images/hike.svg";
const TailwindCard = () => {
  return (
    <section className="m-24 grid grid-cols-2 p-16 bg-blue-500 rounded-3xl">
      <div className="flex flex-col justify-between text-blue">
        <h2 className="text-white text-4xl font-black uppercase">We prove the best seo and digital marketing on demand</h2>
        <p className="text-blue-200 text-lg -mt-16">All our content marketing service packages include a custom content strategy All our content marketing service packages include a custom content strategy.</p>
        <div className="mt-4">
          <a className="bg-slate-900 text-white font-black  p-4 px-8 rounded-3xl" href="#0">
            Get started
          </a>
        </div>
      </div>

      <Image
        className="place-self-center h-80"
        src={hike} // Path to the image
        alt="Sample Image"
        width={300} // The desired width of the image
        height={500} // The desired height of the image
      />
    </section>
  );
};

export default TailwindCard;
