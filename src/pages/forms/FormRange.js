
import { Card, Form, Row, Col} from 'react-bootstrap';

import Layout from '../../layout/default';
import Block from '../../components/Block/Block';
import CodePreview from '../../components/CodePreview/CodePreview';

import NoUiSlider from '../../components/Form/NoUiSlider';

function FormRangePage() {
   

  return (
    <Layout title="Range" content="container">
      <Block.Head page className="wide-md">
        <Block.HeadContent>
            <Block.Title>Range</Block.Title>
            <Block.Text>Examples and usage guidelines for range slider with nouislider. for more info visit <a href="https://refreshless.com/nouislider/" target="_blank" rel="noreferrer">noUislider</a>.</Block.Text>
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
            <Row className="gy-4 gx-gs">
                <Col sm="6">
                    <Form.Group className="form-group">
                        <Form.Label className="mb-3">Default Range Slider</Form.Label>
                        <div className="form-control-wrap">
                            <NoUiSlider id="DefaultRange"  start="30"/>
                        </div>
                    </Form.Group> 
                </Col>
                <Col sm="6">
                    <Form.Group className="form-group">
                        <Form.Label className="mb-3">Range Connect (upper)</Form.Label>
                        <div className="form-control-wrap">
                          <NoUiSlider  start="20" connect="upper" id="RangeConnect"/>
                        </div>
                    </Form.Group> 
                </Col>
                <Col sm="6">
                    <Form.Group className="form-group">
                        <Form.Label className="mb-3">Range Slider Step (10)</Form.Label>
                        <div className="form-control-wrap">
                          <NoUiSlider step={10} start="20" id="RangeStep" />
                        </div>
                    </Form.Group> 
                </Col>
                <Col sm="6">
                    <Form.Group className="form-group">
                        <Form.Label className="mb-3">Range Multiple</Form.Label>
                        <div className="form-control-wrap">
                          <NoUiSlider connect="true" start="30 70" id="RangeMultiple" />
                        </div>
                    </Form.Group> 
                </Col>
            </Row>
            <ul className="gap gy-2 pt-5 wide-md">
                <li>
                    <div className="form-note">
                        <code>start="20"</code> prop to specify value for slider handle, this can take multiple value saparated with an space like this <code>start="20 40"</code>.
                    </div>
                </li>
                <li>
                    <div className="form-note">
                        <code>step={`{10}`}</code> prop to enable slider step mode. note: step prop is numeric type so you have to give value like <code>step={`{10}`}</code>
                    </div>
                </li>
                <li>
                    <div className="form-note">
                        <code>connect="upper"</code> prop to specify if slider handles are connected with something. you can use <code>{`{lower, upper, true, false}`}</code> with this. <code>lower</code> connects with start point, <code>upper</code> connects with end point, <code>true</code> connects handles with each other. Also you need to make combination with handle count with connect points, this can take multiple value saparated with an space like this <code>[connect="lower false true upper"]</code>.
                    </div>
                </li>
            </ul>
          </Card.Body>
          <CodePreview title="default">
          {`import NoUiSlider from '{relative_path_goes_here}/components/Form/NoUiSlider';

function RangeDefaultExample() {
  return (
    <NoUiSlider id="DefaultRange"  start="30"/>
  );
}

export default RangeDefaultExample;
`}
          </CodePreview>
          <CodePreview title="upper">
          {`import NoUiSlider from '{relative_path_goes_here}/components/Form/NoUiSlider';

function RangeUpperExample() {
  return (
    <NoUiSlider  start="20" connect="upper" id="RangeConnect"/>
  );
}

export default RangeUpperExample;
`}
          </CodePreview>
          <CodePreview title="step">
          {`import NoUiSlider from '{relative_path_goes_here}/components/Form/NoUiSlider';

function RangeStepExample() {
  return (
    <NoUiSlider step={10} start="20" id="RangeStep" />
  );
}

export default RangeStepExample;
`}
          </CodePreview>
          <CodePreview title="range multiple">
          {`import NoUiSlider from '{relative_path_goes_here}/components/Form/NoUiSlider';

function RangeMultipleExample() {
  return (
    <NoUiSlider connect="true" start="30 70" id="RangeMultiple" />
  );
}

export default RangeMultipleExample;
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Example</Block.Title>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Row className="gy-4 gx-gy">
                <Col sm="3" className="col-6">
                    <Form.Group className="form-group">
                        <Form.Label>Default Range Slider</Form.Label>
                        <div className="form-control-wrap">
                            <NoUiSlider orientation="vertical" start="30" id="vertical-Default-Range" />
                        </div>
                    </Form.Group> 
                </Col>
                <Col sm="3" className="col-6">
                    <Form.Group className="form-group">
                        <Form.Label>Range Connect (upper)</Form.Label>
                        <div className="form-control-wrap">
                            <NoUiSlider orientation="vertical" start="20" connect="upper" id="vertical-Range-Connect" />
                        </div>
                    </Form.Group> 
                </Col>
                <Col sm="3" className="col-6">
                    <Form.Group className="form-group">
                        <Form.Label>Range Slider Step (10)</Form.Label>
                        <div className="form-control-wrap">
                            <NoUiSlider orientation="vertical" step={10} start="20" id="vertical-Range-Step" />
                        </div>
                    </Form.Group> 
                </Col>
                <Col sm="3" className="col-6">
                    <Form.Group className="form-group">
                        <Form.Label>Range Multiple</Form.Label>
                        <div className="form-control-wrap">
                            <NoUiSlider orientation="vertical" connect="true" start="30 70" id="vertical-Range-Multiple" />
                        </div>
                    </Form.Group> 
                </Col>
            </Row>
            <div className="form-note mt-4">
              Use <code>orientation="vertical"</code> prop to enable vertical mode.
            </div>
          </Card.Body>
          <CodePreview>
          {`import NoUiSlider from '{relative_path_goes_here}/components/Form/NoUiSlider';

function RangeVerticalExample() {
  return (
    <NoUiSlider orientation="vertical" start="30" id="vertical-Default-Range" />
  );
}

export default RangeVerticalExample;
`}
          </CodePreview>
          
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Example</Block.Title>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Row className="gy-4 gx-gs">
                <Col sm="6">
                    <Form.Group className="form-group">
                        <Form.Label>Tooltip Slider</Form.Label>
                        <div className="form-control-wrap">
                            <NoUiSlider tooltip={true} start="40" id="Tooltip-Range" />
                        </div>
                    </Form.Group> 
                </Col>
                <Col sm="6">
                    <Form.Group className="form-group">
                        <Form.Label>Minimum Distance Slider</Form.Label>
                        <div className="form-control-wrap">
                            <NoUiSlider tooltip={true} connect="true" start="30 60" minDistance={20} id="Min-Distance-Range" />
                        </div>
                    </Form.Group> 
                </Col>
                <Col sm="6">
                    <Form.Group className="form-group">
                        <Form.Label>Maximum Distance Slider</Form.Label>
                        <div className="form-control-wrap">
                            <NoUiSlider tooltip={true} connect="true" start="30 60" maxDistance={50} id="Max-Distance-Range" />
                        </div>
                    </Form.Group> 
                </Col>
            </Row>
            <div className="form-note mt-5">
                Use <code>tooltip={`{true}`}</code> attribute to enable Tooltip mode. note: tooltip prop is numeric type so you have to give value like <code>tooltip={`{true}`}</code>
            </div>
          </Card.Body>
          <CodePreview>
          {`import ReactSlider from 'react-slider'

function RangeTooltipExample() {
  return (
    <NoUiSlider tooltip={true} start="40" id="Tooltip-Range" />
  );
}

export default RangeTooltipExample;
`}
          </CodePreview>
          
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Example default range</Block.Title>
            <Block.Text>Create custom <code>&lt;input type="range"&gt;</code> controls with <code>&lt;FormRange&gt;</code>. The track (the background) and thumb (the value) are both styled to appear the same across browsers. As only Firefox supports “filling” their track from the left or right of the thumb as a means to visually indicate progress, we do not currently support it.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Row className="gy-4 gx-gs">
                <Col sm="6">
                    <Form.Group className="form-group">
                        <Form.Label>Default range</Form.Label>
                        <div className="form-control-wrap">
                          <Form.Range />
                        </div>
                    </Form.Group> 
                </Col>
                <Col sm="6">
                    <Form.Group className="form-group">
                        <Form.Label>Disabled rangeider</Form.Label>
                        <div className="form-control-wrap">
                          <Form.Range disabled/>
                        </div>
                    </Form.Group> 
                </Col>
                <Col sm="6">
                    <Form.Group className="form-group">
                        <Form.Label>Min and max range (0-5)</Form.Label>
                        <div className="form-control-wrap">
                          <Form.Range min="0" max="5"/>
                        </div>
                    </Form.Group> 
                </Col>
                <Col sm="6">
                    <Form.Group className="form-group">
                        <Form.Label>Steps range (10)</Form.Label>
                        <div className="form-control-wrap">
                          <Form.Range step="10"/>
                        </div>
                    </Form.Group> 
                </Col>
            </Row>
          </Card.Body>
          <CodePreview>
          {`import Form from 'react-bootstrap/Form';

function RangeExample() {
  return (
    <Form.Range />
  );
}

export default RangeExample;
`}
          </CodePreview>
          
        </Card>
      </Block>

      
    </Layout>
  )
}

export default FormRangePage