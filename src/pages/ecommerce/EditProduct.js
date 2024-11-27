import { Card, Form, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Layout from '../../layout/default';
import Block from '../../components/Block/Block';
import { Icon, Select, QuillMinimal, FileUpload, Tags, Image, Media, ImageUpload } from '../../components';

function EditProductPage() {

  return (
    <Layout title="Edit Product" content="container">
        <Block.Head>
            <Block.HeadBetween>
                <Block.HeadContent>
                    <Block.Title tag="h2">Edit Product</Block.Title>
                    <nav>
                        <ol className="breadcrumb breadcrumb-arrow mb-0">
                          <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                          <li className="breadcrumb-item"><Link to="/ecommerce/products">Ecommerce</Link></li>
                          <li className="breadcrumb-item active" aria-current="page">Edit Product</li>
                        </ol>
                    </nav>
                </Block.HeadContent>
                <Block.HeadContent>
                    <ul className="d-flex">
                        <li>
                            <Link to="/ecommerce/products" className="btn btn-primary btn-md d-md-none">
                                <Icon name="eye"/>
                                <span>View</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/ecommerce/products" className="btn btn-primary d-none d-md-inline-flex">
                                <Icon name="eye"/>
                                <span>View Products</span>
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
                                                <Form.Label htmlFor="productname">Product Name</Form.Label>
                                                <div className="form-control-wrap">
                                                    <Form.Control type="text" id="productname" defaultValue="Pool Party Drink Holder" placeholder="Product Name"/>
                                                </div>
                                            </Form.Group>
                                        </Col>
                                        <Col lg="6">
                                            <Form.Group className="form-group">
                                                <Form.Label htmlFor="baseprice">Base Price</Form.Label>
                                                <div className="form-control-wrap">
                                                    <Form.Control type="text" id="baseprice" defaultValue="199.99" placeholder="Product price"/>
                                                </div>
                                            </Form.Group>
                                        </Col>
                                        <Col lg="6">
                                            <Form.Group className="form-group">
                                                <Form.Label htmlFor="discount-price">Discount  Price</Form.Label>
                                                <div className="form-control-wrap">
                                                    <Form.Control type="text" id="discount-price" defaultValue="10" placeholder="Discount price"/>
                                                </div>
                                            </Form.Group>
                                        </Col>
                                        <Col lg="6">
                                            <Form.Group className="form-group">
                                                <Form.Label htmlFor="tax-class">Tax Class</Form.Label>
                                                <div className="form-control-wrap">
                                                    <Select removeItemButton defaultValue="1">
                                                        <option value="">Select an option</option>
                                                        <option value="1">Tax Free</option>
                                                        <option value="2">Taxable Goods</option>
                                                        <option value="3">Downloadable Product</option>
                                                    </Select>
                                                </div>
                                            </Form.Group>
                                        </Col>
                                        <Col lg="6">
                                            <Form.Group className="form-group">
                                                <Form.Label htmlFor="vat-amount">VAT Amount (%)</Form.Label>
                                                <div className="form-control-wrap">
                                                    <Form.Control type="text" id="vat-amount" defaultValue="22" placeholder=""/>
                                                </div>
                                            </Form.Group>
                                        </Col>
                                        <Col lg="6">
                                            <Form.Group className="form-group">
                                                <Form.Label htmlFor="sku">SKU</Form.Label>
                                                <div className="form-control-wrap">
                                                    <Form.Control type="text" id="sku" defaultValue="0229850" placeholder="SKU number"/>
                                                </div>
                                            </Form.Group>
                                        </Col>
                                        <Col lg="6">
                                            <Form.Group className="form-group">
                                                <Form.Label htmlFor="barcode">Barcode</Form.Label>
                                                <div className="form-control-wrap">
                                                    <Form.Control type="text" id="barcode" defaultValue="55874521453" placeholder="Barcode number"/>
                                                </div>
                                            </Form.Group>
                                        </Col>
                                        <Col lg="12">
                                            <Form.Group className="form-group">
                                                <Form.Label>Quantity</Form.Label>
                                                <Row className="g-gs">
                                                    <Col lg="6">
                                                        <div className="form-control-wrap">
                                                            <Form.Control type="number" defaultValue="23" placeholder="On shelf"/>
                                                        </div>
                                                    </Col>
                                                    <Col lg="6">
                                                        <div className="form-control-wrap">
                                                            <Form.Control type="text" placeholder="In warehouse"/>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Form.Group>
                                        </Col>
                                        <Col lg="12">
                                            <Form.Group className="form-group">
                                                <Form.Label>Description</Form.Label>
                                                <div className="form-control-wrap">
                                                    <QuillMinimal placeholderValue="Write product description text..."/>
                                                </div>
                                            </Form.Group>
                                        </Col>
                                        <Col lg="12">
                                            <Form.Group className="form-group" controlId="addProductshippingCheckbox">
                                                <Form.Check type="checkbox" label="This is a physical product" defaultChecked/>
                                                <div className="smaller">Set if the product is a physical or digital item. Physical products may require shipping.</div>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="gap-col">
                            <Card className="card-gutter-md">
                                <Card.Body>
                                <ul className="d-flex flex-wrap gap g-3 pb-3">
                                    <li>
                                        <Media size="huge">
                                            <Image src="/images/product/a.jpg" alt="media" thumbnail/>
                                        </Media>
                                    </li>
                                    <li>
                                        <Media size="huge">
                                            <Image src="/images/product/b.jpg" alt="media" thumbnail/>
                                        </Media>
                                    </li>
                                    <li>
                                        <Media size="huge">
                                            <Image src="/images/product/c.jpg" alt="media" thumbnail/>
                                        </Media>
                                    </li>
                                </ul>
                                    <Form.Group className="form-group">
                                        <Form.Label>Upload Media</Form.Label>
                                        <FileUpload iconName="img" maxSize={12582912} errorText="File size is too large, please upload file size within (12MB)"/>
                                        <div className="form-note mt-3">Set the product media gallery.</div>
                                    </Form.Group>
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
                                            <ImageUpload src="/images/product/d.jpg"/>
                                        </div>
                                        <div className="form-note mt-3">
                                            Set the product thumbnail image. Only *.png, *.jpg and *.jpeg image files are accepted.
                                        </div>
                                    </Form.Group>
                                </Col>
                                <Col className="col-12">
                                    <Form.Group className="form-group">
                                        <Form.Label>Categories</Form.Label>
                                        <div className="form-control-wrap">
                                            <Select removeItemButton defaultValue="computers">
                                                <option value="">Select an option</option>
                                                <option value="computers">Computers</option>
                                                <option value="watches">Watches</option>
                                                <option value="headphones">Headphones</option>
                                                <option value="footwear">Footwear</option>
                                                <option value="cameras">Cameras</option>
                                                <option value="shirts">Shirts</option>
                                                <option value="household">Household</option>
                                                <option value="handbags">Handbags</option>
                                                <option value="wines">Wines</option>
                                            </Select>
                                        </div>
                                    </Form.Group>
                                </Col>
                                <Col className="col-12">
                                    <Form.Group className="form-group">
                                        <Form.Label>Tags</Form.Label>
                                        <div className="form-control-wrap">
                                            <Tags defaultValue="new, trending" removeItemButton/>
                                        </div>
                                    </Form.Group>
                                </Col>
                                <Col className="col-12">
                                    <Form.Group className="form-group">
                                        <Form.Label>Status</Form.Label>
                                        <div className="form-control-wrap">
                                            <Select removeItemButton defaultValue="1">
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

export default EditProductPage;