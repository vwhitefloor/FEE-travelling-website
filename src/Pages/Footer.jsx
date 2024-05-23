import "../CSS/Footer.css";
import GalleryCard from "../Cards/GalleryCard";
import { gallery } from "../Components/gallery";
import PopularCard from "../Cards/PopularCard";
import { mostpopular } from "../Components/mostpopular";
import { latest } from "../Components/latest";
import LatestCard from "../Cards/LatestCard";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer" id="footer">
          <div className="mostPopular">
            <div>
              <h1>Most Popular</h1>
            </div>
            {mostpopular.map((item, index) => (
              <PopularCard
                key={index}
                image={item.image}
                description={item.description}
                commentIcon={item.commentIcon}
                comment={item.comment}
                dateIcon={item.dateIcon}
                date={item.date}
              />
            ))}
          </div>
          <div className="galleryContent">
            <div>
              <h1>Gallery</h1>
            </div>
            <div className="gallery">
              {gallery.map((item, index) => (
                <GalleryCard key={index} image={item.image} />
              ))}
            </div>
          </div>
          <div className="mostPopular">
            <div>
              <h1>Latest</h1>
            </div>
            {latest.map((item, index) => (
              <LatestCard
                key={index}
                image={item.image}
                description={item.description}
                commentIcon={item.commentIcon}
                comment={item.comment}
                dateIcon={item.dateIcon}
                date={item.date}
              />
            ))}
          </div>
        </div>
        <div>
          <h3>&copy; 2016 All Rights Reserved</h3>
        </div>
      </footer>
    </>
  );
}
