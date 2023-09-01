import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      message: "Please enter the website address to create a QR code : ",
      name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;
    let qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_image.png"));
  })
  .catch((error) => {
    if (error.isTypeError) {
      console.log("There's an error. please try again.", error);
    } else {
    }
  });
