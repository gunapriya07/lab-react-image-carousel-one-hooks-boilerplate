import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

class Carousel extends Component {
  constructor() {
    super();
    this.state = {
      currImageIndex: 0,
    };
  }

  prev = () => {
    if (this.state.currImageIndex > 0) {
      this.setState({ currImageIndex: this.state.currImageIndex - 1 });
    } else {
      this.setState({ currImageIndex: images.length - 1 });
    }
  };

  next = () => {
    if (this.state.currImageIndex < images.length - 1) {
      this.setState({ currImageIndex: this.state.currImageIndex + 1 });
    } else {
      this.setState({ currImageIndex: 0 });
    }
  };

  render() {
    return (
      <>
        <div className="main-container">
          <div className="btn-container">
            <div className="left-btn" onClick={this.prev}>
              <ArrowBackIosIcon style={{ fill: "white" }} />
            </div>
            <div className="right-btn" onClick={this.next}>
              <ArrowForwardIosIcon style={{ fill: "white" }} />
            </div>
          </div>
          <div>
            {/* Add any additional elements you want here */}
          </div>
          <div className="image-span-container">
            <span className="text title">
              {images[this.state.currImageIndex].title}
            </span>
            <img
              src={images[this.state.currImageIndex].img}
              alt="img"
            />
            <span className="text subtitle">
              {images[this.state.currImageIndex].subtitle}
            </span>
          </div>
        </div>
      </>
    );
  }
}

export default Carousel;
