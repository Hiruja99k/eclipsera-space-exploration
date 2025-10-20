import Image from "next/image";
import Link from "next/link";

const CelestialVista = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 bg-background h-svh overflow-hidden">
      <div className="relative w-full h-[50vh] lg:h-full lg:order-1">
        <Image
          src="/images/Lucid_Origin_a_cinematic_photo_of_a_triplestar_system_consisti_3.jpg"
          alt="An Ode to Timber"
          fill
          className="object-cover"
        />
      </div>
      <div className="bg-[#393D46] text-primary-white flex items-center justify-center lg:order-2 h-full">
        <Link href="/en/product/timber-tones-carpet" className="block w-full h-full">
          <div className="flex flex-col items-center justify-center text-center h-full box-border max-w-lg mx-auto py-20 px-6 lg:py-28 lg:px-20">
            <div className="font-body text-xs uppercase tracking-[0.08em] font-normal mb-6">
              ECLIPSERA PRESENTS
            </div>
            <h1 className="font-display text-[48px] leading-[56px] lg:text-[64px] lg:leading-[72px] font-normal tracking-[-0.02em]">
            An Orbit of Worlds
            </h1>
            <p className="font-body text-lg leading-7 mt-8 max-w-md">
              Inspired by traditional woodworking techniques, the Timber Tones Carpets Collection transforms the warmth and artistry of timber into a stunning textile experience.
            </p>
            <div className="mt-12">
              <span className="font-body text-base leading-5 border-b border-primary-white pb-1">
                Discover the new collection
              </span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default CelestialVista;