import { mostHolyFish } from './fishDataProvider.js'
import { nonHolyFish } from './fishDataProvider.js'
import { soldierFish } from './fishDataProvider.js'
import { Fish } from './fish.js'


export const FishList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".fishList")
    const holyFish = mostHolyFish()
    const soldiers = soldierFish()
    const losers = nonHolyFish()

    for (const fishObject of holyFish) {
    
        const fishHTML = Fish(fishObject)
    
    // Add to the existing HTML in the content element
    contentElement.innerHTML += fishHTML
        
    }  
    for (const fishObject of soldiers) {
    
        const fishHTML = Fish(fishObject)
    
    // Add to the existing HTML in the content element
    contentElement.innerHTML += fishHTML
        
    }  
    for (const fishObject of losers) {
    
        const fishHTML = Fish(fishObject)
    
    // Add to the existing HTML in the content element
    contentElement.innerHTML += fishHTML
        
    }  
}
