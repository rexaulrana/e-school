// cart no 6
let totalFee6 = 0;
let totalSeats6 = 60;
function courseInfo6(data) {
  const courseImg = data.parentNode.childNodes[1].src;
  const courseName = data.parentNode.childNodes[3].innerText;
  const courseFee = data.parentNode.childNodes[5].innerText;
  //   console.log("c", courseName);

  const cart = document.getElementById("cart");
  // const img = (document.getElementById("course-img").src = `${courseImg}`);
  // document.getElementById("course-img").classList = "hidden";
  const div = document.createElement("div");
  // const img = document.createComment("img");
  // console.log(courseImg, img);
  // img.innerHTML = `${courseImg}`;

  div.innerHTML = ` <img class="h-[50px] rounded-lg mt-3 w-[70px]" src="${courseImg}"/> <div>
  
  ${courseName} - ${courseFee} <i id="remove6"  title="Remove" class="fa-solid  fa-trash text-red-600 ml-4"></i>
  </div>
    `;
  cart.appendChild(div);

  // decrease seat
  const seatsString = document.getElementById("seats6").innerText;
  let seatsInt = parseInt(seatsString);
  totalSeats6 = totalSeats6 - 1;
  document.getElementById("seats6").innerText = totalSeats6;
  // console.log(seatsString);

  // fee calculation
  const price = parseFloat(courseFee);
  totalFee6 = totalFee6 + price;
  // console.log(total);
  // cart.appendChild(img);
  document.getElementById("total-fee").innerText = totalFee6;
  const count = cart.childElementCount - 2;
  // console.log(count);
  const items = (document.getElementById("items").innerText = count);
  const removeItem = document
    .getElementById("remove6")
    .addEventListener("click", handleRemove);
  function handleRemove() {
    div.innerHTML = "";
    cart.appendChild(div);
    const items = (document.getElementById("items").innerText = "");
    document.getElementById("total-fee").innerText = 0;
    document.getElementById("seats6").innerText = totalSeats6 + count;
    // window.location.reload();
    // console.log("removeIt");
  }
}

// cart no 5
let totalFee5 = 0;
let totalSeats5 = 60;
function courseInfo5(data) {
  const courseImg = data.parentNode.childNodes[1].src;
  const courseName = data.parentNode.childNodes[3].innerText;
  const courseFee = data.parentNode.childNodes[5].innerText;
  //   console.log("c", courseName);

  const cart = document.getElementById("cart");
  // const img = (document.getElementById("course-img").src = `${courseImg}`);
  // document.getElementById("course-img").classList = "hidden";
  const div = document.createElement("div");
  // const img = document.createComment("img");
  // console.log(courseImg, img);
  // img.innerHTML = `${courseImg}`;

  div.innerHTML = ` <img class="h-[50px] rounded-lg mt-3 w-[70px]" src="${courseImg}"/> <div>
  
  ${courseName} - ${courseFee} <i id="remove5"  title="Remove" class="fa-solid  fa-trash text-red-600 ml-4"></i>
  </div>
    `;
  cart.appendChild(div);

  // decrease seat
  const seatsString = document.getElementById("seats5").innerText;
  let seatsInt = parseInt(seatsString);
  totalSeats5 = totalSeats5 - 1;
  document.getElementById("seats5").innerText = totalSeats5;
  // console.log(seatsString);

  // fee calculation
  const price = parseFloat(courseFee);
  totalFee5 = totalFee5 + price;
  // console.log(total);
  // cart.appendChild(img);
  document.getElementById("total-fee").innerText = totalFee5;
  const count = cart.childElementCount - 2;
  // console.log(count);
  const items = (document.getElementById("items").innerText = count);
  const removeItem = document
    .getElementById("remove5")
    .addEventListener("click", handleRemove);
  function handleRemove() {
    div.innerHTML = "";
    cart.appendChild(div);
    const items = (document.getElementById("items").innerText = "");
    document.getElementById("total-fee").innerText = 0;
    document.getElementById("seats5").innerText = totalSeats5 + count;
    // window.location.reload();
    // console.log("removeIt");
  }
}
// cart no 4
let totalFee4 = 0;
let totalSeats4 = 60;
function courseInfo4(data) {
  const courseImg = data.parentNode.childNodes[1].src;
  const courseName = data.parentNode.childNodes[3].innerText;
  const courseFee = data.parentNode.childNodes[5].innerText;
  //   console.log("c", courseName);

  const cart = document.getElementById("cart");
  // const img = (document.getElementById("course-img").src = `${courseImg}`);
  // document.getElementById("course-img").classList = "hidden";
  const div = document.createElement("div");
  // const img = document.createComment("img");
  // console.log(courseImg, img);
  // img.innerHTML = `${courseImg}`;

  div.innerHTML = ` <img class="h-[50px] rounded-lg mt-3 w-[70px]" src="${courseImg}"/> <div> ${courseName} - ${courseFee} <i id="remove4"  title="Remove" class="fa-solid  fa-trash text-red-600 ml-4"></i>
  </div>
    `;
  cart.appendChild(div);

  // decrease seat
  const seatsString = document.getElementById("seats4").innerText;
  let seatsInt = parseInt(seatsString);
  totalSeats4 = totalSeats4 - 1;
  document.getElementById("seats4").innerText = totalSeats4;
  // console.log(seatsString);

  // fee calculation
  const price = parseFloat(courseFee);
  totalFee4 = totalFee4 + price;
  // console.log(total);
  // cart.appendChild(img);
  document.getElementById("total-fee").innerText = totalFee4;
  const count = cart.childElementCount - 2;
  // console.log(count);
  const items = (document.getElementById("items").innerText = count);
  const removeItem = document
    .getElementById("remove4")
    .addEventListener("click", handleRemove);
  function handleRemove() {
    div.innerHTML = "";
    cart.appendChild(div);
    const items = (document.getElementById("items").innerText = "");
    document.getElementById("total-fee").innerText = 0;
    document.getElementById("seats4").innerText = totalSeats4 + count;
    // window.location.reload();
    // console.log("removeIt");
  }
}
// cart no 4
let totalFee3 = 0;
let totalSeats3 = 60;
function courseInfo3(data) {
  const courseImg = data.parentNode.childNodes[1].src;
  const courseName = data.parentNode.childNodes[3].innerText;
  const courseFee = data.parentNode.childNodes[5].innerText;
  //   console.log("c", courseName);

  const cart = document.getElementById("cart");
  // const img = (document.getElementById("course-img").src = `${courseImg}`);
  // document.getElementById("course-img").classList = "hidden";
  const div = document.createElement("div");
  // const img = document.createComment("img");
  // console.log(courseImg, img);
  // img.innerHTML = `${courseImg}`;

  div.innerHTML = ` <img class="h-[50px] rounded-lg mt-3 w-[70px]" src="${courseImg}"/> <div> ${courseName} - ${courseFee} <i id="remove3"  title="Remove" class="fa-solid  fa-trash text-red-600 ml-4"></i>
  </div>
    `;
  cart.appendChild(div);

  // decrease seat
  const seatsString = document.getElementById("seats3").innerText;
  let seatsInt = parseInt(seatsString);
  totalSeats3 = totalSeats3 - 1;
  document.getElementById("seats3").innerText = totalSeats3;
  // console.log(seatsString);

  // fee calculation
  const price = parseFloat(courseFee);
  totalFee3 = totalFee3 + price;
  // console.log(total);
  // cart.appendChild(img);
  document.getElementById("total-fee").innerText = totalFee3;
  const count = cart.childElementCount - 2;
  // console.log(count);
  const items = (document.getElementById("items").innerText = count);
  const removeItem = document
    .getElementById("remove3")
    .addEventListener("click", handleRemove);
  function handleRemove() {
    div.innerHTML = "";
    cart.appendChild(div);
    const items = (document.getElementById("items").innerText = "");
    document.getElementById("total-fee").innerText = 0;
    document.getElementById("seats3").innerText = totalSeats3 + count;
    // window.location.reload();
    // console.log("removeIt");
  }
}
// cart no 4
let totalFee2 = 0;
let totalSeats2 = 60;
function courseInfo2(data) {
  const courseImg = data.parentNode.childNodes[1].src;
  const courseName = data.parentNode.childNodes[3].innerText;
  const courseFee = data.parentNode.childNodes[5].innerText;
  //   console.log("c", courseName);

  const cart = document.getElementById("cart");
  // const img = (document.getElementById("course-img").src = `${courseImg}`);
  // document.getElementById("course-img").classList = "hidden";
  const div = document.createElement("div");
  // const img = document.createComment("img");
  // console.log(courseImg, img);
  // img.innerHTML = `${courseImg}`;

  div.innerHTML = ` <img class="h-[50px] rounded-lg mt-3 w-[70px]" src="${courseImg}"/> <div> ${courseName} - ${courseFee} <i id="remove2"  title="Remove" class="fa-solid  fa-trash text-red-600 ml-4"></i>
  </div>
    `;
  cart.appendChild(div);

  // decrease seat
  const seatsString = document.getElementById("seats2").innerText;
  let seatsInt = parseInt(seatsString);
  totalSeats2 = totalSeats2 - 1;
  document.getElementById("seats2").innerText = totalSeats2;
  // console.log(seatsString);

  // fee calculation
  const price = parseFloat(courseFee);
  totalFee2 = totalFee2 + price;
  // console.log(total);
  // cart.appendChild(img);
  document.getElementById("total-fee").innerText = totalFee2;
  const count = cart.childElementCount - 2;
  // console.log(count);
  const items = (document.getElementById("items").innerText = count);
  const removeItem = document
    .getElementById("remove2")
    .addEventListener("click", handleRemove);
  function handleRemove() {
    div.innerHTML = "";
    cart.appendChild(div);
    const items = (document.getElementById("items").innerText = "");
    document.getElementById("total-fee").innerText = 0;
    document.getElementById("seats2").innerText = totalSeats2 + count;
    // window.location.reload();
    // console.log("removeIt");
  }
}
// cart no 4
let totalFee1 = 0;
let totalSeats1 = 60;
function courseInfo1(data) {
  const courseImg = data.parentNode.childNodes[1].src;
  const courseName = data.parentNode.childNodes[3].innerText;
  const courseFee = data.parentNode.childNodes[5].innerText;
  //   console.log("c", courseName);

  const cart = document.getElementById("cart");
  // const img = (document.getElementById("course-img").src = `${courseImg}`);
  // document.getElementById("course-img").classList = "hidden";
  const div = document.createElement("div");
  // const img = document.createComment("img");
  // console.log(courseImg, img);
  // img.innerHTML = `${courseImg}`;

  div.innerHTML = ` <img class="h-[50px] rounded-lg mt-3 w-[70px]" src="${courseImg}"/> <div> ${courseName} - ${courseFee} <i id="remove1"  title="Remove" class="fa-solid  fa-trash text-red-600 ml-4"></i>
  </div>
    `;
  cart.appendChild(div);

  // decrease seat
  const seatsString = document.getElementById("seats1").innerText;
  let seatsInt = parseInt(seatsString);
  totalSeats1 = totalSeats1 - 1;
  document.getElementById("seats1").innerText = totalSeats1;
  // console.log(seatsString);

  // fee calculation
  const price = parseFloat(courseFee);
  totalFee1 = totalFee1 + price;
  // console.log(total);
  // cart.appendChild(img);
  document.getElementById("total-fee").innerText = totalFee1;
  const count = cart.childElementCount - 2;
  // console.log(count);
  const items = (document.getElementById("items").innerText = count);
  const removeItem = document
    .getElementById("remove1")
    .addEventListener("click", handleRemove);
  function handleRemove() {
    div.innerHTML = "";
    cart.appendChild(div);
    const items = (document.getElementById("items").innerText = "");
    document.getElementById("total-fee").innerText = 0;
    document.getElementById("seats1").innerText = totalSeats1 + count;
    // window.location.reload();
    // console.log("removeIt");
  }
}
