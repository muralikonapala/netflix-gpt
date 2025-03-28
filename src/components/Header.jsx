import { signOut } from '@firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from '../utils/constants';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector(store => store.user);

  const handleSignOut = (() => {
    signOut(auth).then(() => {
     
    }).catch((error) => {
      navigate('/error');
      });
  });
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate('/browse');
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className='absolute flex justify-between w-screen p-8 bg-gradient-to-b from-black z-1'>
      <img
        className='w-36'
        alt='Netflix-Logo'
        src={LOGO}
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