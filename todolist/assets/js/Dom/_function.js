export const el = (selector) => {
    const element = document.querySelector(`${selector}`);
    if (!element)
        throw new Error("Selector Not Valid");
    return element;
};
export const elAll = (selector) => {
    const element = document.querySelectorAll(`${selector}`);
    if (!element)
        throw new Error("Selector Not Valid");
    return element;
};
export const event = (selector, event, listenner) => {
    return function () {
        const elements = Array.from(elAll(selector));
        elements.map((element) => element.addEventListener(event, listenner));
    };
};
