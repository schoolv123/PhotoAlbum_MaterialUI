import React from "react";
import { Typography as Text, Container, Grid, Button } from "@material-ui/core";

const Heading = () => {
  return (
    <>
      <Container maxWidth="sm">
        <div className="header">
          <Text variant="h2" color="textPrimary" align="center" gutterBottom>
            Photo Album
          </Text>
        </div>
        <Text variant="h6" align="center" color="textSecondary" paragraph>
          This just a text what i want to display.
        </Text>

        <div>
          <Grid container spacing={3} justify="center">
            <Grid item>
              <Button variant="contained" color="primary">
                Get MY Pictures
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="secondary">
                Post Your Picture
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
};

export default Heading;
