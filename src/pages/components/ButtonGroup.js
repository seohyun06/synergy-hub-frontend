import {Card, Button, ButtonGroup, ButtonToolbar, Form, InputGroup, DropdownButton, Dropdown   } from 'react-bootstrap';

import Layout from '../../layout/default';
import Block from '../../components/Block/Block';
import CodePreview from '../../components/CodePreview/CodePreview';

function ButtonGroupPage() {
  return (
    <Layout title="Button group" content="container">
      <Block.Head page>
        <Block.HeadContent>
            <Block.Title>Button group</Block.Title>
            <Block.Text>Group a series of buttons together on a single line or stack them in a vertical column.</Block.Text>
        </Block.HeadContent>
      </Block.Head>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Text> <strong className="text-black">Note:</strong> When you copy the code example and if you paste your copied code to any other component. these will not work because you just copied the component's name from code example. to use you have to <code>import</code> these component.</Block.Text>
            <Block.Text>How to import component and use see the <a href="#docs">docs</a></Block.Text>
            <Block.Title tag="h3">Examples</Block.Title>
            <Block.Text>Wrap a series of <code>&lt;Button&gt;</code>s in a <code>&lt;ButtonGroup&gt;</code>.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <ButtonGroup aria-label="Basic example">
                <Button variant="primary">Left</Button>
                <Button variant="primary">Middle</Button>
                <Button variant="primary">Right</Button>
            </ButtonGroup>
          </Card.Body>
          <CodePreview>
          {`<ButtonGroup aria-label="Basic example">
    <Button variant="primary">Left</Button>
    <Button variant="primary">Middle</Button>
    <Button variant="primary">Right</Button>
</ButtonGroup>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Mixed styles</Block.Title>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <ButtonGroup aria-label="Basic example">
                <Button variant="danger">Left</Button>
                <Button variant="warning">Middle</Button>
                <Button variant="success">Right</Button>
            </ButtonGroup>
          </Card.Body>
          <CodePreview>
          {`<ButtonGroup aria-label="Basic example">
    <Button variant="danger">Left</Button>
    <Button variant="warning">Middle</Button>
    <Button variant="success">Right</Button>
</ButtonGroup>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Outlined styles</Block.Title>
            <Block.Text>For a lighter touch, Button group also come in <code>outline-*</code> variants with no background color.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <ButtonGroup aria-label="Basic example">
                <Button variant="outline-primary">Left</Button>
                <Button variant="outline-primary">Middle</Button>
                <Button variant="outline-primary">Right</Button>
            </ButtonGroup>
          </Card.Body>
          <CodePreview>
          {`<ButtonGroup aria-label="Basic example">
    <Button variant="outline-primary">Left</Button>
    <Button variant="outline-primary">Middle</Button>
    <Button variant="outline-primary">Right</Button>
</ButtonGroup>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Checkbox and radio button groups</Block.Title>
            <Block.Text>Combine button-like <code>checkbox</code> and <code>radio</code> toggle buttons into a seamless looking button group.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <ul className="d-flex gap g-4 flex-wrap">
                <li>
                    <ButtonGroup aria-label="Basic checkbox toggle button group">
                        <input type="checkbox" className="btn-check" id="btncheck1" autoComplete="off"/>
                        <Button as="label" variant="outline-primary" htmlFor="btncheck1">Checkbox 1</Button>

                        <input type="checkbox" className="btn-check" id="btncheck2" autoComplete="off"/>
                        <Button as="label" variant="outline-primary" htmlFor="btncheck2">Checkbox 2</Button>
                        
                        <input type="checkbox" className="btn-check" id="btncheck3" autoComplete="off"/>
                        <Button as="label" variant="outline-primary" htmlFor="btncheck3">Checkbox 3</Button>
                    </ButtonGroup>
                </li>
                <li>
                    <ButtonGroup aria-label="Basic radio toggle button group">
                        <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off"/>
                        <Button as="label" variant="outline-primary" htmlFor="btnradio1">Radio 1</Button>
                        
                        <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off"/>
                        <Button as="label" variant="outline-primary" htmlFor="btnradio2">Radio 2</Button>
                        
                        <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off"/>
                        <Button as="label" variant="outline-primary" htmlFor="btnradio3">Radio 3</Button>
                    </ButtonGroup>
                </li>
            </ul>
          </Card.Body>
          <CodePreview>
          {`<ButtonGroup aria-label="Basic checkbox toggle button group">
    <input type="checkbox" className="btn-check" id="btncheck1" autoComplete="off"/>
    <Button as="label" variant="outline-primary" htmlFor="btncheck1">Checkbox 1</Button>

    <input type="checkbox" className="btn-check" id="btncheck2" autoComplete="off"/>
    <Button as="label" variant="outline-primary" htmlFor="btncheck2">Checkbox 2</Button>
    
    <input type="checkbox" className="btn-check" id="btncheck3" autoComplete="off"/>
    <Button as="label" variant="outline-primary" htmlFor="btncheck3">Checkbox 3</Button>
</ButtonGroup>

<ButtonGroup aria-label="Basic radio toggle button group">
    <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off"/>
    <Button as="label" variant="outline-primary" htmlFor="btnradio1">Radio 1</Button>
    
    <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off"/>
    <Button as="label" variant="outline-primary" htmlFor="btnradio2">Radio 2</Button>
    
    <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off"/>
    <Button as="label" variant="outline-primary" htmlFor="btnradio3">Radio 3</Button>
</ButtonGroup>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Button toolbar</Block.Title>
            <Block.Text>Combine sets of <code>&lt;ButtonGroup&gt;</code>s into a <code>&lt;ButtonToolbar&gt;</code> for more complex components.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <ButtonToolbar aria-label="Toolbar with button groups">
                <ButtonGroup className="me-2 mb-2" aria-label="First group">
                    <Button>1</Button> 
                    <Button>2</Button> 
                    <Button>3</Button>
                    <Button>4</Button>
                </ButtonGroup>
                <ButtonGroup className="me-2 mb-2" aria-label="Second group">
                    <Button variant="secondary">5</Button> 
                    <Button variant="secondary">6</Button> 
                    <Button variant="secondary">7</Button>
                </ButtonGroup>
                <ButtonGroup className="mb-2" aria-label="Third group">
                    <Button variant="info">8</Button>
                </ButtonGroup>
            </ButtonToolbar>
            <p className="mt-5">Feel free to mix input groups with button groups in your toolbars. Similar to the example above, you’ll likely need some utilities though to space things properly.</p>

            <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">
                <ButtonGroup className="me-2" aria-label="First group">
                    <Button variant="outline-secondary">1</Button>
                    <Button variant="outline-secondary">2</Button>
                    <Button variant="outline-secondary">3</Button>
                    <Button variant="outline-secondary">4</Button>
                </ButtonGroup>
                <InputGroup>
                    <InputGroup.Text id="btnGroupAddon">@</InputGroup.Text>
                    <Form.Control
                        type="text"
                        placeholder="Input group example"
                        aria-label="Input group example"
                        aria-describedby="btnGroupAddon"
                    />
                </InputGroup>
            </ButtonToolbar>

            <ButtonToolbar className="justify-content-between" aria-label="Toolbar with Button groups">
                <ButtonGroup aria-label="First group">
                    <Button variant="outline-secondary">1</Button>
                    <Button variant="outline-secondary">2</Button>
                    <Button variant="outline-secondary">3</Button>
                    <Button variant="outline-secondary">4</Button>
                </ButtonGroup>
                <InputGroup>
                    <InputGroup.Text id="btnGroupAddon2">@</InputGroup.Text>
                    <Form.Control
                        type="text"
                        placeholder="Input group example"
                        aria-label="Input group example"
                        aria-describedby="btnGroupAddon2"
                    />
                </InputGroup>
            </ButtonToolbar>

          </Card.Body>
          <CodePreview>
          {`<ButtonToolbar aria-label="Toolbar with button groups">
    <ButtonGroup className="me-2" aria-label="First group">
        <Button>1</Button> 
        <Button>2</Button> 
        <Button>3</Button>
        <Button>4</Button>
    </ButtonGroup>
    <ButtonGroup className="me-2" aria-label="Second group">
        <Button variant="secondary">5</Button> 
        <Button variant="secondary">6</Button> 
        <Button variant="secondary">7</Button>
    </ButtonGroup>
    <ButtonGroup aria-label="Third group">
        <Button variant="info">8</Button>
    </ButtonGroup>
</ButtonToolbar>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Sizing</Block.Title>
            <Block.Text>Instead of applying button sizing props to every button in a group, just add size prop to the <code>&lt;ButtonGroup&gt;</code>.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <ul>
                <li className="mb-3">
                    <ButtonGroup size="lg">
                        <Button>Left</Button>
                        <Button>Middle</Button>
                        <Button>Right</Button>
                    </ButtonGroup>
                </li>
                <li className="mb-3">
                    <ButtonGroup>
                        <Button>Left</Button>
                        <Button>Middle</Button>
                        <Button>Right</Button>
                    </ButtonGroup>
                </li>
                <li>
                    <ButtonGroup size="sm">
                        <Button>Left</Button>
                        <Button>Middle</Button>
                        <Button>Right</Button>
                    </ButtonGroup>
                </li>
            </ul>
          </Card.Body>
          <CodePreview>
          {`<ButtonGroup size="lg">
    <Button>Left</Button>
    <Button>Middle</Button>
    <Button>Right</Button>
</ButtonGroup>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Nesting</Block.Title>
            <Block.Text>You can place other button types within the <code>ButtonGroup</code> like <code>DropdownButton</code>s.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <ButtonGroup>
                <Button>1</Button>
                <Button>2</Button>
                <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-nested-dropdown">
                    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                </DropdownButton>
            </ButtonGroup>
          </Card.Body>
          <CodePreview>
          {`<ButtonGroup>
    <Button>1</Button>
    <Button>2</Button>
    <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-nested-dropdown">
        <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
        <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
    </DropdownButton>
</ButtonGroup>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Vertical variation</Block.Title>
            <Block.Text>Make a set of buttons appear vertically stacked rather than horizontally, by adding <code>vertical</code> to the <code>ButtonGroup</code>. <span className="text-base">Split button dropdowns are not supported here</span>.
            </Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <ul className="d-flex gap g-4 flex-wrap">
                <li>
                    <ButtonGroup vertical>
                        <Button>Button</Button>
                        <Button>Button</Button>

                        <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-1">
                            <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                        </DropdownButton>

                        <Button>Button</Button>
                        <Button>Button</Button>

                        <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-2">
                            <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                        </DropdownButton>

                        <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-3">
                            <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                        </DropdownButton>
                    </ButtonGroup>
                </li>
                <li>
                    <ButtonGroup vertical>
                        <Button variant="dark">Button</Button>
                        <Button variant="dark">Button</Button>
                        <Button variant="dark">Button</Button>
                        <Button variant="dark">Button</Button>
                        <Button variant="dark">Button</Button>
                    </ButtonGroup>
                </li>
                <li>
                <ButtonGroup vertical>
                    <input type="radio" className="btn-check" id="vbtn-radio1" autoComplete="off" name="vbtn-radio"/>
                    <Button as="label" variant="outline-danger" htmlFor="vbtn-radio1">Radio 1</Button>

                    <input type="radio" className="btn-check" id="vbtn-radio2" autoComplete="off" name="vbtn-radio"/>
                    <Button as="label" variant="outline-danger" htmlFor="vbtn-radio2">Radio 2</Button>

                    <input type="radio" className="btn-check" id="vbtn-radio3" autoComplete="off" name="vbtn-radio"/>
                    <Button as="label" variant="outline-danger" htmlFor="vbtn-radio3">Radio 3</Button>
                </ButtonGroup>
                </li>
            </ul>
          </Card.Body>
          <CodePreview>
          {`<ButtonGroup vertical>
    <Button>Button</Button>
    <Button>Button</Button>

    <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-1">
        <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
        <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
    </DropdownButton>

    <Button>Button</Button>
    <Button>Button</Button>

    <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-2">
        <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
        <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
    </DropdownButton>

    <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-3">
        <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
        <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
    </DropdownButton>
</ButtonGroup>
`}
          </CodePreview>
        </Card>
      </Block>

    </Layout>
  )
}

export default ButtonGroupPage