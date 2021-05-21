import React from "react";
import "./styles.css";
import TopBar from "./TopBar";
import Heading from "./Heading";
import ImageCard from "./ImageCard";
import { Typography as Text, Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import data from "./imageData";

const useStyles = makeStyles((theme) => {});

export default function App() {
  const classes = useStyles();
  /* const getData = async () => {
    const api = "https://8wip9haymt.api.quickmocker.com/";
    try {
      const response = await fetch(api);
      const array = await response.json();
      setCard(array.animeList);
      console.log(card);
    } catch (err) {
      console.lCardContent
    }
  };
  useEffect(() => {
    getData();
  }, []);
*/
  return (
    <>
      <TopBar />

      <main>
        <Heading />
        <Container maxWidth="md">
          <div className="card-container">
            <Grid container spacing={3}>
              {data.map((val, index) => {
                return <ImageCard value={val} key={index} />;
              })}
            </Grid>
          </div>
        </Container>
      </main>
    </>
  );
}
