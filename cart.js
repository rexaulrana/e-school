let totalFee = 0;
function courseInfo(data) {
  const courseImg = data.parentNode.childNodes[1].src;
  const courseName = data.parentNode.childNodes[3].innerText;
  const courseFee = data.parentNode.childNodes[5].innerText;
  //   console.log("c", courseName);

  const cart = document.getElementById("cart");
  // const img = (document.getElementById("course-img").src = `${courseImg}`);
  document.getElementById("course-img").classList = "hidden";
  const div = document.createElement("div");
  // const img = document.createComment("img");
  // console.log(courseImg, img);
  // img.innerHTML = `${courseImg}`;
  div.innerHTML = ` <img class="h-[50px] rounded-lg mt-3 w-[70px]" src="${courseImg}"/> ${courseName} - ${courseFee} <i onclick="handleRemove" title="Remove" class="fa-solid fa-trash text-red-600 ml-4"></i> `;
  cart.appendChild(div);

  // fee
  const price = parseFloat(courseFee);
  totalFee = totalFee + price;
  // console.log(total);
  // cart.appendChild(img);
  document.getElementById("total-fee").innerText = totalFee;
  const count = cart.childElementCount - 2;
  console.log(count);
  const items = (document.getElementById("items").innerText = count);
}
