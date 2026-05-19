/**
 * Transform Gallery — category filters only.
 * Before/after cards use static paired images (no compare slider).
 * See BEFORE_AFTER_GALLERY_FIX.md
 */
(function ($) {
    "use strict";

    function initGalleryFilters() {
        var section = document.querySelector(".transform-gallery--premium");
        if (!section) {
            return;
        }

        var filters = section.querySelectorAll("[data-gallery-filter]");
        var items = section.querySelectorAll("[data-gallery-category]");

        filters.forEach(function (btn) {
            btn.addEventListener("click", function () {
                var category = btn.getAttribute("data-gallery-filter");

                filters.forEach(function (b) {
                    b.classList.remove("active");
                    b.setAttribute("aria-pressed", "false");
                });
                btn.classList.add("active");
                btn.setAttribute("aria-pressed", "true");

                items.forEach(function (item) {
                    var match =
                        category === "all" ||
                        item.getAttribute("data-gallery-category") === category;
                    item.classList.toggle("is-hidden", !match);
                });
            });
        });
    }

    $(function () {
        if ($(".transform-gallery--premium").length) {
            initGalleryFilters();
        }
    });
})(jQuery);
