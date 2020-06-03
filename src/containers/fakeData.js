import React, { Component } from "react";
import { Table } from "semantic-ui-react";
import Axios from "axios";

class TableExampleSelectableRow extends Component {
  state = {
    info: [],
    error: null
  };
  componentDidMount() {
    Axios.get("https://jsonplaceholder.typicode.com/comments").then(
      response => {
        const comments = response.data;
        this.setState({ info: comments });
        console.log(comments);
      }
    );
  }

  render() {
    const rest = this.state.info.map(data => {
      return (
        <Table.Body>
          <Table.Row>
            <Table.Cell>{data.postID}</Table.Cell>
            <Table.Cell>{data.id}</Table.Cell>
            <Table.Cell>{data.name}</Table.Cell>
            <Table.Cell>{data.email}</Table.Cell>
          </Table.Row>
        </Table.Body>
      );
    });
    return (
      <Table celled selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>postID</Table.HeaderCell>
            <Table.HeaderCell>id</Table.HeaderCell>
            <Table.HeaderCell>name</Table.HeaderCell>
            <Table.HeaderCell>email</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        {rest}
      </Table>
    );
  }
}

export default TableExampleSelectableRow;
