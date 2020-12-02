import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";
import { LocalForm, Control, Errors } from "react-redux-form";

const required = val => val && val.length;
const isNumber = val => !isNaN(Number(val));
const validEmail = val => /^[A-Z0-9._-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/i.test(val);



class Contact extends Component {
  handleSubmit = (values) => {
    console.log("Contact.jsx--->", values);
  };

  render() {
    document.title = "REs | Taurant - Contact";
    return (
      <div className="container">
        <div
          className="row row-content"
          style={{ paddingLeft: "20px", textAlign: "left" }}
        >
          <div className="col-12">
            <hr />
            <h3>Send Us Your Feedback</h3>
            <hr />
          </div>
          <div className="col-12">
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <FormGroup row>
                <Label htmlFor="firstname" md={2}>
                  First Name :
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".firstname"
                    name="firstname"
                    placeholder="First Name"
                    className="form-control"
                    validators={{
                      required
                    }}
                  />
                  <Errors
                  className="text-warning"
                  model = ".firstname"
                  show = "touched"   // show property define we touched this field or not.
                  messages = {
                    {required : "required ! please fill up this field "}
                  }
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="lastname" md={2}>
                  Last Name :
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".lastname"
                    name="lastname"
                    placeholder="Last Name"
                    className="form-control"
                    validators={{
                      required
                    }}
                  />
                  <Errors
                  className="text-warning"
                  model = ".lastname"
                  show = "touched"   
                  messages = {
                    {required : "required ! please fill up this field "}
                  }
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="telnum" md={2}>
                  Telephone :
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".telnum"
                    name="telnum"
                    placeholder="Tel. No"
                    className="form-control"
                    validators={{
                      required,
                      isNumber
                    }}
                  />
                  <Errors
                  className="text-warning"
                  model = ".telnum"
                  show = "touched"   
                  messages = {
                    {
                      required : "required ! please fill up this field ,",
                      isNumber : "Invalid Number"
                  }
                  }
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="email" md={2}>
                  Email :
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                    validators={{
                      required,
                      validEmail
                    }}
                  />
                  <Errors
                  className="text-warning"
                  model = ".email"
                  show = "touched"   // show property define we touched this field or not.
                  messages = {
                    {
                      required : "required ! please fill up this field ,",
                      validEmail : "Invalid Email"
                  }

                  }
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={{ size: 6, offset: 2 }}>
                  <FormGroup check>
                    <Label check>
                      <Control.checkbox model=".agree" name="agree" />
                      <strong> May we contact you ?</strong>
                    </Label>
                  </FormGroup>
                </Col>
                <Col md={{ size: 3, offset: 1 }}>
                  <Control.select model=".contactType" name="contactType">
                    <option> Tel.</option>
                    <option> Email</option>
                  </Control.select>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="message" md={2}>
                  Your Feedback :
                </Label>
                <Col md={10}>
                  <Control.textarea
                    model=".message"
                    name="message"
                    row="12"
                    className="form-control"
                    validators={{
                      required
                    }}
                  />
                  <Errors
                  className="text-warning"
                  model = ".email"
                  show = "touched"   
                  messages = {
                    {
                      required : "required !",

                  }

                  }
                  />
                  
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={{ size: 10, offset: 2 }}>
                  <div style={{ textAlign: "right" }}>
                    <Button type="submit" color="secondary">
                      Send Feedback
                    </Button>
                  </div>
                </Col>
              </FormGroup>
            </LocalForm>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
