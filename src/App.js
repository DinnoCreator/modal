import { useState } from "react";
function App() {
  const [modalIsOpen, setModal] = useState(false);

  const modalHandler = () => {
    return modalIsOpen ? setModal(false) : setModal(true);
  };

  const modal = () => {
    return modalIsOpen ? (
      <div className="fullWidth fullScreen modal">
        <div className="centerFlex fullScreen">
          <div className="bottomShadow flexchild padder">
            <div className="modal-head">
                <span className="close right" onClick={modalHandler}>close</span>
            </div>
            <div className="modal-body">
              <h3>I am a modal!</h3>
            </div>
          </div>
        </div>
      </div>
    ) : (
      ""
    );
  };
  return (
    <div className="relative">
      <div className="margAuto">
        <h1>CodingDrips React Tutorial</h1>
        <h3>Modal</h3>
        <button onClick={modalHandler} className="btnct btnct-bluey">
          Click me!
        </button>
      </div>
      {modal()}
    </div>
  );
}

export default App;
