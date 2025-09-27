import Image from "next/image";
import Link from "next/link";

const AuraLuminora = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 bg-background text-foreground">
      {/* Image Panel - Right side on desktop */}
      <div className="relative lg:order-2 min-h-[60vh] lg:min-h-[auto] lg:h-auto">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f421b09e-4055-46ec-9506-437db04f612f-moooi-com/assets/images/next-663305-02 Jana - Sand_3.jpg"
          alt="The Aura of Luminora"
          fill
          className="object-cover w-full h-full"
        />
      </div>

      {/* Text Panel - Left side on desktop */}
      <div className="lg:order-1 flex items-center justify-center bg-accent text-primary-white py-24 px-6 sm:py-32 sm:px-20">
        <Link href="/en/product/luminora-light" className="flex flex-col items-center text-center max-w-md">
          <div className="flex flex-col-reverse items-center mb-8">
            <h1 className="font-display text-5xl lg:text-[64px] leading-tight lg:leading-[72px] font-normal -tracking-[0.02em]">
              The Aura of Luminora
            </h1>
            <div className="text-xs font-normal leading-4 uppercase tracking-[0.08em] mb-4">
              MOOOI PRESENTS
            </div>
          </div>
          <p className="text-lg leading-7 font-normal mb-12">
            A luminous suspension lamp, where structure transforms into light, uniting craftsmanship and modernity
          </p>
          <span className="text-base leading-5 font-normal border-b border-primary-white pb-1">
            Luminore Light now available
          </span>
        </Link>
      </div>
    </section>
  );
};

export default AuraLuminora;