import { Card} from 'react-bootstrap';

import Layout from '../../layout/default';
import Block from '../../components/Block/Block';
import CodePreview from '../../components/CodePreview/CodePreview';

function BorderPage() {
  return (
    <Layout title="Borders" content="container">
      <Block.Head page className="wide-md">
        <Block.HeadContent>
            <Block.Title>Borders</Block.Title>
            <Block.Text>Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons, or any other element.</Block.Text>
        </Block.HeadContent>
      </Block.Head>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Additive</Block.Title>
            <Block.Text>Add borders to custom elements:</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <div className="border-utils">
                <span className="border"></span>
                <span className="border-top"></span>
                <span className="border-end"></span>
                <span className="border-bottom"></span>
                <span className="border-start"></span>
            </div>
          </Card.Body>
          <CodePreview>
          {`<span className="border"></span>
<span className="border-top"></span>
<span className="border-end"></span>
<span className="border-bottom"></span>
<span className="border-start"></span>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Subtractive</Block.Title>
            <Block.Text>Or remove borders:</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <div className="border-utils border-utils-0">
                <span className="border-0"></span>
                <span className="border-top-0"></span>
                <span className="border-end-0"></span>
                <span className="border-bottom-0"></span>
                <span className="border-start-0"></span>
            </div>
          </Card.Body>
          <CodePreview>
          {`<span className="border-0"></span>
<span className="border-top-0"></span>
<span className="border-end-0"></span>
<span className="border-bottom-0"></span>
<span className="border-start-0"></span>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Color</Block.Title>
            <Block.Text>Change the border color using utilities built on our theme colors.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <div className="border-utils border-utils-0">
                <span className="border border-primary"></span>
                <span className="border border-secondary"></span>
                <span className="border border-success"></span>
                <span className="border border-danger"></span>
                <span className="border border-warning"></span>
                <span className="border border-info"></span>
                <span className="border border-light"></span>
                <span className="border border-dark"></span>
                <span className="border border-white"></span>
            </div>
          </Card.Body>
          <CodePreview>
          {`<span className="border border-primary"></span>
<span className="border border-secondary"></span>
<span className="border border-success"></span>
<span className="border border-danger"></span>
<span className="border border-warning"></span>
<span className="border border-info"></span>
<span className="border border-light"></span>
<span className="border border-dark"></span>
<span className="border border-white"></span>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Opacity</Block.Title>
            <Block.Text>Use <code>.border-opacity-</code> utilities:</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <div className="border border-success p-2 mb-2">This is default success border</div>
            <div className="border border-success p-2 mb-2 border-opacity-75">This is 75% opacity success border</div>
            <div className="border border-success p-2 mb-2 border-opacity-50">This is 50% opacity success border</div>
            <div className="border border-success p-2 mb-2 border-opacity-25">This is 25% opacity success border</div>
            <div className="border border-success p-2 border-opacity-10">This is 10% opacity success border</div>
          </Card.Body>
          <CodePreview>
          {`<span className="border border-primary"></span>
<span className="border border-secondary"></span>
<span className="border border-success"></span>
<span className="border border-danger"></span>
<span className="border border-warning"></span>
<span className="border border-info"></span>
<span className="border border-light"></span>
<span className="border border-dark"></span>
<span className="border border-white"></span>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Width</Block.Title>
            <Block.Text>Use <code>.border-</code> utilities for aditional sizes.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <div className="border-utils">
                <span className="border border-1"></span>
                <span className="border border-2"></span>
                <span className="border border-3"></span>
                <span className="border border-4"></span>
                <span className="border border-5"></span>
            </div>
          </Card.Body>
          <CodePreview>
          {`<span className="border border-1"></span>
<span className="border border-2"></span>
<span className="border border-3"></span>
<span className="border border-4"></span>
<span className="border border-5"></span>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Radius</Block.Title>
            <Block.Text>Add classes to an element to easily round its corners.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <div className="rounded-utils">
                <span className="bg-primary-soft rounded"></span>
                <span className="bg-primary-soft rounded-top"></span>
                <span className="bg-primary-soft rounded-end"></span>
                <span className="bg-primary-soft rounded-bottom"></span>
                <span className="bg-primary-soft rounded-start"></span>
                <span className="bg-primary-soft rounded-circle"></span>
                <span className="bg-primary-soft rounded-pill"></span>
            </div>
          </Card.Body>
          <CodePreview>
          {`<span className="bg-primary-soft rounded"></span>
<span className="bg-primary-soft rounded-top"></span>
<span className="bg-primary-soft rounded-end"></span>
<span className="bg-primary-soft rounded-bottom"></span>
<span className="bg-primary-soft rounded-start"></span>
<span className="bg-primary-soft rounded-circle"></span>
<span className="bg-primary-soft rounded-pill"></span>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Sizes</Block.Title>
            <Block.Text>Use the <code>.rounded-</code> classes for larger or smaller rounded corners. Sizes range from 0 to 5, and can be configured by modifying the utilities API.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <div className="rounded-utils">
                <span className="bg-primary-soft rounded-0"></span>
                <span className="bg-primary-soft rounded-1"></span>
                <span className="bg-primary-soft rounded-2"></span>
                <span className="bg-primary-soft rounded-3"></span>
                <span className="bg-primary-soft rounded-4"></span>
                <span className="bg-primary-soft rounded-5"></span>
            </div>
          </Card.Body>
          <CodePreview>
          {`<span className="bg-primary-soft rounded-0"></span>
<span className="bg-primary-soft rounded-1"></span>
<span className="bg-primary-soft rounded-2"></span>
<span className="bg-primary-soft rounded-3"></span>
<span className="bg-primary-soft rounded-4"></span>
<span className="bg-primary-soft rounded-5"></span>
`}
          </CodePreview>
        </Card>
      </Block>

    </Layout>
  )
}

export default BorderPage