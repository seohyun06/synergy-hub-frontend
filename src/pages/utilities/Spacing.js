import { Card} from 'react-bootstrap';

import Layout from '../../layout/default';
import Block from '../../components/Block/Block';
import CodePreview from '../../components/CodePreview/CodePreview';

function SpacingPage() {
  return (
    <Layout title="Spacing" content="container">
      <Block.Head page className="wide-md">
        <Block.HeadContent>
            <Block.Title>Spacing</Block.Title>
            <Block.Text>Bootstrap includes a wide range of shorthand responsive margin, padding, and gap utility classes to modify an element’s appearance.</Block.Text>
        </Block.HeadContent>
      </Block.Head>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Horizontal centering</Block.Title>
            <Block.Text>Additionally, Bootstrap also includes an <code>.mx-auto</code> class for horizontally centering fixed-width block level content—that is, content that has <code>display: block</code> and a width set—by setting the horizontal margins to auto.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <div className="mx-auto bg-secondary text-white w-25">
                Centered element
            </div>
          </Card.Body>
          <CodePreview>
          {`<div className="mx-auto bg-secondary text-white w-25">
    Centered element
</div>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Gap</Block.Title>
            <Block.Text>When using <code>display: grid</code>, you can make use of gap utilities on the parent grid container.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <div className="d-grid gap-3">
                <div className="p-2 bg-light border">Grid item 1</div>
                <div className="p-2 bg-light border">Grid item 2</div>
                <div className="p-2 bg-light border">Grid item 3</div>
            </div>
          </Card.Body>
          <CodePreview>
          {`<div className="d-grid gap-3">
    <div className="p-2 bg-light border">Grid item 1</div>
    <div className="p-2 bg-light border">Grid item 2</div>
    <div className="p-2 bg-light border">Grid item 3</div>
</div>
`}
          </CodePreview>
        </Card>
      </Block>

      
    </Layout>
  )
}

export default SpacingPage