import { useEffect, useState } from "react";
import { Grid, Box } from "@material-ui/core";
import axios from "axios";
import Tours from "./components/Tours";
import Loader from "./UI/Loader";

function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);

    try {
      const api = "https://course-api.com/react-tours-project";

      const { data } = await axios.get(api);

      setLoading(false);
      setTours(data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  return (
    <>
      <Box textAlign="center" fontWeight="bold" fontSize="h2.fontSize" my={3}>
        Tours
      </Box>
      <Grid container direction="row" justify="center">
        {loading ? <Loader /> : <Tours tours={tours} removeTour={removeTour} />}
      </Grid>
    </>
  );
}

export default App;
