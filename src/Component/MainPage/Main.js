import React from "react";
import { connect } from "react-redux";

import "./main.css";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        searchedProduct:"",
        searchedPlace:"",
        choosenSearchedProductUl : "",
        choosenSearchedPlaceUl : "",
     };
  }

  setSearchedProductValue = value => {
    this.setState({
        searchedProduct: value
    });
  };

  setSearchedPlaceValue = value => {
    this.setState({
        searchedPlace: value
    });
  }; 


  render() {
    console.log(this.state);
    return (
      <div className="main-container">
        <div className="main-content">
          <div className="main-search">
            <div className="main-search-taitle">Que Recherchez Vous ?</div>
            <div className="main-search-input">
              <div className="main-search-input-section">
                <input
                  type="text"
                  className="input-text"
                  name="searchedProduct"
                  placeholder="Entrez le produit"
                  onChange={(e)=>this.setSearchedProductValue(e.target.value)}
                  value={this.state.searchedProduct}
                />
                <ul className="suggestion-list" style={(this.state.searchedProduct && this.state.searchedProduct !== this.state.choosenSearchedProductUl) ?{display:"block"} : {display:"none"} }>
                {this.props.Categories.filter(el=>el.toLowerCase().indexOf(this.state.searchedProduct.toLowerCase()) !==-1).map((el, i) => <div><a 
                onClick={()=>{this.setSearchedProductValue(el)
                              this.setState({
                                choosenSearchedProductUl : el
                              })  }} href="#"> {el} </a></div>)}
                </ul>
              </div>
              <div className="main-search-input-section">
                <input
                  type="text"
                  className="input-text"
                  name="searchedPlace"
                  placeholder="Emplacement"
                  value={this.state.searchedPlace}
                  onChange={(e)=>this.setSearchedPlaceValue(e.target.value)}
                />
                <ul className="suggestion-list" style={(this.state.searchedPlace && this.state.searchedPlace !== this.state.choosenSearchedPlaceUl) ?{display:"block"} : {display:"none"} }>
                {this.props.Lieux.filter(el=>el.toLowerCase().indexOf(this.state.searchedPlace.toLowerCase()) !==-1).map((el, i) => <div> <a href="#"
                    onClick={()=>{this.setSearchedPlaceValue(el)
                                  this.setState({
                                      choosenSearchedPlaceUl :el
                                  })  }}> {el} </a></div>)}
                </ul>
              </div>
              <input
                type="button"
                className="input-button"
                value="Rechercher"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    Categories: state.Categories,
    Lieux: state.Lieux
  };
};

const mapDispatchToProps = () => {};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
