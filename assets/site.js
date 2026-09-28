/* Applies site.config.js values to the page. You shouldn't need to edit this file. */
(function () {
  var c = window.TASTE_NOTES_CONFIG || {};
  var p = c.pricing || {};

  function each(sel, fn) {
    Array.prototype.forEach.call(document.querySelectorAll(sel), fn);
  }

  // Plain text values: <span data-cfg="developerName">fallback</span>
  each("[data-cfg]", function (el) {
    var v = c[el.getAttribute("data-cfg")];
    if (v) el.textContent = v;
  });

  // Support email: shown as text plus a mail link when set
  each("[data-email]", function (el) {
    if (!c.supportEmail) return;
    el.innerHTML = "";
    var a = document.createElement("a");
    a.href = "mailto:" + c.supportEmail;
    a.textContent = c.supportEmail;
    el.appendChild(a);
  });
  each("[data-if-email]", function (el) { el.hidden = !c.supportEmail; });
  each("[data-if-no-email]", function (el) { el.hidden = !!c.supportEmail; });

  // App Store buttons
  each("[data-appstore]", function (el) {
    var label = el.querySelector("[data-appstore-label]");
    if (c.appStoreUrl) {
      el.setAttribute("href", c.appStoreUrl);
      el.removeAttribute("aria-disabled");
      el.classList.remove("is-soon");
      if (label) label.textContent = "Download on the App Store";
    } else {
      el.removeAttribute("href");
      el.setAttribute("aria-disabled", "true");
      el.classList.add("is-soon");
      if (label) label.textContent = "Coming soon to the App Store";
    }
  });

  // Pricing
  function setPrice(key, value, fallback) {
    each('[data-price="' + key + '"]', function (el) {
      el.textContent = value || fallback;
      el.classList.toggle("is-tba", !value);
    });
  }
  if (p.free) setPrice("free", p.free.price, "$0");
  if (p.lifetime) setPrice("lifetime", p.lifetime.price, "Price at launch");
  if (p.plus) {
    var plus = null;
    if (p.plus.priceMonthly && p.plus.priceYearly) plus = p.plus.priceMonthly + "/mo";
    else if (p.plus.priceMonthly) plus = p.plus.priceMonthly + "/mo";
    setPrice("plus", plus, "Pricing later");
    each('[data-price="plus-yearly"]', function (el) {
      el.hidden = !p.plus.priceYearly;
      if (p.plus.priceYearly) el.textContent = "or " + p.plus.priceYearly + "/yr";
    });
  }
  ["free", "lifetime", "plus"].forEach(function (k) {
    if (!p[k]) return;
    each('[data-note="' + k + '"]', function (el) { if (p[k].note) el.textContent = p[k].note; });
    each('[data-status="' + k + '"]', function (el) { if (p[k].status) el.textContent = p[k].status; });
  });

  each("[data-year]", function (el) { el.textContent = new Date().getFullYear(); });
})();
