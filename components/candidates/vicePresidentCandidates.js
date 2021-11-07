import { Grid, Typography } from "@material-ui/core";
import React from "react";

import CandidateCard from "./candidateCard";

const VicePresidentCandidates = () => {
    return (
        <Grid
            item
            container
            justifyContent="center"
            alignItems="center"
            style={{ backgroundColor: "#FBBA26", borderRadius: "30px" }}
            spacing={2}
        >
            <Grid item xs={12}>
                <Typography variant="h4" style={{ color: "#fff" }}>
                    Vice Presidential Candidates
                </Typography>
            </Grid>
            <CandidateCard />
            <CandidateCard />
            <CandidateCard />
            <CandidateCard />
            <CandidateCard />
            <CandidateCard />
        </Grid>
    );
};

export default VicePresidentCandidates;
