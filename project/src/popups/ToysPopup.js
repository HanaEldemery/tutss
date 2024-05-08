import React, { Component } from "react";
import { ToysList } from "../lists/ToysList";

class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: "", // State for quantity input
      errorMessage: "", // State for error message
    };
  }

  handleQuantityChange = (event) => {
    const value = event.target.value;
    this.setState({ quantity: value });
  };

  handleDonate = () => {
    const { quantity } = this.state;
    // Check if the input is a valid number within the range 1-3
    if (quantity >= 1 && quantity <= 3) {
      // Redirect to the donate page
      window.location.href = "/TransportationSelection";
    } else {
      // Set error message if input is not valid
      this.setState({ errorMessage: "Please enter a number between 1 and 3." });
    }
  };

  render() {
    const { closePopup, theKey } = this.props;
    const matchedItem = ToysList.find((item) => item.id === theKey);
    const { errorMessage } = this.state;

    return (
      <div className="popupBackground">
        <div className="popupContainer">
          <div className="title"></div>
          <div className="body">
            <h1>{matchedItem.name}</h1>
            <p>Toy Type: {matchedItem.type}</p>
            <p>Toy Age: {matchedItem.age}</p>
            <p>Toy Gender: {matchedItem.gender}</p>
            <p>Toy Category: {matchedItem.category}</p>
            <p>Image: </p>
            <img src={matchedItem.picture} alt="Toy" />
            <p>Toy Quantity: {matchedItem.quantity}</p>
            {matchedItem.googleMarker}
            <input
              id="quantity-id"
              type="text"
              placeholder="Enter quantity (1-3)"
              value={this.state.quantity}
              onChange={this.handleQuantityChange}
            />
            {errorMessage && <p className="error">{errorMessage}</p>}
          </div>
          <div className="footer">
            <button onClick={() => closePopup(false)}>Hide Details</button>
            <button onClick={this.handleDonate}>Donate Now</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;
