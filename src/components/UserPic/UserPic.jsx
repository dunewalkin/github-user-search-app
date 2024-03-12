import React, {useContext} from 'react';
import { UserContext } from '../../App';
import '../Info/info.scss';
import './user-pic.scss'

const UserPic = () => {

   const userInfo = useContext(UserContext);

   return (
      <div className='user-pic'>
         <img src={userInfo.avatar_url} alt={`${userInfo.name}-avatar`} />
      </div>
   );
}

export default UserPic;

