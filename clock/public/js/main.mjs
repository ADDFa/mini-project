export const findChildElementByClassName = (parentElement = document.querySelector('body'), className = "") => {
    return Array.from(parentElement.children).find(child => child.className === className)
}