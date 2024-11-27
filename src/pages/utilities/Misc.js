import { Card} from 'react-bootstrap';

import Layout from '../../layout/default';
import Block from '../../components/Block/Block';
import CodePreview from '../../components/CodePreview/CodePreview';
import Hr from '../../components/Utilities/misc/Hr';

function MiscPage() {
  return (
    <Layout title="Misc" content="container">
      <Block.Head page className="wide-md">
        <Block.HeadContent>
            <Block.Title>Reboot</Block.Title>
            <Block.Text>Reboot, a collection of element-specific CSS changes in a single file, kickstart Bootstrap to provide an elegant, consistent, and simple baseline to build upon.</Block.Text>
        </Block.HeadContent>
      </Block.Head>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Text><strong className="text-black">Note:</strong> When you copy the code example and if you paste your copied code to any other component. these will not work because you just copied the component's name from code example. to use you have to <code>import</code> these component.</Block.Text>
            <Block.Text>How to import component and use see the <a href="#docs">docs</a></Block.Text>
            <Block.Title tag="h3">Horizontal rules</Block.Title>
            <Block.Text>The <code>hr</code> element has been simplified. Similar to browser defaults, <code>hr</code> are styled via <code>border-top</code>, have a default <code>opacity: .25</code>, and automatically inherit their <code>border-color</code> via <code>color</code>, including when <code>color</code> is set via the parent. They can be modified with text, border, and opacity utilities.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Hr />
            <div className="text-success">
              <Hr />
            </div>
            <div className="text-danger">
              <Hr />
            </div>
            <div className="text-primary">
              <Hr />
            </div>
          </Card.Body>
          <CodePreview>
          {`import Hr from '../../components/Utilities/misc/Hr';

function Example() {
  return (
    <>
      <Hr />
      <div className="text-success">
        <Hr />
      </div>
    </>
  );
}

export default Example;
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Display property</Block.Title>
            <Block.Text>Quickly and responsively toggle the display value of components and more with our display utilities. Includes support for some of the more common values, as well as some extras for controlling display when printing.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <ul className="d-flex gap g-3 pb-4">
              <li>
                <div className="d-inline p-2 bg-primary text-white">d-inline</div>
              </li>
              <li>
                <div className="d-inline p-2 bg-dark text-white">d-inline</div>
              </li>
            </ul>
            <span className="d-block p-2 bg-primary text-white">d-block</span>
            <span className="d-block p-2 bg-dark text-white">d-block</span>
          </Card.Body>
          <CodePreview>
          {`<div className="d-inline p-2 bg-primary text-white">d-inline</div>
<span className="d-block p-2 bg-primary text-white">d-block</span>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Shadows</Block.Title>
            <Block.Text>Add or remove shadows to elements with box-shadow utilities.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <div className="shadow-none p-3 mb-5 bg-light rounded">No shadow</div>
            <div className="shadow-sm p-3 mb-5 bg-body rounded">Small shadow</div>
            <div className="shadow p-3 mb-5 bg-body rounded">Regular shadow</div>
            <div className="shadow-lg p-3 mb-5 bg-body rounded">Larger shadow</div>
          </Card.Body>
          <CodePreview>
          {`<div className="shadow-sm p-3 bg-body rounded">Small shadow</div>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Opacity</Block.Title>
            <Block.Text>Set the opacity of an element using <code>.opacity-</code> utilities.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <div className="d-flex flex-wrap">
              <div className="opacity-100 p-3 m-2 bg-primary text-white fw-bold rounded">100%</div>
              <div className="opacity-75 p-3 m-2 bg-primary text-white fw-bold rounded">75%</div>
              <div className="opacity-50 p-3 m-2 bg-primary text-white fw-bold rounded">50%</div>
              <div className="opacity-25 p-3 m-2 bg-primary text-white fw-bold rounded">25%</div>
            </div>
          </Card.Body>
          <CodePreview>
          {`<div className="d-flex flex-wrap">
  <div className="opacity-100 p-3 m-2 bg-primary text-white fw-bold rounded">100%</div>
  <div className="opacity-75 p-3 m-2 bg-primary text-white fw-bold rounded">75%</div>
  <div className="opacity-50 p-3 m-2 bg-primary text-white fw-bold rounded">50%</div>
  <div className="opacity-25 p-3 m-2 bg-primary text-white fw-bold rounded">25%</div>
</div>
`}
          </CodePreview>
        </Card>
      </Block>

    </Layout>
  )
}

export default MiscPage