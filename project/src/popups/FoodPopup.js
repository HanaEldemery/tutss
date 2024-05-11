import React, { Component } from "react";
import { FoodList } from "../lists/FoodList";
import TransportationSelection from "../pages/TransportationSelection";

class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: "", // State for quantity input
      errorMessage: "", // State for error message
      showTransportationSelection: false, // State to control rendering TransportationSelection
    };
  }

  handleQuantityChange = (event) => {
    const value = event.target.value;
    this.setState({ quantity: value });
  };

  handleDonate = () => {
    const { quantity } = this.state;
    // Check if the input is not empty and is a valid number within the range 1-3
    if (
      quantity.trim() !== "" &&
      !isNaN(quantity) &&
      quantity >= 1 &&
      quantity <= 3
    ) {
      // Set state to render TransportationSelection component
      this.setState({ showTransportationSelection: true, errorMessage: "" });
    } else {
      // Set error message if input is empty or not valid
      this.setState({
        errorMessage: "Please enter a valid number between 1 and 3.",
        showTransportationSelection: false,
      });
    }
  };

  render() {
    const { closePopup, theKey } = this.props;
    const matchedItem = FoodList.find((item) => item.id === theKey);
    const { errorMessage, showTransportationSelection } = this.state;

    return (
      <div className="popupBackground">
        <div className="popupContainer">
          <div className="title"></div>
          <div className="body">
            <h1>{matchedItem.name}</h1>
            <p>Food Type: {matchedItem.type}</p>
            <p>Food Quantity: {matchedItem.quantity}</p>
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
            <button className="detail-button" onClick={() => closePopup(false)}>Hide Details</button>
            <button className="detail-button" onClick={this.handleDonate}>Donate Now</button>
          </div>
        </div>
        {showTransportationSelection && (
          <TransportationSelection
            closePopup={() =>
              this.setState({ showTransportationSelection: false })
            }
          />
        )}
      </div>
    );
  }
}

export default Popup;
