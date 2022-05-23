import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RooomContext } from "../context";
import StyledHero from "../components/StyledHero";
function SingleRoom() {
  const param = useParams();
  const slug = param.slug;
  const contextType = useContext(RooomContext);
  const { getRooms } = contextType;
  let room = getRooms(slug);
  if (!room) {
    return (
      <div className="error">
        <h3>no such room could be found ... </h3>
        <Link to="/rooms" className="btn-primary">
          back to rooms
        </Link>
      </div>
    );
  }
  const {
    name,
    description,
    capacity,
    size,
    price,
    extras,
    breakfast,
    pets,
    images,
  } = room;
  const [mainImg, ...defaultImg] = images;
  return (
    <React.Fragment>
      <StyledHero img={images[0]}>
        <Banner title={`${name} room`}>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </Banner>
      </StyledHero>
      <section className="single-room">
        <div className="single-room-images">
          {defaultImg.map((img, index) => (
            <img key={index} src={img} alt={name} />
          ))}
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3>details</h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>info</h3>
            <h6>price: ${price}</h6>
            <h6>size: {size} SQFT</h6>
            <h6>
              max capacity :{" "}
              {capacity > 1 ? `${capacity} people` : `${capacity} person`}
            </h6>
            <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
            <h6>{breakfast && "free breakfast included"}</h6>
          </article>
        </div>
      </section>
      <section className="room-extras">
        <h6>
          extras
          <ul className="extras">
            {extras.map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul>
        </h6>
      </section>
    </React.Fragment>
  );
}

export default SingleRoom;
