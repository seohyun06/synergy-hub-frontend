import { Card, Form, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Layout from '../../layout/default';
import Block from '../../components/Block/Block';
import { Icon, Select, QuillMinimal, Tags, ImageUpload } from '../../components';

function AddCategoryPage() {
  return (
    <Layout title="Add Category" content="container">
        <Block.Head>
            <Block.HeadBetween>
                <Block.HeadContent>
                    <Block.Title tag="h2">Add Category</Block.Title>
                    <nav>
                        <ol className="breadcrumb breadcrumb-arrow mb-0">
                          <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                          <li className="breadcrumb-item"><Link to="/ecommerce/products">Ecommerce</Link></li>
                          <li className="breadcrumb-item active" aria-current="page">Add Category</li>
                        </ol>
                    </nav>
                </Block.HeadContent>
                <Block.HeadContent>
                    <ul className="d-flex">
                        <li>
                            <Link to="/ecommerce/categories" className="btn btn-primary btn-md d-md-none">
                                <Icon name="eye"/>
                                <span>View</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/ecommerce/categories" className="btn btn-primary d-none d-md-inline-flex">
                                <Icon name="eye"/>
                                <span>View Category</span>
                            </Link>
                        </li>
                    </ul>
                </Block.HeadContent>
            </Block.HeadBetween>
        </Block.Head>

      <Block>
        <Form action="#">
            <Row className="g-gs">
                <Col xxl="9">
                    <div className="gap gy-4">
                        <div className="gap-col">
                            <Card className="card-gutter-md">
                                <Card.Body>
                                    <Row className="g-gs">
                                        <Col lg="12">
                                            <Form.Group className="form-group">
                                                <Form.Label htmlFor="category-name">Category Name</Form.Label>
                                                <div className="form-control-wrap">
                                                    <Form.Control type="text" id="category-name" placeholder="Category Name"/>
                                                </div>
                                            </Form.Group>
                                        </Col>
                                        <Col lg="12">
                                            <Form.Group className="form-group">
                                                <Form.Label htmlFor="tax-class">Parent Category</Form.Label>
                                                <div className="form-control-wrap">
                                                    <Select removeItemButton>
                                                        <option value="">Select an option</option>
                                                        <option value="1">Toothbrush</option>
                                                        <option value="2">Wines</option>
                                                        <option value="3">Cameras</option>
                                                    </Select>
                                                </div>
                                            </Form.Group>
                                        </Col>
                                        <Col lg="6">
                                            <Form.Group className="form-group">
                                                <Form.Label htmlFor="vat-amount">Meta Tag Title</Form.Label>
                                                <div className="form-control-wrap">
                                                    <Form.Control type="text" id="vat-amount" placeholder="Meta Tag Title"/>
                                                </div>
                                            </Form.Group>
                                        </Col>
                                        <Col lg="6">
                                            <Form.Group className="form-group">
                                                <Form.Label>Meta Tag Keywords</Form.Label>
                                                <div className="form-control-wrap">
                                                    <Tags removeItemButton/>
                                                </div>
                                            </Form.Group>
                                        </Col>
                                        <Col lg="12">
                                            <Form.Group className="form-group">
                                                <Form.Label>Description</Form.Label>
                                                <div className="form-control-wrap">
                                                    <QuillMinimal placeholderValue="Write category description text..."/>
                                                </div>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="gap-col">
                            <ul className="d-flex align-items-center gap g-3">
                                <li>
                                    <Button type="submit" variant="primary">Save Changes</Button>
                                </li>
                                <li>
                                    <Link to="/ecommerce/products" className="btn border-0">Cancel</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Col>
                <Col xxl="3">
                    <Card className="card-gutter-md">
                        <Card.Body>
                            <Row className="g-gs">
                                <Col className="col-12">
                                    <Form.Group className="form-group">
                                        <Form.Label>Thumbnail</Form.Label>
                                        <div className="form-control-wrap">
                                            <ImageUpload src="/images/avatar/avatar-placeholder.jpg"/>
                                        </div>
                                        <div className="form-note mt-3">
                                            Set the category thumbnail image. Only *.png, *.jpg and *.jpeg image files are accepted.
                                        </div>
                                    </Form.Group>
                                </Col>
                                <Col className="col-12">
                                    <Form.Group className="form-group">
                                        <Form.Label>Status</Form.Label>
                                        <div className="form-control-wrap">
                                            <Select removeItemButton>
                                                <option value="">Select an option</option>
                                                <option value="1">Published</option>
                                                <option value="2">Draft</option>
                                                <option value="3">Scheduled</option>
                                                <option value="4">Inactive</option>
                                            </Select>
                                        </div>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Form>
      </Block>

    </Layout>
  )
}

export default AddCategoryPage;