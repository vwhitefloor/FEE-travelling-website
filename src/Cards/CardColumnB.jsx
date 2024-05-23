const CardColumnB = ({
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
      <div className="columnCard">
        <img src={image} alt="" />
        <div className="columnCardContent">
          <h1>{title}</h1>
          <h2>{description}</h2>
          <div className="columnCardIcons">
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

export default CardColumnB;
