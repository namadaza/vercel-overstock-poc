
function FooterForm() {
  return (
    <>
      <div className="text-md text-center md:text-left md:text-2xl/[1.3] font-bold md:col-span-3">
        <ul>
          <li>Get an additional 15% off your first order +</li>
          <li>the craziest deals, straight to your inbox.</li>
        </ul>
      </div>
      <div className="flex md:col-span-2">
        <form method="post" action="/contact#contact_form" id="contact_form">
          <input type="hidden" name="form_type" value="customer" />
          <input type="hidden" name="utf8" value="✓" />
          <input type="hidden" name="contact[tags]" value="newsletter" />
          <input className="text-black" type="email"
                  pattern=".+@.+\.(.+\.?)+"
                  name="contact[email]"
                  id="form-newsletter-email-sections--16857002213535__promo_strip_Mtn9DA"
                  placeholder="Your email"
                  autoCorrect="off"
                  autoCapitalize="off"
                  autoComplete="email"
                  required />
          <button type="submit">Submit</button>
        </form>
        <div className="hidden form-status newsletter-form-success" tabIndex={-1} autoFocus>
                  <h5 className="newsletter-form-success-title form-status-title">Thanks for subscribing</h5>
                </div>
      </div>
    </>
  );
}

export default FooterForm;
