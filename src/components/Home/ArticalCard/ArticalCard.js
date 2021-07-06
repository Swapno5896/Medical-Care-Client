import React from "react";

const ArticalCard = (props) => {
  const { img, title, description } = props.ar;
  return (
    <div className="card pe-3  m-4 ">
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <button>Read more</button>{" "}
      </div>
    </div>
  );
};

export default ArticalCard;
