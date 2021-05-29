import React, { useState, useRef } from "react";
import {
  Button,
  FormControl,
  FormHelperText,
  Icon,
  Input,
  TextField,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

const CompoundForm = ({ onSubmit }) => {
  const [cmpd, setCmpd] = useState("");
  const [error, setError] = useState("");

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (cmpd.length === 0 || cmpd[0] === cmpd[0].toUpperCase()) {
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
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          endIcon={<SendIcon />}
        >
          OK
        </Button>
      </form>
    </div>
  );
};

export default CompoundForm;
