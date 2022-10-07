const school = document.querySelector(".school-cont");
const college = document.querySelector(".college-cont");
const university = document.querySelector(".university-cont");
const thnx = document.querySelector(".thnx-cont");

const schoolYesBtn = document.querySelector(".school-cont_yes-btn");
const collegeYesBtn = document.querySelector(".college-cont_yes-btn");
const universityYesBtn = document.querySelector(".university-cont_yes-btn");
const schoolNoBtn = document.querySelector(".school-cont_no-btn");
const collegeNoBtn = document.querySelector(".college-cont_no-btn");
const universityNoBtn = document.querySelector(".university-cont_no-btn");

let result = {
  school: false,
  college: false,
  university: false,
};

function addHidden(event) {
  event.classList.add("hidden");
}
function removeHidden(event) {
  event.classList.remove("hidden");
}

schoolYesBtn.addEventListener("click", function clickBtn(event) {
  addHidden(school);
  removeHidden(college);
  result.school = true;
});

collegeYesBtn.addEventListener("click", function clickBtn(event) {
  addHidden(college);
  removeHidden(university);
  result.college = true;
});

universityYesBtn.addEventListener("click", function clickBtn(event) {
  addHidden(university);
  removeHidden(thnx);
  result.university = true;
  console.log(result);
});

schoolNoBtn.addEventListener("click", function clickBtn(event) {
  addHidden(school);
  removeHidden(thnx);
  console.log(result);
});

collegeNoBtn.addEventListener("click", function clickBtn(event) {
  addHidden(college);
  removeHidden(thnx);
  console.log(result);
});

universityNoBtn.addEventListener("click", function clickBtn(event) {
  addHidden(university);
  removeHidden(thnx);
  console.log(result);
});
