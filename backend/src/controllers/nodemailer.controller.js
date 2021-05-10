const catchAsync = require('../utils/catchAsync');
const randomNumber = require('random');
const { emailService } = require('../services');

const sendMail = catchAsync(async (req, res) => {
  const { email } = req.body;
  const code = randomNumber.int((min = 1000), (max = 9999))
  const { response } = await emailService.sendEmail(
    email,
    `Medical Schedule`,
    `<p style="padding: 0; font-size: 17px;color: #707070">Medical Schedule account<p>
    <div>
      <p>Please use the following security code for the Medical Schedule account ${email}.</p>
      <h5>Security code: ${code}</h5></p>
      <p>
          If you don't recognize the  Medical Schedule account ${email}, you can click here to remove your email address from that account.
      </p>
      <hr />
      <p>Thanks,</p>
      <P>The Medical Schedule account team<P>
    </div>`
  );
  res.send({
    status: response,
    code: randomCode,
  });
});

const sendResetPassword = catchAsync(async (req, res) => {
  const { email, token } = req.body;
  const { response } = await emailService.sendResetPasswordEmail(email, token);
  res.send({ status: response });
});

const sendVerificationEmail = catchAsync(async (req, res) => {
  const { email, token } = req.body;
  const { response } = await emailService.sendVerificationEmail(email, token);
  res.send({ status: response });
});

module.exports = {
  sendMail,
  sendResetPassword,
  sendVerificationEmail,
};
