import { Card} from 'react-bootstrap';

import Layout from '../../layout/default';
import Block from '../../components/Block/Block';
import CodePreview from '../../components/CodePreview/CodePreview';

function ColorPage() {
  return (
    <Layout title="Colors" content="container">
      <Block.Head page className="wide-md">
        <Block.HeadContent>
            <Block.Title>Colors</Block.Title>
            <Block.Text>Convey meaning through color with a handful of color utility classes. Includes support for styling links with hover states, too.</Block.Text>
        </Block.HeadContent>
      </Block.Head>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Text colors</Block.Title>
            <Block.Text>Use <code>.text-</code> utilities class for the colorize text.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <p className="text-primary">.text-primary</p>
            <p className="text-secondary">.text-secondary</p>
            <p className="text-success">.text-success</p>
            <p className="text-danger">.text-danger</p>
            <p className="text-warning bg-dark">.text-warning</p>
            <p className="text-info bg-dark">.text-info</p>
            <p className="text-light bg-dark">.text-light</p>
            <p className="text-dark">.text-dark</p>
            <p className="text-body">.text-body</p>
            <p className="text-muted">.text-muted</p>
            <p className="text-white bg-dark">.text-white</p>
            <p className="text-black-50">.text-black-50</p>
            <p className="text-white-50 bg-dark">.text-white-50</p>
          </Card.Body>
          <CodePreview>
          {`<p className="text-primary">.text-primary</p>
<p className="text-secondary">.text-secondary</p>
<p className="text-success">.text-success</p>
<p className="text-danger">.text-danger</p>
<p className="text-warning bg-dark">.text-warning</p>
<p className="text-info bg-dark">.text-info</p>
<p className="text-light bg-dark">.text-light</p>
<p className="text-dark">.text-dark</p>
<p className="text-body">.text-body</p>
<p className="text-muted">.text-muted</p>
<p className="text-white bg-dark">.text-white</p>
<p className="text-black-50">.text-black-50</p>
<p className="text-white-50 bg-dark">.text-white-50</p>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Opacity</Block.Title>
            <Block.Text>Use <code>.text-opacity-</code> utilities</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <div className="text-primary">This is default primary text</div>
            <div className="text-primary text-opacity-75">This is 75% opacity primary text</div>
            <div className="text-primary text-opacity-50">This is 50% opacity primary text</div>
            <div className="text-primary text-opacity-25">This is 25% opacity primary text</div>
          </Card.Body>
          <CodePreview>
          {`<div className="text-primary">This is default primary text</div>
<div className="text-primary text-opacity-75">This is 75% opacity primary text</div>
<div className="text-primary text-opacity-50">This is 50% opacity primary text</div>
<div className="text-primary text-opacity-25">This is 25% opacity primary text</div>
`}
          </CodePreview>
        </Card>
      </Block>

      

    </Layout>
  )
}

export default ColorPage