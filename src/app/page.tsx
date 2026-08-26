"use client";

import { ToggleTheme } from "@/components/lightswind/toggle-theme";
import { Input } from "@/components/lightswind/input";
import WavyRippleBackground from "@/components/lightswind/wavy-ripple-background";
import { TypingText } from "@/components/lightswind/typing-text";
import { Textarea } from "@/components/lightswind/textarea";
import { ShineButton } from "@/components/lightswind/shine-button";
import SmokeyCursor from "@/components/lightswind/smokey-cursor";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground flex flex-col font-sans antialiased overflow-hidden">
      {/* Absolute positioning for the background to cover the whole page */}
      <div className="fixed inset-0 z-0 opacity-50">
        <WavyRippleBackground />
      </div>
      <SmokeyCursor />
      
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
                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                        <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-500 text-sm font-medium">
                            <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2 animate-pulse"></span>
                            ETL Automation
                        </div>
                        <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-500 text-sm font-medium">
                            Python Data Pipelines
                        </div>
                        <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-500 text-sm font-medium">
                            Metabase Analytics
                        </div>
                        <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-500 text-sm font-medium">
                            Streamlit Dashboards
                        </div>
                        <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-500 text-sm font-medium">
                            n8n Workflows
                        </div>
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
                    
                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a href="#contact">
                            <ShineButton label="Request Free Proof of Concept" size="lg" />
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
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    <div className="bg-card/50 backdrop-blur-md border border-border p-8 rounded-2xl shadow-lg flex flex-col h-full relative">
                        <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-lg">1</div>
                        <h3 className="text-xl font-bold mb-4">Data Extraction</h3>
                        <p className="text-sm md:text-base text-muted-foreground flex-grow mb-6">Connecting securely to APIs, MySQL databases, and cloud platforms.</p>
                        <div className="border-t border-border pt-4 mt-auto">
                            <p className="text-xs font-semibold mb-2 uppercase tracking-wider text-muted-foreground">Tools & Technologies</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-2 py-1 text-xs font-medium bg-muted border border-border rounded-md text-blue-500">SQL</span>
                                <span className="px-2 py-1 text-xs font-medium bg-muted border border-border rounded-md text-blue-500">REST APIs</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-card/50 backdrop-blur-md border border-border p-8 rounded-2xl shadow-lg flex flex-col h-full relative">
                        <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-indigo-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-lg">2</div>
                        <h3 className="text-xl font-bold mb-4">Automated Transformation</h3>
                        <p className="text-sm md:text-base text-muted-foreground flex-grow mb-6">Independent scripting and algorithmic cleaning of raw data into structured models.</p>
                        <div className="border-t border-border pt-4 mt-auto">
                            <p className="text-xs font-semibold mb-2 uppercase tracking-wider text-muted-foreground">Tools & Technologies</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-2 py-1 text-xs font-medium bg-muted border border-border rounded-md text-indigo-400">Python</span>
                                <span className="px-2 py-1 text-xs font-medium bg-muted border border-border rounded-md text-indigo-400">Pandas</span>
                                <span className="px-2 py-1 text-xs font-medium bg-muted border border-border rounded-md text-indigo-400">n8n</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-card/50 backdrop-blur-md border border-border p-8 rounded-2xl shadow-lg flex flex-col h-full relative">
                        <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-lg">3</div>
                        <h3 className="text-xl font-bold mb-4">Live Visualization</h3>
                        <p className="text-sm md:text-base text-muted-foreground flex-grow mb-6">Deploying automated reporting architectures for operational and financial metrics.</p>
                        <div className="border-t border-border pt-4 mt-auto">
                            <p className="text-xs font-semibold mb-2 uppercase tracking-wider text-muted-foreground">Tools & Technologies</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-2 py-1 text-xs font-medium bg-muted border border-border rounded-md text-purple-400">Metabase</span>
                                <span className="px-2 py-1 text-xs font-medium bg-muted border border-border rounded-md text-purple-400">Streamlit</span>
                                <span className="px-2 py-1 text-xs font-medium bg-muted border border-border rounded-md text-purple-400">Google Sheets integrations</span>
                            </div>
                        </div>
                    </div>
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
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    <div className="bg-card/80 backdrop-blur-sm border border-border border-l-4 border-l-blue-500 rounded-r-2xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                        <h3 className="text-xl md:text-2xl font-bold mb-4">Automated Overdue Account Extraction</h3>
                        <p className="text-base md:text-lg text-muted-foreground flex-grow mb-6">Automated daily extraction of customer account data via Metabase API queries, processed and routed into multi-sheet Excel workbooks for finance teams.</p>
                        <div className="flex flex-wrap gap-2 mt-auto">
                            <span className="px-2 py-1 text-xs font-medium bg-muted border border-border rounded-md text-blue-500">Metabase API</span>
                            <span className="px-2 py-1 text-xs font-medium bg-muted border border-border rounded-md text-blue-500">Python</span>
                            <span className="px-2 py-1 text-xs font-medium bg-muted border border-border rounded-md text-blue-500">Excel</span>
                        </div>
                    </div>
                    
                    <div className="bg-card/80 backdrop-blur-sm border border-border border-l-4 border-l-indigo-500 rounded-r-2xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                        <h3 className="text-xl md:text-2xl font-bold mb-4">Quantitative Volatility Modeling</h3>
                        <p className="text-base md:text-lg text-muted-foreground flex-grow mb-6">GJR-GARCH modeling and Sharpe Ratio optimization pipelines deployed via interactive Streamlit web applications.</p>
                        <div className="flex flex-wrap gap-2 mt-auto">
                            <span className="px-2 py-1 text-xs font-medium bg-muted border border-border rounded-md text-indigo-500">Python</span>
                            <span className="px-2 py-1 text-xs font-medium bg-muted border border-border rounded-md text-indigo-500">Pandas</span>
                            <span className="px-2 py-1 text-xs font-medium bg-muted border border-border rounded-md text-indigo-500">Streamlit</span>
                        </div>
                    </div>

                    <div className="bg-card/80 backdrop-blur-sm border border-border border-l-4 border-l-purple-500 rounded-r-2xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                        <h3 className="text-xl md:text-2xl font-bold mb-4">Automated Database Synchronization</h3>
                        <p className="text-base md:text-lg text-muted-foreground flex-grow mb-6">Real-time data replication and synchronization across disparate SQL and NoSQL databases, ensuring data integrity and zero downtime.</p>
                        <div className="flex flex-wrap gap-2 mt-auto">
                            <span className="px-2 py-1 text-xs font-medium bg-muted border border-border rounded-md text-purple-500">SQL</span>
                            <span className="px-2 py-1 text-xs font-medium bg-muted border border-border rounded-md text-purple-500">n8n</span>
                            <span className="px-2 py-1 text-xs font-medium bg-muted border border-border rounded-md text-purple-500">REST APIs</span>
                        </div>
                    </div>
                    
                    <div className="bg-card/80 backdrop-blur-sm border border-border border-l-4 border-l-emerald-500 rounded-r-2xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                        <h3 className="text-xl md:text-2xl font-bold mb-4">Financial Web Tools</h3>
                        <p className="text-base md:text-lg text-muted-foreground flex-grow mb-6">Custom-built internal web applications for finance teams to analyze cash flow, forecast revenue, and manage operational expenditures interactively.</p>
                        <div className="flex flex-wrap gap-2 mt-auto">
                            <span className="px-2 py-1 text-xs font-medium bg-muted border border-border rounded-md text-emerald-500">Next.js</span>
                            <span className="px-2 py-1 text-xs font-medium bg-muted border border-border rounded-md text-emerald-500">React</span>
                            <span className="px-2 py-1 text-xs font-medium bg-muted border border-border rounded-md text-emerald-500">Tailwind</span>
                        </div>
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
                    
                    <ShineButton label="Request Free Proof of Concept" className="w-full" size="lg" />
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
              <a href="mailto:getsamified@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  getsamified@gmail.com
              </a>
          </div>
      </footer>
    </div>
  );
}
