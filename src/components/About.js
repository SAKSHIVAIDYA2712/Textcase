import React from "react";

export default function About(props) {
  return (
    <>
      <div className="container my-3">
        <div className="row">
          <div className="col-4">
            <div id="list-example" className="list-group">
              <a
                className="first-group-item list-group-item list-group-item-action"
                href="#list-item-1"
              >
                UPPERCASE
              </a>
              <a
                className="list-group-item list-group-item-action"
                href="#list-item-2"
              >
                lowercase
              </a>
              <a
                className="list-group-item list-group-item-action"
                href="#list-item-3"
              >
                Title Case
              </a>
              <a
                className="list-group-item list-group-item-action"
                href="#list-item-4"
              >
                Start Case
              </a>
              <a
                className="list-group-item list-group-item-action"
                href="#list-item-5"
              >
                snake_case
              </a>
              <a
                className="list-group-item list-group-item-action"
                href="#list-item-6"
              >
                camel Case
              </a>
              <a
                className="list-group-item list-group-item-action"
                href="#list-item-7"
              >
                hypen-case
              </a>
              <a
                className="list-group-item list-group-item-action"
                href="#list-item-7"
              >
                dot.case
              </a>
            </div>
          </div>
          <div className="col-8">
            <div
              data-bs-spy="scroll"
              data-bs-target="#list-example"
              data-bs-smooth-scroll="true"
              className="scrollspy-example"
              tabindex="0"
              style={{
                color: props.navcolor === "dark" ? "white" : "dark",
              }}
              // colort={props.colort}
            >
              <h4 id="list-item-1" className="list-heading">
                UPPERCASE
              </h4>
              <p>
                The uppercase converter typically takes input text as a string
                and applies a function to convert all lowercase characters to
                uppercase characters. The resulting output text will have all
                letters in uppercase, while any non-letter characters (such as
                punctuation marks, numbers, and spaces) remain unchanged.
              </p>
              <h4 id="list-item-2" className="list-heading">
                lowercase
              </h4>
              <p>
                The lowercase converter takes input text as a string and applies
                a function to convert all uppercase characters to lowercase
                characters. The resulting output text will have all letters in
                lowercase, while any non-letter characters (such as punctuation
                marks, numbers, and spaces) remain unchanged.
              </p>
              <h4 id="list-item-3" className="list-heading">
                Title Case
              </h4>
              <p>
                Title case is a style of capitalization where the first letter
                of each word is capitalized, while all other letters are in
                lowercase.The resulting output text will have the first letter
                of each word capitalized, while all other letters are in
                lowercase, except for certain exceptions based on the rules of
                title case formatting.
              </p>
              <h4 id="list-item-4" className="list-heading">
                Start Case
              </h4>
              <p>
                Start case is similar to title case in that the first letter of
                each word is capitalized, but it differs in that all words are
                capitalized regardless of whether they are proper nouns,
                acronyms or common nouns.The resulting output text will have the
                first letter of each word capitalized, including all common noun
              </p>
              <h4 id="list-item-5" className="list-heading">
                snake_case
              </h4>
              <p>
                The snake_case converter takes input text as a string and
                applies a function to convert the text into snake_case format.
                The resulting output text will have all words combined into a
                single word separated by underscores, and all letters in
                lowercase
              </p>
              <h4 id="list-item-6" className="list-heading">
                camel Case
              </h4>
              <p>
                Camel case is a naming convention in which words are
                concatenated together, and the first letter of each word (except
                the first one) is capitalized, creating a single word with no
                spaces or punctuation between the words. The resulting word
                looks like the humps on a camel's back, hence the name "camel
                case."
              </p>
              <h4 id="list-item-7" className="list-heading">
                hypen-case
              </h4>
              <p>
                Hyphen case is a naming convention in which words are
                concatenated together using hyphens (-) instead of spaces or
                underscores, creating a single word with each word separated by
                a hyphen. For example, my-file-name, page-header, and menu-item
                are all examples of hyphen case naming.
              </p>
              <h4 id="list-item-7" className="list-heading">
                dot.case
              </h4>
              <p>
                Dot case, also known as period case or dotted case, is a naming
                convention in which words are concatenated together using
                periods (.) instead of spaces or underscores, creating a single
                word with each word separated by a period. For example,
                index.html, main.style.css, and script.js are all examples of
                dot case naming.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
