import React, { useState } from 'react';
import {Card, Modal, Button } from 'react-bootstrap';

import Layout from '../../layout/default';
import Block from '../../components/Block/Block';
import CodePreview from '../../components/CodePreview/CodePreview';

function ModalPage() {
  const [demoModal, setDemoModal] = useState(false);

  const demoModalClose = () => setDemoModal(false);
  const demoModalShow = () => setDemoModal(true);

  // static modal
  const [staticModal, setStaticModal] = useState(false);

  const staticModalClose = () => setStaticModal(false);
  const staticModalShow = () => setStaticModal(true);

  // none animation
  const [noneAnimationModal, setNoneAnimationModal] = useState(false);

  const noneAnimationModalClose = () => setNoneAnimationModal(false);
  const noneAnimationModalShow = () => setNoneAnimationModal(true);

  // Scrolling modal
  const [scrollingModal, setScrollingModal] = useState(false);

  const scrollingModalClose = () => setScrollingModal(false);
  const scrollingModalShow = () => setScrollingModal(true);

  // Optional Sizes
  const [smallModal, setSmallModal] = useState(false);
  const [largeModal, setLargeModal] = useState(false);

  const smallModalClose = () => setSmallModal(false);
  const smallModalShow = () => setSmallModal(true);

  const largeModalClose = () => setLargeModal(false);
  const largeModalShow = () => setLargeModal(true);

  // full screen modal
  const [fullscreen, setFullscreen] = useState(false);
  const [fullscreenSm, setFullscreenSm] = useState(false);
  const [fullscreenMd, setFullscreenMd] = useState(false);
  const [fullscreenLg, setFullscreenLg] = useState(false);
  const [fullscreenXl, setFullscreenXl] = useState(false);
  const [fullscreenXXL, setFullscreenXXL] = useState(false);

  return (
    <Layout title="Modal" content="container">
      <Block.Head page>
        <Block.HeadContent>
            <Block.Title>Modals</Block.Title>
            <Block.Text>Add dialogs to your site for lightboxes, user notifications, or completely custom content.</Block.Text>
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
            <Button variant="primary" onClick={demoModalShow}>
                Launch demo modal
            </Button>
            <Modal show={demoModal} onHide={demoModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woo-hoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button size="sm" variant="secondary" onClick={demoModalClose}>
                        Close
                    </Button>
                    <Button size="sm" variant="primary" onClick={demoModalClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
          </Card.Body>
          <CodePreview>
          {`import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Example() {
  const [show, setShow] = useState(false);

  const demoModalClose = () => setShow(false);
  const demoModalShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={demoModalShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={demoModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={demoModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={demoModalClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
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
            <Block.Title tag="h3">Static backdrop</Block.Title>
            <Block.Text>When backdrop is set to static, the modal will not close when clicking outside it. Click the button below to try it.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Button variant="primary" onClick={staticModalShow}>
                Launch static backdrop modal
            </Button>
            <Modal show={staticModal} onHide={staticModalClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    I will not close if you click outside me. Don't even try to press escape key.
                </Modal.Body>
                <Modal.Footer>
                    <Button size="sm" variant="secondary" onClick={staticModalClose}>
                        Close
                    </Button>
                    <Button size="sm" variant="primary" onClick={staticModalClose}>Understood</Button>
                </Modal.Footer>
            </Modal>
          </Card.Body>
          <CodePreview>
          {`import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Example() {
  const [show, setShow] = useState(false);

  const staticModalClose = () => setShow(false);
  const staticModalShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={staticModalShow}>
        Launch static backdrop modal
      </Button>

      <Modal
        show={show}
        onHide={staticModalClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={staticModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={staticModalClose}>Understood</Button>
        </Modal.Footer>
      </Modal>
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
            <Block.Title tag="h3">Without Animation</Block.Title>
            <Block.Text>A Modal can also be without an animation. For that set the <code>animation</code> prop to <code>false</code>.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Button variant="primary" onClick={noneAnimationModalShow}>
                Launch None Animation modal
            </Button>
            <Modal show={noneAnimationModal} onHide={noneAnimationModalClose} animation={false}>
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                <Button size="sm" variant="secondary" onClick={noneAnimationModalClose}>
                    Close
                </Button>
                <Button size="sm" variant="primary" onClick={noneAnimationModalClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
          </Card.Body>
          <CodePreview>
          {`import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Example() {
  const [show, setShow] = useState(false);

  const noneAnimationModalClose = () => setShow(false);
  const noneAnimationModalShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={noneAnimationModalShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={noneAnimationModalClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={noneAnimationModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={noneAnimationModalClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
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
            <Block.Title tag="h3">Scrolling long content</Block.Title>
            <Block.Text>When modals become too long for the user’s viewport or device, they scroll independent of the page itself. Try the demo below to see what we mean.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Button variant="primary" onClick={scrollingModalShow}>
                Launch Scrolling content modal
            </Button>
            <Modal show={scrollingModal} onHide={scrollingModalClose} dialogClassName="modal-dialog-scrollable">
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal. This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal. This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal. This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal. This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal. This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal. This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal. This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal. This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal. This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal.
                </Modal.Body>
                <Modal.Footer>
                <Button size="sm" variant="secondary" onClick={scrollingModalClose}>
                    Close
                </Button>
                <Button size="sm" variant="primary" onClick={scrollingModalClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
          </Card.Body>
          <CodePreview>
          {`import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Example() {
    const [scrollingModal, setScrollingModal] = useState(false);

    const scrollingModalClose = () => setScrollingModal(false);
    const scrollingModalShow = () => setScrollingModal(true);

  return (
    <>
        <Button variant="primary" onClick={scrollingModalShow}>
            Launch Scrolling content modal
        </Button>
        <Modal show={scrollingModal} onHide={scrollingModalClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal. This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal. This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal. This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal. This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal. This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal. This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal. This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal. This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal. This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal.
            </Modal.Body>
            <Modal.Footer>
                <Button size="sm" variant="secondary" onClick={scrollingModalClose}>
                    Close
                </Button>
                <Button size="sm" variant="primary" onClick={scrollingModalClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
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
            <Block.Title tag="h3">Optional Sizes</Block.Title>
            <Block.Text>You can specify a Bootstrap large or small modal by using the <code>size</code> prop.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <ul className="d-flex flex-wrap gap g-3">
                <li>
                    <Button variant="primary" onClick={smallModalShow}>
                        Launch small modal
                    </Button>
                </li>
                <li>
                    <Button variant="primary" onClick={largeModalShow}>
                        Launch large modal
                    </Button>
                </li>
            </ul>
            
            <Modal size="sm" show={smallModal} onHide={smallModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    This is some placeholder content to show the scrolling behavior for modals.
                </Modal.Body>
                <Modal.Footer>
                <Button size="sm" variant="secondary" onClick={smallModalClose}>
                    Close
                </Button>
                <Button size="sm" variant="primary" onClick={smallModalClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>

            <Modal size="lg" show={largeModal} onHide={largeModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    This is some placeholder content to show the scrolling behavior for modals.
                </Modal.Body>
                <Modal.Footer>
                <Button size="sm" variant="secondary" onClick={largeModalClose}>
                    Close
                </Button>
                <Button size="sm" variant="primary" onClick={largeModalClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
          </Card.Body>
          <CodePreview>
          {`import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Example() {
  const [smallModal, setSmallModal] = useState(false);
  const [largeModal, setLargeModal] = useState(false);

  const smallModalClose = () => setSmallModal(false);
  const smallModalShow = () => setSmallModal(true);

  const largeModalClose = () => setLargeModal(false);
  const largeModalShow = () => setLargeModal(true);

  return (
    <>
        <Button variant="primary" onClick={smallModalShow}>
            Launch small modal
        </Button>
        <Button variant="primary" onClick={largeModalShow}>
            Launch large modal
        </Button>

        <Modal size="sm" show={smallModal} onHide={smallModalClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                This is some placeholder content to show the scrolling behavior for modals.
            </Modal.Body>
            <Modal.Footer>
            <Button size="sm" variant="secondary" onClick={smallModalClose}>
                Close
            </Button>
            <Button size="sm" variant="primary" onClick={smallModalClose}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>

        <Modal size="lg" show={largeModal} onHide={largeModalClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                This is some placeholder content to show the scrolling behavior for modals.
            </Modal.Body>
            <Modal.Footer>
            <Button size="sm" variant="secondary" onClick={largeModalClose}>
                Close
            </Button>
            <Button size="sm" variant="primary" onClick={largeModalClose}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
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
            <Block.Title tag="h3">Fullscreen Modal</Block.Title>
            <Block.Text>You can use the <code>fullscreen</code> prop to make the modal fullscreen. Specifying a breakpoint will only set the modal as fullscreen below the breakpoint size.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <ul className="d-flex flex-wrap gap g-3">
                <li>
                    <Button variant="primary" onClick={() => setFullscreen(true)}>
                        Full screen 
                    </Button>
                </li>
                <li>
                    <Button variant="primary" onClick={() => setFullscreenSm(true)}>
                        Full screen  below sm
                    </Button>
                </li>
                <li>
                    <Button variant="primary" onClick={() => setFullscreenMd(true)}>
                        Full screen  below md
                    </Button>
                </li>
                <li>
                    <Button variant="primary" onClick={() => setFullscreenLg(true)}>
                        Full screen  below lg
                    </Button>
                </li>
                <li>
                    <Button variant="primary" onClick={() => setFullscreenXl(true)}>
                        Full screen  below xl
                    </Button>
                </li>
                <li>
                    <Button variant="primary" onClick={() => setFullscreenXXL(true)}>
                        Full screen  below xxl
                    </Button>
                </li>
            </ul>
            
            <Modal show={fullscreen} fullscreen={true} onHide={() => setFullscreen(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    This is some placeholder content to show the scrolling behavior for modals.
                </Modal.Body>
                <Modal.Footer>
                <Button size="sm" variant="secondary" onClick={() => setFullscreen(false)}>
                    Close
                </Button>
                <Button size="sm" variant="primary" onClick={() => setFullscreen(false)}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={fullscreenSm} fullscreen="sm-down" onHide={() => setFullscreenSm(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Fullscreen below sm</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    This is some placeholder content to show the scrolling behavior for modals.
                </Modal.Body>
                <Modal.Footer>
                <Button size="sm" variant="secondary" onClick={() => setFullscreenSm(false)}>
                    Close
                </Button>
                <Button size="sm" variant="primary" onClick={() => setFullscreenSm(false)}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={fullscreenMd} fullscreen="md-down" onHide={() => setFullscreenMd(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Fullscreen below md</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    This is some placeholder content to show the scrolling behavior for modals.
                </Modal.Body>
                <Modal.Footer>
                <Button size="sm" variant="secondary" onClick={() => setFullscreenMd(false)}>
                    Close
                </Button>
                <Button size="sm" variant="primary" onClick={() => setFullscreenMd(false)}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={fullscreenLg} fullscreen="lg-down" onHide={() => setFullscreenLg(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Fullscreen below lg</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    This is some placeholder content to show the scrolling behavior for modals.
                </Modal.Body>
                <Modal.Footer>
                <Button size="sm" variant="secondary" onClick={() => setFullscreenLg(false)}>
                    Close
                </Button>
                <Button size="sm" variant="primary" onClick={() => setFullscreenLg(false)}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={fullscreenXl} fullscreen="xl-down" onHide={() => setFullscreenXl(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Fullscreen below xl</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    This is some placeholder content to show the scrolling behavior for modals.
                </Modal.Body>
                <Modal.Footer>
                <Button size="sm" variant="secondary" onClick={() => setFullscreenXl(false)}>
                    Close
                </Button>
                <Button size="sm" variant="primary" onClick={() => setFullscreenXl(false)}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={fullscreenXXL} fullscreen="xxl-down" onHide={() => setFullscreenXXL(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Fullscreen below xxl</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    This is some placeholder content to show the scrolling behavior for modals.
                </Modal.Body>
                <Modal.Footer>
                <Button size="sm" variant="secondary" onClick={() => setFullscreenXXL(false)}>
                    Close
                </Button>
                <Button size="sm" variant="primary" onClick={() => setFullscreenXXL(false)}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>

          </Card.Body>
          <CodePreview>
          {`<Modal show={fullscreenSm} fullscreen="sm-down" onHide={() => setFullscreenSm(false)}>
    <Modal.Header closeButton>
        <Modal.Title>Fullscreen below sm</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        This is some placeholder content to show the scrolling behavior for modals.
    </Modal.Body>
    <Modal.Footer>
    <Button size="sm" variant="secondary" onClick={() => setFullscreenSm(false)}>
        Close
    </Button>
    <Button size="sm" variant="primary" onClick={() => setFullscreenSm(false)}>
        Save Changes
    </Button>
    </Modal.Footer>
</Modal>
`}
          </CodePreview>
        </Card>
      </Block>

    </Layout>
  )
}

export default ModalPage