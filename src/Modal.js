import React from "react";
import ReactDOM from "react-dom";
const MODAL_STYLES = {
  positon: "fixed",
  top: "50%",
  left: "50%",
  // backgroundColor: 'rgb(34,34,34)',
  backgroundColor: "black",
  transform: "translate(5%, 5%)",
  zIndex: 1000,
  height: "90%",
  width: "90%",
  overflow: "scroll",
};
const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0,.7)",

  zIndex: 1000,
};

export default function Modal({ children, onClose }) {
  return ReactDOM.createPortal(
    <>
      <div style={OVERLAY_STYLES}>
        <div style={MODAL_STYLES}>
          <button
            className="btn bg-danger fs-4"
            style={{ marginLeft: "90%", marginTop: "5px" }}
            onClick={onClose}>
            {" "}
            X{" "}
          </button>
          {children}
        </div>
      </div>
    </>,
    document.getElementById("cart-root")
  );
}
