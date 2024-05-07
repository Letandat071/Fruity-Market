import React from 'react';
import { Col } from 'antd';
import { WrapperHeader, WrapperHeaderAccount, WrapperTextHeader,WrapperTextHeaderSmall } from './style';
import { UserOutlined,CaretDownOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import Search from 'antd/es/transfer/search';
const HeaderComponent = () => {
  return (

    <div className="container px-0">
  <nav className="navbar navbar-light bg-white navbar-expand-xl">
    <a href="homepage" className="navbar-brand"><h1 className="text-primary display-6">Fruitables</h1></a>
    <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
      <span className="fa fa-bars text-primary" />
    </button>
    <div className="collapse navbar-collapse bg-white" id="navbarCollapse">
      <div className="navbar-nav mx-auto">
        <a href="homepage" className="nav-item nav-link active">Home</a>
        <a href="products" className="nav-item nav-link">Shop</a>
        <a href="shop-detail.html" className="nav-item nav-link">Shop Detail</a>
        <div className="nav-item dropdown">
          <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
          <div className="dropdown-menu m-0 bg-secondary rounded-0">
            <a href="cart.html" className="dropdown-item">Cart</a>
            <a href="chackout.html" className="dropdown-item">Chackout</a>
            <a href="testimonial.html" className="dropdown-item">Testimonial</a>
            <a href="404.html" className="dropdown-item">404 Page</a>
          </div>
        </div>
        <a href="contact.html" className="nav-item nav-link">Contact</a>
      </div>
      <div className="d-flex m-3 me-0">
        <button className="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fas fa-search text-primary" /></button>
        <a href="#" className="position-relative me-4 my-auto">
          <i className="fa fa-shopping-bag fa-2x" />
          <span className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1" style={{top: '-5px', left: 15, height: 20, minWidth: 20}}>3</span>
        </a>
        <a href="#" className="my-auto">
          <i className="fas fa-user fa-2x" />
        </a>
      </div>
    </div>
  </nav>
</div>

  //   <div>
  //   <WrapperHeader gutter={16}> 
  //     <Col span={6}><WrapperTextHeader>YourBrand</WrapperTextHeader> </Col>
  //     <Col span={12}> <Search 
  //     placeholder="input search text" 
  //     //onSearch={onSearch} 
  //     enterButton />
  //     </Col>
  //     <Col span={6} style={{display:'flex', gap: '20px',alignItems:"center"}}>
  //       <WrapperHeaderAccount>
  //         <UserOutlined style={{ fontSize: "30px"}}/>
  //         <div>
  //           <WrapperTextHeaderSmall>Đăng Nhập / Đăng ký</WrapperTextHeaderSmall>
  //           <div>
  //             <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
  //             <CaretDownOutlined />
  //           </div>
  //         </div> 
  //       </WrapperHeaderAccount>
  //         <div>        
  //             <ShoppingCartOutlined style={{ fontSize: "30px", color:"#fff"}}/>
  //             <WrapperTextHeaderSmall>Giỏ Hàng</WrapperTextHeaderSmall>
  //         </div>
  //     </Col>
   
  // </WrapperHeader>
  // </div>
  )
}

export default HeaderComponent;
