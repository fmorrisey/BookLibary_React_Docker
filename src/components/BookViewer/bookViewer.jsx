import React from "react";

export default function bookViewer(props) {
  return (
    <div className="row row-spacer">
      <div className="col-md-4">
        <button onClick={() => props.previousBook()}>Previous Book</button>
      </div>
      <div className="col-md-4">
        <h1>{props.book.title}</h1>
        <h4>{props.book.title}</h4>
      </div>
      <div className="col-md-4">
        <button onClick={() => props.nextBook()}>Next Book</button>
      </div>
    </div>
  );
}
