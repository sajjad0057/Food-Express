import React, { Component } from "react";
import { Button, FormGroup, Label, Col } from "reactstrap";
import { Form, Control, Errors, actions } from "react-redux-form";
import { connect } from "react-redux";
import axios from "axios";
import { baseUrl } from "../../redux/baseUrl.js";
import { Alert } from "reactstrap";

const required = (val) => val && val.length;
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/i.test(val);

const mapDispatchToProps = (dispatch) => {
  return {
    resetFeedbackForm: () => {
      dispatch(actions.reset("feedback")); // see react-redux-form documentation for know about ations.reset() func.
    },
  };
};

class Contact extends Component {
  state = {
    alertShow: false,
    alertText: null,
    alertType: null,
  };

  handleSubmit = (values) => {
    //console.log("Contact.jsx--->", values);
    axios
      .post(baseUrl + "feedback", values)
      .then((response) => response.status)
      .then((status) => {
        if (status === 201) {
          this.setState({
            alertShow: true,
            alertText: "Your feedback submitted successfully",
            alertType: "info",
          });
          setTimeout(()=>{
            this.setState({
              alertShow : false
            })
          },2000)
        }
      })
      .catch(error=>{
        this.setState({
          alertShow : true,
          alertText: error.message,
          alertType : "warning"
        })
        setTimeout(()=>{
          this.setState({
            alertShow : false
          })
        },7000)
      })
      
    this.props.resetFeedbackForm();
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
            <Alert isOpen={this.state.alertShow} color={this.state.alertType}>
              {this.state.alertText}
            </Alert>
          </div>
          <div className="col-12">
            <Form
              model="feedback"
              onSubmit={(values) => this.handleSubmit(values)}
            >
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
                      required,
                    }}
                  />
                  <Errors
                    className="text-warning"
                    model=".firstname"
                    show="touched" // show property define we touched this field or not.
                    messages={{
                      required: "required ! please fill up this field ",
                    }}
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
                      required,
                    }}
                  />
                  <Errors
                    className="text-warning"
                    model=".lastname"
                    show="touched"
                    messages={{
                      required: "required ! please fill up this field ",
                    }}
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
                      isNumber,
                    }}
                  />
                  <Errors
                    className="text-warning"
                    model=".telnum"
                    show="touched"
                    messages={{
                      required: "required ! please fill up this field ,",
                      isNumber: "Invalid Number",
                    }}
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
                      validEmail,
                    }}
                  />
                  <Errors
                    className="text-warning"
                    model=".email"
                    show="touched" // show property define we touched this field or not.
                    messages={{
                      required: "required ! please fill up this field ,",
                      validEmail: "Invalid Email",
                    }}
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
                      required,
                    }}
                  />
                  <Errors
                    className="text-warning"
                    model=".email"
                    show="touched"
                    messages={{
                      required: "required !",
                    }}
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
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(Contact);
