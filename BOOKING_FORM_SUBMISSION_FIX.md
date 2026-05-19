# Booking Form Submission Fix

Fix for Veloura **WhatsApp booking forms** on `index.html` and `contact.html`. Visual styling and HTML structure are unchanged.

**Script:** `js/booking.js`  
**Forms:** `<form class="booking-form" data-booking-form novalidate>`

---

## Why the page was reloading

1. **JavaScript parse error** — `getFormData()` used invalid syntax: em dashes (`—`) where **ternary operators** (`?` / `:`) are required, for example:
   ```javascript
   // Broken (entire booking.js failed to load)
   service: serviceEl — serviceEl.options[...].text : "",
   ```
   When `booking.js` fails to parse, **no `submit` listener runs**, so the browser performs a normal HTML form submit and **reloads the page**.

2. **`event.preventDefault()`** was already in `handleSubmit`, but it never executed because the script never loaded.

---

## How `preventDefault()` fixes the issue

On successful script load, each `[data-booking-form]` gets:

```javascript
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    // validate → build message → window.open(wa.me...)
}
```

That blocks the default GET/POST navigation. The form uses `novalidate` so custom messages show before WhatsApp opens.

---

## Form selectors (confirmed)

| Element | Selector / attribute |
|---------|----------------------|
| Form | `form.booking-form[data-booking-form]` |
| Service | `name="booking-service"` |
| Date | `name="booking-date"` |
| Time | `name="booking-time"` |
| Stylist | `name="booking-stylist"` (optional) |
| Notes | `name="booking-notes"` (optional) |
| Submit | `button[type="submit"].booking-submit` |
| Errors | `[data-booking-field]`, `[data-booking-error]` |
| Alert | `.booking-form-alert` |

Contact page uses the same `name` attributes (different `id`s only).

---

## How form values are collected

`getFormData(form)` uses `form.querySelector("[name='booking-…']")` and reads:

- **Service** — selected option label + `value`
- **Date** — `input[type=date].value` (ISO `YYYY-MM-DD`)
- **Time** — selected option label + `value`
- **Stylist** — selected option label + `value` (defaults to “No preference”)
- **Notes** — trimmed textarea text

---

## How the WhatsApp message is generated

Example output:

```
Hello Veloura Beauty Studio, I would like to reserve an appointment.

Service: Bridal Glam
Preferred Date: Saturday, 17 May 2026
Preferred Time: 2:00 PM
Stylist Preference: No preference
Notes: None
```

Built in `buildWhatsAppMessage()`, then:

```javascript
"https://wa.me/2348112711466?text=" + encodeURIComponent(message)
```

Opened with `window.open(url, "_blank", "noopener,noreferrer")`.

**Number:** `2348112711466` (Veloura WhatsApp — `BOOKING_CONFIG.whatsappNumber`).

---

## How validation is handled

Required before WhatsApp:

| Field | Rule |
|-------|------|
| Service | `booking-service` value must not be empty |
| Date | Required; must be today or later |
| Time | `booking-time` value must not be empty |

On failure:

- Page does **not** reload
- `.booking-form-alert` shows a short summary
- Per-field messages appear in `[data-booking-error]`
- First invalid control receives **focus**

Stylist and notes remain optional.

---

## Safe behavior on pages without a form

`initAllBookingForms()` runs on `$(document).ready` and:

```javascript
var forms = document.querySelectorAll("[data-booking-form]");
if (!forms.length) return;
```

Pages without a booking section (About, Team, etc.) do nothing. No errors, no listeners.

**Script load order:** `booking.js` is included at the bottom of `index.html` and `contact.html` **after** the form markup and jQuery.

---

## Files changed

| File | Change |
|------|--------|
| `js/booking.js` | Fixed ternary syntax; message format; init by `[data-booking-form]` only |
| `BOOKING_FORM_SUBMISSION_FIX.md` | This document |

---

*Veloura Beauty Studio — booking form submission fix.*
