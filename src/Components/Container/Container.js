import React from 'react'
import soupImage from "../../Images/noodle-chicken-soup.jpeg"
import profileImage from "../../Images/ben-sweet-2LowviVHZ-E-unsplash.jpg"
import tawaImage from "../../Images/tawalogo.jpg"
import containerStyle from './style.module.css'
import LocalPizzaOutlinedIcon from '@mui/icons-material/LocalPizzaOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SchoolIcon from '@mui/icons-material/School';
import PublicIcon from '@mui/icons-material/Public';
import BlurCircularRoundedIcon from '@mui/icons-material/BlurCircularRounded';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import { useNavigate } from 'react-router-dom'

export default function Container() {
  const navigate = useNavigate()
  return (
  <div>
    <div className={containerStyle.leftcontainer}>
       <h3>Foodoo</h3>
       <img className={containerStyle.foodoImage} src={profileImage} alt="profileImage"/>
       <h4>Vladimar Kozslov</h4>
       <p>chef de partie</p>
      <button className={containerStyle.inline}>
         <img className={containerStyle.inlineIcon} src={profileImage} alt="profileImage"/>
         <p className={containerStyle.inlinetxt}>37</p>
      </button>

   <div className={containerStyle.alltypes}>
       <div className={containerStyle.types}>
        <LocalPizzaOutlinedIcon />
        <a href="dummy">
         <span>Recipes</span>
        </a>
       </div>

       <div className={containerStyle.types}>
        <FavoriteIcon />
       <span>Favourites</span>
       </div>

       <div className={containerStyle.types}>
        <SchoolIcon />
       <span>Courses</span>
       </div>

       <div className={containerStyle.types}>
        <PublicIcon />
       <span>Community</span>
       </div>

   </div>
      <div className={containerStyle.spanimages}> 
       <img className={containerStyle.spanimage1} src={soupImage} alt="soupImage"/>
       <img className={containerStyle.spanimage2} src={soupImage} alt="soupImage"/>
       <img className={containerStyle.spanimage3} src={soupImage} alt="soupImage"/>
       <BlurCircularRoundedIcon />
       <p>Create team and <br /> take parts in TV shows</p>
      </div>   
    </div>

    <div className={containerStyle.search}>
      <SearchIcon />
      <span>
         <input type="text" placeholder='Enter your search request...'/>
      </span>
    </div>

    <div className={containerStyle.premium}>
      <SettingsIcon />
      <button onClick={() => navigate('/dummy')} className={containerStyle.preButton}>Go to Premium</button>
    </div>
 
    <div className={containerStyle.logoHead}>
     <img className={containerStyle.tawaImage} src={tawaImage} alt="tawaImage"/>
     <div className={containerStyle.logoTitles}>
      <h1>Only the best recipes!</h1>
      <p>Today's new recipes for you</p>
     </div>
    </div>

     <div className={containerStyle.veticalShow}>
      <div>
       <h1>168</h1>
       <p>Tutorials</p>
      </div>
        <hr />
       <div>
       <h1>304</h1>
       <p>Recipes</p>
       </div>
     </div>

     <div className={containerStyle.whole}>
    <div className={containerStyle.parent}>
    <div className={containerStyle.child}>
    <img className={containerStyle.image} src={soupImage} alt="soupImage"/>
      <h3>Meals</h3>
    </div>
    <div className={containerStyle.child}>
    <img className={containerStyle.image} src={soupImage} alt="soupImage"/>
      <h3>Jira rice</h3>
    </div>
    </div>
    
    <div className={containerStyle.parent}>
    <div className={containerStyle.child}>
    <img className={containerStyle.image} src={soupImage} alt="soupImage"/>
      <h3>Sauce</h3>
    </div>

    <div className={containerStyle.child}>
    <img className={containerStyle.image} src={soupImage} alt="soupImage"/>
      <h3>Noodles Soup</h3>
    </div>
    </div>
    </div>

    <div className={containerStyle.whole}>
    <div className={containerStyle.parent}>
    <div className={containerStyle.child}>
    <img className={containerStyle.image} src={soupImage} alt="soupImage"/>
      <h3>Ghee rice</h3>
    </div>
    <div className={containerStyle.child}>
    <img className={containerStyle.image} src={soupImage} alt="soupImage"/>
      <h3>Egg rice</h3>
    </div>
    </div>
    
    <div className={containerStyle.parent}>
    <div className={containerStyle.child}>
    <img className={containerStyle.image} src={soupImage} alt="soupImage"/>
      <h3>Veg curry</h3>
    </div>

    <div className={containerStyle.child}>
    <img className={containerStyle.image} src={soupImage} alt="soupImage"/>
      <h3>Chicken curry</h3>
    </div>
    </div>
    </div>

  </div>
  )
}
