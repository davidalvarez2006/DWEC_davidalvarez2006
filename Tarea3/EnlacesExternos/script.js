const enlacesExternos = document.querySelectorAll('a[href*="://"]');

enlacesExternos.forEach((enlace) => {
    enlace.classList.add('externo');
});
