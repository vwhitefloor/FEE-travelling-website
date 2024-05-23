const HeaderCard = ({
  image,
  title,
  description,
  commentIcon,
  comment,
  dateIcon,
  date,
}) => {
  return (
    <>
      <div className="posts">
        <img src={image} alt="" />
        <div className="postsContent">
          <h1>{title}</h1>
          <h2>{description}</h2>
          <div>
            <ul>
              <li>
                <img src={commentIcon} alt="" />
                {comment}
              </li>
              <li>
                <img src={dateIcon} alt="" />
                {date}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderCard;
