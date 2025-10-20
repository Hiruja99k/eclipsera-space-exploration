import Image from "next/image";
import Link from "next/link";

const CosmicExploration = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 bg-background text-foreground h-screen">
      {/* Image Panel - Right side on desktop */}
      <div className="relative lg:order-2 h-[50vh] lg:h-full">
        <Image
          src="/images/Lucid_Origin_a_cinematic_photo_of_A_supermassive_black_hole_at_0.jpg"
          alt="The Aura of Luminora"
          fill
          className="object-cover w-full h-full" />

      </div>

      {/* Text Panel - Left side on desktop */}
      <div className="lg:order-1 flex items-center justify-center bg-[#4c363a] text-primary-white h-full px-6 sm:px-20 py-16 sm:py-20">
        <Link href="/ecosystem" className="flex flex-col items-center text-center max-w-md">
          <div className="flex flex-col-reverse items-center mb-8">
            <h1 className="font-display text-5xl lg:text-[64px] leading-tight lg:leading-[72px] font-normal -tracking-[0.02em]">
             The Embrace of Cosmos
            </h1>
            <div className="text-xs font-normal leading-4 uppercase tracking-[0.08em] mb-4">
              ECLIPSERA PRESENTS
            </div>
          </div>
          <p className="text-lg leading-7 font-normal mb-12">
          A cosmic phenomenon where spacetime bends into a point, uniting immense gravity and boundless mystery.
          </p>
          <span className="text-base leading-5 font-normal border-b border-primary-white pb-1">
          Explore Information
          </span>
        </Link>
      </div>
    </section>);

};

export default CosmicExploration;