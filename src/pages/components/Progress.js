import {ProgressBar, Card} from 'react-bootstrap';

import Layout from '../../layout/default';
import Block from '../../components/Block/Block';
import CodePreview from '../../components/CodePreview/CodePreview';

function ProgressPage() {
  return (
    <Layout title="Progress" content="container">
      <Block.Head page>
        <Block.HeadContent>
            <Block.Title>Progress</Block.Title>
            <Block.Text>Documentation and examples for using Bootstrap custom progress bars featuring support for stacked bars, animated backgrounds, and text labels.</Block.Text>
        </Block.HeadContent>
      </Block.Head>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Text><strong className="text-black">Note:</strong> When you copy the code example and if you paste your copied code to any other component. these will not work because you just copied the component's name from code example. to use you have to <code>import</code> these component.</Block.Text>
            <Block.Text>How to import component and use see the <a href="#docs">docs</a></Block.Text>
            <Block.Title tag="h3">Examples</Block.Title>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <ul className="gap g-3">
                <li>
                    <ProgressBar />
                </li>
                <li>
                    <ProgressBar now={60}/>
                </li>
            </ul>
          </Card.Body>
          <CodePreview>
          {`import ProgressBar from 'react-bootstrap/ProgressBar';

function BasicExample() {
  return <ProgressBar now={60} />;
}

export default BasicExample;
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Labels</Block.Title>
            <Block.Text>Add a <code>label</code> prop to show a visible percentage. For low percentages, consider adding a min-width to ensure the label's text is fully visible.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <ul className="gap g-3">
                <li>
                    <ProgressBar now={60} label="60"/>
                </li>
            </ul>
          </Card.Body>
          <CodePreview>
          {`import ProgressBar from 'react-bootstrap/ProgressBar';

function BasicExample() {
  return <ProgressBar now={60} label="60"/>;
}

export default BasicExample;
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Backgrounds</Block.Title>
            <Block.Text>Use <code>variant=""</code> props to change the appearance of individual progress bars.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <ul className="gap g-3">
                <li>
                    <ProgressBar variant="success" now={25}/>
                </li>
                <li>
                    <ProgressBar variant="info" now={50}/>
                </li>
                <li>
                    <ProgressBar variant="warning" now={70}/>
                </li>
                <li>
                    <ProgressBar variant="danger" now={100}/>
                </li>
            </ul>
          </Card.Body>
          <CodePreview>
          {`import ProgressBar from 'react-bootstrap/ProgressBar';

function BasicExample() {
  return <ProgressBar variant="success" now={25}/>
}

export default BasicExample;
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Striped</Block.Title>
            <Block.Text>Add <code>striped</code> props to any <code>ProgressBar</code> to apply a stripe via CSS gradient over the progress bar’s background color.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <ul className="gap g-3">
                <li>
                    <ProgressBar striped variant="success" now={25}/>
                </li>
                <li>
                    <ProgressBar striped variant="info" now={50}/>
                </li>
                <li>
                    <ProgressBar striped variant="warning" now={70}/>
                </li>
                <li>
                    <ProgressBar striped variant="danger" now={100}/>
                </li>
            </ul>
          </Card.Body>
          <CodePreview>
          {`import ProgressBar from 'react-bootstrap/ProgressBar';

function BasicExample() {
  return <ProgressBar striped variant="success" now={25}/>
}

export default BasicExample;
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Animated</Block.Title>
            <Block.Text>Add <code>animated</code> prop to animate the stripes right to left.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <ul className="gap g-3">
                <li>
                    <ProgressBar animated variant="success" now={25}/>
                </li>
            </ul>
          </Card.Body>
          <CodePreview>
          {`import ProgressBar from 'react-bootstrap/ProgressBar';

function BasicExample() {
  return <ProgressBar animated variant="success" now={25}/>
}

export default BasicExample;
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Multiple bars</Block.Title>
            <Block.Text>Include multiple progress bars in a progress component if you need.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <ul className="gap g-3">
                <li>
                    <ProgressBar>
                        <ProgressBar variant="success" now={35} key={1} />
                        <ProgressBar variant="warning" now={20} key={2} />
                        <ProgressBar variant="danger" now={10} key={3} />
                    </ProgressBar>
                </li>
            </ul>
          </Card.Body>
          <CodePreview>
          {`import ProgressBar from 'react-bootstrap/ProgressBar';

function BasicExample() {
  return (
    <ProgressBar>
        <ProgressBar variant="success" now={35} key={1} />
        <ProgressBar variant="warning" now={20} key={2} />
        <ProgressBar variant="danger" now={10} key={3} />
    </ProgressBar>
  )
}

export default BasicExample;
`}
          </CodePreview>
        </Card>
      </Block>


    </Layout>
  )
}

export default ProgressPage