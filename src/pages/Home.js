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
      <Grid data={popular} title="Popular" pt="/movie/"></Grid>
      <Grid data={upcoming} title="Upcoming" pt="/movie/"></Grid>
      <Grid data={nowplaying} title="Now Playing" pt="/movie/"></Grid>
      <Grid data={toprated} title="Top Rated" pt="/movie/"></Grid>
    </>
  );
};

export default Home;
