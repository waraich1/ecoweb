import React from "react";
import { Table } from "semantic-ui-react";

const TableExampleSingleLine = () => (
  <Table singleLine style={{ margin: "0em 0" }}>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell style={{ background: "#E5E5E5" }}>
          Name
        </Table.HeaderCell>
        <Table.HeaderCell style={{ background: "#E5E5E5" }}>
          Registration Date
        </Table.HeaderCell>
        <Table.HeaderCell style={{ background: "#E5E5E5" }}>
          E-mail address
        </Table.HeaderCell>
        <Table.HeaderCell style={{ background: "#E5E5E5" }}>
          Premium Plan
        </Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>John Lilki</Table.Cell>
        <Table.Cell>September 14, 2013</Table.Cell>
        <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
        <Table.Cell>No</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jamie Harington</Table.Cell>
        <Table.Cell>January 11, 2014</Table.Cell>
        <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
        <Table.Cell>Yes</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jill Lewis</Table.Cell>
        <Table.Cell>May 11, 2014</Table.Cell>
        <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
        <Table.Cell>Yes</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);

export default TableExampleSingleLine;
