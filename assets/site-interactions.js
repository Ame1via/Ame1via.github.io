(() => {
  const agent = document.querySelector(".agent-widget");
  const mark = document.querySelector(".mark");
  const readEnd = document.querySelector(".read-end");
  const fragmentItems = Array.from(document.querySelectorAll(".fragment-item[data-fragment-index]"));
  const axisLinks = Array.from(document.querySelectorAll(".axis-link[data-fragment-index]"));
  const waterfall = document.querySelector(".language-waterfall");
  const languageSources = Array.from(document.querySelectorAll(".language-source"));
  const cellAgent = document.querySelector(".cell-agent");
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

  if (waterfall && languageSources.length && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const raw = languageSources.map((source) => source.textContent || "").join(" ");
    const cleaned = raw
      .replace(/[{}[\]<>`*_#]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    const sentences = cleaned
      .split(/[。！？.!?]/)
      .map((part) => part.trim())
      .filter((part) => part.length >= 4);
    const words = cleaned
      .split(/[，、；：,\s/]+/)
      .map((part) => part.trim())
      .filter((part) => part.length >= 2 && part.length <= 18);
    const sourcePool = [...sentences, ...words];

    if (sourcePool.length) {
      const isTriggeredRoom = Boolean(cellAgent);
      const count = isTriggeredRoom ? Math.min(48, Math.max(24, sourcePool.length * 3)) : Math.min(34, Math.max(16, sourcePool.length * 2));

      for (let index = 0; index < count; index += 1) {
        const drop = document.createElement("span");
        const text = sourcePool[Math.floor(Math.random() * sourcePool.length)];
        drop.className = "language-drop";
        drop.textContent = text.length > 42 ? `${text.slice(0, 42)}...` : text;
        drop.style.setProperty("--drop-left", `${46 + Math.random() * 44}%`);
        drop.style.setProperty("--drop-size", `${12 + Math.random() * 9}px`);
        drop.style.setProperty("--drop-alpha", `${0.08 + Math.random() * 0.18}`);
        drop.style.setProperty("--drop-duration", `${18 + Math.random() * 20}s`);
        drop.style.setProperty("--drop-delay", `${Math.random() * -28}s`);
        drop.style.setProperty("--drop-drift", `${-90 + Math.random() * 180}px`);
        drop.style.setProperty("--drop-rotate", `${-14 + Math.random() * 28}deg`);
        waterfall.append(drop);
      }

      if (cellAgent) {
        let activeTimer;

        cellAgent.addEventListener("click", () => {
          document.body.classList.add("waterfall-active");
          window.clearTimeout(activeTimer);
          activeTimer = window.setTimeout(() => {
            document.body.classList.remove("waterfall-active");
          }, 12000);
        });
      }
    }
  }
})();
