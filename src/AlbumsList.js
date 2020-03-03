import React, { Component } from "react";
import { Table , Button} from "reactstrap";

export default class AlbumList extends Component {


  addToCart=(album )=>{
    alert(album.id);
  }

  render() {
    return (
      <div>
        <h2>Albums Table</h2>
        <Table>
          <thead>
            <tr>
              <th>User Id</th>
              <th>Id</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {this.props.albums.map( album => (
              <tr key={album.id}>
                <th scope="row">{album.userId}</th>
                <td>{album.id}</td>
                <td>{album.title}</td>
                <td><Button onClick={()=>this.addToCart(album)} color="info">Add</Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
