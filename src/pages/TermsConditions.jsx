import { useEffect } from "react";

function TermsAndConditions() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="bg-black min-h-screen text-white px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-yellow-400 mb-10">
          Terms & Conditions
        </h1>

        <div className="space-y-8 text-gray-300 leading-8">
          <p>
            Welcome to Enlightened Bharat Gurukul. By accessing and using our
            website, you agree to comply with and be bound by the following
            terms and conditions.
          </p>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Website Usage
            </h2>

            <p>
              The content provided on this website is for informational and
              educational purposes only. Users must use the website lawfully
              and responsibly.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Intellectual Property
            </h2>

            <p>
              All content, logos, images, text, and materials available on this
              website are the property of Enlightened Bharat Gurukul and may
              not be copied, reproduced, or distributed without permission.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Limitation of Liability
            </h2>

            <p>
              We strive to keep the information accurate and updated, but we do
              not guarantee the completeness, reliability, or accuracy of any
              content on this website.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Changes to Terms
            </h2>

            <p>
              Enlightened Bharat Gurukul reserves the right to modify these
              terms and conditions at any time without prior notice.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Contact Us
            </h2>

            <p>
              If you have any questions regarding these Terms & Conditions,
              please contact us at info@enlightenedbharat.com.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsAndConditions;