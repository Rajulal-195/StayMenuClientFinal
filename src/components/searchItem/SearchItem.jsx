import { Link } from "react-router-dom";
import "./searchItem.css";
const SearchItem = ({ item }) => {

  return (<>
    <div className="card expand-sm">
      <img src={item.photos[0]} className="card-img-top" height={250} alt="..." />
      <div className="card-body ">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">{item.distance}m form Center</p>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
        <p className="card-own text-success"><span className='oldpr'>
          <span className="siPrice"> ₹ {item.cheapestPrice}</span>&emsp;
          <span className="siTaxOp">Includes taxes and fees</span> </span> </p>
        <p className="card-own text-success">{item.ratting}</p>
        <p className="card-text text text-primary"><small className="text-muted"></small></p>
        <Link to={`/hotels/${item._id}`}>
          <button className="siCheckButton">See availability</button>
        </Link>
      </div>
    </div>
  </>
  );
};

export default SearchItem;
