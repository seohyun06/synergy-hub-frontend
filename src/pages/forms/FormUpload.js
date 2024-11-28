import { Card, Form, Row, Col} from 'react-bootstrap';

import Layout from '../../layout/default';
import Block from '../../components/Block/Block';
import CodePreview from '../../components/CodePreview/CodePreview';
import FileUpload from '../../components/Form/FileUpload';


function FormUploadPage() {
  return (
    <Layout title="Form Upload" content="container">
      <Block.Head page className="wide-md">
        <Block.HeadContent>
            <Block.Title>Form Upload</Block.Title>
            <Block.Text>Give textual form controls like inputs and textareas an upgrade with custom styles, sizing, focus states, and more.</Block.Text>
        </Block.HeadContent>
      </Block.Head>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">React dropzone example</Block.Title>
            <Block.Text>File Upload system with React Dropzone , for more detailed documentation, visit <a href="https://react-dropzone.js.org/" target="_blank" rel="noreferrer">React Dropzone</a>.
            </Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Row className="gx-gs gy-4">
                <Col sm="6">
                    <Form.Group className="form-group">
                        <Form.Label>Default dropzone</Form.Label>
                        <div className="form-control-wrap">
                            <FileUpload iconName="files"/>
                        </div>
                    </Form.Group>
                </Col>
                <Col sm="6">
                    <Form.Group className="form-group">
                        <Form.Label>Single file dropzone</Form.Label>
                        <div className="form-control-wrap">
                          <FileUpload iconName="file" maxFiles={1} errorText="Multiple files not supported, please upload single file."/>
                        </div>
                    </Form.Group>
                </Col>
                <Col sm="6">
                    <Form.Group className="form-group">
                        <Form.Label>Limited Size Dropzone "4MB"</Form.Label>
                        <div className="form-control-wrap">
                          <FileUpload iconName="files" maxSize={4194304} errorText="File size is too large, please upload file size within (4MB)"/>
                        </div>
                    </Form.Group>
                </Col>
                <Col sm="6">
                    <Form.Group className="form-group">
                        <Form.Label>Change Icon and filetype</Form.Label>
                        <div className="form-control-wrap">
                          <FileUpload iconName="img"/>
                        </div>
                    </Form.Group>
                </Col>
                <Col className="col-12">
                  <div className="form-note wide-md">
                    Use prop <code>maxFiles={`{number}`}</code> on <code>FileUpload</code> component to specify maximum file upload limit. same as use <code>maxSize={`{number}`}</code> prop for maximum file size {`(in bytes)`}. use <code>iconName=""</code> prop for change icon.
                  </div>
                </Col>
            </Row>
          </Card.Body>
          <CodePreview>
          {`import FileUpload from '../../components/Form/FileUpload';

function FileUploadExample() {
  return (
    <FileUpload iconName="files"/>
  );
}

export default FileUploadExample;
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Form File Input</Block.Title>
            <Block.Text>Basic styled form file input.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Row className="gx-gs gy-3">
                <Col sm="6">
                    <div className="form-group">
                        <Form.Label>Default file input example</Form.Label>
                        <div className="form-control-wrap">
                            <Form.Control type="file"/>
                        </div>
                    </div>
                </Col>
                <Col sm="6">
                    <div className="form-group">
                        <Form.Label>Disabled file input example</Form.Label>
                        <div className="form-control-wrap">
                            <Form.Control type="file" disabled/>
                        </div>
                    </div>
                </Col>
                <Col sm="12">
                    <div className="form-group">
                        <Form.Label>Multiple files input example</Form.Label>
                        <div className="form-control-wrap">
                            <Form.Control type="file" multiple/>
                        </div>
                    </div>
                </Col>
                <Col className="col-12">
                    <div className="form-note">
                        Use <code>type="file"</code> attribute to <code>input</code> to unable file upload mode,
                        same as <code>disabled</code> attribute to unable disabled mode, <code>multiple</code> attribute to unable multiple file upload mode.
                    </div>
                </Col>
            </Row>
          </Card.Body>
          <CodePreview>
          {`import Form from 'react-bootstrap/Form';

function DefaultFileUploadExample() {
  return (
    <Form.Control type="file"/>
  );
}

export default DefaultFileUploadExample;
`}
          </CodePreview>
        </Card>
      </Block>

      <Block>
        <Block.Head className="wide-md">
          <Block.HeadContent>
            <Block.Title tag="h3">Sizing</Block.Title>
            <Block.Text>Set heights using prop like <code>size="lg"</code> and <code>size="sm"</code>.</Block.Text>
          </Block.HeadContent>
        </Block.Head>
        <Card>
          <Card.Body>
            <Row className="g-3 align-items-center">
                <div className="col-lg-4">
                    <div className="form-control-wrap"> 
                        <Form.Control size="lg" type="file" />
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="form-control-wrap"> 
                        <Form.Control type="file" />
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="form-control-wrap"> 
                        <Form.Control size="sm" type="file" />
                    </div>
                </div>
            </Row>
          </Card.Body>
          <CodePreview>
          {`<Form.Control size="lg" type="file" />
`}
          </CodePreview>
        </Card>
      </Block>
    </Layout>
  )
}

export default FormUploadPage