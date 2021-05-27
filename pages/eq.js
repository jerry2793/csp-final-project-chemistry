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

function Equation() {
  const [reactants, setRctn] = useState([]);
  const [products, setProd] = useState([]);
  const equation = {
    reactants: [],
    products: [],
  };

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
                equation.reactants.push(cmpd);
                setRctn(equation.reactants);
                console.log(reactants);
              }}
            />
          </CardContent>
        </Card>

        <Card className={styles.card}>
          <CardContent>
            <Typography variant="h5">Add a Product</Typography>
            <CompoundForm
              onSubmit={(cmpd) => {
                equation.products.push(cmpd);
                setProd(equation.products);
              }}
            />
          </CardContent>
        </Card>

        <Paper className={styles.output}>
          <Typography>Initial Equation:</Typography>
          <CompoundsList list={reactants} />
        </Paper>
      </main>
    </div>
  );
}

export default Equation;
