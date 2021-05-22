import React from 'react';
import './PeoplesPage.css';
import { useQuery, gql } from '@apollo/client';

const ALL_PEOPLES = gql`
  {
    allPeople {
      people {
        name
        birthYear
        eyeColor
        gender
        hairColor
        height
        mass
        skinColor
      }
    }
  }
`;

function PeoplesPage() {
  const { loading, error, data } = useQuery(ALL_PEOPLES);

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
      <div style={{ overflowX: 'auto' }}>
        <h2> Pessoas </h2>
        <table>
          <thead>
            <tr>
              <th> Nome </th>
              <th> Aiversário</th>
              <th> Cor dos Olhos </th>
              <th> Gênero </th>
              <th> Cor do Cabelo </th>
              <th> Altura </th>
              <th> Massa </th>
              <th> Cor da Pele </th>
            </tr>
          </thead>
          <tbody>
            {data.allPeople.people.map(
              ({ name, birthYear, eyeColor, gender, hairColor, height, mass, skinColor }) => (
                <tr key={name}>
                  <th>{name}</th>
                  <th>{birthYear}</th>
                  <th>{eyeColor}</th>
                  <th>{gender}</th>
                  <th>{hairColor}</th>
                  <th>{height}</th>
                  <th>{mass}</th>
                  <th>{skinColor}</th>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PeoplesPage;
