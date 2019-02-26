import React, { Component } from 'react'


export default class Filter extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Kevin'
    }
  }


  cities() {


    var { cities } = this.props.globalState.populateFormsData
    return cities.map((item) => {
      return (
        <option key={item} value={item}>{item}</option>
      )
    })

  }

  homeTypes() {
    var { homeTypes } = this.props.globalState.populateFormsData

    return homeTypes.map((item) => {
      return (
        <option key={item} value={item}>{item}</option>
      )
    })
  }

  bedrooms() {
    var { bedrooms } = this.props.globalState.populateFormsData

    return bedrooms.map((item) => {
      return (
        <option key={item} value={item}>{item}+ BR</option>
      )
    })
  }

  baths() {
    var { baths } = this.props.globalState.populateFormsData
    console.log(baths);
    return baths.map((item) => {
      return (
        <option key={item} value={item}>{item}+ Bath</option>
      )
    })
  }

  min_price() {
    var { min_price_bank } = this.props.globalState
    return min_price_bank.map((price) => {
      return (
            <option key={price} value={price}> +{price}</option>
      )
    })
  }

  max_price() {
    var { max_price_bank } = this.props.globalState
    return max_price_bank.map((price) => {
      return (
            <option key={price} value={price}> +{price}</option>
      )
    })
  }
  


  render() {
    // console.log('Render ----Filter----- ')
    // min_price()
    return (<section id="filter">
      <div className="inside-filter">
        {/* <h4>Filter</h4> */}
        
        <select name="city" className="filters city" onChange={this.props.change}>
          <option value="All">City</option>
          {this.cities()}
        </select>
        
        <select name="homeType" className="filters homeType" onChange={this.props.change}>
          <option value="All">Home Type</option>
          {this.homeTypes()}

        </select>
        
        <select name="bedrooms" className="filters bedrooms" onChange={this.props.change}>
        <option value="0">Beds</option>
          {this.bedrooms()}

        </select>
        
        <select name="baths" className="filters bathrooms" onChange={this.props.change}>
          {this.baths()}
          <option value="0">Baths</option>
        </select>

        
        <select name="min_price" className="min_price" onChange={this.props.change}>
        <option value="0">Min Price</option>
          {this.min_price()}
        </select>
        
        
        <select name="max_price" className="max_price" onChange={this.props.change}>
        <option value="1000000">Max Price</option>
        {this.max_price()}
        </select>

        {/* <div className="filters price">
          <span className="title">Price</span>
          <input type="text" name="min_price" className="min-price" onChange={this.props.change} value={this.props.globalState.min_price} />
          <input type="text" name="max_price" className="max-price" onChange={this.props.change} value={this.props.globalState.max_price} />
        </div> */}
        {/* <div className="filters floor-space">
          <span className="title">Floor Space</span>
          <input type="text" name="min_floor_space" className="min-floor-space" onChange={this.props.change} value={this.props.globalState.min_floor_space} />
          <input type="text" name="max_floor_space" className="max-floor-space" onChange={this.props.change} value={this.props.globalState.max_floor_space} />
        </div> */}
       

      </div>
    </section>)
  }
}

