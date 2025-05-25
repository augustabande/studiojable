import Layouts from "@/src/layouts/Layouts";
import PageBanner from "@/src/components/PageBanner";

const PrivacyPolicy = () => {
  return (
    <Layouts>
      <PageBanner pageImage={"img/content/5.jpg"} pageTitle={"Privacy Policy"} />

      <div className="container mil-content-frame mil-appearance mil-p-120-90">
        <style>
          {`
            .privacy-policy-h1 {
              font-size: 36px;
              margin-bottom: 20px;
            }
            .privacy-policy-h1 span {
              display: block;
              font-size: 16px;
              font-weight: normal;
              color: #777;
              margin-top: 5px;
            }
            .privacy-policy-p {
              margin-bottom: 16px;
              line-height: 1.7;
            }
            .privacy-policy-ol {
              padding-left: 20px;
              margin-bottom: 30px;
            }
            .privacy-policy-h2 {
              font-size: 20px;
              margin-top: 30px;
              margin-bottom: 15px;
            }
          `}
        </style>

        <h1 className="privacy-policy-h1">
          Privacy Policy
          <span>Last Updated On 25-May-2025</span>
          <span>Effective Date 25-May-2025</span>
        </h1>

        <p className="privacy-policy-p">
          This Privacy Policy describes the policies of Augusta Bande, Calle Roseta de Emeterio, 3,
          Las Palmas, 35650, Spain, email: augusta.bande@gmail.com, phone: 643535881 on the
          collection, use and disclosure of your information that we collect when you use our
          website ( https://www.studiojable.com ). By accessing or using the Service, you are
          consenting to the collection, use and disclosure of your information in accordance with
          this Privacy Policy. If you do not consent to the same, please do not access or use the
          Service.
        </p>

        <p className="privacy-policy-p">
          We may modify this Privacy Policy at any time without any prior notice to you and will
          post the revised Privacy Policy on the Service. The revised Policy will be effective 180
          days from when it is posted, and your continued use of the Service after such time will
          constitute your acceptance of the revised Privacy Policy. We therefore recommend that you
          periodically review this page.
        </p>

        <ol className="privacy-policy-ol">
          <li>
            <h2 className="privacy-policy-h2">Information We Collect:</h2>
            <p className="privacy-policy-p">
              We will collect and process the following personal information about you:
            </p>
            <ol className="privacy-policy-ol">
              <li>Name</li>
              <li>Email</li>
            </ol>
          </li>

          <li>
            <h2 className="privacy-policy-h2">How We Use Your Information:</h2>
            <p className="privacy-policy-p">We use your information for the following purposes:</p>
            <ol className="privacy-policy-ol">
              <li>Processing payment</li>
              <li>Support</li>
              <li>Manage customer order</li>
            </ol>
            <p className="privacy-policy-p">
              If we want to use your information for any other purpose, we will ask for consent
              first and only use it for the specified purpose unless required by law.
            </p>
          </li>

          <li>
            <h2 className="privacy-policy-h2">How We Share Your Information:</h2>
            <p className="privacy-policy-p">
              We will not transfer your personal information to any third party without your
              consent, except in the following cases:
            </p>
            <ol className="privacy-policy-ol">
              <li>Data collection & processing</li>
            </ol>
            <p className="privacy-policy-p">
              We require such third parties to use the personal information only for the purposes
              it was provided and not retain it longer than necessary.
            </p>
            <p className="privacy-policy-p">
              We may also disclose your information to comply with legal obligations or to respond
              to claims, and in the event of a business acquisition or merger.
            </p>
          </li>

          <li>
            <h2 className="privacy-policy-h2">Retention Of Your Information:</h2>
            <p className="privacy-policy-p">
              We will retain your personal information for 90 days to 2 years after user account
              termination or as long as needed. Some data may be retained longer for legal or fraud
              prevention purposes.
            </p>
          </li>

          <li>
            <h2 className="privacy-policy-h2">Your Rights:</h2>
            <p className="privacy-policy-p">
              Depending on applicable laws, you may have rights to access, modify, delete, or
              transfer your personal data, withdraw consent, or lodge a complaint. Contact us at
              augusta.bande@gmail.com.
            </p>
            <p className="privacy-policy-p">
              Please note that withdrawing consent may limit your ability to use certain services.
            </p>
          </li>

          <li>
            <h2 className="privacy-policy-h2">Cookies Etc.</h2>
            <p className="privacy-policy-p">
              To learn more about cookies and your choices, please refer to our{" "}
              <a href="/cookie-policy">Cookie Policy</a>.
            </p>
          </li>

          <li>
            <h2 className="privacy-policy-h2">Security:</h2>
            <p className="privacy-policy-p">
              We use reasonable security measures to protect your data. However, no system is
              perfectly secure, so we cannot guarantee absolute protection.
            </p>
          </li>

          <li>
            <h2 className="privacy-policy-h2">Third Party Links & Use Of Your Information:</h2>
            <p className="privacy-policy-p">
              Our website may contain links to third-party websites. We are not responsible for
              their content or privacy policies. Please review them independently.
            </p>
          </li>

          <li>
            <h2 className="privacy-policy-h2">Grievance / Data Protection Officer:</h2>
            <p className="privacy-policy-p">
              For any concerns or questions, you can contact Augusta Bande at Calle Roseta de
              Emeterio, 3 or via email: augusta.bande@gmail.com.
            </p>
          </li>
        </ol>

        <p className="privacy-policy-p">
          Privacy Policy generated with{" "}
          <a
            target="_blank"
            href="https://www.cookieyes.com/?utm_source=PP&utm_medium=footer&utm_campaign=UW"
          >
            CookieYes
          </a>
          .
        </p>
      </div>
    </Layouts>
  );
};

export default PrivacyPolicy;
