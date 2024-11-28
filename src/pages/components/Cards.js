import {Card, Row, Col, Button, ListGroup, Nav, CardGroup     } from 'react-bootstrap';

import Layout from '../../layout/default';
import Block from '../../components/Block/Block';
import CodePreview from '../../components/CodePreview/CodePreview';

function CardsPage() {
  return (
    <Layout title="Cards" content="container">
      <Block.Head page>
        <Block.HeadContent>
            <Block.Title>Cards</Block.Title>
            <Block.Text>Bootstrap’s cards provide a flexible and extensible content container with multiple variants and options.</Block.Text>
        </Block.HeadContent>
      </Block.Head>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Text><strong className="text-black">Note:</strong> When you copy the code example and if you paste your copied code to any other component. these will not work because you just copied the component's name from code example. to use you have to <code>import</code> these component.</Block.Text>
            <Block.Text>How to import component and use see the <a href="#docs">docs</a></Block.Text>
            <Block.Title tag="h3">Examples</Block.Title>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Row>
                <Col lg="4">
                    <Card>
                        <Card.Img variant="top" src="/images/preview/b.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
          </Card.Body>
          <CodePreview>
          {`<Card>
    <Card.Img variant="top" src="/images/preview/b.jpg" />
    <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
        <Button variant="primary">Go somewhere</Button>
    </Card.Body>
</Card>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Body</Block.Title>
            <Block.Text>Use <code>&lt;Card.Body&gt;</code> to pad content inside a <code>&lt;Card&gt;</code>.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Card>
                <Card.Body>This is some text within a card body.</Card.Body>
            </Card>
          </Card.Body>
          <CodePreview>
          {`<Card>
    <Card.Body>This is some text within a card body.</Card.Body>
</Card>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Titles, text, and links</Block.Title>
            <Block.Text>
            Using <code>&lt;Card.Title&gt;</code>, <code>&lt;Card.Subtitle&gt;</code>, and <code>&lt;Card.Text&gt;</code> inside the <code>&lt;Card.Body&gt;</code> will line them up nicely. <code>&lt;Card.Link&gt;</code>s are used to line up links next to each other.
            </Block.Text>
            <Block.Text>
            <code>&lt;Card.Text&lt;</code>  outputs <code>&lt;p&gt;</code> tags around the content, so you can use multiple <code>&lt;Card.Text&gt;</code> s to create separate paragraphs.
            </Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Row>
                <Col lg="3">
                    <Card>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
          </Card.Body>
          <CodePreview>
          {`<Card>
    <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
    </Card.Body>
</Card>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">List Groups</Block.Title>
            <Block.Text>Create lists of content in a card with a flush list group.</Block.Text>
            <Block.Text>You may add header and footer by adding <code>&lt;Card.Header&gt;</code> or <code>&lt;Card.Footer&gt;</code> component.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Row>
                <Col md="4">
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            <ListGroup.Item>set at eros</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
                <Col md="4">
                    <Card>
                        <Card.Header>Card header</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
                <Col md="4">
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                        <Card.Footer>Card footer</Card.Footer>
                    </Card>
                </Col>
            </Row>
          </Card.Body>
          <CodePreview>
          {`<Card>
    <ListGroup variant="flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        <ListGroup.Item>set at eros</ListGroup.Item>
    </ListGroup>
</Card>

<Card>
    <Card.Header>Card header</Card.Header>
    <ListGroup variant="flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    </ListGroup>
</Card>

<Card>
    <ListGroup variant="flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    </ListGroup>
    <Card.Footer>Card footer</Card.Footer>
</Card>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Kitchen Sink</Block.Title>
            <Block.Text>Create lists of content in a card with a flush list group.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Row>
                <Col md="4">
                    <Card>
                        <Card.Img variant="top" src="/images/preview/b.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
          </Card.Body>
          <CodePreview>
          {`<Card>
    <Card.Img variant="top" src="/images/preview/b.jpg" />
    <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
    </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
    <ListGroup.Item>Cras justo odio</ListGroup.Item>
    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    </ListGroup>
    <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
    </Card.Body>
</Card>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Header and footer</Block.Title>
            <Block.Text>You may add header and footer by adding <code>&lt;Card.Header&gt;</code> or <code>&lt;Card.Footer&gt;</code> component.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Row>
                <Col md="6">
                    <Card>
                        <Card.Header>Featured</Card.Header>
                        <Card.Body>
                            <Card.Title>Special title treatment</Card.Title>
                            <Card.Text>With supporting text below as a natural lead-in to additional content. Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger. </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md="6">
                    <Card className="text-center">
                        <Card.Header>Featured</Card.Header>
                        <Card.Body>
                            <Card.Title>Special title treatment</Card.Title>
                            <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        <Card.Footer className="text-muted">2 days ago</Card.Footer>
                    </Card>
                </Col>
            </Row>
          </Card.Body>
          <CodePreview>
          {`<Card>
    <Card.Header>Featured</Card.Header>
    <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>With supporting text below as a natural lead-in to additional content. Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger. </Card.Text>
        <Button variant="primary">Go somewhere</Button>
    </Card.Body>
</Card>

<Card className="text-center">
    <Card.Header>Featured</Card.Header>
    <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
        <Button variant="primary">Go somewhere</Button>
    </Card.Body>
    <Card.Footer className="text-muted">2 days ago</Card.Footer>
</Card>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Image caps</Block.Title>
            <Block.Text>Similar to headers and footers, cards can include <code>top</code> and <code>bottom</code> on <code>variant</code> prop. “image caps”—images at the top or bottom of a card.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Row>
                <Col md="4">
                    <Card>
                        <Card.Img variant="top" src="/images/preview/b.jpg" />
                        <Card.Body>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md="4">
                    <Card>
                        <Card.Body>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        </Card.Body>
                        <Card.Img variant="bottom" src="/images/preview/b.jpg" />
                    </Card>
                </Col>
            </Row>
          </Card.Body>
          <CodePreview>
          {`<Card>
    <Card.Img variant="top" src="/images/preview/b.jpg" />
    <Card.Body>
    <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
    </Card.Text>
    </Card.Body>
</Card>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Image Overlays</Block.Title>
            <Block.Text>Turn an image into a card background and overlay your card’s text. Depending on the image, you may or may not need additional styles or utilities.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Row>
                <Col md="5">
                    <Card>
                        <Card.Img src="/images/preview/b.jpg" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
            </Row>
          </Card.Body>
          <CodePreview>
          {`<Card>
    <Card.Img src="/images/preview/b.jpg" alt="Card image" />
    <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
    </Card.ImgOverlay>
</Card>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Navigation</Block.Title>
            <Block.Text>Add some navigation to a card’s header (or block) with React Bootstrap’s Nav components.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Row className="gy-3">
                <Col md="12">
                    <Card className="text-center">
                        <Card.Header>
                            <Nav variant="tabs" defaultActiveKey="#first">
                                <Nav.Item>
                                    <Nav.Link href="#first">Active</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="#link">Link</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="#disabled" disabled>
                                    Disabled
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>Special title treatment</Card.Title>
                            <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md="12">
                    <Card className="text-center">
                        <Card.Header>
                            <Nav variant="pills" defaultActiveKey="#first">
                                <Nav.Item>
                                    <Nav.Link href="#first">Active</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="#link">Link</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="#disabled" disabled>
                                    Disabled
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>Special title treatment</Card.Title>
                            <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
          </Card.Body>
          <CodePreview>
          {`<Card className="text-center">
    <Card.Header>
        <Nav variant="tabs" defaultActiveKey="#first">
            <Nav.Item>
                <Nav.Link href="#first">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#link">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#disabled" disabled>
                Disabled
                </Nav.Link>
            </Nav.Item>
        </Nav>
    </Card.Header>
    <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
        <Button variant="primary">Go somewhere</Button>
    </Card.Body>
</Card>

<Card className="text-center">
    <Card.Header>
        <Nav variant="pills" defaultActiveKey="#first">
            <Nav.Item>
                <Nav.Link href="#first">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#link">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#disabled" disabled>
                Disabled
                </Nav.Link>
            </Nav.Item>
        </Nav>
    </Card.Header>
    <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
        <Button variant="primary">Go somewhere</Button>
    </Card.Body>
</Card>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Horizontal</Block.Title>
            <Block.Text>Using a combination of grid and utility classes, cards can be made horizontal in a mobile-friendly and responsive way. In the example below, we remove the grid gutters with <code>.g-0</code> and use <code>.col-md-*</code> classes to make the card horizontal at the md breakpoint. Further adjustments may be needed depending on your card content.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Card>
                <Row className="g-0">
                    <Col md="4">
                        <img src="/images/preview/b.jpg" className="h-100 rounded-start" alt=""/>
                    </Col>
                    <Col md="8">
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger. Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.</Card.Text>
                            <Card.Text><small className="text-muted">Last updated 3 mins ago</small></Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
          </Card.Body>
          <CodePreview>
          {`<Row className="g-0">
    <Col md="4">
        <img src="/images/preview/b.jpg" className="h-100 rounded-start" alt=""/>
    </Col>
    <Col md="8">
        <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger. Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.</Card.Text>
            <Card.Text><small className="text-muted">Last updated 3 mins ago</small></Card.Text>
        </Card.Body>
    </Col>
</Row>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Card Styles</Block.Title>
            <Block.Text>You can change a card's appearance by changing their <code>bg</code>, and <code>text</code> props.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Row className="g-gs">
                <Col md="3">
                    <Card bg="primary" text="white">
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title className="text-white">Primary Card Title </Card.Title>
                            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md="3">
                    <Card bg="secondary" text="white">
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title className="text-white">Secondary Card Title </Card.Title>
                            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md="3">
                    <Card bg="success" text="white">
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title className="text-white">Success Card Title </Card.Title>
                            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md="3">
                    <Card bg="danger" text="white">
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title className="text-white">danger Card Title </Card.Title>
                            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md="3">
                    <Card bg="warning" text="white">
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title className="text-white">warning Card Title </Card.Title>
                            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md="3">
                    <Card bg="info" text="white">
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title className="text-white">info Card Title </Card.Title>
                            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md="3">
                    <Card bg="light">
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title>light Card Title </Card.Title>
                            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md="3">
                    <Card bg="dark" text="white">
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title className="text-white">dark Card Title </Card.Title>
                            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
          </Card.Body>
          <CodePreview>
          {`<Card bg="primary" text="white">
    <Card.Header>Header</Card.Header>
    <Card.Body>
        <Card.Title className="text-white">Primary Card Title </Card.Title>
        <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
    </Card.Body>
</Card>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Border color</Block.Title>
            <Block.Text>Use <code>border=""</code> prop to change just the border-color of a card.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Row className="g-gs">
                <Col md="3">
                    <Card border="primary">
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title>Primary Card Title </Card.Title>
                            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md="3">
                    <Card border="secondary">
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title>Secondary Card Title </Card.Title>
                            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md="3">
                    <Card border="success">
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title>Success Card Title </Card.Title>
                            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md="3">
                    <Card border="danger">
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title>danger Card Title </Card.Title>
                            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md="3">
                    <Card border="warning">
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title>warning Card Title </Card.Title>
                            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md="3">
                    <Card border="info">
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title>info Card Title </Card.Title>
                            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md="3">
                    <Card border="light">
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title>light Card Title </Card.Title>
                            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md="3">
                    <Card border="dark">
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title>dark Card Title </Card.Title>
                            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
          </Card.Body>
          <CodePreview>
          {` <Card border="primary">
    <Card.Header>Header</Card.Header>
    <Card.Body>
        <Card.Title>Primary Card Title </Card.Title>
        <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
    </Card.Body>
</Card>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Card Groups</Block.Title>
            <Block.Text>Wrap a series of <code>&lt;Card&gt;</code>s in a <code>&lt;CardGroup&gt;</code> component.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src="/images/preview/b.jpg" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="/images/preview/b.jpg" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>This card has supporting text below as a natural lead-in to additional content.</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="/images/preview/b.jpg" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text> This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
          </Card.Body>
          <CodePreview>
          {`<CardGroup>
    <Card>
        <Card.Img variant="top" src="/images/preview/b.jpg" />
        <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
                This is a wider card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.
            </Card.Text>
        </Card.Body>
        <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
    </Card>
    <Card>
        <Card.Img variant="top" src="/images/preview/b.jpg" />
        <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>This card has supporting text below as a natural lead-in to additional content.</Card.Text>
        </Card.Body>
        <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
    </Card>
    <Card>
        <Card.Img variant="top" src="/images/preview/b.jpg" />
        <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
            </Card.Text>
        </Card.Body>
        <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
    </Card>
</CardGroup>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Grid cards</Block.Title>
            <Block.Text>Use <code>Row</code>'s grid column props to control how many cards to show per row.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col key={idx}>
                        <Card>
                            <Card.Img variant="top" src="/images/preview/b.jpg" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
          </Card.Body>
          <CodePreview>
          {`<Row xs={1} md={2} className="g-4">
    {Array.from({ length: 4 }).map((_, idx) => (
        <Col>
            <Card>
                <Card.Img variant="top" src="/images/preview/b.jpg" />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    ))}
</Row>
`}
          </CodePreview>
        </Card>
      </Block>

    </Layout>
  )
}

export default CardsPage