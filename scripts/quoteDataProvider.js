const quoteCollection = [
    {
        text: 'To boldly go where no man has gone before...',
        author: 'Captain James Tiberius Kirk'
    }
    ,
    
    {
        text: 'To infinity and beyond!!',
        author: 'Buzz Lightyear'
    }
    ,
    
    {
        text: "I'll be you're huckleberry",
        author: 'Doc Holliday'
    }
]

export function useQuote() {
    return quoteCollection.slice()
}