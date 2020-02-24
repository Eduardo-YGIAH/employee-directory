import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import SearchUsers from './SearchUsers';

import _ from 'lodash';

class TableSorted extends Component {
  beforeFilter = () => this.props.employees;
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

  handleInput = e => {
    if (e.target.value) {
      const data = this.beforeFilter();
      let filteredData = data.filter(employee =>
        employee.lastName
          .trim()
          .toLowerCase()
          .includes(e.target.value.trim().toLowerCase()),
      );
      if (e.target.value.length > 1) {
        this.setState({
          data: filteredData,
        });
      } else {
        this.setState({
          data: data,
        });
      }
    }
  };

  render() {
    const { column, data, direction } = this.state;
    return (
      <>
        <SearchUsers handleInput={this.handleInput} />
        <Table sortable celled fixed>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Summary Cards - Sort by:</Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'firstName' ? direction : null}
                onClick={this.handleSort('firstName')}
              >
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
            {_.map(data, ({ firstName, lastName, jobTitle, startingDate, id, score, salary }) => (
              <Table.Row key={id}>
                <Table.Cell>
                  <div className='ui one buttons'>
                    <Link to={`/${id}`}>
                      <Button basic color='green'>
                        View Details
                      </Button>
                    </Link>
                  </div>
                </Table.Cell>
                <Table.Cell>{firstName}</Table.Cell>
                <Table.Cell>{lastName}</Table.Cell>
                <Table.Cell>{jobTitle}</Table.Cell>
                <Table.Cell>{startingDate}</Table.Cell>
                <Table.Cell>{score}</Table.Cell>
                <Table.Cell>{salary}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </>
    );
  }
}

export default TableSorted;
