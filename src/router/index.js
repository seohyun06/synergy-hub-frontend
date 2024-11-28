import React from 'react'
import { Routes, Route } from "react-router-dom";

import { ScrollToTop } from '../components';

//Pages
import Blank from '../pages/Blank';
import Home from '../pages/Home';
import HomeEcommerce from '../pages/HomeEcommerce';
import HomeProject from '../pages/HomeProject';
import HomeMarketing from '../pages/HomeMarketing';
import HomeNFT from '../pages/HomeNFT';

// apps
import AppCalendar from '../pages/AppCalendar';
import KanbanBasic from '../pages/kanban/KanbanBasic';
import KanbanCustom from '../pages/kanban/KanbanCustom';
import Chats from '../pages/apps/chat/Chats';
import Inbox from '../pages/apps/mailbox/Inbox';

// user manage
import UserList from '../pages/user-manage/UserList';
import UserCards from '../pages/user-manage/UserCards';
import UserProfile from '../pages/user-manage/UserProfile';
import UserEdit from '../pages/user-manage/UserEdit';

// admin
import Profile from '../pages/admin/Profile';
import ProfileSettings from '../pages/admin/ProfileSettings';

// // ecommerce
// import Products from '../pages/ecommerce/Products';
// import Categories from '../pages/ecommerce/Categories';
// import AddProduct from '../pages/ecommerce/AddProduct';
// import EditProduct from '../pages/ecommerce/EditProduct';
// import AddCategory from '../pages/ecommerce/AddCategory';
// import EditCategory from '../pages/ecommerce/EditCategory';

// ui elements
import Accordion from '../pages/components/Accordion';
import Alert from '../pages/components/Alert';
import Badge from '../pages/components/Badge';
import Breadcrumb from '../pages/components/Breadcrumb';
import Buttons from '../pages/components/Buttons';
import ButtonGroup from '../pages/components/ButtonGroup';
import Cards from '../pages/components/Cards';
import Carousel from '../pages/components/Carousel';
import CloseButton from '../pages/components/CloseButton';
import Collapse from '../pages/components/Collapse';
import Dropdowns from '../pages/components/Dropdowns';
import ListGroup from '../pages/components/ListGroup';
import Modal from '../pages/components/Modal';
import Tabs from '../pages/components/Tabs';
import Offcanvas from '../pages/components/Offcanvas';
import Pagination from '../pages/components/Pagination';
import Placeholders from '../pages/components/Placeholders';
import Popovers from '../pages/components/Popovers';
import Progress from '../pages/components/Progress';
import Spinners from '../pages/components/Spinners';
import Toasts from '../pages/components/Toasts';
import Tooltips from '../pages/components/Tooltips';

// utilities
import Misc from '../pages/utilities/Misc';
import Typography from '../pages/utilities/Typography';
import Images from '../pages/utilities/Images';
import Tables from '../pages/utilities/Tables';
import Background from '../pages/utilities/Background';
import Borders from '../pages/utilities/Borders';
import Colors from '../pages/utilities/Colors';
import Flex from '../pages/utilities/Flex';
import Sizing from '../pages/utilities/Sizing';
import Spacing from '../pages/utilities/Spacing';

// layout
import Breakpoints from '../pages/layout/Breakpoints';
import Containers from '../pages/layout/Containers';
import Gutters from '../pages/layout/Gutters';
// fomrs
import FormControl from '../pages/forms/FormControl';
import FormSelect from '../pages/forms/FormSelect';
import DateTime from '../pages/forms/DateTime';
import FormUpload from '../pages/forms/FormUpload';
import InputGroup from '../pages/forms/InputGroup';
import FloatingLabels from '../pages/forms/FloatingLabels';
import ChecksRadios from '../pages/forms/ChecksRadios';
import FormRange from '../pages/forms/FormRange';
import FormValidation from '../pages/forms/FormValidation';
import FormLayout from '../pages/forms/FormLayout';
import QuillPreview from '../pages/forms/editors/QuillPreview';
import TinymcePreview from '../pages/forms/editors/TinymcePreview';

// other pages
import DataTablePreview from '../pages/DataTablePreview';
import ChartsPreview from '../pages/ChartsPreview';
import Sweetalert from '../pages/Sweetalert';

// auths pages
import AuthRegister from '../pages/auths/AuthRegister';
import AuthLogin from '../pages/auths/AuthLogin';
import AuthReset from '../pages/auths/AuthReset';

import NotFound from '../pages/error/NotFound';
import IconsPreview from '../pages/IconsPreview';

// mainPage
import MainPage from "../mainPage/pages/MainPage";

function Router() {
  return (
    <ScrollToTop>
      <Routes>
          <Route path="blank" element={<Blank />} />

          <Route path="/" element={<MainPage />} />
          {/*<Route path="/" element={<Home />} />*/}
          {/*<Route path="/home" element={<Home />} />*/}


          {/*<Route path="home-ecommerce" element={<HomeEcommerce />} />*/}
          <Route path="home-project" element={<HomeProject />} />
          <Route path="home-marketing" element={<HomeMarketing />} />
          <Route path="home-nft" element={<HomeNFT />} />

          <Route path="apps">
            <Route path="calendar" element={<AppCalendar />} />
            <Route path="kanban/basic" element={<KanbanBasic />} />
            <Route path="kanban/custom" element={<KanbanCustom />} />
            <Route path="chats" element={<Chats />} />
            <Route path="inbox" element={<Inbox />} />            
          </Route>

          <Route path="user-manage">
            <Route path="user-list" element={<UserList />} />
            <Route path="user-cards" element={<UserCards />} />
            <Route path="user-profile/:id" element={<UserProfile />} />
            <Route path="user-edit/:id" element={<UserEdit />} />
          </Route>

          <Route path="admin">
            <Route path="profile" element={<Profile />} />
            <Route path="profile-settings" element={<ProfileSettings />} />
          </Route>

          {/*<Route path="ecommerce">*/}
          {/*  <Route path="products" element={<Products />} />*/}
          {/*  <Route path="categories" element={<Categories />} />*/}
          {/*  <Route path="add-product" element={<AddProduct />} />*/}
          {/*  <Route path="edit-product/:id" element={<EditProduct />} />*/}
          {/*  <Route path="add-category" element={<AddCategory />} />*/}
          {/*  <Route path="edit-category/:id" element={<EditCategory />} />*/}
          {/*</Route>*/}

          <Route path="ui-elements">
            <Route path="accordion" element={<Accordion />} />
            <Route path="alert" element={<Alert />} />
            <Route path="badge" element={<Badge />} />
            <Route path="breadcrumb" element={<Breadcrumb />} />
            <Route path="buttons" element={<Buttons />} />
            <Route path="button-group" element={<ButtonGroup />} />
            <Route path="cards" element={<Cards />} />
            <Route path="carousel" element={<Carousel />} />
            <Route path="close-button" element={<CloseButton />} />
            <Route path="collapse" element={<Collapse />} />
            <Route path="dropdowns" element={<Dropdowns />} />
            <Route path="list-group" element={<ListGroup />} />
            <Route path="modal" element={<Modal />} />
            <Route path="tabs" element={<Tabs />} />
            <Route path="offcanvas" element={<Offcanvas />} />
            <Route path="pagination" element={<Pagination />} />
            <Route path="placeholders" element={<Placeholders />} />
            <Route path="popovers" element={<Popovers />} />
            <Route path="progress" element={<Progress />} />
            <Route path="spinners" element={<Spinners />} />
            <Route path="toasts" element={<Toasts />} />
            <Route path="tooltips" element={<Tooltips />} />
          </Route>

          <Route path="utilities">
            <Route path="misc" element={<Misc />} />
            <Route path="typography" element={<Typography />} />
            <Route path="images" element={<Images />} />
            <Route path="tables" element={<Tables />} />
            <Route path="background" element={<Background />} />
            <Route path="borders" element={<Borders />} />
            <Route path="colors" element={<Colors />} />
            <Route path="flex" element={<Flex />} />
            <Route path="sizing" element={<Sizing />} />
            <Route path="spacing" element={<Spacing />} />
          </Route>

          <Route path="layout">
            <Route path="breakpoints" element={<Breakpoints />} />
            <Route path="containers" element={<Containers />} />
            <Route path="gutters" element={<Gutters />} />
          </Route>

          <Route path="forms">
            <Route path="form-control" element={<FormControl />} />
            <Route path="form-select" element={<FormSelect />} />
            <Route path="date-time" element={<DateTime />} />
            <Route path="form-upload" element={<FormUpload />} />
            <Route path="input-group" element={<InputGroup />} />
            <Route path="floating-labels" element={<FloatingLabels />} />
            <Route path="checks-radios" element={<ChecksRadios />} />
            <Route path="form-range" element={<FormRange />} />
            <Route path="form-validation" element={<FormValidation />} />
            <Route path="form-layout" element={<FormLayout />} />
          </Route>

          <Route path="editors">
            <Route path="quill" element={<QuillPreview />} />
            <Route path="tinymce" element={<TinymcePreview />} />
          </Route>

          <Route path="data-table" element={<DataTablePreview />} />
          <Route path="charts" element={<ChartsPreview />} />
          <Route path="sweetalert" element={<Sweetalert />} />

          <Route path="auths">
            <Route path="auth-register" element={<AuthRegister />} />
            <Route path="auth-login" element={<AuthLogin />} />
            <Route path="auth-reset" element={<AuthReset />} />
          </Route>

          <Route path="icons" element={<IconsPreview />} />
          <Route path="not-found" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </ScrollToTop>
    
  )
}

export default Router;
