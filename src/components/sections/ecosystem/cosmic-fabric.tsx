import Image from 'next/image';
import Link from 'next/link';

interface FabricProps {
  label?: string;
  titleA?: string;
  titleB?: string;
  titleC?: string;
  description?: string;
  ctaText?: string;
  href?: string;
  imageSrc?: string;
  imageAlt?: string;
  panelBgClass?: string;
}

// Independent duplicate of DressToImpress for Ecosystem page
const CosmicFabric: React.FC<FabricProps> = ({
  label = 'ECLIPSERA presents',
  titleA = 'The',
  titleB = 'Cosmic',
  titleC = 'Fabric',
  description = 'Power and chaos, inspired by the galactic core.',
  ctaText = 'Learn More',
  href = '#',
  imageSrc = '/images/Lucid_Origin_a_highly_detailed_cinematic_photo_of_a_vibrant_ga_2.jpg',
  imageAlt = 'Cosmic Fabric',
  panelBgClass = 'bg-secondary text-secondary-foreground',
}) => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 bg-background text-foreground h-screen">
      <div className="relative w-full h-[50vh] lg:h-full order-1 lg:order-1">
        <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
      </div>
      <div className={`${panelBgClass} flex items-center justify-center order-2 lg:order-2 h-full`}>
        <Link
          href={href}
          className="flex flex-col items-center justify-center text-center p-12 md:p-24 w-full h-full"
        >
          <div className="flex flex-col-reverse items-center">
            <h2 className="font-display text-[48px] leading-[56px] md:text-[64px] md:leading-[72px] -tracking-[0.02em] mt-4">
              <span>{titleA}</span> <span>{titleB}</span> <span>{titleC}</span>
            </h2>
            <div className="text-small-label font-body uppercase tracking-[0.08em]">{label}</div>
          </div>
          <div className="mt-6">
            <p className="text-body-large max-w-[300px]">{description}</p>
          </div>
          <div className="mt-8">
            <span className="font-body text-base border-b border-primary-black pb-1">{ctaText}</span>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default CosmicFabric;


