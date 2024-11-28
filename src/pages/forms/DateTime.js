import { Card, Form, Row, Col} from 'react-bootstrap';

import Layout from '../../layout/default';
import Block from '../../components/Block/Block';
import CodePreview from '../../components/CodePreview/CodePreview';
import DatePicker from '../../components/Form/DatePicker';
import DateRangePicker from '../../components/Form/DateRangePicker';
import TimePicker from '../../components/Form/TimePicker';


function DateTimePage() {
  return (
    <Layout title="Date and timepicker" content="container">
      <Block.Head page className="wide-md">
        <Block.HeadContent>
            <Block.Title>Date and Time Picker</Block.Title>
            <Block.Text>Custom datepicker with <a href="https://mymth.github.io/vanillajs-datepicker" target="_blank" rel="noreferrer">vanillajs-datepicker</a> . and time picker from nioapp custom script</Block.Text>
        </Block.HeadContent>
      </Block.Head>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Date picker example</Block.Title>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Row className="g-gs">
                <Col md="6">
                    <Form.Group className="form-group">
                        <Form.Label>Datepicker</Form.Label>
                        <div className="form-control-wrap">
                            <DatePicker />
                        </div>
                    </Form.Group>
                </Col>
                <Col md="6">
                    <Form.Group className="form-group">
                        <Form.Label>Daterange Picker</Form.Label>
                        <DateRangePicker />
                    </Form.Group>
                </Col>
                <div className="col-12">
                    <div className="form-note">
                        Use <code>DateRangePicker</code> component to enable range date picker.
                    </div>
                </div>
                <Col md="6">
                    <Form.Group className="form-group">
                        <Form.Label>Datepicker Month View</Form.Label>
                        <div className="form-control-wrap">
                            <DatePicker startView="1"/>
                        </div>
                    </Form.Group>
                </Col>
                <Col md="6">
                    <Form.Group className="form-group">
                        <Form.Label>Datepicker Year View</Form.Label>
                        <div className="form-control-wrap">
                            <DatePicker startView="2"/>
                        </div>
                    </Form.Group>
                </Col>
                <div className="col-12">
                    <div className="form-note">
                        Use <code>startView="1"</code> prop to <code>DatePicker</code> to enable month view, or use <code>startView="2"</code> prop to <code>DatePicker</code> to enable Year view.
                    </div>
                </div>
            </Row>
          </Card.Body>
          <CodePreview title="date picker">
          {`import DatePicker from '../../components/Form/DatePicker';

function DatePickerExample() {
  return (
    <DatePicker />
  );
}

export default DatePickerExample;
`}
          </CodePreview>
          <CodePreview title="date range picker">
          {`import DateRangePicker from '../../components/Form/DateRangePicker';

function DateRangePickerExample() {
  return (
    <DateRangePicker />
  );
}

export default DateRangePickerExample;
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Time picker example</Block.Title>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Row className="g-gs">
                <Col md="6">
                    <Form.Group className="form-group">
                        <Form.Label>Time Picker</Form.Label>
                        <div className="form-control-wrap">
                            <TimePicker format={12} value="" placeholder="hh:mm"/>
                        </div>
                    </Form.Group>
                </Col>
                <Col md="6">
                    <Form.Group className="form-group">
                        <Form.Label>Time Picker (24hour)</Form.Label>
                        <div className="form-control-wrap">
                            <TimePicker value="" placeholder="hh:mm"/>
                        </div>
                    </Form.Group>
                </Col>
                <div className="col-12">
                    <div className="form-note">
                        Omit the <code>format={12}</code> prop from <code>TimePicker</code> to enable 24hour time format.
                    </div>
                </div>
            </Row>
          </Card.Body>
          <CodePreview title="time picker">
          {`import TimePicker from '../../components/Form/TimePicker';

function TimePickerExample() {
  return (
    <TimePicker format={12} value="" placeholder="hh:mm"/>
  );
}

export default TimePickerExample;
`}
          </CodePreview>
        </Card>
      </Block>
    </Layout>
  )
}

export default DateTimePage