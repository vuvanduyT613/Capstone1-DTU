const catchAsync = require('../utils/catchAsync');
const nodemailer = require('nodemailer');
const randomNumber = require('random');

const sendMail = catchAsync(async (req, res) => {
  const { email } = req.body;
  const randomCode = randomNumber.int((min = 1000), (max = 9999));
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    tls: {
      rejectUnauthorized: false,
    },
    auth: {
      user: 'cs01052021@gmail.com',
      pass: 'Capstone123456',
    },
  });

  const content = `
  <p style="padding: 0;
  font-size: 17px;
  color: #707070">
    Medical Schedule account
  <p>
  <div>
    <p>Please use the following security code for the Medical Schedule account ${email}.</p>
    <h5>Security code: ${randomCode}</h5></p>
    <p>
        If you don't recognize the  Medical Schedule account ${email}, you can click here to remove your email address from that account.
    </p>
    <hr />
    <p>Thanks,</p>
    <P>The Medical Schedule account team<P>
  </div>
`;
  const mainOptions = {
    from: 'cs01052021@gmail.com',
    to: email,
    subject: 'Medical Schedule',
    text: 'Your text is here',
    html: content,
  };
  transporter.sendMail(mainOptions, function (err, info) {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      console.log('Message sent: ' + info.response);
      res.send({ status: 'Message sent', code: randomCode });
    }
  });
});

module.exports = {
  sendMail,
};
