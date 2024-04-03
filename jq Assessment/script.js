function mainn() {
    let a = document.getElementById("one").value;
    let b = document.getElementById("two").value;
    let c = document.getElementById("four").value;
    let d = document.getElementById("five").value;
    let f = document.getElementById("dateof").value;
    let g = document.getElementById("address").value;
    let h = document.getElementById("six").value;
    let i = document.getElementById("seven").value;
    let j = document.getElementById("ait").value;
    let k = document.getElementById("select").value;
    let l = document.getElementById("nine").value;

    let m = document.getElementById("male").checked;
    let n = document.getElementById("Female").checked;

    let add = true;

    if (!a.trim()) {
      alert("Please enter your first name.")(a);
      add = false;
    }
    if (!b.trim()) {
      alert("Please enter your last name.");

      add = false;
    }
    if (!c.trim()) {
      alert("Please enter your number.");

      add = false;
    }

    if (!d.trim()) {
      alert("Please enter your email.");

      add = false;
    }
    if (!m && !n) {
      alert("Please select your Gender.");
      add = false;
    }

    if (!f.trim()) {
      alert("Please enter your Date of birth.");

      add = false;
    }
    if (!g.trim()) {
      alert("Please enter your Address.");

      add = false;
    }
    if (!h.trim()) {
      alert("Please enter your city name.");

      add = false;
    }
    if (!i.trim()) {
      alert("Please enter your Area PIN.");

      add = false;
    }
    if (!j.trim()) {
      alert("Please enter your state name.");

      add = false;
    }
    if (k === 0) {
      alert("Please select at least one qualification.");
      add = false;
    }
    if (!l.trim()) {
      alert("Please enter your password.");

      add = false;
    }

    return add;
  }