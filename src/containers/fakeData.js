import React, { useEffect } from "react";
import { Table, Loader } from "semantic-ui-react";

import { useSelector, useDispatch } from "react-redux";
import { ASYNC_DATA_REQUEST } from "../store/reducers/action";

const TableExampleSelectableRow = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: ASYNC_DATA_REQUEST });
  }, []);

  const state = useSelector(state => state.fetchData);

  return state.loading ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
      }}
    >
      <Loader active inline="centered" size="huge" />
    </div>
  ) : (
    <Table celled selectable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Class</Table.HeaderCell>
          <Table.HeaderCell>Kingdom</Table.HeaderCell>
          <Table.HeaderCell>Genus</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      {state.data.map(data => {
        return (
          <Table.Body key={data.id}>
            <Table.Row>
              <Table.Cell>{data.postID}</Table.Cell>
              <Table.Cell>{data.id}</Table.Cell>
              <Table.Cell>{data.name}</Table.Cell>
              <Table.Cell>{data.email}</Table.Cell>
            </Table.Row>
          </Table.Body>
        );
      })}
    </Table>
  );
};

export default TableExampleSelectableRow;
