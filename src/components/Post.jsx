import { convertToK, timeSince } from '@/utils/helper';
import { BiComment, BiShareAlt } from 'react-icons/bi';
import { FaRegHeart } from 'react-icons/fa';
import { FiEye } from 'react-icons/fi';
import { Card, UserProfile } from '.';

const Post = ({ tag, time, user, post, actions }) => {
  return (
    <Card className='p-2 px-5 space-y-3'>
      <header className='flex justify-between ml-auto text-sm font-semibold text-blue-500'>
        <div className="flex items-center gap-5">
          <div className='w-[50px]'>
            <UserProfile src={user.img} />
          </div>
          <div className='flex items-center gap-5'>
            <h3 className='font-bold capitalize'>{user.name}</h3>
            <button className='text-xs xl:text-sm h-8 min-w-fit bg-red-500 rounded-[100px] px-4 text-white'>
              {tag}
            </button>
          </div>
        </div>
        <div>{timeSince(time)}</div>
      </header>

      {/* User Footer */}
      <div className='flex items-center gap-5 px-20'>
      <figcaption>
        <p>{post.caption}</p>

        <footer className='flex justify-between mt-1 text-sm font-semibold gap-10'>
          <div className='post-btn'>
            <button>
              <FaRegHeart className='md:text-xl' />
            </button>
            {convertToK(actions.likes)}
          </div>
          <div className='post-btn'>
            <FiEye className='md:text-xl' />
            {convertToK(actions.views)}
          </div>
          <div className='post-btn'>
            <BiComment className='md:text-xl' />
            {convertToK(actions.comments)} Comments
          </div>
          <div className='post-btn'>
            <BiShareAlt className='md:text-xl' />
            Share
          </div>
        </footer>
      </figcaption></div>
    </Card>
  );
};

export default Post;