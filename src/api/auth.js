export const setAuthToken = (user) => {
  const currentUser = {
    email: user.email,
  };
  console.log(currentUser);
  // get jwt token
  fetch("https://server-nafisamou.vercel.app/jwt", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      // local storage is easiest but not the best place to jwt store token  ssssssssssss.
      localStorage.setItem("kitchen-token", data.token);
    });
};
