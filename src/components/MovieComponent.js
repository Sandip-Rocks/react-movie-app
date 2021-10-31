import styled from "styled-components";
const MovieComponent = (props) => {
  const { Title, Year, Poster, Type, imdbID } = props.movie;
  const MovieContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 280px;
    box-shadow: 0 3px 10px 0 #aaa;
    cursor: pointer;
    gap:24px;
  `;
  const CoverImage = styled.img`
    object-fit: cover;
    height: 362px;
  `;
  const MovieName = styled.span`
    font-size: 18px;
    font-weight: 600;
    color: black;
    margin: 15px 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    overflow: hidden;
  `;
  const InfoColumn = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `;
  const MovieInfo = styled.span`
    font-size: 16px;
    font-weight: 500;
    color: black;
    white-space: nowrap;
    overflow: hidden;
    text-transform: capitalize;
    text-overflow: ellipsis;
  `;
  return (
    <div>
      <MovieContainer onClick={()=>props.onMovieSelect(imdbID)}>
        <CoverImage src={Poster} />
        <MovieName>{Title}</MovieName>
        <InfoColumn>
          <MovieInfo>Year: {Year}</MovieInfo>
          <MovieInfo>Type: {Type}</MovieInfo>
        </InfoColumn>
      </MovieContainer>
    </div>
  );
};
export default MovieComponent;
