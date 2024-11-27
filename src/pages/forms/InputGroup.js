import { Card, Form, Row, Col, InputGroup, Button, Dropdown, SplitButton  } from 'react-bootstrap';

import Layout from '../../layout/default';
import Block from '../../components/Block/Block';
import CodePreview from '../../components/CodePreview/CodePreview';

function InputGroupPage() {
  return (
    <Layout title="Input group" content="container">
      <Block.Head page>
        <Block.HeadContent>
            <Block.Title>Input group</Block.Title>
            <Block.Text>Easily extend form controls by adding text, buttons, or button groups on either side of textual inputs, custom selects, and custom file inputs.</Block.Text>
        </Block.HeadContent>
      </Block.Head>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Example</Block.Title>
            <Block.Text>Place one add-on or button on either side of an input. You may also place one on both sides of an input. Remember to place <code>label</code>s outside the input group.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Row className="gx-gs gy-4">
                <Col className="col-12">
                    <InputGroup>
                        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                        <Form.Control type="text" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                    </InputGroup>
                </Col>
                <Col className="col-12">
                    <InputGroup>
                        <Form.Control type="text" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                        <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
                    </InputGroup>
                </Col>
                <Col className="col-12">
                    <div className="form-group">
                        <Form.Label htmlFor="basic-url">Your vanity URL</Form.Label>
                        <InputGroup>
                            <InputGroup.Text id="basic-addon3">https://example.com/users/</InputGroup.Text>
                            <Form.Control type="text" id="basic-url" aria-describedby="basic-addon3"/>
                        </InputGroup>
                    </div>
                </Col>
                <Col className="col-12">
                    <InputGroup>
                        <InputGroup.Text>$</InputGroup.Text>
                        <Form.Control type="text" aria-label="Amount (to the nearest dollar)"/>
                        <InputGroup.Text>.00</InputGroup.Text>
                    </InputGroup>
                </Col>
                <Col className="col-12">
                    <InputGroup>
                        <Form.Control type="text" placeholder="Username" aria-label="Username"/>
                        <InputGroup.Text>@</InputGroup.Text>
                        <Form.Control type="text" placeholder="Server" aria-label="Server"/>
                    </InputGroup>
                </Col>
                <Col className="col-12">
                    <InputGroup>
                        <InputGroup.Text>With textarea</InputGroup.Text>
                        <Form.Control as="textarea" aria-label="With textarea"></Form.Control>
                    </InputGroup>
                </Col>
            </Row>
          </Card.Body>
          <CodePreview>
          {`import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function BasicExample() {
  return (
    <InputGroup>
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control type="text" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
    </InputGroup>
  );
}

export default BasicExample;
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Sizing</Block.Title>
            <Block.Text>Use prop <code>size</code> prop on the <code>InputGroup</code> for small, large size. and contents within will automatically resize, no need for repeating the form control size prop on each element.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Row className="gx-gs gy-4">
                <Col className="col-12">
                    <InputGroup size="sm">
                        <InputGroup.Text>Small</InputGroup.Text>
                        <Form.Control type="text" />
                    </InputGroup>
                </Col>
                <Col className="col-12">
                    <InputGroup>
                        <InputGroup.Text>Default</InputGroup.Text>
                        <Form.Control type="text" />
                    </InputGroup>
                </Col>
                <Col className="col-12">
                    <InputGroup size="lg">
                        <InputGroup.Text>Large</InputGroup.Text>
                        <Form.Control type="text" />
                    </InputGroup>
                </Col>
            </Row>
          </Card.Body>
          <CodePreview>
          {`import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function BasicExample() {
  return (
    <InputGroup size="sm">
        <InputGroup.Text>Small</InputGroup.Text>
        <Form.Control type="text" />
    </InputGroup>
  );
}

export default BasicExample;
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Checkboxes and radios</Block.Title>
            <Block.Text>Use the <code>InputGroup.Radio</code> or <code>InputGroup.Checkbox</code> to add options to an input group.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Row className="gx-gs gy-4">
                <Col className="col-12">
                    <InputGroup>
                        <InputGroup.Checkbox className="mt-0"/>
                        <Form.Control />
                    </InputGroup>
                </Col>
                <Col className="col-12">
                    <InputGroup>
                        <InputGroup.Radio className="mt-0"/>
                        <Form.Control />
                    </InputGroup>
                </Col>
            </Row>
          </Card.Body>
          <CodePreview>
          {`import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function CheckboxesExample() {
  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
        <Form.Control aria-label="Text input with checkbox" />
      </InputGroup>
      <InputGroup>
        <InputGroup.Radio aria-label="Radio button for following text input" />
        <Form.Control aria-label="Text input with radio button" />
      </InputGroup>
    </>
  );
}

export default CheckboxesExample;
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Multiple inputs</Block.Title>
            <Block.Text>While multiple inputs are supported visually, validation styles are only available for input groups with a single input.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Row className="gx-gs gy-4">
                <Col className="col-12">
                    <InputGroup>
                        <InputGroup.Text>First and last name</InputGroup.Text>
                        <Form.Control />
                        <Form.Control />
                    </InputGroup>
                </Col>
            </Row>
          </Card.Body>
          <CodePreview>
          {`import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function MultipleInputsExample() {
  return (
    <InputGroup>
        <InputGroup.Text>First and last name</InputGroup.Text>
        <Form.Control />
        <Form.Control />
    </InputGroup>
  );
}

export default MultipleInputsExample;
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Multiple addons</Block.Title>
            <Block.Text>Multiple add-ons are supported and can be mixed with checkbox and radio input versions.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Row className="gx-gs gy-4">
                <Col className="col-12">
                    <InputGroup>
                        <InputGroup.Text>$</InputGroup.Text>
                        <InputGroup.Text>0.00</InputGroup.Text>
                        <Form.Control aria-label="Dollar amount (with dot and two decimal places)" />
                    </InputGroup>
                </Col>
                <Col className="col-12">
                    <InputGroup>
                        <Form.Control aria-label="Dollar amount (with dot and two decimal places)" />
                        <InputGroup.Text>$</InputGroup.Text>
                        <InputGroup.Text>0.00</InputGroup.Text>
                    </InputGroup>
                </Col>
            </Row>
          </Card.Body>
          <CodePreview>
          {`import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function MultipleAddonsExample() {
  return (
    <InputGroup>
        <InputGroup.Text>$</InputGroup.Text>
        <InputGroup.Text>0.00</InputGroup.Text>
        <Form.Control aria-label="Dollar amount (with dot and two decimal places)" />
    </InputGroup>
  );
}

export default MultipleAddonsExample;
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Button addons and dropdowns</Block.Title>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Row className="gx-gs gy-4">
                <Col className="col-12">
                    <InputGroup>
                        <Button variant="outline-secondary">
                            Button
                        </Button>
                        <Form.Control />
                    </InputGroup>
                </Col>
                <Col className="col-12">
                    <InputGroup>
                        <Form.Control placeholder="Recipient's username" />
                        <Button variant="outline-secondary">
                            Button
                        </Button>
                    </InputGroup>
                </Col>
                <Col className="col-12">
                    <InputGroup>
                        <Button variant="outline-secondary">
                            Button
                        </Button>
                        <Button variant="outline-secondary">
                            Button
                        </Button>
                        <Form.Control/>
                    </InputGroup>
                </Col>
                <Col className="col-12">
                    <InputGroup>
                        <Form.Control placeholder="Recipient's username"/>
                        <Button variant="outline-secondary">
                            Button
                        </Button>
                        <Button variant="outline-secondary">
                            Button
                        </Button>
                    </InputGroup>
                </Col>
                <Col className="col-12">
                    <InputGroup>
                        <Dropdown>
                            <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                                Dropdown
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Form.Control />
                    </InputGroup>
                </Col>
                <Col className="col-12">
                    <InputGroup>
                        <Form.Control />
                        <Dropdown>
                            <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic2">
                                Dropdown
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </InputGroup>
                </Col>
                <Col className="col-12">
                    <InputGroup>
                        <Dropdown>
                            <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic3">
                                Dropdown
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Form.Control />
                        <Dropdown>
                            <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic4">
                                Dropdown
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </InputGroup>
                </Col>
            </Row>
          </Card.Body>
          <CodePreview title="with button">
          {`import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function ButtonExample() {
  return (
    <InputGroup>
        <Button variant="outline-secondary">
            Button
        </Button>
        <Form.Control />
    </InputGroup>
  );
}

export default ButtonExample;
`}
          </CodePreview>
          <CodePreview title="with dropdown">
          {`import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function ButtonDropdownsExample() {
  return (
    <InputGroup>
        <Dropdown>
            <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                Dropdown
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        <Form.Control />
    </InputGroup>
  );
}

export default ButtonDropdownsExample;
`}
          </CodePreview>

        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Segmented buttons</Block.Title>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Row className="gx-gs gy-4">
                <Col className="col-12">
                    <InputGroup>
                        <SplitButton variant="outline-secondary" title="Action" id="segmented-button-dropdown-1">
                            <Dropdown.Item href="#">Action</Dropdown.Item>
                            <Dropdown.Item href="#">Another action</Dropdown.Item>
                            <Dropdown.Item href="#">Something else here</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#">Separated link</Dropdown.Item>
                        </SplitButton>
                        <Form.Control aria-label="Text input with dropdown button" />
                    </InputGroup>
                </Col>
                <Col className="col-12">
                    <InputGroup>
                        <Form.Control aria-label="Text input with dropdown button" />
                        <SplitButton variant="outline-secondary" title="Action" id="segmented-button-dropdown-1">
                            <Dropdown.Item href="#">Action</Dropdown.Item>
                            <Dropdown.Item href="#">Another action</Dropdown.Item>
                            <Dropdown.Item href="#">Something else here</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#">Separated link</Dropdown.Item>
                        </SplitButton>
                    </InputGroup>
                </Col>
            </Row>
          </Card.Body>
          <CodePreview>
          {`import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import SplitButton from 'react-bootstrap/SplitButton';

function SegmentedButtonDropdownsExample() {
  return (
    <InputGroup>
        <SplitButton variant="outline-secondary" title="Action" id="segmented-button-dropdown-1">
            <Dropdown.Item href="#">Action</Dropdown.Item>
            <Dropdown.Item href="#">Another action</Dropdown.Item>
            <Dropdown.Item href="#">Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#">Separated link</Dropdown.Item>
        </SplitButton>
        <Form.Control aria-label="Text input with dropdown button" />
    </InputGroup>
  );
}

export default SegmentedButtonDropdownsExample;
`}
          </CodePreview>
          

        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Custom forms</Block.Title>
            <Block.Text>Input groups include support for custom selects and custom file inputs. Browser default versions of these are not supported.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Row className="gx-gs gy-4">
                <Col className="col-12">
                    <InputGroup>
                        <InputGroup.Text>Options</InputGroup.Text>
                        <Form.Select>
                            <option value="">Choose...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </InputGroup>
                </Col>
                <Col className="col-12">
                    <InputGroup>
                        <Form.Select>
                            <option value="">Choose...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                        <InputGroup.Text>Options</InputGroup.Text>
                    </InputGroup>
                </Col>
                <Col className="col-12">
                    <InputGroup>
                        <Button variant="outline-secondary">Button</Button>
                        <Form.Select>
                            <option value="">Choose...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </InputGroup>
                </Col>
                <Col className="col-12">
                    <InputGroup>
                        <Form.Select>
                            <option value="">Choose...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                        <Button variant="outline-secondary">Button</Button>
                    </InputGroup>
                </Col>
            </Row>
          </Card.Body>
          <CodePreview title="with addon">
          {`import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function BasicExample() {
  return (
    <InputGroup>
        <InputGroup.Text>Options</InputGroup.Text>
        <Form.Select>
            <option value="">Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </Form.Select>
    </InputGroup>
  );
}

export default BasicExample;
`}
          </CodePreview>
          <CodePreview title="with button">
          {`import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

function BasicExample() {
  return (
    <InputGroup>
        <Button variant="outline-secondary">Button</Button>
        <Form.Select>
            <option value="">Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </Form.Select>
    </InputGroup>
  );
}

export default BasicExample;
`}
          </CodePreview>
          

        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Custom file input</Block.Title>
            <Block.Text>Input groups include support for custom selects and custom file inputs. Browser default versions of these are not supported.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Row className="gx-gs gy-4">
                <Col className="col-12">
                    <InputGroup>
                        <InputGroup.Text htmlFor="inputGroupFile01">Upload</InputGroup.Text>
                        <Form.Control type="file" id="inputGroupFile01" />
                    </InputGroup>
                </Col>
                <Col className="col-12">
                    <InputGroup>
                        <Form.Control type="file" id="inputGroupFile02" />
                        <InputGroup.Text htmlFor="inputGroupFile02">Upload</InputGroup.Text>
                    </InputGroup>
                </Col>
            </Row>
          </Card.Body>
          <CodePreview>
          {`import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function BasicExample() {
  return (
    <InputGroup>
        <InputGroup.Text htmlFor="inputGroupFile01">Upload</InputGroup.Text>
        <Form.Control type="file" id="inputGroupFile01" />
    </InputGroup>
  );
}

export default BasicExample;
`}
          </CodePreview>

        </Card>
      </Block>

      
    </Layout>
  )
}

export default InputGroupPage