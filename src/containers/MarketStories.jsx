import marketStories from '@/content/market-stories';
import Image from 'next/image';

const MarketStories = ({ className }) => {
  return (
    <section className={`relative flex-grow w-3/12 p-5 ${className}`}>
      <h1 className="hidden heading-primary md:block"><span className='bg-gray-200'>MARKET STORIES</span></h1>

      <div className="grid h-[calc(100vh-68px)] xs:h-[calc(100vh-225px)]  md:h-[calc(100vh-95px)] gap-5 overflow-scroll ">
        {marketStories.map(({ img, text, id, url }) => (
          <a
            key={id}
            href={url}
            target="_blank"
            className="group relative h-[300px] cursor-pointer overflow-hidden  shadow-lg focus:outline-none focus:ring-4 focus:ring-orange-700 flex flex-col"
          >
            <div className="relative h-3/5">
              <Image
                src={img}
                alt={url}
                height='400'
                width='200'
                // layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
            </div>
            <div className="p-3 px-5">
              <h4 className="text-sm">{text}</h4>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default MarketStories;
