import { Card, Form, Row, Col} from 'react-bootstrap';

import Layout from '../../layout/default';
import Block from '../../components/Block/Block';
import CodePreview from '../../components/CodePreview/CodePreview';
import OverlineTitle from '../../components/Text/Text';

function CheckRadioPage() {
  return (
    <Layout title="Checks and radios" content="container">
      <Block.Head page className="wide-md">
        <Block.HeadContent>
            <Block.Title>Checks and radios</Block.Title>
            <Block.Text>Create consistent cross-browser and cross-device checkboxes and radios with our completely rewritten checks component.</Block.Text>
        </Block.HeadContent>
      </Block.Head>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Example</Block.Title>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Row className="gy-3">
                <Col className="col-12">
                    <OverlineTitle>Checkboxes</OverlineTitle>
                </Col>
                <Col sm="6" lg="3">
                    <Form.Check type="checkbox" id="flexCheckDefault" label="Default"/>
                </Col>
                <Col sm="6" lg="3">
                    <Form.Check type="checkbox" id="flexCheckChecked" defaultChecked label="Checked"/>
                </Col>
                <Col sm="6" lg="3">
                    <Form.Check type="checkbox" id="flexCheckDisabled" disabled label="Disabled"/>
                </Col>
                <Col sm="6" lg="3">
                  <Form.Check type="checkbox" id="flexCheckCheckedDisabled" checked disabled label="Disabled checked"/>
                </Col>

                <Col className="col-12">
                    <OverlineTitle>Radios</OverlineTitle>
                </Col>
                <Col sm="6" lg="3">
                    <Form.Check type="radio" name="flexRadioDefault" id="flexRadioDefault" label="Default"/>
                </Col>
                <Col sm="6" lg="3">
                    <Form.Check type="radio" name="flexRadioDefault" id="flexRadioChecked" defaultChecked label="Checked"/>
                </Col>
                <Col sm="6" lg="3">
                    <Form.Check type="radio" name="flexRadioDefaultDisable" id="flexRadioDisabled" disabled label="Disabled"/>
                </Col>
                <Col sm="6" lg="3">
                    <Form.Check type="radio" name="flexRadioDefaultDisable" id="flexRadioCheckedDisabled" defaultChecked disabled label="Disabled checked"/>
                </Col>

                <Col className="col-12">
                    <OverlineTitle>Switches</OverlineTitle>
                </Col>
                <Col sm="6" lg="3">
                    <Form.Check type="switch" id="flexSwitchDefault" label="Default"/>
                </Col>
                <Col sm="6" lg="3">
                    <Form.Check type="switch" id="flexSwitchChecked" label="Checked" defaultChecked/>
                </Col>
                <Col sm="6" lg="3">
                    <Form.Check type="switch" id="flexSwitchDisabled" label="Disabled" disabled/>
                </Col>
                <Col sm="6" lg="3">
                    <Form.Check type="switch" id="flexSwitchCheckedDisabled" label="Disabled checked" defaultChecked disabled/>
                </Col>
                <div className="col-12 col-lg-10">
                    <div className="form-note">
                        Use <code>defaultChecked</code> attribute to <code>Form.Check</code> for checked mode,
                        same as <code>disabled</code> for disabled mode. and use <code>type="switch"</code> to <code>Form.Check</code> to render a toggle switch.
                    </div>
                </div>
            </Row>
          </Card.Body>
          <CodePreview title="checkbox">
          {`import Form from 'react-bootstrap/Form';

function CheckExample() {
  return (
    <Form.Check type="checkbox" id="flexCheckDefault" label="Default"/>
  );
}

export default CheckExample;
`}
          </CodePreview>
          <CodePreview title="radio">
          {`import Form from 'react-bootstrap/Form';

function CheckExample() {
  return (
    <Form.Check type="radio" id="flexRadioDefault" label="Default"/>
  );
}

export default CheckExample;
`}
          </CodePreview>
          <CodePreview title="switch">
          {`import Form from 'react-bootstrap/Form';

function CheckExample() {
  return (
    <Form.Check type="switch" id="flexSwitchDefault" label="Default"/>
  );
}

export default CheckExample;
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Sizing</Block.Title>
            <Block.Text>Set heights using classes like <code>.form-check-xl</code>, <code>.form-check-lg</code> and <code> .form-check-sm</code> on <code>Form.Check</code> component.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Row className="d-flex flex-wrap align-items-center gap g-3">
                <Col className="col-12">
                    <OverlineTitle>Checkboxes</OverlineTitle>
                </Col>
                <Col sm="6" lg="3">
                    <Form.Check className="form-check-sm" type="checkbox" id="flexCheckSizeSm" label="Checkbox Label"/>
                </Col>
                <Col sm="6" lg="3">
                    <Form.Check type="checkbox" id="flexCheckSize" label="Checkbox Label"/>
                </Col>
                <Col sm="6" lg="3">
                    <Form.Check className="form-check-lg" type="checkbox" id="flexCheckSizeLg" label="Checkbox Label"/>
                </Col>
                <Col sm="6" lg="3">
                  <Form.Check className="form-check-xl" type="checkbox" id="flexCheckSizeXl" label="Checkbox Label"/>
                </Col>

                <Col className="col-12">
                    <OverlineTitle>Radios</OverlineTitle>
                </Col>
                <Col sm="6" lg="3">
                    <Form.Check className="form-check-sm" type="radio" name="flexRadioSize" id="flexRadioSizeSm" label="Radio Label"/>
                </Col>
                <Col sm="6" lg="3">
                    <Form.Check type="radio" name="flexRadioSize" id="flexRadioSize" label="Radio Label"/>
                </Col>
                <Col sm="6" lg="3">
                    <Form.Check className="form-check-lg" type="radio" name="flexRadioSize" id="flexRadioSizeLg" label="Radio Label"/>
                </Col>
                <Col sm="6" lg="3">
                    <Form.Check className="form-check-xl" type="radio" name="flexRadioSize" id="flexRadioSizeXl" label="Radio Label checked"/>
                </Col>

                <Col className="col-12">
                    <OverlineTitle>Switches</OverlineTitle>
                </Col>
                <Col sm="6" lg="3">
                    <Form.Check className="form-check-sm" type="switch" id="flexSwitchSizeSm" label="Switch Label"/>
                </Col>
                <Col sm="6" lg="3">
                    <Form.Check type="switch" id="flexSwitchSize" label="Switch Label"/>
                </Col>
                <Col sm="6" lg="3">
                    <Form.Check className="form-check-lg" type="switch" id="flexSwitchSizeLg" label="Switch Label"/>
                </Col>
                <Col sm="6" lg="3">
                    <Form.Check className="form-check-xl" type="switch" id="flexSwitchSizeXl" label="Switch Label"/>
                </Col>
            </Row>
          </Card.Body>
          <CodePreview>
          {`import Form from 'react-bootstrap/Form';

function CheckExample() {
  return (
    <Form.Check className="form-check-sm" type="checkbox" id="flexCheckSizeSm" label="Checkbox Label"/>
  );
}

export default CheckExample;
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Inline</Block.Title>
            <Block.Text>Group checkboxes or radios on the same horizontal row by adding the <code>inline</code> prop.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <ul className="gap g-3">
                <li>
                    <Form.Check inline label="1" type="checkbox" id="inlineCheckbox1"></Form.Check>
                    <Form.Check inline label="2" type="checkbox" id="inlineCheckbox2"></Form.Check>
                    <Form.Check inline disabled label="3 (disabled)" type="checkbox" id="inlineCheckbox3"></Form.Check>
                </li>
                <li>
                    <Form.Check inline label="1" name="inlineRadioOptions" type="radio" id="inlineRadio1"></Form.Check>
                    <Form.Check inline label="2" name="inlineRadioOptions" type="radio" id="inlineRadio2"></Form.Check>
                    <Form.Check inline disabled label="3 (disabled)" name="inlineRadioOptions" type="radio" id="inlineRadio3"></Form.Check>
                </li>
            </ul>
          </Card.Body>
          <CodePreview>
          {`import Form from 'react-bootstrap/Form';

function CheckExample() {
  return (
    <Form.Check inline label="1" type="checkbox" id="inlineCheckbox1"></Form.Check>
  );
}

export default CheckExample;
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Reverse</Block.Title>
            <Block.Text>Put your checkboxes, radios, and switches on the opposite side with the <code>reverse</code> prop.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Form.Check reverse type="checkbox" id="reverseCheck1" label="Reverse checkbox"></Form.Check>
            <Form.Check reverse type="checkbox" id="reverseCheck2" disabled label="Disabled reverse checkbox"></Form.Check>
            <Form.Check reverse type="radio" id="reverseRadio" label="Reverse radio"></Form.Check>
            <Form.Check reverse type="switch" id="flexSwitchCheckReverse" label="Reverse switch checkbox input"></Form.Check>
          </Card.Body>
          <CodePreview>
          {`import Form from 'react-bootstrap/Form';

function CheckExample() {
  return (
    <Form.Check reverse type="checkbox" id="reverseCheck1" label="Reverse checkbox"></Form.Check>
  );
}

export default CheckExample;
`}
          </CodePreview>
        </Card>
      </Block>

    </Layout>
  )
}

export default CheckRadioPage