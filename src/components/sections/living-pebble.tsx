import Image from "next/image";

const LivingPebble = () => {
  return (
    <section>
      <div className="flex flex-col md:flex-row-reverse">
        {/* Right Column: Image */}
        <div className="relative w-full md:w-1/2 aspect-[1460/1476] md:aspect-auto bg-warm-beige">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f421b09e-4055-46ec-9506-437db04f612f-moooi-com/assets/images/next-536241-Moooi_The_Living_Pebble.jpg"
            alt="A minimalist interior showing the Living Pebble light fixture on a beige wall."
            fill
            className="object-cover"
          />
        </div>

        {/* Left Column: Text Content */}
        <div className="w-full md:w-1/2 bg-light-cream flex items-center justify-center">
          <div className="py-20 px-6 sm:py-24 lg:py-32 xl:py-48">
            <a href="/en/story/beta-living-pebble" className="block text-center text-primary-black">
              <div className="flex flex-col-reverse items-center mb-6">
                <h2 className="font-display text-[48px] leading-[56px] text-center">
                  Moooi introduces the<br />Living Pebble
                </h2>
                <p className="text-small-label uppercase text-warm-brown tracking-[0.08em] mb-4">
                  Product story
                </p>
              </div>
              <p className="text-body-large max-w-sm mx-auto mb-8">
                A first-of-its-kind innovation that transforms lighting into a living work of art.
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

export default LivingPebble;