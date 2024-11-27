import React, { useState } from 'react';
import {Card, Offcanvas, Button  } from 'react-bootstrap';

import Layout from '../../layout/default';
import Block from '../../components/Block/Block';
import CodePreview from '../../components/CodePreview/CodePreview';

function OffcanvasPage() {
  const [defaultOffcanvas, setDefaultOffcanvas] = useState(false);
  const [offcanvasStart, setOffcanvasStart] = useState(false);
  const [offcanvasEnd, setOffcanvasEnd] = useState(false);
  const [offcanvasTop, setOffcanvasTop] = useState(false);
  const [offcanvasBottom, setOffcanvasBottom] = useState(false);

  const [backdrop, setBackdrop] = useState(false);
  const [backdropDisabled, setBackdropDisabled] = useState(false);
  const [backdropScroll, setBackdropScroll] = useState(false);
  const [backdropWithScroll, setBackdropWithScroll] = useState(false);
  const [staticBackdrop, setStaticBackdrop] = useState(false);

  return (
    <Layout title="Offcanvas" content="container">
      <Block.Head page>
        <Block.HeadContent>
            <Block.Title>Offcanvas</Block.Title>
            <Block.Text>Build hidden sidebars into your project for navigation, shopping carts, and more.</Block.Text>
        </Block.HeadContent>
      </Block.Head>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Text><strong className="text-black">Note:</strong> When you copy the code example and if you paste your copied code to any other component. these will not work because you just copied the component's name from code example. to use you have to <code>import</code> these component.</Block.Text>
            <Block.Text>How to import component and use see the <a href="#docs">docs</a></Block.Text>
            <Block.Title tag="h3">Examples</Block.Title>
            <Block.Text>Offcanvas includes support for a header with a close button and an optional body class for some initial padding. We suggest that you include offcanvas headers with dismiss actions whenever possible, or provide an explicit dismiss action.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Button variant="primary" onClick={() => setDefaultOffcanvas(true)}>
                Launch Offcanvas
            </Button>

            <Offcanvas show={defaultOffcanvas} onHide={() => setDefaultOffcanvas(false)}>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
          </Card.Body>
          <CodePreview>
          {`import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

render(<Example />);
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Placement</Block.Title>
            <Block.Text>Offcanvas supports a few different placements:</Block.Text>
            <ul>
                <li><code>placement="start"</code> places offcanvas on the left of the viewport</li>
                <li><code>placement="end"</code> places offcanvas on the right of the viewport</li>
                <li><code>placement="top"</code> places offcanvas on the top of the viewport</li>
                <li><code>placement="bottom"</code> places offcanvas on the bottom of the viewport</li>
            </ul>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <ul className="d-flex flex-wrap gap g-3">
                <li>
                <Button variant="primary" onClick={() => setOffcanvasStart(true)}>
                    Offcanvas start
                </Button>
                </li>
                <li>
                <Button variant="primary" onClick={() => setOffcanvasEnd(true)}>
                    Offcanvas end
                </Button>
                </li>
                <li>
                <Button variant="primary" onClick={() => setOffcanvasTop(true)}>
                    Offcanvas top
                </Button>
                </li>
                <li>
                <Button variant="primary" onClick={() => setOffcanvasBottom(true)}>
                    Offcanvas bottom
                </Button>
                </li>
            </ul>
            

            <Offcanvas placement="start" show={offcanvasStart} onHide={() => setOffcanvasStart(false)}>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas start</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>

            <Offcanvas placement="end" show={offcanvasEnd} onHide={() => setOffcanvasEnd(false)}>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas end</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>

            <Offcanvas placement="top" show={offcanvasTop} onHide={() => setOffcanvasTop(false)}>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas top</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>

            <Offcanvas placement="bottom" show={offcanvasBottom} onHide={() => setOffcanvasBottom(false)}>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas bottom</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>

          </Card.Body>
          <CodePreview>
          {`<Button variant="primary" onClick={() => setOffcanvasStart(true)}>
    Offcanvas start
</Button>

<Offcanvas placement="start" show={offcanvasStart} onHide={() => setOffcanvasStart(false)}>
    <Offcanvas.Header closeButton>
    <Offcanvas.Title>Offcanvas start</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
        Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
    </Offcanvas.Body>
</Offcanvas>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Backdrop</Block.Title>
            <Block.Text>Scrolling the <code>body</code> element is disabled when an offcanvas and its backdrop are visible. Use the <code>scroll</code> prop to toggle <code>body</code> scrolling and the <code>backdrop</code> prop to toggle the backdrop.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <ul className="d-flex flex-wrap gap g-3">
                <li>
                <Button variant="primary" onClick={() => setBackdrop(true)}>
                   Enable Backdrop default
                </Button>
                </li>
                <li>
                <Button variant="primary" onClick={() => setBackdropDisabled(true)}>
                    Disable backdrop
                </Button>
                </li>
                <li>
                <Button variant="primary" onClick={() => setBackdropScroll(true)}>
                    Enable body scrolling
                </Button>
                </li>
                <li>
                <Button variant="primary" onClick={() => setBackdropWithScroll(true)}>
                    Enable both scrolling & backdrop
                </Button>
                </li>
            </ul>
            

            <Offcanvas placement="start" scroll={false} backdrop={true} show={backdrop} onHide={() => setBackdrop(false)}>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas backdrop</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>

            <Offcanvas placement="start" scroll={false} backdrop={false} show={backdropDisabled} onHide={() => setBackdropDisabled(false)}>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas backdrop disable</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>

            <Offcanvas placement="start" scroll={true} backdrop={false} show={backdropScroll} onHide={() => setBackdropScroll(false)}>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas backdrop scroll</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>

            <Offcanvas placement="start" scroll={true} backdrop={true} show={backdropWithScroll} onHide={() => setBackdropWithScroll(false)}>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas with backdrop and scroll</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>

          </Card.Body>
          <CodePreview>
          {` <Button variant="primary" onClick={() => setBackdrop(true)}>
    Enable Backdrop default
</Button>

<Offcanvas placement="start" scroll={false} backdrop={true} show={backdrop} onHide={() => setBackdrop(false)}>
    <Offcanvas.Header closeButton>
    <Offcanvas.Title>Offcanvas backdrop</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
        Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
    </Offcanvas.Body>
</Offcanvas>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Static backdrop</Block.Title>
            <Block.Text>When <code>backdrop</code> is set to <code>static</code>, the offcanvas will not close when clicking outside of it.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Button variant="primary" onClick={() => setStaticBackdrop(true)}>
                Toggle static offcanvas
            </Button>

            <Offcanvas show={staticBackdrop} onHide={() => setStaticBackdrop(false)} backdrop="static">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    I will not close if you click outside of me.
                </Offcanvas.Body>
            </Offcanvas>

          </Card.Body>
          <CodePreview>
          {`<Button variant="primary" onClick={() => setStaticBackdrop(true)}>
    Toggle static offcanvas
</Button>

<Offcanvas show={staticBackdrop} onHide={() => setStaticBackdrop(false)} backdrop="static">
    <Offcanvas.Header closeButton>
        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
        I will not close if you click outside of me.
    </Offcanvas.Body>
</Offcanvas>
`}
          </CodePreview>
        </Card>
      </Block>

    </Layout>
  )
}

export default OffcanvasPage