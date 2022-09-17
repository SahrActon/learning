let logged;

function sendData(data: string) {
  console.log(data);
  logged = true;
  console.log(logged);
}

sendData("can you see me");
