import React, {useContext} from 'react';
import { UserContext } from '../../App';
import '../Info/info.scss';
import './user-desc.scss';

const UserDesc = () => {

   const userInfo = useContext(UserContext);

   return (
      <div className="user-desc">
         <p className='desc'>{userInfo.bio || 'This profile has no bio'}</p>
      </div>
   );
}

export default UserDesc;


