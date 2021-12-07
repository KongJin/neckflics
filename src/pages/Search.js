/*eslink=false */
import { Search } from "../components/Search";
import { useState, useEffect } from "react";
import { movieApi, tvApi } from "../api";
import { Grid } from "../components/Grid";
import { Loading } from "../components/Loading";

export default () => {
  const [search, setSearch] = useState("");
  const [Movie, setMovie] = useState([]);
  const [Tv, setTv] = useState([]);

  async function handle() {
    setMovie(await movieApi.search(search));
    setTv(await tvApi.search(search));
  }

  return (
    <>
      <Search search={setSearch} handle={handle} />
      {
        <>
          <Grid data={Movie} title="Movie" pt="/movie/" />
          <Grid data={Tv} title="Tv" pt="/tv/" />
        </>
      }
    </>
  );
};
