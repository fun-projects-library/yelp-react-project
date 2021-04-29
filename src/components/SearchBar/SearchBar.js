import React, { Component } from 'react'
import "./SearchBar.css"

export default class SearchBar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            term: '',
            location: '',
            sortBy:'best_match',
        
             
        }

        this.sortByOptions={
            "Best Match": "best_match",
            "Highest Rated": "raiting",
            "Most Reviewed": "review_count"
        }
    }
    

    
      
    renderSortByOptions(){
        return Object.keys(this.sortByOptions).map(sortByOption=>{
                const sortByOptionValue=this.sortByOptions[sortByOption]
                return <li className={this.getSortByClass(sortByOptionValue)} 
                key={sortByOptionValue} onClick={this.handleSortByChange.bind( this, sortByOptionValue)}>{sortByOption}</li>
        })
    }
    
    getSortByClass=(sortByOption)=>{
            if (this.state.sortBy === sortByOption){
                return 'active'
            } else { return '' }

    }

    handleSortByChange=(sortByOption)=>{
            this.setState({
                sortBy: sortByOption

            })

    }
    handleTermChange=(e)=>{
        this.setState({
            term: e.target.value
        })
    }
    handleLocationChange=(e)=>{
            this.setState({
                location: e.target.value
            })
    }
    HandleSearch =(e)=>{
        this.props.searchYelp(this.state.term,this.state.location,this.state.sortBy)
        e.preventDefault()
    }


    render() {
    return (
        <div className="SearchBar">
            <div className="SearchBar-sort-options">
                <ul>
                    {this.renderSortByOptions()}
                </ul>
            </div>
            <div className="SearchBar-fields">
                <input onChange={this.handleTermChange} placeholder="Search Businesses" />
                <input onChange={this.handleLocationChange} placeholder="Where?" />
            </div>
            <div className="SearchBar-submit">
                <a href='www.#.com' onClick={this.HandleSearch}>Let's Go</a>
            </div>
        </div>
        )
    }
}