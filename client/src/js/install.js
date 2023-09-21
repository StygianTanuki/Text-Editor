const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    installPrompt = event;
    butInstall.style.visibility = "visible";
  });

// Implemented a click event handler on the `butInstall` element
butInstall.addEventListener("click", async (event) => {
    if (!installPrompt) {
      return;
    }
  
    const result = await installPrompt.prompt();
    installPrompt = null;
    butInstall.setAttribute("disabled", true);
    butInstall.textContent = "Installed!";
  });

// Added a handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
    console.log("appinstalled", event);
  });