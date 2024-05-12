import React from "react";

const MovieDetailPage = ({ params: { id } }: { params: { id: string } }) => {
  console.log(id);
  return <h1>MovieDetailPage {id}</h1>;
};

export default MovieDetailPage;
