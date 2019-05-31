import React, { Component } from 'react'
import Film from './Film'
import AddMovie from './modal'
import Rating from './star'
import { connect } from "react-redux";
import {getRating} from "./action"

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      minrate: 0,
      movielist: this.props.movielist,
      search :''
    }
  }

  click = (e) => {
    this.setState({
      minrate: e
    })
  }
searching=(e)=>{
  this.setState({search: e.target.value})
}

addNewMovie = ({image, title, description, rating}) => {
  this.setState({
    movielist: this.state.movielist.concat({image, title, description, rating})
  })
}

  render() {
    return (

      <div className="Home">
        <div className="list">
          <div className="header">

            <input type='' placeholder='Type movie name to search' onChange={(e)=>this.searching(e)}/>
            <AddMovie />
            <div className='rating'>
              <p>
                Minimum rating
            </p>

              <div className="star">
                <Rating modifyRating={this.props.getRating} rating={this.props.rating}/>
              </div>
            </div>
          </div>
          <Film list={this.props.movielist
            .filter(el=> el.title.toUpperCase().includes(this.state.search.toUpperCase().trim()) && el.rating>=this.props.rating ) } />
        </div>

      </div>

    )
  }
}


const mapStateToProps =(state)=>({
  movielist: state.movieReducer,
  rating: state.ratingReducer
})
const mapDispatchToProps=(dispatch)=>({
  getRating:payload=>
  dispatch(getRating(payload))
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)