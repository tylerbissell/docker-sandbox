import jmap from 'jmap.js'
import { useEffect, useState } from 'react';

// enum BuildingEndpoints {
//     ANDOVER = "1773",
// }

const host = 'https://api.jibestream.com';
const customerId = 364;
const clientId = '9f6bbd71-c975-407d-8bdd-8a2e9ef04200';
const clientSecret = 'SVVGeNoiE+XduMmn5kppKt0kl2f3bx6Cgcmp4CxDrsM=';
const auth = new jmap.core.Auth(clientId, clientSecret);
const venueId = 1773;//BuildingEndpoints.ANDOVER;

export default function Map(){
    const [jCore, setJCore] = useState();
    const [activeVenue, setVenue] = useState([]);
    
    useEffect(()=>{
        // setJCore(new jmap.core.JCore({ customerId, host, auth }));
        const core = new jmap.core.JCore({ customerId, host, auth })
        core.populateVenueWithDefaultBuilding(venueId, (error, activeVenue) => {
          if (error) throw error
          // Create the view controller
          const controller = new jmap.JController({ activeVenue })
          // Show map
          controller.showDefaultMap()

          
          // This targets '' in the DOM const control = new jmap.JController({ activeVenue, width, height }) // Show map control.showDefaultMap() })
        })

        
    });
      
      // Create an ActiveVenue with the default building using the venue ID
     
      
    return (
        <>
            <MapView data={activeVenue} />
        </>
        
}