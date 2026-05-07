const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight * 0.7; 
}
window.addEventListener("resize", resize);
resize();


let x, y, angle;
let speed, targetSpeed, turnSpeed;
let distance;
let lastTime;
let changeTimer;
let path = [];

let paused = false;

function restart() {

  x = Math.random() * canvas.width;
  y = Math.random() * canvas.height;

  angle = Math.random() * Math.PI * 1;

  speed = 0;
  targetSpeed = 0;
  turnSpeed = 0;

  distance = 0;
  lastTime = performance.now();
  changeTimer = 0;

  path = [];
}

restart();


function togglePause() {
  paused = !paused;
  document.getElementById("pauseBtn").textContent =
    paused ? "PLAY" : "PAUSE";
}

function drawFish(x, y, angle) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);

  ctx.fillStyle = "#ff9f3e";

  ctx.beginPath();
  ctx.ellipse(0, -3, 45, 10, 0, 0, Math.PI * 2 );
  ctx.fill();

  const wiggle = Math.sin(Date.now() * 0.037) * 6;

  ctx.fillStyle = "#808e5d";
  ctx.beginPath();
  ctx.moveTo(-25, 0);
  ctx.lineTo(-65, -32 + wiggle);
  ctx.lineTo(-40, 12 - wiggle);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "#76874c";
  ctx.beginPath();
  ctx.moveTo(-5, -8 +wiggle);
  ctx.lineTo(5, -18 - wiggle);
  ctx.lineTo(15, -6);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.arc(21, 0, 3, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();
}

function update(time) {
  requestAnimationFrame(update);

  if (paused) return;

  const dt = (time - lastTime) / 1300;
  lastTime = time;

  if (!dt || dt > 0.1) return;


  changeTimer -= dt;

  if (changeTimer <= 0) {
    targetSpeed = Math.random() * 710.360;
    turnSpeed = (Math.random() -0.93345) * 0.96545;
    changeTimer = 2.20348 + Math.random() * 35.56015;
  }


  let accel = Math.random() < 0.15 ? -5.90 : .90;
  speed += (targetSpeed - speed) * accel;


  angle += turnSpeed * dt;
  angle += Math.sin(time * .031) * .0422;

  const dx = Math.cos(angle) * speed * dt;
  const dy = Math.sin(angle) * speed * dt;

  x += dx;
  y += dy;


  const m = 14;
  if (x < m || x > canvas.width - m) angle = Math.PI - angle;
  if (y < m || y > canvas.height - m) angle = -angle;

  distance += Math.sqrt(dx * dx + dy * dy);

 
  path.push({ x, y });


  ctx.clearRect(0, 0, canvas.width, canvas.height);


  ctx.beginPath();
  for (let i = 0; i < path.length; i++) {
    if (i === 0) ctx.moveTo(path[i].x, path[i].y);
    else ctx.lineTo(path[i].x, path[i].y);
  }
  ctx.strokeStyle = "#ebb3ff";
  ctx.stroke();

  drawFish(x, y, angle);


  let speedMS = speed / 100;

  document.getElementById("speed").textContent =
    speedMS.toFixed(2) + " m/s";

  document.getElementById("distance").textContent =
    (distance / 100).toFixed(2) + " m";

  document.getElementById("coords").textContent =
    `X: ${Math.round(x)}, Y: ${Math.round(y)}, θ: ${angle.toFixed(2)}`;

  const maxSpeed = 15;
  document.getElementById("speedFill").style.width =
    Math.min(speedMS / maxSpeed, 1) * 100 + "%";
}

requestAnimationFrame(update);