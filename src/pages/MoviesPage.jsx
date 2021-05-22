import React from 'react';
import './MoviesPage.css';
import { useQuery, gql } from '@apollo/client';

const ALL_FILMS = gql`
  {
    allFilms {
      films {
        title
        episodeID
        director
        producers
        releaseDate
      }
    }
  }
`;

function MoviesPage() {
  const { loading, error, data } = useQuery(ALL_FILMS);

  if (loading)
    return (
      <div>
        <h1 style={{ color: 'black', marginTop: '10em' }}>Carregando Dados...</h1>
        <i className="fas fa-spinner fa-2x"></i>
      </div>
    );
  if (error)
    return (
      <div>
        <p>Erro :(</p>
        <p> Verifique o Console Para Mais Informações! </p>
      </div>
    );

  return (
    <div className="content">
      <h2> Filmes </h2>
      <div style={{ overflowX: 'auto' }}>
        <table>
          <thead>
            <tr>
              <th> Título </th>
              <th> ID do Episódio </th>
              <th> Diretor </th>
              <th> Produtores </th>
              <th> Data de Lançamento </th>
            </tr>
          </thead>
          <tbody>
            {data.allFilms.films.map(({ title, episodeID, director, producers, releaseDate }) => (
              <tr key={title}>
                <th>{title}</th>
                <th>{episodeID}</th>
                <th>{director}</th>
                <th>
                  {producers.map((producer) => (
                    <p key={producer}>{producer}</p>
                  ))}
                </th>
                <th>{releaseDate}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MoviesPage;
