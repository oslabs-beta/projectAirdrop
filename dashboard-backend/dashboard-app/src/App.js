import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Row, Col, Card, Layout, Spin, Statistic, Table } from "antd";
import "antd/dist/antd.css";
import "./index.css";
import cubejs from "@cubejs-client/core";
import { QueryRenderer } from "@cubejs-client/react";

const AppLayout = ({ children }) => (
  <Layout>
    <Layout.Header>
      <div
        style={{
          float: "left"
        }}
      >
        <h2
          style={{
            color: "#fff",
            margin: 0,
            marginRight: "1em"
          }}
        >
          My Dashboard
        </h2>
      </div>
    </Layout.Header>
    <Layout.Content
      style={{
        padding: "0 25px 25px 25px",
        margin: "25px"
      }}
    >
      {children}
    </Layout.Content>
  </Layout>
);

const Dashboard = ({ children }) => (
  <Row type="flex" justify="space-around" align="top" gutter={24}>
    {children}
  </Row>
);

const DashboardItem = ({ children, title }) => (
  <Col span={24} lg={12}>
    <Card
      title={title}
      style={{
        marginBottom: "24px"
      }}
    >
      {children}
    </Card>
  </Col>
);

const numberRender = ({ resultSet }) => (
  <Row
    type="flex"
    justify="center"
    align="middle"
    style={{
      height: "100%"
    }}
  >
    <Col>
      {resultSet.seriesNames().map(s => (
        <Statistic value={resultSet.totalRow()[s.key]} />
      ))}
    </Col>
  </Row>
);

const API_URL = "http://localhost:4000";
const cubejsApi = cubejs(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NjQyNTU3NTgsImV4cCI6MTU2NDM0MjE1OH0.gZvK3uWbjOmKUmAdMOU7AWCdGv-NdUjPqNO96W2NWok",
  {
    apiUrl: API_URL + "/cubejs-api/v1"
  }
);

const renderChart = Component => ({ resultSet, error }) =>
  (resultSet && <Component resultSet={resultSet} />) ||
  (error && error.toString()) || <Spin />;

function App() {
  return (
    <div className="App">
      <AppLayout>
        <Dashboard>
          <DashboardItem>
            <QueryRenderer
              query={{
                measures: [
                  "ImageAndQuestionnaireResponses.count",
                  "Questions.count",
                  "Assessments.count"
                ],
                timeDimensions: [],
                filters: [],
                dimensions: []
              }}
              cubejsApi={cubejsApi}
              render={renderChart(numberRender)}
            />
          </DashboardItem>
        </Dashboard>
      </AppLayout>
    </div>
  );
}

export default App;
