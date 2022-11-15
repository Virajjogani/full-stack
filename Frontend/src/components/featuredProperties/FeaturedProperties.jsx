import axios from "axios";
import { useEffect, useState } from "react";
import "./featuredProperties.css";
import { AiFillStar } from "react-icons/ai";

const FeaturedProperties = () => {
  const [FeaturedData, setFeaturedData] = useState({});
  console.log(
    "🚀 ~ file: FeaturedProperties.jsx ~ line 7 ~ FeaturedProperties ~ FeaturedData",
    FeaturedData.hotels
  );

  const getfeaturedData = () => {
    axios
      .get(
        "https://hotelbookingapp-api.herokuapp.com/api/hotel/getallhotels?feature=true&limit=4"
      )
      .then((res) => {
        setFeaturedData(res.data);
      });
  };

  useEffect(() => {
    getfeaturedData();
  }, []);

  return (
    <>
      <div className="fp">
        {FeaturedData?.hotels?.map((item) => {
          return (
            <div className="fpItem">
              <img src={item.images} alt="" className="fpImg" />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">
                Starting from {item.cheapestprice}
              </span>
              <div className="fpRating">
                <button>
                  {item.rating} <AiFillStar />
                </button>
                {/* <span>Exceptional</span> */}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FeaturedProperties;
