import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  Chip,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 550,
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
  media: {
    height: 220,
  },
}));

const Tour = ({ id, image, name, info, price, removeTour }) => {
  const classes = useStyles();

  const [readMore, setReadMore] = useState(false);

  return (
    <Box my={4}>
      <Card className={classes.root} m={3}>
        <CardActionArea>
          <CardMedia className={classes.media} image={image} title={name} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {readMore ? info : `${info.substring(0, 200)}...`}
              <Button
                size="small"
                color="primary"
                onClick={() => setReadMore(!readMore)}
              >
                {readMore ? "show less" : "  read more"}
              </Button>
            </Typography>
            <Box my={3}>
              <Chip
                icon={<MonetizationOnIcon />}
                label={price}
                color="primary"
              />
            </Box>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button color="secondary" size="small" onClick={() => removeTour(id)}>
            Not interested?
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Tour;
