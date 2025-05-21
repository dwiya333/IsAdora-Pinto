function next(current, next) {
      document.getElementById(current).style.display = 'none';
      document.getElementById(next).style.display = 'block';
    }

    function unlockLove() {
      document.getElementById("q3").style.display = "none";
      document.getElementById("final").style.display = "block";
    }

    function makeButtonRunAway(btnId) {
      const btn = document.getElementById(btnId);
      const container = btn.parentElement;
      
      container.addEventListener("mousemove", (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const rect = btn.getBoundingClientRect();

        const btnCenterX = rect.left + rect.width / 2;
        const btnCenterY = rect.top + rect.height / 2;

        const distance = Math.hypot(mouseX - btnCenterX, mouseY - btnCenterY);

        if (distance < 120) {
          const maxX = container.clientWidth - btn.offsetWidth;
          const maxY = container.clientHeight - btn.offsetHeight;

          let randX, randY, attempts = 0;
          do {
            randX = Math.floor(Math.random() * maxX);
            randY = Math.floor(Math.random() * maxY);
            attempts++;
          } while (
            Math.abs(randX - btn.offsetLeft) < 30 &&
            Math.abs(randY - btn.offsetTop) < 30 &&
            attempts < 50
          );

          const scale = 0.8 + Math.random() * 0.8;
          const rotation = Math.random() * 60 - 30;
          const flip = Math.random() < 0.2 ? ' rotateX(180deg)' : '';

          btn.style.position = "absolute";
          btn.style.left = `${randX}px`;
          btn.style.top = `${randY}px`;
          btn.style.transform = `scale(${scale}) rotate(${rotation}deg)${flip}`;
        }
      });
    }

    makeButtonRunAway("wrong1");
    makeButtonRunAway("wrong2");