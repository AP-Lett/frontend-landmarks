import "./Modal.css";

export function Modal({ children, show, onClose }) {
  if (show) {
    return (
      <div className="modal-background">
        <section className="modal-main">
          {/* Renders any content passed between the Modal component's opening and closing tags */}
          {children}
          <button className="close" type="button" onClick={onClose}>
            &#x2715;
          </button>
        </section>
      </div>
    );
  }
}