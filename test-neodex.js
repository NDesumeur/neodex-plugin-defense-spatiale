// lancé par le test « local » de NeoDex : la vérification interne (le sens des routes de toutes les cartes), une vague lancée,
// une carte à plusieurs routes, le plein écran et la place prise (avec NEO_SHOTS : garde des images du jeu)
module.exports = async ({ pj, sleep }) => {
  const C = code => pj(`(() => { const T = document.getElementById('tdCanvas').__td, td = T.st(); ${code} })()`);
  const shot = async n => { if (!process.env.NEO_SHOTS) return; const d = await pj(`document.getElementById('tdCanvas').toDataURL()`); require('fs').writeFileSync(require('path').join(process.env.NEO_SHOTS, 'defense-' + n + '.png'), Buffer.from(d.split(',')[1], 'base64')); };
  await pj(`window.__e = []; addEventListener('error', e => __e.push(e.message)); 0`);
  const chk = await C('return T.check();'); if (chk !== 'ok') throw new Error('vérification : ' + chk);
  const keep = await pj(`document.getElementById('tdMap').value`);
  await pj(`document.getElementById('tdNew').click(), 0`); await sleep(200); await shot('0-depart');
  await pj(`document.dispatchEvent(new KeyboardEvent('keydown', {key: 'Enter', bubbles: true})), 0`); await sleep(2500); await shot('1-vague');
  const w = await C('return td.mode + "|" + td.wave + "|" + (td.foes.length + td.queue.length);'); if (!/^play\|1\|[1-9]/.test(w)) throw new Error('la vague 1 devait partir : ' + w);
  // une carte à deux routes (Double flux)
  await pj(`(() => { const s = document.getElementById('tdMap'); s.value = '2'; s.dispatchEvent(new Event('change')); document.getElementById('tdNew').click(); return 0; })()`); await sleep(300);
  if (await C('return td.routes.length;') !== 2) throw new Error('Double flux devait avoir deux routes');
  await shot('2-double-flux');
  await pj(`(() => { const s = document.getElementById('tdMap'); s.value = '${keep}'; s.dispatchEvent(new Event('change')); document.getElementById('tdNew').click(); return 0; })()`); await sleep(200);
  // les deux branches (1.4.0) : un laser niveau 2 ne monte pas sans branche, prend Rayon perçant, touche 3 ennemis et compte ses dégâts
  const br = await C(`td.gold = 99999; const [px, py] = td.routes[0].segs[Math.min(1, td.routes[0].segs.length - 1)].a, c0 = Math.floor(px / T.TD.T), r0 = Math.floor(py / T.TD.T); let t = null; for (let d = 1; d < 4 && !t; d++) for (let dr = -d; dr <= d && !t; dr++) for (let dc = -d; dc <= d && !t; dc++) t = T.build('laser', c0 + dc, r0 + dr) || null;
    if (!t) return 'pas de case libre'; T.upgrade(t); if (T.upgrade(t)) return 'monté sans branche'; if (!T.upgrade(t, 0) || t.br !== 0 || t.lv !== 2) return 'branche refusée';
    const s = T.stats(t); if (s.pierce !== 3) return 'pierce ' + s.pierce; if (T.upgrade(t, 1)) return 'niveau 4 ?';
    const c = T.build('canon', t.c + 1, t.r) || T.build('canon', t.c, t.r + 1) || T.build('canon', t.c + 2, t.r); if (c) { T.upgrade(c); T.upgrade(c, 1); if (T.stats(c).frag !== 4) return 'frag'; }
    for (const k of Object.keys(T.BR)) if (T.BR[k].length !== 2) return 'branches ' + k;
    td.sel = t; T.ui(); return document.querySelectorAll('#tdSel .tdBr').length + '|' + /Rayon perçant/.test(document.getElementById('tdSel').textContent);`);
  if (br !== '0|true') throw new Error('branches : ' + br);
  await C(`const t = td.towers.find(t => t.lv === 1) || td.towers[0]; t.lv = 1; t.br = undefined; td.sel = t; T.ui(); return 0;`);
  if (await pj("document.querySelectorAll('#tdSel .tdBr').length") !== 2) throw new Error('les deux boutons de branche manquent au niveau 2');
  await pj(`document.dispatchEvent(new KeyboardEvent('keydown', {key: 'i', bubbles: true})), 0`); await sleep(100);
  if (await C('return td.sel.br;') !== 1) throw new Error('la touche I doit choisir la 2e branche');
  // dégâts comptés : quelques images de jeu avec la vague 1
  await pj(`document.dispatchEvent(new KeyboardEvent('keydown', {key: 'Enter', bubbles: true})), 0`); await sleep(6000); await shot('3-branches');
  const dealt = await C('return Math.round(td.towers.reduce((a, t) => a + (t.dealt || 0), 0));'); if (!(dealt > 0)) throw new Error('aucun dégât compté par tourelle');
  const errs = await pj(`window.__e.join(' | ')`); if (errs) throw new Error('erreur : ' + errs);
  // plein écran : l'appli entière, le jeu agrandi et toujours visible en entier
  await pj(`document.fullscreenElement && document.exitFullscreen(), 0`); await sleep(200);
  const h0 = await pj(`Math.round(document.getElementById('tdCanvas').getBoundingClientRect().height)`);
  await pj(`document.getElementById('tdFs').click(), 0`); await sleep(700);
  const fs = await pj(`(() => { const c = document.getElementById('tdCanvas'), r = c.getBoundingClientRect(); return JSON.stringify({on: !!document.fullscreenElement && document.fullscreenElement.contains(c), h: Math.round(r.height), b: Math.round(r.bottom), ih: innerHeight}); })()`);
  await pj(`document.fullscreenElement && document.exitFullscreen(), 0`); await sleep(300);
  const F = JSON.parse(fs); if (!F.on || F.h <= h0 || F.b > F.ih) throw new Error('plein écran : ' + fs + ' (avant ' + h0 + ')');
  const L = await pj(`(() => { const r = document.getElementById('tdCanvas').getBoundingClientRect(); let s = 0; for (let e = document.getElementById('tdCanvas').parentElement; e; e = e.parentElement) s += e.scrollTop; return { bottom: Math.round(r.bottom + s), h: Math.round(r.height), wh: innerHeight, ww: innerWidth, sw: document.documentElement.scrollWidth }; })()`);
  if (process.env.NEO_FIT_LOG) console.log('FIT', JSON.stringify(L), 'barre', await pj(`Math.round(document.querySelector('.tdBar').getBoundingClientRect().bottom)`));
  if (L.bottom > L.wh + 1 || L.sw > L.ww + 1 || L.h < 200) throw new Error('la zone de jeu dépasse la fenêtre ou reste petite : ' + JSON.stringify(L));
  return 'vérification ok · vague 1 · deux routes · branches ok (' + dealt + ' dégâts) · plein écran ' + F.h + ' px · ' + L.h + ' px dans ' + L.ww + '×' + L.wh;
};
