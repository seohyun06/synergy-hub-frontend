import { Card, Form, Row, Col} from 'react-bootstrap';

import Layout from '../../layout/default';
import Block from '../../components/Block/Block';
import CodePreview from '../../components/CodePreview/CodePreview';
import Select from '../../components/Form/Select';
import Tags from '../../components/Form/Tags';

function FormSelectPage() {
  return (
    <Layout title="Select" content="container">
      <Block.Head page className="wide-md">
        <Block.HeadContent>
            <Block.Title>Custom Select Box & Tag</Block.Title>
            <Block.Text>Here is some custom styled select fields using <a href="https://choices-js.github.io/Choices/" target="_blank" rel="noreferrer">choice.js</a> plugin.</Block.Text>
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
            <Row className="gx-gs gy-3">
                <Col md="6">
                    <Form.Group className="form-group">
                        <Form.Label>Single select input</Form.Label>
                        <div className="form-control-wrap">
                            <Select removeItemButton>
                                <option value="">Select Payment Method</option>
                                <option value="1">PayPal</option>
                                <option value="2">Bank Transfer</option>
                                <option value="3">Skrill</option>
                                <option value="4">Moneygram</option>
                            </Select>
                        </div>
                    </Form.Group>
                </Col>
                <Col md="6">
                    <Form.Group className="form-group">
                        <Form.Label>Multiple select input</Form.Label>
                        <div className="form-control-wrap">
                            <Select multiple removeItemButton>
                                <option value="">Select Payment Method</option>
                                <option value="1">PayPal</option>
                                <option value="2">Bank Transfer</option>
                                <option value="3">Skrill</option>
                                <option value="4">Moneygram</option>
                            </Select>
                        </div>
                    </Form.Group>
                </Col>
                <Col sm="12">
                    <div className="form-note">
                        Use <code>multiple</code> prop on <code>Select</code> to enable multiple option, Use <code>removeItemButton</code> prop to enable remove cross button on select.
                    </div>
                </Col>
                <Col md="6">
                    <Form.Group className="form-group">
                        <Form.Label>Tag (with cross)</Form.Label>
                        <div className="form-control-wrap">
                            <Tags removeItemButton defaultValue="Tag1,Tag2" type="text" placeholder="Enter something"/>
                        </div>
                    </Form.Group>
                </Col>
                <Col md="6">
                    <Form.Group className="form-group">
                        <Form.Label>Tag (without cross)</Form.Label>
                        <div className="form-control-wrap">
                            <Tags defaultValue="Tag1,Tag2" type="text" placeholder="Enter something"/>
                        </div>
                    </Form.Group>
                </Col>
                <Col sm="12">
                    <div className="form-note">
                        Omit <code>removeItemButton</code> prop from <code>input</code> to hide cross icon.
                    </div>
                </Col>
                <Col md="6">
                    <Form.Group className="form-group">
                        <Form.Label>Select Disabled</Form.Label>
                        <div className="form-control-wrap">
                            <Select disabled>
                                <option value="">Select Payment Method</option>
                                <option value="1">PayPal</option>
                                <option value="2">Bank Transfer</option>
                                <option value="3">Skrill</option>
                                <option value="4">Moneygram</option>
                            </Select>
                        </div>
                    </Form.Group>
                </Col>
                <Col md="6">
                    <Form.Group className="form-group">
                        <Form.Label>Tag Disabled</Form.Label>
                        <div className="form-control-wrap">
                            <Tags defaultValue="Tag1,Tag2" type="text" placeholder="Enter something" disabled/>
                        </div>
                    </Form.Group>
                </Col>
                <Col sm="12">
                    <div className="form-note">
                        Use <code>disabled</code> prop to <code>select</code> and tag <code>input</code> for disabled state.
                    </div>
                </Col>
            </Row>
          </Card.Body>
          <CodePreview title="select input">
          {`import Select from '../../components/Form/Select';

function CustomSelectExample() {
  return (
    <Select removeItemButton>
        <option value="">Select Payment Method</option>
        <option value="1">PayPal</option>
        <option value="2">Bank Transfer</option>
        <option value="3">Skrill</option>
        <option value="4">Moneygram</option>
    </Select>
  );
}

export default CustomSelectExample;
`}
          </CodePreview>
          <CodePreview title="tag input">
          {`import Tags from '../../components/Form/Tags';

function CustomTagsInputExample() {
  return (
    <Tags removeItemButton defaultValue="Tag1,Tag2" type="text" placeholder="Enter something"/>
  );
}

export default CustomTagsInputExample;
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Default Example</Block.Title>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Row className="g-3 gx-gs">
                <Col md="6">
                    <Form.Group className="form-group">
                        <Form.Label htmlFor="exampleFormSelect1">Default Select</Form.Label>
                        <div className="form-control-wrap">
                            <Form.Select id="exampleFormSelect1" aria-label="Default select example">
                                <option value="">Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </div>
                    </Form.Group>
                </Col>
                <Col md="6">
                    <Form.Group className="form-group">
                        <Form.Label htmlFor="exampleFormSelectDisabled">Disabled Select</Form.Label>
                        <div className="form-control-wrap">
                            <Form.Select id="exampleFormSelectDisabled" aria-label="Default select example" disabled>
                                <option value="">Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </div>
                    </Form.Group>
                </Col>
                <Col md="6">
                    <Form.Group className="form-group">
                        <Form.Label htmlFor="exampleFormSelectMultiple">Multiple Select</Form.Label>
                        <div className="form-control-wrap">
                            <Form.Select id="exampleFormSelectMultiple" multiple aria-label="multiple select example">
                                <option value="">Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </div>
                    </Form.Group>
                </Col>
                <Col md="6">
                    <Form.Group className="form-group">
                        <Form.Label htmlFor="exampleFormSelectMultipleDisabled">Disabled Multiple Select</Form.Label>
                        <div className="form-control-wrap">
                            <Form.Select id="exampleFormSelectMultipleDisabled" multiple aria-label="multiple select example" disabled>
                                <option value="">Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </div>
                    </Form.Group>
                </Col>
                <div className="col-12">
                    <div className="form-note">
                        Use <code>multiple</code> or <code>disabled</code> attribute to <code>select</code> to enable multiple, disabled state.
                    </div>
                </div>
            </Row>
          </Card.Body>
          <CodePreview title="select input">
          {`import Form from 'react-bootstrap/Form';

function SelectBasicExample() {
  return (
    <Form.Select aria-label="Default select example">
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
  );
}

export default SelectBasicExample;
`}
          </CodePreview>

        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Sizing</Block.Title>
            <Block.Text>Set heights using <code>size</code> prop like <code>size="lg"</code> and <code>size="sm"</code> on <code>Form.Control</code> for large and small size</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Row className="g-3 align-items-center">
                <Col lg="4">
                    <div className="form-control-wrap">
                        <Form.Select size="lg">
                            <option value="">Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </div>
                </Col>
                <Col lg="4">
                    <div className="form-control-wrap">
                        <Form.Select>
                            <option value="">Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </div>
                </Col>
                <Col lg="4">
                    <div className="form-control-wrap">
                        <Form.Select size="sm">
                            <option value="">Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </div>
                </Col>
            </Row>
          </Card.Body>
          <CodePreview title="select input">
          {`<Form.Select size="lg">
    <option>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
</Form.Select>
`}
          </CodePreview>

        </Card>
      </Block>



    </Layout>
  )
}

export default FormSelectPage