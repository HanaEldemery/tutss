import React, { Component } from "react";
import { MedicalSuppliesList } from "../lists/MedicalSuppliesList";
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
    const matchedItem = MedicalSuppliesList.find((item) => item.id === theKey);
    const { errorMessage, showTransportationSelection } = this.state;

    return (
      <div className="popupBackground_MedicalPopup">
      <div className="popupContainer_MedicalPopup">
        <div className="popupBody">
            <h1>{matchedItem.name}</h1>
            <p>Medical Supply Type: {matchedItem.type}</p>
            <p>Medical Supply Use: {matchedItem.use}</p>
            <p>Image: </p>
            <img src={matchedItem.image} alt="Medical Supply" />
            <p>Medical Supply Quantity: {matchedItem.quantity}</p>
            <input
              id="quantity-id"
              type="text"
              placeholder="Enter quantity (1-3)"
              value={this.state.quantity}
              onChange={this.handleQuantityChange}
            />
            {errorMessage && <p className="error">{errorMessage}</p>}
          </div> 
          <div className="footer_clothesPopup">
            <button className="detailButton_clothesPopup" onClick={() => closePopup(false)}>Hide Details</button>
            <button className="detailButton_clothesPopup" onClick={this.handleDonate}>Donate Now</button>
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
