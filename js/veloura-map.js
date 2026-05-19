/**
 * Veloura map URLs — single source of truth for embed + “Open in Maps” links.
 * Used on index.html and contact.html (#visit). See LOCAL_TRUST_CONTACT.md
 */
(function () {
    "use strict";

    var VELOURA_MAP = {
        addressFull: "14 Admiralty Way, Lekki Phase 1, Lagos, Nigeria",
        embedSrc:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.715!2d3.4722!3d6.4474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf5290466f2d1%3A0xeeb8f13868adbcdd!2sLekki%20Phase%201%2C%20Lagos!5e0!3m2!1sen!2sng!4v1715920000000!5m2!1sen!2sng",
        openHref:
            "https://maps.google.com/?q=14+Admiralty+Way,+Lekki+Phase+1,+Lagos,+Nigeria"
    };

    function applyVelouraMapConfig() {
        document.querySelectorAll("iframe.local-contact-map").forEach(function (iframe) {
            iframe.setAttribute("src", VELOURA_MAP.embedSrc);
        });

        document.querySelectorAll(
            "a.local-contact-map-overlay-link, a.local-contact-cta-visit"
        ).forEach(function (link) {
            link.setAttribute("href", VELOURA_MAP.openHref);
        });

        document.querySelectorAll("a.local-contact-detail-value[href*='maps.google']").forEach(
            function (link) {
                link.setAttribute("href", VELOURA_MAP.openHref);
            }
        );
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", applyVelouraMapConfig);
    } else {
        applyVelouraMapConfig();
    }

    window.VelouraMapConfig = VELOURA_MAP;
})();
