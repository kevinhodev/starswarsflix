import React from 'react';
import './VehiclesPage.css';
import { useQuery, gql } from '@apollo/client';

const ALL_VEHICLES = gql`
  {
    allVehicles {
      vehicles {
        name
        model
        vehicleClass
        manufacturers
        costInCredits
        length
        crew
        passengers
        maxAtmospheringSpeed
        cargoCapacity
        consumables
      }
    }
  }
`;

function VehiclesPage() {
  const { loading, error, data } = useQuery(ALL_VEHICLES);

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
      <h2> Veículos </h2>
      <div style={{ overflowX: 'auto' }}>
        <table>
          <thead>
            <tr>
              <th> Nome </th>
              <th> Modelo </th>
              <th> Classe do Veículo </th>
              <th> Fabricantes </th>
              <th> Custo em Créditos </th>
              <th> Tamanho </th>
              <th> Tripulação </th>
              <th> Passageiros </th>
              <th> Velocidade Máxima da Atmosfera </th>
              <th> Capacidade de Carga </th>
              <th> Consumíveis </th>
            </tr>
          </thead>
          <tbody>
            {data.allVehicles.vehicles.map(
              ({
                name,
                model,
                vehicleClass,
                manufacturers,
                costInCredits,
                length,
                crew,
                passengers,
                maxAtmospheringSpeed,
                cargoCapacity,
                consumables,
              }) => (
                <tr key={name}>
                  <th>{name}</th>
                  <th>{model}</th>
                  <th>{vehicleClass}</th>
                  <th>
                    {manufacturers.map((manufacturers) => (
                      <p key={manufacturers}>{manufacturers}</p>
                    ))}
                  </th>
                  <th>{costInCredits}</th>
                  <th>{length}</th>
                  <th>{crew}</th>
                  <th>{passengers}</th>
                  <th>{maxAtmospheringSpeed}</th>
                  <th>{cargoCapacity}</th>
                  <th>{consumables}</th>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default VehiclesPage;
