import { Card} from 'react-bootstrap';

import Layout from '../../layout/default';
import Block from '../../components/Block/Block';
import CodePreview from '../../components/CodePreview/CodePreview';

function BackgroundPage() {
  return (
    <Layout title="Background" content="container">
      <Block.Head page className="wide-md">
        <Block.HeadContent>
            <Block.Title>Background</Block.Title>
            <Block.Text>Convey meaning through background-color and add decoration with gradients.</Block.Text>
        </Block.HeadContent>
      </Block.Head>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Example</Block.Title>
            <Block.Text>Similar to the contextual text color classes, set the background of an element to any contextual class. Background utilities do not set color, so in some cases you’ll want to use <code>.text-*</code> color utilities.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <ul className="d-flex flex-wrap gap g-3">
                <li><div className="p-3 mb-2 bg-primary text-white">.bg-primary</div></li>
                <li><div className="p-3 mb-2 bg-secondary text-white">.bg-secondary</div></li>
                <li><div className="p-3 mb-2 bg-success text-white">.bg-success</div></li>
                <li><div className="p-3 mb-2 bg-danger text-white">.bg-danger</div></li>
                <li><div className="p-3 mb-2 bg-warning text-dark">.bg-warning</div></li>
                <li><div className="p-3 mb-2 bg-info text-white">.bg-info</div></li>
                <li><div className="p-3 mb-2 bg-light text-dark">.bg-light</div></li>
                <li><div className="p-3 mb-2 bg-dark text-white">.bg-dark</div></li>
                <li><div className="p-3 mb-2 bg-body text-dark">.bg-body</div></li>
                <li><div className="p-3 mb-2 bg-white text-dark">.bg-white</div></li>
                <li><div className="p-3 mb-2 bg-transparent text-dark">.bg-transparent</div></li>
            </ul>
          </Card.Body>
          <CodePreview>
          {`<div className="p-3 mb-2 bg-primary text-white">.bg-primary</div>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Background gradient</Block.Title>
            <Block.Text>By adding a <code>.bg-gradient</code> class, a linear gradient is added as background image to the backgrounds.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <ul className="gap g-3">
                <li><div className="p-3 mb-2 bg-primary text-white bg-gradient">.bg-primary.bg-gradient</div></li>
                <li><div className="p-3 mb-2 bg-secondary text-white bg-gradient">.bg-secondary.bg-gradient</div></li>
                <li><div className="p-3 mb-2 bg-success text-white bg-gradient">.bg-success.bg-gradient</div></li>
                <li><div className="p-3 mb-2 bg-danger text-white bg-gradient">.bg-danger.bg-gradient</div></li>
                <li><div className="p-3 mb-2 bg-warning text-dark bg-gradient">.bg-warning.bg-gradient</div></li>
                <li><div className="p-3 mb-2 bg-info text-dark bg-gradient">.bg-info.bg-gradient</div></li>
                <li><div className="p-3 mb-2 bg-light text-dark bg-gradient">.bg-light.bg-gradient</div></li>
                <li><div className="p-3 mb-2 bg-dark text-white bg-gradient">.bg-dark.bg-gradient</div></li>
            </ul>
          </Card.Body>
          <CodePreview>
          {`<div className="p-3 mb-2 bg-primary text-white bg-gradient">.bg-primary.bg-gradient</div>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Opacity</Block.Title>
            <Block.Text>Use <code>.bg-opacity-</code> utilities</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <div className="bg-success p-2 text-white">This is default success background</div>
            <div className="bg-success p-2 text-white bg-opacity-75">This is 75% opacity success background</div>
            <div className="bg-success p-2 text-dark bg-opacity-50">This is 50% opacity success background</div>
            <div className="bg-success p-2 text-dark bg-opacity-25">This is 25% opacity success background</div>
            <div className="bg-success p-2 text-dark bg-opacity-10">This is 10% opacity success background</div>
          </Card.Body>
          <CodePreview>
          {`<div className="bg-success p-2 text-white">This is default success background</div>
<div className="bg-success p-2 text-white bg-opacity-75">This is 75% opacity success background</div>
<div className="bg-success p-2 text-dark bg-opacity-50">This is 50% opacity success background</div>
<div className="bg-success p-2 text-dark bg-opacity-25">This is 25% opacity success background</div>
<div className="bg-success p-2 text-dark bg-opacity-10">This is 10% opacity success background</div>
`}
          </CodePreview>
        </Card>
      </Block>


    </Layout>
  )
}

export default BackgroundPage