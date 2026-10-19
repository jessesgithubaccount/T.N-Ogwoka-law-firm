import ContactForm from '@/components/ContactForm';

export const metadata = {"title":"Contact Us | T.N.Ogwoka & Osili Advocates","description":"Get in touch with T.N.Ogwoka & Osili Advocates in Nairobi, Kenya."};

export default function Contact() {
  return (
    <>
<div className="abhero" id="contact"><div className="in"><h2>Contact Us</h2>{" "}<p>We’re here to answer your questions, discuss your matter, and help you find the right legal solution.</p></div></div>{" "}<section className="sec" id="contact-body"><div className="in"><div className="ct-grid"><ContactForm />{" "}<div className="ct-side"><div className="ct-card"><h2>Prefer a Direct Approach?</h2>{" "}<ul className="ct-list"><li><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" /></svg><span><a href="tel:+254710747388">+254 710 747 388</a>{" "}/{" "}<a href="tel:+254728338735">+254 728 338 735</a></span></li>{" "}<li><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></svg><a href="mailto:legal@ogwokaandosili.com">legal@ogwokaandosili.com</a></li></ul>{" "}<div className="ct-office"><h3>Visit Our Office</h3>{" "}<p><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg><span>Hurlingham Plaza, 2nd Floor, Room C5, P.O. Box 17218-00100, Nairobi, Kenya</span></p>{" "}<a className="ct-dir" href={"https://www.google.com/maps/dir/?api=1&destination=Hurlingham%20Plaza%2C%20Nairobi%2C%20Kenya"} target="_blank" rel="noopener">Get a Direction →</a></div></div>{" "}<div className="ct-map"><iframe title="Map showing our office location in Nairobi" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen src={"https://www.google.com/maps?q=Hurlingham%20Plaza%2C%20Nairobi%2C%20Kenya&z=17&output=embed"} /></div></div></div></div></section>
    </>
  );
}
