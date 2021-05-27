import Head from "next/head";
import React, { useState } from "react";
import styles from "../styles/Equations.module.css";

import CompoundForm from "../components/CompoundForm";
import {
  Button,
  Card,
  CardContent,
  Paper,
  Typography,
} from "@material-ui/core";
import CompoundsList from "../components/CompoundsList";
import { useDispatch, useSelector } from "react-redux";
import { NEW_PROD, NEW_RCTN } from "../reducers/equation";

function Equation() {
  const { reactants, products } = useSelector((state) => state.equation);
  const dispatch = useDispatch();

  return (
    <div>
      <Head>
        <title>Balancing Equations</title>
      </Head>
      <main className={styles.container}>
        <Card className={styles.card}>
          <CardContent>
            <Typography variant="h5">Add a Reactant</Typography>
            <CompoundForm
              onSubmit={(cmpd) => {
                dispatch({ type: NEW_RCTN, payload: cmpd });
              }}
            />
          </CardContent>
        </Card>

        <Card className={styles.card}>
          <CardContent>
            <Typography variant="h5">Add a Product</Typography>
            <CompoundForm
              onSubmit={(cmpd) => {
                dispatch({ type: NEW_PROD, payload: cmpd });
              }}
            />
          </CardContent>
        </Card>

        <Paper className={styles.output}>
          <Typography>Initial Equation:</Typography>
          <CompoundsList list={reactants} />
          <CompoundsList list={products} />
        </Paper>
      </main>
    </div>
  );
}

export default Equation;
