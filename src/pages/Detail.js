import styled from "styled-components";
import { movieApi, tvApi } from "../api";
import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
const Container = styled.div``;
const ImgPoster = styled.img``;
const Rthing = styled.div``;
const Title = styled.h1``;
const Ul = styled.ul``;
const Genres = styled.ul``;
const Sites = styled.ul``;
const List = styled.li``;

const Detail = () => {
  const [Data, setData] = useState([]);
  const params = useParams();
  const location = useLocation().pathname;
  const itmo = location.indexOf("movie");

  useEffect(async () => {
    async function a() {
      if (itmo > 0) {
        setData(await movieApi.detail(params.id));
      } else {
        setData(await tvApi.detail(params.id));
      }
    }
    a();
  }, []);

  const {
    genres,
    backdrop_path,
    poster_path,
    release_date,
    title,
    spoken_languages,
    production_companies,
    production_countries,
    homepage,
    id,
    imdb_id,
  } = Data;
  return (
    <>
      <Container>
        <ImgPoster src={`http://image.tmdb.org/t/p/original/${poster_path}`} />
        <Rthing></Rthing>
      </Container>
    </>
  );
};

export default Detail;
