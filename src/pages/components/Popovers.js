import {OverlayTrigger, Popover, Card, Button} from 'react-bootstrap';

import Layout from '../../layout/default';
import Block from '../../components/Block/Block';
import CodePreview from '../../components/CodePreview/CodePreview';

function PopoverPage() {

    const popover = (
        <Popover id="popover-basic">
          <Popover.Header as="h3">Popover right</Popover.Header>
          <Popover.Body>
            And here's some <strong>amazing</strong> content. It's very engaging.
            right?
          </Popover.Body>
        </Popover>
    );
      
  return (
    <Layout title="Popovers" content="container">
      <Block.Head page>
        <Block.HeadContent>
            <Block.Title>Popovers</Block.Title>
            <Block.Text>Documentation and examples for adding Bootstrap popovers, like those found in iOS, to any element on your site.</Block.Text>
        </Block.HeadContent>
      </Block.Head>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Text> <strong className="text-black">Note:</strong> When you copy the code example and if you paste your copied code to any other component. these will not work because you just copied the component's name from code example. to use you have to <code>import</code> these component.</Block.Text>
            <Block.Text>How to import component and use see the <a href="#docs">docs</a></Block.Text>
            <Block.Title tag="h3">Examples</Block.Title>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                <Button variant="success">Click me to see</Button>
            </OverlayTrigger>
          </Card.Body>
          <CodePreview>
          {`import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

const popover = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Popover right</Popover.Header>
    <Popover.Body>
      And here's some <strong>amazing</strong> content. It's very engaging.
      right?
    </Popover.Body>
  </Popover>
);

const Example = () => (
  <OverlayTrigger trigger="click" placement="right" overlay={popover}>
    <Button variant="success">Click me to see</Button>
  </OverlayTrigger>
);

render(<Example />);
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Four directions</Block.Title>
            <Block.Text>Four options are available: top, right, bottom, and left. Directions are mirrored when using Bootstrap in RTL. Set <code>placement="top||right||bottom||left"</code> to change the direction.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <ul className="d-flex gap g-3 flex-wrap">
                <li>
                    <OverlayTrigger trigger="click" placement="top" overlay={
                        <Popover id="popover-positioned-top">
                            <Popover.Header as="h3">Popover top</Popover.Header>
                            <Popover.Body>
                                <strong>Holy guacamole!</strong> Check this info.
                            </Popover.Body>
                        </Popover>
                    }>
                        <Button variant="secondary">Popover on top</Button>
                    </OverlayTrigger>
                </li>
                <li>
                    <OverlayTrigger trigger="click" placement="right" overlay={
                        <Popover id="popover-positioned-right">
                            <Popover.Header as="h3">Popover right</Popover.Header>
                            <Popover.Body>
                                <strong>Holy guacamole!</strong> Check this info.
                            </Popover.Body>
                        </Popover>
                    }>
                        <Button variant="secondary">Popover on right</Button>
                    </OverlayTrigger>
                </li>
                <li>
                    <OverlayTrigger trigger="click" placement="bottom" overlay={
                        <Popover id="popover-positioned-bottom">
                            <Popover.Header as="h3">Popover bottom</Popover.Header>
                            <Popover.Body>
                                <strong>Holy guacamole!</strong> Check this info.
                            </Popover.Body>
                        </Popover>
                    }>
                        <Button variant="secondary">Popover on bottom</Button>
                    </OverlayTrigger>
                </li>
                <li>
                    <OverlayTrigger trigger="click" placement="left" overlay={
                        <Popover id="popover-positioned-left">
                            <Popover.Header as="h3">Popover left</Popover.Header>
                            <Popover.Body>
                                <strong>Holy guacamole!</strong> Check this info.
                            </Popover.Body>
                        </Popover>
                    }>
                        <Button variant="secondary">Popover on left</Button>
                    </OverlayTrigger>
                </li>
            </ul>
          </Card.Body>
          <CodePreview>
          {`import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

return (
    <>
        <OverlayTrigger trigger="click" placement="top" overlay={
            <Popover id="popover-positioned-top">
                <Popover.Header as="h3">Popover top</Popover.Header>
                <Popover.Body>
                    <strong>Holy guacamole!</strong> Check this info.
                </Popover.Body>
            </Popover>
        }>
            <Button variant="secondary">Popover on top</Button>
        </OverlayTrigger>
    </>
)

render(<Example />);
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Disabled elements</Block.Title>
            <Block.Text>Elements with the <code>disabled</code> attribute aren’t interactive, meaning users cannot hover or click them to trigger a popover (or tooltip). As a workaround, you’ll want to trigger the overlay from a wrapper <code>div</code> or <code>span</code> and override the <code>pointer-events</code> on the disabled element.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <ul className="d-flex gap g-3 flex-wrap">
                <li>
                    <OverlayTrigger overlay={
                        <Popover id="popover-positioned-disbled">
                            <Popover.Header as="h3">Disabled Popover</Popover.Header>
                            <Popover.Body>
                                <strong>Holy guacamole!</strong> Check this info.
                            </Popover.Body>
                        </Popover>
                    }>
                        <span className="d-inline-block">
                            <Button disabled style={{ pointerEvents: 'none' }}>
                                Disabled button
                            </Button>
                        </span>
                    </OverlayTrigger>
                </li>
            </ul>
          </Card.Body>
          <CodePreview>
          {`import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

return (
    <>
        <OverlayTrigger overlay={
            <Popover id="popover-positioned-disbled">
                <Popover.Header as="h3">Disabled Popover</Popover.Header>
                <Popover.Body>
                    <strong>Holy guacamole!</strong> Check this info.
                </Popover.Body>
            </Popover>
        }>
            <span className="d-inline-block">
                <Button disabled style={{ pointerEvents: 'none' }}>
                    Disabled button
                </Button>
            </span>
        </OverlayTrigger>
    </>
)

render(<Example />);
`}
          </CodePreview>
        </Card>
      </Block>


    </Layout>
  )
}

export default PopoverPage