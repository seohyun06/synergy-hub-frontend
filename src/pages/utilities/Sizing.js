import { Card} from 'react-bootstrap';

import Layout from '../../layout/default';
import Block from '../../components/Block/Block';
import CodePreview from '../../components/CodePreview/CodePreview';

function SizingPage() {
  return (
    <Layout title="Sizing" content="container">
      <Block.Head page className="wide-md">
        <Block.HeadContent>
            <Block.Title>Sizing</Block.Title>
            <Block.Text>Easily make an element as wide or as tall with our width and height utilities.</Block.Text>
        </Block.HeadContent>
      </Block.Head>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Width</Block.Title>
            <Block.Text>Includes support for <code>25%, 50%, 75%, 100%</code> and auto by default. Modify those values as you need to generate different utilities here.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <div className="w-25 p-3 bg-lighter">Width 25%</div>
            <div className="w-50 p-3 bg-lighter">Width 50%</div>
            <div className="w-75 p-3 bg-lighter">Width 75%</div>
            <div className="w-100 p-3 bg-lighter">Width 100%</div>
            <div className="w-auto p-3 bg-lighter">Width auto</div>
          </Card.Body>
          <CodePreview>
          {`<div className="w-25 p-3 bg-lighter">Width 25%</div>
<div className="w-50 p-3 bg-lighter">Width 50%</div>
<div className="w-75 p-3 bg-lighter">Width 75%</div>
<div className="w-100 p-3 bg-lighter">Width 100%</div>
<div className="w-auto p-3 bg-lighter">Width auto</div>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Height</Block.Title>
            <Block.Text>Includes support for <code>25%, 50%, 75%, 100%</code>, and auto by default. Modify those values as you need to generate different utilities here.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <div style={{height: "100px"}} className="bg-lighter small">
                <div className="h-25 d-inline-block bg-light me-2">Height 25%</div>
                <div className="h-50 d-inline-block bg-light me-2">Height 50%</div>
                <div className="h-75 d-inline-block bg-light me-2">Height 75%</div>
                <div className="h-100 d-inline-block bg-light me-2">Height 100%</div>
                <div className="h-auto d-inline-block bg-light me-2">Height auto</div>
            </div>
          </Card.Body>
          <CodePreview>
          {`<div className="h-25 d-inline-block bg-light me-2">Height 25%</div>
<div className="h-50 d-inline-block bg-light me-2">Height 50%</div>
<div className="h-75 d-inline-block bg-light me-2">Height 75%</div>
<div className="h-100 d-inline-block bg-light me-2">Height 100%</div>
<div className="h-auto d-inline-block bg-light me-2">Height auto</div>
`}
          </CodePreview>
        </Card>
      </Block>
    </Layout>
  )
}

export default SizingPage