import React, { useState, useEffect } from "react";
import { data } from "../Data/regorgname";
import { ToastContainer, toast } from "react-toastify";

function PopupREQ({ closePopup, organisation, requestType }) {
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
    switch (requestType) {
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
    if (!requestType || requestType.trim() === "" || isEmptyField) {
      setError("Please fill in all fields");
    } else {
      setError("");
      toast("Request updated!", {
        autoClose: false,
      });
    }
  };

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
                  {requestType === "Supplies" && (
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

                  {requestType === "Furniture" && (
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

                  {requestType === "Probono Teaching Lesson" && (
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

                  {/* Add conditions for Orphanage */}
                  {item.type === "Orphanage" &&
                  item.organisation === organisation ? (
                    <>
                      {requestType === "Toys" && (
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
                      {requestType === "Clothes" && (
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

                  {/* Add conditions for Hospital */}
                  {item.type === "Hospital" &&
                  item.organisation === organisation ? (
                    <>
                      {requestType === "Supplies" && (
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
                      {requestType === "Machines" && (
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
                      {requestType === "Probono Doctor Visit" && (
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

                  {/* Add conditions for Vet */}
                  {item.type === "Vet" && item.organisation === organisation ? (
                    <>
                      {requestType === "Toys" && (
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
                      {requestType === "Dry Food" && (
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
