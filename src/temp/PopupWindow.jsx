import React from 'react';
import {Button, ButtonGroup, ButtonToolbar, Checkbox, Col, ControlLabel, FieldGroup, Form, FormControl, FormGroup, Modal, OverlayTrigger, Popover, Radio, Tooltip} from "react-bootstrap";

const PopupWindow = React.createClass({
  getInitialState() {
    return { showModal: false };
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },

  render() {
    return (
      <div>
        <ButtonGroup vertical block>
          <Button bsStyle="primary" bsSize="large" onClick={this.open} >
            新增
          </Button>
        </ButtonGroup>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form horizontal method={this.props.method} action={this.props.action} >
              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                  Email
                </Col>
                <Col sm={10}>
                  <FormControl name="email" type="email" placeholder="Email" />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                  Password
                </Col>
                <Col sm={10}>
                  <FormControl name="password" type="password" placeholder="Password" />
                </Col>
              </FormGroup>

              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Checkbox>Remember me</Checkbox>
                </Col>
              </FormGroup>

              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Button type="submit">
                    Sign in
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});

export default PopupWindow;