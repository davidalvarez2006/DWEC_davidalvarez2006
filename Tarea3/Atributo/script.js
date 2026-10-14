const widget = document.querySelector('[data-widget-name]');
const nombreWidget = widget.getAttribute('data-widget-name');

document.getElementById('resultado').textContent = nombreWidget;
