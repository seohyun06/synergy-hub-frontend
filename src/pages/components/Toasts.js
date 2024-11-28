import React, { useState } from 'react';
import {Card, Button, Toast, ToastContainer } from 'react-bootstrap';

import Layout from '../../layout/default';
import Block from '../../components/Block/Block';
import CodePreview from '../../components/CodePreview/CodePreview';
import { MediaGroup, Media, MediaText, Image } from '../../components';

function BadgePage() {
    const [show, setShow] = useState(false);

  return (
    <Layout title="Toasts" content="container">
      <Block.Head page>
        <Block.HeadContent>
            <Block.Title>Toasts</Block.Title>
            <Block.Text>Push notifications to your visitors with a toast, a lightweight and easily customizable alert message.</Block.Text>
        </Block.HeadContent>
      </Block.Head>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Text> <strong className="text-black">Note:</strong> When you copy the code example and if you paste your copied code to any other component. these will not work because you just copied the component's name from code example. to use you have to <code>import</code> these component.</Block.Text>
            <Block.Text>How to import component and use see the <a href="#docs">docs</a></Block.Text>
            <Block.Title tag="h3">Live example</Block.Title>
            <Block.Text>Click the button below to show a toast (positioned with our utilities in the lower right corner) that has been hidden by default.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Button onClick={() => setShow(true)}>Show live Toast</Button>
            <ToastContainer className="p-3" position="bottom-end" containerPosition="fixed">
                <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                    <Toast.Header>
                      <MediaGroup>
                        <Media size="tiny">
                          <Image src="/images/favicon.png"/>
                        </Media>
                        <MediaText>
                          <strong>NioBoard</strong>
                        </MediaText>
                      </MediaGroup>
                      <small>11 mins ago</small>
                    </Toast.Header>
                    <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
                </Toast>
            </ToastContainer>
          </Card.Body>
          <CodePreview>
          {`import { useState } from 'react';
import {Toast, ToastContainer } from 'react-bootstrap';
import { MediaGroup, Media, MediaText, Image } from '../../components';

function BasicExample() {
  const [show, setShow] = useState(false);
  return (
    <>
        <Button onClick={() => setShow(true)}>Show live Toast</Button>
        
        <ToastContainer className="p-3" position="bottom-end" containerPosition="fixed">
            <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                <Toast.Header>
                  <MediaGroup>
                    <Media size="tiny">
                      <Image src="/images/favicon.png"/>
                    </Media>
                    <MediaText>
                      <strong>NioBoard</strong>
                    </MediaText>
                  </MediaGroup>
                  <small>11 mins ago</small>
                </Toast.Header>
                <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
            </Toast>
        </ToastContainer>
    </>
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
            <Block.Title tag="h3">Translucent</Block.Title>
            <Block.Text>Toasts are slightly translucent to blend in with what’s below them.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body className="bg-dark">
            <Toast>
                <Toast.Header>
                  <MediaGroup>
                    <Media size="tiny">
                      <Image src="/images/favicon.png"/>
                    </Media>
                    <MediaText>
                      <strong>NioBoard</strong>
                    </MediaText>
                  </MediaGroup>
                  <small>11 mins ago</small>
                </Toast.Header>
                <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
            </Toast>
          </Card.Body>
          <CodePreview>
          {`<Toast>
    <Toast.Header>
        <img src="/images/favicon.png" className="me-2" alt=""/>
        <strong className="me-auto">NioBoard</strong>
        <small>11 mins ago</small>
    </Toast.Header>
    <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
</Toast>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Stacking</Block.Title>
            <Block.Text>When you have multiple toasts, we default to vertically stacking them in a readable manner.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <ToastContainer className="position-static">
                <Toast>
                    <Toast.Header>
                        <MediaGroup>
                        <Media size="tiny">
                          <Image src="/images/favicon.png"/>
                        </Media>
                        <MediaText>
                          <strong>NioBoard</strong>
                        </MediaText>
                      </MediaGroup>
                        <small>just now</small>
                    </Toast.Header>
                    <Toast.Body>See? Just like this.</Toast.Body>
                </Toast>
                <Toast>
                    <Toast.Header>
                        <MediaGroup>
                        <Media size="tiny">
                          <Image src="/images/favicon.png"/>
                        </Media>
                        <MediaText>
                          <strong>NioBoard</strong>
                        </MediaText>
                      </MediaGroup>
                        <small>11 mins ago</small>
                    </Toast.Header>
                    <Toast.Body>Heads up, toasts will stack automatically</Toast.Body>
                </Toast>
            </ToastContainer>
            
          </Card.Body>
          <CodePreview>
          {`<ToastContainer>
    <Toast>
        <Toast.Header>
            <img src="/images/favicon.png" className="me-2" alt=""/>
            <strong className="me-auto">NioBoard</strong>
            <small>just now</small>
        </Toast.Header>
        <Toast.Body>See? Just like this.</Toast.Body>
    </Toast>
    <Toast>
        <Toast.Header>
            <img src="/images/favicon.png" className="me-2" alt=""/>
            <strong className="me-auto">NioBoard</strong>
            <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>Heads up, toasts will stack automatically</Toast.Body>
    </Toast>
</ToastContainer>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Custom content</Block.Title>
            <Block.Text>Customize your toasts by removing sub-components</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Toast className="align-items-center">
                <div className="d-flex">
                    <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                    <button type="button" className="btn-close me-2 m-auto" aria-label="Close" data-dismiss="toast"></button>
                </div>
            </Toast>
            <p className="mt-4">Alternatively, you can also add additional controls and components to toasts.</p>
            <Toast className="align-items-center">
                <Toast.Body>
                    Hello, world! This is a toast message.
                    <div className="mt-2 pt-2 border-top">
                        <Button size="sm" variant="primary" className="me-1">Take action</Button>
                        <Button size="sm" variant="secondary" data-dismiss="toast">Close</Button>
                    </div>
                </Toast.Body>
            </Toast>
          </Card.Body>
          <CodePreview>
          {`<Toast className="align-items-center">
    <Toast.Body>
        Hello, world! This is a toast message.
        <div className="mt-2 pt-2 border-top">
            <Button size="sm" variant="primary" className="me-1">Take action</Button>
            <Button size="sm" variant="secondary" data-dismiss="toast">Close</Button>
        </div>
    </Toast.Body>
</Toast>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Color schemes</Block.Title>
            <Block.Text>Use the <code>bg</code> prop to change the appearance of a toast.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Toast bg="primary">
                <Toast.Header>
                    <strong className="me-auto">NioBoard</strong>
                    <small>11 mins ago</small>
                </Toast.Header>
                <Toast.Body className="text-white">Heads up, toasts will stack automatically</Toast.Body>
            </Toast>
          </Card.Body>
          <CodePreview>
          {`<Toast bg="primary">
    <Toast.Header>
        <img src="/images/favicon.png" className="me-2" alt=""/>
        <strong className="me-auto">NioBoard</strong>
        <small>11 mins ago</small>
    </Toast.Header>
    <Toast.Body className="text-white">Heads up, toasts will stack automatically</Toast.Body>
</Toast>
`}
          </CodePreview>
        </Card>
      </Block>



    </Layout>
  )
}

export default BadgePage