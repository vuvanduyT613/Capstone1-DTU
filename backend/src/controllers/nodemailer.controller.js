const catchAsync = require("../utils/catchAsync");
const randomNumber = require("random");
const { emailService } = require("../services");

const sendMail = catchAsync(async (req, res) => {
	const { email } = req.body;
	const code = randomNumber.int((min = 1000), (max = 9999));
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
		code: code,
	});
});

const sendGmailAdmin = catchAsync(async (email, name) => {
	await emailService.sendEmail(
		email,
		`Notification Appointment`,
		`
  <h4> You have a new appoinment to day by ${name}</h4>
  Please reply as soon as possible !.
  `
	);
});

const sendEmailAppointment = catchAsync(async (req, res, next) => {
	const { email, time, price, phone, address, transaction, username, doctor, emailDoctor } = req.body;
	const now = new Date();
	const pay = price.toLocaleString("it-IT", { style: "currency", currency: "VND" });
	sendGmailAdmin(emailDoctor, username);
	const { response } = await emailService.sendEmail(
		email,
		`Medical Schedule`,
		`
		<html>
<body style="background-color:#fff;font-family: Open Sans, sans-serif;font-size:100%;font-weight:400;line-height:1.4;color:#000;">
  <table style="max-width:670px;margin:50px auto 10px;background-color:#fff;padding:50px;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);-moz-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24); border-top: solid 10px #00358e;">
    <thead>
      <tr>
        <th style="text-align:left;"><img style="max-width: 150px;" src="https://media1.thehungryjpeg.com/thumbs2/ori_3801316_t0f9jm1yf92t6jbxy119hdkpsh5pt0f3niy08iho_monogram-ms-logo-design.jpg" alt="Medical Schedule"></th>
        <th style="text-align:right;font-weight:400;">${now}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="height:35px;"></td>
      </tr>
      <tr>
        <td colspan="2" style="border: solid 1px #ddd; padding:10px 20px;">
          <p style="font-size:14px;margin:0 0 6px 0;"><span style="font-weight:bold;display:inline-block;min-width:150px">Appoinment status</span><b style="color:green;font-weight:normal;margin:0">Success</b></p>
          <p style="font-size:14px;margin:0 0 6px 0;"><span style="font-weight:bold;display:inline-block;min-width:146px">Transaction ID</span>${transaction}</p>
		      <p style="font-size:14px;margin:0 0 6px 0;"><span style="font-weight:bold;display:inline-block;min-width:146px">VAT</span>${pay}</p>
		      <p style="font-size:14px;margin:0 0 6px 0;"><span style="font-weight:bold;display:inline-block;min-width:146px">Date Appointment</span>${
					time ? time : date.now()
				}</p>  
        <p style="font-size:14px;margin:0 0 6px 0;"><span style="font-weight:bold;display:inline-block;min-width:146px">Address Appointment</span>${address}</p>  
          <p style="font-size:14px;margin:0 0 6px 0;"><span style="font-weight:bold;display:inline-block;min-width:146px">Doctor</span>${
				doctor ? doctor : "Mr.Vu van Duy"
			}</p>
      </td>
      </tr>
      <tr>
        <td style="height:35px;"></td>
      </tr>
      <tr>
        <td style="width:50%;padding:20px;vertical-align:top">
          <p style="margin:0 0 10px 0;padding:0;font-size:14px;"><span style="display:block;font-weight:bold;font-size:13px">Name</span> ${username}</p>
          <p style="margin:0 0 10px 0;padding:0;font-size:14px;"><span style="display:block;font-weight:bold;font-size:13px;">Email</span> ${email} </p>
          <p style="margin:0 0 10px 0;padding:0;font-size:14px;"><span style="display:block;font-weight:bold;font-size:13px;">Phone</span> +84-${phone}</p>
        </td>
       
      </tr>
      
    </tbody>
    
  </table>
</body>

</html>
		`
	);
	if (response) {
		next();
	}
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
	sendEmailAppointment,
};
