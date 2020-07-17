/* eslint-disable no-console */
/* eslint-disable no-dupe-keys */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import { Table } from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css";
import { uuid } from "uuidv4";

import axios from "axios";

class TableExampleSingleLine extends Component {
  state = {
    magarvey: []
  };

  componentDidMount() {
    axios
      .get(
        "https://cactus.magarveylab.ca/api/taxonomy/organization/826b280e-e4bb-11e9-9536-bb9dffaa26fb",
        {
          headers: {
            Authorization: "api_key 708315fffa7b912578867279d3365096"
          }
        }
      )
      .then(res => {
        // eslint-disable-next-line no-console
        console.log(res);
        const info = res.data;
        this.setState({ magarvey: info });
      });
  }

  render() {
    const tbody = this.state.magarvey.map(data => (
      <Table.Row key={uuid()}>
        <Table.Cell onClick={() => console.log("genus is clicked")}>
          {data.tax.genus}
        </Table.Cell>
        <Table.Cell onClick={() => console.log("species is clicked")}>
          {data.tax.species}
        </Table.Cell>
        <Table.Cell onClick={() => console.log("name is clicked")}>
          {data.name}
        </Table.Cell>
        <Table.Cell onClick={() => console.log("order is clicked")}>
          {data.tax.order}
        </Table.Cell>
        <Table.Cell onClick={() => console.log("class is clicked")}>
          {data.tax.class}
        </Table.Cell>
        <Table.Cell onClick={() => console.log("phylum is clicked")}>
          {data.tax.phylum}
        </Table.Cell>
        <Table.Cell onClick={() => console.log("kingdom is clicked")}>
          {data.tax.kingdom}
        </Table.Cell>
      </Table.Row>
    ));
    return (
      <Table singleLine selectable style={{ margin: "0em 0" }}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell
              style={{
                background: "#E5E5E5"
              }}
            >
              Genus
            </Table.HeaderCell>
            <Table.HeaderCell
              style={{
                background: "#E5E5E5"
              }}
            >
              Species
            </Table.HeaderCell>
            <Table.HeaderCell
              style={{
                background: "#E5E5E5"
              }}
            >
              Name
            </Table.HeaderCell>
            <Table.HeaderCell
              style={{
                background: "#E5E5E5"
              }}
            >
              Order
            </Table.HeaderCell>
            <Table.HeaderCell
              style={{
                background: "#E5E5E5"
              }}
            >
              Class
            </Table.HeaderCell>
            <Table.HeaderCell
              style={{
                background: "#E5E5E5"
              }}
            >
              Phylum
            </Table.HeaderCell>
            <Table.HeaderCell
              style={{
                background: "#E5E5E5"
              }}
            >
              Kingdom
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>{tbody}</Table.Body>
      </Table>
    );
  }
}

export default TableExampleSingleLine;
