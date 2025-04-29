const shimmer = document.getElementById('shimmer');

document.addEventListener('mousemove', e => {
  const { clientX: x, clientY: y } = e;
  shimmer.style.backgroundPosition = `${x/5}px ${y/5}px`;
});
