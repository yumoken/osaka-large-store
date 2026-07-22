const properties = [
  {
    rank:'01', area:'心斎橋', name:'KOKO HOTEL 大阪心斎橋 1F',
    address:'大阪市中央区南船場3-3-17', station:'心斎橋駅 徒歩2〜3分',
    size:119.79, floor:'1階', type:'ground', rent:'359.37', unit:'万円 / 月',
    food:'重飲食・軽飲食可', heavy:true, match:'100〜150坪 条件一致',
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
      <div class="badges"><span class="badge hot">${p.area}</span><span class="badge">${p.floor}</span><span class="badge">${p.food}</span><span class="badge blue">6サイト確認</span></div>
      <h3>${p.name}</h3><p class="address">⌖ ${p.address} ｜ ${p.station}</p>
      <div class="spec-row"><div><small>AREA</small><b>${p.size}<em> 坪</em></b></div><div><small>RENT</small><b>${p.rent}<em> ${p.unit}</em></b></div></div>
      <p class="card-note">${p.note}</p>
      <div class="source-links" aria-label="掲載元リンク">${links}</div>
      <div class="card-foot"><small>6掲載サイト・確認 ${p.updated}</small></div>
    </div>
  </article>`;
}

function render(){
  const result=properties.filter(p=>
    p.size>=100&&p.size<=150&&
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
