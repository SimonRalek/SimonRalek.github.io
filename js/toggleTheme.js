const chk = document.getElementById("chk");

chk.addEventListener("change", () => {
  var light = document.getElementById("theme-light");
  var dark = document.getElementById("theme-dark");
  if (light.disabled) {
    light.removeAttribute("disabled");
    dark.setAttribute("disabled", "true");
  } else {
    light.setAttribute("disabled", "true");
    dark.removeAttribute("disabled");
  }
});
