import React, { Component } from "react";
import { ClothesList } from "../helpers/ClothesList";
import TransportationSelection from "../pages/TransportationSelection";

class ClothesPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: "",
      errorMessage: "",
      showTransportationSelection: false,
    };
  }

  handleQuantityChange = (event) => {
    const value = event.target.value;
    this.setState({ quantity: value });
  };

  handleDonate = () => {
    const { quantity } = this.state;
    if (
      quantity.trim() !== "" &&
      !isNaN(quantity) &&
      quantity >= 1 &&
      quantity <= 3
    ) {
      this.setState({ showTransportationSelection: true, errorMessage: "" });
    } else {
      this.setState({
        errorMessage: "Please enter a valid number between 1 and 3.",
        showTransportationSelection: false,
      });
    }
  };

  render() {
    const { closePopup, theKey } = this.props;
    const matchedItem = ClothesList.find((item) => item.id === theKey);
    const { errorMessage, showTransportationSelection } = this.state;

    return showTransportationSelection ? (
      <div className="popup-overlay">
        <div className="popup-content">
          <TransportationSelection
            closePopup={() =>
              this.setState({ showTransportationSelection: false })
            }
          />
        </div>
      </div>
    ) : (
      <div className="popupBackground_MedicalPopup">
        <div className="popupContainer_MedicalPopup">
          <div className="popupBody">
            <h1>{matchedItem.name}</h1>
            <p>Clothes Type NOW: {matchedItem.type}</p>
            <p>Name: {matchedItem.name}</p>
            <p>Type: {matchedItem.type}</p>
            <p>Age: {matchedItem.Age}</p>
            <p>Gender: {matchedItem.Gender}</p>
            {matchedItem.Season && <p>Season: {matchedItem.Season}</p>}
            <p>Material: {matchedItem.Material}</p>
            <img src={matchedItem.picture} alt="Clothes" />
            <p>Quantity: {matchedItem.Quantity}</p>
            {matchedItem.googleMarker}
            <input
              id="quantity-id"
              type="text"
              placeholder="Enter quantity (1-3)"
              value={this.state.quantity}
              onChange={this.handleQuantityChange}
              className="input"
            />
            {errorMessage && <p className="error">{errorMessage}</p>}
          </div>
          <div className="footer_clothesPopup">
            <button
              className="detailButton_clothesPopup"
              onClick={() => closePopup(false)}
            >
              Hide Details
            </button>
            <button
              className="detailButton_clothesPopup"
              onClick={this.handleDonate}
            >
              Donate
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ClothesPopup;
