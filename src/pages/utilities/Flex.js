import { Card} from 'react-bootstrap';

import Layout from '../../layout/default';
import Block from '../../components/Block/Block';
import CodePreview from '../../components/CodePreview/CodePreview';

function FlexPage() {
  return (
    <Layout title="Flex" content="container">
      <Block.Head page className="wide-md">
        <Block.HeadContent>
            <Block.Title>Flex</Block.Title>
            <Block.Text>Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more with a full suite of responsive flexbox utilities. For more complex implementations, custom CSS may be necessary.</Block.Text>
        </Block.HeadContent>
      </Block.Head>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Enable flex behaviors</Block.Title>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <div className="d-flex p-2 bg-secondary text-white mb-3">I'm a flexbox container!</div>
            <div className="d-inline-flex p-2 bg-secondary text-white">I'm an inline flexbox container!</div>
          </Card.Body>
          <CodePreview>
          {`<div className="d-flex p-2 bg-secondary text-white mb-3">I'm a flexbox container!</div>
<div className="d-inline-flex p-2 bg-secondary text-white">I'm an inline flexbox container!</div>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Direction</Block.Title>
            <Block.Text>Use <code>.flex-row</code> to set a horizontal direction (the browser default), or <code>.flex-row-reverse</code> to start the horizontal direction from the opposite side.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <div className="d-flex flex-row mb-3 bg-secondary text-white">
                <div className="p-2">Flex item 1</div>
                <div className="p-2">Flex item 2</div>
                <div className="p-2">Flex item 3</div>
            </div>
            <div className="d-flex flex-row-reverse bg-secondary text-white">
                <div className="p-2">Flex item 1</div>
                <div className="p-2">Flex item 2</div>
                <div className="p-2">Flex item 3</div>
            </div>
            <p className="mt-5">Use <code>.flex-column</code> to set a vertical direction, or <code>.flex-column-reverse</code> to start the vertical direction from the opposite side.</p>
            <div className="d-flex flex-column mb-3 bg-secondary text-white">
                <div className="p-2">Flex item 1</div>
                <div className="p-2">Flex item 2</div>
                <div className="p-2">Flex item 3</div>
            </div>
            <div className="d-flex flex-column-reverse bg-secondary text-white">
                <div className="p-2">Flex item 1</div>
                <div className="p-2">Flex item 2</div>
                <div className="p-2">Flex item 3</div>
            </div>
          </Card.Body>
          <CodePreview>
          {`<div className="d-flex flex-row mb-3 bg-secondary text-white">
    <div className="p-2">Flex item 1</div>
    <div className="p-2">Flex item 2</div>
    <div className="p-2">Flex item 3</div>
</div>
<div className="d-flex flex-row-reverse bg-secondary text-white">
    <div className="p-2">Flex item 1</div>
    <div className="p-2">Flex item 2</div>
    <div className="p-2">Flex item 3</div>
</div>

<div className="d-flex flex-column mb-3 bg-secondary text-white">
    <div className="p-2">Flex item 1</div>
    <div className="p-2">Flex item 2</div>
    <div className="p-2">Flex item 3</div>
</div>
<div className="d-flex flex-column-reverse bg-secondary text-white">
    <div className="p-2">Flex item 1</div>
    <div className="p-2">Flex item 2</div>
    <div className="p-2">Flex item 3</div>
</div>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Justify content</Block.Title>
            <Block.Text>Use <code>justify-content</code> utilities on flexbox containers to change the alignment of flex items on the main axis (the x-axis to start, y-axis if flex-direction: column). Choose from start (browser default), end, center, between, around, or evenly.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <div className="d-flex justify-content-start mb-3 bg-secondary text-white">
                <div className="p-2">Flex item</div>
                <div className="p-2">Flex item</div>
                <div className="p-2">Flex item</div>
            </div>
            <div className="d-flex justify-content-end mb-3 bg-secondary text-white">
                <div className="p-2">Flex item</div>
                <div className="p-2">Flex item</div>
                <div className="p-2">Flex item</div>
              </div>
              <div className="d-flex justify-content-center mb-3 bg-secondary text-white">
                <div className="p-2">Flex item</div>
                <div className="p-2">Flex item</div>
                <div className="p-2">Flex item</div>
              </div>
              <div className="d-flex justify-content-between mb-3 bg-secondary text-white">
                <div className="p-2">Flex item</div>
                <div className="p-2">Flex item</div>
                <div className="p-2">Flex item</div>
              </div>
              <div className="d-flex justify-content-around mb-3 bg-secondary text-white">
                <div className="p-2">Flex item</div>
                <div className="p-2">Flex item</div>
                <div className="p-2">Flex item</div>
              </div>
              <div className="d-flex justify-content-evenly bg-secondary text-white">
                <div className="p-2">Flex item</div>
                <div className="p-2">Flex item</div>
                <div className="p-2">Flex item</div>
              </div>
          </Card.Body>
          <CodePreview>
          {`<div className="d-flex justify-content-start mb-3 bg-secondary text-white">
<div className="p-2">Flex item</div>
<div className="p-2">Flex item</div>
<div className="p-2">Flex item</div>
</div>
<div className="d-flex justify-content-end mb-3 bg-secondary text-white">
<div className="p-2">Flex item</div>
<div className="p-2">Flex item</div>
<div className="p-2">Flex item</div>
</div>
<div className="d-flex justify-content-center mb-3 bg-secondary text-white">
<div className="p-2">Flex item</div>
<div className="p-2">Flex item</div>
<div className="p-2">Flex item</div>
</div>
<div className="d-flex justify-content-between mb-3 bg-secondary text-white">
<div className="p-2">Flex item</div>
<div className="p-2">Flex item</div>
<div className="p-2">Flex item</div>
</div>
<div className="d-flex justify-content-around mb-3 bg-secondary text-white">
<div className="p-2">Flex item</div>
<div className="p-2">Flex item</div>
<div className="p-2">Flex item</div>
</div>
<div className="d-flex justify-content-evenly bg-secondary text-white">
<div className="p-2">Flex item</div>
<div className="p-2">Flex item</div>
<div className="p-2">Flex item</div>
</div>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Align items</Block.Title>
            <Block.Text>Use <code>align-items</code> utilities on flexbox containers to change the alignment of flex items on the cross axis (the y-axis to start, x-axis if flex-direction: column). Choose from start, end, center, baseline, or stretch (browser default).</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <div className="d-flex align-items-start mb-3 bg-secondary text-white" style={{height: "100px"}}>
                <div className="p-2 border">Flex item</div>
                <div className="p-2 border">Flex item</div>
                <div className="p-2 border">Flex item</div>
            </div>
            <div className="d-flex align-items-end mb-3 bg-secondary text-white" style={{height: "100px"}}>
                <div className="p-2 border">Flex item</div>
                <div className="p-2 border">Flex item</div>
                <div className="p-2 border">Flex item</div>
              </div>
              <div className="d-flex align-items-center mb-3 bg-secondary text-white" style={{height: "100px"}}>
                <div className="p-2 border">Flex item</div>
                <div className="p-2 border">Flex item</div>
                <div className="p-2 border">Flex item</div>
              </div>
              <div className="d-flex align-items-baseline mb-3 bg-secondary text-white" style={{height: "100px"}}>
                <div className="p-2 border">Flex item</div>
                <div className="p-2 border">Flex item</div>
                <div className="p-2 border">Flex item</div>
              </div>
              <div className="d-flex align-items-stretch mb-3 bg-secondary text-white" style={{height: "100px"}}>
                <div className="p-2 border">Flex item</div>
                <div className="p-2 border">Flex item</div>
                <div className="p-2 border">Flex item</div>
              </div>
          </Card.Body>
          <CodePreview>
          {`<div className="d-flex align-items-start mb-3 bg-secondary text-white">
<div className="p-2 border">Flex item</div>
<div className="p-2 border">Flex item</div>
<div className="p-2 border">Flex item</div>
</div>
<div className="d-flex align-items-end mb-3 bg-secondary text-white">
<div className="p-2 border">Flex item</div>
<div className="p-2 border">Flex item</div>
<div className="p-2 border">Flex item</div>
</div>
<div className="d-flex align-items-center mb-3 bg-secondary text-white">
<div className="p-2 border">Flex item</div>
<div className="p-2 border">Flex item</div>
<div className="p-2 border">Flex item</div>
</div>
<div className="d-flex align-items-baseline mb-3 bg-secondary text-white">
<div className="p-2 border">Flex item</div>
<div className="p-2 border">Flex item</div>
<div className="p-2 border">Flex item</div>
</div>
<div className="d-flex align-items-stretch mb-3 bg-secondary text-white">
<div className="p-2 border">Flex item</div>
<div className="p-2 border">Flex item</div>
<div className="p-2 border">Flex item</div>
</div>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Align self</Block.Title>
            <Block.Text>Use <code>align-self</code> utilities on flexbox items to individually change their alignment on the cross axis (the y-axis to start, x-axis if flex-direction: column). Choose from the same options as align-items: start, end, center, baseline, or stretch (browser default).</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <div className="d-flex mb-3 bg-secondary text-white" style={{height: "100px"}}>
                <div className="p-2 border">Flex item</div>
                <div className="p-2 border align-self-start">Flex item</div>
                <div className="p-2 border">Flex item</div>
            </div>
            <div className="d-flex mb-3 bg-secondary text-white" style={{height: "100px"}}>
                <div className="p-2 border">Flex item</div>
                <div className="p-2 border align-self-end">Flex item</div>
                <div className="p-2 border">Flex item</div>
              </div>
              <div className="d-flex  mb-3 bg-secondary text-white" style={{height: "100px"}}>
                <div className="p-2 border">Flex item</div>
                <div className="p-2 border align-self-center">Flex item</div>
                <div className="p-2 border">Flex item</div>
              </div>
              <div className="d-flex  mb-3 bg-secondary text-white" style={{height: "100px"}}>
                <div className="p-2 border">Flex item</div>
                <div className="p-2 border align-self-baseline">Flex item</div>
                <div className="p-2 border">Flex item</div>
              </div>
              <div className="d-flex  mb-3 bg-secondary text-white" style={{height: "100px"}}>
                <div className="p-2 border">Flex item</div>
                <div className="p-2 border align-self-stretch">Flex item</div>
                <div className="p-2 border">Flex item</div>
              </div>
          </Card.Body>
          <CodePreview>
          {`<div className="d-flex mb-3 bg-secondary text-white">
<div className="p-2 border">Flex item</div>
<div className="p-2 border align-self-start">Flex item</div>
<div className="p-2 border">Flex item</div>
</div>
<div className="d-flex mb-3 bg-secondary text-white">
<div className="p-2 border">Flex item</div>
<div className="p-2 border align-self-end">Flex item</div>
<div className="p-2 border">Flex item</div>
</div>
<div className="d-flex  mb-3 bg-secondary text-white">
<div className="p-2 border">Flex item</div>
<div className="p-2 border align-self-center">Flex item</div>
<div className="p-2 border">Flex item</div>
</div>
<div className="d-flex  mb-3 bg-secondary text-white">
<div className="p-2 border">Flex item</div>
<div className="p-2 border align-self-baseline">Flex item</div>
<div className="p-2 border">Flex item</div>
</div>
<div className="d-flex  mb-3 bg-secondary text-white">
<div className="p-2 border">Flex item</div>
<div className="p-2 border align-self-stretch">Flex item</div>
<div className="p-2 border">Flex item</div>
</div>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Fill</Block.Title>
            <Block.Text>Use the <code>.flex-fill</code> class on a series of sibling elements to force them into widths equal to their content (or equal widths if their content does not surpass their border-boxes) while taking up all available horizontal space.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <div className="d-flex bg-secondary text-white">
                <div className="p-2 flex-fill border">Flex item with a lot of content</div>
                <div className="p-2 flex-fill border">Flex item</div>
                <div className="p-2 flex-fill border">Flex item</div>
            </div>
          </Card.Body>
          <CodePreview>
          {`<div className="d-flex bg-secondary text-white">
    <div className="p-2 flex-fill border">Flex item with a lot of content</div>
    <div className="p-2 flex-fill border">Flex item</div>
    <div className="p-2 flex-fill border">Flex item</div>
</div>
`}
          </CodePreview>
        </Card>
      </Block>
    </Layout>
  )
}

export default FlexPage