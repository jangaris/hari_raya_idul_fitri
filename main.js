var index = 0;
var textArray = [
  "hallo teman teman saya shtttttt",
  "sudah selesai ramadan tahun sekarang",
  "semoga dengan berakhir nya ramadan kali ini",
  "menjadikan kita manusia yang solehah",
  "dan selalu taat dalam mengerjakan kewajiban",
  "dan jangn lupa kita makan besar nih kupat🍛",
  "dan kami keluarga besar CODE_CPN mengucapkan",
];
var semuaTeksDitampilkan = false;

function ketik(i) {
  var currentText = textArray[index];

  if (i < currentText.length) {
    document.getElementById("text").innerHTML += currentText.charAt(i);
    i++;
    setTimeout(function () {
      ketik(i);
    }, 80);
  } else {
    // Setelah selesai satu kata, reset variabel dan tunggu 1 detik
    setTimeout(function () {
      // Setelah 1 detik, lanjut ke kata berikutnya
      document.getElementById("text").innerHTML = "";
      index = (index + 1) % textArray.length;

      if (index === 0) {
        semuaTeksDitampilkan = true;
      } else {
        setTimeout(function () {
          document.getElementById("text").innerHTML = "";
          ketik(0);
        }, 1000);
      }

      // Setelah semua teks ditampilkan
      if (semuaTeksDitampilkan) {
        document.getElementById("content_1").classList.add("d-none");
        document.getElementById("content_2").classList.remove("d-none");
        document
          .getElementById("content_utama")
          .classList.remove("align-items-end");
        document
          .getElementById("content_utama")
          .classList.add("align-items-center");
      }
    }, 1000);
  }
}

ketik(0);
