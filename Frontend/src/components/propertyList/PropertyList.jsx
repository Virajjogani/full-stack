import axios from "axios";
import { useEffect, useState } from "react";
import "./propertyList.css";

const PropertyList = () => {
  const [HotelData, setHotelData] = useState([]);
  const [ApartmenttData, setApartmentlData] = useState([]);
  const [ResortData, setResortData] = useState([]);
  const [VillasData, setVillasData] = useState([]);
  const [CabinData, setCabinData] = useState([]);

  const gettypedata = () => {
    axios
      .get("https://hotelbookingapp-api.herokuapp.com/api/hotel/countbytype")
      .then((res) => {
        setHotelData(res.data[0].count);
        setApartmentlData(res.data[1].count);
        setResortData(res.data[2].count);
        setVillasData(res.data[3].count);
        setCabinData(res.data[4].count);
        console.log(
          "🚀 ~ file: PropertyList.jsx ~ line 12 ~ axios.get ~ res",
          res.data[0].count
        );
      });
  };
  useEffect(() => {
    gettypedata();
  }, []);

  return (
    <>
      <div className="pList">
        <div className="pListItem">
          <img
            src="https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o="
            alt=""
            className="pListImg"
          />
          <div className="pListTitles">
            <h1>Hotels</h1>
            <h2>{HotelData} Hotels</h2>
          </div>
        </div>
        <div className="pListItem">
          <img
            src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg"
            alt=""
            className="pListImg"
          />
          <div className="pListTitles">
            <h1>Apartments</h1>
            <h2>{ApartmenttData} Apartments</h2>
          </div>
        </div>
        <div className="pListItem">
          <img
            src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg"
            alt=""
            className="pListImg"
          />
          <div className="pListTitles">
            <h1>Resorts</h1>
            <h2>{ResortData} Resorts</h2>
          </div>
        </div>
        <div className="pListItem">
          <img
            src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg"
            alt=""
            className="pListImg"
          />
          <div className="pListTitles">
            <h1>Villas</h1>
            <h2>{VillasData} Villas</h2>
          </div>
        </div>
        <div className="pListItem">
          <img
            src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg"
            alt=""
            className="pListImg"
          />
          <div className="pListTitles">
            <h1>Cabins</h1>
            <h2>{CabinData} Cabins</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyList;
