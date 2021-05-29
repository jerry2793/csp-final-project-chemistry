import Head from "next/head";
import React, { useState } from "react";
import CompoundForm from "../components/CompoundForm";
import { parseCompound } from "../actions/equation";
import { Paper } from "@material-ui/core";

const Parse = () => {
  const [parse, setParse] = useState([]);

  return (
    <div>
      <Head>
        <title>Parsing Compounds</title>
      </Head>
      <main>
        <CompoundForm
          onSubmit={(cmpd) => {
            setParse(parseCompound(cmpd));
          }}
        />
        <Paper>
          Parsed:
          <span>{JSON.stringify(parse)}</span>
        </Paper>
      </main>
    </div>
  );
};

export default Parse;
