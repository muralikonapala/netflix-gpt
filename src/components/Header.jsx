import { signOut } from '@firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);

  const handleSignOut = (() => {
    signOut(auth).then(() => {
      navigate('/')
    }).catch((error) => {
      navigate('/error')
      });
});


  return (
    <div className='absolute flex justify-between w-screen p-8 bg-gradient-to-b from-black z-1'>
      <img
        className='w-36'
        alt='Netflix-Logo'
        src='https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460'
      />
      {user && (<div className="flex p-2">
        <img
          className="w-12 h-12"
          alt="userIcon"
          src={user?.photoURL}
        />
        <button onClick={handleSignOut} className="font-bold text-white">(Sign Out)</button>

      </div>)}
    </div>
  );
};
export default Header;