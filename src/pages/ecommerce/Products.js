import { Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Layout from '../../layout/default';
import Block from '../../components/Block/Block';
import DataTable from '../../components/DataTable/DataTable';
import { Icon, } from '../../components';
import products, { productsColumns } from '../../store/products/ProductsData';

function ProductPage() {
  return (
    <Layout title="Products" content="container">
        <Block.Head>
            <Block.HeadBetween>
                <Block.HeadContent>
                    <Block.Title tag="h2">Products</Block.Title>
                    <nav>
                        <ol className="breadcrumb breadcrumb-arrow mb-0">
                          <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                          <li className="breadcrumb-item"><Link to="/ecommerce/products">Ecommerce</Link></li>
                          <li className="breadcrumb-item active" aria-current="page">Products</li>
                        </ol>
                    </nav>
                </Block.HeadContent>
                <Block.HeadContent>
                  <ul className="d-flex">
                    <li>
                      <Link to="/ecommerce/add-product" className="btn btn-primary btn-md d-md-none">
                        <Icon name="plus"/>
                        <span>Add</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/ecommerce/add-product" className="btn btn-primary d-none d-md-inline-flex">
                        <Icon name="plus"/>
                        <span>Add Product</span>
                      </Link>
                    </li>
                  </ul>
                </Block.HeadContent>
            </Block.HeadBetween>
        </Block.Head>

      <Block>
        <Card>
          <DataTable tableClassName="data-table-head-light table-responsive data-table-checkbox" data={products} columns={productsColumns} selectableRows ></DataTable>
        </Card>
      </Block>

    </Layout>
  )
}

export default ProductPage;