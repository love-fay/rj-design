export const createDemoIframe = (src) => {
    let iframe = document.createElement('iframe');
    iframe.style.border = '0';
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.src = src;
    return iframe;
};