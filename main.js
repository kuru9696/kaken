    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css">
    <script src="https://unpkg.com/leaflet@1.8.0/dist/leaflet.js" defer></script>

let map;

        // --- マップ初期化 ---
        document.addEventListener("DOMContentLoaded", () => {
            map = L.map('map').setView([35.7, 139.49], 15);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19
            }).addTo(map);

            // ★ ページ読み込み時に位置情報を取得
            navigator.geolocation.getCurrentPosition(initSuccess, error);
        });

        // ★ 初期位置設定
        function initSuccess(position) {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;

            // 現在地にマップを移動
            map.setView([lat, lng], 16);
        }

        // --- 募集ボタン ---
        function buttonClick() {
            navigator.geolocation.getCurrentPosition(success, error);
        }

        function success(position) {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;

            const age = document.getElementById("old").value;
            const gender = document.getElementById("gender").value;
            const title = document.getElementById("title").value;
            const naiyo = document.getElementById("naiyo").value;

            const marker = L.marker([lat, lng]).addTo(map);

            marker.bindPopup(`
                <div>
                    <p><b>年齢：</b>${age}</p>
                    <p><b>性別：</b>${gender}</p>
                    <p><b>タイトル：</b>${title}</p>
                    <p><b>内容：</b>${naiyo}</p>
                    <button id="shonin">承認する</button>
                </div>
            `);

            marker.on("popupopen", () => {
                const shoninBtn = document.getElementById("shonin");
                if (shoninBtn) {
                    shoninBtn.addEventListener("click", doshonin);
                }
            });

            map.setView([lat, lng], 16);
        }

        function error() {
            alert("位置情報が取得できませんでした");
        }

        function doshonin(){
            alert("aiue")
        }

        document.getElementById("btn").addEventListener("click", buttonClick);
