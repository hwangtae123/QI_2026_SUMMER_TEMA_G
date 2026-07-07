// ===== 멤버 카드 렌더링 =====
(function renderMembers() {
  const grid = document.getElementById("member-grid");
  if (!grid || typeof MEMBERS === "undefined") return;

  grid.innerHTML = MEMBERS.map((m) => {
    const avatar = m.photo
      ? `<img class="member-avatar" src="${m.photo}" alt="${m.name}" />`
      : `<div class="member-avatar">${m.emoji || m.name.charAt(0)}</div>`;

    const links = (m.links || [])
      .map((l) => `<a href="${l.url}" target="_blank" rel="noopener">${l.label}</a>`)
      .join("");

    return `
      <article class="member-card">
        ${avatar}
        <h3 class="member-name">${m.name}</h3>
        <p class="member-role">${m.role || ""}</p>
        <p class="member-bio">${m.bio || ""}</p>
        ${links ? `<div class="member-links">${links}</div>` : ""}
      </article>
    `;
  }).join("");
})();
