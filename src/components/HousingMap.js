import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const HousingMap = (props) => {
    return (
        <div className= "mapContainer">
            <GoogleMapReact className= "map">
            <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />

            </GoogleMapReact>
        
    
        </div>
    )
}

export default HousingMap
