import React from "react";
import "./download-button.css";

const DownloadButton = () => {
  const handleDownload = () => {
    const pdfUrl = "Anantya-Events-Timeline.pdf"; // Update this path
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Anantya_EventFlow_Timeline.pdf"; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="download-container">
    <p 
    className="glitch" 
    data-text="Download the Detailed Timeline now!"
    style={{ 
    fontSize: "23px", 
    fontWeight: "bold", 
    textAlign: "left", 
    background: "transparent", 
    margin: "0", 
    whiteSpace: "nowrap", // Ensures text remains in a single line
    marginLeft: "10%"
    }}
    >
  Download the Detailed Timeline now!
</p>

      <button className="button" onClick={handleDownload}>
        <span className="button_lg">
          <span className="button_sl"></span>
          <span className="button_text">Download</span>
        </span>
      </button>
    </div>
  );
};

export default DownloadButton;
