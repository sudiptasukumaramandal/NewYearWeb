// New Yeaer spacial
// name = prompt("Enter Your Name Please:");
// let UserName = document.getElementById("UserName-Hare");
// console.log(UserName)
// UserName.innerHTML = `
// <h1 class="animated infinite flash delay-2s">${name}</h1>`;

const data = {};
function handleInput(e) {
  data[e.name] = e.value;
}
function submitData() {
  // console.log(data.fname); //get first name from object
  // console.log(data); //return object
  let name = data.Name;
  let UserName = document.getElementById("details");
  let NameTaker = document.getElementById("NameTaker");
  NameTaker.style = `display: none;`;
  UserName.innerHTML = `
    <div id="UserName-Hare">
        <h1 class="animated infinite flash delay-2s">${name}</h1>
    </div>
            <h2 class="animated infinite flipInX delay-2s">Wish You A Very</h2>
            <h1 class="animated infinite bounce delay-2s">Happy</h1>
            <h1 class="animated infinite bounce delay-2s">New Year</h1>
            <div class="grid">
                <ul>
                    <li>2</li>
                    <li>0</li>
                    <li>2</li>
                    <li>0</li>
                </ul>
                <div id="allSvg">
                    <svg id="one">
                        <rect>
                            <animate attributeName="x" from="0" to="-100" dur="5s" fill="black" repeatCount="500">
                            </animate>
                        </rect>
                    </svg>
                    <svg id="two">
                        <rect>
                            <animate attributeName="y" from="0" to="-100" dur="5s" fill="black" repeatCount="500">
                            </animate>
                        </rect>
                    </svg>
                    <svg id="three">
                        <rect>
                            <animate attributeName="y" from="0" to="100" dur="5s" fill="black" repeatCount="500">
                            </animate>
                        </rect>
                    </svg>
                    <svg id="four">
                        <rect>
                            <animate attributeName="x" from="0" to="100" dur="5s" fill="black" repeatCount="500">
                            </animate>
                        </rect>
                    </svg>
                </div>
            </div>`;
}



function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date(2020, 0, 1)) + 0 * 24 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);