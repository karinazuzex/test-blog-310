// Mailing request has been sent successfully
export const REQUEST_SUCCESSFULLY_SENT = "Your request has been sent successfully.";

// Successfull subscription
export const SUBSCRIPTION_SUCCESS = "You have been successfully subscribed.";

/**
 * @param {string} name user name
 * @param {string} email user email
 */
export function requestSuccessfullySent(name, email) {
  return `Thanks ${name} for your interest in Memurai. We will contact you soon at ${email}`;
}
