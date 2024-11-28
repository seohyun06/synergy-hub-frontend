import {Card, Tooltip, OverlayTrigger, Button  } from 'react-bootstrap';

import Layout from '../../layout/default';
import Block from '../../components/Block/Block';
import CodePreview from '../../components/CodePreview/CodePreview';

function TooltipsPage() {
  return (
    <Layout title="Tooltips" content="container">
      <Block.Head page>
        <Block.HeadContent>
            <Block.Title>Tooltips</Block.Title>
            <Block.Text>A tooltip component for a more stylish alternative to that anchor tag title attribute.</Block.Text>
        </Block.HeadContent>
      </Block.Head>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Text><strong className="text-black">Note:</strong> When you copy the code example and if you paste your copied code to any other component. these will not work because you just copied the component's name from code example. to use you have to <code>import</code> these component.</Block.Text>
            <Block.Text>How to import component and use see the <a href="#docs">docs</a></Block.Text>
            <Block.Title tag="h3">Tooltips on links</Block.Title>
            <Block.Text>Hover over the links below to see tooltips:</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <p>Placeholder text to demonstrate some <OverlayTrigger placement="top" overlay={
                <Tooltip id="tooltip-another"> Tooltip another</Tooltip>
            }><a href="#tooltip-defalult">inline links</a></OverlayTrigger> with tooltips. This is now just filler, no killer. Content placed here just to mimic the presence of <OverlayTrigger placement="top" overlay={
                <Tooltip id="tooltip-another"> Tooltip another</Tooltip>
            }><a href="#tooltip-another">real text</a></OverlayTrigger>. And all that just to give you an idea of how tooltips would look when used in real-world situations. So hopefully you've now seen how these tooltips on links can work in practice, once you use them on your own site or project.</p>
          </Card.Body>
          <CodePreview>
          {`import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function TooltipExample() {
  return (
    <>
        <OverlayTrigger placement="top" overlay={
                <Tooltip id="tooltip-defalult">
                    Tooltip default
                </Tooltip>
            }
        >
        <a href="#tooltip-default">Tooltip default</a>
        </OverlayTrigger>
    </>
  );
}

export default TooltipExample;
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Directions</Block.Title>
            <Block.Text>Hover over the buttons below to see the four tooltips directions: <code>top, right, bottom, left</code>. Directions are mirrored when using Bootstrap in RTL. use <code>placement="right||bottom||left"</code> Default direction is top</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <ul className="d-flex flex-wrap gap g-3">
                <li>
                    <OverlayTrigger placement="top" overlay={
                            <Tooltip id="tooltip-top">
                                Tooltip on top
                            </Tooltip>
                        }
                    >
                        <Button variant="primary">Tooltip on top</Button>
                    </OverlayTrigger>
                </li>
                <li>
                    <OverlayTrigger placement="right" overlay={
                            <Tooltip id="tooltip-right">
                                Tooltip on right
                            </Tooltip>
                        }
                    >
                        <Button variant="primary">Tooltip on right</Button>
                    </OverlayTrigger>
                </li>
                <li>
                    <OverlayTrigger placement="bottom" overlay={
                            <Tooltip id="tooltip-bottom">
                                Tooltip on bottom
                            </Tooltip>
                        }
                    >
                        <Button variant="primary">Tooltip on bottom</Button>
                    </OverlayTrigger>
                </li>
                <li>
                    <OverlayTrigger placement="left" overlay={
                            <Tooltip id="tooltip-left">
                                Tooltip on left
                            </Tooltip>
                        }
                    >
                        <Button variant="primary">Tooltip on left</Button>
                    </OverlayTrigger>
                </li>
            </ul>
          </Card.Body>
          <CodePreview>
          {`import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function TooltipPositionedExample() {
  return (
    <>
        <OverlayTrigger placement="top" overlay={
            <Tooltip id="tooltip-top">
                Tooltip on top
            </Tooltip>
        }
        >
            <Button variant="primary">Tooltip on top</Button>
        </OverlayTrigger>
    </>
  );
}

export default TooltipPositionedExample;
`}
          </CodePreview>
        </Card>
      </Block>

    </Layout>
  )
}

export default TooltipsPage