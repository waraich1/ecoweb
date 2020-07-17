/* eslint-disable array-callback-return */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { Table, Search } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import axios from "axios";
import Lower from "../../../Helper/Lowercase";
import Included from "../../../Helper/Included";
import Information from "./info-json";
import Strin from "../../../Helper/Strin";
import Capital from "../../../Helper/Capitalize";
import { uuid } from "uuidv4";

class Searchk extends Component {
  constructor() {
    super();

    this.state = {
      search: null,
      magarvey: []
    };
  }

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
    console.log(this.state.taxonomies);
  }

  searchSpace = event => {
    let keyword = event.target.value;
    this.setState({ search: keyword });
  };

  render() {
    const styleInfo = {
      paddingRight: "10px"
    };
    const elementStyle = {
      border: "solid",
      borderRadius: "10px",
      position: "relative",
      left: "10vh",
      height: "3vh",
      width: "20vh",
      marginTop: "5vh",
      marginBottom: "10vh"
    };
    const items = this.state.magarvey
      .filter(data => {
        if (this.state.search == null) return data;
        else if (
          Included(Lower(data.tax.kingdom), Lower(this.state.search)) ||
          Included(Lower(data.tax.genus), Lower(this.state.search)) ||
          Included(Lower(data.tax.species), Lower(this.state.search)) ||
          Included(Lower(Strin(data.name)), Lower(Strin(this.state.search))) ||
          Included(Lower(data.tax.order), Lower(this.state.search)) ||
          Included(Lower(data.tax.class), Lower(this.state.search)) ||
          Included(Lower(data.tax.phylum), Lower(this.state.search))
        ) {
          return data;
        }
      })
      .map(data => (
        <Table.Row key={uuid()}>
          <Table.Cell onClick={() => console.log("genus is clicked")}>
            {Capital(data.tax.genus)}
          </Table.Cell>
          <Table.Cell onClick={() => console.log("species is clicked")}>
            {Capital(data.tax.species)}
          </Table.Cell>
          <Table.Cell onClick={() => console.log("name is clicked")}>
            {data.name}
          </Table.Cell>
          <Table.Cell onClick={() => console.log("order is clicked")}>
            {Capital(data.tax.order)}
          </Table.Cell>
          <Table.Cell onClick={() => console.log("class is clicked")}>
            {Capital(data.tax.class)}
          </Table.Cell>
          <Table.Cell onClick={() => console.log("phylum is clicked")}>
            {Capital(data.tax.phylum)}
          </Table.Cell>
          <Table.Cell onClick={() => console.log("kingdom is clicked")}>
            {Capital(data.tax.kingdom)}
          </Table.Cell>
        </Table.Row>
      ));

    return (
      <>
        <input
          type="text"
          placeholder="Search"
          style={elementStyle}
          onChange={e => this.searchSpace(e)}
        />
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
          <Table.Body>{items}</Table.Body>
        </Table>
      </>
    );
  }
}

export default Searchk;
