import { FileOutlined, ShoppingCartOutlined, UserOutlined, DropboxCircleFilled, DesktopOutlined, TeamOutlined, AppstoreOutlined } from '@ant-design/icons';
import { ReactComponent as Shipment } from "Assets/shipment.svg"
import { ReactComponent as Products } from "Assets/product.svg"
import { ReactComponent as Customers } from "Assets/users.svg"
import { ReactComponent as Orders } from "Assets/order.svg"
import { ReactComponent as Transaction } from "Assets/credit card.svg"
import { ReactComponent as Settings } from "Assets/Setting.svg"
import { ReactComponent as Logout } from "Assets/logout.svg"
// import Logout from "Assets/logout.svg"
import { ReactComponent as Dashboard } from "Assets/dashboard.svg"
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
// import MenuItem from 'antd/es/menu/MenuItem';
import dashboard from "Assets/dashboard.svg"
import Icon from '@ant-design/icons/lib/components/Icon';
import { Header } from '../Header/Header';
const {  Content, Footer, Sider } = Layout;
const LogoStyled = styled.div`
/* margin-top: 65px; */
margin: 65px auto 65px;
  width: 171px;
  height: 40px;
  left: 70px;
  bottom: 1012px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 34px;
  line-height: 40px;
  /* identical to box height */

  text-align: center;
  /* Black */

  color: #1E2832;
  
`
const SiderStyled = styled(Sider)`
.ant-layout-sider{

  max-width: 400px;
  min-width: 300px;
  width: 300px;
}
`
const MenuItemStyled = styled(Menu)`
  /* display: flex; */
  .ant-menu-item{
    margin-top: 20px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;

    color: #CDCDCD;
    margin-left: 10px;
  }
  
`


function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  // getItem('Dashboard', '1', <Dashboard />),
  getItem('Dashboard', '1', <Icon component={()=><img src={dashboard}></img>}/>),
  getItem('Products', '2', <Products />),
  getItem('Customers', '3', <Customers />),
  getItem('Orders', '4', <Orders />),
  getItem('Shipments', '5', <Shipment />),

  getItem('Transactions', '6', <Transaction />),
  getItem('Settings', '7', <Settings />),
  getItem(<NavLink to="/">Logout</NavLink>, '8', <Logout />),
];
const LayoutAdmin = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <SiderStyled 
     width={300} theme='light' collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <LogoStyled >
        Lisa Admin
        </LogoStyled>
        <MenuItemStyled defaultSelectedKeys={['1']} mode="inline" items={items} >
          {/* {items.map((value)=>{return <Menu.Item key={value.key}>{value.icon}{value.label}</Menu.Item>})} */}
        </MenuItemStyled>
      </SiderStyled>
      <Layout style={{marginLeft:'2vw',marginRight:'2vw',background: "#F3F3F3"}}>
        <Header
          // style={{
          //   padding: 0,
          //   background: "#F3F3F3",
          // }}
        >

        </Header>
        {/* <Content
          style={{
            margin: '0 16px',
          }}
        >
         
          <div
            style={{
              
              minHeight: 360,
              background: colorBgContainer,
              height: 880,
            }}
          >
            Bill is a cat.
          </div>
        </Content> */}
        <Outlet/>
        {/* <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer> */}
      </Layout>
    </Layout>
  );
};
export { LayoutAdmin };