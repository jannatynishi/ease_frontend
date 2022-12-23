import DotLoader from "react-spinners/DotLoader";
export default function ActivateForm({ type, header, text, loading }) {
  return (
    <div className="blur">
      <div className="popup">
        <div
          className={`popup_header ${
            type === "success" ? "success_text" : "error_text"
          }`}
        >
          {header}
        </div>
        <div className="popup_message">{text}</div>
        <DotLoader className="dot_loader" color="#1C882D" size={30} loading={loading} />
      </div>
    </div>
  );
}
