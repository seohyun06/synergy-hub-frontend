
import { Card, Form, Row, Col, Button, InputGroup} from 'react-bootstrap';

import Layout from '../../layout/default';
import Block from '../../components/Block/Block';
import CodePreview from '../../components/CodePreview/CodePreview';


function FormLayoutPage() {
  return (
    <Layout title="Layout" content="container">
      <Block.Head page>
        <Block.HeadContent>
            <Block.Title>Layout</Block.Title>
            <Block.Text>Give your forms some structure—from inline to horizontal to custom grid implementations—with our form layout options.</Block.Text>
        </Block.HeadContent>
      </Block.Head>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Forms</Block.Title>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Form.Group className="mb-3 form-group" controlId="formGroupExampleInput">
                <Form.Label>Example label</Form.Label>
                <div className="form-control-wrap">
                  <Form.Control type="text" placeholder="Example input placeholder"/>
                </div>
            </Form.Group>
            <Form.Group className="mb-3 form-group" controlId="formGroupExampleInput2">
                <Form.Label>Another label</Form.Label>
                <div className="form-control-wrap">
                  <Form.Control type="text" placeholder="Another input placeholder"/>
                </div>
            </Form.Group>
          </Card.Body>
          <CodePreview>
          {`import Form from 'react-bootstrap/Form';

function FormGroupExample() {
  return (
    <Form.Group className="mb-3 form-group" controlId="formGroupExampleInput">
        <Form.Label>Example label</Form.Label>
        <div className="form-control-wrap">
            <Form.Control type="text" placeholder="Example input placeholder"/>
        </div>
    </Form.Group>
    <Form.Group className="mb-3 form-group" controlId="formGroupExampleInput2">
        <Form.Label>Another label</Form.Label>
        <div className="form-control-wrap">
            <Form.Control type="text" placeholder="Another input placeholder"/>
        </div>
    </Form.Group>
  );
}

export default FormGroupExample;
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Form grid</Block.Title>
            <Block.Text>More complex forms can be built using the grid components.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Row>
                <Col>
                    <Form.Control placeholder="First name" />
                </Col>
                <Col>
                    <Form.Control placeholder="Last name" />
                </Col>
            </Row>
            <div className="mt-4 mb-2">More complex layouts can also be created with the grid system.</div>
            <Form>
                <Row className="g-4">
                    <Col md="6">
                        <Form.Group controlId="inputEmail4">
                            <Form.Label>Email</Form.Label>
                            <div className="form-control-wrap">
                                <Form.Control type="email"/>
                            </div>
                        </Form.Group>
                    </Col>
                    <Col md="6">
                        <Form.Group controlId="inputPassword4">
                            <Form.Label>Password</Form.Label>
                            <div className="form-control-wrap">
                                <Form.Control type="password"/>
                            </div>
                        </Form.Group>
                    </Col>
                    <Col sm="12">
                        <Form.Group controlId="inputAddress">
                            <Form.Label>Address</Form.Label>
                            <div className="form-control-wrap">
                                <Form.Control type="text" placeholder="1234 Main St"/>
                            </div>
                        </Form.Group>
                    </Col>
                    <Col sm="12">
                        <Form.Group controlId="inputAddress2">
                            <Form.Label>Address 2</Form.Label>
                            <div className="form-control-wrap">
                                <Form.Control type="text" placeholder="Apartment, studio, or floor"/>
                            </div>
                        </Form.Group>
                    </Col>
                    <Col md="6">
                        <Form.Group controlId="inputCity">
                            <Form.Label>City</Form.Label>
                            <div className="form-control-wrap">
                                <Form.Control type="text"/>
                            </div>
                        </Form.Group>
                    </Col>
                    <Col md="4">
                        <Form.Group controlId="inputState">
                            <Form.Label>State</Form.Label>
                            <div className="form-control-wrap">
                                <Form.Select>
                                    <option value="">Choose...</option>
                                    <option>...</option>
                                </Form.Select>
                            </div>
                        </Form.Group>
                    </Col>
                    <Col md="2">
                        <Form.Group controlId="inputZip">
                            <Form.Label>Zip</Form.Label>
                            <div className="form-control-wrap">
                                <Form.Control type="text"/>
                            </div>
                        </Form.Group>
                    </Col>
                    <Col sm="12">
                        <Form.Group id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                    </Col>
                    <Col sm="12">
                        <Button type="submit">Sign in</Button>
                    </Col>
                </Row>
            </Form>
          </Card.Body>
          <CodePreview>
          {`import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function GridComplexExample() {
  return (
    <Form>
        <Row className="g-4">
            <Col md="6">
                <Form.Group controlId="inputEmail4">
                    <Form.Label>Email</Form.Label>
                    <div className="form-control-wrap">
                        <Form.Control type="email"/>
                    </div>
                </Form.Group>
            </Col>
            <Col md="6">
                <Form.Group controlId="inputPassword4">
                    <Form.Label>Password</Form.Label>
                    <div className="form-control-wrap">
                        <Form.Control type="password"/>
                    </div>
                </Form.Group>
            </Col>
            <Col sm="12">
                <Form.Group controlId="inputAddress">
                    <Form.Label>Address</Form.Label>
                    <div className="form-control-wrap">
                        <Form.Control type="text" placeholder="1234 Main St"/>
                    </div>
                </Form.Group>
            </Col>
            <Col sm="12">
                <Form.Group controlId="inputAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <div className="form-control-wrap">
                        <Form.Control type="text" placeholder="Apartment, studio, or floor"/>
                    </div>
                </Form.Group>
            </Col>
            <Col md="6">
                <Form.Group controlId="inputCity">
                    <Form.Label>City</Form.Label>
                    <div className="form-control-wrap">
                        <Form.Control type="text"/>
                    </div>
                </Form.Group>
            </Col>
            <Col md="4">
                <Form.Group controlId="inputState">
                    <Form.Label>State</Form.Label>
                    <div className="form-control-wrap">
                        <Form.Select>
                            <option value="">Choose...</option>
                            <option>...</option>
                        </Form.Select>
                    </div>
                </Form.Group>
            </Col>
            <Col md="2">
                <Form.Group controlId="inputZip">
                    <Form.Label>Zip</Form.Label>
                    <div className="form-control-wrap">
                        <Form.Control type="text"/>
                    </div>
                </Form.Group>
            </Col>
            <Col sm="12">
                <Form.Group id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
            </Col>
            <Col sm="12">
                <Button type="submit">Sign in</Button>
            </Col>
        </Row>
    </Form>
  );
}

export default GridComplexExample;
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Gutters</Block.Title>
            <Block.Text><code>.g-*</code> classes can be used to control the horizontal gutter widths, for the following example we use a smaller gutter width. Note: <code>.g-*</code> classes only work with <code>Row</code>.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Row className="g-4">
                <Col md="6">
                    <Form.Control placeholder="Custom column padding" />
                </Col>
                <Col md="6">
                    <Form.Control placeholder="Custom column padding" />
                </Col>
                <Col md="6">
                    <Form.Control placeholder="Custom column padding" />
                </Col>
                <Col md="6">
                    <Form.Control placeholder="Custom column padding" />
                </Col>
            </Row>
          </Card.Body>
          <CodePreview>
          {`<Row className="g-4">
    <Col md="6">
        <Form.Control placeholder="Custom column padding" />
    </Col>
    <Col md="6">
        <Form.Control placeholder="Custom column padding" />
    </Col>
    <Col md="6">
        <Form.Control placeholder="Custom column padding" />
    </Col>
    <Col md="6">
        <Form.Control placeholder="Custom column padding" />
    </Col>
</Row>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Horizontal form</Block.Title>
            <Block.Text>Create horizontal forms with the grid by adding <code>as={`{Row}`}</code> prop to form groups and using <code>Col</code> to specify the width of your labels and controls. Be sure to add the <code>column</code> prop to your <code>FormLabel</code> as well so they’re vertically centered with their associated form controls.</Block.Text>
            <Block.Text>At times, you maybe need to use margin or padding utilities to create that perfect alignment you need. For example, we’ve removed the <code>padding-top</code> on our stacked radio inputs label to better align the text baseline.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Form>
                <Form.Group as={Row} className="mb-3 form-group" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>Email</Form.Label>
                    <Col sm={10}>
                        <Form.Control type="email" placeholder="Email" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3 form-group" controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>Password</Form.Label>
                    <Col sm={10}>
                        <Form.Control type="password" placeholder="Password" />
                    </Col>
                </Form.Group>
                <fieldset>
                    <Form.Group as={Row} className="mb-3 form-group">
                    <Form.Label as="legend" column sm={2}>Radios</Form.Label>
                        <Col sm={10}>
                            <Form.Check
                                type="radio"
                                label="First radio"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios1"
                            />
                            <Form.Check
                                type="radio"
                                label="Second radio"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                            />
                            <Form.Check
                                type="radio"
                                label="Third radio"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios3"
                            />
                        </Col>
                    </Form.Group>
                </fieldset>
                <Form.Group as={Row} className="mb-3 form-group" controlId="formHorizontalCheck">
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Form.Check label="Remember me" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3 form-group">
                    <Col>
                        <Button type="submit">Sign in</Button>
                    </Col>
                </Form.Group>
            </Form>
          </Card.Body>
          <CodePreview>
          {`import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function HorizontalExample() {
  return (
    <Form>
      <Form.Group as={Row} className="mb-3 form-group" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Email
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="email" placeholder="Email" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3 form-group" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Password
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="password" placeholder="Password" />
        </Col>
      </Form.Group>
      <fieldset>
        <Form.Group as={Row} className="mb-3 form-group">
          <Form.Label as="legend" column sm={2}>
            Radios
          </Form.Label>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="first radio"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="radio"
              label="second radio"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="third radio"
              name="formHorizontalRadios"
              id="formHorizontalRadios3"
            />
          </Col>
        </Form.Group>
      </fieldset>
      <Form.Group as={Row} className="mb-3 form-group" controlId="formHorizontalCheck">
        <Col sm={{ span: 10, offset: 2 }}>
          <Form.Check label="Remember me" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3 form-group">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit">Sign in</Button>
        </Col>
      </Form.Group>
    </Form>
  );
}

export default HorizontalExample;
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Horizontal form label sizing</Block.Title>
            <Block.Text>You can size the <code>&lt;FormLabel&gt;</code> using the <code>column</code> prop as shown.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Row className="mb-3">
                <Form.Label column="sm" lg={2}>Small</Form.Label>
                <Col>
                    <Form.Control size="sm" type="text" placeholder="Small" />
                </Col>
            </Row>
            <Row className="mb-3">
                <Form.Label column lg={2}>Default</Form.Label>
                <Col>
                    <Form.Control type="text" placeholder="Default" />
                </Col>
            </Row>
            <Row>
                <Form.Label column="lg" lg={2}>Large</Form.Label>
                <Col>
                    <Form.Control size="lg" type="text" placeholder="Large" />
                </Col>
            </Row>
          </Card.Body>
          <CodePreview>
          {`import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function FormLabelSizingExample() {
  return (
    <Row className="mb-3">
        <Form.Label column="sm" lg={2}>Small</Form.Label>
        <Col>
            <Form.Control size="sm" type="text" placeholder="Small" />
        </Col>
    </Row>
    <Row className="mb-3">
        <Form.Label column lg={2}>Default</Form.Label>
        <Col>
            <Form.Control type="text" placeholder="Default" />
        </Col>
    </Row>
    <Row>
        <Form.Label column="lg" lg={2}>Large</Form.Label>
        <Col>
            <Form.Control size="lg" type="text" placeholder="Large" />
        </Col>
    </Row>
  );
}

export default FormLabelSizingExample;
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Column sizing</Block.Title>
            <Block.Text>As shown in the previous examples, our grid system allows you to place any number of <code>Col</code>s within a <code>Row</code>. They'll split the available width equally between them. You may also pick a subset of your columns to take up more or less space, while the remaining <code>Col</code>s equally split the rest, with specific column classes like <code>&lt;Col xs={`{7}`}&gt;</code>.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Form>
                <Row>
                    <Col xs={7}>
                        <Form.Control placeholder="City" />
                    </Col>
                    <Col>
                        <Form.Control placeholder="State" />
                    </Col>
                    <Col>
                        <Form.Control placeholder="Zip" />
                    </Col>
                </Row>
            </Form>
          </Card.Body>
          <CodePreview>
          {`import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function GridColSizesExample() {
  return (
    <Form>
      <Row>
        <Col xs={7}>
          <Form.Control placeholder="City" />
        </Col>
        <Col>
          <Form.Control placeholder="State" />
        </Col>
        <Col>
          <Form.Control placeholder="Zip" />
        </Col>
      </Row>
    </Form>
  );
}

export default GridColSizesExample;
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Auto-sizing</Block.Title>
            <Block.Text>The example below uses a flexbox utility to vertically center the contents and changes <code>Col</code> to <code>&lt;Col xs="auto"&gt;</code> so that your columns only take up as much space as needed. Put another way, the column sizes itself based on on the contents.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Form>
                <Row className="align-items-center gy-2 gx-3">
                    <Col xs="auto">
                        <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                            Name
                        </Form.Label>
                        <Form.Control
                            id="inlineFormInput"
                            placeholder="Jane Doe"
                        />
                    </Col>
                    <Col xs="auto">
                        <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                            Username
                        </Form.Label>
                        <InputGroup>
                            <InputGroup.Text>@</InputGroup.Text>
                            <Form.Control id="inlineFormInputGroup" placeholder="Username" />
                        </InputGroup>
                    </Col>
                    <Col xs="auto">
                        <Form.Label htmlFor="autoSizingSelect" visuallyHidden>Preference</Form.Label>
                        <Form.Select id="autoSizingSelect">
                            <option value="">Choose...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Col>
                    <Col xs="auto">
                        <Form.Check
                            type="checkbox"
                            id="autoSizingCheck"
                            label="Remember me"
                        />
                    </Col>
                    <Col xs="auto">
                        <Button type="submit">
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Form>
          </Card.Body>
          <CodePreview>
          {`import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

function GridAutoSizingExample() {
  return (
    <Form>
        <Row className="align-items-center gy-2 gx-3">
            <Col xs="auto">
                <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                    Name
                </Form.Label>
                <Form.Control
                    id="inlineFormInput"
                    placeholder="Jane Doe"
                />
            </Col>
            <Col xs="auto">
                <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                    Username
                </Form.Label>
                <InputGroup>
                    <InputGroup.Text>@</InputGroup.Text>
                    <Form.Control id="inlineFormInputGroup" placeholder="Username" />
                </InputGroup>
            </Col>
            <Col xs="auto">
                <Form.Label htmlFor="autoSizingSelect" visuallyHidden>Preference</Form.Label>
                <Form.Select id="autoSizingSelect">
                    <option value="">Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
            </Col>
            <Col xs="auto">
                <Form.Check
                    type="checkbox"
                    id="autoSizingCheck"
                    label="Remember me"
                />
            </Col>
            <Col xs="auto">
                <Button type="submit">
                    Submit
                </Button>
            </Col>
        </Row>
    </Form>
  );
}

export default GridAutoSizingExample;
`}
          </CodePreview>
        </Card>
      </Block>


      
    </Layout>
  )
}

export default FormLayoutPage;