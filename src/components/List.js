import { Col, Row, Skeleton } from "antd";
import React from "react";
import MyContext from "../context/index";
import ViewItem from "./Item";

function ListResultFootball(props) {
  return (
    <Row>
      <Col span={20} offset={2}>
        <h1 style={{ textAlign: "center", margin: "30px 0px" }}>
          Thong tin ket qua vong bang Euro 2020
        </h1>
        <MyContext.Consumer>
          {/* context duoc lay tu file provider value */}
          {(context) => {
            if (context.loading) {
              return <Skeleton active />;
            }
            return <ViewItem />;
          }}
        </MyContext.Consumer>
      </Col>
    </Row>
  );
}

export default ListResultFootball;
