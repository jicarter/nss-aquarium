export const Quote = (quote) => {
    return `
        <section class="quote card">
            <div class="quote__text">${quote.text}</div>
            <div class="quote__author">${quote.author}</div>
            </section>
    `
}