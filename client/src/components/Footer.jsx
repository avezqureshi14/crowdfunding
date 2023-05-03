import { Layout } from 'antd';

const { Footer } = Layout;

function MyFooter() {
  return (
    <Footer className='footer' style={{ textAlign: 'center' }}>
      <h3>Crowdfunding - Copyright &copy; Raj Darje 2023, All Rights Reserved</h3>
    </Footer>
  );
}

export default MyFooter;
