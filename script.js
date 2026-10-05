const target = document.getElementById("target");
const scanBtn = document.getElementById("scanBtn");
const terminal = document.getElementById("terminal");
const result = document.getElementById("result");

let history = JSON.parse(localStorage.getItem("websafeHistory")) || [];

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function analyze(text) {
  const lower = text.toLowerCase();

  let score = 5;

  const keywords = [
    "login", "verify", "password", "bank",
    "winner", "free", "urgent", "account",
    "gift", "crypto", "security"
  ];

  const keywordFound = keywords.some(k => lower.includes(k));

  if (keywordFound) score += 25;

  const https = lower.startsWith("https://");

  if (!https && lower.startsWith("http")) score += 20;

  const ip = /https?:\/\/\d{1,3}(\.\d{1,3}){3}/.test(lower);

  if (ip) score += 25;

  const suspiciousDomains =
    [".xyz", ".top", ".click", ".tk", ".ml", ".ga"];

  const suspiciousDomain =
    suspiciousDomains.some(d => lower.includes(d));

  if (suspiciousDomain) score += 20;

  if (text.length > 100) score += 10;

  score = Math.min(score, 100);

  return {
    score,
    https,
    keywordFound,
    ip,
    suspiciousDomain,
    long: text.length > 100
  };
}

async function scan() {

  const text = target.value.trim();

  if (!text) {
    alert("Enter a URL or message first.");
    return;
  }

  result.classList.add("hidden");

  terminal.innerHTML = "";

  const lines = [
    "Initializing WebSafe scanner...",
    "Loading security modules...",
    "Analyzing URL structure...",
    "Checking encryption...",
    "Scanning suspicious patterns...",
    "Calculating threat score..."
  ];

  for (const line of lines) {
    terminal.innerHTML += `<div>› ${line}</div>`;
    await delay(400);
  }

  const data = analyze(text);

  document.getElementById("score").textContent = data.score;

  let level = "LOW RISK";
  let description = "No major threats detected.";

  if (data.score >= 70) {
    level = "HIGH RISK";
    description = "Multiple suspicious indicators detected.";
  } else if (data.score >= 40) {
    level = "MEDIUM RISK";
    description = "Some potentially dangerous patterns detected.";
  }

  const levelElement = document.getElementById("riskLevel");

  levelElement.textContent = level;
  levelElement.className =
    data.score >= 70 ? "high" :
    data.score >= 40 ? "medium" : "";

  document.getElementById("riskText").textContent = description;

  document.getElementById("httpsCheck").textContent =
    data.https ? "✓ SECURE" : "✕ NOT SECURE";

  document.getElementById("keywordCheck").textContent =
    data.keywordFound ? "⚠ FOUND" : "✓ CLEAR";

  document.getElementById("ipCheck").textContent =
    data.ip ? "⚠ DETECTED" : "✓ CLEAR";

  document.getElementById("domainCheck").textContent =
    data.suspiciousDomain ? "⚠ SUSPICIOUS" : "✓ CLEAR";

  document.getElementById("lengthCheck").textContent =
    data.long ? "⚠ LONG" : "✓ NORMAL";

  result.classList.remove("hidden");

  history.unshift({
    text: text.substring(0, 45),
    score: data.score
  });

  history = history.slice(0, 5);

  localStorage.setItem(
    "websafeHistory",
    JSON.stringify(history)
  );

  renderHistory();
}

function renderHistory() {

  const list = document.getElementById("historyList");

  if (!history.length) {
    list.innerHTML =
      `<p style="color:#6e8b89">No scans yet.</p>`;
    return;
  }

  list.innerHTML = history.map(item => {

    const cls =
      item.score >= 70 ? "high" :
      item.score >= 40 ? "medium" : "";

    return `
      <div class="history-item">
        <span>${item.text}</span>
        <strong class="${cls}">
          ${item.score}/100
        </strong>
      </div>
    `;

  }).join("");
}

scanBtn.addEventListener("click", scan);

renderHistory();
