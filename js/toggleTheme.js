const chk = document.getElementById("chk");

chk.addEventListener("change", () => {
  var light = document.getElementById("theme-light");
  var dark = document.getElementById("theme-dark");
  if (light.disabled) {
    light.removeAttribute("disabled");
    dark.setAttribute("disabled", "true");
    Cookies.set('theme','light');
				$(".fh5co-loader").show();
				setTimeout(() => {
					$(".fh5co-loader").fadeOut(300);
				}, 80);
  } else {
    light.setAttribute("disabled", "true");
    dark.removeAttribute("disabled");
    Cookies.set('theme','dark');
				$(".fh5co-loader").show();
				setTimeout(() => {
					$(".fh5co-loader").fadeOut(300);
				}, 80);
  }
});
