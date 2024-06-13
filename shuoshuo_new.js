/*
Code is modified according to "https://immmmm.com"
*/
let bbMemo = {
  memos: 'https://demo.usememos.com/',
  limit: '10',
  creatorId: '1',
  domId: '#bber',
}
if (typeof (bbMemos) !== "undefined") {
  for (let key in bbMemos) {
    if (bbMemos[key]) {
      bbMemo[key] = bbMemos[key];
    }
  }
}

function loadCssCode(code) {
  let style = document.createElement('style');
  style.type = 'text/css';
  style.rel = 'stylesheet';
  style.appendChild(document.createTextNode(code));
  let head = document.getElementsByTagName('head')[0];
  head.appendChild(style);
}
const allCSS = `
  #bber{margin-top:1rem;width:auto!important;min-height:100vh;}
  .bb-timeline ul{margin:0;padding:0;}
  .bb-timeline ul li{margin-bottom:3rem;list-style-type:none;}
  .bb-timeline ul li .bb-cont ul li{margin-bottom:0;}
  .bb-timeline .bb-item,.bb-load button{border:1px solid #dcdcdc;border-radius:8px;box-shadow:3px 3px 5px rgba(0,0,0,.1);}
  .bb-timeline .bb-item{padding:.6rem 1rem .6rem;font-size:16px;}
  .bb-load button{padding:10px 30px;width:100%;background:0 0;letter-spacing:1.8rem;font-size:.9rem;}
  .bb-timeline .bb-info{position:relative;margin-top:.5rem;font-size:14px;}
  .bb-timeline .bb-info a{text-decoration:none;}
  .bb-timeline .datatime{font-size:15px;}
  .bb-timeline .bb-cont{overflow-x:hidden;margin-top:.5rem;max-height:50vh;}
  .bb-timeline .datacount{position:absolute;right:0;bottom:0;cursor:pointer;}
  .bb-timeline .datacount svg{margin:2px 5px;}
  .bb-timeline .bb-cont img[src*=emotion]{display:inline-block;width:auto;}
  .bb-timeline p{margin:0;margin:0;min-height:18px;color:#3b3d42;letter-spacing:1px;line-height:28px;}
  .bb-timeline pre{color:#aaa;}
  .bb-timeline pre p{display:inline-block;}
  .bb-timeline pre p:empty{display:none;}
  .bb-cont p{magin:0;}
  .bb-cont blockquote{position:relative;margin:0 0 0 1rem;padding:.25rem 2rem;border-left:0 none;font-family:KaiTi,STKaiti,STFangsong!important;}
  .bb-cont blockquote::before{position:absolute;top:5px;left:10px;content:'“';font-weight:700;font-size:28px;font-family:Georgia,serif;line-height:2rem;}
  .tag-span{color:#42b983;cursor:pointer;}
  #tag-list{font-size:1.8rem;}
  .bb-source a{margin:0 6px 0 0;padding:2px 8px;border-radius:5px;background:#3b3d42;color:#fafafa;font-weight:400;font-size:.9rem;}
  .bb-cont .img{border-radius:4px;cursor:pointer;}
  .bb-cont .img.square{width:180px;height:180px;object-fit:cover;}
  .resimg.grid{display:grid;box-sizing:border-box;margin:4px 0 0;width:calc(100%* 2 / 3);grid-template-columns:repeat(3,1fr);grid-template-rows:auto;gap:4px;}
  .resimg.grid-2{width:80%;grid-template-columns:repeat(2,1fr);}
  .resimg.grid-4{width:calc(80% * 2 / 3);grid-template-columns:repeat(2,1fr);}
  .resimg.grid figure.gallery-thumbnail{position:relative;padding-top:100%;width:100%;height:0;cursor:zoom-in;}
  .resimg figure{max-height:50%;text-align:left;}
  .resimg figure img{max-height:50vh;}
  .resimg.grid figure,figcaption{margin:0!important;}
  .resimg.grid figure.gallery-thumbnail>img.thumbnail-image{position:absolute;top:0;left:0;display:block;width:100%;height:100%;object-fit:cover;object-position:50% 50%;}
  #bb-footer{margin:2rem auto 1rem;text-align:center;}
  #bb-footer p{margin:0 0 .6rem;}
  .bb-allnums{letter-spacing:2px;}
  .bb-allpub{text-decoration:none;font-style:italic;}
  .bb-timeline ul li::before{content:none;}
  
  /* db-card -------- start*/
  .db-card{border-bottom:1px solid #eaeaea;box-shadow: none;margin:-0.6rem -1rem .6rem;}
  .db-card-subject{display: flex;align-items:flex-start;line-height:1.6;padding:12px;position:relative;}
  .dark .db-card{background:#252627;border-bottom:1px solid #3b3d42;}
  .db-card-content {flex:1 1 auto;}
  .db-card-post {width: 96px;margin-right: 15px;display: flex;flex: 0 0 auto;}
  .db-card-title {margin-bottom: 5px;font-size: 18px;}
  .db-card-title a{text-decoration: none!important}
  .db-card-abstract,.db-card-comment{font-size:14px;overflow: hidden;max-height:3rem;}
  .db-card-cate{position: absolute;top:0;right:0;background:#f99b01;padding:1px 8px;font-size:small;font-style:italic;border-radius:0 8px 0 8px;text-transform:capitalize;}
  .db-card-post img{width: 96px!important;height: 96px!important;border-radius: 4px;-o-object-fit: cover;object-fit: cover;}
  
  .rating{display:flex;line-height:15px;}
  .rating-star{display:inline-block;width:75px;height:15px;background-image:url('data:image/png;background-repeat:no-repeat;    base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAAClCAYAAAAUAAAYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA5xJREFUeNrs3T9rFEEcxvG7qEQIglaCICKkin9AUEtBKxU7wS61VlYivgWj70TtNFj5BqzE7qxEWwsxKIoYn4UtluFmbm8nczvzm+/BjxyuDwNzu3uXD0+46f7LC5PA45Hm+WTYw1x2LRDc0jzTXB+wqMlsaLPutz8fDFjYZHYauAz3NBvt83XNnyUWNpn1nVm3OsHmsb3EomazzZnVXKMPNcc0xzUnNKc0Rzv/77fms+Z7O3vt9b1eU7bZrNN68l5zcolX4ofmsuZXTdnmMvyi2dR86Bmcac62P6vKrnVubpc0bxYE32nOab45N8YqsvPeDfcD4SOav4HjprPuu+H5BTt9LXDMfNbdLPfT678Fx6vKupt1o/O8+R3pkOaJ5/iktqx7z/qp+aq5q/nY+fczmheaK03Gs7D5rLtZdzSvA6/Ebc2u55j57HQB0TzW7AzkjiKzny6+2hlKNE8juMNcFqKBaIZndRlCNBBNgmx7ZkE0fbLtZkE0EA1EM17WuQwhGogGooFoss6296y52cNO+J6HLJoPaFdbsvA9zGerIxrPh85eWYgGooFoDiQbuAxp0UA0EVmdWbRo+ma1WbRoIBqIZtzsnHdDWjQQDUQD0WSbde5ZS2UhmtqJJtSEiVkXooFoIJre2VATJmZdiKZ2ogk1YSb8oVMvDeUPnSAaiCaPJkzMuhANRAPRQDQpsqEmTMy6EI11oolpwkA0EA1EcyDZmCYMRAPR+LMxTZjqiCamCQPRQDQQzehNGIgGooFoIJpVZ2OaMBBN7USTqgkD0UA0EE3vbKomDERTO9GkasKYJJpUTRiIBqKBaEZvwkA0EA1EA9GkyKZqwkA01olmrCYMRAPRQDR9LkO+0QmiKbAJUyTRjNWEgWggGohm9CYMRAPRQDQQzZDsWE0YiMYC0eTYhIFoIJrKiCbHJgxEY4FocmzCZEs0OTZhIBqIpjKiybEJA9FANBANROPL5tiEgWhKIJoSmzAQDURjjGhKbMJANCUQTYlNmNGIpsQmDEQD0RgjmhKbMBANRAPR1Es0JTZhIJpciMZaEwaigWgKJBprTRiIJheisdaESUo01powEA1EUyDRWGvCQDQQDURjm2isNWEgmlURzWw2q4pZIBqIJkOiCVyGJpkFolkV0ejMMvel28mIRptl7ku3IRqIpjCimfNuaJpZIBqIBqIpm2ice5Z5ZonJupvVkMRu4JW4qXnrOWY++1+AAQBw9BJSCTeN9wAAAABJRU5ErkJggg==');overflow:hidden;}
  .allstar10{background-position:0 0;}
  .allstar9{background-position:0 -15px;}
  .allstar8{background-position:0 -30px;}
  .allstar7{background-position:0 -45px;}
  .allstar6{background-position:0 -60px;}
  .allstar5{background-position:0 -75px;}
  .allstar4{background-position:0 -90px;}
  .allstar3{background-position:0 -105px;}
  .allstar2{background-position:0 -120px;}
  .allstar1{background-position:0 -135px;}
  .allstar0{background-position:0 -150px;}
  .rating-average{display:inline-block;margin-left:10px;color:#777;font-size:13px;}
  .dark .post-preview{background:#3b3d42;}
  
  .video-wrapper{position:relative;padding-bottom:55%;width:100%;height:0;}
  .video-wrapper iframe{position:absolute;width:100%;height:100%;}
  .d-none{display:none!important;}
  .video-wrapper video{max-height:30vh;}
  #tag-list .tag-span{position:relative;display:inline-block;margin:2rem auto;padding:0 10px;border-radius:4px;background:rgba(0,0,0,.08);line-height:12px;}
  #tag-list .tag-span:before{position:absolute;top:-1rem;right:5px;width:5px;height:5px;content:'x';font-size:1rem;}
  .bb-tool{display:flex;justify-content:space-between;align-items:center;}
  .archive-btn,.reaction{display:inline-flex;}
  .archive-btn{opacity:.3;}
  #tag-list-all .tag-span{margin:.8rem 1rem 0 0;}
  
  .loader {position: relative;margin:3rem auto;width: 100px;}
  .loader::before {content: '';display: block;padding-top: 100%;}
  .circular {animation: rotate 2s linear infinite;height: 100%;transform-origin: center center;width: 100%;position: absolute;top: 0;bottom: 0;left: 0;right: 0;margin: auto;}
  .path {stroke-dasharray: 1, 200;stroke-dashoffset: 0;animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;stroke-linecap: round;}
  @keyframes rotate {100% {transform: rotate(360deg);}}
  @keyframes dash {
    0% {stroke-dasharray: 1, 200;stroke-dashoffset: 0;}
    50% {stroke-dasharray: 89, 200;stroke-dashoffset: -35px;}
    100% {stroke-dasharray: 89, 200;stroke-dashoffset: -124px;}
  }
  @keyframes color {
    100%,0% {stroke: #d62d20;}40% {stroke: #0057e7;}66% {stroke: #008744;}80%,90% {stroke: #ffa700;}
  }
  
  .dark .bb-timeline .bb-load button,.dark .bb-timeline .bb-item{border:1px solid #3b3d42;}
  .dark .bb-timeline .bb-item p{color:#fafafa;}
  .dark .bb-timeline .bb-item p svg{fill:#fafafa;}
  .dark #tag-list .tag-span{background:rgba(238,238,238,.1);}
  `
loadCssCode(allCSS);

let limit = bbMemo.limit
let memos = bbMemo.memos
let memosOpenId
let mePage = 1, offset = 0, nextLength = 0, nextDom = '', apiV1 = 'v1/';
let bbDom = document.querySelector(bbMemo.domId);
let load = '<div class="bb-load"><button class="load-btn button-load">加载中……</button></div>'
let loading = `<div class="loader"><svg class="circular" viewBox="25 25 50 50"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>`
let nextPageToken = "";

// 判断是否存在id为bber的div块。
if (bbDom) {
  fetchStatus()
}

async function fetchStatus() {
  let memoOne = getQueryVariable("memo") || ''
  if (memoOne) {
    getMemoOne(memoOne)
  } else {
    newApiV1()
  }
}
function getMemoOne(memoOne) {
  let OneDom = `<iframe style="width:100%;height:100vh;" src="${memoOne}" frameBorder="0"></iframe>`
  let ContDom = document.querySelector('.content') || document.querySelector(bbMemo.domId);
  ContDom.innerHTML = OneDom
}
function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) { return pair[1]; }
  }
  return (false);
}

function newApiV1() {
  getFirstList() //首次加载数据
  meNums() //加载总数
  bbDom.innerHTML = loading
  let btn = document.querySelector("button.button-load");
  btn.addEventListener("click", function () {
    btn.textContent = '加载中……';
    updateHTMl(nextDom)
    if (nextLength < limit) { //返回数据条数小于限制条数，隐藏
      document.querySelector("button.button-load").remove()
      return
    }
    getNextList()
  });
}

function getFirstList() {
  bbDom.insertAdjacentHTML('afterend', load);
  let bbUrl = memos + "api/v1/memos?filter=creator=='users/" + bbMemo.creatorId + "'&&visibilities==['PUBLIC']&pageSize=" + limit +
    "&t=" +
    Date.parse(new Date());
  fetch(bbUrl).then(res => res.json()).then(resdata => {
    // 获得下一页的token
    nextPageToken = resdata.nextPageToken
    updateHTMl(resdata.memos)
    let nowLength = resdata.memos.length
    if (nowLength < limit) { //返回数据条数小于 limit 则直接移除“加载更多”按钮，中断预加载
      document.querySelector("button.button-load").remove()
      return
    }
    getNextList()
  });
}
//预加载下一页数据
function getNextList() {
  var bbUrl = memos + "api/v1/memos?filter=creator=='users/" + bbMemo.creatorId + "'&&visibilities==['PUBLIC']&pageSize=" + limit + "&pageToken=" + nextPageToken +
    "&t=" +
    Date.parse(new Date());
  fetch(bbUrl).then(res => res.json()).then(resdata => {
    nextPageToken = resdata.nextPageToken
    nextDom = resdata.memos
    nextLength = resdata.memos.length

    if (nextLength < 1) { //返回数据条数为 0 ，隐藏
      document.querySelector("button.button-load").remove()
      return
    }
  })
}
//加载总 Memos 数
function meNums() {
  let bbLoad = document.querySelector('.bb-load')
  let bbUrl = memos + "api/v1/memos?filter=creator=='users/" + bbMemo.creatorId + "'&&visibilities==['PUBLIC']&pageSize=10000"
  fetch(bbUrl).then(res => res.json()).then(resdata => {
    if (resdata) {
      let nums = resdata.memos.length
      let allnums = `<div id="bb-footer"><p class="bb-allnums">共 ${nums} 条 </p></div>`
      bbLoad.insertAdjacentHTML('afterend', allnums);
    }
  })
}
// 插入 html 
async function updateHTMl(data) {
  let result = "", resultAll = "";
  const TAG_REG = /#([^#\s!.,;:?"'()]+)(?= )/g ///#([^/\s#]+?) /g
    , IMG_REG = /\!\[(.*?)\]\((.*?)\)/g
    , LINK_REG = /\[(.*?)\]\((.*?)\)/g
    , DEODB_LINK_REG = /(https:\/\/(www|movie|book)\.douban\.com\/(game|subject)\/[0-9]+\/).*?/g
    , BILIBILI_REG = /<a.*?href="https:\/\/www\.bilibili\.com\/video\/((av[\d]{1,10})|(BV([\w]{10})))\/?".*?>.*<\/a>/g
    , NETEASE_MUSIC_REG = /<a.*?href="https:\/\/music\.163\.com\/.*id=([0-9]+)".*?>.*<\/a>/g
    , QQMUSIC_REG = /<a.*?href="https\:\/\/y\.qq\.com\/.*(\/[0-9a-zA-Z]+)(\.html)?".*?>.*?<\/a>/g
    , QQVIDEO_REG = /<a.*?href="https:\/\/v\.qq\.com\/.*\/([a-z|A-Z|0-9]+)\.html".*?>.*<\/a>/g
    , YOUKU_REG = /<a.*?href="https:\/\/v\.youku\.com\/.*\/id_([a-z|A-Z|0-9|==]+)\.html".*?>.*<\/a>/g
    , YOUTUBE_REG = /<a.*?href="https:\/\/www\.youtube\.com\/watch\?v\=([a-z|A-Z|0-9]{11})\".*?>.*<\/a>/g;
  marked.setOptions({
    breaks: false,
    smartypants: false,
    langPrefix: 'language-',
    headerIds: false,
    mangle: false
  });

  for (let i = 0; i < data.length; i++) {
    let bbID = data[i].uid
    let memoUrl = memos + "m/" + bbID
    let bbCont = data[i].content + ' '
    let bbContREG = ''

    bbContREG += bbCont.replace(TAG_REG, "")
      .replace(IMG_REG, "")
      .replace(DEODB_LINK_REG, '')
      .replace(LINK_REG, '<a class="primary" href="$2" target="_blank">$1</a>')

    // NeoDB
    let neodbArr = bbCont.match(DEODB_LINK_REG);
    let neodbDom = '';
    if (neodbArr) {
      for (let k = 0; k < neodbArr.length; k++) {
        neodbDom += await fetchNeoDB(neodbArr[k])
      }
    }

    //标签
    let tagArr = bbCont.match(TAG_REG);
    let bbContTag = '';
    if (tagArr) {
      bbContTag = tagArr.map(t => {
        return `<span class='tag-span'>${t}</span> `;
      }).join('');
      bbContREG = bbContTag + bbContREG.trim()
    }

    bbContREG = marked.parse(bbContREG)
      .replace(BILIBILI_REG, "<div class='video-wrapper'><iframe src='//www.bilibili.com/blackboard/html5mobileplayer.html?bvid=$1&as_wide=1&high_quality=1&danmaku=0' scrolling='no' border='0' frameborder='no' framespacing='0' allowfullscreen='true'></iframe></div>")
      .replace(NETEASE_MUSIC_REG, "<meting-js auto='https://music.163.com/#/song?id=$1'></meting-js>")
      .replace(QQMUSIC_REG, "<meting-js auto='https://y.qq.com/n/yqq/song$1.html'></meting-js>")
      .replace(QQVIDEO_REG, "<div class='video-wrapper'><iframe src='//v.qq.com/iframe/player.html?vid=$1' allowFullScreen='true' frameborder='no'></iframe></div>")
      .replace(YOUKU_REG, "<div class='video-wrapper'><iframe src='https://player.youku.com/embed/$1' frameborder=0 'allowfullscreen'></iframe></div>")
      .replace(YOUTUBE_REG, "<div class='video-wrapper'><iframe src='https://www.youtube.com/embed/$1' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen title='YouTube Video'></iframe></div>")

    //解析 content 内 md 格式图片
    let IMG_ARR = data[i].content.match(IMG_REG) || '', IMG_ARR_Grid = '';
    if (IMG_ARR) {
      let IMG_ARR_Length = IMG_ARR.length, IMG_ARR_Url = '';
      if (IMG_ARR_Length !== 1) { let IMG_ARR_Grid = " grid grid-" + IMG_ARR_Length }
      IMG_ARR.forEach(item => {
        let imgSrc = item.replace(/!\[.*?\]\((.*?)\)/g, '$1')
        IMG_ARR_Url += `<figure class="gallery-thumbnail"><img class="img thumbnail-image" loading="lazy" decoding="async" src="${imgSrc}"/></figure>`
      });
      bbContREG += `<div class="resimg${IMG_ARR_Grid}">${IMG_ARR_Url}</div>`
    }

    //解析内置资源文件
    if (data[i].resources && data[i].resources.length > 0) {
      let resourceList = data[i].resources;
      let imgUrl = '', resUrl = '', resImgLength = 0;
      for (let j = 0; j < resourceList.length; j++) {
        let restype = resourceList[j].type.slice(0, 5)
        let resexlink = resourceList[j].externalLink
        let resLink = resexlink ? resexlink :
          memos + 'file/' + resourceList[j].name + '/' + resourceList[j].filename

        if (restype == 'image') {
          imgUrl += `<figure class="gallery-thumbnail"><img class="img thumbnail-image" src="${resLink}"/></figure>`
          resImgLength = resImgLength + 1
        } else if (restype == 'video') {
          imgUrl += `<div class="video-wrapper"><video controls><source src="${resLink}" type="video/mp4"></video></div>`
        } else {
          resUrl += `<a target="_blank" rel="noreferrer" href="${resLink}">${resourceList[j].filename}</a>`
        }
      }
      if (imgUrl) {
        let resImgGrid = ""
        if (resImgLength !== 1) { resImgGrid = "grid grid-" + resImgLength }
        bbContREG += `<div class="resimg ${resImgGrid}">${imgUrl}</div>`
      }
      if (resUrl) {
        bbContREG += `<p class="bb-source">${resUrl}</p>`
      }
    }
    let memosIdNow = memos.replace(/https\:\/\/(.*\.)?(.*)\..*/, 'id-$2-')
    let emojiReaction = `<emoji-reaction theme="system" class="reaction" endpoint="https://api-emaction.immmmm.com" reacttargetid="${memosIdNow + 'memo-' + bbID}" style="line-height:normal;display:inline-flex;"></emoji-reaction>`
    let datacountDOM = ""
    memosOpenIdNow = window.localStorage && window.localStorage.getItem("memos-access-token")

    result += `<li class="memo-${bbID}">
          <div class="bb-item">
  
          ${neodbDom}
            <div class="bb-tool">
              ${emojiReaction}
              ${!memosOpenIdNow ? '' :
        `<span class="archive-btn" onclick="archiveMemo(this)" data-id="${bbID}"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-img"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></span>`
      }
            </div>
            <div class="bb-cont">
              ${bbContREG}
            </div>
            <div class="bb-info">
              <a href="${memoUrl}" target="_blank"><span class="datatime">${new Date(data[i].createTime).toLocaleString()}</span></a>
              ${datacountDOM}
            </div>
          </div>
        </li>`
  }// end for
  let bbBefore = "<section class='bb-timeline'><ul class='bb-list-ul'>"
  let bbAfter = "</ul></section>"
  resultAll = bbBefore + result + bbAfter
  let loaderDom = document.querySelector('.loader') || ""
  if (loaderDom) loaderDom.remove()
  bbDom.insertAdjacentHTML('beforeend', resultAll);
  if (document.querySelector('button.button-load')) document.querySelector('button.button-load').textContent = '加载更多';

  //图片灯箱
  window.ViewImage && ViewImage.init('.bb-cont img')
  //相对时间
  window.Lately && Lately.init({ target: '.datatime' });
}

// 豆瓣
async function fetchNeoDB(url) {
  let urlNow = "https://api-neodb.immmmm.com/?url=" + url
  let response = await fetch(urlNow);
  let dbFetch = await response.json();
  let neodbDom = `<div class="db-card">
      <div class="db-card-subject">
          <div class="db-card-post"><img loading="lazy" decoding="async" referrerpolicy="no-referrer" src="${dbFetch.cover_image_url}"></div>
          <div class="db-card-content">
              <div class="db-card-title"><a href="${url}" class="cute" target="_blank" rel="noreferrer">${dbFetch.title}</a></div>
              <div class="rating"><span class="allstardark"><span class="allstarlight" style="width:${dbFetch.rating * 10}%"></span></span><span class="rating_nums">${dbFetch.rating}</span></div>
              <div class="db-card-abstract">${dbFetch.brief}</div>
          </div>
          <div class="db-card-cate">${dbFetch.category}</div>
      </div>
    </div>`
  return neodbDom
}
