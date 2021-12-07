import { useState, useEffect } from "react";
import { tvApi } from "../api";
import { Grid } from "../components/Grid";

const Tv = () => {
  const [popular, setPopular] = useState([]);
  const [airingtoday, setPlaying] = useState([]);
  const [toprated, setToprated] = useState([]);
  useEffect(async () => {
    let populars = await tvApi.popular();
    let airingToday = await tvApi.airingToday();
    let topRateds = await tvApi.topRated();
    setPopular(populars);
    setPlaying(airingToday);
    setToprated(topRateds);
  }, []);

  return (
    <>
      <Grid data={popular} title="Popular" pt="/tv/"></Grid>
      <Grid data={airingtoday} title="airingtoday" pt="/tv/"></Grid>
      <Grid data={toprated} title="Top Rated" pt="/tv/"></Grid>
    </>
  );
};

export default Tv;
