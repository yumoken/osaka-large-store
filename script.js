const properties = [
  {rank:'01',area:'心斎橋',name:'リアライズ西心斎橋ビル',address:'大阪市中央区西心斎橋2丁目18-9',station:'四ツ橋駅2分・心斎橋駅4分',size:150.37,floor:'3階＋4階',type:'upper',rent:'223.9',unit:'万円 / 月・税別',food:'店舗用途／飲食要確認',foodOk:false,match:'ジャストサイズ',note:'希望面積に最も近い2フロアセット区画。EV・個別空調あり。フロア間動線と厨房設備の可否は要確認。',updated:'2026.05.14',url:'https://www.office-navi.jp/floor/T-01001953-003/'},
  {rank:'02',area:'心斎橋',name:'又一（B1F〜1F）',address:'心斎橋駅周辺',station:'心斎橋エリア',size:141.47,floor:'地下1階＋1階',type:'ground',rent:'相談',unit:'賃料・坪単価',food:'用途・条件は要確認',foodOk:false,match:'近似サイズ',note:'150坪に近い低層セット区画。空中階ではないが、面積優先の比較対象として有力。最新の用途制限を確認。',updated:'2026.06',url:'https://www.officetar.jp/stations/25981/140_150/'},
  {rank:'03',area:'日本橋',name:'南海日本橋ビル',address:'大阪市浪速区日本橋西1-3-19',station:'難波駅 徒歩4分',size:112.05,floor:'1階',type:'ground',rent:'相談',unit:'賃料・共益費',food:'貸店舗／業態要確認',foodOk:false,match:'拡張候補',note:'目標より小さいものの、難波徒歩圏の大型路面区画。来店導線を優先する場合の比較候補。',updated:'2026.07確認',url:'https://www.cbre-propertysearch.jp/retail/nanba/ms/'},
  {rank:'04',area:'心斎橋',name:'OSAKA心斎橋BUILDING',address:'大阪市中央区心斎橋筋1-4-13',station:'心斎橋駅 徒歩2分',size:81.25,floor:'2階',type:'upper',rent:'240',unit:'万円 / 月・税別',food:'飲食・物販等相談可',foodOk:true,match:'空中階',note:'ワンフロアの2階店舗。2019年築、EVあり。150坪より小さいため、必要席数とバックヤード配分を要検証。',updated:'2026.05.20',url:'https://www.kashi-jimusyo.jp/pdf/osaka_shinsaibashi_building_2f.pdf'},
  {rank:'05',area:'難波',name:'BRAVE難波',address:'大阪市中央区難波千日前15-15',station:'南海なんば駅 徒歩1分',size:69.86,floor:'8階',type:'upper',rent:'210',unit:'万円 / 月・税別',food:'重飲食可',foodOk:true,match:'空中階・重飲食',note:'駅前の8階ワンフロア。スケルトン渡し、重飲食可の公開資料あり。目標面積の約47%。',updated:'2026.04資料',url:'https://www.kashijimusho-labo.jp/pdf/BRAVE%E9%9B%A3%E6%B3%A241205.pdf'},
  {rank:'06',area:'心斎橋',name:'Osaka Metro 心斎橋ビル',address:'大阪市中央区南船場3丁目',station:'心斎橋駅直結',size:63,floor:'2階',type:'upper',rent:'相談',unit:'賃料・共益費',food:'事務所仕様／用途要相談',foodOk:false,match:'駅直結',note:'目標より小さいが、駅直結の2階区画。現状は事務所仕様のため、店舗化・飲食用途の可否確認が前提。',updated:'2026.04資料',url:'https://www.osakametro.co.jp/news/library/realestate/akijyohou/202604_shinsaibashi_akijoho.pdf'}
];

const grid=document.querySelector('#propertyGrid');
const empty=document.querySelector('#empty');
const area=document.querySelector('#area');
const size=document.querySelector('#size');
const floor=document.querySelector('#floor');
const food=document.querySelector('#food');

function card(p){
  return `<article class="card">
    <div class="rank"><b>${p.rank}</b><span>${p.match.toUpperCase()}</span></div>
    <div class="card-body">
      <div class="badges"><span class="badge hot">${p.area}</span><span class="badge ${p.type==='upper'?'blue':''}">${p.floor}</span><span class="badge">${p.food}</span></div>
      <h3>${p.name}</h3><p class="address">⌖ ${p.address} ｜ ${p.station}</p>
      <div class="spec-row"><div><small>AREA</small><b>${p.size}<em> 坪</em></b></div><div><small>RENT</small><b>${p.rent}<em> ${p.unit}</em></b></div></div>
      <p class="card-note">${p.note}</p>
      <div class="card-foot"><small>公開情報確認 ${p.updated}</small><a class="source-link" href="${p.url}" target="_blank" rel="noreferrer" aria-label="${p.name}の掲載元を開く">↗</a></div>
    </div>
  </article>`;
}

function render(){
  const result=properties.filter(p=>
    (area.value==='all'||p.area===area.value)&&
    (size.value==='all'||(size.value==='exact'?p.size>=120&&p.size<=180:p.size>=60&&p.size<120))&&
    (floor.value==='all'||p.type===floor.value)&&
    (!food.checked||p.foodOk)
  );
  grid.innerHTML=result.map(card).join('');
  empty.hidden=result.length!==0;
  document.querySelector('#resultCount').textContent=result.length;
}

[area,size,floor,food].forEach(el=>el.addEventListener('input',render));
document.querySelector('#reset').addEventListener('click',()=>{area.value='all';size.value='all';floor.value='all';food.checked=false;render();});
render();
