(() => {
  const scene = document.getElementById("swift-scene");
  const toggle = scene.querySelector("button");
  const wake = document.getElementById("swift-wake");
  const perspective = document.getElementById("swift-perspective");
  const credit = document.getElementById("swift-flow-credit");
  const description = document.getElementById("swift-art-description");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const profile = description.textContent;
  const appleBrowser = navigator.vendor === "Apple Computer, Inc." ||
    /iPhone|iPad|iPod/.test(navigator.userAgent);
  // Apple browsers can play VP9 while dropping its alpha channel.
  const wakeSource = appleBrowser && wake.canPlayType('video/mp4; codecs="hvc1"')
    ? wake.dataset.hevcSrc
    : wake.dataset.src;

  function updatePlayback() {
    if (!scene.classList.contains("is-flow") || reducedMotion.matches) {
      wake.pause();
      return;
    }
    if (!wake.hasAttribute("src")) wake.src = wakeSource;
    wake.play().catch(() => {
      // The poster remains available if playback is blocked.
    });
  }

  function setFlow(showFlow) {
    scene.classList.toggle("is-flow", showFlow);
    perspective.textContent = showFlow ? "Fluid dynamicist" : "Observer";
    toggle.textContent = showFlow ? "Back to the sky" : "Show the flow";
    credit.hidden = !showFlow;
    description.textContent = showFlow
      ? profile + " Red and blue show opposite signs of spanwise vorticity in the wake."
      : profile;
    updatePlayback();
  }

  toggle.addEventListener("click", () => setFlow(!scene.classList.contains("is-flow")));
  wake.addEventListener("ended", () => {
    setFlow(false);
    wake.currentTime = 0;
  });

  reducedMotion.addEventListener("change", updatePlayback);
  toggle.hidden = false;
})();
