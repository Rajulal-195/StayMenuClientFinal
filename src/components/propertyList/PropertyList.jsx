import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

const PropertyList = () => {
  const { data, loading, error } = useFetch("https://stayback1.onrender.com/api/hotels/countByType?types=hotel,appartment,resort,villa,cabin");

  const images = [
    "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/494645152.jpg?k=170cc885bf697a38c05290f44eef807b7fc323a426e56c7bcf404723a171e619&o=&hp=1",
  ];

  console.log("count by type ",data)
  return (
    <div className="pList ">
      <div className="row">

          {data &&
            images.map((img,i) => (
              <div className="pListItem" key={i} data-aos="zoom-in-up">
                <img
                  src={img}
                  alt=""
                  className="pListImg"
                  />
                <div className="pListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>{data[i]?.count} {data[i]?.type}</h2>
                </div>
              </div>
            ))}
     
      </div>
    </div>
  );
};

export default PropertyList;
