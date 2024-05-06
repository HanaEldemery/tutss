import React, { useState } from "react";
import { data } from "../Data/regorgname";
import "../styles/PopupREQ.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function PopupEDIT({ closePopup, organisation, requestType }) {
  const [selectedOption, setSelectedOption] = useState({});
  const [error, setError] = useState("");

  const notify = () => {
    const isEmpty = Object.values(selectedOption).some(
      (value) => value.trim() === ""
    );
    if (isEmpty) {
      setError("Please fill in all fields");
    } else {
      toast("Request updated!", { autoClose: false });
      setError("");
      //closePopup(false);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSelectedOption((prevSelected) => ({
      ...prevSelected,
      [name]: value,
    }));
  };

  return (
    <div className="popupBackground">
      <div className="popupContainer">
        <div className="title">
          <h1>MAKE A REQUEST</h1>
        </div>

        <div className="body">
          {data.map((item, index) => (
            <div key={index}>
              {item.organisation === organisation && (
                <div className="requestType">
                  <h3>{item.type} Request</h3>
                  {item.type === "School" && requestType === "Supplies" && (
                    <div className="textInputContainer">
                      <input
                        type="text"
                        placeholder="Type"
                        name="type"
                        value={selectedOption.type || ""}
                        onChange={handleInputChange}
                      />
                      <input
                        type="text"
                        placeholder="Material"
                        name="material"
                        value={selectedOption.material || ""}
                        onChange={handleInputChange}
                      />
                      <input
                        type="text"
                        placeholder="Extra information"
                        name="extra"
                        value={selectedOption.extra || ""}
                        onChange={handleInputChange}
                      />
                    </div>
                  )}

                  {item.type === "Hospital" && requestType === "Machines" && (
                    <div className="textInputContainer">
                      <input
                        type="text"
                        placeholder="Model"
                        name="model"
                        value={selectedOption.model || ""}
                        onChange={handleInputChange}
                      />
                      <input
                        type="text"
                        placeholder="Capacity"
                        name="capacity"
                        value={selectedOption.capacity || ""}
                        onChange={handleInputChange}
                      />
                      <input
                        type="text"
                        placeholder="Extra information"
                        name="extra"
                        value={selectedOption.extra || ""}
                        onChange={handleInputChange}
                      />
                    </div>
                  )}

                  {item.type === "Orphanage" &&
                  item.organisation === organisation ? (
                    <>
                      {requestType === "Toys" && (
                        <div className="textInputContainer">
                          <input type="text" placeholder="Gender" />
                          <input type="text" placeholder="Color" />
                          <input type="text" placeholder="Extra information" />
                        </div>
                      )}
                      {requestType === "Clothes" && (
                        <div className="textInputContainer">
                          <input type="text" placeholder="Gender" />
                          <input type="text" placeholder="Material" />
                          <input type="text" placeholder="Size" />
                          <input type="text" placeholder="Color" />
                          <input type="text" placeholder="Extra information" />
                        </div>
                      )}
                    </>
                  ) : null}

                  {item.type === "Vet" && item.organisation === organisation ? (
                    <>
                      {requestType === "Toys" && (
                        <div className="textInputContainer">
                          <input type="text" placeholder="Gender" />
                          <input type="text" placeholder="Color" />
                          <input type="text" placeholder="Extra information" />
                        </div>
                      )}
                      {requestType === "Dry Food" && (
                        <div className="textInputContainer">
                          <input type="text" placeholder="Brand" />
                          <input type="text" placeholder="Size of Bag" />
                          <input type="text" placeholder="Type of Animal" />
                          <input type="text" placeholder="Extra information" />
                        </div>
                      )}
                    </>
                  ) : null}
                </div>
              )}
            </div>
          ))}
        </div>
        {error && <p className="error">{error}</p>}
        <div className="footer">
          <button onClick={() => closePopup(false)}>BACK</button>
          <button onClick={notify}>SUBMIT</button>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default PopupEDIT;
