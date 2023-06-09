import React, { useState } from "react";

function Textform(props) {
  const [text, settext] = useState(" ");
  const [heading, setheading] = useState(null);
  const [isvisible, isinvisible] = useState(false);

  const togglevisibility = () => {
    isinvisible(!isvisible);
  };
  const uppercaseOnClick = () => {
    let newtext = text.toUpperCase();
    settext(newtext);
    setheading("UPPERCASE");
    props.showalert("successfully converted to UPPERCASE", "success");
  };
  const lowercaseOnClick = () => {
    let newtext = text.toLowerCase();
    settext(newtext);
    setheading("lowercase");
    props.showalert("successfully converted to lowercase", "success");
  };
  const toTitleCase = () => {
    let newtext = text
      .split(" ")
      .map((w) => w[0].toUpperCase() + w.substring(1).toLowerCase())
      .join(" ");
    settext(newtext);
    setheading("TitleCase");
    props.showalert("successfully converted to Title Case", "success");
  };
  const toSnakeCase = () => {
    let newtext = text.split(" ").join("_");
    settext(newtext);
    setheading("Snake_Case");
    props.showalert("successfully converted to snake_case", "success");
  };
  const toCamelCase = () => {
    let words = text.split(" ");
    let camelCase = words[0].toLowerCase();
    for (let i = 1; i < words.length; i++) {
      let titleCase =
        words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
      camelCase += " " + titleCase;
    }
    setheading("camelCase");
    settext(camelCase);
    props.showalert("successfully converted to camelCase", "success");
  };
  const toHypenCase = () => {
    let newtext = text.split(" ").join("-");
    settext(newtext);
    setheading("Hypen_case");
    props.showalert("successfully converted to hypen_case", "success");
  };
  const toDotCase = () => {
    let newtext = text.split(" ").join(".");
    settext(newtext);
    setheading("dot.case");
    props.showalert("successfully converted to dot.case", "success");
  };
  const handleOnChange = (event) => {
    settext(event.target.value);
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    settext(newText.join(" "));
    setheading("handle Extra Spaces");
    props.showalert("Extra spaces removed!", "success");
  };
  return (
    <>
      <div className="container my-3">
        {/* title */}
        <div className="d-flex flex-row mb-3 justify-content-center">
          <div className="p-2  ">
            <h3 className="line-decor">________________________</h3>
          </div>
          <div className="p-2">
            <h3 className="title">Enter Text Below</h3>
          </div>
          <div className="p-2">
            <h3 className="line-decor">________________________</h3>
          </div>
        </div>
        <div className="mb-3">
          {/* textarea */}
          <textarea
            className="form-control  "
            id="exampleFormControlTextarea1"
            rows="8"
            onChange={handleOnChange}
            style={{
              backgroundColor:
                props.navcolor === "dark" ? "rgba(46, 54, 70, 1)" : "white",
              color: props.navcolor === "dark" ? "white" : "#042743",
            }}
          ></textarea>
          {/* uppercase button */}
          <button
            className="btn btn-primary mx-2 my-3"
            onClick={() => {
              uppercaseOnClick();
              togglevisibility();
            }}
          >
            UPPERCASE
          </button>
          {/* lowercase button */}
          <button
            className="btn btn-primary mx-2 my-3"
            onClick={() => {
              togglevisibility();
              lowercaseOnClick();
            }}
          >
            lowercase
          </button>
          {/* titlecase button */}
          <button
            className="btn btn-primary mx-2 my-3"
            onClick={() => {
              toTitleCase();
              togglevisibility();
            }}
          >
            Title Case
          </button>
          {/* Start Case button */}
          <button
            className="btn btn-primary mx-2 my-3"
            onClick={() => {
              toTitleCase();
              togglevisibility();
            }}
          >
            Start Case
          </button>
          {/* snake_case button */}
          <button
            className="btn btn-primary mx-2 my-3"
            onClick={() => {
              toSnakeCase();
              togglevisibility();
            }}
          >
            snake_case
          </button>
          <button
            className="btn btn-primary mx-2 my-3"
            onClick={() => {
              toCamelCase();
              togglevisibility();
            }}
          >
            camel Case
          </button>
          <button
            className="btn btn-primary mx-2 my-3"
            onClick={() => {
              toHypenCase();
              togglevisibility();
            }}
          >
            hypen-case
          </button>
          <button
            className="btn btn-primary mx-2 my-3"
            onClick={() => {
              toDotCase();
              togglevisibility();
            }}
          >
            dot.case
          </button>
          <button
            className="btn btn-primary mx-2 my-3"
            onClick={() => {
              handleExtraSpaces();
              togglevisibility();
            }}
          >
            handle Extra Spaces
          </button>

          {isvisible && (
            <div className="container my-5">
              {heading ? (
                <h3 className="text-center  title">{heading}</h3>
              ) : null}
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                value={text}
                rows="4"
                style={{
                  backgroundColor:
                    props.navcolor === "dark" ? "rgba(46, 54, 70, 1)" : "white",
                  color: props.navcolor === "dark" ? "white" : "#042743",
                }}
              ></textarea>
              <div
                className="d-flex flex-row- bd-highlight"
                style={{
                  color: props.navcolor === "dark" ? "white" : "#042743",
                  fontSize: "10px",
                }}
              >
                <div className="p-2 bd-highlight">
                  <p>number of letters with spaces : {text.length}</p>
                </div>
                <div className="p-2 bd-highlight">
                  {" "}
                  number of letters without space:
                  {text.replace(/\s/g, "").length}
                </div>
                <div className="p-2 bd-highlight">
                  number of words :{text.split(/\s+/).length}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Textform;
