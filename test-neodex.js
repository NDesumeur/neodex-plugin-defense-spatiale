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
  return 'vérification ok · vague 1 · deux routes · plein écran ' + F.h + ' px · ' + L.h + ' px dans ' + L.ww + '×' + L.wh;
};
