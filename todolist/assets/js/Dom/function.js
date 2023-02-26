export const el = (selector) => {
    const element = document.querySelector(`${selector}`);
    if (!element)
        throw new Error("Selector Not Valid");
    return element;
};
