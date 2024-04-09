import React from 'react';
import { connect } from 'react-redux';

import{useSelector} from 'react-redux'
import rootReducer from '../../redux/root-reducer';

function Grid(){
  const {grid} = useSelector((rootReducer) => rootReducer.grid)

  return (
    <div className="grid">
      <table>
      <thead>
        <tr>
          <th>Nome do repositório</th>
          <th>Nome do dono</th>
          <th>Descrição</th>
        </tr>
      </thead>
      <tbody>
        {grid.map((repo, index) => (
            <tr key={index}>
              <td>{repo.Name}</td>
              <td>{repo.Owner}</td>
              <td>{repo.Description}</td>
            </tr>
          ))}
      </tbody>
    </table>
    </div>
  );
}

export default Grid;
