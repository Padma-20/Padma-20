import { Post } from '@/components';
import posts from '../content/post';

const Discussion = ({ className }) => {
  return (
    <section
      className={`flex-grow w-6/12 p-2 xl:p-5 h-[calc(100vh-20px)] ${className}`}
    >
      <h1 className="hidden heading-primary md:block "><span className='bg-gray-200'>DISCUSSION FOURM</span></h1>

      <div className="px-0 py-3 space-y-2 xs:space-y-3 md:space-y-4 xl:px-10 ">
        {/* Posts */}
        <div className="h-[calc(100vh-68px)] xs:h-[calc(100vh-350px)] md:h-[calc(100vh-95px)] space-y-5 overflow-y-scroll">
          {posts.map((post) => (
            <Post key={post.id} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Discussion;