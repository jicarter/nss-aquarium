import { useTip } from './tipDataProvider.js'
import { Tip } from './tips.js'


export const tipList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".tip")
    const allTheTips = useTip()

    for (const tipObject of allTheTips) {
    
        const tipHTML = Tip(tipObject)
    
    // Add to the existing HTML in the content element
    contentElement.innerHTML += tipHTML
        
    }  
}
