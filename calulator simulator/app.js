const nums = document.querySelectorAll(".num");
const solwin = document.querySelector(".input");
const solution = document.querySelector(".soln");
console.log(nums);
const numarray = [nums[16], nums[12], nums[13], nums[14], nums[8], nums[9], nums[10], nums[4], nums[5], nums[6]];
const add = nums[15],sub = nums[11], mult = nums[7],div = nums[3], deci = nums[17], del = nums[18], ans = nums[19], per = nums[2], brkt = nums[1], AC =nums[0];

function calculate(expr) {
  const validPattern = /^[0-9+\-*/%.() ]+$/;

  if (!validPattern.test(expr)) {
    return "INVALID INPUT";
  }

  try {
    const result = eval(expr);
    if (!isFinite(result)) {
      return "INVALID INPUT";
    }

    return result.toString();
  } catch (error) {
    return "INVALID INPUT";
  }
}

nums.forEach(btn => {
  btn.addEventListener("click", (e) => {
    if(solwin.innerText == "ENTER"){
        solwin.innerText = "";
        solution.innerText = "";
    }
    if(btn == del){
        solwin.innerText = solwin.innerText.slice(0,-1);
    } else if(btn == AC){
        solwin.innerText = "";
        solution.innerText = "";
    } else if(btn == ans){
        let soln = calculate(solwin.innerText);
        solution.innerText = soln;
    } else if(btn == brkt){
        solwin.innerText += e.target.innerText;
    } else {
        solwin.innerText += btn.innerText;
    }
  });
});