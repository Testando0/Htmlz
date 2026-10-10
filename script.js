// Keep the SVG animation graceful, and ensure the illustration is visible if motion is reduced.
(() => {
  const svg = document.getElementById('flower-frame');
  if (!svg) return;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) {
    svg.querySelectorAll('#LeafGroup use, #PinkFlowerGroup use, #BudGroup g, #Dots circle').forEach((el) => {
      el.style.opacity = '1';
      el.style.animation = 'none';
    });
    svg.querySelectorAll('#BaseGroup .draw, #Flourish .draw').forEach((el) => {
      el.style.strokeDashoffset = '0';
      el.style.animation = 'none';
    });
  }
})();
