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

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(cmpd);
          setCmpd("");
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
          onChange={(e) => {
            setCmpd(e.target.value);
          }}
          variant="filled"
          label="Compound"
        />
        <Button type="submit" color="primary" size="large" variant="contained">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default CompoundForm;
