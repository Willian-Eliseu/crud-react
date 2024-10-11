import React from "react";
import { Table } from "react-bootstrap";

class Alunos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      alunos: [],
    };
  }

  render() {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Nome</td>
            <td>Sobrenome</td>
            <td>emailteste@email.com</td>
            <td>asenhadousuario</td>
            <td>+55-9-14-1234-1234</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Nome</td>
            <td>Sobrenome</td>
            <td>emailteste@email.com</td>
            <td>asenhadousuario</td>
            <td>+55-9-14-1234-1234</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Nome</td>
            <td>Sobrenome</td>
            <td>emailteste@email.com</td>
            <td>asenhadousuario</td>
            <td>+55-9-14-1234-1234</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Nome</td>
            <td>Sobrenome</td>
            <td>emailteste@email.com</td>
            <td>asenhadousuario</td>
            <td>+55-9-14-1234-1234</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

// export default function Alunos(){
//     return (
//         <h4>Esta é a página Alunos</h4>
//     );
// }

export default Alunos;
