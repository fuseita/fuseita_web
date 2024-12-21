import React from 'react';
import { App, Col, Row, Typography } from 'antd';

const { Title, Paragraph, Text, Link } = Typography;

const IntroPage = () => {
  return (
    <Row justify="center">
      <Col span={12}>
        <Typography>
          <Title>浮砂塔工作室 Fuseita Studio</Title>
          <Paragraph>
            走走<Text delete>絕不可能</Text>「舌燦蓮花」「坑殺拐賣顧客」的！
          </Paragraph>

          <Title level={2}>誰是走走？</Title>
          <Paragraph>
            走走是我家老闆，他從不壓榨員工。我是不知道，反正這是他半夜打電話要我這樣寫的。
          </Paragraph>

          <Title level={2}>我們是誰？</Title>
          <Paragraph>
            我們是<Text delete>一群被壓榨的血汗勞工</Text>，這一切都是走走的陰謀！
          </Paragraph>

          <Title level={2}>成功案例</Title>
          <Paragraph>
            <ul>
              <li>
                <Link href="#">待續...</Link>
              </li>
            </ul>
          </Paragraph>
        </Typography>
      </Col>
    </Row>
  );
};

const MyApp = () => (
  <App>
    <IntroPage />
  </App>
);

export default MyApp;
