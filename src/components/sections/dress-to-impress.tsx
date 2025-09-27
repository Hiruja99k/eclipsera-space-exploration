import Image from 'next/image';
import Link from 'next/link';

const DressToImpress = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 bg-background text-foreground">
      <div className="relative w-full min-h-[50vh] lg:min-h-0 order-1 lg:order-1">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f421b09e-4055-46ec-9506-437db04f612f-moooi-com/assets/images/next-663428-MOOOI_DrapeLight_Applied_03_Dining.jpg"
          alt="Dress to Impress"
          fill
          className="object-cover"
        />
      </div>
      <div className="bg-secondary text-secondary-foreground flex items-center justify-center order-2 lg:order-2">
        <Link
          href="/en/product/drape-light-78-drape-light"
          className="flex flex-col items-center justify-center text-center p-12 md:p-24 w-full h-full"
        >
          <div className="flex flex-col-reverse items-center">
            <h2 className="font-display text-[48px] leading-[56px] md:text-[64px] md:leading-[72px] -tracking-[0.02em] mt-4">
              <span>Dress</span> <span>to</span> <span>Impress</span>
            </h2>
            <div className="text-small-label font-body uppercase tracking-[0.08em]">
              moooi presents
            </div>
          </div>
          <div className="mt-6">
            <p className="text-body-large max-w-[300px]">
              Elegance and warmth, inspired by perfectly draped fabric.
            </p>
          </div>
          <div className="mt-8">
            <span className="font-body text-base border-b border-primary-black pb-1">
              Explore Drape Light
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default DressToImpress;