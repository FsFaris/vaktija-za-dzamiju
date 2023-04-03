const scrollingTextContainer = document.getElementById('zadnjiDio');
const scrollingText = document.getElementById('plutajuciTekst');
const containerWidth = scrollingTextContainer.offsetWidth;
const textWidth = scrollingText.offsetWidth;

if (textWidth > containerWidth) {
  scrollingText.style.animationDuration = textWidth / 100 + "s";
}

function updateTime(){
let tacnoVrijeme = document.getElementById("tacnoVrijeme")
let currentTime = new Date()
let hours = currentTime.getHours()
let minutes = currentTime.getMinutes()
let seconds = currentTime.getSeconds()
let godinaEl = currentTime.getFullYear()
let mjesecniDatum = currentTime.getDate()

let danUMjesecu = document.getElementById("dan_u_mjesecu")
if(mjesecniDatum<10){
    mjesecniDatum = "0" + mjesecniDatum
}
danUMjesecu.innerHTML = mjesecniDatum

 

if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  
 let godina = document.getElementById("godina")
   godina.innerHTML = godinaEl


let mjesecEl = document.getElementById("mjesec");
let mjesec = currentTime.getMonth() + 1; 



switch (mjesec) {
  case 1: 
    mjesecEl.innerHTML = "Januar";
    break;
     case 2:
     mjesecEl.innerHTML = "Februar";
     break;
      case 3:
      mjesecEl.innerHTML = "Mart";
      break;
        case 4:
        mjesecEl.innerHTML = "April";
        break;
          case 5:
          mjesecEl.innerHTML = "Maj";
          break;
            case 6:
            mjesecEl.innerHTML = "Juni";
            break;
                case 7:
                mjesecEl.innerHTML = "Juli";
                break;
                    case 8:
                    mjesecEl.innerHTML = "August";
                    break;
                        case 9:
                        mjesecEl.innerHTML = "Septembar";
                        break;
                            case 10:
                            mjesecEl.innerHTML = "Oktobar";
                            break;
                                case 11:
                                mjesecEl.innerHTML = "Novembar";
                                break;
                                    case 12:
                                    mjesecEl.innerHTML = "Decembar";
                                    break;
}
let mjesecBroj = document.getElementById("mjesecBroj")
if(mjesec<10){
    mjesec = "0" + mjesec
}
mjesecBroj.innerHTML = mjesec

let danEl = document.getElementById("dan")
let day = currentTime.getDay();

switch (day){
    case 1:
        danEl.innerHTML = "Ponedjeljak";
        break;
        case 2:
            danEl.innerHTML = "Utorak";
            break;
            case 3:
                danEl.innerHTML = "Srijeda";
                break;
                case 4:
                    danEl.innerHTML = "Četvrtak";
                    break;
                    case 5:
                        danEl.innerHTML = "Petak";
                        break;
                        case 6:
                            danEl.innerHTML = "Subota";
                            break;
                            case 0:
                                danEl.innerHTML = "Nedjelja";
                                break;
}

  tacnoVrijeme.innerHTML = hours + ":" + minutes + ":" + seconds;
}
setInterval(updateTime, 1000)