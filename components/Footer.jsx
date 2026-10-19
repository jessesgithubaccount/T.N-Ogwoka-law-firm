import Link from 'next/link';

export default function Footer() {
  return (
    <>
<footer><div className="ft"><div><img src="/images/img-20a4fb11cb.png" alt={"T.N.Ogwoka & Osili Advocates"} /><p>Trusted legal guidance built on integrity and high-precision law.</p></div>{" "}<div className="fcols"><div><h4>Explore</h4><Link href="/">Home</Link><Link href="/about">About Us</Link><Link href="/team">Our Team</Link><Link href="/practice-areas">Practice Areas</Link><Link href="/contact">Contact Us</Link><Link href="/#faq">FAQ</Link></div>{" "}<div><h4>Contact</h4><a href="tel:+254710747388">+254 710 747 388</a><a href="tel:+254728338735">+254 728 338 735</a><a href="mailto:legal@ogwokaandosili.com">legal@ogwokaandosili.com</a><span className="fadr">Hurlingham Plaza, 2nd Floor, Room C5<br />P.O. Box 17218-00100<br />Nairobi, Kenya</span></div>{" "}<div><h4>Legal Documents</h4><Link href="/privacy-policy">Privacy Policy</Link><Link href="/terms-of-service">Terms of Service</Link></div></div></div>{" "}<div className="fb"><span>©{" "}{new Date().getFullYear()}{" "}T.N.Ogwoka &amp; Osili Advocates. All rights reserved.</span></div></footer>
    </>
  );
}
