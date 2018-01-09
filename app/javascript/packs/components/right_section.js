import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const RightSection = props => (
  <div className="col-md-8">
    <table className="table table-striped">
            <thead>
              <tr>
                <th>Día</th>
                <th>Tareas</th>
                <th>Proyectos</th>
                <th>Trabajo</th>
                <th>En la escuela</th>
                <th>En la casa</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>L</td>
                <td>
                  <span className="checkmark">
                    <i className="fa fa-check" aria-hidden="true"></i>
                  </span>
                </td>
                <td>
                  <span className="checkmark">
                    <i className="fa fa-check" aria-hidden="true"></i>
                  </span>
                </td>
                <td>
                  <span className="checkmark">
                    <i className="fa fa-check" aria-hidden="true"></i>
                  </span>
                </td>
                <td>
                  <span className="checkmark">
                    <i className="fa fa-check" aria-hidden="true"></i>
                  </span>
                </td>
                <td>
                  <span className="checkmark">
                    <i className="fa fa-check" aria-hidden="true"></i>
                  </span>
                </td>
                <td>5</td>
              </tr>
              <tr>
                <td>M</td>
                  <td>
                  <span className="checkmark">
                    <i className="fa fa-check" aria-hidden="true"></i>
                  </span>
                </td>
                <td>
                  <span className="checkmark">
                    <i className="fa fa-check" aria-hidden="true"></i>
                  </span>
                </td>
                <td>
                  <span className="checkmark">
                    <i className="fa fa-check" aria-hidden="true"></i>
                  </span>
                </td>
                <td>
                  <span className="checkmark">
                    <i className="fa fa-check" aria-hidden="true"></i>
                  </span>
                </td>
                <td>
                  <span className="checkmark">
                    <i className="fa fa-check" aria-hidden="true"></i>
                  </span>
                </td>
                <td>5</td>
              </tr>
              <tr>
                <td>M</td>
                  <td>
                  <span className="failed">
                    <i className="fa fa-times" aria-hidden="true"></i>
                  </span>
                </td>
                <td>
                  <span className="checkmark">
                    <i className="fa fa-check" aria-hidden="true"></i>
                  </span>
                </td>
                <td>
                  <span className="checkmark">
                    <i className="fa fa-check" aria-hidden="true"></i>
                  </span>
                </td>
                <td>
                  <span className="checkmark">
                    <i className="fa fa-check" aria-hidden="true"></i>
                  </span>
                </td>
                <td>
                  <span className="checkmark">
                    <i className="fa fa-check" aria-hidden="true"></i>
                  </span>
                </td>
                <td>4</td>
              </tr>
              <tr>
                <td>J</td>
                  <td>
                  <span className="checkmark">
                    <i className="fa fa-check" aria-hidden="true"></i>
                  </span>
                </td>
                <td>
                  <span className="checkmark">
                    <i className="fa fa-check" aria-hidden="true"></i>
                  </span>
                </td>
                <td>
                  <span className="checkmark">
                    <i className="fa fa-check" aria-hidden="true"></i>
                  </span>
                </td>
                <td>
                  <span className="checkmark">
                    <i className="fa fa-check" aria-hidden="true"></i>
                  </span>
                </td>
                <td>
                  <span className="checkmark">
                    <i className="fa fa-check" aria-hidden="true"></i>
                  </span>
                </td>
                <td>5</td>
              </tr>
              <tr>
                <td>V</td>
                  <td>
                  <span className="checkmark">
                    <i className="fa fa-check" aria-hidden="true"></i>
                  </span>
                </td>
                <td>
                  <span className="checkmark">
                    <i className="fa fa-check" aria-hidden="true"></i>
                  </span>
                </td>
                <td>
                  <span className="checkmark">
                    <i className="fa fa-check" aria-hidden="true"></i>
                  </span>
                </td>
                <td>
                  <span className="checkmark">
                    <i className="fa fa-check" aria-hidden="true"></i>
                  </span>
                </td>
                <td>
                  <span className="checkmark">
                    <i className="fa fa-check" aria-hidden="true"></i>
                  </span>
                </td>
                <td>5</td>
              </tr>
              <tr>
                <td>S/D</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
            </tbody>
          </table>
  </div>
)

export default RightSection;

