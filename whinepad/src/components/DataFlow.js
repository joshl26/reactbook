import { useState, useReducer, useRef } from "react";
import PropTypes from "prop-types";

import Header from "./Header";
import Body from "./Body";
import Dialog from "./Dialog";
import Excel from "./Dialog";
import Form from "./Form";
import clone from "../module/clone";

function commitToStorage(data) {
  localStorage.setItem("data", JSON.stringify(data));
}

function reducer(data, action) {
  if (action.type === "save") {
    data = clone(data);
    data.unshift(action.payload.formatData);
    commitToStorage(data);
    return data;
  }
  if (action.type === "excelchange") {
    commitToStorage(action.payload.updatedData);
    return action.payload.updatedData;
  }
}

function DataFlow({ schema, initialData }) {
  const [data, dispatch] = useReducer(reducer, initialData);
  const [addNew, setAddNew] = useState(false);
  const [filter, setFilter] = useState(null);

  const form = useRef(null);

  function saveNew(action) {
    /* TODO */
  }
}

DataFlow.propTypes = {
  schema: PropTypes.object.isRequired,
  initialData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DataFlow;
