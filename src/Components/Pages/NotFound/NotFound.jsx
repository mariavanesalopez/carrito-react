import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <img
        src="https://s3-alpha.figma.com/hub/file/659761187/24172a31-719c-46fd-849e-83dac1bc44cf-cover.png"
        style={{ width: "100%", height: "40rem" }}
      />
      <Link to="/">
        {" "}
        <button>Volver a la página principal</button>
      </Link>
    </div>
  );
};

export default NotFound;
