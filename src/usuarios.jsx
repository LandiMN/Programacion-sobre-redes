import {useEffect, useState} from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'

function GetUsuarios() {
  const [users, setUsers] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:4000/contactos")
    .then(users => setUsers(users.data))
    .catch(err => console.log(err))
  },[])

  return (
    <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
      <div className="w-50">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">
                Id
              </th>
              <th scope="col">
                Nombre
              </th>
              <th scope="col">
                Apellido
              </th>
              <th scope="col">
                Documento
              </th>
              <th scope="col">
                Años
              </th>
              <th scope="col">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {
              users.map(user => {
                return <tr>
                        <td>{user._id}</td>
                        <td>{user.name}</td>
                        <td>{user.surname}</td>
                        <td>{user.dni}</td>
                        <td>{user.age}</td>
                        <td>
                        <a href="/mostrar/{{usuarios._id}}" class="btn btn-primary">Ver</a>
                        <a href="/editar/{{usuarios._id}}" class="btn btn-success">Editar</a>
                        <a href="/contacto" class="btn btn-danger">Borrar</a>
                        </td>
                       </tr>
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default GetUsuarios;