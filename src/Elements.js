import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class Elements extends Component {
  constructor(props) {
    super(props);

    this.state = {
      elements : null
    };
  }
  componentDidMount() {
    fetch("/api/aerostat_collection/elements")
      .then( res => res.json() )
      .then( elements => {
      	elements.map((element) => {
        	return element.fields.map((field) =>{
        	  switch(field.variable_name) {
        	    default:
        	      element[field.variable_name] = field.value;
        	      break;
        	  }
        	});
        });
        this.setState({ elements });
      });
  }

  render() {
    return (
    	<div>
      		<h2 className='has-text-centered'>This is a demo rendering all the items of the Elements collection with Angular</h2>
      		{
      			(this.state.elements) ? (
      				this.state.elements.map((element, index) => {
      					if(index % 4 === 0) {
      						return <div className="columns" key={ index }>
      						{
      							[index, index + 1, index + 2, index + 3].map((el, i) => {
      								return <Link to={ "/element/" + this.state.elements[el].id.toString() } className="column is-3 element" key={ i }>
      									<div className="card">
      										<div className="card-image">
      											<figure className="image">
      												<img src={ this.state.elements[el].image[0].thumbnail_url } alt={ this.state.elements[el].image[0].file_name }/>
      											</figure>
      										</div>
      										<div className="card-content">
      											<div className="media-content">
      												<p className="title is-4">{ this.state.elements[el].name }</p>
      											</div>
      										</div>
      									</div>
      								</Link>
      							})
      						}
      						</div>
      					}
      				})
      			) : null
      		}
      	</div>
    );
  }
}

export default Elements;
