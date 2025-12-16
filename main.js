/*varvar・ = L.map('map').setView([35.70059963531073, 139.49998981936298], 16); 

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map); */

// 地図の初期化
var map = L.map('map').setView([35.70059963531073, 139.49998981936298], 16); 

L.tileLayer('tile.openstreetmap.org{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="www.openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(map);

// ボタンクリック時の処理
function butotnClick(){
    const selectOld = document.getElementById('old').value;
    const selectGender = document.getElementById('gender').value;
    const textTitle = document.getElementById('title').value;
    const textNaiyo = document.getElementById('naiyo').value;

    // マーカーの追加とポップアップ表示
    const marker = L.marker([35.70062558129799, 139.49990618891738]).addTo(map);
    marker.bindPopup(`
        <b>${textTitle}</b><br>
        内容: ${textNaiyo}<br>
        年齢: ${selectOld}, 性別: ${selectGender}<br>
        <button> 詳細 </button>
    `);
};

// イベントリスナーの設定
let button = document.getElementById('btn');
button.addEventListener('click', butotnClick);
