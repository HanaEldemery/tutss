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

    return (
      <div className="popupBackground">
        <div className="popupContainer">
          <div className="title"></div>
          <div className="body">
            <h1>{matchedItem.name}</h1>
            <p>Clothes Type: {matchedItem.type}</p>
            <p>name: {matchedItem.name}</p>
            <p>type: {matchedItem.type}</p>
            <p>Age: {matchedItem.Age}</p>
            <p>Gender: {matchedItem.Gender}</p>
            {matchedItem.Season && (
              <div>
                <p>Season:{matchedItem.Season}</p>
              </div>
            )}
            <p>Material: {matchedItem.Material}</p>

            <p>Image: </p>
            <img src={matchedItem.picture} alt="Clothes" />
            <p> Quantity: {matchedItem.Quantity}</p>
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

export default ClothesPopup;
