import React from "react";
import {
  Typography as Text,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Button
} from "@material-ui/core";
import { Edit, Visibility as View } from "@material-ui/icons";

const ImageCard = (props) => {
  const value = props.value;
  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Card className="card-style">
          <CardMedia
            className="cardImage"
            image={value.imgsrc}
            title={value.title}
          />
          <CardContent>
            <Text variant="h5">{value.name}</Text>
            <Text variant="subtitle1">{value.title}</Text>
            <div className="card-button">
              <a target="_0" href={value.btnl}>
                <Button size="small" variant="outlined" color="secondary">
                  <View /> &nbsp; View
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};
export default ImageCard;
