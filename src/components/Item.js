import React from "react";
import PropTypes from "prop-types";
import { Card, Image } from "antd";
import MyContext from "../context/index";
import { helper } from "../helpers/common";

ViewResultFootball.propTypes = {};

function ViewResultFootball(props) {
  return (
    <MyContext.Consumer>
      {(context) => {
        // neu context.football la chuoi rong- context.football trong state
        console.log(context);
        if (helper.isEmptyObject(context.football)) {
          return <h3>Not found data!</h3>;
        } else {
          return (
            <>
              {context.football.map((item, index) => (
                <Card
                  title={item.group}
                  key={index}
                  style={{ marginTop: "20px" }}
                >
                  <table width="100%" border="0" cellSpacing="0" cellPadding="">
                    <thead>
                      <tr>
                        <th align="left">#</th>
                        <th align="left">Logo</th>
                        <th align="left">Name</th>
                        <th align="left">+/-</th>
                        <th align="left">Points</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td align="left">{item.rank}</td>
                        <td align="left">
                          <Image width={50} src={item.logo} />
                        </td>
                        <td align="left">{item.team_name}</td>
                        <td align="left">{item.goals_diff}</td>
                        <td align="left">{item.points}</td>
                      </tr>
                    </tbody>
                  </table>
                </Card>
              ))}
            </>
          );
        }
      }}
    </MyContext.Consumer>
  );
}

export default ViewResultFootball;
