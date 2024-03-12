import React, {useContext} from 'react';
import { UserContext } from '../../App';
import '../Info/info.scss';
import './user-stats.scss';

const UserStats = () => {

   const userInfo = useContext(UserContext);

   return (
         <div className='user-stats'>
            <div className='stats-item'>
               <h4>Repos</h4>
               <h1>{userInfo.public_repos}</h1>
            </div>
            <div className='stats-item'>
               <h4>Followers</h4>
               <h1>{userInfo.followers}</h1>
            </div>
            <div className='stats-item'>
               <h4>Following</h4>
               <h1>{userInfo.following}</h1>
            </div>
         </div>
   );
}

export default UserStats