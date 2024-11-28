import React, { useState } from 'react';
import {Card, Collapse, Button, Fade    } from 'react-bootstrap';

import Layout from '../../layout/default';
import Block from '../../components/Block/Block';
import CodePreview from '../../components/CodePreview/CodePreview';

function CollapsePage() {
  const [open, setOpen] = useState(false);
  const [openHorizontal, setHorizontalOpen] = useState(false);
  const [openFade, setFadeOpen] = useState(false);

  return (
    <Layout title="Collapse" content="container">
      <Block.Head page>
        <Block.HeadContent>
            <Block.Title>Collapse</Block.Title>
            <Block.Text>Add a collapse toggle animation to an element or component.</Block.Text>
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
            <Button className="mb-3" onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}>
                Click
            </Button>
            <Collapse in={open}>
                <div id="example-collapse-text">
                    <Card>
                        <Card.Body>
                            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                        </Card.Body>
                    </Card>
                </div>
            </Collapse>
          </Card.Body>
          <CodePreview>
          {`import React, { useState } from 'react';
import {Button, Collapse} from 'react-bootstrap';

function CollapseExample() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        click
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </Collapse>
    </>
  );
}

export defautl CollapseExample
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Horizontal</Block.Title>
            <Block.Text>Add a collapse toggle animation to an element or component to transition the width instead of height.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Button className="mb-3" onClick={() => setHorizontalOpen(!openHorizontal)} aria-controls="example-collapse-text" aria-expanded={openHorizontal}>
                Click
            </Button>
            <div style={{ minHeight: '150px' }}>
                <Collapse in={openHorizontal} dimension="width">
                <div id="example-horizontal-text">
                    <Card style={{ width: '400px' }}>
                        <Card.Body>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life
                        accusamus terry richardson ad squid. Nihil anim keffiyeh
                        helvetica, craft beer labore wes anderson cred nesciunt sapiente
                        ea proident.
                        </Card.Body>
                    </Card>
                </div>
                </Collapse>
            </div>
          </Card.Body>
          <CodePreview>
          {`import React, { useState } from 'react';
import {Button, Collapse} from 'react-bootstrap';

function CollapseExample() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        click
      </Button>
      <div style={{ minHeight: '150px' }}>
            <Collapse in={openHorizontal} dimension="width">
            <div id="example-horizontal-text">
                <Card style={{ width: '400px' }}>
                    <Card.Body>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt sapiente
                    ea proident.
                    </Card.Body>
                </Card>
            </div>
            </Collapse>
        </div>
    </>
  );
}

export defautl CollapseExample
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Fade</Block.Title>
            <Block.Text>Add a fade animation to a child element or component.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Button className="mb-3" onClick={() => setFadeOpen(!openFade)} aria-controls="example-collapse-text" aria-expanded={openFade}>
                Click
            </Button>
            <Fade in={openFade}>
                <div id="example-fade-text">
                    <Card>
                        <Card.Body>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life
                        accusamus terry richardson ad squid. Nihil anim keffiyeh
                        helvetica, craft beer labore wes anderson cred nesciunt sapiente
                        ea proident.
                        </Card.Body>
                    </Card>
                </div>
            </Fade>
          </Card.Body>
          <CodePreview>
          {`import React, { useState } from 'react';
import {Button, Collapse} from 'react-bootstrap';

function CollapseExample() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        click
      </Button>
      <Fade in={openFade}>
        <div id="example-fade-text">
            <Card>
                <Card.Body>
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. Nihil anim keffiyeh
                helvetica, craft beer labore wes anderson cred nesciunt sapiente
                ea proident.
                </Card.Body>
            </Card>
        </div>
    </Fade>
    </>
  );
}

export defautl CollapseExample
`}
          </CodePreview>
        </Card>
      </Block>



    </Layout>
  )
}

export default CollapsePage