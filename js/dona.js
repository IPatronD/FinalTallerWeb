/**
 * Configures the donation section with QR and BCP toggles
 */
function setupDonacion() {
    // Exit if donation container doesn't exist
    if (!document.querySelector('.contenedor-donacion')) return;

    // Get elements
    const enlaceQR = document.getElementById('verQR');
    const enlaceBCP = document.getElementById('verBCP');
    const contenedorQR = document.getElementById('contenedorQR');
    const contenedorBCP = document.getElementById('contenedorBCP');

    /**
     * Toggles visibility of containers and updates link text
     * @param {HTMLElement} contenedorMostrar - Container to show/hide
     * @param {HTMLElement} contenedorOcultar - Container to hide
     * @param {HTMLElement} enlace - Link element to update text
     * @param {string} textoMostrar - Text to show when hidden
     * @param {string} textoOcultar - Text to show when visible
     */
    function toggleContenedor(contenedorMostrar, contenedorOcultar, enlace, textoMostrar, textoOcultar) {
        const isActive = contenedorMostrar.classList.contains('activo');

        // Toggle current container
        contenedorMostrar.classList.toggle('activo');
        enlace.textContent = isActive ? textoMostrar : textoOcultar;

        // Hide other container if active
        if (contenedorOcultar.classList.contains('activo')) {
            contenedorOcultar.classList.remove('activo');
            // Reset other link text
            if (enlace === enlaceQR) {
                enlaceBCP.textContent = 'Ver detalles';
            }
            if (enlace === enlaceBCP) {
                enlaceQR.textContent = 'Ver código QR';
            }
        }
    }

    // Set up QR link event
    if (enlaceQR && contenedorQR) {
        enlaceQR.addEventListener('click', function (e) {
            e.preventDefault();
            toggleContenedor(
                contenedorQR,
                contenedorBCP,
                enlaceQR,
                'Ver código QR',
                'Ocultar código QR'
            );
        });
    }

    // Set up BCP link event
    if (enlaceBCP && contenedorBCP) {
        enlaceBCP.addEventListener('click', function (e) {
            e.preventDefault();
            toggleContenedor(
                contenedorBCP,
                contenedorQR,
                enlaceBCP,
                'Ver detalles',
                'Ocultar detalles'
            );
        });
    }
}

// Initialize the donation section when DOM is loaded
document.addEventListener('DOMContentLoaded', setupDonacion);