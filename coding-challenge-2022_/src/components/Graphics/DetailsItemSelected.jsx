import React from "react";

export const DetailsItemSelected = ({ selectedItem }) => {

  return (
    <div className="card">
      <div className="card-header">
        <h5 className="card-title"> {selectedItem?.name || "Seleccione un item de la gráfica"}</h5>
      </div>
      <div className="card-body">
        {selectedItem?.children && <h4>Pilotos</h4>}
        {(selectedItem?.children && <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Apellido</th>
              <th scope="col">Puntos</th>
            </tr>
          </thead>
          <tbody>{selectedItem?.children?.map((item, i) => {
            return (<tr>
                    <td>{i +1 }</td>
                      <td>{item?.name}</td>
                      <td>{item?.gpGanados}</td>
                  </tr>)
          })}</tbody>
        </table>) || (selectedItem?.gpGanados && <p><strong>Puntos:</strong> {selectedItem?.gpGanados}</p>)  
        }  
        

       
      </div>
    </div>
  );
};
