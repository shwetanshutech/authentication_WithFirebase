//signup
const signupForm = document.querySelector("#signup-form");
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  //get user Info
  const email = signupForm["signup-email"].value;
  const password = signupForm["signup-password"].value;

  //sign up user
  auth.createUserWithEmailAndPassword(email, password).then((cred) => {
    console.log(cred.user);
    const modal = document.querySelector("#modal-signup");
    M.Modal.getInstance(modal).close();
    signupForm.reset();
  });
});
