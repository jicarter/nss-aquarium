
export const Location = (location) => {
    return `
        <section class="location card">
            <div><img  class="location__image image--card" src="${location.image}" /></div>
            <div class="location__name">${location.name}</div>
            <div class="location__url"> <a href=${location.url}target="_blank" rel="noopener noreferrer"> LEARN MORE HERE</a></div>
            <div class="location__description">${location.description}</div>
        </section>
    `
}