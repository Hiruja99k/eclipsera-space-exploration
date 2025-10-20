import Image from "next/image";
import Link from "next/link";

const MissionGateway = () => {
  return (
    <section className="bg-[#2C2C2C] text-primary-white h-screen flex flex-col lg:flex-row">
      <div className="flex lg:w-1/2 items-center justify-center h-[50vh] lg:h-full px-6 sm:px-12 md:px-20">
        <Link
          href="/en/product/organic-sequences-carpet"
          className="flex flex-col items-center justify-center text-center w-full max-w-md h-full"
        >
          <div className="flex flex-col-reverse mb-6">
            <div>
              <h1 className="font-display text-5xl leading-[1.1] lg:text-[64px] lg:leading-[72px] font-normal tracking-[-0.02em]">
              A Voyage in Propulsion
              </h1>
            </div>
            <div>
              <div className="text-small-label mb-6">ECLIPSERA presents</div>
            </div>
          </div>
          <p className="text-base leading-6 my-4">
          The new Propulsion Series captures soaring exhaust trails to form intricate, dynamic patterns that capture power, lift-off, and humanity's reach.
          </p>
          <div className="mt-8">
            <span className="text-button border-b border-primary-white pb-1 transition-opacity hover:opacity-70">
            Explore Missions
            </span>
          </div>
        </Link>
      </div>
      <div className="lg:w-1/2 h-[50vh] lg:h-full">
        <Image
          src="/images/Lucid_Origin_a_highly_detailed_cinematic_photo_of_a_modern_Fal_3.jpg"
          alt="A Meditation in Motion"
          width={984}
          height={1476}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default MissionGateway;