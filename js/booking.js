/**
 * Veloura Premium Booking — WhatsApp appointment flow
 * No backend: validates form, builds structured message, opens wa.me.
 * See BOOKING_SYSTEM.md and BOOKING_FORM_SUBMISSION_FIX.md
 */
(function ($) {
    "use strict";

    /**
     * Veloura brand: central booking config — keep in sync with WHATSAPP_INTEGRATION.md float button.
     */
    var BOOKING_CONFIG = {
        whatsappNumber: "2348112711466",
        salonName: "Veloura Beauty Studio",
        messageIntro:
            "Hello Veloura Beauty Studio, I would like to reserve an appointment."
    };

    /**
     * Map URL (?service= query param) slug to dropdown value for deep links from service cards.
     */
    var SERVICE_SLUG_MAP = {
        "bridal-glam": "bridal-glam",
        "frontal-install": "frontal-install",
        "signature-nails": "signature-nails",
        "luxury-facial": "luxury-facial",
        "event-makeup": "event-makeup"
    };

    /**
     * Read booking field values from a form (name attributes are shared on index + contact).
     */
    function getFormData(form) {
        var serviceEl = form.querySelector("[name='booking-service']");
        var dateEl = form.querySelector("[name='booking-date']");
        var timeEl = form.querySelector("[name='booking-time']");
        var stylistEl = form.querySelector("[name='booking-stylist']");
        var notesEl = form.querySelector("[name='booking-notes']");

        return {
            service:
                serviceEl && serviceEl.value
                    ? serviceEl.options[serviceEl.selectedIndex].text
                    : "",
            serviceValue: serviceEl ? serviceEl.value : "",
            date: dateEl ? dateEl.value : "",
            time:
                timeEl && timeEl.value
                    ? timeEl.options[timeEl.selectedIndex].text
                    : "",
            timeValue: timeEl ? timeEl.value : "",
            stylist:
                stylistEl && stylistEl.selectedIndex >= 0
                    ? stylistEl.options[stylistEl.selectedIndex].text
                    : "",
            stylistValue: stylistEl ? stylistEl.value : "",
            notes: notesEl ? notesEl.value.trim() : ""
        };
    }

    /**
     * Build a structured WhatsApp message from submitted booking details.
     */
    function buildWhatsAppMessage(data) {
        var stylistLine =
            data.stylistValue && data.stylistValue !== "no-preference"
                ? data.stylist
                : "No preference";

        return [
            BOOKING_CONFIG.messageIntro,
            "",
            "Service: " + data.service,
            "Preferred Date: " + formatDisplayDate(data.date),
            "Preferred Time: " + data.time,
            "Stylist Preference: " + stylistLine,
            "Notes: " + (data.notes || "None")
        ].join("\n");
    }

    /**
     * Format YYYY-MM-DD for display in WhatsApp (e.g. Saturday, 17 May 2026).
     */
    function formatDisplayDate(isoDate) {
        if (!isoDate) {
            return "";
        }
        var parts = isoDate.split("-");
        if (parts.length !== 3) {
            return isoDate;
        }
        var d = new Date(
            parseInt(parts[0], 10),
            parseInt(parts[1], 10) - 1,
            parseInt(parts[2], 10)
        );
        if (isNaN(d.getTime())) {
            return isoDate;
        }
        return d.toLocaleDateString("en-NG", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        });
    }

    /**
     * Compose wa.me URL with encodeURIComponent pre-filled message.
     */
    function buildWhatsAppUrl(message) {
        return (
            "https://wa.me/" +
            BOOKING_CONFIG.whatsappNumber +
            "?text=" +
            encodeURIComponent(message)
        );
    }

    /**
     * Set minimum date on date inputs to today (local timezone).
     */
    function setMinBookingDate(form) {
        var dateInput = form.querySelector("[name='booking-date']");
        if (!dateInput) {
            return;
        }
        var today = new Date();
        var month = String(today.getMonth() + 1).padStart(2, "0");
        var day = String(today.getDate()).padStart(2, "0");
        dateInput.min = today.getFullYear() + "-" + month + "-" + day;
    }

    /**
     * Apply ?service= query param to pre-select service when present.
     */
    function applyServiceFromQuery(form) {
        var params = new URLSearchParams(window.location.search);
        var slug = params.get("service");
        if (!slug || !SERVICE_SLUG_MAP[slug]) {
            return;
        }
        var select = form.querySelector("[name='booking-service']");
        if (select) {
            select.value = SERVICE_SLUG_MAP[slug];
        }
    }

    /**
     * Clear field-level error state.
     */
    function clearErrors(form) {
        form.querySelectorAll(".booking-field--error").forEach(function (el) {
            el.classList.remove("booking-field--error");
        });
        form.querySelectorAll(".booking-field-error").forEach(function (el) {
            el.textContent = "";
            el.hidden = true;
        });
        var alert = form.querySelector(".booking-form-alert");
        if (alert) {
            alert.hidden = true;
            alert.textContent = "";
        }
    }

    /**
     * Mark a field invalid and show message for screen readers.
     */
    function setFieldError(form, fieldName, message) {
        var field = form.querySelector("[data-booking-field='" + fieldName + "']");
        if (!field) {
            return;
        }
        field.classList.add("booking-field--error");
        var errorEl = form.querySelector("[data-booking-error='" + fieldName + "']");
        if (errorEl) {
            errorEl.textContent = message;
            errorEl.hidden = false;
        }
    }

    /**
     * Validate required booking fields before WhatsApp handoff.
     */
    function validateForm(form, data) {
        var valid = true;

        if (!data.serviceValue) {
            setFieldError(form, "service", "Please select a service.");
            valid = false;
        }
        if (!data.date) {
            setFieldError(form, "date", "Please choose your preferred date.");
            valid = false;
        } else {
            var selected = new Date(data.date + "T00:00:00");
            var today = new Date();
            today.setHours(0, 0, 0, 0);
            if (selected < today) {
                setFieldError(form, "date", "Please choose today or a future date.");
                valid = false;
            }
        }
        if (!data.timeValue) {
            setFieldError(form, "time", "Please select a preferred time.");
            valid = false;
        }

        return valid;
    }

    /**
     * Submit handler: preventDefault stops page reload; valid requests open WhatsApp.
     */
    function handleSubmit(event) {
        event.preventDefault();

        var form = event.currentTarget;
        clearErrors(form);

        var data = getFormData(form);
        if (!validateForm(form, data)) {
            var alert = form.querySelector(".booking-form-alert");
            if (alert) {
                alert.hidden = false;
                alert.textContent =
                    "Please complete the required fields below to continue on WhatsApp.";
            }
            var firstError = form.querySelector(
                ".booking-field--error input, .booking-field--error select, .booking-field--error textarea"
            );
            if (firstError) {
                firstError.focus();
            }
            return;
        }

        var url = buildWhatsAppUrl(buildWhatsAppMessage(data));
        window.open(url, "_blank", "noopener,noreferrer");

        var success = form.querySelector(".booking-form-success");
        if (success) {
            success.hidden = false;
        }
    }

    /**
     * Wire one booking form instance (selector: [data-booking-form]).
     */
    function initBookingForm(form) {
        setMinBookingDate(form);
        applyServiceFromQuery(form);
        form.addEventListener("submit", handleSubmit);

        form.querySelectorAll("input, select, textarea").forEach(function (el) {
            function clearFieldError() {
                var wrap = el.closest("[data-booking-field]");
                if (wrap) {
                    wrap.classList.remove("booking-field--error");
                }
            }
            el.addEventListener("input", clearFieldError);
            el.addEventListener("change", clearFieldError);
        });
    }

    /**
     * Initialize all booking forms on the page; no-op if none exist.
     */
    function initAllBookingForms() {
        var forms = document.querySelectorAll("[data-booking-form]");
        if (!forms.length) {
            return;
        }
        forms.forEach(initBookingForm);
    }

    $(function () {
        initAllBookingForms();
    });
})(jQuery);
