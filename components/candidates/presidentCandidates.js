import { Grid, Typography } from "@material-ui/core";
import React from "react";

import CandidateCard from "./candidateCard";

const PresidentCandidates = () => {
    return (
        <Grid
            item
            container
            justifyContent="center"
            alignItems="center"
            style={{ backgroundColor: "#112C78", borderRadius: "30px" }}
            spacing={2}
        >
            <Grid item xs={12}>
                <Typography variant="h4" style={{ color: "#fff" }}>
                    Presidential Candidates
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

export default PresidentCandidates;
