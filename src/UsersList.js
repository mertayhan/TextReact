import React, { Component } from "react";
import { Table } from "reactstrap";
import axios from "axios";

export default class UserList extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      this.setState({ users: res.data });
    });
  };

  render() {
    var nameSplit = name => {
      name = name.split(" ");
      return name;
    };
    return (
      <div>
        <h2>Users Table</h2>
        <Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Website</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map(user => (
              <tr key={user.id} onClick={() => this.props.changeUsers(user)}>
                <th scope="row">{user.id}</th>
                <td>{nameSplit(user.name)[0]}</td>
                <td>{nameSplit(user.name)[1]}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.address.street}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
                <td>{user.company.name}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
