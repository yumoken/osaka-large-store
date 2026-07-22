const properties = [
  {
    rank:'01', area:'心斎橋', name:'KOKO HOTEL 大阪心斎橋 1F',
    address:'大阪市中央区南船場3-3-17', station:'心斎橋駅 徒歩2〜3分',
    size:119.79, floor:'1階', type:'ground', rent:'359.37', unit:'万円 / 月',
    food:'重飲食・軽飲食可', heavy:true, match:'50〜150坪 条件一致',
    note:'総客室211室のホテル1階レストラン居抜き。屋内87.23坪＋テラス29.88坪＋プレハブ冷蔵庫2.68坪。ホテル宿泊者への朝食提供が必須で、オール電化・排気ダクトあり。',
    updated:'2026.07.22',
    sources:[
      {name:'管理会社',label:'東京キャピタル',url:'https://www.tokyo-capital.com/service/vacancy/12393/'},
      {name:'飲食店ドットコム',label:'飲食店.com',url:'https://www.inshokuten.com/bukken/kansai/bukkens/list/local-osaka/station-3101/inuki/genre-18/'},
      {name:'テンポスマート',label:'テンポスマート',url:'https://www.temposmart.jp/estates/203399'},
      {name:'大阪貸店舗プラス',label:'貸店舗プラス',url:'https://osaka-kashitenpo.jp/sp/fw_minami_inuki/inshoku/'},
      {name:'貸事務所ドットコム大阪',label:'貸事務所.com',url:'https://www.kashi-jimusyo.jp/jimusyo/koko_hotel_osaka_shinsaibashi_1f.html'},
      {name:'貸ビル情報',label:'貸ビル情報',url:'https://www.kashijimusho4600.com/rooms/detail/264335'}
    ]
  },
  {
    rank:'02', area:'心斎橋', name:'OSAKA心斎橋BUILDING 2F',
    address:'大阪市中央区心斎橋筋1-4-13', station:'心斎橋駅 徒歩2分',
    size:81.25, floor:'2階', type:'upper', rent:'240', unit:'万円 / 月・税別',
    food:'飲食業種相談可', heavy:false, match:'空中階・ワンフロア',
    note:'2階ワンフロア、2019年築、EVあり。募集資料に飲食・物販・サービス業等の業種相談可と明記。',
    updated:'2026.05.20',
    sources:[{name:'貸事務所ドットコム大阪',label:'貸事務所.com',url:'https://www.kashi-jimusyo.jp/pdf/osaka_shinsaibashi_building_2f.pdf'}]
  },
  {
    rank:'03', area:'難波', name:'BRAVE難波 8F',
    address:'大阪市中央区難波千日前15-15', station:'南海なんば駅 徒歩1分',
    size:69.86, floor:'8階', type:'upper', rent:'210', unit:'万円 / 月・税別',
    food:'重飲食可', heavy:true, match:'空中階・重飲食',
    note:'8階ワンフロアのスケルトン店舗。募集資料に重飲食可と明記され、空中階条件に合う候補。',
    updated:'2026.04資料',
    sources:[{name:'貸事務所ラボ',label:'貸事務所ラボ',url:'https://www.kashijimusho-labo.jp/pdf/BRAVE%E9%9B%A3%E6%B3%A241205.pdf'}]
  },
  {
    rank:'04', area:'日本橋', name:'千日前1丁目 一棟居抜き',
    address:'大阪市中央区千日前1丁目', station:'日本橋駅1分・なんば駅3分',
    size:60, floor:'1〜3階', type:'ground', rent:'220', unit:'万円 / 月',
    food:'重飲食可', heavy:true, match:'一棟・重飲食',
    note:'元ちゃんこ鍋店の一棟居抜き。重飲食・軽飲食の出店可能業態が明記された難波徒歩圏の候補。',
    updated:'2026.07確認',
    sources:[{name:'飲食店ドットコム',label:'飲食店.com',url:'https://www.inshokuten.com/bukken/bukkens/377553'}]
  },
  {
    rank:'05', area:'心斎橋', name:'東心斎橋1丁目 地下店舗',
    address:'大阪市中央区東心斎橋1丁目', station:'心斎橋駅 徒歩6分',
    size:51.23, floor:'地下1階', type:'upper', rent:'112.7', unit:'万円 / 月',
    food:'重飲食可', heavy:true, match:'居酒屋居抜き',
    note:'専用階段付きの地下区画。居酒屋居抜きで、重飲食・軽飲食に対応する候補として掲載。',
    updated:'2026.06.22',
    sources:[{name:'飲食店ドットコム',label:'飲食店.com',url:'https://www.inshokuten.com/bukken/kansai/bukkens/list/local-osaka/region-236/lightfood/?mode=index&page=3'}]
  }
];

const grid=document.querySelector('#propertyGrid');
const empty=document.querySelector('#empty');
const area=document.querySelector('#area');
const floor=document.querySelector('#floor');
const source=document.querySelector('#source');
const food=document.querySelector('#food');

[...new Set(properties.flatMap(p=>p.sources.map(s=>s.name)))].forEach(name=>source.insertAdjacentHTML('beforeend',`<option value="${name}">${name}</option>`));

function card(p){
  const links=p.sources.map(s=>`<a href="${s.url}" target="_blank" rel="noreferrer">${s.label} ↗</a>`).join('');
  return `<article class="card">
    <div class="rank"><b>${p.rank}</b><span>${p.match.toUpperCase()}</span></div>
    <div class="card-body">
      <div class="badges"><span class="badge hot">${p.area}</span><span class="badge">${p.floor}</span><span class="badge">${p.food}</span><span class="badge blue">${p.sources.length}サイト確認</span></div>
      <h3>${p.name}</h3><p class="address">⌖ ${p.address} ｜ ${p.station}</p>
      <div class="spec-row"><div><small>AREA</small><b>${p.size}<em> 坪</em></b></div><div><small>RENT</small><b>${p.rent}<em> ${p.unit}</em></b></div></div>
      <p class="card-note">${p.note}</p>
      <div class="source-links" aria-label="掲載元リンク">${links}</div>
      <div class="card-foot"><small>${p.sources.length}掲載サイト・確認 ${p.updated}</small></div>
    </div>
  </article>`;
}

function render(){
  const result=properties.filter(p=>
    p.size>=50&&p.size<=150&&
    (area.value==='all'||p.area===area.value)&&
    (floor.value==='all'||p.type===floor.value)&&
    (source.value==='all'||p.sources.some(s=>s.name===source.value))&&
    (!food.checked||p.heavy)
  );
  grid.innerHTML=result.map(card).join('');
  empty.hidden=result.length!==0;
  document.querySelector('#resultCount').textContent=result.length;
}

[area,floor,source,food].forEach(el=>el.addEventListener('input',render));
document.querySelector('#reset').addEventListener('click',()=>{area.value='all';floor.value='all';source.value='all';food.checked=false;render();});
render();
