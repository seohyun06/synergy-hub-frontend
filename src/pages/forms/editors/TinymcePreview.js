import { Card,} from 'react-bootstrap';

import Layout from '../../../layout/default';
import Block from '../../../components/Block/Block';
import CodePreview from '../../../components/CodePreview/CodePreview';
import Tinymce from '../../../components/Form/editors/Tinymce';

function TinymcePage() {
  return (
    <Layout title="Tinymce" content="container">
      <Block.Head page className="wide-md">
        <Block.HeadContent>
            <Block.Title>Tinymce Editor</Block.Title>
            <Block.Text className="lead">Using the <a href="https://www.tiny.cloud/docs/tinymce/6/react-cloud/" target="_blank" rel="noreferrer">Tinymce react</a> plugin, you can simply make some awesome rich text editor.</Block.Text>
        </Block.HeadContent>
      </Block.Head>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Default settings Editor</Block.Title>
            <Block.Text>Tinymce rich text editor with default options.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
           <Tinymce initialValue="<p>Hello tinymce</p>"/>
          </Card.Body>
          <CodePreview>
          {`import Tinymce from '{relative_path_goes_here}/components/Form/editors/Tinymce';

function TinymceExample() {
  return (
    <Tinymce />
  );
}

export default TinymceExample;
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">No Toolbar Editor</Block.Title>
            <Block.Text>Use <code>toolbar={`{false}`}</code> on <code>Tinymce</code> to hide toolbar.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
           <Tinymce toolbar={false} initialValue="<p>Hello tinymce</p>"/>
          </Card.Body>
          <CodePreview>
          {`import Tinymce from '{relative_path_goes_here}/components/Form/editors/Tinymce';

function TinymceExample() {
  return (
    <Tinymce toolbar={false}/>
  );
}

export default TinymceExample;
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">No Menubar Editor</Block.Title>
            <Block.Text>Use <code>menubar={`{false}`}</code> on <code>Tinymce</code> to hide menubar.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
           <Tinymce menubar={false} initialValue="<p>Hello tinymce</p>"/>
          </Card.Body>
          <CodePreview>
          {`import Tinymce from '{relative_path_goes_here}/components/Form/editors/Tinymce';

function TinymceExample() {
  return (
    <Tinymce menubar={false}/>
  );
}

export default TinymceExample;
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Inline Editor</Block.Title>
            <Block.Text>Use <code>inline={`{true}`}</code> and <code>menubar={`{false}`}</code> to <code>Tinymce</code> to unable inline editor mode.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
           <Tinymce inline={true} menubar={false} initialValue="<p>Here are some of our customer’s most common use cases for TinyMCE:</p> <p>And those use cases are just the start. TinyMCE is incredibly flexible, and with hundreds of APIs there’s likely a solution for your editor project. If you haven’t experienced Tiny Cloud, get started today. You’ll even get a free trial of our premium plugins – no credit card required!</p>"/>
          </Card.Body>
          <CodePreview>
          {`import Tinymce from '{relative_path_goes_here}/components/Form/editors/Tinymce';

function TinymceExample() {
  return (
    <Tinymce inline={true} menubar={false} initialValue="<p>Here are some of our customer’s most common use cases for TinyMCE:</p> <p>And those use cases are just the start. TinyMCE is incredibly flexible, and with hundreds of APIs there’s likely a solution for your editor project. If you haven’t experienced Tiny Cloud, get started today. You’ll even get a free trial of our premium plugins – no credit card required!</p>"/>
  );
}

export default TinymceExample;
`}
          </CodePreview>
        </Card>
      </Block>

    </Layout>
  )
}

export default TinymcePage;