import React, {useContext} from 'react';
import { UserContext } from '../../App';
import UserPic from '../UserPic/UserPic';
import UserInfo from '../UserInfo/UserInfo';
import UserDesc from '../UserDesc/UserDesc';
import UserStats from '../UserStats/UserStats';
import SocialMedia from '../SocialMedia/SocialMedia';

const Info = () => {

   const userInfo = useContext(UserContext);

   if (!userInfo) {
      return null;
   }

   return (
      <section className='info-wrapper'>
         <UserPic />
         <UserInfo />
         <UserDesc />
         <UserStats />
         <SocialMedia />
      </section>
   );
}

export default Info;