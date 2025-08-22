import { siteConfig } from "@/lib/config";
import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                This Privacy Policy explains how {siteConfig.name} ("we," "our," or "us") handles your information. 
                We are committed to protecting your privacy and being transparent about our data practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Data Collection</h2>
              <p className="text-muted-foreground leading-relaxed">
                <strong>{siteConfig.name} does not collect, store, or process any personal data from users.</strong> 
                Our app is designed with privacy in mind and operates entirely on your device without sending any 
                information to external servers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">What We Don't Collect</h2>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2">
                <li>Personal information (name, email, phone number, etc.)</li>
                <li>Location data</li>
                <li>Device information</li>
                <li>Usage analytics or tracking data</li>
                <li>Any data that could identify you personally</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">How the App Works</h2>
              <p className="text-muted-foreground leading-relaxed">
                {siteConfig.name} fetches public transportation data from Stockholm's public transit system (SL) 
                through their open API. This data is publicly available and does not contain any personal information. 
                All data processing happens locally on your device.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our app may use third-party services for:
              </p>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed mt-4 space-y-2">
                <li><strong>App Distribution:</strong> Apple App Store for iOS distribution</li>
                <li><strong>Public Data:</strong> SL's public API for transit information</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                These services have their own privacy policies, and we encourage you to review them. 
                We do not share any user data with these services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Your Rights (EU GDPR)</h2>
              <p className="text-muted-foreground leading-relaxed">
                Under the General Data Protection Regulation (GDPR), you have the following rights:
              </p>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed mt-4 space-y-2">
                <li><strong>Right to be informed:</strong> You have the right to know how your data is processed (which, in our case, is not at all)</li>
                <li><strong>Right of access:</strong> You can request information about any data we hold about you</li>
                <li><strong>Right to rectification:</strong> You can request correction of any inaccurate data</li>
                <li><strong>Right to erasure:</strong> You can request deletion of any data we hold about you</li>
                <li><strong>Right to restrict processing:</strong> You can request limitation of data processing</li>
                <li><strong>Right to data portability:</strong> You can request your data in a portable format</li>
                <li><strong>Right to object:</strong> You can object to data processing</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Since we don't collect any personal data, these rights are largely not applicable, 
                but we're happy to confirm this in writing if requested.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify users of any material changes 
                by updating the "Last updated" date at the top of this policy. We encourage you to review this 
                policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Legal Basis</h2>
              <p className="text-muted-foreground leading-relaxed">
                Since we don't process any personal data, there is no legal basis required under GDPR. 
                However, we maintain this privacy policy to be transparent about our practices and to comply 
                with best practices for mobile applications.
              </p>
            </section>

            <div className="border-t border-border/40 pt-8 mt-12">
              <p className="text-sm text-muted-foreground">
                Last updated: {new Date().toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
