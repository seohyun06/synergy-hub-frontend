import {Card, Button } from 'react-bootstrap';

import Layout from '../../layout/default';
import Block from '../../components/Block/Block';
import CodePreview from '../../components/CodePreview/CodePreview';
import Icon from '../../components/Icon/Icon';

function ButtonPage() {
  return (
    <Layout title="Buttons" content="container">
      <Block.Head page>
        <Block.HeadContent>
            <Block.Title>Buttons</Block.Title>
            <Block.Text>Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.</Block.Text>
        </Block.HeadContent>
      </Block.Head>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Text><strong className="text-black">Note:</strong> When you copy the code example and if you paste your copied code to any other component. these will not work because you just copied the component's name from code example. to use you have to <code>import</code> these component.</Block.Text>
            <Block.Text>How to import component and use see the <a href="#docs">docs</a></Block.Text>
            <Block.Title tag="h3">Examples</Block.Title>
            <Block.Text>Use any of the available button style types to quickly create a styled button. Just modify the <code>variant</code> prop.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <ul className="d-flex gap g-3 flex-wrap">
                <li><Button variant="primary">Primary</Button></li>
                <li><Button variant="secondary">Secondary</Button></li>
                <li><Button variant="success">Success</Button></li>
                <li><Button variant="warning">Warning</Button></li>
                <li><Button variant="danger">Danger</Button></li>
                <li><Button variant="info">Info</Button></li>
                <li><Button variant="light">Light</Button></li>
                <li><Button variant="dark">Dark</Button></li>
                <li><Button variant="link">Link</Button></li>
            </ul>
          </Card.Body>
          <CodePreview>
          {`<Button variant="primary">Primary</Button>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Outline buttons</Block.Title>
            <Block.Text>For a lighter touch, Buttons also come in <code>outline-*</code> variants with no background color.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <ul className="d-flex gap g-3 flex-wrap">
                <li><Button variant="outline-primary">Primary</Button></li>
                <li><Button variant="outline-secondary">Secondary</Button></li>
                <li><Button variant="outline-success">Success</Button></li>
                <li><Button variant="outline-warning">Warning</Button></li>
                <li><Button variant="outline-danger">Danger</Button></li>
                <li><Button variant="outline-info">Info</Button></li>
                <li><Button variant="outline-light">Light</Button></li>
                <li><Button variant="outline-dark">Dark</Button></li>
            </ul>
          </Card.Body>
          <CodePreview>
          {`<Button variant="outline-primary">Primary</Button>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Button tags</Block.Title>
            <Block.Text>Normally <code>&lt;button&gt;</code> components will render a HTML <code>&lt;button&gt;</code> element. However you can render whatever you'd like, adding a <code>href</code> prop will automatically render an <code>&lt;a/&gt;</code> element. You can use the <code>as</code> prop to render whatever your heart desires.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <ul className="d-flex gap g-3 flex-wrap">
                <li><Button href="#">Link</Button></li>
                <li><Button type="submit">Button</Button></li>
                <li><Button as="input" type="button" value="Input" /></li>
                <li><Button as="input" type="submit" value="Submit" /></li>
                <li><Button as="input" type="reset" value="Reset" /></li>
            </ul>
          </Card.Body>
          <CodePreview>
          {`<Button href="#">Link</Button>
<Button type="submit">Button</Button>
<Button as="input" type="button" value="Input" />
<Button as="input" type="submit" value="Submit" />
<Button as="input" type="reset" value="Reset" />
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Soft buttons</Block.Title>
            <Block.Text>In need of a button, but not the hefty background colors they bring? just use the <code>.btn-soft</code> class to for a soften background colors on any button.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <ul className="d-flex gap g-3 flex-wrap">
                <li><Button className="btn-soft" variant="primary">Primary</Button></li>
                <li><Button className="btn-soft" variant="secondary">Secondary</Button></li>
                <li><Button className="btn-soft" variant="success">Success</Button></li>
                <li><Button className="btn-soft" variant="danger">Danger</Button></li>
                <li><Button className="btn-soft" variant="warning">Warning</Button></li>
                <li><Button className="btn-soft" variant="info">Info</Button></li>
                <li><Button className="btn-soft" variant="light">Light</Button></li>
                <li><Button className="btn-soft" variant="dark">Dark</Button></li>
            </ul>
          </Card.Body>
          <CodePreview>
          {`<Button className="btn-soft" variant="primary">Primary</Button>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Soft Outline buttons</Block.Title>
            <Block.Text>In need of a button, but not the hefty background colors they bring? just use the <code>.btn-soft</code> class to for a soften background colors on any button with <code>variant="outline-*"</code>.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <ul className="d-flex gap g-3 flex-wrap">
                <li><Button className="btn-soft" variant="outline-primary">Primary</Button></li>
                <li><Button className="btn-soft" variant="outline-secondary">Secondary</Button></li>
                <li><Button className="btn-soft" variant="outline-success">Success</Button></li>
                <li><Button className="btn-soft" variant="outline-danger">Danger</Button></li>
                <li><Button className="btn-soft" variant="outline-warning">Warning</Button></li>
                <li><Button className="btn-soft" variant="outline-info">Info</Button></li>
                <li><Button className="btn-soft" variant="outline-light">Light</Button></li>
                <li><Button className="btn-soft" variant="outline-dark">Dark</Button></li>
            </ul>
          </Card.Body>
          <CodePreview>
          {`<Button className="btn-soft" variant="outline-primary">Primary</Button>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Buttons with Icons</Block.Title>
            <Block.Text>Try with flowing code examples to use icons in buttons</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <ul className="d-flex gap g-3 flex-wrap">
                <li>
                    <Button variant="primary">
                        <Icon name="arrow-left"></Icon>
                        <span>Left Icon</span>
                    </Button>
                </li>
                <li>
                    <Button variant="primary">
                        <span>Right Icon</span>
                        <Icon name="arrow-right"></Icon>
                    </Button>
                </li>
                <li>
                    <Button className="btn-icon" variant="primary">
                        <Icon name="msg"></Icon>
                    </Button>
                </li>
                <li>
                    <button className="btn btn-color-primary btn-hover-primary btn-icon">
                        <Icon name="msg"></Icon>
                    </button>
                </li>
                <li>
                    <button className="btn btn-color-dark btn-hover-primary btn-icon btn-soft">
                        <Icon name="msg"></Icon>
                    </button>
                </li>
            </ul>
          </Card.Body>
          <CodePreview>
          {`<Button variant="primary">
    <Icon name="arrow-left"></Icon>
    <span>Left Icon</span>
</Button>

<Button variant="primary">
    <span>Right Icon</span>
    <Icon name="arrow-right"></Icon>
</Button>

<Button className="btn-icon" variant="primary">
    <Icon name="msg"></Icon>
</Button>

<button className="btn btn-color-primary btn-hover-primary btn-icon">
    <Icon name="msg"></Icon>
</button>

<button className="btn btn-color-dark btn-hover-primary btn-icon btn-soft">
    <Icon name="msg"></Icon>
</button>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Sizes</Block.Title>
            <Block.Text>Fancy larger or smaller buttons? Add <code>size="lg"</code>, <code> size="sm"</code> for additional sizes.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <ul className="d-flex align-items-center gap g-3">
                <li>
                    <Button variant="primary" size="lg">Large button</Button>
                </li>
                <li>
                    <Button variant="primary">Regular button</Button>
                </li>
                <li>
                    <Button variant="primary" size="sm">Small button</Button>
                </li>
            </ul>
          </Card.Body>
          <CodePreview>
          {`<Button variant="primary" size="lg">Large button</Button>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Rounded Buttons</Block.Title>
            <Block.Text>Need to soften the buttons edges? Add <code>.rounded-pill</code> class to button for rounded buttons.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <ul className="d-flex align-items-center gap g-3">
                <li>
                    <Button className="rounded-pill" variant="primary" size="lg">Large button</Button>
                </li>
                <li>
                    <Button className="rounded-pill" variant="primary">Regular button</Button>
                </li>
                <li>
                    <Button className="rounded-pill" variant="primary" size="sm">Small button</Button>
                </li>
            </ul>
          </Card.Body>
          <CodePreview>
          {`<Button className="rounded-pill" variant="primary">Large button</Button>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Disabled state</Block.Title>
            <Block.Text>Make buttons look inactive by adding the <code>disabled</code> prop to.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <ul className="d-flex gap g-3 flex-wrap">
                <li><Button variant="primary" disabled>Primary button</Button></li>
                <li><Button variant="secondary" disabled>Button</Button></li>
                <li><Button variant="outline-primary" disabled>Primary button</Button></li>
                <li><Button variant="outline-secondary" disabled>Button</Button></li>
            </ul>
          </Card.Body>
          <CodePreview>
          {`<Button variant="primary" disabled>Primary button</Button>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Block level buttons</Block.Title>
            <Block.Text>Create responsive stacks of full-width, “block buttons” like those in Bootstrap 4 with <code>.btn-block</code> class.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Button className="btn-block" variant="primary">Block label button</Button>
          </Card.Body>
          <CodePreview>
          {`<Button className="btn-block" variant="primary">Block label button</Button>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Active state</Block.Title>
            <Block.Text>To set a button's active state simply set the component's <code>active</code> prop.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <ul className="d-flex gap g-3 flex-wrap">
                <li><Button variant="primary" active>Primary button</Button></li>
                <li><Button variant="secondary" active>Button</Button></li>
            </ul>
          </Card.Body>
          <CodePreview>
          {`<Button variant="primary" active>Primary button</Button>
`}
          </CodePreview>
        </Card>
      </Block>


    </Layout>
  )
}

export default ButtonPage