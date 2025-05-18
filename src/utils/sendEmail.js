// utils/sendEmail.js
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_8lwkesl';
const TEMPLATE_ID = 'template_j9mlg6o';
const PUBLIC_KEY = 'hBYGoiG303V8YgIt7';

export const sendEmail = async (formRef) => {
  try {
    const result = await emailjs.sendForm(
      SERVICE_ID,
      TEMPLATE_ID,
      formRef.current,
      PUBLIC_KEY
    );
    return { success: true, message: result.text };
  } catch (error) {
    return { success: false, message: error.text };
  }
};
