import { Card, Form, Row, Col} from 'react-bootstrap';

import Layout from '../../layout/default';
import Block from '../../components/Block/Block';
import CodePreview from '../../components/CodePreview/CodePreview';
import { Icon } from '../../components';

function FormControlPage() {
  return (
    <Layout title="Form controls" content="container">
      <Block.Head page className="wide-md">
        <Block.HeadContent>
            <Block.Title>Form controls</Block.Title>
            <Block.Text>Give textual form controls like inputs and textareas an upgrade with custom styles, sizing, focus states, and more.</Block.Text>
        </Block.HeadContent>
      </Block.Head>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Example</Block.Title>
            <Block.Text>The <code>FormControl</code> component renders a form control with Bootstrap styling. The <code>FormGroup</code> component wraps a form control with proper spacing, along with support for a label, help text, and validation state. To ensure accessibility, set <code>controlId</code> on <code>FormGroup</code>, and use <code>FormLabel</code> for the label.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Row className="g-3 gx-gs">
                <Col md="6">
                    <Form.Group className="form-group">
                        <Form.Label htmlFor="exampleFormControlInputText1">Input text</Form.Label>
                        <div className="form-control-wrap">
                            <Form.Control type="text" id="exampleFormControlInputText1" placeholder="Input text placeholder"/>
                        </div>
                    </Form.Group>
                </Col>
                <Col md="6">
                    <Form.Group className="form-group">
                        <Form.Label htmlFor="exampleFormControlInputText2">Input with hint</Form.Label>
                        <div className="form-control-wrap">
                            <div className="form-control-hint"><span>hint</span></div>
                            <Form.Control type="text" id="exampleFormControlInputText2" placeholder="Input text placeholder"/>
                        </div>
                    </Form.Group>
                </Col>
                <Col md="6">
                    <Form.Group className="form-group">
                        <Form.Label htmlFor="exampleFormControlInputText3">Input with start icon</Form.Label>
                        <div className="form-control-wrap">
                            <div className="form-control-icon start"><Icon name="eye"></Icon></div>
                            <Form.Control type="text" id="exampleFormControlInputText3" placeholder="Input text placeholder"/>
                        </div>
                    </Form.Group>
                </Col>
                <Col md="6">
                    <Form.Group className="form-group">
                        <Form.Label htmlFor="exampleFormControlInputText4">Input with end icon</Form.Label>
                        <div className="form-control-wrap">
                            <div className="form-control-icon end"><Icon name="eye"></Icon></div>
                            <Form.Control type="text" id="exampleFormControlInputText4" placeholder="Input text placeholder"/>
                        </div>
                    </Form.Group>
                </Col>
                <Col md="6">
                    <Form.Group className="form-group">
                        <Form.Label htmlFor="exampleFormControlInputText5">Default Select</Form.Label>
                        <div className="form-control-wrap">
                            <Form.Select id="exampleFormControlInputText5" aria-label="Default select example">
                                <option value="0">Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </div>
                    </Form.Group>
                </Col>
                <Col md="6">
                    <Form.Group className="form-group">
                        <Form.Label htmlFor="exampleFormControlInputText6">Default file input example</Form.Label>
                        <div className="form-control-wrap">
                            <Form.Control type="file" id="exampleFormControlInputText6"/>
                        </div>
                    </Form.Group>
                </Col>
                <Col md="6">
                    <Form.Group className="form-group">
                        <Form.Label htmlFor="exampleFormControlInputText7">Multiple Select</Form.Label>
                        <div className="form-control-wrap">
                            <Form.Select id="exampleFormControlInputText7" multiple aria-label="multiple select example">
                                <option value="0">Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </div>
                    </Form.Group>
                </Col>
                <Col md="6">
                    <Form.Group className="form-group">
                        <Form.Label htmlFor="exampleFormControlTextarea8">Example textarea</Form.Label>
                        <div className="form-control-wrap">
                            <Form.Control as="textarea" placeholder="Textarea Placeholder" id="exampleFormControlTextarea8" rows="3"></Form.Control>
                        </div>
                    </Form.Group>
                </Col>
            </Row>
            <p className="mt-4">Use <code>multiple</code> attribute to select for multiple select.</p>
          </Card.Body>
          <CodePreview title="input - basic">
          {`import Form from 'react-bootstrap/Form';

function BasicExample() {
  return (
    <Form.Group className="form-group">
        <Form.Label htmlFor="exampleFormControlInputText1">Input text</Form.Label>
        <div className="form-control-wrap">
            <Form.Control type="text" id="exampleFormControlInputText1" placeholder="Input text placeholder"/>
        </div>
    </Form.Group>
  );
}

export default BasicExample;
`}
          </CodePreview>
          <CodePreview title="input - with hint">
          {`<div className="form-control-wrap">
    <div className="form-control-hint"><span>hint</span></div>
    <Form.Control type="text" id="exampleFormControlInputText2" placeholder="Input text placeholder"/>
</div>
`}
          </CodePreview>
          <CodePreview title="input - with start icon">
          {`<div className="form-control-wrap">
    <div className="form-control-icon start"><Icon name="eye"></Icon></div>
    <Form.Control type="text" id="exampleFormControlInputText3" placeholder="Input text placeholder"/>
</div>
`}
          </CodePreview>

          <CodePreview title="input - with end icon">
          {`<div className="form-control-wrap">
    <div className="form-control-icon end"><Icon name="eye"></Icon></div>
    <Form.Control type="text" id="exampleFormControlInputText4" placeholder="Input text placeholder"/>
</div>
`}
          </CodePreview>

          <CodePreview title="select">
          {`<Form.Select id="exampleFormControlInputText5" aria-label="Default select example">
    <option value="0">Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
</Form.Select>
`}
          </CodePreview>

          <CodePreview title="file input">
          {`<Form.Control type="file" id="exampleFormControlInputText6"/>
`}
          </CodePreview>
          <CodePreview title="textarea">
          {`<Form.Control as="textarea" placeholder="Textarea Placeholder" id="exampleFormControlTextarea8" rows="3"></Form.Control>
`}
          </CodePreview>

        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Sizing</Block.Title>
            <Block.Text>Use <code>size</code> prop on <code>FormControl</code> to change the size of the input.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Row className="g-3 align-items-center">
                <Col lg="4">
                    <Form.Group className="form-group">
                        <div className="form-control-wrap">
                            <Form.Control size="lg" type="text" placeholder="Input large"/>
                        </div>
                    </Form.Group>
                </Col>
                <Col lg="4">
                    <Form.Group className="form-group">
                        <div className="form-control-wrap">
                            <Form.Control type="text" placeholder="Input default"/>
                        </div>
                    </Form.Group>
                </Col>
                <Col lg="4">
                    <Form.Group className="form-group">
                        <div className="form-control-wrap">
                            <Form.Control size="sm" type="text" placeholder="Input small"/>
                        </div>
                    </Form.Group>
                </Col>
                <Col lg="4">
                    <Form.Group className="form-group">
                        <div className="form-control-wrap">
                            <Form.Select size="lg">
                                <option value="0">Large select</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </div>
                    </Form.Group>
                </Col>
                <Col lg="4">
                    <Form.Group className="form-group">
                        <div className="form-control-wrap">
                            <Form.Select>
                                <option value="0">Default select</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </div>
                    </Form.Group>
                </Col>
                <Col lg="4">
                    <Form.Group className="form-group">
                        <div className="form-control-wrap">
                            <Form.Select size="sm">
                                <option value="0">Small select</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </div>
                    </Form.Group>
                </Col>
            </Row>
          </Card.Body>
          <CodePreview title="input">
          {`<Form.Control size="lg" type="text" placeholder="Input large"/>
`}
          </CodePreview>
          <CodePreview title="select">
          {`<Form.Select size="lg">
    <option value="0">Small select</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
</Form.Select>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Readonly and Disabled</Block.Title>
            <Block.Text>Add the <code>disabled</code> ro <code>readOnly</code> boolean attribute on an input to give it a grayed out appearance and remove pointer events.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Row className="g-3 align-items-center">
                <Col lg="4">
                    <Form.Group className="form-group">
                        <Form.Label>Readonly</Form.Label>
                        <div className="form-control-wrap">
                            <Form.Control type="text" placeholder="Readonly input example" readOnly/>
                        </div>
                    </Form.Group>
                </Col>
                <Col lg="4">
                    <Form.Group className="form-group">
                        <Form.Label>Disabled</Form.Label>
                        <div className="form-control-wrap">
                            <Form.Control type="text" placeholder="Disabled input example" disabled/>
                        </div>
                    </Form.Group>
                </Col>
                <Col lg="4">
                    <Form.Group className="form-group">
                        <Form.Label>Disabled Readonly</Form.Label>
                        <div className="form-control-wrap">
                            <Form.Control type="text" placeholder="Disabled Readonly example" disabled readOnly/>
                        </div>
                    </Form.Group>
                </Col>
                <Col sm="12">
                    <div className="mt-4">
                        <Form.Group className="form-group">
                            <Form.Label>Readonly plain text</Form.Label>
                            <div className="form-control-wrap">
                                <Form.Control plaintext readOnly defaultValue="email@example.com" />
                            </div>
                        </Form.Group>
                    </div>
                </Col>
            </Row>
            <div className="form-note mt-4">
                Use the <code>plaintext</code> prop on <code>FormControl</code> to remove the default form field styling and preserve the correct margin and padding.
            </div>
          </Card.Body>
          <CodePreview title="readonly">
          {`<Form.Control type="text" placeholder="Readonly input example" readOnly/>
`}
          </CodePreview>
          <CodePreview title="plaintext">
          {`<Form.Control plaintext readOnly defaultValue="email@example.com" />
`}
          </CodePreview>
        </Card>
      </Block>

    </Layout>
  )
}

export default FormControlPage