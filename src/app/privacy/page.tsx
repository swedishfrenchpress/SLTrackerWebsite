import { siteConfig } from "@/lib/config";

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-12 max-w-4xl">
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        
        <p className="text-muted-foreground mb-6">
          <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </p>

        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-3">Introduction</h2>
            <p>
              This Privacy Policy explains how {siteConfig.name} ("we," "our," or "us") handles your information. 
              We are committed to protecting your privacy and being transparent about our data practices.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Data Collection</h2>
            <p>
              <strong>{siteConfig.name} does not collect, store, or process any personal data from users.</strong> 
              Our app is designed with privacy in mind and operates entirely on your device without sending any 
              information to external servers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">What We Don't Collect</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Personal information (name, email, phone number, etc.)</li>
              <li>Location data</li>
              <li>Device information</li>
              <li>Usage analytics or tracking data</li>
              <li>Any data that could identify you personally</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">How the App Works</h2>
            <p>
              {siteConfig.name} fetches public transportation data from Stockholm's public transit system (SL) 
              through their open API. This data is publicly available and does not contain any personal information. 
              All data processing happens locally on your device.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Third-Party Services</h2>
            <p>
              Our app may use third-party services for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>App Distribution:</strong> Apple App Store for iOS distribution</li>
              <li><strong>Public Data:</strong> SL's public API for transit information</li>
            </ul>
            <p className="mt-3">
              These services have their own privacy policies, and we encourage you to review them. 
              We do not share any user data with these services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Your Rights (EU GDPR)</h2>
            <p>
              Under the General Data Protection Regulation (GDPR), you have the following rights:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Right to be informed:</strong> You have the right to know how your data is processed (which, in our case, is not at all)</li>
              <li><strong>Right of access:</strong> You can request information about any data we hold about you</li>
              <li><strong>Right to rectification:</strong> You can request correction of any inaccurate data</li>
              <li><strong>Right to erasure:</strong> You can request deletion of any data we hold about you</li>
              <li><strong>Right to restrict processing:</strong> You can request limitation of data processing</li>
              <li><strong>Right to data portability:</strong> You can request your data in a portable format</li>
              <li><strong>Right to object:</strong> You can object to data processing</li>
            </ul>
            <p className="mt-3">
              Since we don't collect any personal data, these rights are largely not applicable, 
              but we're happy to confirm this in writing if requested.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify users of any material changes 
              by updating the "Last updated" date at the top of this policy. We encourage you to review this 
              policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Legal Basis</h2>
            <p>
              Since we don't process any personal data, there is no legal basis required under GDPR. 
              However, we maintain this privacy policy to be transparent about our practices and to comply 
              with best practices for mobile applications.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
