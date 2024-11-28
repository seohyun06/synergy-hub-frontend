import {Button, Placeholder, Row, Col, Card} from 'react-bootstrap';

import Layout from '../../layout/default';
import Block from '../../components/Block/Block';
import CodePreview from '../../components/CodePreview/CodePreview';

function PlaceholderPage() {
  return (
    <Layout title="Placeholders" content="container">
      <Block.Head page>
        <Block.HeadContent>
            <Block.Title>Placeholders</Block.Title>
            <Block.Text>Use loading placeholders for your components or pages to indicate something may still be loading.</Block.Text>
        </Block.HeadContent>
      </Block.Head>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Text> <strong className="text-black">Note:</strong> When you copy the code example and if you paste your copied code to any other component. these will not work because you just copied the component's name from code example. to use you have to <code>import</code> these component.</Block.Text>
            <Block.Text>How to import component and use see the <a href="#docs">docs</a></Block.Text>
            <Block.Title tag="h3">Example</Block.Title>
            <Block.Text>In the example below, we take a typical card component and recreate it with placeholders applied to create a “loading card”. Size and proportions are the same between the two</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Row className="g-gs">
                <Col md="3">
                    <Card>
                        <Card.Img variant="top" src="/images/preview/a.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md="3">
                    <Card>
                        <Card.Img variant="top" src="/images/preview/a.jpg" />
                        <Card.Body>
                            <Placeholder as={Card.Title} animation="glow">
                                <Placeholder xs={6} />
                            </Placeholder>
                            <Placeholder as={Card.Text} animation="glow">
                                <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                                <Placeholder xs={6} /> <Placeholder xs={8} />
                            </Placeholder>
                            <Placeholder.Button variant="primary" xs={6} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
          </Card.Body>
          <CodePreview>
          {`import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';

function CardExample() {
  return (
    <div className="d-flex justify-content-around">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
          <Placeholder.Button variant="primary" xs={6} />
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardExample;
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Color</Block.Title>
            <Block.Text>By default, the <code>Placeholder</code> uses <code>currentColor</code>. This can be overriden with a custom color or utility class.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Placeholder xs={12} />
            <Placeholder xs={12} bg="primary" />
            <Placeholder xs={12} bg="secondary" />
            <Placeholder xs={12} bg="success" />
            <Placeholder xs={12} bg="danger" />
            <Placeholder xs={12} bg="warning" />
            <Placeholder xs={12} bg="info" />
            <Placeholder xs={12} bg="light" />
            <Placeholder xs={12} bg="dark" />
          </Card.Body>
          <CodePreview>
          {`import Placeholder from 'react-bootstrap/Placeholder';

function ColorExample() {
  return (
    <>
      <Placeholder xs={12} />
      <Placeholder xs={12} bg="primary" />
      <Placeholder xs={12} bg="secondary" />
      <Placeholder xs={12} bg="success" />
      <Placeholder xs={12} bg="danger" />
      <Placeholder xs={12} bg="warning" />
      <Placeholder xs={12} bg="info" />
      <Placeholder xs={12} bg="light" />
      <Placeholder xs={12} bg="dark" />
    </>
  );
}

export default ColorExample;
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Sizing</Block.Title>
            <Block.Text>The size of <code>Placeholder</code> are based on the typographic style of the parent element. Customize them with sizing props: <code>lg</code>, <code>sm</code>, or <code>xs</code>.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Placeholder xs={12} size="lg" />
            <Placeholder xs={12} />
            <Placeholder xs={12} size="sm" />
            <Placeholder xs={12} size="xs" />
          </Card.Body>
          <CodePreview>
          {`import Placeholder from 'react-bootstrap/Placeholder';

function SizeExample() {
  return (
    <>
      <Placeholder xs={12} size="lg" />
      <Placeholder xs={12} />
      <Placeholder xs={12} size="sm" />
      <Placeholder xs={12} size="xs" />
    </>
  );
}

export default SizeExample;
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Animation</Block.Title>
            <Block.Text>Animate placeholders by setting the prop <code>animation</code> to <code>glow</code> or <code>wave</code> to better convey the perception of something being actively loaded.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Placeholder as="p" animation="glow">
            <Placeholder xs={12} />
            </Placeholder>
            <Placeholder as="p" animation="wave">
            <Placeholder xs={12} />
            </Placeholder>
          </Card.Body>
          <CodePreview>
          {`import Placeholder from 'react-bootstrap/Placeholder';

function AnimationExample() {
  return (
    <>
      <Placeholder as="p" animation="glow">
        <Placeholder xs={12} />
      </Placeholder>
      <Placeholder as="p" animation="wave">
        <Placeholder xs={12} />
      </Placeholder>
    </>
  );
}

export default AnimationExample;
`}
          </CodePreview>
        </Card>
      </Block>

    </Layout>
  )
}

export default PlaceholderPage