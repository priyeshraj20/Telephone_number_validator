//global declarations

const input = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("results-div");

  // US phone number regex
  const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-])?\d{3}([\s\-])?\d{4}$/;


//functions

const clearFunc = () => 
{
  result.innerText = "";
}


clearBtn.addEventListener("click",clearFunc);
checkBtn.addEventListener("click",() =>
{
  const value = input.value.trim();
  console.log("Hello")
    if (value === "") {
      alert("Please provide a phone number");
      return;
    }

    if (phoneRegex.test(value)) {
      result.textContent = `Valid US number: ${value}`;
    } else {
      result.textContent = `Invalid US number: ${value}`;
    }
});
