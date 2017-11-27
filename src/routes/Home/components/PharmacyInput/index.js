import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pharmacyInit } from 'store/pharmacyReducer'
import PharmacyResult from '../PharmacyResult'

class PharmacyInput extends Component {

    constructor() {
        super();

        this.state = {
            city: ""
        }

    }

    cityChanged(e) {
        this.setState({
            city : e.target.value
        })
    }


    getPharmacy(){
        // http Call
        console.log(this.state)
        const pharmacy = {
            name: "eczane adı",
            adres: "Aşıkpaşa Mah.",
            telefon: "+905072293584"
        }

        this.props.pharmacyData(pharmacy);
    }
    

    render() {
        
        if (!this.props.pharmacyResponse.name) {

            return (
                <div>
                    <form className="form-inline">
                        <div className="form-group mx-sm-3">
                            <input type="text" className="form-control" onChange={this.cityChanged.bind(this)} value={this.state.city} placeholder="Şehir adı yazın" />
                        </div>
                        <button type="button" className="btn btn-primary search-btn" onClick={this.getPharmacy.bind(this)} >Ara</button>
                    </form>
    
    
                </div>
            )
            
        } else {

            return <PharmacyResult />
            
        }

    }
}

const mapStateToProps = (state) => {
    return {
        pharmacyResponse: state.pharmacy
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        pharmacyData: (pharmacy) => dispatch(pharmacyInit(pharmacy))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PharmacyInput);