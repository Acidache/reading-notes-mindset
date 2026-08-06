/* ===== 评论弹窗逻辑 ===== */
(() => {
  const panel = document.getElementById("discussion-panel");
  const closeButton = document.getElementById("discussion-close");
  const openButtons = document.querySelectorAll(".js-open-discussion");

  if (!panel || !closeButton) return;

  const openDiscussion = () => {
    if (!panel.open) {
      panel.showModal();
      document.body.classList.add("panel-open");
    }
    setTimeout(() => closeButton.focus(), 0);
  };

  const closeDiscussion = () => {
    panel.close();
    document.body.classList.remove("panel-open");
    const lastBtn = document.querySelector(".js-open-discussion");
    if (lastBtn) lastBtn.focus();
  };

  openButtons.forEach((btn) => btn.addEventListener("click", openDiscussion));
  closeButton.addEventListener("click", closeDiscussion);

  // 点击遮罩关闭
  panel.addEventListener("click", (e) => {
    if (e.target === panel) closeDiscussion();
  });

  // Esc 键关闭
  panel.addEventListener("cancel", (e) => {
    e.preventDefault();
    closeDiscussion();
  });

  // 页面加载时检查 hash
  if (window.location.hash === "#discussion") {
    openDiscussion();
  }
})();
