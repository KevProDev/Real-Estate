import React, { Component} from 'react'


export default class Listings extends Component {
  constructor () {
    super()
    this.state = {
    }
    this.loopListings = this.loopListings.bind(this)
    this.modalFunction = this.modalFunction.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  loopListings () {



    var {listingsData} = this.props

    if(listingsData == undefined || listingsData.length == 0 ){
      return "sorry your filter did not match any listing"
    }

    return listingsData.map((listing, index) => {
      if(this.props.globalState.view == 'box') {
        // This is the box view
        return <div className="col-md-3" key={index}>
            <div className="listings">
              <div className="listing-img" style={{ background: `url('${listing.image}') no-repeat center center`, backgroundSize: `cover` }}>
                <div className="listing-lower-third">
                  <h5 className="address">{listing.address}</h5>
                  <h5 className="address">{listing.city}, {listing.state} {listing.zipCode}</h5>
                </div>
              </div>
              <div className="bottom-info">
                <div>
                      <span className="price">${listing.price}</span>
                      <div className="home-info">
                        <span>{listing.rooms} Beds</span>
                        {` | `} 
                        <span>{listing.baths} Baths</span>
                        {` | `}
                        <span>{listing.floorSpace} sqft</span>
                      </div>
                </div>
                <div>
                  <button className="view-btn">View Details</button>
                </div>
              </div>
            </div>
          </div>;
      } else {

        // This is the long view
        return <div className="col-md-12 col-lg-6" key={index}>
            <div className="listings">
              <div className="listing-img" style={{ background: `url('${listing.image}') no-repeat center center`, backgroundSize: `cover`  }}>
                <div className="listing-lower-third">
                  <h5 className="address">{listing.address}</h5>
                  <h5 className="address">{listing.city}, {listing.state} {listing.zipCode}</h5>
                </div>
              </div>
              <div className="bottom-info">
                <div>
                      <span className="price">${listing.price}</span>
                      <div className="home-info">
                        <span>{listing.rooms} Beds</span>
                        {` | `} 
                        <span>{listing.baths} Baths</span>
                        {` | `}
                        <span>{listing.floorSpace} sqft</span>
                      </div>
                </div>
                <div>
                  <button className="view-btn">View Details</button>
                </div>
              </div>
            </div>
          </div>;
      }

    })
  }

  modalFunction(e) {
    e.preventDefault();
    var modalElement = e.target.nextElementSibling;
    modalElement.style.display = 'block';
    console.log(modalElement)
  }

  closeModal(e){
    e.target.parentElement.parentElement.style.display = 'none'
  }

  render () {
    return (<section id="listings">
      <section className="search-area">
        <input type="text" name="search" onChange={this.props.change} />
      </section>
      
      <section className="sortby-area">
        <div className="results">
          {this.props.globalState.filteredData.length} results found
        </div>
        <div className="sort-option">
          <select name="sortby" className="sortby" onChange={this.props.change} >
            <option value="price-dsc">Lowerest Price</option>
            <option value="price-asc">Hishest Price</option>
          </select>
          <div className="view">
            <i className="fas fa-th-list" onClick={this.props.changeView.bind(null, "long")} ></i>
            <i className="fas fa-th" onClick={this.props.changeView.bind(null, "box")} ></i>
          </div>
        </div>
      </section>

      <section className="listing-results">
      <div className="row">
        {this.loopListings()}
      </div>
      </section>

      <section id="pagination">
        
          <ul className="pages">
            <li>Prev</li>
            <li className="active">1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>Next</li>
          </ul>
      </section>
    </section>)
  }
}

