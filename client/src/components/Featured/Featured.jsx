import { Card, Button, Slider } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';
import { useState } from 'react';

const Featured = () => {
  const [raisedAmount, setRaisedAmount] = useState(0);

  const handleSliderChange = (value) => {
    setRaisedAmount(value);
  };

  const EthereumIcon = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
    extraCommonProps: {
      style: { fontSize: '16px' },
    },
  });

  return (
    <>
      <Card
        style={{ width: 300 }}
        cover={<img alt="Campaign" src="https://via.placeholder.com/300x200" />}
        dark
        className='card sha'
      >
      <div className="head_name">
      <h4>Hospitalization Purpose</h4>
      <div>0x7a...8b15 <EthereumIcon type="icon-ethereum" /></div>
      </div>
        <p><strong>Status:</strong> Expired</p>
        <p><strong>Funds Raised:</strong> {raisedAmount} ETH</p>
        <Slider
          min={0}
          max={1}
          step={0.01}
          defaultValue={0.3}
          onChange={handleSliderChange}
          trackStyle={{ backgroundColor: '#3d2a73' }}
          disabled
        />
        <p><strong>Goal:</strong> 1 ETH</p>
        <p><strong>Backers:</strong> 0</p>
        <Button className='danger' type="primary" disabled>Expired</Button>
      </Card>
    </>
  );
};

export default Featured;
