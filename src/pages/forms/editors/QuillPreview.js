import { Card,} from 'react-bootstrap';

import Layout from '../../../layout/default';
import Block from '../../../components/Block/Block';
import CodePreview from '../../../components/CodePreview/CodePreview';
import Quill, { QuillMinimal } from '../../../components/Form/editors/Quill';

function QuillPage() {
  return (
    <Layout title="Quill" content="container">
      <Block.Head page className="wide-md">
        <Block.HeadContent>
            <Block.Title>Quill Editor</Block.Title>
            <Block.Text className="lead">Using the <a href="https://github.com/gtgalone/react-quilljs" target="_blank" rel="noreferrer">React Quilljs</a> plugin, you can simply make some awesome rich text editor.</Block.Text>
        </Block.HeadContent>
      </Block.Head>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Basic Editor Example</Block.Title>
            <Block.Text>A basic demostration of quilljs rich text editor.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Quill />
          </Card.Body>
          <CodePreview>
          {`import Quill from '{relative_path_goes_here}/components/Form/editors/Quill';

function QuillExample() {
  return (
    <Quill />
  );
}

export default QuillExample;
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Minimal Editor Example</Block.Title>
            <Block.Text>A minimal demostration of quilljs rich text editor.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <QuillMinimal />
          </Card.Body>
          <CodePreview>
          {`import { QuillMinimal } from '{relative_path_goes_here}/components/Form/editors/Quill';

function QuillMinimalExample() {
  return (
    <QuillMinimal />
  );
}

export default QuillMinimalExample;
`}
          </CodePreview>
        </Card>
      </Block>

 
    </Layout>
  )
}

export default QuillPage;