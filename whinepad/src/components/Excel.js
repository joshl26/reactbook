import React from "react";
import PropTypes from "prop-types";
import { useState, useReducer } from "react";
import clone from "../module/clone";
import "./Excel.css";

//do the work
Excel.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string),
  initialData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
};

// const headers = ["Book", "Author", "Language", "Published", "Sales"];

// const data = [
//   ["A tale of two Cities", "Charles Dickens", "English", "1859", "200 million"],
//   [
//     "Le Petit Prince (The Little Prince)",
//     "Antoine de Saint-Exupery",
//     "French",
//     "1943",
//     "150 million",
//   ],
//   [
//     "Harry Potter and The Philosophers Stone",
//     "J. K. Rowling",
//     "English",
//     "1997",
//     "120 million",
//   ],
//   [
//     "And then There were None",
//     "Agatha Christie",
//     "English",
//     "1939",
//     "100 million",
//   ],
//   ["Dream of the Red Chamber", "Cao Xueqin", "Chinese", "1791", "100 million"],
//   ["The Hobbit", "J. R. R. Tolkien", "English", "1937", "100 million"],
// ];

function Excel({ headers, initialData }) {
  const [data, setData] = React.useState(initialData);
  const [sorting, setSorting] = React.useState({
    column: null,
    descending: false,
  });
  const [edit, setEdit] = React.useState(null);
  const [search, setSearch] = React.useState(false);
  const [preSearchData, setPreSearchData] = React.useState(null);

  function sort(e) {
    const column = e.target.cellIndex;
    const descending = sorting.column === column && !sorting.descending;

    const dataCopy = clone(data);

    dataCopy.sort((a, b) => {
      if (a[column] === b[column]) {
        return 0;
      }
      return descending
        ? a[column] < b[column]
          ? 1
          : -1
        : a[column] > b[column]
        ? 1
        : -1;
    });

    setData(dataCopy);
    setSorting({ column, descending });
  }

  function showEditor(e) {
    setEdit({
      row: parseInt(e.target.parentNode.dataset.row, 10),
      column: e.target.cellIndex,
    });
  }

  function save(e) {
    e.preventDefault();
    const input = e.target.firstChild;
    const dataCopy = clone(data);
    dataCopy[edit.row][edit.column] = input.value;
    setEdit(null);
    setData(dataCopy);
  }

  return (
    <div className="Excel">
      <table>
        <thead onClick={sort}>
          <tr>
            {headers.map((title, idx) => {
              if (sorting.column === idx) {
                title += sorting.descending ? "\u2191" : "\u2193";
              }
              return <th key={idx}>{title}</th>;
            })}
          </tr>
        </thead>
        <tbody onDoubleClick={showEditor}>
          {data.map((row, rowidx) => (
            <tr key={rowidx} data-row={rowidx}>
              {row.map((cell, columnidx) => {
                if (edit && edit.row === rowidx && edit.column === columnidx) {
                  cell = (
                    <form onSubmit={save}>
                      <input type="text" defaultValue={cell} />
                    </form>
                  );
                }
                return <td key={columnidx}>{cell}</td>;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

//export
export default Excel;
