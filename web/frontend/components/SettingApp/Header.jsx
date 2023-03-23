import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import PrimaryButton from "../../shared/Components/PrimaryButton";
import SecondaryButton from "../../shared/Components/SecondaryButton";
import styled from "styled-components";
// import { useUpdateSettingsMutation } from "../store/api";

export default function Header() {
  //   const [updateSettings, { isLoading, data }] = useUpdateSettingsMutation();
  return (
    <div className="mt-12">
      {/* Hero header box */}
      <StyledHeader style={{ borderRadius: "20px" }}>
        <Grid container alignItems="center">
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            className="p-8 md:p-16 lg:p-20 py-12"
          >
            <div>
              <Typography
                variant="h3"
                color="textPrimary"
                // className="text-4xl md:text-2xl lg:text-5xl"
              >
                Stop Spy
              </Typography>
              <Typography
                className="mt-16 mb-28 md:text-16 pt-4 pb-7"
                variant="body1"
              >
                Enable app embedding in your theme
              </Typography>
              <PrimaryButton
                color="primary"
                variant="contained"
                size="large"
                className="px-24 py-12 rounded-full"
              >
                Enable App
              </PrimaryButton>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={8}
            className="flex justify-end  right-image"
          >
            <img src="/assets/home/header.png" alt="header" />
          </Grid>
        </Grid>
      </StyledHeader>

      {/* bottom bar */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-8 mb-20">
        <Typography variant="subtitle2" className="text-16" color="textPrimary">
          {" "}
          Need help installing app?{" "}
        </Typography>
        <div className="flex mt-10 md:mt-0 items-center space-x-16">
          <SecondaryButton
            color="secondary"
            variant="outlined"
            size="large"
            className="px-3 py-6 font-800"
          >
            Get Help
          </SecondaryButton>
          <SecondaryButton
            color="secondary"
            variant="text"
            size="large"
            className="px-24 py-12 font-800 underline"
          >
            Watch Tutorial
          </SecondaryButton>
        </div>
      </div>
    </div>
  );
}

const StyledHeader = styled(Paper)`
  // min-height: 306px;

  .right-image {
    overflow: hidden;
    display: flex;
    justify-content: center;
    border-radius: 0px 20px 20px 0;
    img {
      max-width: unset;
      max-width: 150%;
      height: 100%;
    }
  }
`;
