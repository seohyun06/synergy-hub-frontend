import {Card, Spinner, Button  } from 'react-bootstrap';

import Layout from '../../layout/default';
import Block from '../../components/Block/Block';
import CodePreview from '../../components/CodePreview/CodePreview';

function SpinnersPage() {
  return (
    <Layout title="Spinners" content="container">
      <Block.Head page>
        <Block.HeadContent>
            <Block.Title>Spinners</Block.Title>
            <Block.Text>Spinners can be used to show the loading state in your projects.</Block.Text>
        </Block.HeadContent>
      </Block.Head>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Text><strong className="text-black">Note:</strong> When you copy the code example and if you paste your copied code to any other component. these will not work because you just copied the component's name from code example. to use you have to <code>import</code> these component.</Block.Text>
            <Block.Text>How to import component and use see the <a href="#docs">docs</a></Block.Text>
            <Block.Title tag="h3">Border spinner</Block.Title>
            <Block.Text>Use the border spinners for a lightweight loading indicator.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
          </Card.Body>
          <CodePreview>
          {`import Spinner from 'react-bootstrap/Spinner';

function BasicExample() {
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
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
            <Block.Title tag="h3">Colors</Block.Title>
            <Block.Text>All standard visual variants are available for both animation styles by setting the <code>variant</code> property. Alternatively spinners can be custom sized with the <code>style</code> property, or custom CSS classes.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <ul className="d-flex gap g-3 flex-wrap">
                <li>
                    <Spinner animation="border" variant="primary"></Spinner>
                </li>
                <li>
                    <Spinner animation="border" variant="secondary"></Spinner>
                </li>
                <li>
                    <Spinner animation="border" variant="success"></Spinner>
                </li>
                <li>
                    <Spinner animation="border" variant="danger"></Spinner>
                </li>
                <li>
                    <Spinner animation="border" variant="warning"></Spinner>
                </li>
                <li>
                    <Spinner animation="border" variant="info"></Spinner>
                </li>
                <li>
                    <Spinner animation="border" variant="light"></Spinner>
                </li>
                <li>
                    <Spinner animation="border" variant="dark"></Spinner>
                </li>
            </ul>
          </Card.Body>
          <CodePreview>
          {`import Spinner from 'react-bootstrap/Spinner';

function VariantsExample() {
  return (
    <>
      <Spinner animation="border" variant="primary" />
      <Spinner animation="border" variant="secondary" />
      <Spinner animation="border" variant="success" />
      <Spinner animation="border" variant="danger" />
      <Spinner animation="border" variant="warning" />
      <Spinner animation="border" variant="info" />
      <Spinner animation="border" variant="light" />
      <Spinner animation="border" variant="dark" />
    </>
  );
}

export default VariantsExample;
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Growing spinner</Block.Title>
            <Block.Text>Use <code>animation="grow"</code> prop to <code>Spinner</code> for grow spinner.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <ul className="d-flex gap g-3 flex-wrap">
                <li>
                    <Spinner animation="grow" variant="primary"></Spinner>
                </li>
                <li>
                    <Spinner animation="grow" variant="secondary"></Spinner>
                </li>
                <li>
                    <Spinner animation="grow" variant="success"></Spinner>
                </li>
                <li>
                    <Spinner animation="grow" variant="danger"></Spinner>
                </li>
                <li>
                    <Spinner animation="grow" variant="warning"></Spinner>
                </li>
                <li>
                    <Spinner animation="grow" variant="info"></Spinner>
                </li>
                <li>
                    <Spinner animation="grow" variant="light"></Spinner>
                </li>
                <li>
                    <Spinner animation="grow" variant="dark"></Spinner>
                </li>
            </ul>
          </Card.Body>
          <CodePreview>
          {`import Spinner from 'react-bootstrap/Spinner';

function GrowExample() {
  return (
    <>
      <Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="secondary" />
      <Spinner animation="grow" variant="success" />
      <Spinner animation="grow" variant="danger" />
      <Spinner animation="grow" variant="warning" />
      <Spinner animation="grow" variant="info" />
      <Spinner animation="grow" variant="light" />
      <Spinner animation="grow" variant="dark" />
    </>
  );
}

export default GrowExample;
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Placement</Block.Title>
            <Block.Text>Use flexbox utilities, float utilities, or text alignment utilities to place spinners exactly where you need them in any situation.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <div className="d-flex justify-content-center my-5">
                <Spinner animation="border" variant="secondary"></Spinner>
            </div>
          </Card.Body>
          <CodePreview>
          {`import Spinner from 'react-bootstrap/Spinner';

function centerExample() {
  return (
    <>
    <div className="d-flex justify-content-center my-5">
        <Spinner animation="border" variant="secondary"></Spinner>
    </div>
    </>
  );
}

export default centerExample;
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Sizing</Block.Title>
            <Block.Text>In addition to the standard size, a smaller additional preconfigured size is available by configuring the <code>size</code> property to <code>sm</code>.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <ul className="d-flex gap g-3 flex-wrap">
                <li>
                    <Spinner animation="border" variant="secondary" size="sm"></Spinner>
                </li>
                <li>
                    <Spinner animation="grow" variant="secondary" size="sm"></Spinner>
                </li>
            </ul>
          </Card.Body>
          <CodePreview>
          {`import Spinner from 'react-bootstrap/Spinner';

function SizesExample() {
  return (
    <>
        <Spinner animation="border" variant="secondary" size="sm"></Spinner>
    </>
  );
}

export default SizesExample;
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Buttons</Block.Title>
            <Block.Text>Like the original Bootstrap spinners, these can also be used with buttons. To use this component out-of-the-box it is recommended you change the element type to <code>span</code> by configuring the <code>as</code> property when using spinners inside buttons.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <ul className="d-flex gap g-3 flex-wrap">
                <li>
                    <Button variant="primary" disabled>
                        <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true"/>
                        <span className="visually-hidden">Loading...</span>
                    </Button>
                </li>
                <li>
                    <Button variant="primary" disabled>
                        <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true"/>
                        <span className="ms-1">Loading...</span>
                    </Button>
                </li>
                <li>
                    <Button variant="primary" disabled>
                        <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true"/>
                        <span className="visually-hidden">Loading...</span>
                    </Button>
                </li>
                <li>
                    <Button variant="primary" disabled>
                        <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true"/>
                        <span className="ms-1">Loading...</span>
                    </Button>
                </li>
            </ul>
          </Card.Body>
          <CodePreview>
          {`import Spinner from 'react-bootstrap/Spinner';

function ButtonExample() {
  return (
    <>
    <Button variant="primary" disabled>
        <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true"/>
        <span className="ms-1">Loading...</span>
    </Button>
    </>
  );
}

export default ButtonExample;
`}
          </CodePreview>
        </Card>
      </Block>

    </Layout>
  )
}

export default SpinnersPage