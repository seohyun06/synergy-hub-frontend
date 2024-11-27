import {Alert, Card} from 'react-bootstrap';

import Layout from '../../layout/default';
import Block from '../../components/Block/Block';
import CodePreview from '../../components/CodePreview/CodePreview';
import AlertDismissible from '../../components/UiElements/alert/AlertDismissible';
import Icon from '../../components/Icon/Icon';

function AlertPage() {
  return (
    <Layout title="Alert" content="container">
      <Block.Head page>
        <Block.HeadContent>
            <Block.Title>Alerts</Block.Title>
            <Block.Text>Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.</Block.Text>
        </Block.HeadContent>
      </Block.Head>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Text> <strong className="text-black">Note:</strong> When you copy the code example and if you paste your copied code to any other component. these will not work because you just copied the component's name from code example. to use you have to <code>import</code> these component.</Block.Text>
            <Block.Text>How to import component and use see the <a href="#docs">docs</a></Block.Text>
            <Block.Title tag="h3">Example</Block.Title>
            <Block.Text>Alerts are available for any length of text, as well as an optional dismiss button. For proper styling, use one of the eight <code>variant</code>s.
            </Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Alert>
              A simple primary alert—check it out!
            </Alert>
            <Alert variant="secondary">
              A simple secondary alert—check it out!
            </Alert>
            <Alert variant="success">
              A simple success alert—check it out!
            </Alert>
            <Alert variant="danger">
              A simple danger alert—check it out!
            </Alert>
            <Alert variant="warning">
              A simple warning alert—check it out!
            </Alert>
            <Alert variant="info">
              A simple info alert—check it out!
            </Alert>
            <Alert variant="light">
              A simple light alert—check it out!
            </Alert>
            <Alert variant="dark">
              A simple dark alert—check it out!
            </Alert>
          </Card.Body>
          <CodePreview>
          {`<Alert variant="primary">
  A simple primary alert—check it out!
</Alert>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
              <Block.Title tag="h3">Links</Block.Title>
              <Block.Text>For links, use the <code> &lt;Alert.Link&gt; </code> component to provide matching colored links within any alert.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Alert>
              A simple primary with an <Alert.Link>example Link</Alert.Link> Give it a click if you like!
            </Alert>
            <Alert variant="secondary">
              A simple secondary with an <Alert.Link>example Link</Alert.Link> Give it a click if you like!
            </Alert>
            <Alert variant="success">
              A simple success with an <Alert.Link>example Link</Alert.Link> Give it a click if you like!
            </Alert>
            <Alert variant="danger">
              A simple danger with an <Alert.Link>example Link</Alert.Link> Give it a click if you like!
            </Alert>
            <Alert variant="warning">
              A simple warning with an <Alert.Link>example Link</Alert.Link> Give it a click if you like!
            </Alert>
            <Alert variant="info">
              A simple info with an <Alert.Link>example Link</Alert.Link> Give it a click if you like!
            </Alert>
            <Alert variant="light">
              A simple light with an <Alert.Link>example Link</Alert.Link> Give it a click if you like!
            </Alert>
            <Alert variant="dark">
              A simple dark with an <Alert.Link>example Link</Alert.Link> Give it a click if you like!
            </Alert>
          </Card.Body>
          <CodePreview>
          {`<Alert variant="primary">
  A simple primary with an <Alert.Link>example Link</Alert.Link> Give it a click if you like!
</Alert>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
              <Block.Title tag="h3">Additional content</Block.Title>
              <Block.Text>Alerts can contain whatever content you like. Headers, paragraphs, dividers, go crazy.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Alert variant="success" className="p-4">
              <Alert.Heading>Hey, nice to see you</Alert.Heading>
              <p>
                Aww yeah, you successfully read this important alert message. This
                example text is going to run a bit longer so that you can see how
                spacing within an alert works with this kind of content.
              </p>
              <hr />
              <p className="mb-0">
                Whenever you need to, be sure to use margin utilities to keep things
                nice and tidy.
              </p>
            </Alert>
          </Card.Body>
          <CodePreview>
          {`<Alert variant="success" className="p-4">
  <Alert.Heading>Hey, nice to see you</Alert.Heading>
  <p>
    Aww yeah, you successfully read this important alert message. This
    example text is going to run a bit longer so that you can see how
    spacing within an alert works with this kind of content.
  </p>
  <hr />
  <p className="mb-0">
    Whenever you need to, be sure to use margin utilities to keep things
    nice and tidy.
  </p>
</Alert>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
              <Block.Title tag="h3">Icons</Block.Title>
              <Block.Text>Similarly, you can use flexbox utilities to create alerts with icons. Depending on your icons and content, you may want to add more utilities or custom styles.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Alert className="d-flex">
              <Icon name="alert-fill" className="me-1 mt-1"></Icon>
              <div> An example primary alert with an icon </div>
            </Alert>
            <Alert className="d-flex" variant="success">
              <Icon name="alert-fill" className="me-1 mt-1"></Icon>
              <div> An example success alert with an icon </div>
            </Alert>
            <Alert className="d-flex" variant="warning">
              <Icon name="alert-fill" className="me-1 mt-1"></Icon>
              <div> An example warning alert with an icon </div>
            </Alert>
            <Alert className="d-flex" variant="danger">
              <Icon name="alert-fill" className="me-1 mt-1"></Icon>
              <div> An example danger alert with an icon </div>
            </Alert>
          </Card.Body>
          <CodePreview>
          {`<Alert className="d-flex">
  <Icon name="alert-fill" className="me-1 mt-1"></Icon>
  <div> An example primary alert with an icon </div>
</Alert>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
              <Block.Title tag="h3">Dismissing</Block.Title>
              <Block.Text>For dismissible, use the <code>AlertDismissible</code> component.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <AlertDismissible variant="danger">
              <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
              <p>Change this and that and try again. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
            </AlertDismissible>
          </Card.Body>
          <CodePreview>
          {`<AlertDismissible variant="danger">
  <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
  <p>Change this and that and try again. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
</AlertDismissible>
`}
          </CodePreview>
        </Card>
      </Block>

    </Layout>
  )
}

export default AlertPage