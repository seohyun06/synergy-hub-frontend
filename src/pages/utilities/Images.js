import { Card} from 'react-bootstrap';

import Layout from '../../layout/default';
import Block from '../../components/Block/Block';
import CodePreview from '../../components/CodePreview/CodePreview';
import Image from '../../components/Image/Image';

function ImagesPage() {
  return (
    <Layout title="Images" content="container">
      <Block.Head page className="wide-md">
        <Block.HeadContent>
            <Block.Title>Images</Block.Title>
            <Block.Text>Documentation and examples for opting images into responsive behavior (so they never become wider than their parent) and add lightweight styles to them—all via classes.</Block.Text>
        </Block.HeadContent>
      </Block.Head>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Text><strong className="text-black">Note:</strong> When you copy the code example and if you paste your copied code to any other component. these will not work because you just copied the component's name from code example. to use you have to <code>import</code> these component.</Block.Text>
            <Block.Text>How to import component and use see the <a href="#docs">docs</a></Block.Text>
            <Block.Title tag="h3">Responsive images</Block.Title>
            <Block.Text>Images are made responsive with <code>fluid</code> prop. This applies <code>max-width: 100%;</code> and <code>height: auto;</code> to the image so that it scales with the parent width.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Image staticImage fluid src="/images/preview/a.jpg" alt="img-responsive" className="rounded"/>
          </Card.Body>
          <CodePreview>
          {`import Image from '../../components/Image/Image';

function BasicExample() {
  return (
    <Image staticImage fluid src="/images/preview/a.jpg" alt="img-responsive" className="rounded"/>
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
            <Block.Title tag="h3">Image thumbnails</Block.Title>
            <Block.Text>You can use <code>thumbnail</code> prop to give an image a rounded 1px border appearance.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Image staticImage thumbnail src="/images/preview/a.jpg" alt="img-responsive" className="rounded"/>
          </Card.Body>
          <CodePreview>
          {`<Image staticImage thumbnail src="/images/preview/a.jpg" alt="img-responsive" className="rounded"/>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Aligning images</Block.Title>
            <Block.Text>Align images with the helper float classes or text alignment classes. block-level images can be centered using the .mx-auto margin utility class</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Image staticImage src="/images/preview/a.jpg" alt="img-responsive" className="rounded mb-2 float-start"/>
            <Image staticImage src="/images/preview/a.jpg" alt="img-responsive" className="rounded mb-2 float-end"/>
          </Card.Body>
          <CodePreview>
          {`<Image staticImage src="/images/preview/a.jpg" alt="img-responsive" className="rounded mb-2 float-start"/>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Card>
          <Card.Body>
            <Image staticImage src="/images/preview/a.jpg" alt="img-responsive" className="rounded mx-auto d-block"/>
          </Card.Body>
          <CodePreview>
          {`<Image staticImage src="/images/preview/a.jpg" alt="img-responsive" className="rounded mx-auto d-block"/>
`}
          </CodePreview>
        </Card>
      </Block>




    </Layout>
  )
}

export default ImagesPage