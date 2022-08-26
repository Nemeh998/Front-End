import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './css/search.css'
// import { Search } from './Search';
export class Search extends Component {
 
      render() {
    return (
      <div className="search-container">
              
                <Form onSubmit={this.searchFilter}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="d-block">Search Courses</Form.Label>
              <Form.Control
                type="text"
                placeholder="What you want to learn"
                className="course-search-input"
                name="searchValue"
                value={this.state.searchValue}
                onChange={this.searchChange}
              />
              <input
                type="submit"
                value="Search"
                className="course-search-btn btn btn-success"
              />
            </Form.Group>
          </Form>
          {/* =============================== */}
      
          </div>
    )
  }
}

export default Search