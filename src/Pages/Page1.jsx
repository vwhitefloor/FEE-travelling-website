import "../CSS/Page1.css";
import ColumnCard from "../Cards/ColumnCard";
import { column } from "../Components/column";
import PostsCard from "../Cards/PostsCard";
import { posts } from "../Components/posts";
import {
  comment,
  date,
  landscape,
  banner,
  facebook,
  twitter,
  youtube,
} from "../assets";
import { latest } from "../Components/latest";
import LatestCard from "../Cards/LatestCard";

export default function Page1() {
  return (
    <>
      <div className="page1" id="page1">
        <div className="col-1">
          <div className="posts">
            <img src={landscape} alt="" />
            <div className="postsContent">
              <h1>Lifestyle</h1>
              <h2>Lorem ipsum is simply dummy Text of the printing</h2>
              <div>
                <ul>
                  <li>
                    <img src={comment} alt="" />2 Comments
                  </li>
                  <li>
                    <img src={date} alt="" />
                    July 11th, 2016
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>....</div>
          <div className="TopSocialMedia">
            {posts.map((item, index) => (
              <PostsCard
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
          <div className="column" style={{ color: "black" }}>
            {column.map((item, index) => (
              <ColumnCard
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
        </div>
        <div className="col-2">
          <div>
            <img src={banner} alt="" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "25px",
              color: "black",
            }}
          >
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
          <div className="social-Icons" style={{ color: "black" }}>
            <div className="facebook">
              <img src={facebook} alt="" />
              <h1>FaceBook</h1>
            </div>
            <div className="twitter">
              <img src={twitter} alt="" />
              <h1>Twitter</h1>
            </div>
            <div className="linkedin">
              <img src={youtube} alt="" />
              <h1>LinkedIn</h1>
            </div>
            <div className="youtube">
              <img src={youtube} alt="" />
              <h1>YouTube</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
