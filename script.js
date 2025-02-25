function saveReminder() {
  const date = document.getElementById("service-date").value;
  if (date) {
    localStorage.setItem("serviceReminder", date);
    updateReminderText();
  }
}

function updateReminderText() {
  const savedDate = localStorage.getItem("serviceReminder");
  document.getElementById("reminder-text").innerText = savedDate
    ? "Next service on: ${savedDate}"
    : "No reminder set";
}

window.onload = updateReminderText;
