
function FooterForm() {
  return (
    <>
      <div className="text-md text-center md:text-left md:text-2xl/[1.3] font-bold md:col-span-3">
        <ul>
          <li>Get an additional 15% off your first order +</li>
          <li>the craziest deals, straight to your inbox.</li>
        </ul>
      </div>
      <div className="md:col-span-2 my-auto">
        <form action="/contact#contact_form" className="grid grid-cols-2 p-2 bg-white" id="contact_form" method="post">
          <input type="hidden" name="form_type" value="customer" />
          <input type="hidden" name="utf8" value="✓" />
          <input type="hidden" name="contact[tags]" value="newsletter" />
          <input className="text-black h-8 px-2 leading-8 appearance-none" type="email"
                  pattern=".+@.+\.(.+\.?)+"
                  name="contact[email]"
                  id="form-newsletter-email-sections--16857002213535__promo_strip_Mtn9DA"
                  placeholder="Your email"
                  autoCorrect="off"
                  autoCapitalize="off"
                  autoComplete="email"
                  required />
          <button className="bg-brand-red w-full leading-8 h-8 font-bold" type="submit">Sign up for emails</button>
        </form>
        <div className="hidden form-status newsletter-form-success text-center pt-2" tabIndex={-1} autoFocus>
                  <h5 className="text-xl font-bold newsletter-form-success-title form-status-title">Thanks for subscribing</h5>
                </div>
      </div>
    </>
  );
}

export default FooterForm;
