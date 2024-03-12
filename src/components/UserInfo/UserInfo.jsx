import React, {useContext} from 'react';
import { UserContext } from '../../App';
import '../Info/info.scss';
import './user-info.scss';

const UserInfo = () => {

   const userInfo = useContext(UserContext);

   const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ];

      const monthIndex = parseInt(userInfo.created_at.slice(5, 7), 10) - 1; 

      const monthName = months[monthIndex];

      const dateStr = `Joined ${userInfo.created_at.slice(8, 10)} ${monthName} ${userInfo.created_at.slice(0, 4)}`;

   return (
      <div className='info-header'>
         <div className="name-wrapper">
         <h1>{userInfo ? userInfo.name : ''}</h1>
         <h3 className='user-name'>{userInfo ? `@${userInfo.login}` : ''}</h3>
         </div>
         <p>{dateStr}</p>
      </div>
   );
}

export default UserInfo;


// import '../Info/info.scss';
// import './user-info.scss';

// const UserInfo = ({ name, login, createdAt }) => {
//   const months = [
//     'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
//     'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
//   ];
//   const monthIndex = parseInt(createdAt.slice(5, 7), 10) - 1;
//   const monthName = months[monthIndex];
//   const dateStr = `Joined ${createdAt.slice(8, 10)} ${monthName} ${createdAt.slice(0, 4)}`;

//   return (
//     <div className='info-header'>
//       <div className="name-wrapper">
//         <h1>{name}</h1>
//         <h3 className='user-name'>@{login}</h3>
//       </div>
//       <p>{dateStr}</p>
//     </div>
//   );
// }

// export default UserInfo;
