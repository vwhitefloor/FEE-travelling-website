import "../CSS/Header.css";
import { header } from "../Components/header";
import HeaderCard from "../Cards/HeaderCard";
import { instagram, facebook, twitter, youtube, google } from "../assets";

export default function Header() {
  return (
    <>
      <header>
        <div className="socialIcons">
          <ul>
            <li>
              <a href="https://www.instagram.com" target="_blank"><img src={instagram} alt="" /></a>
            </li>
            <li>
              <a href="https://www.facebook.com" target="_blank"><img src={facebook} alt="" /></a>
            </li>
            <li>
              <a href="https://www.twitter.com" target="_blank"><img src={twitter} alt="" /></a>
            </li>
            <li>
              <a href="https://www.youtube.com" target="_blank"><img src={youtube} alt="" /></a>
            </li>
            <li>
              <a href="https://www.google.com" target="_blank"><img src={google} alt="" /></a>
            </li>
          </ul>
        </div>
        <div className="icons">
          <div>
            <h1>TravelerBies</h1>
          </div>
          <div className="links">
            <ul>
              <li><a href="#TopSocialMedia">Home</a></li>
              <li><a href="#page1">Features</a></li>
              <li><a href="#page2">Travel</a></li>
              <li><a href="#page3">LifeStyle</a></li>
              <li><a href="#footer">ContactUs</a></li>
            </ul>
          </div>
        </div>
        <div className="TopSocialMedia" id="TopSocialMedia">
          {header.map((item, index) => (
            <HeaderCard
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
              commentIcon={item.commentIcon}
              comment={item.comment}
              dateIcon={item.dateIcon}
              date={item.date}
            />
          ))}
        </div>
      </header>
    </>
  );
}
