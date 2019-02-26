import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Router, Switch, Link } from 'react-router-dom'
import { HashRouter,Route} from 'react-router-dom'
import Header from './Header.js'
import Filter from './Filter.js'
import Listings from './Listings.js'
import listingsData from './data/listingsData.js'

class App extends Component {
  constructor () {
    super()
    this.state = {
      listingsData: listingsData,
      city: 'All',
      homeType: 'All',
      bedrooms: 0,
      baths: 0,
      min_price: 100000,
      max_price: 900000,
      min_price_bank: [200000,350000,450000,600000,650000,750000],
      max_price_bank: [800000,60000,400000,200000],
      min_floor_space:0,
      max_floor_space: 10000,
      finish_basement: true,
      gym: true,
      swimming_pool: '',
      fireplace: '',
      gym: '',
      filteredData: listingsData,
      populateFormsData:'First Wave',
      sortby: 'price-dsc',
      view: 'long',
      search: ''
    }


    this.change = this.change.bind(this)
    this.filteredData = this.filteredData.bind(this)
    this.componentWillMount = this.componentWillMount.bind(this)
    this.changeView = this.changeView.bind(this)
  }

  change(event) {
    var name = event.target.name
    var value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value

    this.setState({
      [name]: value
    }, () => {
      // console.log(this.state)
      this.filteredData()
    })
  }

  changeView(viewName){
    this.setState({
      view: viewName
    })
  }

  filteredData(){
    var newData = this.state.listingsData.filter((item) => {
      return item.price >= this.state.min_price && item.price <= this.state.max_price && item.floorSpace >= this.state.min_floor_space && item.floorSpace <= this.state.max_floor_space && item.rooms >= this.state.bedrooms && item.baths >= this.state.baths
    })

    if(this.state.city != "All") {
      newData = newData.filter((item) => {
        return item.city == this.state.city
      })
    }

    if(this.state.homeType != "All") {
      newData = newData.filter((item) => {
        return item.homeType == this.state.homeType
      })
    }

    if(this.state.sortby == "price-dsc"){
      newData = newData.sort((a, b) => {
        return a.price - b.price
      })
    } 
    
    if(this.state.sortby == "price-asc") {
      newData = newData.sort((a, b) => {
        return b.price - a.price
      })
    }

    if(this.state.swimming_pool == true) {
      newData = newData.filter((item) => {
        return item.swimmingPool == this.state.swimming_pool
      })
    }

    if(this.state.fireplace == true) {
      newData = newData.filter((item) => {
        return item.fireplace == this.state.fireplace
      })
    }

    if(this.state.gym == true) {
      newData = newData.filter((item) => {
        return item.gym == this.state.gym
      })
    }

    if(this.state.search != ''){
      newData = newData.filter((item) => {
        var city = item.city.toLocaleLowerCase()
        var searchText = this.state.search.toLocaleLowerCase()
        
        var n = city.match(searchText)

        if(n != null) {
          return true
        }
      })
    }

    this.setState({
      filteredData: newData
    })
  }



  componentWillMount(){

    var listingsData = this.state.listingsData.sort((a, b) => {
      return a.price - b.price
    })

    this.setState({
      listingsData
    })


    // *******************************************

    // City
    var cities = this.state.listingsData.map((item) => {
      return item.city
    })
    // put every item into an object
    cities = new Set(cities)
    // spread out every item into an array
    cities = [...cities]
    cities = cities.sort()

    // HomeType
    var homeTypes = this.state.listingsData.map((item) => {
      return item.homeType
    })

    homeTypes = new Set(homeTypes)
    homeTypes = [...homeTypes]
    homeTypes = homeTypes.sort()


    //Bedrooms
    var bedrooms = this.state.listingsData.map((item) => {
      return item.rooms
    })

    bedrooms = new Set(bedrooms)
    bedrooms = [...bedrooms]
    bedrooms = bedrooms.sort()

    //baths
    var baths = this.state.listingsData.map((item) => {
      return item.baths
    })

    baths = new Set(baths)
    baths = [...baths]
    baths = baths.sort()


    // //Prices
    // var priceRange = this.state.min_price.map((item) => {
    //   return item.priceRange
    // })

    // priceRange = new Set(priceRange)
    // priceRange = [...priceRange]
    // priceRange = priceRange.sort()


    // console.log("my fuction mount has started")
    this.setState({
      populateFormsData: {
        homeTypes,
        bedrooms,
        cities,
        baths
      }  
    })
    
  }

  render () {
    return (
      <div>
        <Header />
        <section id="content-area">
          <Filter  change={this.change} globalState={this.state} populateAction={this.componentWillMount}/>
          <Listings listingsData={this.state.filteredData} change={this.change} globalState={this.state} changeView={this.changeView} />
        </section>
      </div>
    )
  }
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)
