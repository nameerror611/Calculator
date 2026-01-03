const textarea = document.getElementById("tekst");
const button = document.getElementById("btn");
const hint = document.getElementById("hint");

function showMessage() {
  const value = textarea.value.trim();

  if (!value) {
    hint.textContent = "Najpierw coś wpisz 🙂";
    textarea.focus();
    return;
  }

  hint.textContent = "";
  alert(`Napisałeś: ${value}`);
}

// Kliknięcie przycisku
button.addEventListener("click", showMessage);

// Skrót: Ctrl+Enter / Cmd+Enter
textarea.addEventListener("keydown", (e) => {
  const isMac = navigator.platform.toUpperCase().includes("MAC");
  const modifier = isMac ? e.metaKey : e.ctrlKey;
  if (modifier && e.key === "Enter") showMessage();
});
