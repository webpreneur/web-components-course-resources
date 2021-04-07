export const fetchTemplate = async (url) => {
    const res = await fetch(url);
    const text = await res.text();
    const template = document.createElement('template');
    template.innerHTML = text;
    return template.content.cloneNode(true);
}
