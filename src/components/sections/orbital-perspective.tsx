import Image from "next/image";

const OrbitalPerspective = () => {
  return (
    <section className="h-svh overflow-hidden">
      <div className="flex flex-col md:flex-row-reverse h-full">
        {/* Right Column: Image */}
        <div className="relative w-full md:w-1/2 h-[50vh] md:h-full bg-warm-beige">
          <Image
            src="/images/Lucid_Origin_a_cinematic_photo_of_A_realistic_Mars_colony_on_t_3.jpg"
            alt="A minimalist interior showing the Living Pebble light fixture on a beige wall."
            fill
            className="object-cover"
          />
        </div>

        {/* Left Column: Text Content */}
        <div className="w-full md:w-1/2 bg-light-cream flex items-center justify-center h-[50vh] md:h-full">
          <div className="py-20 px-6 sm:py-24 lg:py-32 xl:py-48 box-border">
            <a href="/en/story/beta-living-pebble" className="block text-center text-primary-black">
              <div className="flex flex-col-reverse items-center mb-6">
                <h2 className="font-display text-[48px] leading-[56px] text-center">
                Eclipsera unveils the<br />Martian Frontier
                </h2>
                <p className="text-small-label uppercase text-warm-brown tracking-[0.08em] mb-4">
                  Product story
                </p>
              </div>
              <p className="text-body-large max-w-sm mx-auto mb-8">
              A groundbreaking initiative that transforms exploration into a sustainable human outpost.
              </p>
              <span className="text-button inline-block border-b border-primary-black pb-1">
                Learn more
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrbitalPerspective;