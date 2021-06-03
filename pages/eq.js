import Head from "next/head";
import React, { useState } from "react";
import styles from "../styles/Equations.module.css";

import CompoundForm from "../components/CompoundForm";
import {
  Button,
  Card,
  CardContent,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";

import AvTimerIcon from "@material-ui/icons/AvTimer";
import AlarmOnIcon from "@material-ui/icons/AlarmOn";

import CompoundsList from "../components/CompoundsList";
import { useDispatch, useSelector } from "react-redux";
import { NEW_PROD, NEW_RCTN } from "../reducers/equation";

// import { balance } from "../actions/equation";

function Equation() {
  const { reactants, products } = useSelector((state) => state.equation);
  const [balanced, setBalanced] = useState("");
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

//         <Paper className={styles.output}>
//           <Typography variant="h5">Compounds Entered</Typography>
//           <Grid style={{ display: "flex", flexWrap: "wrap", margin: "auto" }}>
//             <Paper style={{ margin: "10px", padding: "10px" }}>
//               <Typography variant="h6">Reactants</Typography>
//               <CompoundsList Icon={AvTimerIcon} list={reactants} />
//             </Paper>
//             <Paper style={{ margin: "10px", padding: "10px" }}>
//               <Typography variant="h6">Products</Typography>
//               <CompoundsList Icon={AlarmOnIcon} list={products} />
//             </Paper>
//             <Button
//               fullWidth
//               variant="contained"
//               onClick={() => setBalanced(balance(reactants, products))}
//             >
//               Balance
//             </Button>
//           </Grid>
//           <Typography></Typography>
//         </Paper>
      </main>
    </div>
  );
}

export default Equation;
