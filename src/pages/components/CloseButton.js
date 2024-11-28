import {Card, CloseButton  } from 'react-bootstrap';

import Layout from '../../layout/default';
import Block from '../../components/Block/Block';
import CodePreview from '../../components/CodePreview/CodePreview';

function CloseButtonPage() {
  return (
    <Layout title="Close button" content="container">
      <Block.Head page>
        <Block.HeadContent>
            <Block.Title>Close Button</Block.Title>
            <Block.Text>A generic close button for dismissing content such as modals and alerts.</Block.Text>
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
            <CloseButton />
          </Card.Body>
          <CodePreview>
          {`import CloseButton from 'react-bootstrap/CloseButton';

function BasicExample() {
  return <CloseButton />;
}

export default BasicExample;
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Disabled state</Block.Title>
            <Block.Text>Bootstrap adds relevant styling to a disabled close button to prevent user interactions.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <CloseButton disabled />
          </Card.Body>
          <CodePreview>
          {`import CloseButton from 'react-bootstrap/CloseButton';

function DisabledExample() {
  return <CloseButton disabled />;
}

export default DisabledExample;
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Variants</Block.Title>
            <Block.Text>Change the default dark color to white using <code>variant="white"</code>.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <div className="bg-dark p-3">
                <CloseButton variant="white" />
                <CloseButton variant="white" disabled />
            </div>
          </Card.Body>
          <CodePreview>
          {`import CloseButton from 'react-bootstrap/CloseButton';

function VariantsExample() {
  return (
    <div className="bg-dark p-3">
      <CloseButton variant="white" />
      <CloseButton variant="white" disabled />
    </div>
  );
}

export default VariantsExample;
`}
          </CodePreview>
        </Card>
      </Block>

    </Layout>
  )
}

export default CloseButtonPage