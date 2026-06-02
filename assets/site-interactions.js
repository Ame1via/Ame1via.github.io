(() => {
  const agent = document.querySelector(".agent-widget");
  const mark = document.querySelector(".mark");
  const readEnd = document.querySelector(".read-end");
  const fragmentItems = Array.from(document.querySelectorAll(".fragment-item[data-fragment-index]"));
  const axisLinks = Array.from(document.querySelectorAll(".axis-link[data-fragment-index]"));
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

  if (fragmentItems.length && axisLinks.length) {
    const room = document.querySelector(".fragments-room");
    const setActiveAxis = (index) => {
      axisLinks.forEach((link) => {
        link.classList.toggle("is-active", link.dataset.fragmentIndex === index);
      });
    };

    const setFragmentGlow = (item) => {
      if (!room) return;
      room.style.setProperty("--glow-x", `${item.dataset.glowX || 74}%`);
      room.style.setProperty("--glow-y", `${item.dataset.glowY || 34}%`);
      room.style.setProperty("--moon-x", `${item.dataset.moonX || 22}%`);
      room.style.setProperty("--moon-y", `${item.dataset.moonY || 20}%`);
      room.classList.add("has-fragment-glow");
    };

    fragmentItems.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        setActiveAxis(item.dataset.fragmentIndex);
        setFragmentGlow(item);
      });
      item.addEventListener("focusin", () => {
        setActiveAxis(item.dataset.fragmentIndex);
        setFragmentGlow(item);
      });
    });

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

          if (visible) {
            setActiveAxis(visible.target.dataset.fragmentIndex);
            setFragmentGlow(visible.target);
          }
        },
        { threshold: [0.35, 0.55, 0.75] }
      );

      fragmentItems.forEach((item) => observer.observe(item));
    }
  }
})();
