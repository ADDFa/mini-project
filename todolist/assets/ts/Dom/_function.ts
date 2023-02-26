export const el = (selector: string | undefined): HTMLElement => {
    const element = document.querySelector(`${selector}`)
    if (!element) throw new Error("Selector Not Valid")

    return element as HTMLElement
}

export const elAll = (selector: string | undefined): NodeList => {
    const element = document.querySelectorAll(`${selector}`)
    if (!element) throw new Error("Selector Not Valid")

    return element
}

export const event = (
    selector: string | undefined,
    event: keyof DocumentEventMap,
    listenner: EventListenerOrEventListenerObject
) => {
    return function () {
        const elements = Array.from(elAll(selector))
        elements.map((element) => element.addEventListener(event, listenner))
    }
}
