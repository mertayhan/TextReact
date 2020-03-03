import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
export default class Form1 extends Component {

  state={
    email:"",
    password:""

  }
  onchangeHandler=(event)=>{
    this.setState({email:event.target.value})
  }


  onSubmitHandler =(event)=>{

    alert("Submit");
  }

  render() {

    return (
      <div>
        <h2>Form</h2>
        <Form inline onSubmit={this.onSubmitHandler}>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label  className="mr-sm-2">
              Email
            </Label>
            <Input onChange={this.onchangeHandler}
              type="text"
              name="email"
              
              placeholder="something@idk.cool"
            />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label className="mr-sm-2">
              Password
            </Label>
            <Input onChange={this.onchangeHandler}
              type="password"
              name="password"
             
              placeholder="don't tell!"
            />
          </FormGroup>
          <Button >Submit</Button>
        </Form>
      </div>
    );
  }
}
