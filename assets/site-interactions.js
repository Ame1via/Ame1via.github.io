(() => {
  const agent = document.querySelector(".agent-widget");
  const mark = document.querySelector(".mark");
  const readEnd = document.querySelector(".read-end");
  let taps = 0;
  let tapTimer;
  let direction = "left";

  function pulseAgent(className, duration = 1600) {
    if (!agent) return;
    agent.classList.add(className);
    window.setTimeout(() => {
      agent.classList.remove(className);
    }, duration);
  }

  if (mark) {
    mark.addEventListener("click", () => {
      taps += 1;
      window.clearTimeout(tapTimer);

      if (taps >= 3) {
        document.body.classList.add("door-open");
        pulseAgent("is-waving", 2200);
        taps = 0;
        return;
      }

      tapTimer = window.setTimeout(() => {
        taps = 0;
      }, 900);
    });
  }

  if (agent) {
    window.setInterval(() => {
      if (document.hidden || agent.matches(":hover") || document.body.classList.contains("door-open")) {
        return;
      }

      const patrolClass = direction === "left" ? "agent-patrol-left" : "agent-patrol-right";
      agent.classList.add(patrolClass);
      window.setTimeout(() => {
        agent.classList.remove(patrolClass);
      }, 8200);

      direction = direction === "left" ? "right" : "left";
    }, 46000);
  }

  if (readEnd && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        document.body.classList.add("read-complete");
        pulseAgent("is-waving", 2600);
        observer.disconnect();
      },
      { threshold: 0.6 }
    );

    observer.observe(readEnd);
  }
})();
