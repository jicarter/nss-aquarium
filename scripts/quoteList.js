import { useQuote } from './quoteDataProvider.js'
import { Quote } from './quote.js'

export const quoteList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".quote")
    const allTheQuotes = useQuote()

    for (const quoteObject of allTheQuotes) {
    
        const quoteHTML = Quote(quoteObject)
    
    // Add to the existing HTML in the content element
    contentElement.innerHTML += quoteHTML
        
    }  
}
