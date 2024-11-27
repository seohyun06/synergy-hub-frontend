import {Card, Nav, Tab, Row, Col, Tabs  } from 'react-bootstrap';

import Layout from '../../layout/default';
import Block from '../../components/Block/Block';
import CodePreview from '../../components/CodePreview/CodePreview';

function TabsPage() {
  return (
    <Layout title="Tabs" content="container">
      <Block.Head page>
        <Block.HeadContent>
            <Block.Title>Tabs</Block.Title>
            <Block.Text>Documentation and examples for how to use Bootstrap’s included navigation components.</Block.Text>
        </Block.HeadContent>
      </Block.Head>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Text> <strong className="text-black">Note:</strong> When you copy the code example and if you paste your copied code to any other component. these will not work because you just copied the component's name from code example. to use you have to <code>import</code> these component.</Block.Text>
            <Block.Text>How to import component and use see the <a href="#docs">docs</a></Block.Text>
            <Block.Title tag="h3">Custom Tabs</Block.Title>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Tab.Container id="custom-tabs-example" defaultActiveKey="custom-home">
                <Nav variant="tabs" className="nav-tabs-s1 mb-3">
                    <Nav.Item>
                        <Nav.Link eventKey="custom-home">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="custom-profile">Profile</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="custom-contact">Contact</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content>
                    <Tab.Pane eventKey="custom-home">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur cupiditate dolorem ipsa sequi rerum suscipit, tenetur exercitationem debitis! Incidunt obcaecati dolorem, mollitia est quaerat dignissimos amet placeat soluta eaque quas.
                    </Tab.Pane>
                    <Tab.Pane eventKey="custom-profile">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur cupiditate dolorem ipsa sequi rerum suscipit, tenetur exercitationem debitis! Incidunt obcaecati dolorem, mollitia est quaerat dignissimos amet placeat soluta eaque quas.
                    </Tab.Pane>
                    <Tab.Pane eventKey="custom-contact">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur cupiditate dolorem ipsa sequi rerum suscipit, tenetur exercitationem debitis! Incidunt obcaecati dolorem, mollitia est quaerat dignissimos amet placeat soluta eaque quas.
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
          </Card.Body>
          <CodePreview>
          {`<Tab.Container id="custom-tabs-example" defaultActiveKey="custom-home">
    <Nav variant="tabs" className="nav-tabs-s1 mb-3">
        <Nav.Item>
            <Nav.Link eventKey="custom-home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="custom-profile">Profile</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="custom-contact">Contact</Nav.Link>
        </Nav.Item>
    </Nav>
    <Tab.Content>
        <Tab.Pane eventKey="custom-home">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur cupiditate dolorem ipsa sequi rerum suscipit, tenetur exercitationem debitis! Incidunt obcaecati dolorem, mollitia est quaerat dignissimos amet placeat soluta eaque quas.
        </Tab.Pane>
        <Tab.Pane eventKey="custom-profile">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur cupiditate dolorem ipsa sequi rerum suscipit, tenetur exercitationem debitis! Incidunt obcaecati dolorem, mollitia est quaerat dignissimos amet placeat soluta eaque quas.
        </Tab.Pane>
        <Tab.Pane eventKey="custom-contact">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur cupiditate dolorem ipsa sequi rerum suscipit, tenetur exercitationem debitis! Incidunt obcaecati dolorem, mollitia est quaerat dignissimos amet placeat soluta eaque quas.
        </Tab.Pane>
    </Tab.Content>
</Tab.Container>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Default Tabs</Block.Title>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Tab.Container id="default-tabs-example" defaultActiveKey="default-home">
                <Nav variant="tabs" className="mb-3">
                    <Nav.Item>
                        <Nav.Link eventKey="default-home">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="default-profile">Profile</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="default-contact">Contact</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content>
                    <Tab.Pane eventKey="default-home">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur cupiditate dolorem ipsa sequi rerum suscipit, tenetur exercitationem debitis! Incidunt obcaecati dolorem, mollitia est quaerat dignissimos amet placeat soluta eaque quas.
                    </Tab.Pane>
                    <Tab.Pane eventKey="default-profile">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur cupiditate dolorem ipsa sequi rerum suscipit, tenetur exercitationem debitis! Incidunt obcaecati dolorem, mollitia est quaerat dignissimos amet placeat soluta eaque quas.
                    </Tab.Pane>
                    <Tab.Pane eventKey="default-contact">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur cupiditate dolorem ipsa sequi rerum suscipit, tenetur exercitationem debitis! Incidunt obcaecati dolorem, mollitia est quaerat dignissimos amet placeat soluta eaque quas.
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
          </Card.Body>
          <CodePreview>
          {`<Tab.Container id="default-tabs-example" defaultActiveKey="default-home">
    <Nav variant="tabs" className="mb-3">
        <Nav.Item>
            <Nav.Link eventKey="default-home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="default-profile">Profile</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="default-contact">Contact</Nav.Link>
        </Nav.Item>
    </Nav>
    <Tab.Content>
        <Tab.Pane eventKey="default-home">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur cupiditate dolorem ipsa sequi rerum suscipit, tenetur exercitationem debitis! Incidunt obcaecati dolorem, mollitia est quaerat dignissimos amet placeat soluta eaque quas.
        </Tab.Pane>
        <Tab.Pane eventKey="default-profile">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur cupiditate dolorem ipsa sequi rerum suscipit, tenetur exercitationem debitis! Incidunt obcaecati dolorem, mollitia est quaerat dignissimos amet placeat soluta eaque quas.
        </Tab.Pane>
        <Tab.Pane eventKey="default-contact">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur cupiditate dolorem ipsa sequi rerum suscipit, tenetur exercitationem debitis! Incidunt obcaecati dolorem, mollitia est quaerat dignissimos amet placeat soluta eaque quas.
        </Tab.Pane>
    </Tab.Content>
</Tab.Container>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Tabs Pills</Block.Title>
            <Block.Text>Use <code>pills</code> prop to <code>Nav</code> to works with pills</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Tab.Container id="pills-tabs-example" defaultActiveKey="pills-home">
                <Nav variant="pills" className="mb-3">
                    <Nav.Item>
                        <Nav.Link eventKey="pills-home">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="pills-profile">Profile</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="pills-contact">Contact</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content>
                    <Tab.Pane eventKey="pills-home">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur cupiditate dolorem ipsa sequi rerum suscipit, tenetur exercitationem debitis! Incidunt obcaecati dolorem, mollitia est quaerat dignissimos amet placeat soluta eaque quas.
                    </Tab.Pane>
                    <Tab.Pane eventKey="pills-profile">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur cupiditate dolorem ipsa sequi rerum suscipit, tenetur exercitationem debitis! Incidunt obcaecati dolorem, mollitia est quaerat dignissimos amet placeat soluta eaque quas.
                    </Tab.Pane>
                    <Tab.Pane eventKey="pills-contact">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur cupiditate dolorem ipsa sequi rerum suscipit, tenetur exercitationem debitis! Incidunt obcaecati dolorem, mollitia est quaerat dignissimos amet placeat soluta eaque quas.
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
          </Card.Body>
          <CodePreview>
          {`<Tab.Container id="pills-tabs-example" defaultActiveKey="pills-home">
    <Nav variant="pills" className="mb-3">
        <Nav.Item>
            <Nav.Link eventKey="pills-home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="pills-profile">Profile</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="pills-contact">Contact</Nav.Link>
        </Nav.Item>
    </Nav>
    <Tab.Content>
        <Tab.Pane eventKey="pills-home">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur cupiditate dolorem ipsa sequi rerum suscipit, tenetur exercitationem debitis! Incidunt obcaecati dolorem, mollitia est quaerat dignissimos amet placeat soluta eaque quas.
        </Tab.Pane>
        <Tab.Pane eventKey="pills-profile">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur cupiditate dolorem ipsa sequi rerum suscipit, tenetur exercitationem debitis! Incidunt obcaecati dolorem, mollitia est quaerat dignissimos amet placeat soluta eaque quas.
        </Tab.Pane>
        <Tab.Pane eventKey="pills-contact">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur cupiditate dolorem ipsa sequi rerum suscipit, tenetur exercitationem debitis! Incidunt obcaecati dolorem, mollitia est quaerat dignissimos amet placeat soluta eaque quas.
        </Tab.Pane>
    </Tab.Content>
</Tab.Container>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Vertical pills</Block.Title>
            <Block.Text>Create stacked navs by changing the flex item direction with the <code>.flex-column</code> class to <code>Nav</code>. You can even use the responsive versions to stack in some viewports but not others (e.g. <code>.flex-sm-column</code>).</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Tab.Container id="vertical-tabs-example" defaultActiveKey="vertical-home">
                <Row>
                    <Col lg="3" xl="2">
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="vertical-home">Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="vertical-profile">Profile</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="vertical-contact">Contact</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="vertical-setting">Setting</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col lg="9" xl="10">
                        <Tab.Content>
                            <Tab.Pane eventKey="vertical-home">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur cupiditate dolorem ipsa sequi rerum suscipit, tenetur exercitationem debitis! Incidunt obcaecati dolorem, mollitia est quaerat dignissimos amet placeat soluta eaque quas.
                            </Tab.Pane>
                            <Tab.Pane eventKey="vertical-profile">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur cupiditate dolorem ipsa sequi rerum suscipit, tenetur exercitationem debitis! Incidunt obcaecati dolorem, mollitia est quaerat dignissimos amet placeat soluta eaque quas.
                            </Tab.Pane>
                            <Tab.Pane eventKey="vertical-contact">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur cupiditate dolorem ipsa sequi rerum suscipit, tenetur exercitationem debitis! Incidunt obcaecati dolorem, mollitia est quaerat dignissimos amet placeat soluta eaque quas.
                            </Tab.Pane>
                            <Tab.Pane eventKey="vertical-setting">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur cupiditate dolorem ipsa sequi rerum suscipit, tenetur exercitationem debitis! Incidunt obcaecati dolorem, mollitia est quaerat dignissimos amet placeat soluta eaque quas.
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
          </Card.Body>
          <CodePreview>
          {`<Tab.Container id="vertical-tabs-example" defaultActiveKey="vertical-home">
    <Row>
        <Col lg="3" xl="2">
            <Nav variant="pills" className="flex-column">
                <Nav.Item>
                    <Nav.Link eventKey="vertical-home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="vertical-profile">Profile</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="vertical-contact">Contact</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="vertical-setting">Setting</Nav.Link>
                </Nav.Item>
            </Nav>
        </Col>
        <Col lg="9" xl="10">
            <Tab.Content>
                <Tab.Pane eventKey="vertical-home">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur cupiditate dolorem ipsa sequi rerum suscipit, tenetur exercitationem debitis! Incidunt obcaecati dolorem, mollitia est quaerat dignissimos amet placeat soluta eaque quas.
                </Tab.Pane>
                <Tab.Pane eventKey="vertical-profile">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur cupiditate dolorem ipsa sequi rerum suscipit, tenetur exercitationem debitis! Incidunt obcaecati dolorem, mollitia est quaerat dignissimos amet placeat soluta eaque quas.
                </Tab.Pane>
                <Tab.Pane eventKey="vertical-contact">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur cupiditate dolorem ipsa sequi rerum suscipit, tenetur exercitationem debitis! Incidunt obcaecati dolorem, mollitia est quaerat dignissimos amet placeat soluta eaque quas.
                </Tab.Pane>
                <Tab.Pane eventKey="vertical-setting">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur cupiditate dolorem ipsa sequi rerum suscipit, tenetur exercitationem debitis! Incidunt obcaecati dolorem, mollitia est quaerat dignissimos amet placeat soluta eaque quas.
                </Tab.Pane>
            </Tab.Content>
        </Col>
    </Row>
</Tab.Container>
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">With Tabbed components</Block.Title>
            <Block.Text>Create dynamic tabbed interfaces, as described in the WAI ARIA Authoring Practices. <code>Tabs</code> is a higher-level component for quickly creating a <code>Nav</code> matched with a set of <code>TabPane</code>s.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Tabs defaultActiveKey="tabbed-home" id="tabbed-tab-example" className="mb-3">
                <Tab eventKey="tabbed-home" title="Home">
                    That thou art blam'd shall not be thy defect, For slander's mark was ever yet the fair; The ornament of beauty is suspect, A crow that flies in heaven's sweetest air. So thou be good, slander doth but approve Thy worth the greater being woo'd of time; For canker vice the sweetest buds doth love, And thou present'st a pure unstained prime. 
                </Tab>
                <Tab eventKey="tabbed-profile" title="Profile">
                    That thou art blam'd shall not be thy defect, For slander's mark was ever yet the fair; The ornament of beauty is suspect, A crow that flies in heaven's sweetest air. So thou be good, slander doth but approve Thy worth the greater being woo'd of time; For canker vice the sweetest buds doth love, And thou present'st a pure unstained prime. 
                </Tab>
                <Tab eventKey="tabbed-contact" title="Contact">
                    That thou art blam'd shall not be thy defect, For slander's mark was ever yet the fair; The ornament of beauty is suspect, A crow that flies in heaven's sweetest air. So thou be good, slander doth but approve Thy worth the greater being woo'd of time; For canker vice the sweetest buds doth love, And thou present'st a pure unstained prime. 
                </Tab>
            </Tabs>
          </Card.Body>
          <CodePreview>
          {`import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function TabbedExample() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        That thou art blam'd shall not be thy defect, For slander's mark was ever yet the fair; The ornament of beauty is suspect, A crow that flies in heaven's sweetest air. So thou be good, slander doth but approve Thy worth the greater being woo'd of time; For canker vice the sweetest buds doth love, And thou present'st a pure unstained prime.
      </Tab>
      <Tab eventKey="profile" title="Profile">
        That thou art blam'd shall not be thy defect, For slander's mark was ever yet the fair; The ornament of beauty is suspect, A crow that flies in heaven's sweetest air. So thou be good, slander doth but approve Thy worth the greater being woo'd of time; For canker vice the sweetest buds doth love, And thou present'st a pure unstained prime.
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        That thou art blam'd shall not be thy defect, For slander's mark was ever yet the fair; The ornament of beauty is suspect, A crow that flies in heaven's sweetest air. So thou be good, slander doth but approve Thy worth the greater being woo'd of time; For canker vice the sweetest buds doth love, And thou present'st a pure unstained prime.
      </Tab>
    </Tabs>
  );
}

export default TabbedExample;
`}
          </CodePreview>
        </Card>
      </Block>



    </Layout>
  )
}

export default TabsPage