const axios = require("axios");

/**
 * @typedef EmailData
 * @property {string} from - The sender's name.
 * @property {{ Email: string; Name: string }[]} to - The recipients' data.
 * @property {string} subject - The email's subject.
 * @property {string} content - The email's content.
 */

/**
 * Sends an email using the Mailjet API.
 * @param {EmailData} emailData - The email data.
 * @returns {Promise<boolean>} - Whether the email was sent successfully.
 */
async function sendEmail(emailData) {
	const data = JSON.stringify({
		Messages: [
			{
				From: {
					Email: process.env.MAILJET_FROM_EMAIL,
					Name: emailData.from,
				},
				To: emailData.to,
				Subject: emailData.subject,
				HTMLPart: emailData.content,
			},
		],
	});

	try {
		await axios({
			method: "post",
			url: "https://api.mailjet.com/v3.1/send",
			headers: { "Content-Type": "application/json" },
			auth: {
				username: process.env.MAILJET_PUBLIC_KEY,
				password: process.env.MAILJET_PRIVATE_KEY,
			},
			data: data,
		});

		return true;
	} catch (error) {
		return false;
	}
}

module.exports = sendEmail;
