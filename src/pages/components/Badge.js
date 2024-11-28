import {Badge, Card, Button} from 'react-bootstrap';

import Layout from '../../layout/default';
import Block from '../../components/Block/Block';
import CodePreview from '../../components/CodePreview/CodePreview';

function BadgePage() {
  return (
    <Layout title="Badge" content="container">
      <Block.Head page>
        <Block.HeadContent>
            <Block.Title>Badges</Block.Title>
            <Block.Text>Documentation and examples for badges, our small count and labeling component.</Block.Text>
        </Block.HeadContent>
      </Block.Head>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Text> <strong className="text-black">Note:</strong> When you copy the code example and if you paste your copied code to any other component. these will not work because you just copied the component's name from code example. to use you have to <code>import</code> these component.</Block.Text>
            <Block.Text>How to import component and use see the <a href="#docs">docs</a></Block.Text>
            <Block.Title tag="h3">Examples</Block.Title>
            <Block.Text>Badges scale to match the size of the immediate parent element by using relative font sizing and em units.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <h1>
                Example heading <Badge bg="secondary">New</Badge>
            </h1>
            <h2>
                Example heading <Badge bg="secondary">New</Badge>
            </h2>
            <h3>
                Example heading <Badge bg="secondary">New</Badge>
            </h3>
            <h4>
                Example heading <Badge bg="secondary">New</Badge>
            </h4>
            <h5>
                Example heading <Badge bg="secondary">New</Badge>
            </h5>
            <h6>
                Example heading <Badge bg="secondary">New</Badge>
            </h6>
          </Card.Body>
          <CodePreview>
          {`<Badge bg="secondary">New</Badge>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
              <Block.Title tag="h3">Buttons</Block.Title>
              <Block.Text>Badges can be used as part of links or buttons to provide a counter.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Button variant="primary">
                Notifications <Badge bg="light" className="ms-1 text-base">4</Badge>
                <span className="visually-hidden">unread messages</span>
            </Button>
          </Card.Body>
          <CodePreview>
          {`<Button variant="primary">
    Notifications <Badge bg="light" className="ms-1 text-base">4</Badge>
    <span className="visually-hidden">unread messages</span>
</Button>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
              <Block.Title tag="h3">Positioned</Block.Title>
              <Block.Text>Use utilities to modify a <code>.badge</code> and position it in the corner of a link or button.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <ul className="d-flex align-items-center gap g-5">
                <li>
                    <Button className="position-relative" variant="primary"> 
                        Inbox 
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"> 99+ 
                            <span className="visually-hidden">unread messages</span>
                        </span>
                    </Button>
                </li>
                <li>
                    <Button className="position-relative" variant="primary"> 
                        Profile 
                        <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
                            <span className="visually-hidden">New alerts</span>
                        </span>
                    </Button>
                </li>
            </ul>
          </Card.Body>
          <CodePreview>
          {`<Button className="position-relative" variant="primary"> 
    Inbox 
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"> 99+ 
        <span className="visually-hidden">unread messages</span>
    </span>
</Button>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
              <Block.Title tag="h3">Background colors</Block.Title>
              <Block.Text>Use the <code>bg=""</code> modifier to change the appearance of a badge.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
          <ul className="d-flex flex-wrap gap g-2">
                <li><Badge bg="primary">Primary</Badge></li>
                <li><Badge bg="secondary">Secondary</Badge></li>
                <li><Badge bg="success">Success</Badge></li>
                <li><Badge bg="danger">Danger</Badge></li>
                <li><Badge bg="warning">Warning</Badge></li>
                <li><Badge bg="info">Info</Badge></li>
                <li><Badge bg="light">Light</Badge></li>
                <li><Badge bg="dark">Dark</Badge></li>
            </ul>
          </Card.Body>
          <CodePreview>
          {`<Badge bg="primary">Primary</Badge>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
              <Block.Title tag="h3">Pill badges</Block.Title>
              <Block.Text>Use the <code>pill</code> modifier to make badges more rounded (with a larger border-radius). </Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
          <ul className="d-flex flex-wrap gap g-2">
                <li><Badge pill bg="primary">Primary</Badge></li>
                <li><Badge pill bg="secondary">Secondary</Badge></li>
                <li><Badge pill bg="success">Success</Badge></li>
                <li><Badge pill bg="danger">Danger</Badge></li>
                <li><Badge pill bg="warning">Warning</Badge></li>
                <li><Badge pill bg="info">Info</Badge></li>
                <li><Badge pill bg="light">Light</Badge></li>
                <li><Badge pill bg="dark">Dark</Badge></li>
            </ul>
          </Card.Body>
          <CodePreview>
          {`<Badge pill bg="primary">Primary</Badge>
`}
          </CodePreview>
        </Card>
      </Block>

    </Layout>
  )
}

export default BadgePage