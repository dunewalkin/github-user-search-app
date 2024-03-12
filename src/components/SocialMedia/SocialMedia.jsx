import LocationItem from '../LocationItem/LocationItem';
import BlogItem from '../BlogItem/BlogItem';
import TwitterItem from '../TwitterItem/TwitterItem';
import CompanyItem  from '../CompanyItem/CompanyItem';
import '../Info/info.scss';
import './social-media.scss';

const SocialMedia = () => {

   return (
      <div className='social-media'>

         <LocationItem />
         <TwitterItem />
         <BlogItem />
         <CompanyItem />

      </div>
   )
}

export default SocialMedia