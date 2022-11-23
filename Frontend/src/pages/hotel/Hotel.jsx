import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [SinglehotelData, setSinglehotelData] = useState();
  const [images, setImages] = useState();
  const [open, setOpen] = useState(false);

  const id = useParams();
  console.log("🚀 ~ file: Hotel.jsx ~ line 22 ~ Hotel ~ id", id.id);

  const getsinglehotel = () => {
    axios
      .get(
        `https://hotelbookingapp-api.herokuapp.com/api/hotel/gethotel/${id.id}`
      )
      .then((res) => {
        setSinglehotelData(res.data.hotels);
        setImages(res.data.hotels.images);
      });
  };
  useEffect(() => {
    getsinglehotel();
  }, []);

 
  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };
  
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              {/* <img src={photos[slideNumber].src} alt="" className="sliderImg" /> */}
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
      
              <div className="hotelWrapper">
                <button className="bookNow">Reserve or Book Now!</button>
                <h1 className="hotelTitle">{SinglehotelData?.title}</h1>
                <div className="hotelAddress">
                  <FontAwesomeIcon icon={faLocationDot} />
                  <span>{SinglehotelData?.address}</span>
                </div>
                <span className="hotelDistance">{SinglehotelData?.distance}</span>
                <span className="hotelPriceHighlight">
                  Book a stay over ₹{SinglehotelData?.cheapestprice} at this property and
                  get a free airport taxi
                </span>
                <div className="hotelImages">
                    {images?.map((photo, i) => (
                      <div className="hotelImgWrapper" key={i}>
                        <img
                          onClick={() => handleOpen(i)}
                          src={`https://hotelbookingapp-api.herokuapp.com/image/${photo} `}
                          alt=""
                          className="hotelImg"
                        />
                      {  console.log(photo,"23456789o0p-[01234567890-")}
                      </div>
                    ))}
                  </div>
                <div className="hotelDetails">
                  <div className="hotelDetailsTexts">
                    <h1 className="hotelTitle">{SinglehotelData?.name}</h1>
                    <p className="hotelDesc">Lo{SinglehotelData?.description}</p>
                  </div>
                  <div className="hotelDetailsPrice">
                    <h1>Perfect for a night stay!</h1>
                    <span>
                      Located in the real heart of Krakow, this property has an
                      excellent location score of 9.8!
                    </span>
                    <h2>
                      <b>₹ {SinglehotelData?.cheapestprice}</b>
                    </h2>
                    <button>Reserve or Book Now!</button>
                  </div>
                </div>
              </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
