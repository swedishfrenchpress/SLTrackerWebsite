import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By downloading and using SL Tracker, you agree to be bound by these Terms of Service. 
                If you do not agree to these terms, please do not use the application.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
              <p className="text-muted-foreground leading-relaxed">
                SL Tracker is a mobile application that provides real-time train departure information 
                for the Stockholm Tunnelbana. The app connects to the official SL Transport API to 
                display live departure times and station information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Use of the Service</h2>
              <p className="text-muted-foreground leading-relaxed">
                You may use SL Tracker for personal, non-commercial purposes. You agree not to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed mt-4 space-y-2">
                <li>Use the app for any illegal or unauthorized purpose</li>
                <li>Interfere with or disrupt the service</li>
                <li>Use the app to transmit harmful or malicious code</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Data and Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                SL Tracker respects your privacy. The app does not collect personal information or 
                track your location. Station preferences are stored locally on your device. 
                For more information, please see our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Disclaimer of Warranties</h2>
              <p className="text-muted-foreground leading-relaxed">
                SL Tracker is provided &quot;as is&quot; without any warranties. We do not guarantee that 
                the app will be error-free or that the departure information will always be accurate. 
                Train schedules are subject to change and delays.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                In no event shall the developers of SL Tracker be liable for any damages arising 
                from the use of the application, including but not limited to missed trains, 
                delays, or any other inconvenience.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these terms at any time. Continued use of the app 
                after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at 
                <a href="mailto:ghostsock@proton.me" className="text-primary hover:underline ml-1">
                  ghostsock@proton.me
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Open Source License</h2>
              <p className="text-muted-foreground leading-relaxed">
                SL Tracker is released under the MIT License, which means you are free to use, 
                modify, and distribute the source code. Long live free software!
              </p>
            </section>

            <div className="border-t border-border/40 pt-8 mt-12">
              <p className="text-sm text-muted-foreground">
                Last updated: August 2025
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
