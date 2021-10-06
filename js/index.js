function openModal() {
  console.log("aaaaaaaaaaaa");
  let modal = document.querySelector("#division1");
  let modal2 = document.querySelector("#division2");

  console.log(modal);
  modal.style.display = "none";
  modal2.style.display = "block";
}

function closeModal() {
  let modal = document.querySelector("#division1");
  let modal2 = document.querySelector("#division2");

  modal.style.display = "flex";
  modal2.style.display = "none";
}

function aboutMe() {
  console.log("aaa");
  let aboutMe = document.querySelector("#aboutMe");
  let contact = document.querySelector("#contact");
  aboutMe.style.display = "block";
  contact.style.display = "none";
}

function aboutMeClose() {
  console.log("aaa");
  let aboutMe = document.querySelector("#aboutMe");
  let contact = document.querySelector("#contact");
  aboutMe.style.display = "none";
  contact.style.display = "none";
}

function contact() {
  console.log("aaa");
  let contact = document.querySelector("#contact");
  let aboutMe = document.querySelector("#aboutMe");
  contact.style.display = "block";
  aboutMe.style.display = "none";
}

function contactClose() {
  console.log("aaa");
  let contact = document.querySelector("#contact");
  contact.style.display = "none";
}

document.documentElement.onclick = function (event) {
  if (event.target !== "") {
    optDesk.style.display = "none";
  }
};
