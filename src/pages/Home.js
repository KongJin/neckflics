import { useState, useEffect } from "react";
import { movieApi } from "../api";
import { Grid } from "../components/Grid";

const Home = () => {
  const [popular, setPopular] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [nowplaying, setPlaying] = useState([]);
  const [toprated, setToprated] = useState([]);
  useEffect(async () => {
    let populars = await movieApi.popular();
    let upcomings = await movieApi.upComming();
    let nowPlayings = await movieApi.nowPlaying();
    let topRateds = await movieApi.topRated();
    setPopular(populars);
    setUpcoming(upcomings);
    setPlaying(nowPlayings);
    setToprated(topRateds);
  }, []);

  return (
    <>
      <Grid data={popular} title="Popular"></Grid>
      <Grid data={upcoming} title="Upcoming"></Grid>
      <Grid data={nowplaying} title="Now Playing"></Grid>
      <Grid data={toprated} title="Top Rated"></Grid>
    </>
  );
};

export default Home;
