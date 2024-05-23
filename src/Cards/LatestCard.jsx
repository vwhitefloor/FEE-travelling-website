const LatestCard = ({
  image,
  description,
  commentIcon,
  comment,
  dateIcon,
  date,
}) => {
  return (
    <>
      <div className="popular">
        <img src={image} alt="" />
        <div className="popularContent">
          <h2>{description}</h2>
          <div className="popularIcons">
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

export default LatestCard;
