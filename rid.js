function ridjs(mode, cnt) {
  let filemap = {
    'banned': [
      'Agonymous.png',
      'Anonymous-10.png',
      'Anonymous-11.png',
      'Anonymous-12.png',
      'Anonymous-13.png',
      'Anonymous-14.png',
      'Anonymous-15.png',
      'Anonymous-2.jpg',
      'Anonymous-2.png',
      'Anonymous-3.jpg',
      'Anonymous-3.png',
      'Anonymous-4.png',
      'Anonymous-5.png',
      'Anonymous-6.png',
      'Anonymous-7.png',
      'Anonymous-8.png',
      'Anonymous-9.png',
      'Anonymous.gif',
      'Anonymous.jpg',
      'Anonymous.png',
      'H15A5H1.jpg',
      'Hello.png',
      'JoJo.png',
      'Katsu-chan.png',
      'Kristal.png',
      'NCH.png',
      'Shinizero.jpg',
      'Takara.png',
      'Zardoz-says-drama.png',
      'kKuhn.png',
      'mona.png',
      'naota-kun.jpg',
      'thursdayheist.png'
    ],

    '404': [
      'Angelguy.png',
      'Anonymous-2.jpg',
      'Anonymous-2.png',
      'Anonymous-3.jpg',
      'Anonymous-3.png',
      'Anonymous-4.png',
      'Anonymous-5.png',
      'Anonymous-6.png',
      'Anonymous-7.png',
      'Anonymous-8.png',
      'Anonymous.gif',
      'Anonymous.jpg',
      'Anonymous.png',
      'DanKim.gif',
      'Kobayen.png',
      'Ragathol.png',
      'anonymouse.png'
    ],

    '403': [
      'Anonymous-2.png',
      'Anonymous-3.png',
      'Anonymous-4.png',
      'Anonymous-5.png',
      'Anonymous-6.png',
      'Anonymous.gif',
      'Anonymous.png',
      'Benabus.png',
      'JoJo.png',
      'NCH.gif',
      'Nekoirazu.png',
      'Zardoz-says-drama.png',
      'naota-kun.jpg'
    ]
  };

  let files = filemap[mode];

  if (!files) {
    return false;
  }

  let fid = Math.floor(Math.random() * files.length);

  let el = document.createElement('IMG');
  el.alt = mode;
  el.referrerpolicy = "no-referrer";
  if (mode == 'banned') {
    el.src = `https://s.4cdn.org/image/error/${mode}/250/${mode}-${files[fid]}`;
    el.width = '250';
    el.setAttribute('style', 'float: right; padding-left: 10px; min-height: 150px;');
  }
  else {
    el.src = `https://s.4cdn.org/image/error/${mode}/${mode}-${files[fid]}`;
  }
  return cnt.appendChild(el);
}
