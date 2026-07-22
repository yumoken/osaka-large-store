const properties = [
  {rank:'01',area:'心斎橋',name:'KOKO HOTEL 大阪心斎橋',address:'大阪市中央区南船場3-3-17',station:'心斎橋駅 徒歩3分',size:119.79,floor:'1階',type:'ground',rent:'相談',unit:'賃料・共益費',food:'飲食可店舗',heavy:true,source:'大阪貸店舗プラス',match:'最大候補',note:'飲食可・居抜き店舗として掲載。目標150坪に最も近い公開候補で、差は約30坪。重飲食の詳細条件は要確認。',updated:'2026.07確認',url:'https://osaka-kashitenpo.jp/sp/fw_minami_kashitenpo/jyuuinshoku/'},
  {rank:'02',area:'心斎橋',name:'OSAKA心斎橋BUILDING',address:'大阪市中央区心斎橋筋1-4-13',station:'心斎橋駅 徒歩2分',size:81.25,floor:'2階',type:'upper',rent:'240',unit:'万円 / 月・税別',food:'飲食業種相談可',heavy:false,source:'貸事務所ドットコム大阪',match:'空中階',note:'2階ワンフロア、2019年築、EVあり。募集資料に飲食・物販・サービス業等の業種相談可と明記。',updated:'2026.05.20',url:'https://www.kashi-jimusyo.jp/pdf/osaka_shinsaibashi_building_2f.pdf'},
  {rank:'03',area:'難波',name:'BRAVE難波',address:'大阪市中央区難波千日前15-15',station:'南海なんば駅 徒歩1分',size:69.86,floor:'8階',type:'upper',rent:'210',unit:'万円 / 月・税別',food:'重飲食可',heavy:true,source:'貸事務所ラボ',match:'空中階・重飲食',note:'8階ワンフロアのスケルトン店舗。募集資料に重飲食可と明記され、空中階条件に合う有力候補。',updated:'2026.04資料',url:'https://www.kashijimusho-labo.jp/pdf/BRAVE%E9%9B%A3%E6%B3%A241205.pdf'},
  {rank:'04',area:'日本橋',name:'千日前1丁目 一棟居抜き',address:'大阪市中央区千日前1丁目',station:'日本橋駅1分・なんば駅3分',size:60,floor:'1〜3階',type:'ground',rent:'220',unit:'万円 / 月',food:'重飲食可',heavy:true,source:'飲食店ドットコム',match:'一棟・重飲食',note:'元ちゃんこ鍋店の一棟居抜き。重飲食・軽飲食の出店可能業態が明記された難波徒歩圏の大型候補。',updated:'2026.07確認',url:'https://www.inshokuten.com/bukken/bukkens/377553'},
  {rank:'05',area:'心斎橋',name:'東心斎橋1丁目 地下店舗',address:'大阪市中央区東心斎橋1丁目',station:'心斎橋駅 徒歩6分',size:51.23,floor:'地下1階',type:'upper',rent:'112.7',unit:'万円 / 月',food:'重飲食可',heavy:true,source:'飲食店ドットコム',match:'居酒屋居抜き',note:'専用階段付きの地下区画。居酒屋居抜きで、重飲食・軽飲食に対応する候補として掲載。',updated:'2026.06.22',url:'https://www.inshokuten.com/bukken/kansai/bukkens/list/local-osaka/region-236/lightfood/?mode=index&page=3'},
  {rank:'06',area:'心斎橋',name:'ESTABLE心斎橋',address:'大阪市中央区南船場3-7-19',station:'心斎橋駅 徒歩3分',size:42.01,floor:'2階',type:'upper',rent:'110',unit:'万円 / 月・税別',food:'飲食可・重飲食不可',heavy:false,source:'貸店舗.com',match:'商店街・空中階',note:'元磯丸水産のスケルトン区画。飲食可能店舗として掲載されていますが、募集条件では重飲食不可。',updated:'2026.01.05',url:'https://www.kashitenpo4600.com/tenpo/ta205339/'},
  {rank:'07',area:'心斎橋',name:'東心斎橋2丁目 商業ビル',address:'大阪市中央区東心斎橋2丁目',station:'日本橋駅 徒歩6分',size:20.31,floor:'空中階',type:'upper',rent:'33.53',unit:'万円 / 月',food:'日本食・イタリアン相談可',heavy:false,source:'アットホーム',match:'軽飲食候補',note:'日本食・イタリアン等の飲食店は相談可能。重飲食・ナイト系は不可と明記された空中階候補。',updated:'2026.03.10',url:'https://nifty.athome.co.jp/bkdtl?ART=03&BUKKEN=6986705901&ITEM=jr'},
  {rank:'08',area:'心斎橋',name:'東心斎橋2丁目 スケルトン',address:'大阪市中央区東心斎橋2丁目',station:'心斎橋・長堀橋エリア',size:5.7,floor:'4階',type:'upper',rent:'8.8',unit:'万円 / 月',food:'バー・飲食店相談可',heavy:false,source:'サン・アクト',match:'小型空中階',note:'大型条件からは外れますが、7サイト横断を明示する比較用候補。4階でバー・飲食店など業種相談可能。',updated:'2026.07.07',url:'https://3act-osaka.jp/property/cat/restaurant/'}
];

const grid=document.querySelector('#propertyGrid');
const empty=document.querySelector('#empty');
const area=document.querySelector('#area');
const size=document.querySelector('#size');
const floor=document.querySelector('#floor');
const source=document.querySelector('#source');
const food=document.querySelector('#food');

[...new Set(properties.map(p=>p.source))].forEach(name=>source.insertAdjacentHTML('beforeend',`<option value="${name}">${name}</option>`));

function card(p){
  return `<article class="card">
    <div class="rank"><b>${p.rank}</b><span>${p.match.toUpperCase()}</span></div>
    <div class="card-body">
      <div class="badges"><span class="badge hot">${p.area}</span><span class="badge ${p.type==='upper'?'blue':''}">${p.floor}</span><span class="badge">${p.food}</span><span class="badge">出典：${p.source}</span></div>
      <h3>${p.name}</h3><p class="address">⌖ ${p.address} ｜ ${p.station}</p>
      <div class="spec-row"><div><small>AREA</small><b>${p.size}<em> 坪</em></b></div><div><small>RENT</small><b>${p.rent}<em> ${p.unit}</em></b></div></div>
      <p class="card-note">${p.note}</p>
      <div class="card-foot"><small>${p.source}・確認 ${p.updated}</small><a class="source-link" href="${p.url}" target="_blank" rel="noreferrer" aria-label="${p.name}の掲載元を開く">↗</a></div>
    </div>
  </article>`;
}

function render(){
  const result=properties.filter(p=>
    (area.value==='all'||p.area===area.value)&&
    (size.value==='all'||(size.value==='large'?p.size>=80:size.value==='mid'?p.size>=40&&p.size<80:p.size<40))&&
    (floor.value==='all'||p.type===floor.value)&&
    (source.value==='all'||p.source===source.value)&&
    (!food.checked||p.heavy)
  );
  grid.innerHTML=result.map(card).join('');
  empty.hidden=result.length!==0;
  document.querySelector('#resultCount').textContent=result.length;
}

[area,size,floor,source,food].forEach(el=>el.addEventListener('input',render));
document.querySelector('#reset').addEventListener('click',()=>{area.value='all';size.value='all';floor.value='all';source.value='all';food.checked=false;render();});
render();
