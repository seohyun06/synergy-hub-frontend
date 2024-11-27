import {Card, Breadcrumb } from 'react-bootstrap';

import Layout from '../../layout/default';
import Block from '../../components/Block/Block';
import CodePreview from '../../components/CodePreview/CodePreview';

function BreadcrumbPage() {
  return (
    <Layout title="Breadcrumb" content="container">
      <Block.Head page>
        <Block.HeadContent>
            <Block.Title>Breadcrumb</Block.Title>
            <Block.Text>Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS.</Block.Text>
        </Block.HeadContent>
      </Block.Head>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Text><strong className="text-black">Note:</strong> When you copy the code example and if you paste your copied code to any other component. these will not work because you just copied the component's name from code example. to use you have to <code>import</code> these component.</Block.Text>
            <Block.Text>How to import component and use see the <a href="#docs">docs</a></Block.Text>
            <Block.Title tag="h3">Examples</Block.Title>
            <Block.Text>Add <code>active</code> prop to the active <code>Breadcrumb.Item</code>. Do not set both <code>active</code> and <code>href</code> attributes. <code>active</code> overrides <code>href</code> and <code>span</code> element is rendered instead of <code>a</code>.
            </Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="#">
                    Library
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Data</Breadcrumb.Item>
            </Breadcrumb>
          </Card.Body>
          <CodePreview>
          {`<Breadcrumb>
    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
    <Breadcrumb.Item href="#">Library</Breadcrumb.Item>
    <Breadcrumb.Item active>Data</Breadcrumb.Item>
</Breadcrumb>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Dividers</Block.Title>
            <Block.Text>Add <code>.breadcrumb-arrow</code> class to breadcrumb for arrow styling</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Breadcrumb className="breadcrumb-arrow">
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="#">
                    Library
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Data</Breadcrumb.Item>
            </Breadcrumb>
          </Card.Body>
          <CodePreview>
          {`<Breadcrumb className="breadcrumb-arrow">
    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
    <Breadcrumb.Item href="#">Library</Breadcrumb.Item>
    <Breadcrumb.Item active>Data</Breadcrumb.Item>
</Breadcrumb>
`}
          </CodePreview>
        </Card>
      </Block>
    </Layout>
  )
}

export default BreadcrumbPage