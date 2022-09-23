import { useParams } from "react-router-dom";

function Detail() {
  let movieData = {};
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    movieData = json.data.movie;
    console.log(movieData);
  };
  getMovie();
  return (
    <div>
      <h1>{`Detail + ${id}`}</h1>
      <ul>
        <li>{movieData.title}</li>
        <li>{movieData.rate}</li>
      </ul>
    </div>
  );
}
export default Detail;
