import React, { Component } from "react";
import UserList from "./UsersList";
import AlbumList from "./AlbumsList";
import { Container, Row, } from "reactstrap";
import axios from "axios";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Form1 from './Form1';
import AboutMe from "./AboutMe";
import NotFound from "./NotFound";

export default class App extends Component {
  state = {
    currentUsers: "",
    albums: []
  };

  changeUsers = user => {
    this.setState({ currentUsers: user });
    this.getAlbums(user.id);
  };

  componentDidMount() {
    this.getAlbums();
  }

  getAlbums = userId => {
    let url = "https://jsonplaceholder.typicode.com/albums";
    if (userId) {
      url += "?userId=" + userId;
    }
    axios.get(url).then(res => {
      this.setState({ albums: res.data });
    });
  };

  render() {
    return (
      <div className="App">
        <Container>
          <Row></Row>
          <Row>
            <UserList
              currentUsers={this.state.currentUsers}
              changeUsers={this.changeUsers}
            ></UserList>
          </Row>
          <Row>
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <AlbumList
                    {...props}
                    currentUsers={this.state.currentUsers}
                    albums={this.state.albums}
                  ></AlbumList>
                )}
              ></Route>
              <Route path="/AboutMe" component={AboutMe}></Route>
              <Route path="/form" component={Form1}></Route>
              <Route component={NotFound}></Route>
            </Switch>
          </Row>
        </Container>
      </div>
    );
  }
}
