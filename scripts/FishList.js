import { useFish } from './fishDataProvider.js'
import { Fish } from './fish.js'

export const FishList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".fishList")
    const allTheFish = useFish()

    for (const fishObject of allTheFish) {
    
        const fishHTML = Fish(fishObject)
    
    // Add to the existing HTML in the content element
    contentElement.innerHTML += fishHTML
        
    }  
}
