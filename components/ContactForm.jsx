'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body =
      'Name: ' + f.get('name') +
      '\nEmail: ' + f.get('email') +
      '\nCompany: ' + f.get('company') +
      '\n\n' + f.get('message');
    window.location.href =
      'mailto:legal@ogwokaandosili.com?subject=' +
      encodeURIComponent(f.get('subject')) +
      '&body=' + encodeURIComponent(body);
    setSent(true);
  }

  return (
    <form className="ct-form" onSubmit={onSubmit}>
      <h2>Let’s Talk About Your Matter</h2>
      <label>
        Name
        <input type="text" name="name" placeholder="Your full name" required />
      </label>
      <label>
        Email Address
        <input type="email" name="email" placeholder="We’ll get back to you here" required />
      </label>
      <label>
        Company Name
        <input type="text" name="company" placeholder="Let us know who you represent" />
      </label>
      <label>
        Subject
        <input type="text" name="subject" placeholder="What’s this about?" required />
      </label>
      <label>
        Message
        <textarea name="message" placeholder="Tell us how we can help" required />
      </label>
      <button type="submit">Send Message</button>
      {sent && (
        <p style={{ margin: 0, color: 'var(--navy)', fontWeight: 500 }} role="status">
          Thank you. Your email app should open with your message ready to send.
        </p>
      )}
    </form>
  );
}
