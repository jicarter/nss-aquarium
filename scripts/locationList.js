import { useLocation } from './locationDataProvider.js'
import { Location } from './location.js'

export const locationList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".location")
    const allTheLocations = useLocation()

    for (const locationObject of allTheLocations) {
    
        const locationHTML = Location(locationObject)
    
    // Add to the existing HTML in the content element
    contentElement.innerHTML += locationHTML
        
    }  
}
