import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import CardUser from './CardUser';
import _ from 'lodash';

class TableSorted extends Component {
  state = {
    column: null,
    data: this.props.employees,
    direction: null,
  };

  handleSort = clickedColumn => () => {
    const { column, data, direction } = this.state;

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: _.sortBy(data, [clickedColumn]),
        direction: 'ascending',
      });

      return;
    }

    this.setState({
      data: data.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending',
    });
  };

  render() {
    const { column, data, direction } = this.state;
    console.log(this.props.id);
    console.log(data);
    return (
      <Table sortable celled fixed>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Summary Cards - Sort by:</Table.HeaderCell>
            <Table.HeaderCell sorted={column === 'firstName' ? direction : null} onClick={this.handleSort('firstName')}>
              First Name
            </Table.HeaderCell>
            <Table.HeaderCell sorted={column === 'lastName' ? direction : null} onClick={this.handleSort('lastName')}>
              Last Name
            </Table.HeaderCell>
            <Table.HeaderCell sorted={column === 'jobTitle' ? direction : null} onClick={this.handleSort('jobTitle')}>
              Job Title
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'startingDate' ? direction : null}
              onClick={this.handleSort('startingDate')}
            >
              Start Date
            </Table.HeaderCell>
            <Table.HeaderCell sorted={column === 'score' ? direction : null} onClick={this.handleSort('score')}>
              Last Eval Score
            </Table.HeaderCell>
            <Table.HeaderCell sorted={column === 'salary' ? direction : null} onClick={this.handleSort('salary')}>
              Salary
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {_.map(
            data,
            ({ firstName, lastName, jobTitle, avatar, startingDate, id, score, salary, address, phone, email }) => (
              <Table.Row key={id}>
                <Table.Cell>
                  <CardUser
                    firstName={firstName}
                    lastName={lastName}
                    jobTitle={jobTitle}
                    avatar={avatar}
                    startingDate={startingDate}
                    score={score}
                    salary={salary}
                    id={id}
                    address={address}
                    phone={phone}
                    email={email}
                  />
                </Table.Cell>
                <Table.Cell>{firstName}</Table.Cell>
                <Table.Cell>{lastName}</Table.Cell>
                <Table.Cell>{jobTitle}</Table.Cell>
                <Table.Cell>{startingDate}</Table.Cell>
                <Table.Cell>{score}</Table.Cell>
                <Table.Cell>{salary}</Table.Cell>
              </Table.Row>
            ),
          )}
        </Table.Body>
      </Table>
    );
  }
}

export default TableSorted;
