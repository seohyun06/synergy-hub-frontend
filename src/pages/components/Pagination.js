import {Card, Pagination } from 'react-bootstrap';

import Layout from '../../layout/default';
import Block from '../../components/Block/Block';
import CodePreview from '../../components/CodePreview/CodePreview';
import Icon from '../../components/Icon/Icon';

function PaginationPage() {
  return (
    <Layout title="Pagination" content="container">
      <Block.Head page>
        <Block.HeadContent>
            <Block.Title>Pagination</Block.Title>
            <Block.Text>Documentation and examples for showing pagination to indicate a series of related content exists across multiple pages.</Block.Text>
        </Block.HeadContent>
      </Block.Head>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Text><strong className="text-black">Note:</strong> When you copy the code example and if you paste your copied code to any other component. these will not work because you just copied the component's name from code example. to use you have to <code>import</code> these component.</Block.Text>
            <Block.Text>How to import component and use see the <a href="#docs">docs</a></Block.Text>
            <Block.Title tag="h3">Custom Pagination</Block.Title>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <div className="gap g-3">
              <div className="gap-col">
                <Pagination className="pagination-s1">
                  <Pagination.Item disabled><Icon name="chevron-left"></Icon></Pagination.Item>
                  <Pagination.Item active>{1}</Pagination.Item>
                  <Pagination.Item>{2}</Pagination.Item>
                  <Pagination.Item>{3}</Pagination.Item>
                  <Pagination.Item>{4}</Pagination.Item>
                  <Pagination.Item><Icon name="chevron-right"></Icon></Pagination.Item>
                </Pagination>
              </div>
            </div>
            <div className="mt-4 small">Use <code>.pagination-s1</code> className to <code>Pagination</code> component for custom pagination styling.</div>
          </Card.Body>
          <CodePreview>
          {`<Pagination className="pagination-s1">
  <Pagination.Item disabled><Icon name="chevron-left"></Icon></Pagination.Item>
  <Pagination.Item active>{1}</Pagination.Item>
  <Pagination.Item>{2}</Pagination.Item>
  <Pagination.Item>{3}</Pagination.Item>
  <Pagination.Item>{4}</Pagination.Item>
  <Pagination.Item><Icon name="chevron-right"></Icon></Pagination.Item>
</Pagination>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Default</Block.Title>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <div className="gap g-3">
              <div className="gap-col">
                <Pagination>
                  <Pagination.Item>Previous</Pagination.Item>
                  <Pagination.Item active>{1}</Pagination.Item>
                  <Pagination.Item>{2}</Pagination.Item>
                  <Pagination.Item>{3}</Pagination.Item>
                  <Pagination.Item>Next</Pagination.Item>
                </Pagination>
              </div>
            </div>
          </Card.Body>
          <CodePreview>
          {`<Pagination>
  <Pagination.Item>Previous</Pagination.Item>
  <Pagination.Item active>{1}</Pagination.Item>
  <Pagination.Item>{2}</Pagination.Item>
  <Pagination.Item>{3}</Pagination.Item>
  <Pagination.Item>Next</Pagination.Item>
</Pagination>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Working with icons</Block.Title>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <div className="gap g-3">
              <div className="gap-col">
                <Pagination>
                  <Pagination.Prev />
                  <Pagination.Item active>{1}</Pagination.Item>
                  <Pagination.Item>{2}</Pagination.Item>
                  <Pagination.Item>{3}</Pagination.Item>
                  <Pagination.Item>{4}</Pagination.Item>
                  <Pagination.Next />
                </Pagination>
              </div>
            </div>
          </Card.Body>
          <CodePreview>
          {`<Pagination>
  <Pagination.Prev />
  <Pagination.Item active>{1}</Pagination.Item>
  <Pagination.Item>{2}</Pagination.Item>
  <Pagination.Item>{3}</Pagination.Item>
  <Pagination.Item>{4}</Pagination.Item>
  <Pagination.Next />
</Pagination>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Disabled and active states</Block.Title>
            <Block.Text>Pagination links are customizable for different circumstances. Use <code>disabled</code> prop for links that appear un-clickable and <code>active</code> prop to indicate the current page.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <div className="gap g-3">
              <div className="gap-col">
                <Pagination>
                  <Pagination.Item disabled>Previous</Pagination.Item>
                  <Pagination.Item active>{1}</Pagination.Item>
                  <Pagination.Item>{2}</Pagination.Item>
                  <Pagination.Item>{3}</Pagination.Item>
                  <Pagination.Item>Next</Pagination.Item>
                </Pagination>
              </div>
            </div>
          </Card.Body>
          <CodePreview>
          {`<Pagination>
  <Pagination.Item disabled>Previous</Pagination.Item>
  <Pagination.Item active>{1}</Pagination.Item>
  <Pagination.Item>{2}</Pagination.Item>
  <Pagination.Item>{3}</Pagination.Item>
  <Pagination.Item>Next</Pagination.Item>
</Pagination>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Sizing</Block.Title>
            <Block.Text>Fancy larger or smaller pagination? Add <code>size="sm"</code>, <code>size="lg"</code> for additional sizes.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <div className="gap g-3">
              <div className="gap-col">
                <Pagination size="lg">
                  <Pagination.Item active>{1}</Pagination.Item>
                  <Pagination.Item>{2}</Pagination.Item>
                  <Pagination.Item>{3}</Pagination.Item>
                </Pagination>
              </div>
              <div className="gap-col">
                <Pagination>
                  <Pagination.Item active>{1}</Pagination.Item>
                  <Pagination.Item>{2}</Pagination.Item>
                  <Pagination.Item>{3}</Pagination.Item>
                </Pagination>
              </div>
              <div className="gap-col">
                <Pagination size="sm">
                  <Pagination.Item active>{1}</Pagination.Item>
                  <Pagination.Item>{2}</Pagination.Item>
                  <Pagination.Item>{3}</Pagination.Item>
                </Pagination>
              </div>
            </div>
          </Card.Body>
          <CodePreview>
          {`<Pagination size="lg">
  <Pagination.Item active>{1}</Pagination.Item>
  <Pagination.Item>{2}</Pagination.Item>
  <Pagination.Item>{3}</Pagination.Item>
</Pagination>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Alignment</Block.Title>
            <Block.Text>Change the alignment of pagination components with flexbox utilities. For example, with <code>.justify-content-center</code>, <code>.justify-content-end</code></Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <div className="gap g-3">
              <div className="gap-col">
                <p className="text-center"><code>.justify-content-center</code></p>
                <Pagination className="justify-content-center">
                  <Pagination.Item>Previous</Pagination.Item>
                  <Pagination.Item active>{1}</Pagination.Item>
                  <Pagination.Item>{2}</Pagination.Item>
                  <Pagination.Item>{3}</Pagination.Item>
                  <Pagination.Item>Next</Pagination.Item>
                </Pagination>
              </div>
              <div className="gap-col">
                <p className="text-end"><code>.justify-content-end</code></p>
                <Pagination className="justify-content-end">
                  <Pagination.Item>Previous</Pagination.Item>
                  <Pagination.Item active>{1}</Pagination.Item>
                  <Pagination.Item>{2}</Pagination.Item>
                  <Pagination.Item>{3}</Pagination.Item>
                  <Pagination.Item>Next</Pagination.Item>
                </Pagination>
              </div>
            </div>
          </Card.Body>
          <CodePreview>
          {`<Pagination className="justify-content-center">
  <Pagination.Item>Previous</Pagination.Item>
  <Pagination.Item active>{1}</Pagination.Item>
  <Pagination.Item>{2}</Pagination.Item>
  <Pagination.Item>{3}</Pagination.Item>
  <Pagination.Item>Next</Pagination.Item>
</Pagination>
`}
          </CodePreview>
        </Card>
      </Block>

    </Layout>
  )
}

export default PaginationPage