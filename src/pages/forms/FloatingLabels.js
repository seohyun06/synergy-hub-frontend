import { Card, Form, Row, Col, FloatingLabel } from 'react-bootstrap';

import Layout from '../../layout/default';
import Block from '../../components/Block/Block';
import CodePreview from '../../components/CodePreview/CodePreview';


function FloatingLabelsPage() {
  return (
    <Layout title="Floating labels" content="container">
      <Block.Head page className="wide-md">
        <Block.HeadContent>
            <Block.Title>Floating labels</Block.Title>
            <Block.Text>Create beautifully simple form labels that float over your input fields.</Block.Text>
        </Block.HeadContent>
      </Block.Head>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Example</Block.Title>
            <Block.Text>Wrap a <code>Form.Control</code> element in <code>FloatingLabel</code> to enable floating labels with Bootstrap’s textual form fields. A <code>placeholder</code> is required on each <code>Form.Control</code> as our method of CSS-only floating labels uses the :placeholder-shown pseudo-element.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Row className="gx-gs gy-4">
                <Col md="6">
                    <FloatingLabel controlId="floatingInput" label="Email address">
                        <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                </Col>
                <Col md="6">
                    <FloatingLabel controlId="floatingSelect" label="Works with selects">
                        <Form.Select aria-label="Floating label select example">
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </FloatingLabel>
                </Col>
                <Col md="6">
                    <FloatingLabel controlId="floatingInput" label="Input with value">
                        <Form.Control type="email" placeholder="name@example.com" defaultValue="test@example.com"/>
                    </FloatingLabel>
                </Col>
                <Col md="6">
                    <FloatingLabel controlId="floatingInput" label="Invalid input">
                        <Form.Control className="is-invalid" type="email" placeholder="name@example.com" defaultValue="test@example.com"/>
                    </FloatingLabel>
                </Col>
            </Row>
          </Card.Body>
          <CodePreview title="input">
          {`import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function FormFloatingBasicExample() {
  return (
    <FloatingLabel controlId="floatingInput" label="Email address">
        <Form.Control type="email" placeholder="name@example.com" />
    </FloatingLabel>
  );
}

export default FormFloatingBasicExample;
`}
          </CodePreview>
          <CodePreview title="select">
          {`import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function FormFloatingSelectExample() {
  return (
    <FloatingLabel controlId="floatingSelect" label="Works with selects">
        <Form.Select aria-label="Floating label select example">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </Form.Select>
    </FloatingLabel>
  );
}

export default FormFloatingSelectExample;
`}
          </CodePreview>
          
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Readonly plaintext</Block.Title>
            <Block.Text>Floating labels also support <code>plaintext</code>, which can be helpful for toggling from an editable input to a plaintext value without affecting the page layout.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <div className="mb-2">
                <FloatingLabel controlId="floatingInput" label="Empty input">
                    <Form.Control plaintext readOnly type="email" placeholder="name@example.com" />
                </FloatingLabel>
            </div>
            <FloatingLabel controlId="floatingInput" label="Input with value">
                <Form.Control plaintext readOnly type="email" placeholder="name@example.com" defaultValue="test@example.com"/>
            </FloatingLabel>
          </Card.Body>
          <CodePreview>
          {`import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function FormFloatingExample() {
  return (
    <FloatingLabel controlId="floatingInput" label="Empty input">
        <Form.Control plaintext readOnly type="email" placeholder="name@example.com" />
    </FloatingLabel>
  );
}

export default FormFloatingExample;
`}
          </CodePreview>
          
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Layout</Block.Title>
            <Block.Text>When working with the Bootstrap grid system, be sure to place form elements within column classes.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Row className="g-2">
                <Col md="6">
                    <FloatingLabel label="Email address">
                        <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                </Col>
                <Col md="6">
                    <FloatingLabel label="Works with selects">
                        <Form.Select aria-label="Floating label select example">
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </FloatingLabel>
                </Col>
            </Row>
          </Card.Body>
          <CodePreview>
          {`import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function FormFloatingLayoutExample() {
  return (
    <Row className="g-2">
        <Col md="6">
            <FloatingLabel label="Email address">
                <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
        </Col>
        <Col md="6">
            <FloatingLabel label="Works with selects">
                <Form.Select aria-label="Floating label select example">
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
            </FloatingLabel>
        </Col>
    </Row>
  );
}

export default FormFloatingLayoutExample;
`}
          </CodePreview>
          
        </Card>
      </Block>




    </Layout>
  )
}

export default FloatingLabelsPage