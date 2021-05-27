import React, { useEffect } from "react";
import {
  Button,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@material-ui/core";
import styles from "../styles/Equations.module.css";

const renderEquationText = (compoundsList) => {
  let result = "None";
  if (compoundsList.length !== 0) {
    result = "";
    let cmpd;
    for (var i = 0; i < compoundsList.length - 1; i++) {
      cmpd = compoundsList[i];
      result += cmpd.cfc + cmpd.cmpd;
      result += " + ";
    }
    cmpd = compoundsList[compoundsList.length];
    result += cmpd.cfc + cmpd.cmpd;
  }
  return result;
};

const BalancedEquationOutput = ({ list }) => {
  console.log("balanced eq output rendered");
  return (
    <List key={list}>
      {list.map((cmpd) => {
        return (
          <ListItem>
            <ListItemText primary={cmpd} />
          </ListItem>
        );
      })}
    </List>
  );
};

export default BalancedEquationOutput;
