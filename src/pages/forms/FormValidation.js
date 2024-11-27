import { useState } from 'react';
import { Card, Form, Row, Col, InputGroup, Button} from 'react-bootstrap';

import Layout from '../../layout/default';
import Block from '../../components/Block/Block';
import CodePreview from '../../components/CodePreview/CodePreview';


function FormValidationPage() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Layout title="Validation" content="container">
      <Block.Head page>
        <Block.HeadContent>
            <Block.Title>Validation</Block.Title>
            <Block.Text>Provide valuable, actionable feedback to your users with HTML5 form validation, via browser default behaviors or custom styles and JavaScript.</Block.Text>
        </Block.HeadContent>
      </Block.Head>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Example</Block.Title>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className="g-3">
                <Col md="4">
                  <Form.Group className="form-group">
                    <Form.Label htmlFor="validationCustom01">First name</Form.Label>
                    <div className="form-control-wrap">
                      <Form.Control type="text" id="validationCustom01" defaultValue="Mark" required/>
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </div>
                  </Form.Group>
                </Col>
                <Col md="4">
                  <Form.Group className="form-group">
                    <Form.Label htmlFor="validationCustom02">Last name</Form.Label>
                    <div className="form-control-wrap">
                      <Form.Control type="text" id="validationCustom02" defaultValue="Otto" required/>
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </div>
                  </Form.Group>
                </Col>
                <Col md="4">
                  <Form.Group className="form-group">
                     <Form.Label htmlFor="validationCustomUsername">Username</Form.Label>
                    <div className="form-control-wrap">
                        <InputGroup hasValidation>
                          <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                          <Form.Control type="text" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
                          <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
                        </InputGroup>
                    </div>
                  </Form.Group>
                </Col>
                <Col md="6">
                  <Form.Group className="form-group">
                    <Form.Label htmlFor="validationCustom03">City</Form.Label>
                    <div className="form-control-wrap">
                      <Form.Control type="text" id="validationCustom03" required/>
                      <Form.Control.Feedback type="invalid">Please provide a valid city.</Form.Control.Feedback>
                    </div>
                  </Form.Group>
                </Col>
                <Col md="3">
                  <Form.Group className="form-group">
                    <Form.Label htmlFor="validationCustom04">State</Form.Label>
                    <div className="form-control-wrap">
                      <Form.Select id="validationCustom04" required>
                        <option value="1">Choose...</option>
                        <option>Option 1</option>
                        <option>Option 2</option>
                      </Form.Select>
                      <Form.Control.Feedback type="invalid">Please select a valid state.</Form.Control.Feedback>
                    </div>
                  </Form.Group>
                </Col>
                <Col md="3">
                  <Form.Group className="form-group">
                    <Form.Label htmlFor="validationCustom05">Zip</Form.Label>
                    <div className="form-control-wrap">
                      <Form.Control type="text" id="validationCustom05" required/>
                      <Form.Control.Feedback type="invalid">Please provide a valid zip.</Form.Control.Feedback>
                    </div>
                  </Form.Group>
                </Col>
                <Col className="col-12">
                  <Form.Check
                    required
                    label="Agree to terms and conditions"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                  />
                </Col>
                <Col className="col-12">
                  <Button type="submit">Submit form</Button>
                </Col>
              </Row>
            </Form>
          </Card.Body>
          <CodePreview>
          {`import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function FormExample() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue="Mark"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue="Otto"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="State" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" placeholder="Zip" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
  );
}

export default FormExample;
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Browser defaults</Block.Title>
            <Block.Text>Not interested in custom validation feedback messages or writing JavaScript to change form behaviors? All good, you can use the browser defaults.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Form>
              <Row className="g-3">
                <Col md="4">
                  <Form.Group className="form-group">
                    <Form.Label htmlFor="validationCustom01">First name</Form.Label>
                    <div className="form-control-wrap">
                      <Form.Control type="text" id="validationCustom01" defaultValue="Mark" required/>
                    </div>
                  </Form.Group>
                </Col>
                <Col md="4">
                  <Form.Group className="form-group">
                    <Form.Label htmlFor="validationCustom02">Last name</Form.Label>
                    <div className="form-control-wrap">
                      <Form.Control type="text" id="validationCustom02" defaultValue="Otto" required/>
                    </div>
                  </Form.Group>
                </Col>
                <Col md="4">
                  <Form.Group className="form-group">
                     <Form.Label htmlFor="validationCustomUsername">Username</Form.Label>
                    <div className="form-control-wrap">
                        <InputGroup hasValidation>
                          <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                          <Form.Control type="text" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
                        </InputGroup>
                    </div>
                  </Form.Group>
                </Col>
                <Col md="6">
                  <Form.Group className="form-group">
                    <Form.Label htmlFor="validationCustom03">City</Form.Label>
                    <div className="form-control-wrap">
                      <Form.Control type="text" id="validationCustom03" required/>
                    </div>
                  </Form.Group>
                </Col>
                <Col md="3">
                  <Form.Group className="form-group">
                    <Form.Label htmlFor="validationCustom04">State</Form.Label>
                    <div className="form-control-wrap">
                      <Form.Select id="validationCustom04" required>
                        <option value="1">Choose...</option>
                        <option>Option 1</option>
                        <option>Option 2</option>
                      </Form.Select>
                    </div>
                  </Form.Group>
                </Col>
                <Col md="3">
                  <Form.Group className="form-group">
                    <Form.Label htmlFor="validationCustom05">Zip</Form.Label>
                    <div className="form-control-wrap">
                      <Form.Control type="text" id="validationCustom05" required/>
                    </div>
                  </Form.Group>
                </Col>
                <Col className="col-12">
                  <Form.Check
                    required
                    label="Agree to terms and conditions"
                    feedbackType="invalid"
                  />
                </Col>
                <Col className="col-12">
                  <Button type="submit">Submit form</Button>
                </Col>
              </Row>
            </Form>
          </Card.Body>
          <CodePreview>
          {`import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function FormDefaultExample() {
  return (
      <Form>
        <Row className="g-3">
          <Col md="4">
            <Form.Group className="form-group">
              <Form.Label htmlFor="validationCustom01">First name</Form.Label>
              <div className="form-control-wrap">
                <Form.Control type="text" id="validationCustom01" defaultValue="Mark" required/>
              </div>
            </Form.Group>
          </Col>
          <Col md="4">
            <Form.Group className="form-group">
              <Form.Label htmlFor="validationCustom02">Last name</Form.Label>
              <div className="form-control-wrap">
                <Form.Control type="text" id="validationCustom02" defaultValue="Otto" required/>
              </div>
            </Form.Group>
          </Col>
          <Col md="4">
            <Form.Group className="form-group">
                <Form.Label htmlFor="validationCustomUsername">Username</Form.Label>
              <div className="form-control-wrap">
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                    <Form.Control type="text" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
                  </InputGroup>
              </div>
            </Form.Group>
          </Col>
          <Col md="6">
            <Form.Group className="form-group">
              <Form.Label htmlFor="validationCustom03">City</Form.Label>
              <div className="form-control-wrap">
                <Form.Control type="text" id="validationCustom03" required/>
              </div>
            </Form.Group>
          </Col>
          <Col md="3">
            <Form.Group className="form-group">
              <Form.Label htmlFor="validationCustom04">State</Form.Label>
              <div className="form-control-wrap">
                <Form.Select id="validationCustom04" required>
                  <option value="1">Choose...</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                </Form.Select>
              </div>
            </Form.Group>
          </Col>
          <Col md="3">
            <Form.Group className="form-group">
              <Form.Label htmlFor="validationCustom05">Zip</Form.Label>
              <div className="form-control-wrap">
                <Form.Control type="text" id="validationCustom05" required/>
              </div>
            </Form.Group>
          </Col>
          <Col className="col-12">
            <Form.Check
              required
              label="Agree to terms and conditions"
              feedbackType="invalid"
            />
          </Col>
          <Col className="col-12">
            <Button type="submit">Submit form</Button>
          </Col>
        </Row>
      </Form>
  );
}

export default FormDefaultExample;
`}
          </CodePreview>
        </Card>
      </Block>

      
    </Layout>
  )
}

export default FormValidationPage;