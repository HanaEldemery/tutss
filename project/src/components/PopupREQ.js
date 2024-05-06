import React, { useState, useEffect } from "react";
import { data } from "../Data/regorgname";
import "../styles/PopupREQ.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function PopupREQ({ closePopup, organisation }) {
  const [selectedOption, setSelectedOption] = useState("");
  const [textInput1, setTextInput1] = useState("");
  const [textInput2, setTextInput2] = useState("");
  const [textInput3, setTextInput3] = useState("");
  const [error, setError] = useState("");
  const [notification, setNotification] = useState(false);

  const notify = () => {
    if (
      !selectedOption ||
      selectedOption.trim() === "" ||
      !textInput1 ||
      textInput1.trim() === "" ||
      !textInput2 ||
      textInput2.trim() === "" ||
      !textInput3 ||
      textInput3.trim() === ""
    ) {
      setError("Please fill in all fields");
    } else {
      setError("");
      toast("Request placed!", {
        onClose: () => setNotification(true),
        autoClose: false,
      });
    }
  };

  useEffect(() => {
    if (notification) {
      toast(" Request Accepted! ", {
        autoClose: false,
      });
      setNotification(false);
    }
  }, [notification]);

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
                  <select
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    className="drop-down"
                  >
                    <option value="">Select an option</option>
                    {item.type === "School" && (
                      <>
                        <option value="Supplies">Supplies</option>
                        <option value="Furniture">Furniture</option>
                        <option value="Probono Teaching Lession">
                          Probono Teaching Lession
                        </option>
                      </>
                    )}
                    {item.type === "Orphanage" && (
                      <>
                        <option value="Toys">Toys</option>
                        <option value="Clothes">Clothes</option>
                      </>
                    )}
                    {item.type === "Vet" && (
                      <>
                        <option value="Toys">Toys</option>
                        <option value="Dry Food">Dry Food</option>
                      </>
                    )}
                    {item.type === "Hospital" && (
                      <>
                        <option value="Supplies">Supplies</option>
                        <option value="Machines">Machines</option>
                        <option value="Probono Doctor Visit">
                          Probono Doctor Visit
                        </option>
                      </>
                    )}
                  </select>

                  {selectedOption && (
                    <div className="textInputContainer">
                      {item.type === "School" &&
                      item.organisation === organisation ? (
                        <>
                          {selectedOption === "Supplies" && (
                            <div className="textInputContainer">
                              <input type="text" placeholder="Type" />
                              <input type="text" placeholder="Material" />
                              <input
                                type="text"
                                placeholder="Extra information"
                              />
                            </div>
                          )}
                          {selectedOption === "Furniture" && (
                            <div className="textInputContainer">
                              <input type="text" placeholder="Type" />
                              <input type="text" placeholder="Material" />
                              <input type="text" placeholder="Model" />
                              <input
                                type="text"
                                placeholder="Extra information"
                              />
                            </div>
                          )}
                          {selectedOption === "Probono Teaching Lession" && (
                            <div className="textInputContainer">
                              <input type="text" placeholder="Subject" />
                              <input
                                type="text"
                                placeholder="Extra information"
                              />
                            </div>
                          )}
                        </>
                      ) : null}

                      {item.type === "Orphanage" &&
                      item.organisation === organisation ? (
                        <>
                          {selectedOption === "Toys" && (
                            <div className="textInputContainer">
                              <input type="text" placeholder="Gender" />
                              <input type="text" placeholder="Color" />
                              <input
                                type="text"
                                placeholder="Extra information"
                              />
                            </div>
                          )}
                          {selectedOption === "Clothes" && (
                            <div className="textInputContainer">
                              <input type="text" placeholder="Gender" />
                              <input type="text" placeholder="Material" />
                              <input type="text" placeholder="Size" />
                              <input type="text" placeholder="Color" />
                              <input
                                type="text"
                                placeholder="Extra information"
                              />
                            </div>
                          )}
                        </>
                      ) : null}

                      {item.type === "Hospital" &&
                      item.organisation === organisation ? (
                        <>
                          {selectedOption === "Supplies" && (
                            <div className="textInputContainer">
                              <input type="text" placeholder="Type" />
                              <input type="text" placeholder="Material" />
                              <input
                                type="text"
                                placeholder="Extra information"
                              />
                            </div>
                          )}
                          {selectedOption === "Machines" && (
                            <div className="textInputContainer">
                              <input type="text" placeholder="Model" />
                              <input type="text" placeholder="Capacity" />
                              <input
                                type="text"
                                placeholder="Extra information"
                              />
                            </div>
                          )}
                          {selectedOption === "Probono Doctor Visit" && (
                            <div className="textInputContainer">
                              <input type="text" placeholder="Speciality" />
                              <input
                                type="text"
                                placeholder="Extra information"
                              />
                            </div>
                          )}
                        </>
                      ) : null}

                      {item.type === "Vet" &&
                      item.organisation === organisation ? (
                        <>
                          {selectedOption === "Toys" && (
                            <div className="textInputContainer">
                              <input type="text" placeholder="Gender" />
                              <input type="text" placeholder="Color" />
                              <input
                                type="text"
                                placeholder="Extra information"
                              />
                            </div>
                          )}
                          {selectedOption === "Dry Food" && (
                            <div className="textInputContainer">
                              <input type="text" placeholder="Brand" />
                              <input type="text" placeholder="Size of Bag" />
                              <input type="text" placeholder="Type of Animal" />
                              <input
                                type="text"
                                placeholder="Extra information"
                              />
                            </div>
                          )}
                        </>
                      ) : null}
                    </div>
                  )}
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

export default PopupREQ;
