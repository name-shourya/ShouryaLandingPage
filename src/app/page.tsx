"use client";

import { ToggleTheme } from "@/components/lightswind/toggle-theme";
import { Input } from "@/components/lightswind/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/lightswind/tabs";
import WavyRippleBackground from "@/components/lightswind/wavy-ripple-background";
import { TypingText } from "@/components/lightswind/typing-text";
import { Textarea } from "@/components/lightswind/textarea";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground flex flex-col font-sans antialiased overflow-hidden">
      {/* Absolute positioning for the background to cover the whole page */}
      <div className="fixed inset-0 z-0 opacity-50">
        <WavyRippleBackground />
      </div>
      
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-all duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-20">
                  <div className="flex-shrink-0 flex items-center">
                      <a href="#" className="text-2xl font-bold tracking-tight">
                          Data<span className="text-blue-500">.Ops</span>
                      </a>
                  </div>
                  <div className="hidden md:flex space-x-8 items-center">
                      <a href="#architecture" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Architecture</a>
                      <a href="#services" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Services</a>
                      <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Contact</a>
                      <ToggleTheme />
                  </div>
              </div>
          </div>
      </nav>

      <main className="flex-grow z-10">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 flex items-center min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
                <div className="max-w-4xl mx-auto">
                    <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-500 text-sm font-medium mb-8">
                        <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2 animate-pulse"></span>
                        Modern Data Architecture
                    </div>
                    
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
                        <TypingText className="block">Eliminate Manual Reporting.</TypingText>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">
                          Automate Your Business Intelligence.
                        </span>
                    </h1>
                    
                    <p className="mt-6 text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        I build automated ETL pipelines that extract your siloed operational data into live, interactive dashboards. Zero manual spreadsheet updates required.
                    </p>
                    
                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 rounded-lg text-white bg-blue-600 hover:bg-blue-700 shadow-lg transition-all duration-200 transform hover:-translate-y-1 font-semibold text-base">
                            Request Free Proof of Concept
                        </a>
                        <a href="#architecture" className="inline-flex items-center justify-center px-8 py-4 border border-border text-base font-semibold rounded-lg hover:bg-accent transition-all duration-200">
                            View Technical Architecture
                        </a>
                    </div>
                </div>
            </div>
        </section>

        {/* Architecture Section with Tabs */}
        <section id="architecture" className="py-24 bg-background/80 backdrop-blur-sm border-t border-border/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">End-to-End Data Pipeline Architecture</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Scalable data infrastructure designed for reliability, performance, and real-time insights.</p>
                </div>
                
                <div className="max-w-4xl mx-auto">
                  <Tabs defaultValue="extract" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 mb-8">
                      <TabsTrigger value="extract">Data Extraction</TabsTrigger>
                      <TabsTrigger value="transform">Automated Transformation</TabsTrigger>
                      <TabsTrigger value="load">Live Visualization</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="extract" className="bg-card/50 backdrop-blur-md border border-border p-8 rounded-2xl shadow-lg">
                      <h3 className="text-2xl font-bold mb-4">Data Extraction</h3>
                      <p className="text-lg text-muted-foreground mb-6">Connecting securely to APIs, MySQL databases, and cloud platforms.</p>
                      <div className="border-t border-border pt-4">
                          <p className="text-sm font-semibold mb-2">Tools & Technologies</p>
                          <div className="flex flex-wrap gap-2">
                              <span className="px-2 py-1 text-xs font-medium bg-muted border border-border rounded-md text-blue-500">SQL</span>
                              <span className="px-2 py-1 text-xs font-medium bg-muted border border-border rounded-md text-blue-500">REST APIs</span>
                          </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="transform" className="bg-card/50 backdrop-blur-md border border-border p-8 rounded-2xl shadow-lg">
                      <h3 className="text-2xl font-bold mb-4">Automated Transformation</h3>
                      <p className="text-lg text-muted-foreground mb-6">Independent scripting and algorithmic cleaning of raw data into structured models.</p>
                      <div className="border-t border-border pt-4">
                          <p className="text-sm font-semibold mb-2">Tools & Technologies</p>
                          <div className="flex flex-wrap gap-2">
                              <span className="px-2 py-1 text-xs font-medium bg-muted border border-border rounded-md text-indigo-400">Python</span>
                              <span className="px-2 py-1 text-xs font-medium bg-muted border border-border rounded-md text-indigo-400">Pandas</span>
                              <span className="px-2 py-1 text-xs font-medium bg-muted border border-border rounded-md text-indigo-400">n8n</span>
                          </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="load" className="bg-card/50 backdrop-blur-md border border-border p-8 rounded-2xl shadow-lg">
                      <h3 className="text-2xl font-bold mb-4">Live Visualization</h3>
                      <p className="text-lg text-muted-foreground mb-6">Deploying automated reporting architectures for operational and financial metrics.</p>
                      <div className="border-t border-border pt-4">
                          <p className="text-sm font-semibold mb-2">Tools & Technologies</p>
                          <div className="flex flex-wrap gap-2">
                              <span className="px-2 py-1 text-xs font-medium bg-muted border border-border rounded-md text-purple-400">Metabase</span>
                              <span className="px-2 py-1 text-xs font-medium bg-muted border border-border rounded-md text-purple-400">Streamlit</span>
                              <span className="px-2 py-1 text-xs font-medium bg-muted border border-border rounded-md text-purple-400">Google Sheets integrations</span>
                          </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
            </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-muted/10 backdrop-blur-sm border-t border-border/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Specialized Implementation</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Specific technical consulting deliverables and automated solutions tailored for your business needs.</p>
                </div>
                
                <div className="flex flex-col gap-8 max-w-5xl mx-auto">
                    <div className="bg-card/80 backdrop-blur-sm border border-border border-l-4 border-l-blue-500 rounded-r-2xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300">
                        <h3 className="text-2xl font-bold mb-4">Automated Overdue Account Extraction</h3>
                        <p className="text-lg text-muted-foreground">Automated daily extraction of customer account data via Metabase API queries, processed and routed into multi-sheet Excel workbooks for finance teams.</p>
                    </div>
                    
                    <div className="bg-card/80 backdrop-blur-sm border border-border border-l-4 border-l-indigo-500 rounded-r-2xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300">
                        <h3 className="text-2xl font-bold mb-4">Quantitative Volatility Modeling</h3>
                        <p className="text-lg text-muted-foreground">GJR-GARCH modeling and Sharpe Ratio optimization pipelines deployed via interactive Streamlit web applications.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-background/80 backdrop-blur-sm border-t border-border/50">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Claim Your Free Proof of Concept</h2>
                <p className="text-lg text-muted-foreground mb-10">Before committing to a full build, I will automate one manual data workflow for your team at zero cost.</p>
                
                <form className="bg-card/80 backdrop-blur-md border border-border rounded-2xl p-8 text-left max-w-xl mx-auto shadow-lg" onSubmit={(e) => e.preventDefault()}>
                    <div className="mb-5 space-y-2">
                        <label htmlFor="name" className="block text-sm font-medium">Name</label>
                        <Input type="text" id="name" name="name" placeholder="Your Name" required />
                    </div>
                    
                    <div className="mb-5 space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium">Work Email</label>
                        <Input type="email" id="email" name="email" placeholder="you@company.com" required />
                    </div>
                    
                    <div className="mb-5 space-y-2">
                        <label htmlFor="website" className="block text-sm font-medium">Company Website</label>
                        <Input type="url" id="website" name="website" placeholder="https://example.com" />
                    </div>
                    
                    <div className="mb-8 space-y-2">
                        <label htmlFor="task" className="block text-sm font-medium">What manual reporting task takes up the most time?</label>
                        <Textarea id="task" name="task" rows={4} placeholder="Describe your current manual process..." required />
                    </div>
                    
                    <button type="submit" className="w-full flex justify-center py-4 px-4 rounded-lg shadow-sm text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors">
                        Request Free Proof of Concept
                    </button>
                </form>
            </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted/30 backdrop-blur-sm py-12 border-t border-border z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-muted-foreground text-sm">
                  &copy; 2026 Data.Ops Consulting. All rights reserved.
              </p>
              <a href="mailto:hello@data.ops" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  hello@data.ops
              </a>
          </div>
      </footer>
    </div>
  );
}
