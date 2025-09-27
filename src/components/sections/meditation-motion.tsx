import Image from "next/image";
import Link from "next/link";

const MeditationMotion = () => {
  return (
    <section className="bg-[#2C2C2C] text-primary-white flex flex-col lg:flex-row-reverse">
      <div className="flex lg:w-1/2 items-center justify-center py-20 lg:py-36 px-6 sm:px-12 md:px-20">
        <Link
          href="/en/product/organic-sequences-carpet"
          className="flex flex-col items-center text-center w-full max-w-md"
        >
          <div className="flex flex-col-reverse mb-6">
            <div>
              <h1 className="font-display text-5xl leading-[1.1] lg:text-[64px] lg:leading-[72px] font-normal -tracking-[0.02em]">
                A Meditation in Motion
              </h1>
            </div>
            <div>
              <div className="text-small-label mb-6">Moooi presents</div>
            </div>
          </div>
          <p className="text-base leading-6 my-4">
            The new Organic Sequences Carpets Collection sees free-flowing ink
            form intricate, organic patterns that capture movement, depth and
            nature’s quiet unpredictability.
          </p>
          <div className="mt-8">
            <span className="text-button border-b border-primary-white pb-1 transition-opacity hover:opacity-70">
              Explore carpet collection
            </span>
          </div>
        </Link>
      </div>
      <div className="lg:w-1/2">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f421b09e-4055-46ec-9506-437db04f612f-moooi-com/assets/images/next-516685-Gold_200x300_250039-Rug_300dpi.png"
          alt="A Meditation in Motion"
          width={984}
          height={1476}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default MeditationMotion;