import React, { useState, useRef } from "react";
import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  TextField,
} from "@material-ui/core";

const CompoundForm = ({ onSubmit }) => {
  const [cmpd, setCmpd] = useState("");
  const [error, setError] = useState("");

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (cmpd[0] === cmpd[0].toUpperCase()) {
            onSubmit(cmpd);
            setCmpd("");
            setError("");
          } else {
            setError("Must be a valid compound!");
          }
        }}
      >
        {/* <TextField
          ref={cfcRef}
          onChange={(e) => {
            cmpd.cfc = e.target.value;
            setCmpd(cmpd);
          }}
          variant="filled"
          label="Coefficient"
        /> */}
        <TextField
          value={cmpd}
          error={error}
          helperText={error}
          onChange={(e) => {
            setCmpd(e.target.value);
          }}
          variant="outlined"
          label="Compound"
        />
        <Button type="submit" color="primary" size="large" variant="contained">
          Add
        </Button>
      </form>
    </div>
  );
};

export default CompoundForm;
