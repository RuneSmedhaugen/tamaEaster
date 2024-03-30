updateView();
function createHtml() {
    const html = document.getElementById('app');
    html.innerHTML = `
    <div id="stats">
        <p>Hunger:</p>
        <div class="progress-bar">
            <div id="hunger" class="progress"></div>
            <button onclick="fillHunger()">Feed easterBunny</button>
        </div>
        
        <p>Thirst:</p>
        <div class="progress-bar">
            <div id="thirst" class="progress"></div>
            <button onclick="fillThirst()">Give easterBunny water</button>
        </div>
        
        <p>Eggs collected: <span id="eggs">${easterBunny.eggs}</span></p>
    </div>
    <div id="easterBunny">
        <img id="bunnyImage" src="" alt="Easter Bunny">
        <div id="egg-container"></div>
    </div>
    <div id=winlose></div>
    `;
    updateStats();
  

}
