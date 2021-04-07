export default (() => {

    const _getTemplateFromUrl = async (url) => {
        const htmlText = await _fetchHtmlText(url);
        return _getTemplateNode(htmlText);
    }

    const _fetchHtmlText = async (url) => {
        const res = await fetch(url);
        const text = await res.text();
        return text;
    }

    const _getTemplateNode = (htmlText) => {
        const tmpl = document.createElement('template');
        tmpl.innerHTML = htmlText;
        const tmplClone = tmpl.content.cloneNode(true);
        return tmplClone;
    }

    return async ({ templateUrl, componentClass, tagName }) => {

        const templateNode = await _getTemplateFromUrl(templateUrl);
        componentClass.prototype.templateNode = templateNode;
        window.customElements.define(tagName, componentClass);

    }

})();
