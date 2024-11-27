import {Card, ListGroup, Badge, Form, Col, Row, Tab } from 'react-bootstrap';

import Layout from '../../layout/default';
import Block from '../../components/Block/Block';
import CodePreview from '../../components/CodePreview/CodePreview';

function ListGroupPage() {

    const alertClicked = () => {
      alert('You clicked the third ListGroupItem');
    };

  return (
    <Layout title="List group" content="container">
      <Block.Head page>
        <Block.HeadContent>
            <Block.Title>List group</Block.Title>
            <Block.Text>List groups are a flexible and powerful component for displaying a series of content. Modify and extend them to support just about any content within.</Block.Text>
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
            <ListGroup>
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
          </Card.Body>
          <CodePreview>
          {`<ListGroup>
    <ListGroup.Item>Cras justo odio</ListGroup.Item>
    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
</ListGroup>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Active items</Block.Title>
            <Block.Text>Set the <code>active</code> prop to indicate the list groups current active selection.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <ListGroup as="ul">
                <ListGroup.Item as="li" active>
                    Cras justo odio
                </ListGroup.Item>
                <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item as="li" disabled>
                    Morbi leo risus
                </ListGroup.Item>
                <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
            </ListGroup>
          </Card.Body>
          <CodePreview>
          {`<ListGroup as="ul">
    <ListGroup.Item as="li" active>
    Cras justo odio
    </ListGroup.Item>
    <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
    <ListGroup.Item as="li" disabled>
    Morbi leo risus
    </ListGroup.Item>
    <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
</ListGroup>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Disabled items</Block.Title>
            <Block.Text>Set the <code>disabled</code> prop to prevent actions on a <code>&lt;ListGroup.Item&gt;</code>.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <ListGroup>
                <ListGroup.Item disabled>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            </ListGroup>
          </Card.Body>
          <CodePreview>
          {`<ListGroup>
    <ListGroup.Item disabled>Cras justo odio</ListGroup.Item>
    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
</ListGroup>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Actionable items</Block.Title>
            <Block.Text>Toggle the <code>action</code> prop to create actionable list group items, with disabled, hover and active styles. List item actions will render a <code>&lt;button&gt;</code> or <code>&lt;a&gt;</code> (depending on the presence of an <code>href</code>) by default but can be overridden by setting the <code>as</code> prop as usual.</Block.Text>
            <Block.Text>List items <code>actions</code> are distinct from plain items to ensure that click or tap affordances aren't applied to non-interactive items.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <ListGroup defaultActiveKey="#link1">
                <ListGroup.Item action href="#link1">
                    Link 1
                </ListGroup.Item>
                <ListGroup.Item action href="#link2" disabled>
                    Link 2
                </ListGroup.Item>
                <ListGroup.Item action onClick={alertClicked}>
                    This one is a button, click me to show alert.
                </ListGroup.Item>
            </ListGroup>
          </Card.Body>
          <CodePreview>
          {`import ListGroup from 'react-bootstrap/ListGroup';

function LinkedExample() {
  const alertClicked = () => {
    alert('You clicked the third ListGroupItem');
  };

  return (
    <ListGroup defaultActiveKey="#link1">
      <ListGroup.Item action href="#link1">
        Link 1
      </ListGroup.Item>
      <ListGroup.Item action href="#link2" disabled>
        Link 2
      </ListGroup.Item>
      <ListGroup.Item action onClick={alertClicked}>
        This one is a button
      </ListGroup.Item>
    </ListGroup>
  );
}

export default LinkedExample;
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Flush</Block.Title>
            <Block.Text>Add the <code>flush</code> variant to remove outer borders and rounded corners to render list group items edge-to-edge in a parent container such as a Card.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <ListGroup variant="flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            </ListGroup>
          </Card.Body>
          <CodePreview>
          {`<ListGroup variant="flush">
    <ListGroup.Item>Cras justo odio</ListGroup.Item>
    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
</ListGroup>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Numbered</Block.Title>
            <Block.Text>Add the <code>numbered</code> prop to opt into numbered list group items. Numbers are generated via CSS (as opposed to a <code>&lt;ol&gt;</code>s default browser styling) for better placement inside list group items and to allow for better customization.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <ListGroup as="ol" numbered>
                <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
                <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
                <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
            </ListGroup>
            <p className="mt-4">These work great with custom content as well.</p>
                <ListGroup as="ol" numbered>
                    <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Subheading</div>
                            Cras justo odio
                        </div>
                        <Badge bg="primary" pill>14</Badge>
                    </ListGroup.Item>
                    <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Subheading</div>
                            Cras justo odio
                        </div>
                        <Badge bg="primary" pill>14</Badge>
                    </ListGroup.Item>
                    <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Subheading</div>
                            Cras justo odio
                        </div>
                        <Badge bg="primary" pill>14</Badge>
                    </ListGroup.Item>
                </ListGroup>
          </Card.Body>
          <CodePreview>
          {`<ListGroup as="ol" numbered>
    <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
    <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
    <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
</ListGroup>

<ListGroup as="ol" numbered>
    <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
            <div className="fw-bold">Subheading</div>
            Cras justo odio
        </div>
        <Badge bg="primary" pill>14</Badge>
    </ListGroup.Item>
    <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
            <div className="fw-bold">Subheading</div>
            Cras justo odio
        </div>
        <Badge bg="primary" pill>14</Badge>
    </ListGroup.Item>
    <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
            <div className="fw-bold">Subheading</div>
            Cras justo odio
        </div>
        <Badge bg="primary" pill>14</Badge>
    </ListGroup.Item>
</ListGroup>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Horizontal</Block.Title>
            <Block.Text>Use the <code>horizontal</code> prop to make the ListGroup render horizontally. Currently horizontal list groups cannot be combined with flush list groups.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <ListGroup horizontal>
                <ListGroup.Item>This</ListGroup.Item>
                <ListGroup.Item>ListGroup</ListGroup.Item>
                <ListGroup.Item>renders</ListGroup.Item>
                <ListGroup.Item>horizontally!</ListGroup.Item>
            </ListGroup>
            <p className="mt-4">There are responsive variants to <code>horizontal</code>: setting it to <code>sm|md|lg|xl|xxl</code> makes the list group horizontal starting at that breakpoint’s <code>min-width</code>.</p>
            {['sm', 'md', 'lg', 'xl', 'xxl'].map((breakpoint) => (
                <ListGroup key={breakpoint} horizontal={breakpoint} className="my-2">
                    <ListGroup.Item>This ListGroup</ListGroup.Item>
                    <ListGroup.Item>renders horizontally</ListGroup.Item>
                    <ListGroup.Item>on {breakpoint}</ListGroup.Item>
                    <ListGroup.Item>and above!</ListGroup.Item>
                </ListGroup>
            ))}
          </Card.Body>
          <CodePreview>
          {`<ListGroup horizontal>
    <ListGroup.Item>This</ListGroup.Item>
    <ListGroup.Item>ListGroup</ListGroup.Item>
    <ListGroup.Item>renders</ListGroup.Item>
    <ListGroup.Item>horizontally!</ListGroup.Item>
</ListGroup>

<ListGroup horizontal="sm">
    <ListGroup.Item>This</ListGroup.Item>
    <ListGroup.Item>ListGroup</ListGroup.Item>
    <ListGroup.Item>renders</ListGroup.Item>
    <ListGroup.Item>horizontally!</ListGroup.Item>
</ListGroup>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Contextual classes</Block.Title>
            <Block.Text>Use contextual variants on <code>&lt;ListGroup.Item&gt;</code>s to style them with a stateful background and color.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <ListGroup>
                <ListGroup.Item>No style</ListGroup.Item>
                <ListGroup.Item variant="primary">Primary</ListGroup.Item>
                <ListGroup.Item variant="secondary">Secondary</ListGroup.Item>
                <ListGroup.Item variant="success">Success</ListGroup.Item>
                <ListGroup.Item variant="danger">Danger</ListGroup.Item>
                <ListGroup.Item variant="warning">Warning</ListGroup.Item>
                <ListGroup.Item variant="info">Info</ListGroup.Item>
                <ListGroup.Item variant="light">Light</ListGroup.Item>
                <ListGroup.Item variant="dark">Dark</ListGroup.Item>
            </ListGroup>
            <p className="mt-4">When paired with <code>action</code>s, additional hover and active styles apply.</p>
            <ListGroup>
                <ListGroup.Item>No style</ListGroup.Item>
                <ListGroup.Item variant="primary">Primary</ListGroup.Item>
                <ListGroup.Item action variant="secondary">
                    Secondary
                </ListGroup.Item>
                <ListGroup.Item action variant="success">
                    Success
                </ListGroup.Item>
                <ListGroup.Item action variant="danger">
                    Danger
                </ListGroup.Item>
                <ListGroup.Item action variant="warning">
                    Warning
                </ListGroup.Item>
                <ListGroup.Item action variant="info">
                    Info
                </ListGroup.Item>
                <ListGroup.Item action variant="light">
                    Light
                </ListGroup.Item>
                <ListGroup.Item action variant="dark">
                    Dark
                </ListGroup.Item>
            </ListGroup>
          </Card.Body>
          <CodePreview>
          {` <ListGroup>
    <ListGroup.Item>No style</ListGroup.Item>
    <ListGroup.Item variant="primary">Primary</ListGroup.Item>
    <ListGroup.Item variant="secondary">Secondary</ListGroup.Item>
    <ListGroup.Item variant="success">Success</ListGroup.Item>
    <ListGroup.Item variant="danger">Danger</ListGroup.Item>
    <ListGroup.Item variant="warning">Warning</ListGroup.Item>
    <ListGroup.Item variant="info">Info</ListGroup.Item>
    <ListGroup.Item variant="light">Light</ListGroup.Item>
    <ListGroup.Item variant="dark">Dark</ListGroup.Item>
</ListGroup>

<ListGroup>
    <ListGroup.Item>No style</ListGroup.Item>
    <ListGroup.Item variant="primary">Primary</ListGroup.Item>
    <ListGroup.Item action variant="secondary">
    Secondary
    </ListGroup.Item>
    <ListGroup.Item action variant="success">
    Success
    </ListGroup.Item>
    <ListGroup.Item action variant="danger">
    Danger
    </ListGroup.Item>
    <ListGroup.Item action variant="warning">
    Warning
    </ListGroup.Item>
    <ListGroup.Item action variant="info">
    Info
    </ListGroup.Item>
    <ListGroup.Item action variant="light">
    Light
    </ListGroup.Item>
    <ListGroup.Item action variant="dark">
    Dark
    </ListGroup.Item>
</ListGroup>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Custom content</Block.Title>
            <Block.Text>Add nearly any HTML within, even for linked list groups like the one below, with the help of flexbox utilities.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <ListGroup>
                <ListGroup.Item action active className="py-3">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">List group item heading</h5>
                        <small>3 days ago</small>
                    </div>
                    <p className="mb-1">Some placeholder content in a paragraph.</p>
                    <small>And some small print.</small>
                </ListGroup.Item>
                <ListGroup.Item action className="py-3">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">List group item heading</h5>
                        <small>3 days ago</small>
                    </div>
                    <p className="mb-1">Some placeholder content in a paragraph.</p>
                    <small>And some small print.</small>
                </ListGroup.Item>
                <ListGroup.Item action className="py-3">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">List group item heading</h5>
                        <small>3 days ago</small>
                    </div>
                    <p className="mb-1">Some placeholder content in a paragraph.</p>
                    <small>And some small print.</small>
                </ListGroup.Item>
            </ListGroup>
          </Card.Body>
          <CodePreview>
          {`<ListGroup>
    <ListGroup.Item action active className="py-3">
        <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">List group item heading</h5>
            <small>3 days ago</small>
        </div>
        <p className="mb-1">Some placeholder content in a paragraph.</p>
        <small>And some small print.</small>
    </ListGroup.Item>
    <ListGroup.Item action className="py-3">
        <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">List group item heading</h5>
            <small>3 days ago</small>
        </div>
        <p className="mb-1">Some placeholder content in a paragraph.</p>
        <small>And some small print.</small>
    </ListGroup.Item>
    <ListGroup.Item action className="py-3">
        <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">List group item heading</h5>
            <small>3 days ago</small>
        </div>
        <p className="mb-1">Some placeholder content in a paragraph.</p>
        <small>And some small print.</small>
    </ListGroup.Item>
</ListGroup>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Checkboxes and radios</Block.Title>
            <Block.Text>Place Bootstrap’s checkboxes and radios within list group items and customize as needed. You can use them without <code>label</code>.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <ListGroup>
                <ListGroup.Item>
                    <Form.Check type="checkbox" label="First checkbox" aria-label="..." />
                </ListGroup.Item>
                <ListGroup.Item>
                    <Form.Check type="checkbox" label="Second checkbox" aria-label="..." />
                </ListGroup.Item>
                <ListGroup.Item>
                    <Form.Check type="checkbox" label="Third checkbox" aria-label="..." />
                </ListGroup.Item>
                <ListGroup.Item>
                    <Form.Check type="checkbox" label="Fourth checkbox" aria-label="..." />
                </ListGroup.Item>
                <ListGroup.Item>
                    <Form.Check type="checkbox" label="Fifth checkbox" aria-label="..." />
                </ListGroup.Item>
            </ListGroup>
            <p className="mt-4">And if you want <code>label</code> as the <code>&lt;ListGroup.Item&gt;</code> for large hit areas, you can do that, too with <code>as="label"</code> prop.</p>
            <ListGroup>
                <ListGroup.Item as="label" className="d-flex align-items-center">
                    <Form.Check className="me-2" type="checkbox" aria-label="..." />
                    First checkbox
                </ListGroup.Item>
                <ListGroup.Item as="label" className="d-flex align-items-center">
                    <Form.Check className="me-2" type="checkbox" aria-label="..." />
                    Second checkbox
                </ListGroup.Item>
                <ListGroup.Item as="label" className="d-flex align-items-center">
                    <Form.Check className="me-2" type="checkbox" aria-label="..." />
                    Third checkbox
                </ListGroup.Item>
                <ListGroup.Item as="label" className="d-flex align-items-center">
                    <Form.Check className="me-2" type="checkbox" aria-label="..." />
                    Fourth checkbox
                </ListGroup.Item>
                <ListGroup.Item as="label" className="d-flex align-items-center">
                    <Form.Check className="me-2" type="checkbox" aria-label="..." />
                    Fifth checkbox
                </ListGroup.Item>
            </ListGroup>
          </Card.Body>
          <CodePreview>
          {`<ListGroup>
    <ListGroup.Item>
        <Form.Check type="checkbox" label="First checkbox" aria-label="..." />
    </ListGroup.Item>
    <ListGroup.Item>
        <Form.Check type="checkbox" label="Second checkbox" aria-label="..." />
    </ListGroup.Item>
    <ListGroup.Item>
        <Form.Check type="checkbox" label="Third checkbox" aria-label="..." />
    </ListGroup.Item>
    <ListGroup.Item>
        <Form.Check type="checkbox" label="Fourth checkbox" aria-label="..." />
    </ListGroup.Item>
    <ListGroup.Item>
        <Form.Check type="checkbox" label="Fifth checkbox" aria-label="..." />
    </ListGroup.Item>
</ListGroup>

<ListGroup>
    <ListGroup.Item as="label" className="d-flex align-items-center">
        <Form.Check className="me-2" type="checkbox" aria-label="..." />
        First checkbox
    </ListGroup.Item>
    <ListGroup.Item as="label" className="d-flex align-items-center">
        <Form.Check className="me-2" type="checkbox" aria-label="..." />
        Second checkbox
    </ListGroup.Item>
    <ListGroup.Item as="label" className="d-flex align-items-center">
        <Form.Check className="me-2" type="checkbox" aria-label="..." />
        Third checkbox
    </ListGroup.Item>
    <ListGroup.Item as="label" className="d-flex align-items-center">
        <Form.Check className="me-2" type="checkbox" aria-label="..." />
        Fourth checkbox
    </ListGroup.Item>
    <ListGroup.Item as="label" className="d-flex align-items-center">
        <Form.Check className="me-2" type="checkbox" aria-label="..." />
        Fifth checkbox
    </ListGroup.Item>
</ListGroup>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Tabbed Interfaces</Block.Title>
            <Block.Text>You can also use the Tab components to create ARIA compliant tabbable interfaces with the <code>ListGroup</code> component. Swap out the <code>Nav</code> component for the list group and you are good to go.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                <Row className="g-gs">
                    <Col sm={4}>
                        <ListGroup>
                            <ListGroup.Item action onClick={(event) => event.preventDefault()} href="#link1">
                                Link 1
                            </ListGroup.Item>
                            <ListGroup.Item action onClick={(event) => event.preventDefault()} href="#link2">
                                Link 2
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col sm={8}>
                        <Tab.Content>
                            <Tab.Pane eventKey="#link1">
                                When in the chronicle of wasted time I see descriptions of the fairest wights, And beauty making beautiful old rime, In praise of ladies dead and lovely knights, Then, in the blazon of sweet beauty's best, Of hand, of foot, of lip, of eye, of brow, I see their antique pen would have express'd Even such a beauty as you master now. So all their praises are but prophecies Of this our time, all you prefiguring;
                            </Tab.Pane>
                            <Tab.Pane eventKey="#link2">
                                Those pretty wrongs that liberty commits, When I am sometime absent from thy heart, Thy beauty, and thy years full well befits, For still temptation follows where thou art. Gentle thou art, and therefore to be won, Beauteous thou art, therefore to be assail'd; And when a woman woos, what woman's son Will sourly leave her till he have prevail'd?
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
          </Card.Body>
          <CodePreview>
          {`<Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
    <Row>
        <Col sm={4}>
            <ListGroup>
                <ListGroup.Item action href="#link1">
                    Link 1
                </ListGroup.Item>
                <ListGroup.Item action href="#link2">
                    Link 2
                </ListGroup.Item>
            </ListGroup>
        </Col>
        <Col sm={8}>
            <Tab.Content>
                <Tab.Pane eventKey="#link1">
                    When in the chronicle of wasted time I see descriptions of the fairest wights, And beauty making beautiful old rime, In praise of ladies dead and lovely knights, Then, in the blazon of sweet beauty's best, Of hand, of foot, of lip, of eye, of brow, I see their antique pen would have express'd Even such a beauty as you master now. So all their praises are but prophecies Of this our time, all you prefiguring;
                </Tab.Pane>
                <Tab.Pane eventKey="#link2">
                    Those pretty wrongs that liberty commits, When I am sometime absent from thy heart, Thy beauty, and thy years full well befits, For still temptation follows where thou art. Gentle thou art, and therefore to be won, Beauteous thou art, therefore to be assail'd; And when a woman woos, what woman's son Will sourly leave her till he have prevail'd?
                </Tab.Pane>
            </Tab.Content>
        </Col>
    </Row>
</Tab.Container>
`}
          </CodePreview>
        </Card>
      </Block>

    </Layout>
  )
}

export default ListGroupPage