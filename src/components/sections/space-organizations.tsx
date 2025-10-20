import Image from 'next/image';

interface Organization {
  name: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
}

const organizations: Organization[] = [
  {
    name: 'NASA',
    href: 'https://www.nasa.gov/',
    imageSrc: '/images/avatars-JUvAAPvAA86fmbVE-SH0i6g-t1080x1080.jpg',
    imageAlt: 'NASA - National Aeronautics and Space Administration',
  },
  {
    name: 'SpaceX',
    href: 'https://www.spacex.com/',
    imageSrc: '/images/SpaceX_Logo_Black.png',
    imageAlt: 'SpaceX - Space Exploration Technologies Corp',
  },
  {
    name: 'ESA',
    href: 'https://www.esa.int/',
    imageSrc: '/images/ESA_logo.png',
    imageAlt: 'ESA - European Space Agency',
  },
  {
    name: 'ISRO',
    href: 'https://www.isro.gov.in/',
    imageSrc: '/images/Indian_Space_Research_Organisation_Logo.svg.png',
    imageAlt: 'ISRO - Indian Space Research Organisation',
  },
  {
    name: 'JAXA',
    href: 'https://global.jaxa.jp/',
    imageSrc: '/images/Jaxa_logo.svg.png',
    imageAlt: 'JAXA - Japan Aerospace Exploration Agency',
  },
  {
    name: 'Roscosmos',
    href: 'https://www.roscosmos.ru/en/',
    imageSrc: '/images/1200px-Roscosmos_logo_en.svg.png',
    imageAlt: 'Roscosmos - Russian Space Agency',
  },
];

const SpaceOrganizations = () => {
  return (
    <section className="bg-white py-4 relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/30 to-transparent pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-12 relative z-10">
        {/* Minimalistic divider line */}
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-black/20 to-transparent mx-auto mb-6" />

        <h3 className="text-center text-[10px] font-extralight uppercase tracking-[0.25em] mb-8 text-black/40">
          Space Exploration Organizations
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-24 gap-y-8">
          {organizations.map((org, index) => (
            <a
              key={org.name}
              href={org.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-center"
              style={{
                animation: `fadeInUp 0.8s ease-out ${index * 0.1}s both`
              }}
            >
              <div className="relative w-full aspect-[588/468] flex items-center justify-center p-3 transition-all duration-700 ease-out">
                <Image
                  src={org.imageSrc}
                  alt={org.imageAlt}
                  fill
                  sizes="(max-width: 768px) 45vw, (max-width: 1024px) 30vw, 15vw"
                  className={`object-contain transition-all duration-700 ease-out opacity-60 group-hover:opacity-100 filter grayscale-[30%] group-hover:grayscale-0 ${org.name === 'SpaceX'
                      ? 'scale-125 group-hover:scale-[1.31]'
                      : 'group-hover:scale-105'
                    }`}
                />
              </div>
              <span className="mt-4 text-xs font-extralight tracking-[0.15em] text-black/50 group-hover:text-black/80 transition-all duration-500">
                {org.name}
              </span>
            </a>
          ))}
        </div>

        {/* Bottom divider line */}
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-black/20 to-transparent mx-auto mt-8" />
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default SpaceOrganizations;