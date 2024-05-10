import React, { useState, useEffect } from "react";
import { data } from "../Data/regorgname";
import { ToastContainer, toast } from "react-toastify";

function PopupREQ({ closePopup, organisation }) {
  const [selectedOption, setSelectedOption] = useState("");
  const [textInput1, setTextInput1] = useState("");
  const [textInput2, setTextInput2] = useState("");
  const [textInput3, setTextInput3] = useState("");
  const [textInput4, setTextInput4] = useState("");
  const [textInput5, setTextInput5] = useState("");
  const [error, setError] = useState("");
  const [notification, setNotification] = useState(false);

  const notify = () => {
    let fieldsToCheck = [];
    switch (selectedOption) {
      case "Supplies":
        fieldsToCheck = [textInput1, textInput2, textInput3];
        break;
      case "Furniture":
        fieldsToCheck = [textInput1, textInput2, textInput3, textInput4];
        break;
      case "Probono Teaching Lesson":
        fieldsToCheck = [textInput1, textInput2];
        break;
      case "Toys":
        fieldsToCheck = [textInput1, textInput2, textInput3];
        break;
      case "Clothes":
        fieldsToCheck = [
          textInput1,
          textInput2,
          textInput3,
          textInput4,
          textInput5,
        ];
        break;
      case "Dry Food":
        fieldsToCheck = [textInput1, textInput2, textInput3, textInput4];
        break;
      case "Machines":
        fieldsToCheck = [textInput1, textInput2, textInput3];
        break;
      case "Probono Doctor Visit":
        fieldsToCheck = [textInput1, textInput2];
        break;
      default:
        break;
    }

    const isEmptyField = fieldsToCheck.some((field) => !field.trim());
    if (!selectedOption || selectedOption.trim() === "" || isEmptyField) {
      setError("Please fill in all fields");
    } else {
      setError("");
      toast("Request placed!", {
        autoClose: false,
        onClose: () => setNotification(true), // Pass a function to onClose
      });
    }
  };

  useEffect(() => {
    if (notification) {
      toast("Request Accepted!", {
        autoClose: false,
      });
      setNotification(false);
    }
  }, [notification]);

  return (
    <div className="popupBackground">
      <div className="popupContainer">
        <div className="title">
          <h1>Make a Request</h1>
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
                        <option value="Probono Teaching Lesson">
                          Probono Teaching Lesson
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
                              <input
                                type="text"
                                placeholder="Type"
                                value={textInput1}
                                onChange={(e) => setTextInput1(e.target.value)}
                              />
                              <input
                                type="text"
                                placeholder="Material"
                                value={textInput2}
                                onChange={(e) => setTextInput2(e.target.value)}
                              />
                              <input
                                type="text"
                                placeholder="Extra information"
                                value={textInput3}
                                onChange={(e) => setTextInput3(e.target.value)}
                              />
                            </div>
                          )}
                          {selectedOption === "Furniture" && (
                            <div className="textInputContainer">
                              <input
                                type="text"
                                placeholder="Type"
                                value={textInput1}
                                onChange={(e) => setTextInput1(e.target.value)}
                              />
                              <input
                                type="text"
                                placeholder="Material"
                                value={textInput2}
                                onChange={(e) => setTextInput2(e.target.value)}
                              />
                              <input
                                type="text"
                                placeholder="Model"
                                value={textInput3}
                                onChange={(e) => setTextInput3(e.target.value)}
                              />
                              <input
                                type="text"
                                placeholder="Extra information"
                                value={textInput4}
                                onChange={(e) => setTextInput4(e.target.value)}
                              />
                            </div>
                          )}
                          {selectedOption === "Probono Teaching Lesson" && (
                            <div className="textInputContainer">
                              <input
                                type="text"
                                placeholder="Subject"
                                value={textInput1}
                                onChange={(e) => setTextInput1(e.target.value)}
                              />
                              <input
                                type="text"
                                placeholder="Extra information"
                                value={textInput2}
                                onChange={(e) => setTextInput2(e.target.value)}
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
                              <input
                                type="text"
                                placeholder="Gender"
                                value={textInput1}
                                onChange={(e) => setTextInput1(e.target.value)}
                              />
                              <input
                                type="text"
                                placeholder="Color"
                                value={textInput2}
                                onChange={(e) => setTextInput2(e.target.value)}
                              />
                              <input
                                type="text"
                                placeholder="Extra information"
                                value={textInput3}
                                onChange={(e) => setTextInput3(e.target.value)}
                              />
                            </div>
                          )}
                          {selectedOption === "Clothes" && (
                            <div className="textInputContainer">
                              <input
                                type="text"
                                placeholder="Gender"
                                value={textInput1}
                                onChange={(e) => setTextInput1(e.target.value)}
                              />
                              <input
                                type="text"
                                placeholder="Material"
                                value={textInput2}
                                onChange={(e) => setTextInput2(e.target.value)}
                              />
                              <input
                                type="text"
                                placeholder="Size"
                                value={textInput3}
                                onChange={(e) => setTextInput3(e.target.value)}
                              />
                              <input
                                type="text"
                                placeholder="Color"
                                value={textInput4}
                                onChange={(e) => setTextInput4(e.target.value)}
                              />
                              <input
                                type="text"
                                placeholder="Extra information"
                                value={textInput5}
                                onChange={(e) => setTextInput5(e.target.value)}
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
                              <input
                                type="text"
                                placeholder="Type"
                                value={textInput1}
                                onChange={(e) => setTextInput1(e.target.value)}
                              />
                              <input
                                type="text"
                                placeholder="Material"
                                value={textInput2}
                                onChange={(e) => setTextInput2(e.target.value)}
                              />
                              <input
                                type="text"
                                placeholder="Extra information"
                                value={textInput3}
                                onChange={(e) => setTextInput3(e.target.value)}
                              />
                            </div>
                          )}
                          {selectedOption === "Machines" && (
                            <div className="textInputContainer">
                              <input
                                type="text"
                                placeholder="Model"
                                value={textInput1}
                                onChange={(e) => setTextInput1(e.target.value)}
                              />
                              <input
                                type="text"
                                placeholder="Capacity"
                                value={textInput2}
                                onChange={(e) => setTextInput2(e.target.value)}
                              />
                              <input
                                type="text"
                                placeholder="Extra information"
                                value={textInput3}
                                onChange={(e) => setTextInput3(e.target.value)}
                              />
                            </div>
                          )}
                          {selectedOption === "Probono Doctor Visit" && (
                            <div className="textInputContainer">
                              <input
                                type="text"
                                placeholder="Speciality"
                                value={textInput1}
                                onChange={(e) => setTextInput1(e.target.value)}
                              />
                              <input
                                type="text"
                                placeholder="Extra information"
                                value={textInput2}
                                onChange={(e) => setTextInput2(e.target.value)}
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
                              <input
                                type="text"
                                placeholder="Gender"
                                value={textInput1}
                                onChange={(e) => setTextInput1(e.target.value)}
                              />
                              <input
                                type="text"
                                placeholder="Color"
                                value={textInput2}
                                onChange={(e) => setTextInput2(e.target.value)}
                              />
                              <input
                                type="text"
                                placeholder="Extra information"
                                value={textInput3}
                                onChange={(e) => setTextInput3(e.target.value)}
                              />
                            </div>
                          )}
                          {selectedOption === "Dry Food" && (
                            <div className="textInputContainer">
                              <input
                                type="text"
                                placeholder="Brand"
                                value={textInput1}
                                onChange={(e) => setTextInput1(e.target.value)}
                              />
                              <input
                                type="text"
                                placeholder="Size of Bag"
                                value={textInput2}
                                onChange={(e) => setTextInput2(e.target.value)}
                              />
                              <input
                                type="text"
                                placeholder="Type of Animal"
                                value={textInput3}
                                onChange={(e) => setTextInput3(e.target.value)}
                              />
                              <input
                                type="text"
                                placeholder="Extra information"
                                value={textInput4}
                                onChange={(e) => setTextInput4(e.target.value)}
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
          <button onClick={() => closePopup(false)}>Back</button>
          <button onClick={notify}>Submit</button>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default PopupREQ;
