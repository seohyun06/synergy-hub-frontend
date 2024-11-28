import {Card, Dropdown, ButtonGroup, Button, Nav, Navbar, NavDropdown, Container, SplitButton, Row, Col   } from 'react-bootstrap';

import Layout from '../../layout/default';
import Block from '../../components/Block/Block';
import CodePreview from '../../components/CodePreview/CodePreview';

function DropdownPage() {
  return (
    <Layout title="Dropdowns" content="container">
      <Block.Head page>
        <Block.HeadContent>
            <Block.Title>Dropdowns</Block.Title>
            <Block.Text>Toggle contextual overlays for displaying lists of links and more with the Bootstrap dropdown plugin</Block.Text>
        </Block.HeadContent>
      </Block.Head>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Text><strong className="text-black">Note:</strong> When you copy the code example and if you paste your copied code to any other component. these will not work because you just copied the component's name from code example. to use you have to <code>import</code> these component.</Block.Text>
            <Block.Text>How to import component and use see the <a href="#docs">docs</a></Block.Text>
            <Block.Title tag="h3">Examples</Block.Title>
            <Block.Text>The basic Dropdown is composed of a wrapping <code>&lt;Dropdown&gt;</code> and inner <code>&lt;DropdownMenu&gt;</code>, and <code>&lt;DropdownToggle&gt;</code>. By default the <code>&lt;DropdownToggle&gt;</code> will render a Button component and accepts all the same props.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    Dropdown Button
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <p className="mt-5">The best part is you can do this with any button variant, too:</p>
            <Dropdown>
                <Dropdown.Toggle variant="danger" id="dropdown-basic-danger">
                    Dropdown Button
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
          </Card.Body>
          <CodePreview>
          {`import Dropdown from 'react-bootstrap/Dropdown';

function BasicExample() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
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
            <Block.Title tag="h3">Split button dropdowns</Block.Title>
            <Block.Text>Similarly, You create a split dropdown by combining the <code>Dropdown</code> components with another <code>Button</code> and a <code>ButtonGroup</code>. or Alternatively, you can use <code>SplitButton</code> component instend.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <ul className="d-flex gap g-3">
                <li>
                    <Dropdown as={ButtonGroup}>
                        <Button variant="secondary">Split Button with dropdown component</Button>
                        <Dropdown.Toggle split variant="secondary" id="dropdown-split-basic" />
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </li>
                <li>
                    <SplitButton title="Split Button with SplitButton component" variant="secondary">
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </SplitButton>
                </li>
            </ul>
            
            
          </Card.Body>
          <CodePreview>
          {`<Dropdown as={ButtonGroup}>
    <Button variant="secondary">Split Button with dropdown component</Button>
    <Dropdown.Toggle split variant="secondary" id="dropdown-split-basic" />
    <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>

<SplitButton title="Split Button with SplitButton component" variant="secondary">
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</SplitButton>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Dark dropdowns</Block.Title>
            <Block.Text>Opt into darker dropdowns to match a dark navbar or custom style by adding <code>variant="dark"</code> onto an existing <code>DropdownMenu</code>.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Dropdown>
                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                    Dropdown Button
                </Dropdown.Toggle>
                <Dropdown.Menu variant="dark">
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <p className="mt-5">And putting it to use in a navbar and add <code>menuVariant="dark"</code> in a <code>NavDropdown</code>:</p>
            <Navbar variant="dark" bg="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#home">Nioboard</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-dark-example" />
                    <Navbar.Collapse id="navbar-dark-example">
                    <Nav>
                        <NavDropdown id="nav-dropdown-dark-example" title="Dropdown" menuVariant="dark">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
          </Card.Body>
          <CodePreview>
          {`import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
function NavbarDarkExample() {
  return (
    <Navbar variant="dark" bg="dark" expand="lg">
        <Container fluid>
            <Navbar.Brand href="#home">Nioboard</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-dark-example" />
            <Navbar.Collapse id="navbar-dark-example">
            <Nav>
                <NavDropdown id="nav-dropdown-dark-example" title="Dropdown" menuVariant="dark">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default NavbarDarkExample;
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Drop directions</Block.Title>
            <Block.Text>Trigger dropdown menus above, below, left, or to the right of their toggle elements, with the <code>drop</code> prop to <code>Dropdown</code>.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <ul className="d-flex gap g-3 pb-4">
                <li>
                    <Dropdown drop="up">
                        <Dropdown.Toggle id="dropdown-up" variant="secondary">
                            Drop up
                        </Dropdown.Toggle>
                        <Dropdown.Menu >
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </li>
                <li>
                    <Dropdown drop="down">
                        <Dropdown.Toggle id="dropdown-down" variant="secondary">
                            Drop down
                        </Dropdown.Toggle>
                        <Dropdown.Menu >
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </li>
                <li>
                    <Dropdown drop="start">
                        <Dropdown.Toggle id="dropdown-start" variant="secondary">
                            Drop start
                        </Dropdown.Toggle>
                        <Dropdown.Menu >
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </li>
                <li>
                    <Dropdown drop="end">
                        <Dropdown.Toggle id="dropdown-end" variant="secondary">
                            Drop end
                        </Dropdown.Toggle>
                        <Dropdown.Menu >
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </li>
            </ul>
            <ul className="d-flex gap g-3">
                <li>
                    <SplitButton title="Split Drop up" drop="up" variant="secondary">
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
                    </SplitButton>
                </li>
                <li>
                    <SplitButton title="Split Drop down" drop="down" variant="secondary">
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
                    </SplitButton>
                </li>
                <li>
                    <SplitButton title="Split Drop start" drop="start" variant="secondary">
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
                    </SplitButton>
                </li>
                <li>
                    <SplitButton title="Split Drop end" drop="end" variant="secondary">
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
                    </SplitButton>
                </li>
            </ul>
          </Card.Body>
          <CodePreview>
          {`<Dropdown drop="up">
    <Dropdown.Toggle id="dropdown-up" variant="secondary">
        Drop up
    </Dropdown.Toggle>
    <Dropdown.Menu >
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>

<SplitButton title="Split Drop up" drop="up" variant="secondary">
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
</SplitButton>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Alignment options</Block.Title>
            <Block.Text>By default, a dropdown menu is aligned to the left, but you can switch it by passing <code>align="end"</code> to a <code>Dropdown</code>, or <code>SplitButton</code>.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <ul className="d-flex flex-wrap gap g-3 pb-4">
                <li>
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-alignment-basic" variant="secondary">
                            Dropdown
                        </Dropdown.Toggle>
                        <Dropdown.Menu >
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </li>
                <li>
                    <Dropdown align="end">
                        <Dropdown.Toggle id="dropdown-right-aligned" variant="secondary">
                            Right-aligned menu
                        </Dropdown.Toggle>
                        <Dropdown.Menu >
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </li>
                <li>
                    <Dropdown align={{ lg: 'end' }}>
                        <Dropdown.Toggle id="dropdown-right-aligned-lg" variant="secondary">
                        Left-aligned but right aligned when large screen
                        </Dropdown.Toggle>
                        <Dropdown.Menu >
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </li>
                <li>
                    <Dropdown align={{ lg: 'start' }}>
                        <Dropdown.Toggle id="dropdown-left-aligned-lg" variant="secondary">
                        Right-aligned but left aligned when large screen
                        </Dropdown.Toggle>
                        <Dropdown.Menu >
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </li>
                <li>
                    <Dropdown drop="start">
                        <Dropdown.Toggle id="dropdown-drop-start" variant="secondary">
                            Drop start
                        </Dropdown.Toggle>
                        <Dropdown.Menu >
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </li>
                <li>
                    <Dropdown drop="end">
                        <Dropdown.Toggle id="dropdown-drop-end" variant="secondary">
                            Drop end
                        </Dropdown.Toggle>
                        <Dropdown.Menu >
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </li>
                <li>
                    <Dropdown drop="up">
                        <Dropdown.Toggle id="dropdown-drop-up" variant="secondary">
                            Drop up
                        </Dropdown.Toggle>
                        <Dropdown.Menu >
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </li>
            </ul>
          </Card.Body>
          <CodePreview>
          {`<Dropdown align="end">
    <Dropdown.Toggle id="dropdown-right-aligned" variant="secondary">
        Right-aligned menu
    </Dropdown.Toggle>
    <Dropdown.Menu >
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>

<Dropdown align={{ lg: 'start' }}>
    <Dropdown.Toggle id="dropdown-left-aligned-lg" variant="secondary">
    Right-aligned but left aligned when large screen
    </Dropdown.Toggle>
    <Dropdown.Menu >
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Menu content</Block.Title>
            <Block.Text>Add a header to label sections of actions in any dropdown menu.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Row>
                <Col md="3">
                    <h6 className="mb-3">Headers</h6>
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-down" variant="secondary">
                            Dropdown
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                        <Dropdown.Header>Dropdown header</Dropdown.Header>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col md="3">
                    <h6 className="mb-3">Dividers</h6>
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-down" variant="secondary">
                            Dropdown
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                        <Dropdown.Header>Dropdown header</Dropdown.Header>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col md="3">
                    <h6 className="mb-3">Text</h6>
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-down" variant="secondary">
                            Dropdown
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="p-4">
                            <p>Some example text that's free-flowing within the dropdown menu.</p>
                            <p className="mb-0"> And this is more example text. </p>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Row>
          </Card.Body>
          <CodePreview>
          {`<Dropdown>
    <Dropdown.Toggle id="dropdown-down" variant="secondary">
        Dropdown
    </Dropdown.Toggle>
    <Dropdown.Menu>
    <Dropdown.Header>Dropdown header</Dropdown.Header>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>

<Dropdown>
    <Dropdown.Toggle id="dropdown-down" variant="secondary">
        Dropdown
    </Dropdown.Toggle>
    <Dropdown.Menu>
    <Dropdown.Header>Dropdown header</Dropdown.Header>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>

<Dropdown>
    <Dropdown.Toggle id="dropdown-down" variant="secondary">
        Dropdown
    </Dropdown.Toggle>
    <Dropdown.Menu className="p-4">
        <p>Some example text that's free-flowing within the dropdown menu.</p>
        <p className="mb-0"> And this is more example text. </p>
    </Dropdown.Menu>
</Dropdown>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">AutoClose</Block.Title>
            <Block.Text>By default, the dropdown menu is closed when selecting a menu item or clicking outside of the dropdown menu. This behaviour can be changed by using the <code>autoClose</code> property.</Block.Text>
            <Block.Text>By default, <code>autoClose</code> is set to the default value <code>true</code> and behaves like expected. By choosing <code>false</code>, the dropdown menu can only be toggled by clicking on the dropdown button. <code>inside</code> makes the dropdown disappear only by choosing a menu item and outside closes the dropdown menu only by clicking outsid</Block.Text>
            <Block.Text><span className="text-black">Notice</span> how the dropdown is toggled in each scenario by clicking on the button.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <ul className="d-flex flex-wrap gap g-3">
                <li>
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-autoclose-true" variant="secondary">
                        Default Dropdown
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                        <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                        <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                        <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </li>
                <li>
                    <Dropdown autoClose="inside">
                        <Dropdown.Toggle id="dropdown-autoclose-inside" variant="secondary">
                        Clickable Outside
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                        <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                        <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                        <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </li>
                <li>
                    <Dropdown autoClose="outside">
                        <Dropdown.Toggle id="dropdown-autoclose-outside" variant="secondary">
                        Clickable Inside
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                        <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                        <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                        <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </li>
                <li>
                    <Dropdown autoClose={false}>
                        <Dropdown.Toggle id="dropdown-autoclose-false" variant="secondary">
                        Manual Close
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                        <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                        <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                        <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </li>
            </ul>
          </Card.Body>
          <CodePreview>
          {`<Dropdown autoClose="inside">
    <Dropdown.Toggle id="dropdown-autoclose-inside" variant="secondary">
    Clickable Outside
    </Dropdown.Toggle>

    <Dropdown.Menu>
    <Dropdown.Item href="#">Menu Item</Dropdown.Item>
    <Dropdown.Item href="#">Menu Item</Dropdown.Item>
    <Dropdown.Item href="#">Menu Item</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>
`}
          </CodePreview>
        </Card>
      </Block>

      
    </Layout>
  )
}

export default DropdownPage