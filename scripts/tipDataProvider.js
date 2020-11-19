const tipCollection = [
    {
        text: 'Wash hands thoroughly after handling fish!'
    }

    ,
    {
        text: 'Only feed fish from their diet!'
    }

]

export function useTip() {
    return tipCollection.slice()
}