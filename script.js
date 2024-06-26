
let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
        let timeRef = document.querySelector(".timer-display");
        let lapsContainer = document.querySelector(".laps");
        let int = null;

        document.getElementById("start-pause-timer").addEventListener("click", () => {
            if (int === null) {
                int = setInterval(displayTimer, 10);
                document.getElementById("start-pause-timer").textContent = "Pause";
            } else {
                clearInterval(int);
                int = null;
                document.getElementById("start-pause-timer").textContent = "Start";
            }
        });

        document.getElementById("reset-timer").addEventListener("click", () => {
            clearInterval(int);
            int = null;
            [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
            timeRef.innerHTML = "00 : 00 : 00 : 000";
            lapsContainer.innerHTML = "";
            document.getElementById("start-pause-timer").textContent = "Start";
        });

        document.getElementById("lap-timer").addEventListener("click", () => {
            if (int !== null) {
                let h = hours < 10 ? "0" + hours : hours;
                let m = minutes < 10 ? "0" + minutes : minutes;
                let s = seconds < 10 ? "0" + seconds : seconds;
                let ms = milliseconds < 10 ? "00" + milliseconds
                    : milliseconds < 100 ? "0" + milliseconds
                        : milliseconds;
                let lapTime = `${h} : ${m} : ${s} : ${ms}`;
                let lapElement = document.createElement("div");
                lapElement.innerText = lapTime;
                lapsContainer.appendChild(lapElement);
            }
        });

        function displayTimer() {
            milliseconds += 10;
            if (milliseconds >= 1000) {
                milliseconds = 0;
                seconds++;
                if (seconds >= 60) {
                    seconds = 0;
                    minutes++;
                    if (minutes >= 60) {
                        minutes = 0;
                        hours++;
                    }
                }
            }

            let h = hours < 10 ? "0" + hours : hours;
            let m = minutes < 10 ? "0" + minutes : minutes;
            let s = seconds < 10 ? "0" + seconds : seconds;
            let ms = milliseconds < 10 ? "00" + milliseconds
                : milliseconds < 100 ? "0" + milliseconds
                    : milliseconds;

            timeRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
        }
