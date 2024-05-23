const HightlightsCard = ({
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
      <div className="highlights">
        <div className="highlightsImage">
          <img src={image} alt="" />
          <h1>{title}</h1>
        </div>
        <div className="highlightsContent">
          <h2>{description}</h2>
          <div className="highlightsIcon">
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

export default HightlightsCard;
