body {
  margin: 0;
  background: rgb(24, 24, 24);
  font-family: monospace;
  color: #00ff99;
}

canvas {
  display: block;
  width: 100vw;
  height: 70vh;
  background: #0095ffa6;
  border-bottom: 2px solid #00ff99;
}

.dash {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 10px;
  flex-wrap: wrap;
}

.screen {
  background: black;
  border: 2px solid #00ff99;
  padding: 10px;
  width: 180px;
  text-align: center;
  box-shadow: 0 0 15px #00ff99;
}

.label {
  font-size: 12px;
  opacity: 0.7;
}

.value {
  font-size: 28px;
  margin-top: 5px;
}

.speed-bar {
  width: 100%;
  height: 15px;
  background: #bed8cb;
  border: 1px solid #00ff99;
  margin: 8px 0;
  box-shadow: 0 0 6px #00ff99 inset;
}

#speedFill {
  height: 100%;
  width: 0%;
  background: #ff0040;
  transition: width 0.1s linear;
}

button {
  background: black;
  color: #00ff99;
  border: 2px solid #00ff99;
  padding: 8px;
  cursor: pointer;
  font-size: 12px;
  margin-top: 6px;
}

button:hover {
  background: #00ff99;
  color: black;
}

.coords {
  border: 2px solid #ffbb4d;
  box-shadow: 0 0 20px #ffdb4d;
  color: #fff64d;
}

#speedSlider {
  width: 100%;
  margin-top: 8px;
  accent-color: #ff00e1;
  cursor: pointer;
}


#controlBox.active {
  border-color: #ff0040;
  box-shadow: 0 0 20px #ff0040;
}
