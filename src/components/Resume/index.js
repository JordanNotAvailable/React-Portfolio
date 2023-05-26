import React from "react";
import myResume from "../../assets/resume/Jordan-Software-Resume-2.pdf";
function Resume(props) {
  return (
    <div>
      <iframe
        id="fred"
        title="PDF in an i-Frame"
        src={myResume}
        frameborder="1"
        scrolling="auto"
        height="1100"
        width="100%"
      ></iframe>
    </div>
  );
}

export default Resume;