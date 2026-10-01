/* =====================================================================
   TripUp prototype — single source of truth for all mock data
   ===================================================================== */
const DATA = {
  today: 'sat-26',
  me: 'ari',
  order: ['ari', 'jamie', 'nic', 'mark', 'ren'],
  members: {
    ari:   { name: 'Ari',   initials: 'AM', color: 'pink' },
    jamie: { name: 'Jamie', initials: 'JR', color: 'green' },
    mark:  { name: 'Mark',  initials: 'ME', color: 'orange' },
    nic:   { name: 'Nic',   initials: 'NK', color: 'purple' },
    ren:   { name: 'Ren',   initials: 'RT', color: 'yellow' },
  },
  trip: {
    id: 'lisbon', name: 'Lisbon', flag: '🇵🇹',
    start: '23 Sep', end: '27 Sep', startISO: '2026-09-23', endISO: '2026-09-27', dates: 'Wed 23 Sep – Sun 27 Sep 2026',
    hero: 'assets/lisbon-hero.svg',
    memberIds: ['ari', 'jamie', 'mark', 'nic'],
    admin: 'jamie',
    tabs: [['itinerary', 'Itinerary'], ['expenses', 'Expenses'], ['explore', 'Explore']],
  },
  days: [
    { id: 'wed-23', label: 'Wed 23 Sep', events: [
      { time: '14:00', title: 'Check-in at the Airbnb (Alfama)' },
      { time: '17:00', title: 'Walk to Miradouro de Santa Luzia' },
      { time: '20:30', title: 'Dinner in Alfama' } ] },
    { id: 'thu-24', label: 'Thu 24 Sep', events: [
      { time: '10:00', title: 'Torre de Belém – Mosteiro dos Jerónimos' },
      { time: '13:30', title: 'Lunch in Belém' },
      { time: '20:30', title: 'Dinner in Bairro Alto' } ] },
    { id: 'fri-25', label: 'Fri 25 Sep', events: [
      { time: '10:30', title: 'Museu Nacional do Azulejo' },
      { time: '13:00', title: 'Lunch at Mercado de Campo de Ourique' },
      { time: '17:00', title: 'Tagus river cruise' },
      { time: '20:30', title: 'Dinner in Príncipe Real' } ] },
    { id: 'sat-26', label: 'Sat 26 Sep', events: [
      { time: '09:00', title: 'Breakfast at Manteigaria' },
      { time: '10:00', title: 'Tram 28 to Castelo de São Jorge' },
      { time: '12:30', title: 'Lunch at Time Out Market' },
      { time: '14:00', title: 'Walk to Miradouro de Santa Catarina' },
      { time: '15:30', title: 'Ice cream in Chiado' },
      { time: '17:00', title: 'Pickup back to Airbnb' } ] },
    { id: 'sun-27', label: 'Sun 27 Sep', events: [
      { time: '10:00', title: 'Breakfast at Fauna & Flora' },
      { time: '11:30', title: 'Pick up towards Airport' },
      { time: '17:00', title: 'London Airport pickup' } ] },
  ],
  now: '18:30',
  // amounts in cents; shares = null → split equally among splitAmong
  transactions: [
    { id: 't9', day: 'sat-26', what: 'Ice Cream', paidBy: 'ari', amount: 2000, icon: 'icecream' },
    { id: 't8', day: 'fri-25', what: 'Dinner 25/09', paidBy: 'nic', amount: 5800, icon: 'restaurant' },
    { id: 't7', day: 'fri-25', what: 'Lunch 25/09', paidBy: 'jamie', amount: 6000, icon: 'lunch_dining' },
    { id: 't6', day: 'fri-25', what: 'Cruise Tour', paidBy: 'mark', amount: 8700, icon: 'directions_boat' },
    { id: 't5', day: 'fri-25', what: 'Museum', paidBy: 'jamie', amount: 9000, icon: 'museum' },
    { id: 't4', day: 'thu-24', what: 'Dinner 24/09', paidBy: 'jamie', amount: 14420, icon: 'restaurant' },
    { id: 't3', day: 'thu-24', what: 'Lunch 24/09', paidBy: 'nic', amount: 3680, icon: 'lunch_dining' },
    { id: 't2', day: 'wed-23', what: 'Dinner 23/09', paidBy: 'ari', amount: 14800, icon: 'restaurant' },
    { id: 't1', day: 'wed-23', what: 'Airbnb balance', paidBy: 'mark', amount: 52000, icon: 'bed' },
    { id: 't0', day: 'wed-23', what: 'Flights to Lisbon', paidBy: 'jamie', amount: 62560, icon: 'flight' },
  ],
  splitAmong: ['ari', 'jamie', 'mark', 'nic'],
  payments: [],
  places: {
    'Adega do Norte':       { cuisine: 'Portuguese', price: '€€', rating: '4,3', reviews: '1.240', distance: '450 m', area: 'Baixa, Lisbon' },
    'Artigiano Pizzeria':   { cuisine: 'Pizzeria', price: '€€', rating: '4,6', reviews: '870', distance: '700 m', area: 'Bairro Alto, Lisbon' },
    'Ultimo Porto':         { cuisine: 'Fish restaurant', price: '€20–30', rating: '4,4', reviews: '1.980', distance: '3,1 km', area: 'R. Gen. Gomes Araújo, Alcântara' },
    'Ultimo Take':          { cuisine: 'Takeaway', price: '€', rating: '4,1', reviews: '210', distance: '1,4 km', area: 'Santos, Lisbon' },
    'Adega da Tia Matilde': { cuisine: 'Portuguese', price: '€€', rating: '4,5', reviews: '2.310', distance: '2,6 km', area: 'Praça de Espanha, Lisbon' },
    'Artis Wine Bar':       { cuisine: 'Wine bar', price: '€€', rating: '4,6', reviews: '640', distance: '900 m', area: 'Bairro Alto, Lisbon' },
  },
  // Live poll: 30 min fast-forwarded to ~15 s; votes land at ms offsets from clock start. Ren never votes.
  pollClock: { minutes: 15, durationMs: 15000 },
  simulatedVotes: [
    { member: 'jamie', option: 2, at: 2500 },
    { member: 'nic', option: 0, at: 5500 },
    { member: 'mark', option: 2, at: 9000 },
  ],
  receipt: {
    place: 'Ultimo Porto', date: 'Sat 26 Sep · 21:04',
    food: [['Couvert ×5', 1250], ['Grilled sea bream ×2', 5600], ['Octopus à lagareiro ×2', 5200], ['Bacalhau à Brás', 2150], ['Picanha', 2400], ['Desserts ×5', 3250], ['Water & coffee', 3850]],
    wine: [['Glass of Alvarinho reserva ×3', 7500]],
    wineExcluded: ['ren', 'nic'],
  },
  explore: [
    { name: 'Pastéis de Belém', type: 'Bakery', cat: 'Food', distance: '6,2 km', icon: 'bakery_dining', wiki: [['en', 'Pastéis_de_Belém'], ['pt', 'Pastéis_de_Belém']] },
    { name: 'LX Factory', type: 'Creative hub', cat: 'Sights', distance: '5,4 km', icon: 'storefront', wiki: [['en', 'LX_Factory'], ['pt', 'LX_Factory']] },
    { name: 'Miradouro da Senhora do Monte', type: 'Viewpoint', cat: 'Sights', distance: '1,9 km', icon: 'landscape', wiki: [['pt', 'Miradouro_da_Senhora_do_Monte'], ['en', 'Graça_(Lisbon)']] },
    { name: 'Time Out Market', type: 'Food hall', cat: 'Food', distance: '1,3 km', icon: 'restaurant', wiki: [['en', 'Time_Out_Market'], ['en', 'Mercado_da_Ribeira'], ['pt', 'Mercado_da_Ribeira']] },
    { name: 'Pensão Amor', type: 'Bar', cat: 'Nightlife', distance: '1,1 km', icon: 'local_bar', wiki: [['pt', 'Pensão_Amor'], ['en', 'Rua_Nova_do_Carvalho'], ['en', 'Cais_do_Sodré']] },
    { name: 'Sintra day trip', type: 'Day trip', cat: 'Day trips', distance: '28 km', icon: 'castle', maps: 'Palácio da Pena Sintra', wiki: [['en', 'Pena_Palace'], ['en', 'Sintra']] },
  ],
  pastTrips: [
    { id: 'edinburgh', name: 'Edinburgh', flag: '🏴', startISO: '2026-09-04', endISO: '2026-09-06', dates: 'Fri 4 Sep – Sun 6 Sep 2026', members: 4, total: 68400,
      days: [{ label: 'Fri 4 Sep', events: [['18:00', 'Check-in in the Old Town'], ['20:30', 'Dinner on the Royal Mile']] },
             { label: 'Sat 5 Sep', events: [['10:00', 'Edinburgh Castle'], ['15:00', 'Hike up Arthur’s Seat']] }] },
    { id: 'london', name: 'London', flag: '🇬🇧', settled: false, startISO: '2026-03-12', endISO: '2026-03-15', dates: 'Thu 12 Mar – Sun 15 Mar 2026', members: 4, total: 121200,
      days: [{ label: 'Thu 12 Mar', events: [['15:00', 'Check-in in Shoreditch'], ['20:00', 'Dinner at Dishoom']] },
             { label: 'Fri 13 Mar', events: [['10:00', 'Tate Modern'], ['19:30', 'West End show']] }] },
    { id: 'paris', name: 'Paris', flag: '🇫🇷', startISO: '2025-12-25', endISO: '2026-01-02', dates: 'Thu 25 Dec 2025 – Fri 2 Jan 2026', members: 3, total: 86450,
      days: [{ label: 'Thu 25 Dec', events: [['16:00', 'Check-in in Le Marais'], ['20:30', 'Dinner at Chez Janou']] },
             { label: 'Fri 26 Dec', events: [['10:00', 'Musée d’Orsay'], ['18:00', 'Christmas market at Tuileries']] }] },
    { id: 'thailand', name: 'Thailand', flag: '🇹🇭', startISO: '2026-08-02', endISO: '2026-08-16', dates: 'Sun 2 Aug – Sun 16 Aug 2026', members: 6, total: 482000,
      days: [{ label: 'Sun 2 Aug', events: [['14:00', 'Landing in Bangkok'], ['19:00', 'Street food in Yaowarat']] },
             { label: 'Tue 4 Aug', events: [['08:00', 'Train to Chiang Mai'], ['18:00', 'Night bazaar']] }] },
  ],
  card: {
    last4: '4417', balance: 24000, expiry: '09/29',
    payments: [
      { id: 'cp1', what: 'Pastelaria Santo António', when: 'Today, 11:20', amount: 1460, icon: 'bakery_dining' },
      { id: 'cp2', what: 'Farmácia Chiado', when: 'Today, 16:45', amount: 890, icon: 'local_pharmacy' },
    ],
  },
  alerts: [
    { id: 'a4', who: 'jamie', text: 'Jamie updated Sun 27 Sep', time: 'Yesterday', unread: true, target: null },
    { id: 'a3', who: 'mark', text: 'Mark added Cruise Tour · 87,00 €', time: 'Fri 25 Sep', unread: true, target: { tx: 't6' } },
    { id: 'a2', who: 'nic', text: 'Nic added Dinner 25/09 · 58,00 €', time: 'Fri 25 Sep', unread: false, target: { tx: 't8' } },
    { id: 'a1', who: 'jamie', text: 'Jamie added you to Lisbon', time: 'Sun 20 Sep', unread: false, target: null },
  ],
  account: [
    [['Profile', '', 'person'], ['Payment methods', 'Apple Pay · default', 'wallet'], ['Currency', 'EUR', 'euro']],
    [['Notifications', '', 'notifications'], ['Language', 'English', 'language'], ['Privacy', '', 'lock']],
    [['Help', '', 'help'], ['Log out', '', 'logout']],
  ],
};

/* =====================================================================
   State & utilities
   ===================================================================== */
let S, timers = [], barMemory = {};
const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
const later = (fn, ms) => { const t = setTimeout(fn, ms); timers.push(t); return t; };
const money = (c) => {
  const neg = c < 0; c = Math.abs(Math.round(c));
  const e = String(Math.floor(c / 100)).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return (neg ? '−' : '') + e + ',' + String(c % 100).padStart(2, '0');
};
const eur = (c) => money(c) + ' €';
const cur = (c, s = '€') => money(c) + ' ' + s;
const parseMoney = (s) => {
  s = String(s).replace(/[^\d,.]/g, '');
  if (s.includes(',')) s = s.replace(/\./g, '').replace(',', '.');
  const n = parseFloat(s); return isNaN(n) ? 0 : Math.round(n * 100);
};
// Plain amounts only: digits and one decimal comma (max 2 decimals).
const cleanMoney = (v) => {
  v = String(v).replace(/\./g, ',').replace(/[^\d,]/g, '');
  const i = v.indexOf(',');
  return i < 0 ? v : v.slice(0, i + 1) + v.slice(i + 1).replace(/,/g, '').slice(0, 2);
};
// UK dates (en-GB): "Sat 26 Sep", "23 Sep", "Wed 23 Sep – Sun 27 Sep 2026"
// Newer ICU returns "Sept" for en-GB; Figma uses three-letter months.
const fmtDate = (iso, o) => new Date(iso + 'T12:00').toLocaleDateString('en-GB', o).replace(/,/g, '').replace(/\bSept\b/g, 'Sep');
const fDay = (iso) => fmtDate(iso, { weekday: 'short', day: 'numeric', month: 'short' });
const fShort = (iso) => fmtDate(iso, { day: 'numeric', month: 'short' });
const fRange = (a, b) => `${fDay(a)} – ${fDay(b)} ${new Date(b + 'T12:00').getFullYear()}`;
// Trip range: "23 – 27 Sep" in one month, "25 Dec – 2 Jan" across months
const tripRange = (a, b) => a.slice(0, 7) === b.slice(0, 7) ? `${+a.slice(8)} – ${fShort(b)}` : `${fShort(a)} – ${fShort(b)}`;
const daysBetween = (a, b) => Math.round((new Date(b + 'T12:00') - new Date(a + 'T12:00')) / 864e5);
let measureCtx;
const textW = (s, font = '600 17px "Plus Jakarta Sans", system-ui, sans-serif') => { measureCtx = measureCtx || document.createElement('canvas').getContext('2d'); measureCtx.font = font; return measureCtx.measureText(s).width; };
// Scroll only the nearest scroll container (screen or sheet) so a field sits mid-view.
function revealInBox(el) {
  const box = el && el.closest('.sheet-panel, .tab-panel, .screen__scroll'); if (!box) return;
  const r = el.getBoundingClientRect(), b = box.getBoundingClientRect(), vv = window.visualViewport;
  const bottom = Math.min(b.bottom, vv ? vv.offsetTop + vv.height : innerHeight), top = b.top + (box.classList.contains('screen__scroll') ? 104 : 16);
  if (r.top >= top && r.bottom <= bottom - 16) return;
  box.scrollBy({ top: r.top + r.height / 2 - (top + bottom) / 2, behavior: RM ? 'auto' : 'smooth' });
}
// Story clock in the status bar: 18:30 until dinner is decided, 22:00 for the expense part.
function setClock(t) { if (S) S.clock = t; const el = document.getElementById('clock'); if (el) el.textContent = t; }
const afterDinner = () => { if (S.poll && S.poll.status === 'closed' && S.clock !== '22:00') setClock('22:00'); };
const M = (id) => S.members[id];
const byOrder = (ids) => [...ids].sort((a, b) => S.order.indexOf(a) - S.order.indexOf(b));
const tripMembers = () => byOrder(S.trip.memberIds);
const dayLabel = (id) => S.days.find((d) => d.id === id)?.label || id;
const dayIndex = (id) => S.days.findIndex((d) => d.id === id);
const mapsUrl = (name) => 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(name + ' Lisboa').replace(/%20/g, '+');
const split = (total, ids) => {
  const out = {}; if (!ids.length) return out;
  const base = Math.floor(total / ids.length); let rem = total - base * ids.length;
  ids.forEach((id) => { out[id] = base + (rem-- > 0 ? 1 : 0); });
  return out;
};
const sharesOf = (tx) => tx.shares || split(tx.amount, tx.splitAmong || S.splitAmong);

function balances(withPayments = true) {
  const b = {}; tripMembers().forEach((id) => (b[id] = 0));
  S.transactions.forEach((tx) => {
    b[tx.paidBy] = (b[tx.paidBy] || 0) + tx.amount;
    Object.entries(sharesOf(tx)).forEach(([id, v]) => (b[id] = (b[id] || 0) - v));
  });
  if (withPayments) S.payments.forEach((p) => { b[p.from] += p.amount; b[p.to] -= p.amount; });
  return b;
}
// Consolidate debts: first try "each debtor pays exactly one person", else greedy.
function transfers(b = balances()) {
  const debtors = Object.keys(b).filter((id) => b[id] < 0).sort((x, y) => b[x] - b[y]);
  const creditors = Object.keys(b).filter((id) => b[id] > 0);
  const cap = Object.fromEntries(creditors.map((id) => [id, b[id]]));
  const assign = {};
  const solve = (i) => {
    if (i === debtors.length) return creditors.every((c) => cap[c] === 0);
    const d = debtors[i];
    for (const c of creditors) {
      if (cap[c] >= -b[d]) { cap[c] += b[d]; assign[d] = c; if (solve(i + 1)) return true; cap[c] -= b[d]; }
    }
    return false;
  };
  if (debtors.length && solve(0)) return debtors.map((d) => ({ from: d, to: assign[d], amount: -b[d] }));
  const out = []; const owe = Object.fromEntries(debtors.map((d) => [d, -b[d]]));
  const left = Object.fromEntries(creditors.map((c) => [c, b[c]]));
  [...debtors].sort((x, y) => owe[x] - owe[y]).forEach((d) => {
    while (owe[d] > 0) {
      const c = Object.keys(left).filter((k) => left[k] > 0).sort((x, y) => left[y] - left[x])[0];
      if (!c) break;
      const amt = Math.min(owe[d], left[c]); out.push({ from: d, to: c, amount: amt });
      owe[d] -= amt; left[c] -= amt;
    }
  });
  return out;
}
const myExpenses = () => S.transactions.reduce((s, tx) => s + (sharesOf(tx)[S.me] || 0), 0);
const totalExpenses = () => S.transactions.reduce((s, tx) => s + tx.amount, 0);
const allSquare = () => S.payments.length > 0 && !S.holdSquare && Object.values(balances()).every((v) => v === 0);
function countUp(from, to, ms, cb, done) {
  if (RM || ms <= 0) { cb(to); done && done(); return; }
  const t0 = performance.now();
  const step = (t) => { const k = Math.min(1, (t - t0) / ms), e = 1 - Math.pow(1 - k, 3); cb(Math.round(from + (to - from) * e)); if (k < 1) requestAnimationFrame(step); else done && done(); };
  requestAnimationFrame(step);
}
function roll(el, v) { if (!el || el.textContent === String(v)) return; el.textContent = v; el.classList.remove('is-roll'); void el.offsetWidth; el.classList.add('is-roll'); }
const Celebrate = () => `<span class="celebrate" aria-hidden="true"><svg viewBox="0 0 200 160">
  <circle class="c-blob" cx="100" cy="86" r="66"></circle>
  <circle class="c-sun" cx="148" cy="44" r="20"></circle>
  <circle class="c-ring" cx="100" cy="86" r="52"></circle>
  <g class="c-badge"><circle cx="100" cy="86" r="38"></circle><path class="c-check" d="M83 87l11 11 23-25" style="--len:52"></path></g>
  <path class="c-spark c-spark--1" d="M38 36l3 7 7 3-7 3-3 7-3-7-7-3 7-3z"></path>
  <path class="c-spark c-spark--2" d="M170 106l2 5 5 2-5 2-2 5-2-5-5-2 5-2z"></path>
  <path class="c-spark c-spark--3" d="M50 126l2 4 4 2-4 2-2 4-2-4-4-2 4-2z"></path>
  <circle class="c-dot c-dot--1" cx="26" cy="90" r="4"></circle>
  <circle class="c-dot c-dot--2" cx="178" cy="72" r="3"></circle>
  <circle class="c-dot c-dot--3" cx="112" cy="14" r="3"></circle>
</svg></span>`;
const DrawCheck = (cls = '') => `<svg class="draw-check ${cls}" viewBox="0 0 72 72" aria-hidden="true"><circle cx="36" cy="36" r="33" style="--len:208"></circle><path d="M22 37l10 10 19-21" style="--len:46"></path></svg>`;
function attachSwipe(el, dir, onDismiss) {
  let y0 = null, dy = 0;
  el.addEventListener('pointerdown', (e) => { if (e.target.closest('button, a, input')) return; y0 = e.clientY; dy = 0; el.style.transition = 'none'; el.setPointerCapture?.(e.pointerId); });
  el.addEventListener('pointermove', (e) => { if (y0 == null) return; dy = e.clientY - y0; if ((dir === 'up' && dy < 0) || (dir === 'down' && dy > 0)) el.style.transform = `translateY(${dy}px)`; });
  const end = () => {
    if (y0 == null) return; y0 = null; el.style.transition = ''; 
    if ((dir === 'up' && dy < -30) || (dir === 'down' && dy > 70)) { el.dataset.swiped = '1'; setTimeout(() => delete el.dataset.swiped, 50); onDismiss(); }
    else el.style.transform = '';
  };
  el.addEventListener('pointerup', end); el.addEventListener('pointercancel', end);
}

/* =====================================================================
   Components (return HTML strings)
   ===================================================================== */
const Icon = (name, size = 20) => `<span class="icon icon--${size}" aria-hidden="true">${name}</span>`;
const Avatar = (id, size = 'lg') => {
  const m = M(id);
  return `<span class="avatar avatar--${m.color}${size !== 'lg' ? ' avatar--' + size : ''}" title="${esc(m.name)}">${esc((m.name || '?').trim()[0].toUpperCase())}</span>`;
};
const AvatarStack = (ids, size = 'lg', extra = '') =>
  `<span class="avatar-stack${size === 'sm' ? ' avatar-stack--sm' : ''}">${ids.map((id) => Avatar(id, size)).join('')}${extra}</span>`;
const Tag = (content, variant = 'brand') => `<span class="tag tag--${variant}">${content}</span>`;
const MemberTags = (id) => (id === S.me ? Tag('Me', 'accent') : '') + (id === S.trip.admin ? Tag('Admin', 'brand') : '');
const IconButton = (icon, { action = '', size = 20, cls = '', label = '', data = '' } = {}) =>
  `<button class="icon-btn ${cls}" data-action="${action}" ${data} aria-label="${label || icon}">${Icon(icon, size)}</button>`;
// soft: disabled look via aria-disabled, so a tap can still point at what's missing
const Button = (label, { variant = 'primary', action = '', cls = '', after = '', before = '', disabled = false, soft = false, data = '' } = {}) =>
  `<button class="btn btn--${variant} ${cls}" data-action="${action}" ${data} ${soft ? `aria-disabled="${!!disabled}"` : disabled ? 'disabled' : ''}>${before}${label}${after}</button>`;
const Segmented = (items, value, action, cls = '') =>
  `<div class="segmented ${items.length === 2 ? 'segmented--2' : ''} ${cls}" role="tablist">${items.map(([v, l]) => `<button class="segmented__item${v === value ? ' is-active' : ''}" data-action="${action}" data-value="${v}">${l}</button>`).join('')}</div>`;
const Checkbox = (checked) => `<span class="checkbox${checked ? ' is-checked' : ''}" role="checkbox" aria-checked="${checked}">${Icon('check', 20)}</span>`;
const RadioCheck = (checked) => `<span class="radio-check${checked ? ' is-checked' : ''}">${Icon('check', 16)}</span>`;
const Toggle = (on) => `<span class="toggle${on ? ' is-on' : ''}" role="switch" aria-checked="${on}"></span>`;
const Field = (label, inner, cls = '') => `<div class="field ${cls}"><span class="field__label">${label}</span>${inner}</div>`;
const Input = (value, icon = '', { action = '', data = '' } = {}) =>
  `<button class="input" data-action="${action}" ${data}><span class="input__value">${esc(value)}</span>${icon ? Icon(icon, 14) : ''}</button>`;
const Select = (value, opts) => Input(value, 'keyboard_arrow_down', opts);
const TextInput = ({ value = '', placeholder = '', name = '', after = '', attrs = '' }) =>
  `<div class="input"><input class="input__control" data-input="${name}" value="${esc(value)}" placeholder="${esc(placeholder)}" ${attrs}>${after}</div>`;
const DateInput = (name, iso, attrs = '') => `<label class="input input--picker"><span class="input__value">${fDay(iso)}</span><input class="input__native" type="date" data-input="${name}" value="${iso}" ${attrs}>${Icon('calendar_today', 14)}</label>`;
const TimeInput = (name, t, attrs = '') => `<label class="input input--picker"><span class="input__value">${t}</span><input class="input__native" type="time" data-input="${name}" value="${t}" ${attrs}>${Icon('schedule', 14)}</label>`;
const Toast = (text, icon = 'check_circle') => `<div class="toast"><span class="toast__icon">${Icon(icon === 'check_circle' ? 'check' : icon, 16)}</span><span>${esc(text)}</span></div>`;
const NavHeader = (title, back = 'back') =>
  `<header class="nav-header"><button class="icon-btn icon-btn--ghost nav-header__back" data-action="${back}" aria-label="Back">${Icon('arrow_back_ios_new', 20)}</button><h1 class="nav-header__title">${title}</h1></header>`;
const eventStatus = (dayId, time) => {
  const di = dayIndex(dayId), ti = dayIndex(S.today);
  if (di < ti) return 'done';
  if (di > ti) return 'upcoming';
  return time < S.now ? 'done' : 'upcoming';
};
const TimelineRow = (ev, dayId, next) => {
  const st = eventStatus(dayId, ev.time);
  const dash = dayId === S.today && (st === 'upcoming' || (next && eventStatus(dayId, next.time) === 'upcoming')) ? ' tl-row--dash' : '';
  const a = `data-event="${ev.id}" data-action="event" data-day="${dayId}" data-id="${ev.id}" role="button" tabindex="0"`;
  if (ev.decided) return `
  <div class="tl-row tl-row--decided${dash}${ev.landing ? ' is-landing' : ''}" data-decided="1" ${a}>
    <span class="tl-row__time">${ev.time}</span><span class="tl-dot tl-dot--${ev.hot ? 'decided' : st}">${!ev.hot && st === 'done' ? Icon('check', 16) : ''}</span>
    <span class="tl-row__label">${esc(ev.title)}</span><span class="tl-row__chev">${Icon('keyboard_arrow_right', 14)}</span>
    <button class="poll-chip" data-action="poll-results" aria-label="View poll results">${Icon('how_to_vote', 14)}Poll${Icon('chevron_right', 14)}</button>
  </div>`;
  return `<div class="tl-row${dash}" ${a}><span class="tl-row__time">${ev.time}</span><span class="tl-dot tl-dot--${st}">${st === 'done' ? Icon('check', 16) : ''}</span><span class="tl-row__label">${esc(ev.title)}</span><span class="tl-row__chev">${Icon('keyboard_arrow_right', 14)}</span></div>`;
};
const Timeline = (events, dayId, cls = '') => `<div class="timeline ${cls}">${events.map((e, i) => TimelineRow(e, dayId, events[i + 1])).join('')}</div>`;

const PollOption = (opt, poll, max, readonly = false) => {
  const votes = byOrder(poll.votes[opt.id] || []);
  const mine = votes.includes(S.me);
  const pct = (votes.length / max) * 100;
  const from = pct;
  const pick = (readonly
    ? `<span class="poll-option__pick">${RadioCheck(poll.winner === opt.id)}</span>`
    : `<button class="poll-option__pick" data-action="vote" data-id="${opt.id}" aria-pressed="${mine}" aria-label="Vote for ${esc(opt.name)}">${RadioCheck(mine)}</button>`)
    + `<button class="poll-option__place" data-action="place" data-name="${esc(opt.name)}" aria-label="Open ${esc(opt.name)} details"><span class="poll-option__name">${esc(opt.name)}</span>${Icon('keyboard_arrow_right', 16)}</button>`;
  return `
  <div class="poll-option" data-option="${opt.id}">
    <div class="poll-option__row">
      ${pick}
      <span class="poll-option__voters" data-ids="${votes.join()}">${votes.length ? AvatarStack(votes.slice(0, 3), 'sm') : ''}<span class="poll-option__count">${votes.length}</span></span>
    </div>
    <div class="progress"><div class="progress__fill" style="width:${from}%" data-pct="${pct}"></div></div>
  </div>`;
};
const pollStats = (poll) => ({
  voted: new Set(Object.values(poll.votes).flat()).size,
  max: Math.max(1, ...poll.options.map((o) => (poll.votes[o.id] || []).length)),
});
const Poll = (poll) => {
  const { voted, max } = pollStats(poll);
  const live = poll.hasLimit ? `LIVE - ${Icon('timer', 14)}<span><span class="poll__mins">${poll.minutesLeft}</span> min left</span>` : 'LIVE';
  return `
  <section class="poll">
    <div>
      <div class="poll__top"><span class="poll__time">${poll.time}</span><span class="poll__actions"><span class="tag tag--accent poll__live"><span class="live-dot"></span>${live}</span><button class="poll__edit" data-action="poll-edit" aria-label="Edit poll">${Icon('edit', 16)}</button></span></div>
      <h3 class="poll__question">${esc(poll.question)}</h3>
      <p class="poll__hint">${poll.maxSelect > 1 ? `Select up to ${poll.maxSelect}` : 'Select one'}</p>
    </div>
    <div class="poll__options">${poll.options.map((o) => PollOption(o, poll, max)).join('')}</div>
    <div class="poll__footer"><span class="poll__voted">${voted}</span> of ${S.trip.memberIds.length} voted</div>
  </section>`;
};
const DaySection = (day) => {
  const open = S.dayOpen[day.id];
  const isToday = day.id === S.today;
  const isLast = day === S.days[S.days.length - 1];
  const withPoll = S.poll && S.poll.status !== 'closed' && S.poll.day === day.id;
  const cls = (withPoll ? 'timeline--to-card' : isLast ? 'timeline--last' : '') + (dayIndex(day.id) > dayIndex(S.today) ? ' timeline--future' : '');
  return `
  <section class="accordion${open ? '' : ' is-collapsed'}" data-day="${day.id}">
    <button class="accordion__header" data-action="toggle-day" data-id="${day.id}" aria-expanded="${open}">
      <span class="accordion__title">${day.label}</span>${isToday ? Tag('Today', 'brand') : ''}
      <span class="accordion__chevron">${Icon('keyboard_arrow_up', 20)}</span>
    </button>
    <div class="accordion__body">${Timeline(day.events, day.id, cls)}${withPoll ? Poll(S.poll) : ''}</div>
  </section>`;
};
const NAV_ITEMS = [['trips', 'card_travel', 'My Trips'], ['card', 'credit_card', 'Card'], ['alerts', 'notifications_none', 'Alerts'], ['account', 'perm_identity', 'Account']];
const BottomNav = (active) => {
  const unread = S.alerts.filter((a) => a.unread).length;
  return `<nav class="bottom-nav" id="bottom-nav">${NAV_ITEMS.map(([k, i, l]) => `
    <button class="bottom-nav__item${k === active ? ' is-active' : ''}" data-action="nav" data-tab="${k}">
      <span class="nav-icon">${Icon(i, 25)}${k === 'alerts' && unread && active !== 'alerts' ? '<span class="nav-dot" aria-label="Unread alerts"></span>' : ''}</span><span>${l}</span>
    </button>`).join('')}</nav>`;
};
const Summary = () => `
  <div class="summary">
    <div class="summary__item"><span class="summary__label">${Icon('person', 16)}My expenses</span><span class="summary__value">${eur(myExpenses())}</span></div>
    <div class="summary__item"><span class="summary__label">${Icon('group', 16)}Total expenses</span><span class="summary__value">${eur(totalExpenses())}</span></div>
  </div>`;
const ListRow = ({ lead = '', title, sub = '', value = '', chevron = true, action = '', data = '', cls = '' }) =>
  `<button class="list-row ${cls}" data-action="${action}" ${data}>${lead}<span class="list-row__main"><span class="list-row__title">${title}</span>${sub ? `<span class="list-row__sub">${sub}</span>` : ''}</span>${value ? `<span class="list-row__value">${value}</span>` : ''}${chevron ? `<span class="list-row__chevron">${Icon('chevron_right', 20)}</span>` : ''}</button>`;

/* =====================================================================
   Navigation: one stack of layers per bottom-nav tab
   ===================================================================== */
const NAV_SCREENS = ['trips', 'trip', 'pastTrip', 'card', 'alerts', 'account'];
const HERO_SCREENS = ['trip', 'map'];
let stacks, currentTab, layerSeq = 0;
const topLayer = () => stacks[currentTab][stacks[currentTab].length - 1];
const findLayer = (type) => Object.values(stacks).flat().find((l) => l.type === type);

function makeLayer(type, params = {}, root = false) {
  const el = document.createElement('section');
  el.className = 'screen ' + (root ? 'screen--root' : 'screen--push') + ' screen--' + type;
  el.dataset.screenLabel = type;
  const layer = { id: ++layerSeq, type, params, el, ui: {} };
  $('#layers').appendChild(el);
  SCREENS[type].render(layer);
  return layer;
}
function push(type, params = {}) {
  const prev = topLayer();
  const layer = makeLayer(type, params);
  stacks[currentTab].push(layer);
  layer.el.getBoundingClientRect();
  layer.el.classList.add('is-active');
  prev.el.classList.add('is-covered');
  prev.el.inert = true;
  syncChrome();
  return layer;
}
function pop(n = 1) {
  const st = stacks[currentTab];
  for (let i = 0; i < n && st.length > 1; i++) {
    const l = st.pop();
    l.el.classList.remove('is-active');
    setTimeout(() => l.el.remove(), 300);
    SCREENS[l.type].destroy?.(l);
  }
  const t = topLayer(); t.el.classList.remove('is-covered'); t.el.inert = false;
  SCREENS[t.type].render(t);
  syncChrome();
  return t;
}
function popTo(type) { const st = stacks[currentTab]; const i = st.findIndex((l) => l.type === type); if (i >= 0) pop(st.length - 1 - i); return topLayer(); }
function switchTab(tab) {
  if (tab === currentTab) { if (stacks[tab].length > 1) pop(stacks[tab].length - 1); return; }
  if (currentTab === 'alerts') { S.alerts.forEach((a) => (a.unread = false)); }
  currentTab = tab;
  if (!stacks[tab].length) stacks[tab].push(makeLayer(tab, {}, true));
  Object.entries(stacks).forEach(([k, st]) => st.forEach((l) => l.el.classList.toggle('is-offtab', k !== tab)));
  SCREENS[topLayer().type].render(topLayer());
  syncChrome();
}
function syncChrome() {
  const t = topLayer();
  $('#nav-host').innerHTML = BottomNav(currentTab);
  $('#bottom-nav').classList.toggle('is-hidden', !NAV_SCREENS.includes(t.type));
  $('.statusbar').classList.toggle('is-solid', !HERO_SCREENS.includes(t.type));
}
function refresh() {
  Object.values(stacks).flat().forEach((l) => SCREENS[l.type].live && SCREENS[l.type].render(l));
  syncChrome();
}

/* ---------- Toasts, push notifications, sheets ---------- */
let toastTimer;
function toast(text, icon = 'check_circle', variant = '') {
  const host = $('#toast-host'); host.innerHTML = Toast(text, icon, variant);
  const el = host.firstElementChild; requestAnimationFrame(() => el.classList.add('is-in'));
  clearTimeout(toastTimer); toastTimer = setTimeout(() => { el.classList.remove('is-in'); setTimeout(() => el.remove(), 300); }, 2500);
}
const SOON = [['construction', 'Still under construction · our crew is on it'], ['luggage', 'Still packing this one · coming soon'], ['flight_takeoff', 'This feature hasn’t taken off yet'], ['explore', 'Not on the map yet · we’re building it']];
let soonI = 0;
const soon = () => { const [i, t] = SOON[soonI++ % SOON.length]; toast(t, i, 'toast--soon'); };
let pushTimer, pushTap;
function notify(title, body, onTap, ms = 4000) {
  if (S.trip.muted) return;
  pushTap = onTap;
  const host = $('#push-host');
  host.innerHTML = `<div class="push" role="button" tabindex="0" data-action="push-open"><span class="push__icon">${Icon('card_travel', 22)}</span><span class="push__main"><span class="push__row"><span class="push__title">${esc(title)}</span><span class="push__time">now</span></span><span class="push__body">${esc(body)}</span></span></div>`;
  const el = host.firstElementChild;
  const hide = () => { el.style.transform = ''; el.classList.remove('is-in'); };
  attachSwipe(el, 'up', hide);
  requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add('is-in')));
  clearTimeout(pushTimer); pushTimer = setTimeout(hide, ms);
}
function addAlert(who, text, target) { S.alerts.unshift({ id: 'a' + Date.now() + Math.random(), who, text, time: 'Now', unread: true, target }); }

let sheetClose = null;
function openSheet(html, { modal = false, onClose } = {}) {
  closeSheet(true);
  const host = $('#overlay-host');
  host.innerHTML = `<div class="overlay"><div class="overlay__scrim" data-action="sheet-close"></div><div class="${modal ? 'modal' : 'sheet-panel'}" role="dialog">${modal ? '' : '<div class="sheet-panel__grab"></div>'}${html}</div></div>`;
  const el = host.firstElementChild; el.getBoundingClientRect(); el.classList.add('is-in');
  sheetClose = onClose || null;
  const panel = $('.sheet-panel', el);
  if (panel) $$('.sheet-panel__grab, .sheet-panel__head', panel).forEach((h) => attachSwipe(h, 'down', () => closeSheet()));
  if (panel) $$('.sheet-panel__grab, .sheet-panel__head', panel).forEach((h) => h.addEventListener('pointermove', () => { if (h.style.transform) { panel.style.transition = 'none'; panel.style.transform = h.style.transform; h.style.transform = ''; } }));
  if (panel) $$('.sheet-panel__grab, .sheet-panel__head', panel).forEach((h) => h.addEventListener('pointerup', () => { panel.style.transition = ''; if (!h.dataset.swiped) panel.style.transform = ''; }));
  return el;
}
function closeSheet(instant = false) {
  const el = $('#overlay-host .overlay'); if (!el) return;
  const cb = sheetClose; sheetClose = null;
  if (instant) el.remove(); else { el.classList.remove('is-in'); setTimeout(() => el.remove(), 260); }
  if (cb && !instant) cb();
}
const SheetHead = (title) => `<div class="sheet-panel__head"><h2 class="sheet-panel__title">${title}</h2><button class="close-btn" data-action="sheet-close" aria-label="Close">${Icon('close', 20)}</button></div>`;
let pickerCb = null;
function openPicker(title, options, value, cb) {
  pickerCb = cb;
  openSheet(SheetHead(title) + `<div>${options.map((o) => `<button class="picker-row" data-action="pick" data-value="${esc(o.value)}">${o.lead || ''}<span class="picker-row__label">${esc(o.label)}${o.sub ? `<small>${esc(o.sub)}</small>` : ''}</span>${o.value === value ? Icon('check', 20) : ''}</button>`).join('')}</div>`);
}

/* =====================================================================
   Screens
   ===================================================================== */
const SCREENS = {};

/* ---------- 01 · Your trips ---------- */
const HERO_TAGS = [['event_note', 'Plan the days together'], ['how_to_vote', 'Let the group decide'], ['payments', 'Split costs, settle up']];
const HeroTag = ([i, t]) => `${Icon(i, 16)}<span>${t}</span>`;
const letters = (w, from) => w.split('').map((c, i) => `<span style="--i:${from + i}">${c}</span>`).join('');
const HORIZON_PATH = 'M30 96C70 96 80 66 110 66S160 94 190 94S240 60 270 60S330 80 356 80';
const TripsHorizon = () => {
  const past = ['paris', 'london', 'thailand'].map((id) => S.pastTrips.find((p) => p.id === id)).filter(Boolean), stops = [[30, 96], [110, 66], [190, 94], [270, 60]];
  const trips = [...past, { flag: S.trip.flag, active: true }];
  return `<div class="trips-horizon" aria-hidden="true"><div class="trips-horizon__art">
    <svg width="393" height="170" viewBox="0 0 393 170">
      <path class="th-hill th-hill--back" d="M0 128C70 104 130 118 200 110S330 96 393 112V170H0Z"></path>
      <path class="th-hill" d="M0 146C90 128 150 142 230 134S340 124 393 136V170H0Z"></path>
      <path class="th-route" d="${HORIZON_PATH}"></path>
    </svg>
    ${trips.map((t, k) => `<span class="th-stop${t.active ? ' th-stop--active' : ''}" style="left:${stops[k][0]}px;top:${stops[k][1]}px;--k:${k}">${t.flag}</span>`).join('')}
    <span class="th-stop th-stop--next" style="left:356px;top:80px;--k:4">${Icon('add', 16)}</span>
    <span class="th-plane">${Icon('flight', 16)}</span>
  </div></div>`;
};
const SPARK = '<svg viewBox="0 0 20 20"><path d="M10 0l3 7 7 3-7 3-3 7-3-7-7-3 7-3z"></path></svg>';
const BAND_ICONS = ['luggage', 'how_to_vote', 'payments'];
const TripsBand = () => `<div class="trips-band">
  <span class="tb-blob"></span><span class="tb-sun"></span><span class="tb-ring"></span>
  <button class="tb-badge" data-action="band-badge" aria-label="Plan, vote, split">${Icon(BAND_ICONS[0], 25)}</button>
  <span class="tb-spark tb-spark--1">${SPARK}</span><span class="tb-spark tb-spark--2">${SPARK}</span>
  <span class="tb-dot tb-dot--1"></span><span class="tb-dot tb-dot--2"></span>
</div>`;
const TripsBg = () => {
  const ids = tripMembers(), pairs = [];
  ids.forEach((a, i) => ids.slice(i + 1).forEach((b, j) => pairs.push([i, i + 1 + j])));
  return `<div class="trips-bg">
    <span class="aura aura--1"></span><span class="aura aura--2"></span><span class="aura aura--3"></span><span class="aura aura--4"></span>
    <svg class="crew-links" aria-hidden="true">${pairs.map(([a, b]) => `<line data-a="${a}" data-b="${b}"></line>`).join('')}</svg>
    ${ids.map((id, i) => `<span class="avatar avatar--${M(id).color} crew-node${id === S.me ? ' crew-node--me' : ''}" data-action="crew" data-i="${i}" role="img" aria-label="${esc(M(id).name)}">${esc(M(id).name[0])}<span class="crew-node__name">${esc(id === S.me ? 'You' : M(id).name)}</span></span>`).join('')}
  </div>`;
};
let crewRun = 0;
function startCrew(root) {
  const bg = $('.trips-bg', root), title = $('.screen-title', root); if (!bg) return;
  const run = ++crewRun, nodes = $$('.crew-node', bg), lines = $$('line', bg), W = bg.clientWidth || 393, T = title.offsetTop;
  const rg = document.createRange(); rg.selectNodeContents(title);
  const textRight = rg.getBoundingClientRect().right - bg.getBoundingClientRect().left, minX = textRight + 16 + 24, maxX = W - 28;
  const frac = [[0, 30], [0.36, 4], [0.68, 34], [1, 8], [0.2, 62]];
  const spots = frac.map(([f, dy]) => [minX + (maxX - minX) * f, T + dy]);
  const st = nodes.map((n, i) => ({ bx: spots[i % spots.length][0], by: spots[i % spots.length][1], x: spots[i % spots.length][0], y: spots[i % spots.length][1] - 40, drag: false, moved: 0 }));
  nodes.forEach((n, i) => {
    const s = st[i];
    n.addEventListener('pointerdown', (ev) => { s.drag = true; s.moved = 0; n.setPointerCapture?.(ev.pointerId); bg.classList.add('is-drag'); n.classList.add('is-held'); });
    n.addEventListener('pointermove', (ev) => { if (!s.drag) return; const r = bg.getBoundingClientRect(); const nx = Math.max(16, Math.min(r.width - 16, ev.clientX - r.left)), ny = Math.max(16, Math.min(r.height - 16, ev.clientY - r.top)); s.moved += Math.abs(nx - s.x) + Math.abs(ny - s.y); s.x = nx; s.y = ny; });
    const up = () => { if (!s.drag) return; s.drag = false; bg.classList.remove('is-drag'); n.classList.remove('is-held'); if (s.moved < 6) { n.classList.remove('is-named'); void n.offsetWidth; n.classList.add('is-named'); } };
    n.addEventListener('pointerup', up); n.addEventListener('pointercancel', up);
  });
  const draw = () => {
    nodes.forEach((n, i) => (n.style.transform = `translate(${st[i].x - 16}px, ${st[i].y - 16}px)`));
    lines.forEach((ln) => { const a = st[+ln.dataset.a], b = st[+ln.dataset.b]; ln.setAttribute('x1', a.x); ln.setAttribute('y1', a.y); ln.setAttribute('x2', b.x); ln.setAttribute('y2', b.y); });
  };
  if (RM) { st.forEach((s) => (s.y = s.by)); draw(); return; }
  const loop = (t) => {
    if (run !== crewRun || !bg.isConnected) return;
    st.forEach((s, i) => {
      if (s.drag) return;
      const tx = s.bx + Math.sin(t / 1000 * (0.55 + i * 0.12) + i) * 7, ty = s.by + Math.cos(t / 1000 * (0.45 + i * 0.1) + i * 2) * 5;
      s.x += (tx - s.x) * 0.07; s.y += (ty - s.y) * 0.07;
    });
    draw(); requestAnimationFrame(loop);
  };
  requestAnimationFrame(loop);
}
const SKY_ICONS = ['event_note', 'how_to_vote', 'payments'];
const MINI_COLORS = ['var(--primary-35)', 'var(--accent-50)', 'var(--primary-70)', 'var(--primary-50)'];
const MiniBalloon = (c, cls = '', style = '') => `<span class="sky-mini ${cls}" style="--c:${c};${style}" aria-hidden="true"><span class="sky-mini__sway"><svg viewBox="-24 -2 48 66"><path d="M0 0C-17 0-22 13-22 23C-22 36-9 44-4 50L4 50C9 44 22 36 22 23C22 13 17 0 0 0Z"></path><path class="sky-mini__rope" d="M-4 50L-3 56M4 50L3 56"></path><rect x="-4" y="56" width="8" height="7" rx="2"></rect></svg></span></span>`;
const TripsSky = () => `<div class="trips-sky" data-action="sky" aria-hidden="true">
  <span class="sky-cloud" style="top:calc(var(--sb) + 34px);animation-delay:-4s"></span>
  <span class="sky-cloud sky-cloud--sm" style="top:calc(var(--sb) + 118px);animation-delay:-13s"></span>
  ${MiniBalloon('var(--primary-70)', 'sky-mini--loop', 'left:12%;animation-delay:-3s')}
  ${MiniBalloon('var(--accent-50)', 'sky-mini--loop sky-mini--slow', 'left:46%;animation-delay:-9s')}
  <span class="sky-balloon" data-action="sky-balloon"><span class="sky-balloon__sway"><span class="sky-balloon__boost">
    <svg viewBox="-46 -2 92 124"><path class="hb-env" d="M0 0C-30 0-42 24-42 42C-42 66-16 82-8 94L8 94C16 82 42 66 42 42C42 24 30 0 0 0Z"></path><path class="hb-gore" d="M0 0C-14 0-20 24-20 42C-20 66-8 82-4 94L4 94C8 82 20 66 20 42C20 24 14 0 0 0Z"></path><path class="hb-rope" d="M-7 94L-6 106M7 94L6 106"></path><rect class="hb-basket" x="-9" y="105" width="18" height="14" rx="3"></rect></svg>
    <span class="sky-balloon__badge" data-slot="sky-icon">${Icon(SKY_ICONS[0], 20)}</span>
  </span></span></span>
</div>`;
let skyI = 0;
function skyNext(root) {
  const b = $('[data-slot=sky-icon]', root); if (!b) return;
  skyI = (skyI + 1) % SKY_ICONS.length; b.innerHTML = Icon(SKY_ICONS[skyI], 20);
  b.classList.remove('is-roll'); void b.offsetWidth; b.classList.add('is-roll');
}
function skySpawn(sky, x, y) {
  const r = sky.getBoundingClientRect();
  sky.insertAdjacentHTML('beforeend', MiniBalloon(MINI_COLORS[Math.floor(Math.random() * MINI_COLORS.length)], 'sky-mini--spawn', `left:${x - r.left - 13}px;top:${y - r.top - 36}px`));
  const el = sky.lastElementChild; setTimeout(() => el.remove(), 3200);
}
const STAMPS = [['event_note', 'Plan', -12], ['how_to_vote', 'Vote', 7], ['payments', 'Split', -5]];
const TripPass = () => `<button class="pass" data-action="hero-replay" aria-label="TripUp: plan, vote and split with your group">
  <span class="pass__top"><span class="pass__brand">TripUp</span><span class="pass__kind">Boarding pass · ${esc(M(S.me).name)}</span></span>
  <span class="pass__route">
    <span class="pass__city"><small>From</small><b>Chaos</b><span>the group chat</span></span>
    <span class="pass__path"><span class="pass__plane">${Icon('flight', 20)}</span></span>
    <span class="pass__city pass__city--to"><small>To</small><b>Sorted</b><span>everyone’s in</span></span>
  </span>
  <span class="pass__tear"></span>
  <span class="pass__stamps">${STAMPS.map(([i, t, r], n) => `<span class="stamp" style="--r:${r}deg;--n:${n}">${Icon(i, 20)}<span>${t}</span></span>`).join('')}</span>
</button>`;
SCREENS.trips = {
  live: true,
  render(l) {
    const t = S.trip;
    if (!l.ui.built) {
      l.ui.built = true;
      l.el.innerHTML = `<div class="screen__scroll trips-scroll">
      <div class="screen-head trips-top"><h1 class="screen-title">My trips</h1><p class="trips-sub">More trips, less hassle!</p><div class="trips-controls" data-slot="trips-controls"></div></div>
      <div class="content stack-16 trips-content"><div class="stack-16" data-slot="trips-body"></div></div></div>`;
    }
    const Y = S.tripsYear, inYear = (x) => !Y || (+x.startISO.slice(0, 4) <= Y && +x.endISO.slice(0, 4) >= Y);
    const years = [...new Set([t, ...S.pastTrips].flatMap((x) => [+x.startISO.slice(0, 4), +x.endISO.slice(0, 4)]))].sort((a, b) => b - a);
    l.ui.years = years;
    $('[data-slot=trips-controls]', l.el).innerHTML = `<button class="year-select${Y ? ' is-active' : ''}" data-action="trips-year" aria-haspopup="dialog" aria-label="Filter by year">${Icon('event', 16)}<span>${Y || 'All years'}</span>${Icon('keyboard_arrow_down', 16)}</button>
      <div class="view-toggle" role="tablist" aria-label="View">${[['list', 'view_agenda', 'List view'], ['calendar', 'calendar_month', 'Calendar view']].map(([v, i, a]) => `<button class="${S.tripsView === v ? 'is-active' : ''}" data-action="trips-view" data-value="${v}" role="tab" aria-selected="${S.tripsView === v}" aria-label="${a}">${Icon(i, 20)}</button>`).join('')}</div>`;
    if (S.tripsView === 'calendar') { $('[data-slot=trips-body]', l.el).innerHTML = TripsCalendar(Y); bindCalSwipe(l); return; }
    const showNow = inYear(t);
    const past = [...S.pastTrips].filter(inYear).sort((a, b) => b.startISO.localeCompare(a.startISO));
    const total = past.length + 2;
    const row = (cls, time, cover, body, action, data, n) => `<div class="j-row ${cls}" style="--n:${n};--m:${total - 1 - n}"><span class="j-row__time">${time}</span><span class="j-node" aria-hidden="true"></span><button class="j-card" data-action="${action}" ${data}>${cover}<span class="j-row__body">${body}</span><span class="j-card__chev">${Icon(cls.includes('new') ? 'add' : 'chevron_right', 20)}</span></button></div>`;
    const today = isoOfDay(S.today), left = daysBetween(today, t.endISO), toStart = daysBetween(today, t.startISO);
    const status = toStart > 0 ? `Starts in ${toStart} day${toStart === 1 ? '' : 's'}` : left <= 0 ? 'Last day' : `${left} day${left === 1 ? '' : 's'} left`;
    const mon = (iso) => fmtDate(iso, { month: 'short' }), sameMonth = (a, b) => a.slice(0, 7) === b.slice(0, 7);
    const range = tripRange;
    // Side label: one month + year; two months + year; or each month with its short year when the trip crosses New Year
    const when = (a, b) => sameMonth(a, b) ? `<b>${mon(a)}</b><small>${a.slice(0, 4)}</small>`
      : a.slice(0, 4) === b.slice(0, 4) ? `<b>${mon(a)}–${mon(b)}</b><small>${a.slice(0, 4)}</small>`
      : `<b>${mon(a)} ’${a.slice(2, 4)}</b><b>${mon(b)} ’${b.slice(2, 4)}</b>`;
    $('[data-slot=trips-body]', l.el).innerHTML = `<div class="journey">
      ${row('j-row--new', '<b>Next</b>', '', '<span class="j-row__title">Plan a new trip</span>', 'soon', '', 0)}
      ${showNow ? row('j-row--now', '<small>Now</small>', TripCover(t.id), `<span class="j-row__title">${esc(t.name)}<span class="tag tag--accent"><span class="live-dot"></span>${status}</span></span><span class="j-row__sub">${range(t.startISO, t.endISO)}</span>${SettleMark(allSquare())}`, 'open-trip', '', 1) : ''}
      ${past.map((p, i) => row('', when(p.startISO, p.endISO), TripCover(p.id), `<span class="j-row__title">${esc(p.name)}</span><span class="j-row__sub">${range(p.startISO, p.endISO)}</span>${SettleMark(p.settled !== false)}`, 'open-past', `data-id="${p.id}"`, i + 2)).join('')}
    </div>`;
  },
};
const SettleMark = (done) => `<span class="settle-mark${done ? ' is-done' : ''}">${Icon(done ? 'check_circle' : 'schedule', 12)}${done ? 'Settled' : 'Not settled'}</span>`;
// Calendar view: a single month you can swipe through; trip days filled in the trip's tone, Monday-first weeks.
const TRIP_TONE = { lisbon: 'brand', thailand: 'accent', london: 'strong', paris: 'bold', edinburgh: 'neutral' };
const MONTHS_LONG = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const allTrips = () => [{ ...S.trip, action: 'open-trip', data: '' }, ...S.pastTrips.map((p) => ({ ...p, action: 'open-past', data: `data-id="${p.id}"` }))];
const monthKey = (y, m) => `${y}-${String(m).padStart(2, '0')}`;
const shiftMonth = (k, n) => { let y = +k.slice(0, 4), m = +k.slice(5) + n; while (m > 12) { m -= 12; y++; } while (m < 1) { m += 12; y--; } return monthKey(y, m); };
function tripMonths() {
  const keys = new Set();
  allTrips().forEach((x) => { for (let k = x.startISO.slice(0, 7); k <= x.endISO.slice(0, 7); k = shiftMonth(k, 1)) keys.add(k); });
  return [...keys].sort();
}
function calRange(Y) {
  const now = isoOfDay(S.today).slice(0, 7), ks = tripMonths();
  return Y ? [monthKey(Y, 1), monthKey(Y, 12)] : [ks[0], ks[ks.length - 1] > now ? ks[ks.length - 1] : now];
}
function calStart(Y) {
  const now = isoOfDay(S.today).slice(0, 7);
  if (!Y || +now.slice(0, 4) === Y) return now;
  const ks = tripMonths().filter((k) => +k.slice(0, 4) === Y);
  return ks.length ? ks[ks.length - 1] : monthKey(Y, 12);
}
function TripsCalendar(Y) {
  const [lo, hi] = calRange(Y);
  if (!S.calMonth || S.calMonth < lo || S.calMonth > hi) S.calMonth = calStart(Y);
  const k = S.calMonth, y = +k.slice(0, 4), m = +k.slice(5) - 1, days = new Date(y, m + 1, 0).getDate(), lead = (new Date(y, m, 1).getDay() + 6) % 7;
  const today = isoOfDay(S.today), trips = allTrips().filter((x) => x.startISO.slice(0, 7) <= k && x.endISO.slice(0, 7) >= k).sort((a, b) => a.startISO.localeCompare(b.startISO));
  const cells = [];
  for (let i = 0; i < lead; i++) cells.push('<span class="cal-day"></span>');
  for (let d = 1; d <= days; d++) {
    const iso = `${k}-${String(d).padStart(2, '0')}`, x = trips.find((t) => iso >= t.startISO && iso <= t.endISO), col = (lead + d - 1) % 7;
    const cls = (x ? ` is-trip tone-${TRIP_TONE[x.id] || 'brand'}${iso === x.startISO || col === 0 || d === 1 ? ' is-start' : ''}${iso === x.endISO || col === 6 || d === days ? ' is-end' : ''}` : '') + (iso === today ? ' is-today' : '');
    cells.push(x ? `<button class="cal-day${cls}" data-action="${x.action}" ${x.data} aria-label="${esc(x.name)}, ${fDay(iso)}">${d}</button>` : `<span class="cal-day${cls}">${d}</span>`);
  }
  const anim = S.calDir ? (S.calDir > 0 ? ' is-in-next' : ' is-in-prev') : ''; S.calDir = 0;
  return `<div class="cal">
    <section class="cal-month" data-swipe>
      <div class="cal-head">
        <button class="cal-nav" data-action="cal-step" data-dir="-1" aria-label="Previous month" ${k <= lo ? 'disabled' : ''}>${Icon('chevron_left', 20)}</button>
        <h2 class="cal-month__title">${MONTHS_LONG[m]} ${y}</h2>
        <button class="cal-nav" data-action="cal-step" data-dir="1" aria-label="Next month" ${k >= hi ? 'disabled' : ''}>${Icon('chevron_right', 20)}</button>
      </div>
      <div class="cal-body${anim}">
        <div class="cal-grid">${['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((w) => `<span class="cal-wd">${w}</span>`).join('')}${cells.join('')}</div>
      </div>
    </section>
    <div class="stack-8">
      <span class="section-label">${trips.length ? 'Trips in ' + MONTHS_LONG[m] : 'No trips in ' + MONTHS_LONG[m]}</span>
      ${trips.length ? `<div class="list">${trips.map((x) => `<button class="cal-legend__item tone-${TRIP_TONE[x.id] || 'brand'}" data-action="${x.action}" ${x.data}>${TripCover(x.id).replace('trip-cover', 'trip-cover trip-cover--sm')}<span class="list-row__main"><span class="cal-legend__name">${esc(x.name)}</span><span>${tripRange(x.startISO, x.endISO)}</span></span>${Icon('chevron_right', 20)}</button>`).join('')}</div>` : '<p class="list-row__sub" style="margin:0">Swipe to another month, or plan a new trip.</p>'}
    </div>
  </div>`;
}
function calStep(l, dir) {
  const [lo, hi] = calRange(S.tripsYear), next = shiftMonth(S.calMonth, dir);
  if (next < lo || next > hi) return;
  S.calMonth = next; S.calDir = dir; SCREENS.trips.render(l);
}
function bindCalSwipe(l) {
  const box = $('[data-swipe]', l.el); if (!box) return;
  let x0 = null, y0 = 0;
  box.addEventListener('pointerdown', (e) => { x0 = e.clientX; y0 = e.clientY; });
  box.addEventListener('pointercancel', () => (x0 = null));
  box.addEventListener('pointerup', (e) => {
    if (x0 == null) return; const dx = e.clientX - x0, dy = e.clientY - y0; x0 = null;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) { calSwiped = Date.now(); calStep(l, dx < 0 ? 1 : -1); }
  });
}
let calSwiped = 0;
// Trip covers: flat landmarks in app colours, a different light/bold mix per trip.
const cf = (v) => `style="fill:var(--${v})"`, cs = (v, w = 1.5) => `style="fill:none;stroke:var(--${v});stroke-width:${w};stroke-linecap:round;stroke-linejoin:round"`;
const COVERS = {
  lisbon: `<rect width="64" height="64" ${cf('primary-90')}/><circle cx="50" cy="15" r="6" ${cf('accent-50')}/><rect y="46" width="64" height="18" ${cf('primary-50')}/><path d="M7 54h9M28 58h12M46 52h10" ${cs('primary-80')}/><path d="M-2 40Q8 39 17 18Q31 37 45 18Q54 39 66 40" ${cs('primary-35')}/><path d="M24 26v13M31 28v11M38 26v13M10 34v5M52 34v5" ${cs('primary-35', 1)}/><rect x="15" y="16" width="4" height="32" ${cf('primary-35')}/><rect x="43" y="16" width="4" height="32" ${cf('primary-35')}/><rect y="39" width="64" height="3" ${cf('primary-35')}/>`,
  thailand: `<rect width="64" height="64" ${cf('accent-90')}/><circle cx="13" cy="13" r="6" ${cf('accent-50')}/><rect y="54" width="64" height="10" ${cf('accent-40')}/><rect x="12" y="40" width="26" height="14" ${cf('primary-50')}/><rect x="21" y="45" width="8" height="9" ${cf('primary-10')}/><path d="M6 42L25 31L44 42Z" ${cf('primary-35')}/><path d="M11 33L25 23L39 33Z" ${cf('primary-35')}/><path d="M16 24L25 15L34 24Z" ${cf('primary-35')}/><path d="M25 15V7" ${cs('accent-40', 2)}/><path d="M52 55C51 46 51 38 54 30" ${cs('primary-10', 2.5)}/><path d="M54 30C48 26 43 28 41 33C46 30 50 30 54 30ZM54 30C58 24 63 25 65 29C60 28 57 29 54 30ZM54 30C52 24 54 19 58 17C56 22 56 26 54 30ZM54 30C60 31 63 35 62 40C59 35 57 33 54 30Z" ${cf('primary-50')}/>`,
  london: `<rect width="64" height="64" ${cf('primary-35')}/><ellipse cx="49" cy="14" rx="9" ry="3.5" ${cf('primary-50')}/><ellipse cx="12" cy="24" rx="7" ry="2.5" ${cf('primary-50')}/><rect y="56" width="64" height="8" ${cf('primary-10')}/><rect x="25" y="28" width="14" height="28" ${cf('primary-90')}/><path d="M29 32v20M35 32v20" ${cs('primary-70')}/><rect x="23" y="16" width="18" height="13" ${cf('primary-95')}/><circle cx="32" cy="22.5" r="4.5" ${cf('accent-50')}/><path d="M32 22.5V19.5M32 22.5h2.2" ${cs('primary-10', 1.2)}/><path d="M23 16L32 5L41 16Z" ${cf('primary-80')}/><path d="M32 5V1" ${cs('primary-80')}/>`,
  edinburgh: `<rect width="64" height="64" ${cf('neutral-90')}/><circle cx="51" cy="13" r="5" ${cf('accent-90')}/><path d="M0 64V46C10 40 18 38 26 39C36 34 48 36 64 44V64Z" ${cf('neutral-50')}/><rect x="18" y="28" width="30" height="12" ${cf('neutral-30')}/><rect x="16" y="22" width="8" height="18" ${cf('neutral-30')}/><rect x="40" y="18" width="8" height="22" ${cf('neutral-30')}/><path d="M16 22h2v-2h2v2h2v-2h2v2M40 18h2v-2h2v2h2v-2h2v2" ${cs('neutral-30', 1)}/><path d="M43 18V9" ${cs('neutral-30', 1)}/><path d="M43 9h6l-2 2 2 2h-6" ${cf('accent-50')}/><rect x="28" y="32" width="3" height="4" ${cf('accent-50')}/><rect x="35" y="32" width="3" height="4" ${cf('accent-50')}/><rect y="58" width="64" height="6" ${cf('primary-35')}/>`,
  paris: `<rect width="64" height="64" ${cf('accent-50')}/><circle cx="14" cy="15" r="6" ${cf('accent-90')}/><rect y="56" width="64" height="8" ${cf('accent-40')}/><path d="M32 4L34.5 20H36L38 30H40.5L46 56H39.5C38 48 35.5 44 32 44C28.5 44 26 48 24.5 56H18L23.5 30H26L28 20H29.5Z" ${cf('primary-10')}/><rect x="25" y="29" width="14" height="2" ${cf('accent-50')}/><rect x="28.5" y="19" width="7" height="1.5" ${cf('accent-50')}/>`,
};
const TripCover = (id) => `<span class="trip-cover" aria-hidden="true"><svg viewBox="0 0 64 64">${COVERS[id] || ''}</svg></span>`;

/* ---------- Past trip (read-only) ---------- */
SCREENS.pastTrip = {
  render(l) {
    const p = S.pastTrips.find((x) => x.id === l.params.id);
    l.el.innerHTML = `<div class="screen__scroll"><div class="page" style="padding-bottom:150px">
      ${NavHeader(p.name)}
      <div class="stack-16" style="margin-top:16px">
        <div class="intro-block"><h2 class="screen-title">${p.name} <span aria-hidden="true">${p.flag}</span></h2><p class="intro-block__text">${p.dates} · ${p.members} members</p></div>
        <div class="summary"><div><div class="summary__label">Total expenses</div><div class="summary__value">${eur(p.total)}</div></div><div><div class="summary__label">Balances</div><div class="summary__value">${Tag(Icon('check', 14) + 'Trip settled', 'success')}</div></div></div>
      </div>
      <div style="margin:8px -16px 0">${p.days.map((d) => `
        <section class="accordion"><div class="accordion__header" style="position:static"><span class="accordion__title">${d.label}</span></div>
        <div class="timeline">${d.events.map(([t, x]) => `<div class="tl-row"><span class="tl-row__time">${t}</span><span class="tl-dot tl-dot--done">${Icon('check', 16)}</span><span class="tl-row__label">${esc(x)}</span></div>`).join('')}</div></section>`).join('')}
      </div></div></div>`;
  },
};

/* ---------- 02 · Trip detail (Itinerary / Expenses / Explore) ---------- */
SCREENS.trip = {
  live: true,
  render(l) {
    const u = l.ui;
    if (!u.built) {
      u.built = true; u.tab = u.tab || 'itinerary'; u.expTab = u.expTab || 'transactions'; u.filter = null;
      l.el.classList.add('trip');
      l.el.innerHTML = `
        <header class="hero">
          <img class="hero__img" src="${S.trip.hero}" alt="">
          <div class="hero__scrim"></div>
          <div class="hero__top">${IconButton('arrow_back_ios_new', { label: 'Back', action: 'back' })}${IconButton('more_vert', { label: 'More', action: 'trip-menu' })}</div>
          <div class="hero__bottom">
            <div data-slot="title"></div>
            <div class="hero__members" data-slot="members"></div>
          </div>
        </header>
        <div class="sheet">
          <nav class="tabs" role="tablist">${S.trip.tabs.map(([k, t]) => `<button class="tab" role="tab" data-action="trip-tab" data-tab="${k}"><span class="tab__label">${t}</span></button>`).join('')}</nav>
          <div class="tab-panels">${S.trip.tabs.map(([k]) => `<div class="tab-panel" data-panel="${k}"></div>`).join('')}</div>
        </div>
        <div class="floating" data-slot="floating"></div>`;
      requestAnimationFrame(() => alignToday(l));
    }
    $('[data-slot=title]', l.el).innerHTML = `<h1 class="hero__title">${esc(S.trip.name)}</h1><div class="hero__dates">${Icon('calendar_month', 16)}<span>${S.trip.start}</span>${Icon('arrow_forward', 14)}<span>${S.trip.end}</span></div>`;
    $('[data-slot=members]', l.el).innerHTML = `<button class="hero__members-btn" data-action="members"><span>${S.trip.memberIds.length} members</span>${AvatarStack(tripMembers().slice(0, 3), 'lg', `<span class="avatar avatar--add">${Icon('person_add_alt', 16)}</span>`)}</button>`;
    $$('.tab', l.el).forEach((b) => { const on = b.dataset.tab === u.tab; b.classList.toggle('is-active', on); b.setAttribute('aria-selected', on); });
    $$('.tab-panel', l.el).forEach((p) => p.classList.toggle('is-active', p.dataset.panel === u.tab));
    const ip = $('[data-panel=itinerary]', l.el);
    const key = JSON.stringify([S.days.map((d) => d.events.length), S.poll && (S.poll.status === 'closed' ? 'closed' : 'live'), S.poll && S.poll.options.length, S.dayOpen, S.itinRev]);
    if (u.itinKey !== key) {
      u.itinKey = key;
      ip.innerHTML = S.days.map(DaySection).join('');
      if (S.poll && S.poll.fresh) { $('.poll', ip)?.classList.add('is-entering'); S.poll.fresh = false; }
      S.days.forEach((d) => d.events.forEach((e) => delete e.landing));
    } else patchPoll(ip);
    if (u.tab === 'expenses') afterDinner();
    $('[data-panel=expenses]', l.el).innerHTML = ExpensesPanel(l);
    const ep = $('[data-panel=expenses]', l.el), still = u.expTab === 'balances' && allSquare();
    ep.classList.toggle('is-still', still); if (still) ep.scrollTop = 0;
    if (u.tab === 'expenses' && u.expTab === 'balances') {
      const now = balances(), seen = S.seenBal;
      if (S.settleAnim) animateSettle(ep, S.settleAnim.prev);
      else if (seen && Object.keys(now).some((id) => seen[id] !== undefined && seen[id] !== now[id])) animateSettle(ep, seen);
      S.seenBal = now;
      if (S.squareAnim) enterAllSquare($('[data-panel=expenses]', l.el));
    }
    S.settleAnim = null; S.squareAnim = false;
    $('[data-panel=explore]', l.el).innerHTML = ExplorePanel(l);
    hydratePhotos($('[data-panel=explore]', l.el));
    $('[data-slot=floating]', l.el).innerHTML =
      (u.tab === 'itinerary' ? `<button class="icon-btn" data-action="map" aria-label="Map view">${Icon('map', 20)}</button><button class="fab" data-action="add-plan" aria-label="Add plan">${Icon('add', 25)}</button>` : '') +
      (u.tab === 'expenses' ? `<button class="fab" data-action="add-expense" aria-label="Add expense">${Icon('add', 25)}</button>` : '');
    requestAnimationFrame(() => $$('.progress__fill', l.el).forEach((el) => {
      const id = el.closest('.poll-option').dataset.option; el.style.width = el.dataset.pct + '%'; barMemory[id] = +el.dataset.pct;
    }));
  },
};
function alignToday(l) {
  const p = $('[data-panel=itinerary]', l.el), sec = $(`[data-day="${S.today}"]`, p);
  if (sec) p.scrollTop = sec.offsetTop;
}
function alignPoll(l) {
  const p = $('[data-panel=itinerary]', l.el), card = $('.poll', p);
  if (card) p.scrollTo({ top: card.offsetTop - 75, behavior: RM ? 'auto' : 'smooth' });
}
function patchPoll(root) {
  const p = S.poll, card = root && $('.poll', root); if (!p || !card) return;
  const { voted, max } = pollStats(p);
  p.options.forEach((o) => {
    const node = $(`[data-option="${o.id}"]`, card); if (!node) return;
    const votes = byOrder(p.votes[o.id] || []), mine = votes.includes(S.me);
    $('.radio-check', node).classList.toggle('is-checked', mine);
    $('[data-action=vote]', node)?.setAttribute('aria-pressed', mine);
    const vs = $('.poll-option__voters', node), prev = (vs.dataset.ids || '').split(',').filter(Boolean);
    if (prev.join() !== votes.join()) {
      vs.innerHTML = (votes.length ? `<span class="avatar-stack avatar-stack--sm">${votes.slice(0, 3).map((id) => prev.includes(id) ? Avatar(id, 'sm') : Avatar(id, 'sm').replace('class="avatar ', 'class="avatar is-pop ')).join('')}</span>` : '') +
        `<span class="poll-option__count${prev.length !== votes.length ? ' is-roll' : ''}">${votes.length}</span>`;
      vs.dataset.ids = votes.join();
    }
    $('.progress__fill', node).style.width = (votes.length / max) * 100 + '%';
  });
  roll($('.poll__voted', card), voted);
  roll($('.poll__mins', card), p.minutesLeft);
}
const patchCurrent = () => { const t = tripLayer(); if (t) patchPoll($('[data-panel=itinerary]', t.el)); };
function highlight(panel, el, offset) {
  panel.scrollTo({ top: panel.scrollTop + el.getBoundingClientRect().top - panel.getBoundingClientRect().top - offset, behavior: RM ? 'auto' : 'smooth' });
  el.classList.remove('is-highlight'); void el.offsetWidth; el.classList.add('is-highlight');
  setTimeout(() => el.classList.remove('is-highlight'), 2400);
}
function focusPlan(sel) {
  S.dayOpen[S.today] = true;
  const t = goTrip('itinerary');
  requestAnimationFrame(() => { const p = $('[data-panel=itinerary]', t.el), el = $(sel, p); if (el) highlight(p, el, el.classList.contains('poll') ? 75 : 150); });
}
function focusTx(id) {
  const t = goTrip('expenses', 'transactions');
  requestAnimationFrame(() => { const p = $('[data-panel=expenses]', t.el), el = $(`[data-tx="${id}"]`, p); if (el) highlight(p, el, 220); });
}
const scrollToPlan = () => focusPlan('[data-decided]');
const findEvent = (dayId, id) => { const day = S.days.find((d) => d.id === dayId); return [day, day && day.events.find((e) => e.id === id)]; };
const placeOf = (t) => t.replace(/^(Dinner|Lunch|Breakfast|Ice cream) (at|in) |^(Walk to|Tram 28 to|Check-in at( the)?|Pickup back to|Pick up towards) /i, '');
function openEvent(dayId, id) {
  const [day, ev] = findEvent(dayId, id); if (!ev) return;
  const st = eventStatus(dayId, ev.time), data = `data-day="${dayId}" data-id="${id}"`;
  openSheet(SheetHead(esc(ev.title)) + `<div class="stack-16">
    <div class="event-meta"><span>${Icon('calendar_today', 16)}${day.label}</span><span>${Icon('schedule', 16)}${ev.time}</span>${st === 'done' ? Tag('Done', 'success') : ev.decided ? Tag('Decided by poll', 'accent') : Tag('Coming up', 'brand')}</div>
    <a class="btn btn--primary btn--block" style="margin-top:8px" href="${mapsUrl(placeOf(ev.title))}" target="_blank" rel="noopener">Open in Google Maps${Icon('open_in_new', 20)}</a>
    <div class="btn-row" style="margin-top:-8px">${Button('Edit plan', { variant: 'tertiary', before: Icon('edit', 20), action: 'event-edit', data })}${Button('Remove', { variant: 'tertiary', before: Icon('delete', 20), action: 'event-remove', data })}</div>
  </div>`);
}
function editEvent(dayId, id) {
  const [, ev] = findEvent(dayId, id); if (!ev) return;
  openSheet(SheetHead('Edit plan') + `<div class="stack-16">
    ${Field('What', TextInput({ value: ev.title, name: 'ev-title', attrs: 'autocomplete="off"' }))}
    <div class="when-field">
      ${Field('Day', `<label class="input"><select class="input__control" data-input="ev-day">${S.days.map((d) => `<option value="${d.id}"${d.id === dayId ? ' selected' : ''}>${d.label}</option>`).join('')}</select>${Icon('keyboard_arrow_down', 14)}</label>`)}
      ${Field('Time', TimeInput('ev-time', ev.time, 'step="300"'))}
    </div>
    ${Button('Save changes', { cls: 'btn--block', action: 'event-save', data: `data-day="${dayId}" data-id="${id}"` })}
  </div>`);
}
const Confirm = (title, text, label, action, data) => `<h2 class="modal__title">${title}</h2><p class="modal__text">${text}</p><div class="btn-row" style="width:100%">${Button('Cancel', { variant: 'outline', action: 'sheet-close' })}${Button(label, { variant: 'danger-solid', action, data })}</div>`;
function animateSettle(panel, prev) {
  const now = balances();
  $$('[data-member]', panel).forEach((row) => {
    const id = row.dataset.member; if (prev[id] === undefined || prev[id] === now[id]) return;
    const amt = $('.bal-amount', row), finalCls = amt.className, sign = (v) => (v > 0 ? '+' : '') + eur(v);
    amt.className = 'bal-amount ' + (prev[id] < 0 ? 'amount--neg' : prev[id] > 0 ? 'amount--pos' : 'amount--zero');
    countUp(prev[id], now[id], 700, (v) => (amt.textContent = sign(v)), () => { amt.className = finalCls; amt.textContent = sign(now[id]); if (now[id] === 0) row.classList.add('is-just-settled'); });
  });
}
function enterAllSquare(panel) {
  const box = $('.all-square', panel); if (!box) return;
  box.classList.add('is-enter');
  if (RM) return;
  const mark = $('.celebrate', box), colors = ['var(--primary-35)', 'var(--accent-40)', 'var(--accent-50)', 'var(--primary-70)', 'var(--success-50)'];
  setTimeout(() => {
    for (let i = 0; i < 28; i++) {
      const s = document.createElement('span'), a = (i / 28) * Math.PI * 2 + Math.random() * 0.3, d = 90 + Math.random() * 60;
      s.className = 'burst burst--' + (i % 3);
      s.style.cssText = `--dx:${Math.cos(a) * d}px;--dy:${Math.sin(a) * d}px;--rot:${Math.random() * 360 - 180}deg;background:${colors[i % 5]};animation-delay:${Math.random() * 160}ms`;
      mark.appendChild(s); setTimeout(() => s.remove(), 1300);
    }
  }, 650);
}

function ExpensesPanel(l) {
  const u = l.ui;
  let body = '';
  if (u.expTab === 'transactions') {
    const groups = S.days.slice().reverse().map((d) => [d, S.transactions.filter((t) => t.day === d.id)]).filter(([, t]) => t.length);
    body = groups.map(([d, txs]) => `
      <div class="group-label">${d.label}${d.id === S.today ? Tag('Today', 'accent') : ''}</div>
      <div class="tx-list">${txs.map((t) => `
        <button class="tx-row${t.id === S.lastTx ? ' is-new' : ''}" data-action="edit-tx" data-tx="${t.id}"><span class="icon-circle">${Icon(t.icon, 20)}</span>
          <span class="list-row__main"><span class="list-row__title">${esc(t.what)}</span><span class="list-row__sub">Paid by ${M(t.paidBy).name}</span></span>
          <span class="tx-row__amount">${eur(t.amount)}</span><span class="list-row__chevron">${Icon('chevron_right', 20)}</span></button>`).join('')}</div>`).join('');
  } else if (allSquare()) {
    body = `
      <div class="all-square">
        ${Celebrate()}
        <h3 class="all-square__title">Tudo pago, everyone!</h3>
        <p class="all-square__text">There is nothing left to pay.</p>
        ${Button('Share summary', { variant: 'outline', after: Icon('ios_share', 20), action: 'share-summary', cls: '', data: 'style="margin-top:12px"' })}
      </div>`;
  } else {
    const b = balances(), tr = transfers(b);
    const mine = tr.filter((t) => t.from === S.me);
    const gets = tr.filter((t) => t.to === S.me).reduce((s, t) => s + t.amount, 0);
    let head;
    if (mine.length) head = `<span class="balance-card__main"><span class="balance-card__title">You owe ${eur(mine[0].amount)}</span><span class="balance-card__sub">to ${M(mine[0].to).name}</span></span>${Button('Settle up', { cls: 'btn--sm', action: 'settle', data: `data-to="${mine[0].to}" data-amount="${mine[0].amount}"` })}`;
    else if (gets) head = `<span class="balance-card__main"><span class="balance-card__title">You get back ${eur(gets)}</span><span class="balance-card__sub">from ${tr.filter((t) => t.to === S.me).map((t) => M(t.from).name).join(' and ')}</span></span>`;
    else head = `<span class="balance-card__main"><span class="balance-card__title">You’re settled up</span><span class="balance-card__sub">${tr.length ? 'Waiting for ' + [...new Set(tr.map((t) => M(t.from).name))].join(' and ') : 'Nothing to pay'}</span></span>`;
    const base = balances(false);
    const rows = byOrder(Object.keys(b)).sort((x, y) => (x === S.me ? -1 : y === S.me ? 1 : base[x] - base[y])).map((id) => {
      const v = b[id], out = tr.filter((t) => t.from === id), inn = tr.filter((t) => t.to === id);
      const sub = v < 0 && out.length ? 'owes ' + out.map((t) => M(t.to).name).join(' and ') : '';
      return `<div class="list-row" data-member="${id}">${Avatar(id, 'md')}<span class="list-row__main"><span class="list-row__title">${M(id).name}${MemberTags(id)}</span>${sub ? `<span class="list-row__sub">${sub}</span>` : ''}</span>
        ${v === 0 && S.payments.length ? `<span class="settled-check">${Icon('check_circle', 20)}</span>` : ''}<span class="bal-amount ${v < 0 ? 'amount--neg' : v > 0 ? 'amount--pos' : 'amount--zero'}">${v > 0 ? '+' : ''}${eur(v)}</span></div>`;
    }).join('');
    body = `<div class="exp-head"><div class="balance-card">${head}</div><span class="section-label">Balances</span><div class="list">${rows}</div></div>`;
  }
  return `<div class="exp-head">${Summary()}${Segmented([['transactions', 'Transactions'], ['balances', 'Balances']], u.expTab, 'exp-tab')}</div>${body}`;
}

function ExplorePanel(l) {
  const f = l.ui.filter;
  const items = S.explore.filter((p) => !f || p.cat === f);
  return `<div class="exp-head">
    <div class="intro-block"><h2 class="intro-block__title">Ideas around Lisbon</h2><p class="intro-block__text">Places picked for your group, close to where you’re staying.</p></div>
    <div class="chips">${['Food', 'Sights', 'Nightlife', 'Day trips'].map((c) => `<button class="chip${c === f ? ' is-active' : ''}" data-action="explore-filter" data-value="${c}">${c}</button>`).join('')}</div>
    <div class="stack-16">${items.map((p) => `
      <div class="card explore-card">
        <div class="explore-card__media${PHOTO[p.name] ? ' has-photo' : ''}" data-photo="${esc(p.name)}"${PHOTO[p.name] ? ` style="background-image:url('${PHOTO[p.name]}')"` : ''}>
          <span class="explore-card__fallback">${Icon(p.icon, 25)}</span>
          <span class="explore-card__media-actions">
            <button class="media-btn" data-action="explore-photos" data-name="${esc(p.name)}" aria-label="More photos">${Icon('photo_library', 16)}</button>
            <a class="media-btn" href="${mapsUrl(p.maps || p.name)}" target="_blank" rel="noopener" aria-label="Open in Maps">${Icon('map', 16)}</a>
          </span>
        </div>
        <span class="explore-card__main">
          <span class="explore-card__name">${esc(p.name)}</span>
          <span class="explore-card__meta">${p.type} · ${p.distance}</span>
          <span class="explore-card__actions">
            ${Button('Add to itinerary', { variant: 'outline', cls: 'btn--sm', before: Icon('add', 14), action: 'explore-add', data: `data-name="${esc(p.name)}"` })}
            ${Button('Start a poll', { variant: 'outline', cls: 'btn--sm', before: Icon('how_to_vote', 14), action: 'explore-poll', data: `data-name="${esc(p.name)}"` })}
          </span>
        </span>
      </div>`).join('')}</div></div>`;
}

const PHOTO = {}, WIKI = {};
function wikiFor(p) {
  if (!p) return Promise.resolve(null);
  return (WIKI[p.name] = WIKI[p.name] || (async () => {
    for (const [lang, title] of p.wiki || []) {
      try {
        const r = await fetch(`https://${lang}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`);
        if (!r.ok) continue;
        const j = await r.json(), src = (j.thumbnail && j.thumbnail.source) || (j.originalimage && j.originalimage.source);
        if (src) return { lang, title, src };
      } catch (e) { /* offline */ }
    }
    return null;
  })());
}
function hydratePhotos(root) {
  $$('[data-photo]', root).forEach((el) => {
    const name = el.dataset.photo; if (PHOTO[name]) return;
    wikiFor(S.explore.find((p) => p.name === name)).then((w) => {
      if (!w) return;
      const img = new Image();
      img.onload = () => { PHOTO[name] = w.src; $$('[data-photo]').filter((n) => n.dataset.photo === name).forEach((n) => { n.style.backgroundImage = `url('${w.src}')`; n.classList.add('has-photo'); }); };
      img.src = w.src;
    });
  });
}
async function openGallery(name) {
  const p = S.explore.find((x) => x.name === name);
  openSheet(SheetHead(esc(name)) + `<div class="gallery" data-slot="gallery">${'<span class="gallery__item is-loading"></span>'.repeat(3)}</div>
    <p class="gallery__credit">Photos from Wikimedia Commons</p>
    <a class="btn btn--primary btn--block" href="${mapsUrl(p.maps || name)}" target="_blank" rel="noopener">Open in Google Maps${Icon('open_in_new', 20)}</a>`);
  const w = await wikiFor(p); let srcs = [];
  if (w) {
    try {
      const r = await fetch(`https://${w.lang}.wikipedia.org/api/rest_v1/page/media-list/${encodeURIComponent(w.title)}`), j = await r.json();
      srcs = (j.items || []).filter((i) => i.type === 'image' && i.srcset && i.srcset.length)
        .map((i) => { const s = i.srcset[i.srcset.length - 1].src; return s.startsWith('//') ? 'https:' + s : s; })
        .filter((s) => !/\.(svg|png)/i.test(s)).slice(0, 8);
    } catch (e) { /* offline */ }
    if (!srcs.length) srcs = [w.src];
  }
  const g = $('[data-slot=gallery]'); if (!g) return;
  g.innerHTML = srcs.length ? srcs.map((s) => `<img class="gallery__item" src="${s}" alt="" loading="lazy">`).join('') : '<p class="list-row__sub">Photos aren’t available right now.</p>';
}

/* ---------- 02.2 · Trip members ---------- */
const PALETTE = ['pink', 'green', 'purple', 'orange', 'yellow'];
function newColor(i) {
  const used = S.trip.memberIds.map((id) => M(id).color), free = PALETTE.filter((c) => !used.includes(c));
  return free[i] || PALETTE[(S.trip.memberIds.length + i) % PALETTE.length];
}
SCREENS.members = {
  render(l) {
    if (l.ui.built) return; l.ui.built = true;
    l.el.innerHTML = `<div class="screen__scroll"><div class="page">
      ${NavHeader('Trip members')}
      <div class="stack-8" style="margin-top:16px">
        <span class="section-label">Participants</span>
        <div class="list" data-slot="list">${tripMembers().map((id) => `<div class="list-row">${Avatar(id, 'md')}<span class="list-row__main"><span class="list-row__title">${M(id).name}${MemberTags(id)}</span></span></div>`).join('')}</div>
        <button class="add-row" data-action="member-new" style="margin-top:8px">${Icon('person_add', 20)}New participant</button>
        <button class="add-row" data-action="member-invite">${Icon('link', 20)}Invite via link</button>
      </div>
      <div class="btn-row" style="margin-top:auto">
        ${Button('Save', { variant: 'outline', action: 'member-save', disabled: true })}
        ${Button('Save & share', { action: 'member-save', data: 'data-share="1"', disabled: true })}
      </div>
      ${Button('Leave group', { variant: 'tertiary', cls: 'btn--block members__leave', before: Icon('logout', 20), action: 'member-leave' })}</div></div>`;
  },
};

/* ---------- 03.1 · Add new plan ---------- */
const isoOfDay = (id) => { const d = new Date(S.trip.startISO + 'T12:00'); d.setDate(d.getDate() + Math.max(0, dayIndex(id))); return d.toISOString().slice(0, 10); };
const dayOfIso = (iso) => { const i = Math.round((new Date(iso + 'T12:00') - new Date(S.trip.startISO + 'T12:00')) / 864e5); return S.days[i] ? S.days[i].id : null; };
const LIMITS = [5, 10, 15, 30, 60, 120];
const limitLabel = (m) => (m >= 60 ? m / 60 + (m === 60 ? ' hour' : ' hours') : m + ' min');
const addMin = (hhmm, m) => { const [h, mm] = hhmm.split(':').map(Number), t = Math.min(23 * 60 + 55, h * 60 + mm + m); return String(Math.floor(t / 60)).padStart(2, '0') + ':' + String(t % 60).padStart(2, '0'); };
function planConflict(u) {
  const day = S.days.find((d) => d.id === u.day);
  if (u.day === S.today && u.time <= S.now) return `Pick a time after ${S.now}`;
  const hit = day && day.events.find((e) => e.time === u.time);
  if (hit) return `${hit.title} is already planned at ${u.time}`;
  if (S.poll && S.poll.status !== 'closed' && S.poll.day === u.day && S.poll.time === u.time) return `A poll is already running for ${u.time}`;
  return '';
}
function showPlanError(l, force) {
  const u = l.ui, msg = planConflict(u), box = $('[data-slot=when-error]', l.el);
  if (force) u.showErr = true;
  const on = !!msg && (u.showErr || force);
  $$('.when-field .input', l.el).forEach((i) => i.classList.toggle('is-error', on));
  if (box) box.textContent = on ? msg : '';
  if (on && force) { const f = $('.when-field', l.el); f.classList.remove('is-shake'); void f.offsetWidth; f.classList.add('is-shake'); f.closest('.screen__scroll').scrollTo({ top: 0, behavior: RM ? 'auto' : 'smooth' }); }
  return !msg;
}
SCREENS.plan = {
  render(l) {
    const u = l.ui;
    if (!u.init) {
      u.init = true;
      u.day = S.today; u.time = addMin(S.now, 30); u.type = l.params.type || ''; u.mode = l.params.mode || 'pick';
      u.question = '';
      u.options = l.params.options || ['', ''];
      u.place = l.params.place || '';
      u.multiple = true; u.limit = true; u.limitMin = 15;
      u.initSig = planSig(u);
    }
    const filled = u.options.filter((o) => o.trim()).length;
    const optionField = (v, i) => `<div class="option-field" data-index="${i}">${TextInput({ value: v, placeholder: `Option ${i + 1}`, name: 'option', attrs: `data-index="${i}" autocomplete="off"`, after: v ? `<button class="input__clear" data-action="clear-option" data-index="${i}" aria-label="Clear">${Icon('cancel', 20)}</button>` : '' })}</div>`;
    const groupFields = `
      ${PollIntro(u)}
      ${Field('Question', TextInput({ value: u.question, placeholder: 'e.g. Where should we eat tonight?', name: 'question', attrs: 'maxlength="30" autocomplete="off"', after: `<span class="input__counter" data-slot="counter">${u.question.length}/30</span>` }))}
      ${Field('Options', `<div class="stack-8">${u.options.map(optionField).join('')}${u.options.length < 5 ? `<button class="add-row" data-action="add-option">${Icon('add', 20)}Add option</button>` : ''}</div>`)}
      <div>
        <button class="toggle-row" data-action="plan-toggle" data-key="multiple">${Toggle(u.multiple)}<span class="toggle-row__label">Allow multiple answers<small data-slot="multi-hint">${multiHint(u.multiple, filled)}</small></span></button>
        <div class="toggle-row"><button class="toggle-row__hit" data-action="plan-toggle" data-key="limit">${Toggle(u.limit)}<span class="toggle-row__label">Add time limit</span></button>${u.limit ? Button(limitLabel(u.limitMin), { variant: 'tertiary', cls: 'limit-btn', after: Icon('edit', 16), action: 'plan-limit' }) : ''}</div>

      </div>`;
    const pickFields = Field('Place', `<div class="option-field" data-index="p">${TextInput({ value: u.place, placeholder: 'Search a place', name: 'place', attrs: 'autocomplete="off"', after: Icon('search', 20) })}</div>`);
    l.el.innerHTML = `<div class="screen__scroll"><div class="page">
      ${NavHeader('Add new plan', 'plan-back')}
      <div class="stack-16" style="margin-top:16px">
        ${Field('When', `<div class="when-field">
          ${DateInput('plan-date', isoOfDay(u.day), `min="${S.trip.startISO}" max="${S.trip.endISO}"`)}
          ${TimeInput('plan-time', u.time, 'step="300"')}
        </div><span class="field__error" data-slot="when-error"></span>`)}
        ${Field('Type', Select(u.type || 'Choose a type', { action: 'plan-type', data: u.type ? '' : 'data-empty="1"' }))}
        ${Segmented([['pick', 'My pick'], ['group', 'Ask the group<span class="new-badge">New</span>']], u.mode, 'plan-mode')}
        ${u.mode === 'group' ? groupFields : pickFields}
      </div>
      <div class="stack-8" style="margin-top:auto;padding-top:24px">
        ${u.mode === 'group'
          ? '<p class="helper" style="margin:0">Winner will be auto-added to the itinerary</p>' + Button('Create poll', { cls: 'btn--block', action: 'create-poll', disabled: !planReady(u), soft: true })
          : Button('Add plan', { cls: 'btn--block', action: 'add-pick', disabled: !planReady(u), soft: true })}
      </div></div></div>`;
    if (u.showErr) showPlanError(l);
    markPlanErrors(l);
  },
};
const planSig = (u) => JSON.stringify([u.day, u.time, u.type, u.question.trim(), u.options.map((o) => o.trim()), u.place.trim(), u.multiple, u.limit, u.limitMin]);
// Required: type + place (My pick), or type + question + at least two options (Ask the group)
function planMissing(u) {
  const m = []; if (!u.type) m.push('type');
  if (u.mode === 'pick') { if (!u.place.trim()) m.push('place'); return m; }
  if (!u.question.trim()) m.push('question');
  let need = 2 - u.options.filter((o) => o.trim()).length;
  u.options.forEach((o, i) => { if (need > 0 && !o.trim()) { m.push('option' + i); need--; } });
  return m;
}
const planReady = (u) => !planMissing(u).length;
const planEl = (l, k) => k === 'type' ? $('[data-action=plan-type]', l.el) : k === 'place' ? $('[data-input=place]', l.el) : k === 'question' ? $('[data-input=question]', l.el) : $(`[data-input=option][data-index="${k.slice(6)}"]`, l.el);
function markPlanErrors(l) {
  const miss = l.ui.showReq ? planMissing(l.ui) : [];
  $$('.input.is-req', l.el).forEach((i) => i.classList.remove('is-error', 'is-req'));
  miss.forEach((k) => { const el = planEl(l, k), box = el && el.closest('.input'); if (box) box.classList.add('is-error', 'is-req'); });
  const b = $('[data-action=create-poll], [data-action=add-pick]', l.el); if (b) b.setAttribute('aria-disabled', String(!planReady(l.ui)));
}
function trySavePlan(l) {
  const miss = planMissing(l.ui);
  if (miss.length) { l.ui.showReq = true; markPlanErrors(l); const el = planEl(l, miss[0]); if (el) { el.focus(); revealInBox(el); } return; }
  if (!showPlanError(l, true)) return;
  if (l.ui.mode === 'group') createPoll(l.ui); else addPick(l.ui);
}
// "Save changes?" modal for Back with unsaved data
let saveCb = null;
function askSave(text, onSave) {
  openSheet(`<h2 class="modal__title">Save changes?</h2><p class="modal__text">${text}</p><div class="btn-row">${Button('Don’t save', { variant: 'tertiary', action: 'discard-yes' })}${Button('Save', { action: 'save-yes' })}</div>`, { modal: true });
  saveCb = onSave;
}
const PollIntro = (u) => {
  const others = tripMembers().filter((id) => id !== S.me);
  return `<div class="poll-intro">
    <span class="poll-intro__voters">${others.map((id, i) => `<span class="poll-intro__voter" style="--i:${i}">${Avatar(id)}<span class="poll-intro__tick">${Icon('check', 10)}</span></span>`).join('')}</span>
    <span class="poll-intro__text"><b>Decide together</b><span>Everyone votes, the favourite wins</span></span>

  </div>`;
};
const multiHint = (on, n) => (on && n > 2 ? `Voters can pick up to ${n - 1}` : 'Voters pick one');
function suggestFor(t) {
  const l = layerOf(t);
  const ex = t.dataset.input === 'option' ? l.ui.options.filter((o, j) => j !== +t.dataset.index).map((o) => o.trim()).filter(Boolean) : [];
  showSuggestions(t.closest('.option-field'), t.value, ex);
}
const placeSub = (n) => { const p = S.places[n]; return p ? `${p.area.split(',')[0]} · ${p.distance}` : 'Lisbon'; };
function showSuggestions(fieldEl, query, exclude = []) {
  $$('.suggestions').forEach((s) => s.remove());
  const q = query.trim().toLowerCase();
  const names = Object.keys(S.places).filter((n) => !exclude.includes(n) && (!q || n.toLowerCase().includes(q))).slice(0, 4);
  if (!names.length) return;
  const hl = (n) => { const i = n.toLowerCase().indexOf(q); return q && i >= 0 ? esc(n.slice(0, i)) + '<mark>' + esc(n.slice(i, i + q.length)) + '</mark>' + esc(n.slice(i + q.length)) : esc(n); };
  fieldEl.insertAdjacentHTML('beforeend', `<div class="suggestions">${names.map((n) => `<button class="suggestion" data-suggest="${esc(n)}">${Icon('location_on', 20)}<span class="list-row__main"><span class="suggestion__name">${hl(n)}</span><span class="suggestion__sub">${esc(placeSub(n))}</span></span></button>`).join('')}</div>`);
}

/* ---------- 05 · Add expense ---------- */
const SPLIT_ORDER = ['ari', 'mark', 'ren', 'nic', 'jamie'];
const splitIds = () => [...SPLIT_ORDER.filter((id) => S.trip.memberIds.includes(id)), ...tripMembers().filter((id) => !SPLIT_ORDER.includes(id))];
function txDraft(tx) {
  const sh = sharesOf(tx), vals = Object.values(sh), equal = vals.every((v) => Math.abs(v - vals[0]) <= 1);
  return { edit: tx.id, type: 'paid', amount: tx.amount, amountText: money(tx.amount), what: tx.what, when: tx.day, paidBy: tx.paidBy, split: equal ? 'equal' : 'unequal', currency: '€',
    shares: splitIds().map((member) => ({ member, amount: sh[member] || 0, included: member in sh, locked: !equal && member in sh })) };
}
function newDraft() {
  return { type: 'paid', amount: 0, amountText: '0,00', what: '', when: S.today, paidBy: S.me, split: 'equal', currency: '€',
    shares: splitIds().map((member) => ({ member, amount: 0, included: true, locked: false })) };
}
// The receipt can't know who paid: keep the current payer.
// Reads the optional request and returns { draft } or { error }. Adjusted rows are Manual, full payers Automatic.
const AI_WINE = /\b(wine|wines|alvarinho|drinks?|drank|drinking|alcohol|booze|glass|glasses)\b/;
const AI_FOOD = /\b(food|meals?|dishes|eat|ate|eating|starters?|mains?|desserts?|couvert)\b/;
const AI_EXCL = /\b(remove|exclude|excluding|without|skip|leave out|take out|take off|not|no|didn't|did not|don't|doesn't|does not|isn't|wasn't|won't|shouldn't|never|except|minus|drop)\b/;
const AI_ONLY = /\b(only|just)\b/;
const AI_PAY = /\b(pays?|paid|covers?|covered|treats?|treated)\b/;
const AI_EQUAL = /\b(equal|equally|evenly|even|same)\b/;
const AI_HINT = 'Try something like “Nic didn’t drink wine”';
function aiParse(text, paidBy = S.me) {
  const r = S.receipt, ids = splitIds();
  const food = r.food.reduce((s, [, v]) => s + v, 0), wine = r.wine.reduce((s, [, v]) => s + v, 0);
  const base = { type: 'paid', amount: food + wine, amountText: money(food + wine), what: 'Dinner', when: S.today, paidBy, currency: '€' };
  const equal = () => { const eq = split(food + wine, ids); return { draft: { ...base, split: 'equal', shares: ids.map((member) => ({ member, amount: eq[member], included: true, locked: false })) } }; };
  const t = String(text).toLowerCase().replace(/[’‘]/g, "'").trim();
  if (!t) return equal();
  const names = ids.map((id) => [id, M(id).name.toLowerCase()]);
  const out = { all: new Set(), food: new Set(), wine: new Set() }, only = {};
  let wantsEqual = false;
  for (const cl of t.split(/[.;!?\n]+|\bbut\b|\balso\b|\bthen\b/).map((s) => s.trim()).filter((s) => /[a-z]/.test(s))) {
    const who = [...new Set([...names.filter(([, n]) => new RegExp('\\b' + n + '\\b').test(cl)).map(([id]) => id), ...(/\b(me|i|myself)\b/.test(cl) ? [S.me] : [])])];
    if (!who.length) {
      if (AI_EQUAL.test(cl)) { wantsEqual = true; continue; }
      return { error: AI_EXCL.test(cl) || AI_ONLY.test(cl) ? 'I couldn’t find that person in this trip' : 'Sorry, I didn’t get that · ' + AI_HINT };
    }
    const scope = AI_WINE.test(cl) ? 'wine' : AI_FOOD.test(cl) ? 'food' : 'all';
    if (AI_ONLY.test(cl) || (AI_PAY.test(cl) && !AI_EXCL.test(cl))) only[scope] = [...new Set([...(only[scope] || []), ...who])];
    else if (AI_EXCL.test(cl)) who.forEach((id) => out[scope].add(id));
    else return { error: 'Sorry, I didn’t get that · ' + AI_HINT };
  }
  if (only.all) ids.forEach((id) => { if (!only.all.includes(id)) out.all.add(id); });
  const payers = (k) => (only[k] || ids).filter((id) => !out.all.has(id) && !out[k].has(id));
  const fp = payers('food'), wp = payers('wine');
  if (!fp.length && !wp.length) return { error: 'Someone has to pay for this dinner' };
  if (!fp.length) return { error: 'Someone has to pay for the food' };
  if (!wp.length) return { error: 'Someone has to pay for the wine' };
  if (fp.length === ids.length && wp.length === ids.length) return equal();
  const f = split(food, fp), w = split(wine, wp);
  const d = { ...base, split: 'unequal', shares: ids.map((member) => {
    const inc = fp.includes(member) || wp.includes(member);
    return { member, amount: (f[member] || 0) + (w[member] || 0), included: inc, locked: inc && !(fp.includes(member) && wp.includes(member)) };
  }) };
  resplit(d);
  return { draft: d };
}
// Manual (locked) rows keep their value; Automatic rows share what's left of the total.
function resplit(d) {
  const inc = d.shares.filter((s) => s.included);
  d.shares.forEach((s) => { if (!s.included) { s.amount = 0; s.locked = false; } });
  if (d.split === 'equal') { inc.forEach((s) => (s.locked = false)); const m = split(d.amount, inc.map((s) => s.member)); inc.forEach((s) => (s.amount = m[s.member])); return; }
  const free = inc.filter((s) => !s.locked);
  const lockedSum = inc.filter((s) => s.locked).reduce((a, s) => a + s.amount, 0);
  const m = split(Math.max(0, d.amount - lockedSum), free.map((s) => s.member)); free.forEach((s) => (s.amount = m[s.member]));
}
function setTransferTo(d, to) {
  d.to = to; d.split = 'equal';
  if (!d.what.trim() || d.autoWhat) { d.what = 'Transfer to ' + M(to).name; d.autoWhat = true; }
  d.shares.forEach((s) => { s.included = s.member === to; s.locked = false; }); resplit(d);
}
const draftSig = (d) => JSON.stringify([d.amount, d.what.trim(), d.when, d.paidBy, d.currency, d.type, d.shares.map((s) => [s.member, s.included, s.included ? s.amount : 0])]);
const shareSum = (d) => d.shares.reduce((a, s) => a + (s.included ? s.amount : 0), 0);
const expenseMissing = (d) => [!(d.amount > 0) && 'amount', !d.what.trim() && 'what', !d.when && 'when'].filter(Boolean);
const draftValid = (d) => !expenseMissing(d).length && d.shares.some((s) => s.included) && shareSum(d) === d.amount;
const submitBlocked = (l) => !draftValid(l.ui.draft) || (!!l.ui.draft.edit && draftSig(l.ui.draft) === l.ui.orig);
const EXP_FIELDS = { amount: '.amount-pill__input', what: '[data-input=what]', when: '[data-action=expense-when]' };
function markExpenseErrors(l) {
  const miss = l.ui.showReq ? expenseMissing(l.ui.draft) : [];
  Object.entries(EXP_FIELDS).forEach(([k, sel]) => { const el = $(sel, l.el), box = el && el.closest('.input, .amount-pill'); if (box) box.classList.toggle('is-error', miss.includes(k)); });
}
function updateSubmit(l) {
  const d = l.ui.draft, b = $('.expense__submit', l.el);
  if (b) b.setAttribute('aria-disabled', String(submitBlocked(l)));
  const msg = $('[data-slot=split-msg]', l.el);
  if (msg) { const off = d.type === 'transfer' || !(d.amount > 0) ? 0 : shareSum(d) - d.amount; msg.textContent = off < 0 ? `${eur(-off)} left to assign` : off > 0 ? `${eur(off)} over the total` : ''; }
  markExpenseErrors(l);
}
function trySaveExpense(l) {
  const d = l.ui.draft;
  if (d.edit && draftSig(d) === l.ui.orig) return;
  const miss = expenseMissing(d);
  if (miss.length) { l.ui.showReq = true; markExpenseErrors(l); const el = $(EXP_FIELDS[miss[0]], l.el); if (el) { el.focus(); revealInBox(el); } return; }
  if (!draftValid(d)) { const m = $('[data-slot=split-msg]', l.el); if (m) { m.classList.remove('is-shake'); void m.offsetWidth; m.classList.add('is-shake'); revealInBox(m); } return; }
  saveExpense(l);
}
const AmountPill = (name, value, currency, aria) => `<label class="amount-pill"><input class="amount-pill__input" data-input="${name}" inputmode="decimal" value="${value}" aria-label="${aria}"><button class="currency" data-action="currency">${esc(currency)}${Icon('keyboard_arrow_down', 20)}</button></label>`;
const SplitRow = (s, i, d) => {
  const editable = d.split === 'unequal' && s.included, manual = editable && s.locked;
  return `
  <div class="split-row${s.included ? '' : ' is-off'}" data-index="${i}">
    <button style="display:flex;align-items:center;gap:12px;align-self:stretch" data-action="toggle-share" data-index="${i}">${Checkbox(s.included)}<span class="split-row__name">${M(s.member).name}${s.member === S.me ? Tag('Me', 'accent') : ''}</span></button>
    <label class="amount-cell${manual ? ' is-manual' : ''}${d.split === 'unequal' ? '' : ' amount-cell--static'}"><span class="amount-cell__dot" aria-hidden="true"></span>${editable
      ? `<input class="amount-cell__input" data-input="share" data-index="${i}" inputmode="decimal" value="${money(s.amount)}" ${d.amount > 0 ? '' : 'readonly'} aria-label="${M(s.member).name}'s share">`
      : `<span class="amount-cell__value">${money(s.included ? s.amount : 0)}</span>`}<span class="amount-cell__currency">${d.currency}</span></label>
  </div>`;
};
SCREENS.expense = {
  render(l) {
    afterDinner();
    if (l.ui.built) return; l.ui.built = true;
    const d = l.ui.draft = l.ui.draft || (l.params.edit ? txDraft(S.transactions.find((t) => t.id === l.params.edit)) : newDraft()), edit = !!d.edit, tr = d.type === 'transfer';
    if (!l.ui.orig) l.ui.orig = draftSig(d);
    l.el.innerHTML = `<div class="screen__scroll"><div class="page">
      ${NavHeader(edit ? 'Edit expense' : 'Add expense', 'expense-back')}
      ${edit ? '' : `<div class="expense__segmented">${Segmented([['paid', 'Paid'], ['received', 'Received'], ['transfer', 'Transfer']], d.type, 'expense-type')}</div>`}
      <div class="expense__amount">
        ${edit || tr ? '' : Button('Scan receipt with AI', { variant: 'ai', after: Icon('auto_awesome', 20), action: 'ai-open' })}
        <span class="expense__or">${edit || tr ? 'Amount' : 'or enter amount'}</span>
        ${AmountPill('amount', d.amountText, d.currency, 'Amount')}
      </div>
      <div class="expense__form">
        ${Field('What', TextInput({ value: d.what, placeholder: 'e.g. Dinner', name: 'what' }))}
        ${Field('When', Input(dayLabel(d.when), 'calendar_today', { action: 'expense-when' }))}
        ${Field(tr ? 'From' : 'Paid by', Select(M(d.paidBy).name, { action: 'paid-by' }))}
        ${tr ? Field('To', Select(M(d.to).name, { action: 'transfer-to' })) : Field('Split', Select(d.split === 'equal' ? 'Equally' : 'Unequally', { action: 'split-mode' }))}
      </div>
      ${tr ? '<div class="expense__split"></div>' : `<div class="split-list expense__split">${d.shares.map((s, i) => SplitRow(s, i, d)).join('')}</div><p class="split-msg" data-slot="split-msg" role="status"></p>`}
      ${Button(edit ? 'Save changes' : 'Add expense', { cls: 'btn--block expense__submit', action: 'save-expense', disabled: submitBlocked(l), soft: true })}
      ${edit ? Button('Delete expense', { variant: 'tertiary', cls: 'btn--block expense__delete', action: 'delete-tx', data: `data-tx="${d.edit}"` }) : ''}
    </div></div>`;
    fitAmount(l); syncExpense(l);
    document.fonts?.ready.then(() => l.el.isConnected && syncExpense(l));
  },
};
function fitAmount(l) {
  const inp = $('.amount-pill__input', l.el); if (!inp) return;
  const m = $('#measure'); m.textContent = inp.value || inp.placeholder || '0,00';
  inp.style.width = Math.max(20, m.offsetWidth + 2) + 'px';
}
function syncExpense(l) {
  const d = l.ui.draft;
  $$('.split-row', l.el).forEach((row) => {
    const s = d.shares[+row.dataset.index];
    const inp = $('.amount-cell__input', row), val = $('.amount-cell__value', row);
    if (inp) {
      if (inp !== document.activeElement) inp.value = money(s.amount);
      inp.readOnly = !(d.amount > 0);
      inp.style.width = Math.ceil(textW(inp.value || '0') + 2) + 'px';
    }
    if (val) val.textContent = money(s.included ? s.amount : 0);
    $('.amount-cell', row).classList.toggle('is-manual', d.split === 'unequal' && s.included && s.locked);
  });
  updateSubmit(l);
}
function rerenderSplit(l) {
  const d = l.ui.draft;
  $('.split-list', l.el).innerHTML = d.shares.map((s, i) => SplitRow(s, i, d)).join('');
  syncExpense(l);
}

/* ---------- 06.1 · Settle up ---------- */
SCREENS.settle = {
  render(l) {
    if (l.ui.built) return; l.ui.built = true;
    const { to, amount } = l.params;
    l.ui.method = l.ui.method || 'Apple Pay'; l.ui.amount = amount; l.ui.currency = l.ui.currency || '€';
    l.el.innerHTML = `<div class="screen__scroll"><div class="page">
      ${NavHeader('Settle up')}
      <div class="settle">
        <div class="settle__pair">${Avatar(S.me, 'xl')}<span class="settle__flow" aria-hidden="true"><svg viewBox="0 0 72 24"><path class="settle__dash" d="M4 12H64"></path><path class="settle__head" d="M60 6L67 12L60 18"></path></svg></span><span class="settle__to">${Avatar(to, 'xl')}</span></div>
        <div class="settle__main">
        <div class="expense__amount">
          <span class="expense__or">You are paying ${M(to).name}</span>
          ${AmountPill('settle-amount', money(amount), l.ui.currency, 'Amount to pay')}
          <span class="settle__hint" data-slot="settle-hint"></span>
        </div>
        </div>
      </div>
      <div class="stack-16">
        ${Field('Payment method', `<button class="input" data-action="pay-method">${MethodInner(l.ui.method)}</button>`)}
        ${Button('Pay ' + cur(amount, l.ui.currency), { cls: 'btn--block', action: 'pay' })}
      </div></div></div>`;
    fitAmount(l); updateSettleHint(l);
  },
};

const SETTLE_FULL = '';
function updateSettleHint(l) {
  const max = l.params.amount, v = l.ui.amount, c = l.ui.currency;
  const btn = $('[data-action=pay]', l.el), hint = $('[data-slot=settle-hint]', l.el), st = $('[data-slot=settle-status]', l.el), name = M(l.params.to).name;
  if (false) st.innerHTML = v > max || v <= 0 ? '' : v === max
    ? `${Icon('check_circle', 16)}<span>This clears everything you owe ${name}</span>`
    : `${Icon('schedule', 16)}<span>${cur(max - v, c)} will stay open with ${name}</span>`;

  btn.disabled = v <= 0 || v > max; btn.textContent = 'Pay ' + cur(Math.min(v, max), c);
  hint.textContent = v > max ? `You owe ${cur(max, c)} at most` : '';
  hint.classList.toggle('is-error', v > max);
}
const APPLE_SVG = '<svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" aria-hidden="true"><path d="M16.37 12.6c-.03-2.64 2.16-3.9 2.26-3.97-1.23-1.8-3.15-2.05-3.83-2.08-1.63-.17-3.18.96-4.01.96-.83 0-2.1-.94-3.46-.91-1.78.03-3.42 1.04-4.34 2.63-1.85 3.2-.47 7.94 1.33 10.54.88 1.27 1.930 2.7 3.3 2.65 1.33-.05 1.83-.86 3.43-.86s2.05.86 3.45.83c1.43-.02 2.33-1.29 3.2-2.57 1.01-1.47 1.42-2.9 1.45-2.97-.03-.01-2.77-1.06-2.8-4.22zM13.73 4.85c.73-.89 1.22-2.12 1.09-3.35-1.05.04-2.33.7-3.08 1.58-.68.78-1.27 2.04-1.11 3.24 1.17.09 2.37-.6 3.1-1.47z"/></svg>';
const ApplePay = () => `<span class="apple-pay" aria-hidden="true">${APPLE_SVG}<span>Pay</span></span>`;
const PAY_METHODS = [
  { value: 'Apple Pay', sub: 'Default' },
  { value: 'Google Pay', sub: 'Linked to Ari' },
  { value: 'PayPal', sub: 'ari.m@gmail.com' },
  { value: 'Visa •••• 8812', sub: 'Credit or debit card' },
  { value: 'Bank transfer', sub: 'IBAN · 1–2 working days' },
  { value: 'TripUp card •••• 4417', sub: 'Balance' },
];
const MethodMark = (m) =>
  m === 'Apple Pay' ? ApplePay()
  : m === 'Google Pay' ? '<span class="pay-mark" aria-hidden="true"><b>G</b>&nbsp;Pay</span>'
  : m === 'PayPal' ? '<span class="pay-mark pay-mark--paypal" aria-hidden="true">PayPal</span>'
  : `<span class="method-card">${Icon(/^Bank/.test(m) ? 'account_balance' : /^TripUp/.test(m) ? 'card_travel' : 'credit_card', 20)}</span>`;
const MethodInner = (m) => `${MethodMark(m)}<span class="input__value">${esc(m)}</span>${Icon('keyboard_arrow_down', 14)}`;

/* ---------- Map view ---------- */
const MAP_PINS = [[20, 18], [40, 26], [62, 20], [76, 34], [58, 44], [32, 46], [46, 57]];
const PLAN_WIKI = [
  [/Castelo|Tram 28/i, [['en', 'São_Jorge_Castle']]], [/Chiado/i, [['en', 'Chiado']]], [/Airbnb|Alfama/i, [['en', 'Alfama']]],
  [/Time Out/i, [['en', 'Time_Out_Market'], ['en', 'Mercado_da_Ribeira']]], [/Santa Catarina/i, [['pt', 'Miradouro_de_Santa_Catarina'], ['en', 'Santa_Catarina_(Lisbon)']]],
  [/Manteigaria|Breakfast/i, [['en', 'Pastel_de_nata']]], [/Ultimo|Alcântara/i, [['en', 'Alcântara_(Lisbon)']]], [/Adega|Artigiano|Artis/i, [['en', 'Bairro_Alto']]],
];
function hydratePlanPhoto(title) {
  const key = 'plan:' + title; if (PHOTO[key]) return;
  const w = (PLAN_WIKI.find(([re]) => re.test(title)) || [null, []])[1];
  wikiFor({ name: key, wiki: [...w, ['en', 'Lisbon']] }).then((r) => {
    if (!r) return;
    const img = new Image();
    img.onload = () => { PHOTO[key] = r.src; $$('[data-plan-photo]').filter((n) => n.dataset.planPhoto === key).forEach((n) => { n.style.backgroundImage = `url('${r.src}')`; n.classList.add('has-photo'); }); };
    img.src = r.src;
  });
}
SCREENS.map = {
  render(l) {
    const today = S.days.find((d) => d.id === S.today);
    const plans = today.events.map((e) => ({ ...e }));
    if (S.poll && S.poll.status === 'live' && S.poll.day === S.today) plans.push({ time: S.poll.time, title: 'Dinner poll · ' + S.poll.options.length + ' options', poll: true });
    const sel = l.ui.sel ?? 0, p = plans[sel];
    const name = placeOf(p.title), pos = (i) => MAP_PINS[i % MAP_PINS.length], key = 'plan:' + p.title;
    const route = `<svg class="map__route${l.ui.drawn ? '' : ' is-draw'}" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><polyline points="${plans.map((_, i) => pos(i).join(',')).join(' ')}" pathLength="1"></polyline></svg>`;
    l.ui.drawn = true;
    l.el.innerHTML = `
      <div class="map">
        <span class="map__shape map__river"></span>
        <span class="map__shape map__park" style="left:6%;top:12%;width:120px;height:90px"></span>
        <span class="map__shape map__park" style="left:62%;top:22%;width:90px;height:70px"></span>
        ${[[0, 30, 100, -8], [0, 55, 100, 6], [20, 0, 6, 70], [55, 5, 6, 60], [70, 10, 6, 55]].map(([x, y, w, r], i) => i < 2
          ? `<span class="map__shape map__road" style="left:${x}%;top:${y}%;width:${w}%;transform:rotate(${r}deg)"></span>`
          : `<span class="map__shape map__road" style="left:${x}%;top:${y}%;width:6px;height:${r}%"></span>`).join('')}
        ${[[10, 40, 60, 40], [30, 20, 50, 30], [75, 45, 40, 60], [48, 60, 60, 36], [14, 58, 44, 44]].map(([x, y, w, h]) => `<span class="map__shape map__block" style="left:${x}%;top:${y}%;width:${w}px;height:${h}px"></span>`).join('')}
        ${route}
        ${plans.map((_, i) => `<button class="pin${i === sel ? ' is-active' : ''}" style="left:${pos(i)[0]}%;top:${pos(i)[1]}%" data-action="pin" data-index="${i}">${i + 1}</button>`).join('')}
      </div>
      <div class="map-top">${IconButton('arrow_back_ios_new', { action: 'back', label: 'Back' })}<span class="tag">Today · ${dayLabel(S.today)}</span></div>
      <div class="card map-card">
        <div class="map-card__media${PHOTO[key] ? ' has-photo' : ''}" data-plan-photo="${esc(key)}"${PHOTO[key] ? ` style="background-image:url('${PHOTO[key]}')"` : ''}><span class="map-card__fallback">${Icon(p.poll ? 'how_to_vote' : 'photo_camera', 25)}</span></div>
        <div class="map-card__head"><span class="map-card__num">${sel + 1}</span><span class="list-row__main"><span class="explore-card__name">${esc(p.title)}</span><span class="list-row__sub">${p.time} · ${eventStatus(S.today, p.time) === 'done' ? 'Done' : 'Coming up'}</span></span></div>
        ${p.poll ? Button('Open the poll', { variant: 'outline', cls: 'btn--block', action: 'back' }) : `<a class="btn btn--outline btn--block" href="${mapsUrl(name)}" target="_blank" rel="noopener">Open in Google Maps${Icon('open_in_new', 20)}</a>`}
      </div>`;
    hydratePlanPhoto(p.title);
  },
};

/* ---------- Card tab ---------- */
SCREENS.card = {
  live: true,
  render(l) {
    const c = S.card;
    l.el.innerHTML = `<div class="screen__scroll">
      <div class="screen-head"><h1 class="screen-title">Card</h1></div>
      <div class="content stack-16" style="padding-top:16px">
        <div class="pay-card"><span class="pay-card__brand">TripUp card</span><div class="pay-card__row"><span><small>Ari</small>•••• ${c.last4}</span>${Icon('contactless', 25)}</div></div>
        <div class="balance-row"><div><div class="summary__label">Balance</div><div class="summary__value">${eur(c.balance)}</div></div></div>
        <div class="btn-row">${Button('Top up', { action: 'top-up', before: Icon('add', 20) })}${Button('Card details', { variant: 'outline', action: 'card-details' })}</div>
        <p class="intro-block__text" style="margin:0">Pay with the card, pick the trip, TripUp splits it for you.</p>
        <span class="section-label" style="margin-top:8px">Payments to assign</span>
        ${c.payments.length ? `<div class="list">${c.payments.map((p) => `
          <div class="list-row"><span class="icon-circle">${Icon(p.icon, 20)}</span>
            <span class="list-row__main"><span class="list-row__title">${esc(p.what)} · ${eur(p.amount)}</span><span class="list-row__sub">${p.when}</span></span>
            ${Button('Assign to a trip', { variant: 'outline', cls: 'btn--sm', action: 'assign', data: `data-id="${p.id}"` })}</div>`).join('')}</div>`
          : `<p class="list-row__sub" style="margin:0">All card payments are assigned.</p>`}
      </div></div>`;
  },
};

/* ---------- Alerts tab ---------- */
SCREENS.alerts = {
  live: true,
  render(l) {
    l.el.innerHTML = `<div class="screen__scroll">
      <div class="screen-head"><h1 class="screen-title">Alerts</h1></div>
      <div class="content" style="padding-top:8px">${S.alerts.map((a) => {
        const nav = a.target && typeof a.target === 'object';
        const inner = `<span class="alert-row__lead">${a.who ? Avatar(a.who, 'md') : `<span class="icon-circle">${Icon('card_travel', 20)}</span>`}${a.unread ? '<span class="unread-dot" aria-label="Unread"></span>' : ''}</span>
          <span class="alert-row__main"><span class="alert-row__text">${esc(a.text)}</span><span class="alert-row__time">${a.time} · ${esc(S.trip.name)}</span></span>
          ${nav ? `<span class="list-row__chevron alert-row__chevron">${Icon('chevron_right', 20)}</span>` : ''}`;
        return nav ? `<button class="alert-row" data-action="alert-open" data-id="${a.id}">${inner}</button>` : `<div class="alert-row">${inner}</div>`;
      }).join('')}</div></div>`;
  },
};

/* ---------- Account tab ---------- */
SCREENS.account = {
  live: true,
  render(l) {
    l.el.innerHTML = `<div class="screen__scroll">
      <div class="screen-head"><h1 class="screen-title">Account</h1></div>
      <div class="content stack-16" style="padding-top:16px">
        <div class="profile"><button class="profile__avatar" data-action="profile-edit" aria-label="Edit profile">${Avatar(S.me, 'xl')}<span class="profile__edit">${Icon('edit', 16)}</span></button><button data-action="profile-edit"><h2 class="profile__name">${esc(M(S.me).name)}</h2></button></div>
        ${S.account.map((g) => `<div class="list">${g.map(([t, v, i]) => ListRow({ lead: `<span class="icon-circle icon-circle--soft">${Icon(i, 20)}</span>`, title: t, value: v, action: t === 'Profile' ? 'profile-edit' : 'soon' })).join('')}</div>`).join('')}
      </div></div>`;
  },
};

/* =====================================================================
   Flow logic
   ===================================================================== */
function tripLayer() { return stacks.trips.find((l) => l.type === 'trip'); }
function goTrip(tab, expTab) {
  if (currentTab !== 'trips') switchTab('trips');
  let t = tripLayer();
  if (!t) t = push('trip'); else popTo('trip');
  if (tab) t.ui.tab = tab;
  if (expTab) t.ui.expTab = expTab;
  SCREENS.trip.render(t);
  return t;
}

function createPoll(u) {
  const opts = u.options.map((o) => o.trim()).filter(Boolean);
  const p = S.poll = {
    day: u.day, time: u.time, question: u.question.trim() || 'Where should we eat tonight?',
    options: opts.map((name, i) => ({ id: 'o' + i, name })), votes: {},
    maxSelect: u.multiple ? Math.max(1, opts.length - 1) : 1, minutesLeft: u.limitMin, minutesTotal: u.limitMin, hasLimit: u.limit, status: 'live', fresh: true,
  };
  S.dayOpen[p.day] = true;
  const t = goTrip('itinerary');
  requestAnimationFrame(() => requestAnimationFrame(() => alignPoll(t)));
  toast('Poll created · the group has been notified');
  addAlert(S.me, 'You created a poll: ' + p.question, { poll: 1 });
  syncChrome();
  later(() => startPollClock(p), 5700);
}
function addPick(u) {
  const day = S.days.find((d) => d.id === u.day), place = u.place.trim();
  const meal = u.time < '11:00' ? 'Breakfast' : u.time < '16:00' ? 'Lunch' : 'Dinner';
  const ev = { id: 'e' + Date.now(), time: u.time, title: u.type === 'Restaurant' ? `${meal} at ${place}` : place, landing: true };
  day.events.push(ev); day.events.sort((a, b) => a.time.localeCompare(b.time));
  S.dayOpen[day.id] = true; S.itinRev++;
  addAlert(S.me, `You added ${ev.title} · ${day.label}, ${u.time}`, { event: ev.id, day: day.id });
  focusPlan(`[data-event="${ev.id}"]`);
  toast('Plan added to the itinerary');
}
function startPollClock(p) {
  if (S.poll !== p) return;
  const n = p.minutesTotal, tick = S.pollClock.durationMs / n;
  for (let i = 1; i <= n; i++) later(() => {
    if (S.poll !== p || p.status !== 'live') return;
    p.minutesLeft = n - i;
    if (p.minutesLeft === 0) closePoll(); else patchCurrent();
  }, tick * i);
  S.simulatedVotes.forEach((v) => later(() => {
    if (S.poll !== p || p.status !== 'live') return;
    const o = p.options[Math.min(v.option, p.options.length - 1)];
    if (!p.options.some((x) => (p.votes[x.id] || []).includes(v.member))) (p.votes[o.id] = p.votes[o.id] || []).push(v.member);
    patchCurrent();
  }, v.at));
}
function closePoll() {
  const p = S.poll; if (!p || p.status !== 'live') return;
  const count = (o) => (p.votes[o.id] || []).length, org = (o) => ((p.votes[o.id] || []).includes(S.trip.admin) ? 1 : 0);
  const ranked = [...p.options].sort((a, b) => count(b) - count(a) || org(b) - org(a));
  p.tieBroken = ranked.length > 1 && count(ranked[0]) === count(ranked[1]);
  const winner = ranked[0];
  p.status = 'closing'; p.winner = winner.id; p.winnerName = winner.name; p.minutesLeft = 0;
  const t = tripLayer(), card = t && $('[data-panel=itinerary] .poll', t.el);
  if (card) {
    const tag = $('.poll__live', card); tag.className = 'tag tag--neutral poll__live'; tag.textContent = 'Closed';
    p.options.forEach((o) => $(`[data-option="${o.id}"]`, card)?.classList.add(o.id === winner.id ? 'is-winner' : 'is-loser'));
  }
  later(() => {
    if (card && card.isConnected) { card.style.height = card.offsetHeight + 'px'; card.getBoundingClientRect(); card.classList.add('is-collapsing'); card.style.height = '0px'; }
  }, RM ? 0 : 1300);
  later(() => {
    p.status = 'closed';
    const today = S.days.find((d) => d.id === p.day);
    const ev = { id: 'e' + Date.now(), time: p.time, title: 'Dinner at ' + winner.name, decided: true, landing: true, hot: true };
    today.events.push(ev);
    later(() => { ev.hot = false; $$(`[data-event="${ev.id}"] .tl-dot`).forEach((d) => (d.className = 'tl-dot tl-dot--' + eventStatus(S.today, ev.time))); }, RM ? 0 : 4500);
    today.events.sort((a, b) => a.time.localeCompare(b.time));
    refresh();
    later(() => {
      addAlert(null, `New plan added to Lisbon · Dinner at ${winner.name}, today at ${p.time}`, { event: ev.id, day: S.today });
      notify('New plan added to Lisbon', `Dinner at ${winner.name}, today at ${p.time}. The poll has closed.`, scrollToPlan, 4000);
      syncChrome();
    }, 500);
  }, RM ? 0 : 1750);
}
function showPollResults() {
  const p = S.poll; if (!p) return;
  const { voted, max } = pollStats(p);
  openSheet(SheetHead('Poll results') + `<div class="poll" style="margin:0"><div><h3 class="poll__question" style="margin:0">${esc(p.question)}</h3><p class="poll__hint">Closed · ${esc(p.winnerName)} won${p.tieBroken ? ' · Tie broken by the organiser' : ''}</p></div>
    <div class="poll__options">${p.options.map((o) => PollOption(o, p, max, true)).join('')}</div><div class="poll__footer">${voted} of ${S.trip.memberIds.length} voted</div></div>`);
}
function showPlace(name) {
  const p = S.places[name] || { cuisine: 'Restaurant', price: '€€', rating: '–', reviews: '0', distance: '–', area: 'Lisbon' };
  openSheet(`
    <div class="map-strip map">
      <span class="map__shape map__river" style="top:55%;height:120px"></span>
      <span class="map__shape map__road" style="left:0;top:40%;width:100%;transform:rotate(-6deg)"></span>
      <span class="map__shape map__park" style="left:8%;top:10%;width:70px;height:44px"></span>
      <span class="pin is-active" style="left:50%;top:40%">${Icon('restaurant', 16)}</span>
    </div>
    <div class="stack-8" style="margin-top:16px">
      ${SheetHead(esc(name))}
      <div class="place__meta"><span class="place__rating">${p.rating} ${Icon('star', 14)}</span><span>(${p.reviews})</span><span>·</span><span>${p.cuisine}</span><span>·</span><span>${p.price}</span><span>·</span><span>${p.distance}</span></div>
      <div class="place__address">${Icon('location_on', 16)}${esc(p.area)}</div>
      <a class="btn btn--primary btn--block" style="margin-top:8px" href="${mapsUrl(name)}" target="_blank" rel="noopener">Open in Google Maps${Icon('open_in_new', 20)}</a>
    </div>`);
}
function openAI(l) {
  const r = S.receipt;
  const total = [...r.food, ...r.wine].reduce((s, [, v]) => s + v, 0);
  const el = openSheet(SheetHead('Scan receipt with AI') + `
    <div class="scan" data-slot="scan">
      <div class="scan__paper">${'<span class="scan__line"></span>'.repeat(7)}<span class="scan__beam"></span></div>
      <span class="scan__label">Scanning receipt…</span>
    </div>
    <div class="stack-16 ai-result" data-slot="ai-result" hidden>
      <div class="receipt-recap"><span class="receipt-recap__check">${Icon('check', 20)}</span>
        <span class="list-row__main"><span class="list-row__title">Receipt added</span><span class="list-row__sub">${r.place} · ${eur(total)}</span></span></div>
      <div class="field"><span class="field__label">Ask AI for customised splits (optional)</span>
        <textarea class="textarea" data-input="ai-text" placeholder="e.g. Ren and Nic didn't drink wine"></textarea></div>
      ${Button('Apply', { cls: 'btn--block', action: 'ai-apply' })}
    </div>`);
  later(() => {
    const scan = $('[data-slot=scan]', el), res = $('[data-slot=ai-result]', el); if (!scan || !res) return;
    scan.remove(); res.hidden = false;
  }, RM ? 0 : 1800);
}
function aiFill(l, d) {
  d.edit = l.ui.draft.edit; l.ui.draft = d;
  const page = $('.page', l.el), or = $('.expense__or', l.el), submit = $('.expense__submit', l.el);
  submit.setAttribute('aria-disabled', 'true');
  page.classList.add('is-reading'); or.textContent = 'Reading receipt…';
  const flash = (el) => { el.classList.remove('is-flash'); void el.offsetWidth; el.classList.add('is-flash'); };
  later(() => {
    page.classList.remove('is-reading'); or.textContent = 'or enter amount';
    const amt = $('.amount-pill__input', l.el);
    countUp(0, d.amount, 500, (v) => { amt.value = money(v); fitAmount(l); }, () => (d.amountText = money(d.amount)));
    later(() => {
      const w = $('[data-input=what]', l.el); let i = 0;
      const type = () => { w.value = d.what.slice(0, ++i); if (i < d.what.length) later(type, RM ? 0 : 22); };
      if (RM) w.value = d.what; else type();
    }, 120);
    later(() => {
      const b = $('[data-action=split-mode]', l.el); $('.input__value', b).textContent = d.split === 'equal' ? 'Equally' : 'Unequally'; flash(b);
      rerenderSplit(l);
      const list = $('.split-list', l.el);
      $$('.split-row', list).forEach((row, i) => {
        const s = d.shares[+row.dataset.index], cell = $('.amount-cell__input', row) || $('.amount-cell__value', row);
        const set = (v) => (cell.tagName === 'INPUT' ? (cell.value = money(v)) : (cell.textContent = money(v)));
        set(0);
        later(() => {
          countUp(0, s.amount, 380, set);
          if (d.split === 'unequal' && (s.locked || !s.included)) flash($('.amount-cell', row));
        }, 120 * (i + 1));
      });
      later(() => syncExpense(l), 120 * (d.shares.length + 1) + 400);
    }, 360);
  }, RM ? 0 : 1000);
}
function saveExpense(l) {
  const d = l.ui.draft;
  const shares = {}; d.shares.forEach((s) => { if (s.included) shares[s.member] = s.amount; });
  if (d.edit) {
    const tx = S.transactions.find((t) => t.id === d.edit);
    Object.assign(tx, { day: d.when, what: d.what.trim(), paidBy: d.paidBy, amount: d.amount, shares }); delete tx.splitAmong;
    S.lastTx = tx.id; later(() => (S.lastTx = null), 1700);
    pop(); refresh(); toast('Expense updated · balances updated');
    return;
  }
  const tx = { id: 't' + Date.now(), day: d.when, what: d.what.trim(), paidBy: d.paidBy, amount: d.amount, shares, icon: d.type === 'transfer' ? 'swap_horiz' : /dinner|lunch|restaurant/i.test(d.what) ? 'restaurant' : 'receipt_long' };
  S.transactions.unshift(tx); S.lastTx = tx.id; later(() => (S.lastTx = null), 1700);
  addAlert(S.me, `You added ${tx.what} · ${eur(tx.amount)}`, { tx: tx.id });
  const t = goTrip('expenses', 'transactions');
  $('[data-panel=expenses]', t.el).scrollTop = 0;
  toast('Expense added · balances updated');
  refresh();
}
function pay(l) {
  const btn = $('[data-action=pay]', l.el), amt = Math.min(l.ui.amount, l.params.amount), left = l.params.amount - amt;
  const c = l.ui.currency || '€';
  btn.classList.add('is-busy'); btn.setAttribute('aria-busy', 'true'); btn.innerHTML = `${Icon('progress_activity', 20).replace('icon ', 'icon spin ')}Processing…`;
  later(() => {
    const prev = balances();
    S.payments.push({ from: S.me, to: l.params.to, amount: amt });
    S.settleAnim = { prev };
    addAlert(S.me, `You paid ${M(l.params.to).name} ${cur(amt, c)}`, 'balances');
    openSheet(`<div class="paid">${DrawCheck('draw-check--success')}<h2 class="modal__title">Paid</h2><p class="modal__text">${cur(amt, c)} to ${M(l.params.to).name}</p></div>`, { modal: true });
    later(() => openSheet(`<button class="close-btn" data-action="sheet-close" aria-label="Close">${Icon('close', 20)}</button>
      <h2 class="modal__title">Payment sent!</h2>
      <span class="success-mark">${Icon('check', 25)}</span>
      <p class="modal__text">${left > 0 ? `You still owe ${M(l.params.to).name} ${cur(left, c)}.` : `You’re square with ${M(l.params.to).name}.`}</p>
      ${Button('Done', { cls: 'btn--block', action: 'sheet-close' })}`, { modal: true, onClose: afterPayment }), RM ? 300 : 1000);
  }, 900);
}
function afterPayment() {
  S.holdSquare = true;
  goTrip('expenses', 'balances');
  refresh();
  const rest = transfers().filter((t) => t.from !== S.me);
  if (!rest.length) { S.holdSquare = false; S.squareAnim = allSquare(); refresh(); return; }
  rest.forEach((t, i) => later(() => {
    const prev = balances();
    S.payments.push({ ...t }); S.settleAnim = { prev };
    if (t.to === S.me) {
      const msg = `${M(t.from).name} paid you ${eur(t.amount)}`;
      addAlert(t.from, msg, 'balances');
      notify(msg, 'Lisbon · balances updated', () => goTrip('expenses', 'balances'), 2400);
    }
    refresh();
    if (i === rest.length - 1) later(() => {
      S.holdSquare = false;
      if (!allSquare()) { refresh(); return; }
      S.squareAnim = true; refresh();
      later(() => {
        addAlert(null, 'Lisbon is all squared up · Ready for the next adventure!', 'balances');
        notify('Lisbon is all squared up', 'Ready for the next adventure!', () => goTrip('expenses', 'balances'), 4000);
        syncChrome();
      }, 1800);
    }, 1600);
  }, 600 + 1800 * i));
}
function addMember(name, color = 'yellow') {
  name = name.trim().replace(/^./, (c) => c.toUpperCase());
  let id = Object.keys(S.members).find((k) => S.members[k].name.toLowerCase() === name.toLowerCase());
  if (!id) {
    id = 'm' + Date.now() + Math.floor(Math.random() * 1000);
    S.members[id] = { name, color };
    S.order.push(id);
  } else if (!S.trip.memberIds.includes(id)) S.members[id].color = color;
  if (!S.trip.memberIds.includes(id)) S.trip.memberIds.push(id);
  addAlert(S.me, `You added ${name} to Lisbon`, 'itinerary');
  return name;
}

/* =====================================================================
   Event handling
   ===================================================================== */
const layerOf = (el) => Object.values(stacks).flat().find((l) => l.el.contains(el)) || topLayer();
const actions = {
  back: () => pop(),
  'plan-back': (el) => { const l = layerOf(el); if (planSig(l.ui) !== l.ui.initSig) askSave('You’ve started adding this plan.', () => trySavePlan(l)); else pop(); },
  'expense-back': (el) => { const l = layerOf(el); if (draftSig(l.ui.draft) !== l.ui.orig) askSave(l.ui.draft.edit ? 'You’ve changed this expense.' : 'You’ve started adding this expense.', () => trySaveExpense(l)); else pop(); },
  'discard-yes': () => { saveCb = null; closeSheet(true); pop(); },
  'save-yes': () => { const cb = saveCb; saveCb = null; closeSheet(true); cb && cb(); },
  soon,
  restart: () => {
    $('#restart-pill').classList.remove('is-in');
    const d = $('#device .layers'); if (RM) return start();
    d.style.transition = 'opacity var(--dur-fast) var(--ease-out)'; d.style.opacity = '0';
    setTimeout(() => { start(); requestAnimationFrame(() => (d.style.opacity = '1')); }, 160);
  },
  nav: (el) => switchTab(el.dataset.tab),
  'open-trip': () => push('trip'),
  'hero-replay': (el) => { el.replaceWith(el.cloneNode(true)); },
  crew: () => {},
  'band-badge': (el) => { const i = (BAND_ICONS.indexOf(el.textContent.trim()) + 1) % BAND_ICONS.length; el.innerHTML = Icon(BAND_ICONS[i], 25); el.classList.remove('is-pop'); void el.offsetWidth; el.classList.add('is-pop'); },
  sky: (el, e) => e && skySpawn(el, e.clientX, e.clientY),
  'sky-balloon': (el) => {
    const b = $('.sky-balloon__boost', el); b.classList.remove('is-boost'); void b.offsetWidth; b.classList.add('is-boost');
    skyNext(el.closest('.screen'));
  },
  'open-past': (el) => push('pastTrip', { id: el.dataset.id }),
  'trips-year': (el) => { const l = layerOf(el); openPicker('Show trips from', [{ value: '', label: 'All years' }, ...(l.ui.years || []).map((y) => ({ value: String(y), label: String(y) }))], S.tripsYear ? String(S.tripsYear) : '', (v) => { S.tripsYear = v ? +v : null; S.calMonth = null; SCREENS.trips.render(l); }); },
  'cal-step': (el) => calStep(layerOf(el), +el.dataset.dir),
  'trips-view': (el) => { S.tripsView = el.dataset.value; SCREENS.trips.render(layerOf(el)); },
  'trip-tab': (el) => { const l = layerOf(el); l.ui.tab = el.dataset.tab; SCREENS.trip.render(l); },
  'exp-tab': (el) => { const l = layerOf(el); l.ui.expTab = el.dataset.value; SCREENS.trip.render(l); },
  'toggle-day': (el) => { const id = el.dataset.id; S.dayOpen[id] = !S.dayOpen[id]; el.closest('.accordion').classList.toggle('is-collapsed', !S.dayOpen[id]); el.setAttribute('aria-expanded', S.dayOpen[id]); },
  members: () => push('members'),
  map: () => push('map'),
  pin: (el) => { const l = layerOf(el); l.ui.sel = +el.dataset.index; SCREENS.map.render(l); },
  'add-plan': () => push('plan'),
  'add-expense': () => push('expense'),
  'explore-filter': (el) => { const l = layerOf(el); l.ui.filter = l.ui.filter === el.dataset.value ? null : el.dataset.value; SCREENS.trip.render(l); },
  'explore-add': (el) => { const p = S.explore.find((x) => x.name === el.dataset.name); push('plan', { mode: 'pick', place: p.name, type: p.cat === 'Food' ? 'Restaurant' : 'Activity' }); },
  'explore-poll': (el) => { const p = S.explore.find((x) => x.name === el.dataset.name); push('plan', { mode: 'group', options: [p.name, ''], type: p.cat === 'Food' ? 'Restaurant' : 'Activity' }); },
  vote: (el) => {
    const p = S.poll; if (!p || p.status !== 'live') return;
    const id = el.dataset.id, list = (p.votes[id] = p.votes[id] || []);
    const mine = list.includes(S.me);
    const count = p.options.filter((o) => (p.votes[o.id] || []).includes(S.me)).length;
    if (!mine && count >= p.maxSelect) {
      if (p.maxSelect === 1) { p.options.forEach((o) => (p.votes[o.id] = (p.votes[o.id] || []).filter((m) => m !== S.me))); p.votes[id].push(S.me); patchCurrent(); return; }
      const node = el.closest('.poll-option'); node.classList.remove('is-shake'); void node.offsetWidth; node.classList.add('is-shake');
      toast(`You can pick up to ${p.maxSelect}`, 'info', 'toast--info'); return;
    }
    p.votes[id] = mine ? list.filter((m) => m !== S.me) : [...list, S.me];
    patchCurrent();
  },
  place: (el) => showPlace(el.dataset.name),
  'poll-results': showPollResults,
  'poll-edit': () => {
    const ic = (i, d) => `<span class="icon-circle icon-circle--soft${d ? ' icon-circle--danger' : ''}">${Icon(i, 20)}</span>`;
    openSheet(SheetHead('Edit poll') + `<div class="list">
      ${ListRow({ lead: ic('edit'), title: 'Edit question and options', action: 'soon' })}
      ${ListRow({ lead: ic('how_to_vote'), title: 'Close voting now', sub: 'The option with most votes wins', action: 'poll-close-now' })}
    </div><div class="list" style="margin-top:16px">${ListRow({ lead: ic('delete', 1), title: 'Delete poll', action: 'poll-delete', chevron: false, cls: 'list-row--danger' })}</div>`);
  },
  'poll-close-now': () => { closeSheet(); closePoll(); },
  'poll-delete': () => { closeSheet(); S.poll = null; refresh(); toast('Poll deleted', 'delete'); },
  'sheet-close': () => closeSheet(),
  pick: (el) => { const cb = pickerCb; closeSheet(true); cb && cb(el.dataset.value); },
  'push-open': (el) => {
    if (el.dataset.swiped) return;
    el.classList.remove('is-in');
    pushTap && pushTap();
  },
  'alert-open': (el) => {
    const a = S.alerts.find((x) => x.id === el.dataset.id), t = a.target; a.unread = false;
    refresh();
    if (t.tx) { if (S.transactions.some((x) => x.id === t.tx)) focusTx(t.tx); else toast('This expense was deleted', 'info', 'toast--info'); }
    else if (t.poll) focusPlan(S.poll && S.poll.status !== 'closed' ? '.poll' : '[data-decided]');
    else if (t.event) { S.dayOpen[t.day] = true; focusPlan(`[data-event="${t.event}"]`); }
  },
  // Itinerary items
  event: (el) => openEvent(el.dataset.day, el.dataset.id),
  'event-edit': (el) => editEvent(el.dataset.day, el.dataset.id),
  'event-save': (el) => {
    const [day, ev] = findEvent(el.dataset.day, el.dataset.id); if (!ev) return closeSheet();
    const title = $('[data-input=ev-title]').value.trim() || ev.title, to = $('[data-input=ev-day]').value, time = $('[data-input=ev-time]').value || ev.time;
    Object.assign(ev, { title, time });
    const target = S.days.find((d) => d.id === to) || day;
    if (target !== day) { day.events = day.events.filter((e) => e !== ev); target.events.push(ev); }
    target.events.sort((a, b) => a.time.localeCompare(b.time));
    S.dayOpen[target.id] = true; S.itinRev++;
    closeSheet(); refresh(); toast('Plan updated');
    later(() => focusPlan(`[data-event="${ev.id}"]`), 280);
  },
  'event-remove': (el) => {
    const [day, ev] = findEvent(el.dataset.day, el.dataset.id); if (!ev) return;
    openSheet(Confirm('Remove this plan?', `${esc(ev.title)} · ${day.label}, ${ev.time}`, 'Remove', 'event-remove-yes', `data-day="${day.id}" data-id="${ev.id}"`), { modal: true });
  },
  'event-remove-yes': (el) => {
    const [day, ev] = findEvent(el.dataset.day, el.dataset.id); if (!ev) return closeSheet();
    day.events = day.events.filter((e) => e !== ev); S.itinRev++;
    closeSheet(); refresh(); toast('Plan removed', 'delete');
  },
  // Trip menu
  'trip-menu': () => {
    const ic = (i) => `<span class="icon-circle icon-circle--soft">${Icon(i, 20)}</span>`;
    openSheet(SheetHead(esc(S.trip.name)) + `<div class="list">
      ${ListRow({ lead: ic('ios_share'), title: 'Share trip', sub: 'Invite people with a link', action: 'trip-share' })}
      ${ListRow({ lead: ic('edit'), title: 'Edit trip details', sub: 'Name and dates', action: 'trip-edit' })}
      ${ListRow({ lead: ic('group'), title: 'Trip members', sub: `${S.trip.memberIds.length} members`, action: 'trip-members' })}
      <button class="list-row" data-action="trip-mute">${ic('notifications_off')}<span class="list-row__main"><span class="list-row__title">Mute notifications</span><span class="list-row__sub">Only for this trip</span></span>${Toggle(!!S.trip.muted)}</button>
    </div>
    <div class="list" style="margin-top:16px">${ListRow({ lead: `<span class="icon-circle icon-circle--soft icon-circle--danger">${Icon('logout', 20)}</span>`, title: 'Leave trip', action: 'soon', chevron: false, cls: 'list-row--danger' })}</div>`);
  },
  'member-invite': () => { navigator.clipboard?.writeText(location.href).catch(() => {}); toast('Invite link copied · share it with anyone', 'link'); },
  'member-leave': () => {
    const owe = transfers().find((t) => t.from === S.me), due = transfers().filter((t) => t.to === S.me).reduce((s, t) => s + t.amount, 0);
    if (owe) return openSheet(`<h2 class="modal__title">Settle up first</h2><p class="modal__text">You owe ${eur(owe.amount)} to ${M(owe.to).name}. Settle up before leaving ${esc(S.trip.name)}.</p><div class="btn-row">${Button('Cancel', { variant: 'tertiary', action: 'sheet-close' })}${Button('Settle up', { action: 'leave-settle', data: `data-to="${owe.to}" data-amount="${owe.amount}"` })}</div>`, { modal: true });
    if (due) return openSheet(`<h2 class="modal__title">Wait for your money</h2><p class="modal__text">The group still owes you ${eur(due)}. You can leave once everyone has paid.</p>${Button('OK', { cls: 'btn--block', action: 'sheet-close' })}`, { modal: true });
    openSheet(Confirm(`Leave ${esc(S.trip.name)}?`, 'You won’t see the plans, polls or expenses any more.', 'Leave', 'soon'), { modal: true });
  },
  'leave-settle': (el) => { closeSheet(true); push('settle', { to: el.dataset.to, amount: +el.dataset.amount }); },
  'trip-share': () => { closeSheet(); navigator.clipboard?.writeText(location.href).catch(() => {}); toast('Invite link copied · share it with anyone'); },
  'trip-members': () => { closeSheet(true); if (topLayer().type !== 'members') push('members'); },
  'trip-mute': (el) => { S.trip.muted = !S.trip.muted; const t = $('.toggle', el); t.classList.toggle('is-on', S.trip.muted); t.setAttribute('aria-checked', S.trip.muted); toast(S.trip.muted ? 'Notifications muted for ' + S.trip.name : 'Notifications on for ' + S.trip.name, S.trip.muted ? 'notifications_off' : 'notifications'); },
  'trip-edit': () => { closeSheet(); soon(); },
  'trip-edit-old': () => {
    const date = (name, v) => DateInput(name, v);
    openSheet(SheetHead('Edit trip details') + `<div class="stack-16">
      ${Field('Trip name', TextInput({ value: S.trip.name, name: 'trip-name', attrs: 'maxlength="24" autocomplete="off"' }))}
      <div class="when-field">${Field('Start', date('trip-start', S.trip.startISO))}${Field('End', date('trip-end', S.trip.endISO))}</div>
      ${Button('Save changes', { cls: 'btn--block', action: 'trip-save' })}</div>`);
  },
  'trip-save': () => {
    const n = $('[data-input=trip-name]').value.trim(), s = $('[data-input=trip-start]').value, e = $('[data-input=trip-end]').value;
    if (n) S.trip.name = n;
    if (s && e && s <= e) Object.assign(S.trip, { startISO: s, endISO: e, start: fShort(s), end: fShort(e), dates: fRange(s, e) });
    closeSheet(); refresh(); toast('Trip details updated');
  },
  // Account
  'profile-edit': () => {
    const m = M(S.me); S.profileDraft = { name: m.name, color: m.color };
    openSheet(SheetHead('Edit profile') + `<div class="stack-16">
      <div class="profile" data-slot="profile-preview">${Avatar(S.me, 'xl')}</div>
      ${Field('Avatar colour', `<div class="swatches">${PALETTE.map((c) => `<button class="swatch avatar--${c}${c === m.color ? ' is-active' : ''}" data-action="profile-color" data-color="${c}" aria-label="${c}"></button>`).join('')}</div>`)}
      ${Field('Name', TextInput({ value: m.name, name: 'profile-name', attrs: 'maxlength="20" autocomplete="off"' }))}
      ${Button('Save', { cls: 'btn--block', action: 'profile-save' })}</div>`);
  },
  'profile-color': (el) => { S.profileDraft.color = el.dataset.color; $$('.swatch').forEach((s) => s.classList.toggle('is-active', s === el)); profilePreview(); },
  'profile-save': () => { const d = S.profileDraft, m = M(S.me); if (d.name.trim()) m.name = d.name.trim(); m.color = d.color; closeSheet(); refresh(); toast('Profile updated'); },
  // Members
  'member-new': (el) => {
    const l = layerOf(el), list = $('[data-slot=list]', l.el), rows = $$('[data-input=new-member]', list);
    const empty = rows.find((r) => !r.value.trim()); if (empty) return empty.focus();
    list.insertAdjacentHTML('beforeend', `<div class="list-row new-member"><span class="avatar avatar--md avatar--ghost">${Icon('person', 20)}</span><input class="input__control" data-input="new-member" placeholder="Type a name" autocomplete="off" maxlength="20" aria-label="New participant name"></div>`);
    $('input', list.lastElementChild).focus();
  },
  'member-save': (el) => {
    const l = layerOf(el), rows = $$('[data-input=new-member]', l.el).filter((r) => r.value.trim()); if (!rows.length) return;
    const colors = rows.map((_, i) => newColor(i)), names = rows.map((r, i) => addMember(r.value, colors[i]));
    pop();
    const who = names.length > 1 ? names.slice(0, -1).join(', ') + ' and ' + names[names.length - 1] + ' were' : names[0] + ' was';
    toast(`${who} added to ${S.trip.name}${el.dataset.share ? ' · invite link copied' : ''}`);
    refresh();
  },
  // Plan
  'plan-limit': (el) => { const l = layerOf(el); openPicker('Voting closes after', LIMITS.map((m) => ({ value: String(m), label: limitLabel(m) })), String(l.ui.limitMin), (v) => { l.ui.limitMin = +v; SCREENS.plan.render(l); }); },
  'plan-type': (el) => { const l = layerOf(el); openPicker('Type', ['Restaurant', 'Activity', 'Transport', 'Stay'].map((v) => ({ value: v, label: v })), l.ui.type, (v) => { l.ui.type = v; SCREENS.plan.render(l); }); },
  'plan-mode': (el) => { const l = layerOf(el); l.ui.mode = el.dataset.value; SCREENS.plan.render(l); },
  'plan-toggle': (el) => { const l = layerOf(el); l.ui[el.dataset.key] = !l.ui[el.dataset.key]; SCREENS.plan.render(l); },
  'add-option': (el) => { const l = layerOf(el); l.ui.options.push(''); SCREENS.plan.render(l); const f = $(`[data-input=option][data-index="${l.ui.options.length - 1}"]`, l.el); f?.focus(); if (f) setTimeout(() => revealInBox(f), 320); },
  'clear-option': (el) => { const l = layerOf(el); l.ui.options[+el.dataset.index] = ''; SCREENS.plan.render(l); },
  'create-poll': (el) => trySavePlan(layerOf(el)),
  'add-pick': (el) => trySavePlan(layerOf(el)),
  // Expense
  'expense-type': (el) => {
    const l = layerOf(el), d = l.ui.draft, was = d.type; if (was === el.dataset.value) return;
    d.type = el.dataset.value;
    if (d.type === 'transfer') { const owe = transfers().find((t) => t.from === d.paidBy); setTransferTo(d, owe ? owe.to : tripMembers().find((id) => id !== d.paidBy)); }
    else if (was === 'transfer') { if (d.autoWhat) { d.what = ''; d.autoWhat = false; } d.split = 'equal'; d.shares.forEach((s) => { s.included = true; s.locked = false; }); resplit(d); }
    l.ui.built = false; SCREENS.expense.render(l);
  },
  'transfer-to': (el) => { const l = layerOf(el), d = l.ui.draft; openPicker('To', tripMembers().filter((id) => id !== d.paidBy).map((id) => ({ value: id, label: M(id).name })), d.to, (v) => { setTransferTo(d, v); l.ui.built = false; SCREENS.expense.render(l); }); },
  'paid-by': (el) => { const l = layerOf(el), d = l.ui.draft; openPicker('Paid by', tripMembers().map((id) => ({ value: id, label: M(id).name + (id === S.me ? ' (me)' : '') })), d.paidBy, (v) => { d.paidBy = v; if (d.type === 'transfer') { setTransferTo(d, d.to === v ? tripMembers().find((id) => id !== v) : d.to); l.ui.built = false; SCREENS.expense.render(l); return; } $('[data-action=paid-by] .input__value', l.el).textContent = M(v).name; updateSubmit(l); }); },
  'split-mode': (el) => { const l = layerOf(el), d = l.ui.draft; openPicker('Split', [{ value: 'equal', label: 'Equally', sub: 'Everyone pays the same' }, { value: 'unequal', label: 'Unequally', sub: 'Edit any amount, the rest re-balances' }], d.split, (v) => { d.split = v; d.shares.forEach((s) => (s.locked = false)); resplit(d); $('[data-action=split-mode] .input__value', l.el).textContent = v === 'equal' ? 'Equally' : 'Unequally'; rerenderSplit(l); }); },
  'expense-when': (el) => { const l = layerOf(el), d = l.ui.draft; openPicker('When', S.days.map((x) => ({ value: x.id, label: x.label })), d.when, (v) => { d.when = v; $('[data-action=expense-when] .input__value', l.el).textContent = dayLabel(v); updateSubmit(l); }); },
  currency: (el) => {
    const l = layerOf(el), d = l.ui.draft, now = d ? d.currency : l.ui.currency;
    openPicker('Currency', CURRENCIES.map(([v, n, s]) => ({ value: v, label: `${n} · ${v}`, sub: s })), now, (v) => {
      el.innerHTML = esc(v) + Icon('keyboard_arrow_down', 20);
      if (d) { d.currency = v; $$('.amount-cell__currency', l.el).forEach((x) => (x.textContent = v)); updateSubmit(l); }
      else { l.ui.currency = v; updateSettleHint(l); }
    });
  },
  'toggle-share': (el) => { const l = layerOf(el), d = l.ui.draft, s = d.shares[+el.dataset.index]; s.included = !s.included; s.locked = false; resplit(d); rerenderSplit(l); },
  'ai-open': (el) => openAI(layerOf(el)),
  'ai-chip': () => { const t = $('[data-input=ai-text]'); t.value = 'Remove the wine for Ren and Nic'; $('[data-action=ai-apply]').disabled = false; },
  'ai-apply': () => {
    const l = topLayer(), res = aiParse($('[data-input=ai-text]')?.value || '', l.ui.draft.paidBy);
    if (res.error) { toast(res.error, 'info', 'toast--info'); $('[data-input=ai-text]')?.focus(); return; }
    closeSheet(); aiFill(l, res.draft);
  },
  'save-expense': (el) => trySaveExpense(layerOf(el)),
  // Settle
  settle: (el) => push('settle', { to: el.dataset.to, amount: +el.dataset.amount }),
  'pay-method': (el) => { const l = layerOf(el); openPicker('Payment method', PAY_METHODS.map((m) => ({ value: m.value, label: m.value, sub: m.sub === 'Balance' ? 'Balance ' + eur(S.card.balance) : m.sub, lead: MethodMark(m.value) })), l.ui.method, (v) => { l.ui.method = v; $('[data-action=pay-method]', l.el).innerHTML = MethodInner(v); }); },
  // Transactions
  'edit-tx': (el) => push('expense', { edit: el.dataset.tx }),
  'delete-tx': (el) => { const tx = S.transactions.find((t) => t.id === el.dataset.tx); openSheet(Confirm('Delete this expense?', `${esc(tx.what)} · ${eur(tx.amount)}. Balances will update for everyone.`, 'Delete', 'delete-tx-yes', `data-tx="${tx.id}"`), { modal: true }); },
  'delete-tx-yes': (el) => { S.transactions = S.transactions.filter((t) => t.id !== el.dataset.tx); closeSheet(); popTo('trip'); refresh(); toast('Expense deleted · balances updated', 'delete'); },
  'explore-photos': (el) => openGallery(el.dataset.name),
  pay: (el) => pay(layerOf(el)),
  'share-summary': () => toast('Trip summary copied to share'),
  // Card
  'top-up': () => openPicker('Top up', [2000, 5000, 10000].map((v) => ({ value: String(v), label: '+' + eur(v) })), '', (v) => { S.card.balance += +v; toast('Card topped up · +' + eur(+v)); refresh(); }),
  'card-details': () => openSheet(SheetHead('Card details') + `<div class="list">${[['Card number', '•••• •••• •••• ' + S.card.last4], ['Expiry', S.card.expiry], ['Cardholder', M(S.me).name], ['Wallet', 'Added to Apple Pay']].map(([t, v]) => ListRow({ title: t, value: v, chevron: false })).join('')}</div>`),
  assign: (el) => {
    const p = S.card.payments.find((x) => x.id === el.dataset.id);
    openPicker('Assign to a trip', [{ value: 'lisbon', label: 'Lisbon ' + S.trip.flag, sub: `Split equally between ${S.trip.memberIds.length}` }], '', () => {
      S.card.payments = S.card.payments.filter((x) => x !== p);
      S.transactions.unshift({ id: 't' + Date.now(), day: S.today, what: p.what, paidBy: S.me, amount: p.amount, splitAmong: [...S.trip.memberIds], icon: p.icon });
      addAlert(S.me, `You added ${p.what} · ${eur(p.amount)}`, { tx: S.transactions[0].id });
      toast(`Assigned to Lisbon · split between ${S.trip.memberIds.length}`); refresh();
    });
  },
};
document.addEventListener('click', (e) => {
  const picker = e.target.closest('.input')?.querySelector('input[type=date], input[type=time]');
  if (picker) { try { picker.showPicker(); } catch (err) { picker.focus(); } return; }
  const sug = e.target.closest('[data-suggest]');
  if (sug) return;
  const el = e.target.closest('[data-action]');
  if (el && Date.now() - calSwiped < 300 && el.closest('[data-swipe]')) return;
  if (el && !el.disabled && actions[el.dataset.action]) { e.preventDefault(); actions[el.dataset.action](el, e); return; }
  if (!el && e.target.closest('#device') && !e.target.closest('input, textarea, select, label, a, button, #overlay-host, #push-host')) showRestart();
});
const CURRENCIES = [['€', 'Euro', 'EUR · trip currency'], ['$', 'US dollar', 'USD'], ['£', 'British pound', 'GBP'], ['CHF', 'Swiss franc', 'CHF'], ['R$', 'Brazilian real', 'BRL']];
let restartTimer;
function showRestart() {
  const b = $('#restart-pill'), on = b.classList.toggle('is-in');
  clearTimeout(restartTimer); if (on) restartTimer = setTimeout(() => b.classList.remove('is-in'), 4000);
}
function profilePreview() {
  const d = S.profileDraft, slot = $('[data-slot=profile-preview]'); if (!slot) return;
  slot.innerHTML = `<span class="avatar avatar--xl avatar--${d.color}">${esc((d.name.trim()[0] || '?').toUpperCase())}</span>`;
}
document.addEventListener('pointerdown', (e) => {
  const sug = e.target.closest('[data-suggest]'); if (!sug) return;
  e.preventDefault();
  const field = sug.closest('.option-field'), l = layerOf(field), idx = field.dataset.index, v = sug.dataset.suggest;
  if (idx === 'p') l.ui.place = v; else l.ui.options[+idx] = v;
  SCREENS.plan.render(l);
});
document.addEventListener('input', (e) => {
  const t = e.target, k = t.dataset.input; if (!k) return;
  const l = layerOf(t);
  if (k === 'new-member') {
    const rows = $$('[data-input=new-member]', l.el), i = rows.indexOf(t), av = $('.avatar', t.closest('.new-member')), v = t.value.trim();
    const letter = v ? v[0].toUpperCase() : '';
    if (letter && av.textContent !== letter) { av.className = `avatar avatar--md avatar--${newColor(i)}`; av.textContent = letter; void av.offsetWidth; av.classList.add('is-pop'); }
    else if (!letter && !av.classList.contains('avatar--ghost')) { av.className = 'avatar avatar--md avatar--ghost'; av.innerHTML = Icon('person', 20); }
    $$('[data-action=member-save]', l.el).forEach((b) => (b.disabled = !rows.some((r) => r.value.trim())));
  }
  if (t.classList.contains('input__native') && t.value) { const sh = $('.input__value', t.parentNode); if (sh) sh.textContent = t.type === 'date' ? fDay(t.value) : t.value; }
  if (k === 'plan-date' || k === 'plan-time') { if (k === 'plan-date') { const id = dayOfIso(t.value); if (id) l.ui.day = id; else { t.value = isoOfDay(l.ui.day); const sh = $('.input__value', t.parentNode); if (sh) sh.textContent = fDay(t.value); } } else if (t.value) l.ui.time = t.value; showPlanError(l, false); }
  if (k === 'profile-name') { S.profileDraft.name = t.value; profilePreview(); }
  if (k === 'settle-amount') {
    const v = cleanMoney(t.value); if (v !== t.value) t.value = v;
    l.ui.amount = parseMoney(v); fitAmount(l); updateSettleHint(l);
  }
  if (k === 'question') { l.ui.question = t.value; $('[data-slot=counter]', l.el).textContent = t.value.length + '/30'; markPlanErrors(l); }
  if (k === 'option' || k === 'place') {
    if (k === 'option') l.ui.options[+t.dataset.index] = t.value; else l.ui.place = t.value;
    suggestFor(t);
    const filled = l.ui.options.filter((o) => o.trim()).length;
    markPlanErrors(l);
    const hint = $('[data-slot=multi-hint]', l.el); if (hint) hint.textContent = multiHint(l.ui.multiple, filled);
  }
  if (k === 'amount') { const d = l.ui.draft, v = cleanMoney(t.value); if (v !== t.value) t.value = v; d.amountText = v; d.amount = parseMoney(v); resplit(d); fitAmount(l); syncExpense(l); }
  if (k === 'what') { l.ui.draft.what = t.value; l.ui.draft.autoWhat = false; syncExpense(l); }
  if (k === 'share') { const d = l.ui.draft, s = d.shares[+t.dataset.index], v = cleanMoney(t.value); if (v !== t.value) t.value = v; s.amount = parseMoney(v); s.locked = true; resplit(d); syncExpense(l); }
});
document.addEventListener('focusin', (e) => {
  const t = e.target, k = t.dataset?.input;
  if (k === 'option' || k === 'place') suggestFor(t);
  if (k === 'share' && !(layerOf(t).ui.draft.amount > 0)) { $('.amount-pill__input', layerOf(t).el)?.focus(); return; }
  if (k === 'amount' && parseMoney(t.value) === 0) { t.value = ''; fitAmount(layerOf(t)); }
  // Select the whole value so typing replaces it
  if (k === 'share' || k === 'settle-amount' || k === 'amount') { selectOnFocus = t; setTimeout(() => { try { t.setSelectionRange(0, t.value.length); } catch (err) { t.select(); } }, 0); }
});
let selectOnFocus = null;
document.addEventListener('mouseup', (e) => { if (selectOnFocus && e.target === selectOnFocus) e.preventDefault(); selectOnFocus = null; });
document.addEventListener('change', (e) => { const t = e.target; if (t.classList?.contains('input__native') && t.value) { const sh = $('.input__value', t.parentNode); if (sh) sh.textContent = t.type === 'date' ? fDay(t.value) : t.value; } });
// iOS: enable :active pressed states on touch
document.addEventListener('touchstart', () => {}, { passive: true });
document.addEventListener('focusout', (e) => {
  const t = e.target, k = t.dataset?.input;
  if (k === 'option' || k === 'place') setTimeout(() => { if (!t.closest('.option-field')?.contains(document.activeElement)) $$('.suggestions').forEach((s) => s.remove()); }, 150);
  if (k === 'amount') { const l = layerOf(t), d = l.ui.draft; t.value = d.amountText = money(d.amount); fitAmount(l); }
  if (k === 'share') { const l = layerOf(t); syncExpense(l); t.value = money(l.ui.draft.shares[+t.dataset.index].amount); }
  if (k === 'settle-amount') { const l = layerOf(t); t.value = money(l.ui.amount); fitAmount(l); }
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && e.target.dataset?.input === 'new-member' && e.target.value.trim()) actions['member-save']($('[data-action=member-save]', layerOf(e.target).el));
  if ((e.key === 'Enter' || e.key === ' ') && e.target.matches?.('.tl-row[data-action]')) { e.preventDefault(); actions.event(e.target); }
});

/* =====================================================================
   Boot / restart
   ===================================================================== */
function splash() {
  $('#device .splash')?.remove();
  if (RM) return;
  const el = document.createElement('div');
  el.className = 'splash'; el.setAttribute('aria-hidden', 'true');
  el.innerHTML = `<span class="splash__logo"><span class="splash__trip">Trip</span><span class="splash__upclip"><span class="splash__up"><span style="--i:0">U</span><span style="--i:1">p</span></span></span><span class="splash__route"><svg viewBox="0 0 64 20"><path d="M3 13C18 19 36 18 60 3" pathLength="1"></path></svg><span class="splash__plane">${Icon('flight', 16)}</span></span></span>`;
  $('#device').appendChild(el);
  const place = () => {
    const tt = $('.splash__tittle', el), w = $('.splash__word', el); if (!tt) return;
    const a = tt.getBoundingClientRect(), b = w.getBoundingClientRect();
    tt.style.setProperty('--cx', (b.left + b.width / 2 - (a.left + a.width / 2)) + 'px');
    tt.style.setProperty('--cy', (b.top + b.height * 0.62 - (a.top + a.height / 2)) + 'px');
  };
  place(); document.fonts?.ready.then(place);
  setTimeout(() => el.classList.add('is-out'), 2350);
  setTimeout(() => el.remove(), 2950);
}
function start() {
  timers.forEach(clearTimeout); timers = []; barMemory = {};
  closeSheet(true); $('#toast-host').innerHTML = ''; $('#push-host').innerHTML = '';
  S = structuredClone(DATA);
  S.poll = null; S.lastTx = null; S.tripsYear = null; S.tripsView = 'list'; S.calMonth = null; S.calDir = 0;
  S.days.forEach((d) => d.events.forEach((e, i) => (e.id = d.id + '-' + i)));
  S.dayOpen = Object.fromEntries(S.days.map((d) => [d.id, true]));
  S.itinRev = 0; S.seenBal = balances();
  setClock('18:30');
  $('#restart-pill')?.classList.remove('is-in');
  $('#layers').innerHTML = '';
  stacks = { trips: [], card: [], alerts: [], account: [] };
  currentTab = 'trips';
  stacks.trips.push(makeLayer('trips', {}, true));
  syncChrome();
  splash();
}
if (/[?&]bare/.test(location.search)) document.body.classList.add('bare');
start();
