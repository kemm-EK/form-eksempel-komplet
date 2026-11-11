// Form
const form = document.querySelector("form");

function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}
// function handleSubmit() {

// }

if (form) {
  form.addEventListener("invalid", cancelPopup, true);
  //   form.addEventListener("submit", handleSubmit);
}

// Event
const eventPass = document.querySelector(".event-pass");
if (eventPass) {
  console.log("Event pass page");
  // Lav const til elementer i opsamling.html
  const nicknameInput = document.querySelector("#nickname");
  const occupationSelect = document.querySelector("#occupation");
  const lineageSelect = document.querySelector("#lineage");
  const sayingTextarea = document.querySelector("#saying");
  const workshoplist = document.querySelector("#workshops");

  // Hent data fra URL
  const params = new URLSearchParams(window.location.search);
  const nickname = params.get("username") || "Anonym";
  const occupation = params.get("occupation");
  const lineage = params.get("lineage");
  const saying = params.get("saying");
  const workshopparticipation = params.getAll("workshop");

  // Sæt data (fra URL) ind i event-kortets html elementer
  nicknameInput.textContent = nickname;
  occupationSelect.textContent = occupation;
  lineageSelect.textContent = lineage;
  sayingTextarea.textContent = saying;

  // Da der er flere workshops, skal vi bruge map() til at lave en liste af dem.
  // Hvis der ikke er valgt nogen workshops, skal der stå "Ingen workshops valgt"
  if (workshopparticipation.length > 0) {
    workshoplist.innerHTML = workshopparticipation.map((workshop) => `<li>${workshop}</li>`).join("");
  } else {
    workshoplist.innerHTML = "<li>Ingen workshops valgt</li>";
  }

  // Betinget styling
  if (lineage === "Whisker") {
    eventPass.style.backgroundColor = "#ff000070";
  } else if (lineage === "Nim") {
    eventPass.style.backgroundColor = "#00ff0070";
  } else if (lineage === "Tusker") {
    eventPass.style.backgroundColor = "#ffff0070";
  } else if (lineage === "Ambel") {
    eventPass.style.backgroundColor = "#0000ff70";
  } else {
    eventPass.style.backgroundColor = "#f5f5f5";
  }
  // Vælg billede efter erhverv
  const occupationImage = document.querySelector("#occupation-image");
  if (occupation === "Håndværker") {
    occupationImage.src = "img/emblem-craftsman.webp";
  } else if (occupation === "Håndhæver af loven") {
    occupationImage.src = "img/emblem-justice.webp";
  } else if (occupation === "Samler") {
    occupationImage.src = "img/emblem-gather.webp";
  } else if (occupation === "Fortæller") {
    occupationImage.src = "img/emblem-teller.webp";
  } else {
    occupationImage.src = "img/default.webp";
  }

  // udskriv event-pass
  // En lille extra-feature:
  // Når man klikker på print-knappen, åbner print-dialogen.
  // Det gør det nemmere for brugeren at udskrive event-passet.
  // Bemærk at det forudsætter afsnittet med @media print i style.css,
  // som skjuler alt andet end event-passet, når man udskriver.
  const printButton = document.querySelector("#print-button");
  printButton.addEventListener("click", () => {
    window.print();
  });
}
