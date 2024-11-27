import {Card, Table } from 'react-bootstrap';

import Layout from '../../layout/default';
import Block from '../../components/Block/Block';
import CodePreview from '../../components/CodePreview/CodePreview';

function Typography() {
  return (
    <Layout title="Typography" content="container">
      <Block.Head page className="wide-md">
        <Block.HeadContent>
            <Block.Title>Typography</Block.Title>
            <Block.Text>Documentation and examples for Bootstrap typography, including global settings, headings, body text, lists, and more.</Block.Text>
        </Block.HeadContent>
      </Block.Head>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Headings</Block.Title>
            <Block.Text>All HTML headings, <code>h1</code> through <code>h6</code>, are available.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Table responsive>
              <thead>
                <tr>
                  <th>Heading</th>
                  <th>Example</th>
                </tr>
              </thead>
              <tbody>
                  <tr>
                      <td><code>&lt;h1&gt;&lt;/h1&gt;</code></td>
                      <td><span className="h1">h1. Bootstrap heading</span></td>
                  </tr>
                  <tr>
                      <td><code>&lt;h2&gt;&lt;/h2&gt;</code></td>
                      <td><span className="h2">h2. Bootstrap heading</span></td>
                  </tr>
                  <tr>
                      <td><code>&lt;h3&gt;&lt;/h3&gt;</code></td>
                      <td><span className="h3">h3. Bootstrap heading</span></td>
                  </tr>
                  <tr>
                      <td><code>&lt;h4&gt;&lt;/h4&gt;</code></td>
                      <td><span className="h4">h4. Bootstrap heading</span></td>
                  </tr>
                  <tr>
                      <td><code>&lt;h5&gt;&lt;/h5&gt;</code></td>
                      <td><span className="h5">h5. Bootstrap heading</span></td>
                  </tr>
                  <tr>
                      <td><code>&lt;h6&gt;&lt;/h6&gt;</code></td>
                      <td><span className="h6">h6. Bootstrap heading</span></td>
                  </tr>
              </tbody>
            </Table>
          </Card.Body>
          <CodePreview>
          {`<h1>h1. Bootstrap heading</h1>
<h2>h2. Bootstrap heading</h2>
<h3>h3. Bootstrap heading</h3>
<h4>h4. Bootstrap heading</h4>
<h5>h5. Bootstrap heading</h5>
<h6>h6. Bootstrap heading</h6>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Text><code>.h1</code> through <code>.h6</code> classes are also available, for when you want to match the font styling of a heading but cannot use the associated HTML element.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <p className="h1">h1. Bootstrap heading</p>
            <p className="h2">h2. Bootstrap heading</p>
            <p className="h3">h3. Bootstrap heading</p>
            <p className="h4">h4. Bootstrap heading</p>
            <p className="h5">h5. Bootstrap heading</p>
            <p className="h6">h6. Bootstrap heading</p>
          </Card.Body>
          <CodePreview>
          {`<p className="h1">h1. Bootstrap heading</p>
<p className="h2">h2. Bootstrap heading</p>
<p className="h3">h3. Bootstrap heading</p>
<p className="h4">h4. Bootstrap heading</p>
<p className="h5">h5. Bootstrap heading</p>
<p className="h6">h6. Bootstrap heading</p>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Display headings</Block.Title>
            <Block.Text>Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a display heading—a larger, slightly more opinionated heading style.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <h1 className="display-1">Display 1</h1>
            <h1 className="display-2">Display 2</h1>
            <h1 className="display-3">Display 3</h1>
            <h1 className="display-4">Display 4</h1>
            <h1 className="display-5">Display 5</h1>
            <h1 className="display-6">Display 6</h1>
          </Card.Body>
          <CodePreview>
          {`<h1 className="display-1">Display 1</h1>
<h1 className="display-2">Display 2</h1>
<h1 className="display-3">Display 3</h1>
<h1 className="display-4">Display 4</h1>
<h1 className="display-5">Display 5</h1>
<h1 className="display-6">Display 6</h1>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Lead</Block.Title>
            <Block.Text>Make a paragraph stand out by adding <code>.lead</code>.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <p className="lead">
                This is a lead paragraph. It stands out from regular paragraphs.
            </p>
          </Card.Body>
          <CodePreview>
          {`<p className="lead">
                This is a lead paragraph. It stands out from regular paragraphs.
            </p>
`}
          </CodePreview>
        </Card>
      </Block>
      
      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Inline text elements</Block.Title>
            <Block.Text>Styling for common inline HTML5 elements.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <p>You can use the mark tag to <mark>highlight</mark> text.</p>
            <p><del>This line of text is meant to be treated as deleted text.</del></p>
            <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
            <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
            <p><u>This line of text will render as underlined.</u></p>
            <p><small>This line of text is meant to be treated as fine print.</small></p>
            <p><strong>This line rendered as bold text.</strong></p>
            <p><em>This line rendered as italicized text.</em></p>
          </Card.Body>
          <CodePreview>
          {`<p>You can use the mark tag to <mark>highlight</mark> text.</p>
<p><del>This line of text is meant to be treated as deleted text.</del></p>
<p><s>This line of text is meant to be treated as no longer accurate.</s></p>
<p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
<p><u>This line of text will render as underlined.</u></p>
<p><small>This line of text is meant to be treated as fine print.</small></p>
<p><strong>This line rendered as bold text.</strong></p>
<p><em>This line rendered as italicized text.</em></p>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Blockquotes</Block.Title>
            <Block.Text>For quoting blocks of content from another source within your document. Wrap <code>blockquote className="blockquote"</code> around any HTML as the quote.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
              <figure>
                <blockquote className="blockquote">
                  <p>A well-known quote, contained in a blockquote element.</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  Someone famous in <cite title="Source Title">Source Title</cite>
                </figcaption>
              </figure>
          </Card.Body>
          <CodePreview>
          {`<figure>
  <blockquote className="blockquote">
    <p>A well-known quote, contained in a blockquote element.</p>
  </blockquote>
  <figcaption className="blockquote-footer">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </figcaption>
</figure>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Alignment</Block.Title>
            <Block.Text>Use text utilities as needed to change the alignment of your blockquote</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <div className="mb-5">
                <p className="text-center">Use <code>.text-center</code> class for center alignment.</p>
                <figure className="text-center">
                    <blockquote className="blockquote">
                    <p>A well-known quote, contained in a blockquote element.</p>
                    </blockquote>
                    <figcaption className="blockquote-footer">
                      Someone famous in <cite title="Source Title">Source Title</cite>
                    </figcaption>
                </figure>
            </div>
            <div>
                <p className="text-end">Use <code>.text-end</code> class for right alignment.</p>
                <figure className="text-end">
                    <blockquote className="blockquote">
                      <p>A well-known quote, contained in a blockquote element.</p>
                    </blockquote>
                    <figcaption className="blockquote-footer">
                      Someone famous in <cite title="Source Title">Source Title</cite>
                    </figcaption>
                </figure>
            </div>
          </Card.Body>
          <CodePreview>
          {`<figure className="text-center">
    <blockquote className="blockquote">
    <p>A well-known quote, contained in a blockquote element.</p>
    </blockquote>
    <figcaption className="blockquote-footer">
      Someone famous in <cite title="Source Title">Source Title</cite>
    </figcaption>
</figure>
`}
          </CodePreview>
        </Card>
      </Block>

    </Layout>
  )
}

export default Typography