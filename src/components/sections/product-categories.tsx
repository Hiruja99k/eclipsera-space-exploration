import Image from 'next/image';

interface Category {
  name: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
}

const categories: Category[] = [
  {
    name: 'Bedding & Bath',
    href: '/en/collection?category=bedding-and-bath',
    imageSrc: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f421b09e-4055-46ec-9506-437db04f612f-moooi-com/assets/images/next-596326-towels.png',
    imageAlt: 'Stacked towels representing Bedding & Bath category',
  },
  {
    name: 'Furniture',
    href: '/en/collection?category=furniture',
    imageSrc: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f421b09e-4055-46ec-9506-437db04f612f-moooi-com/assets/images/next-270702-haybale.png',
    imageAlt: 'Brown leather modular sofa representing Furniture category',
  },
  {
    name: 'Lighting',
    href: '/en/collection?category=lighting',
    imageSrc: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f421b09e-4055-46ec-9506-437db04f612f-moooi-com/assets/images/next-364577-luminora.png',
    imageAlt: 'Modern circular pendant light representing Lighting category',
  },
  {
    name: 'Home Accessories',
    href: '/en/collection?category=home-accessories',
    imageSrc: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f421b09e-4055-46ec-9506-437db04f612f-moooi-com/assets/images/next-258466-home_accessories.png',
    imageAlt: 'Reed diffuser representing Home Accessories category',
  },
  {
    name: 'Wall & Floor',
    href: '/en/collection?category=wall-and-floor',
    imageSrc: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f421b09e-4055-46ec-9506-437db04f612f-moooi-com/assets/images/next-984169-timber-tones.png',
    imageAlt: 'Patterned wall tiles representing Wall & Floor category',
  },
  {
    name: 'Body & Beauty',
    href: '/en/collection?category=body-and-beauty',
    imageSrc: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f421b09e-4055-46ec-9506-437db04f612f-moooi-com/assets/images/next-882856-body_-_beauty.png',
    imageAlt: 'Artistic fabric swatch representing Body & Beauty category',
  },
];

const ProductCategories = () => {
  return (
    <section className="bg-background py-[120px]">
      <div className="container">
        <h3 className="text-center text-xs font-normal uppercase tracking-[0.08em] mb-12">
          Shop our collection
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-12">
          {categories.map((category) => (
            <a key={category.name} href={category.href} className="group flex flex-col items-center text-center">
              <div className="relative w-full aspect-[588/468]">
                <Image
                  src={category.imageSrc}
                  alt={category.imageAlt}
                  fill
                  sizes="(max-width: 768px) 45vw, (max-width: 1024px) 30vw, 15vw"
                  className="object-contain transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
              </div>
              <span className="mt-6 text-base font-normal">
                {category.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;