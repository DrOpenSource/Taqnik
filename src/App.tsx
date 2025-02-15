import React, { lazy, Suspense } from 'react';
import Header from './components/Header';
import Newsletter from './components/Newsletter';
import ProductCard from './components/ProductCard';
import BlogCard from './components/BlogCard';
import ToolCard from './components/ToolCard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfUse from './components/TermsOfUse';
import { Container, Grid } from '@mui/material';

const LetAIBuildIt = lazy(()=>import("./Let-AI-Build-It"))

const App: React.FC = () => {

  const products = [
    {
      id: 1,
      name: "Let AI Build It",
      description: "Tell us what you need. We'll tell you how AI can crush it.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800",
      price: "Free",
      website: "/",
      privacyPolicy: `Privacy Policy
This privacy policy applies to the Let AI Build It app (hereby referred to as "Application") for mobile devices that was created by YorApp Solutions Private Limited (hereby referred to as "Service Provider") as a Free service. This service is intended for use "AS IS".


What information does the Application obtain and how is it used?
The Application does not obtain any information when you download and use it. Registration is not required to use the Application.


Does the Application collect precise real time location information of the device?
This Application does not collect precise information about the location of your mobile device.


Do third parties see and/or have access to information obtained by the Application?
Since the Application does not collect any information, no data is shared with third parties.


What are my opt-out rights?
You can stop all collection of information by the Application easily by uninstalling it. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network.


Children
The Application is not used to knowingly solicit data from or market to children under the age of 13.


The Service Provider does not knowingly collect personally identifiable information from children. The Service Provider encourages all children to never submit any personally identifiable information through the Application and/or Services. The Service Provider encourage parents and legal guardians to monitor their children's Internet usage and to help enforce this Policy by instructing their children never to provide personally identifiable information through the Application and/or Services without their permission. If you have reason to believe that a child has provided personally identifiable information to the Service Provider through the Application and/or Services, please contact the Service Provider (madhusudan707@gmail.com) so that they will be able to take the necessary actions. You must also be at least 16 years of age to consent to the processing of your personally identifiable information in your country (in some countries we may allow your parent or guardian to do so on your behalf).


Security
The Service Provider is concerned about safeguarding the confidentiality of your information. However, since the Application does not collect any information, there is no risk of your data being accessed by unauthorized individuals.


Changes
This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes to their Privacy Policy by updating this page with the new Privacy Policy. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes.


This privacy policy is effective as of 2025-02-15


Your Consent
By using the Application, you are consenting to the processing of your information as set forth in this Privacy Policy now and as amended by the Service Provider.


Contact Us
If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the Service Provider via email at madhusudan707@gmail.com.`,
      termsOfUse: `Terms and Conditions for Let AI Build It

Terms and Conditions
Last updated: February 15, 2025

Please read these terms and conditions carefully before using Our Service.

Interpretation and Definitions
Interpretation
The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.

Definitions
For the purposes of these Terms and Conditions:

Application means the software program provided by the Company downloaded by You on any electronic device, named Let AI Build It

Application Store means the digital distribution service operated and developed by Apple Inc. (Apple App Store) or Google Inc. (Google Play Store) in which the Application has been downloaded.

Affiliate means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.

Country refers to: Uttar Pradesh, India

Company (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to YorApp Solution Private Limited, YORAPP SOLUTIONS PRIVATE LIMITED is A-73, THIRD FLOOR SECTOR- 2 , NOIDA, Uttar Pradesh, India - 201302.

Device means any device that can access the Service such as a computer, a cellphone or a digital tablet.

Service refers to the Application.

Terms and Conditions (also referred as "Terms") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service. This Terms and Conditions agreement has been created with the help of the Free Terms and Conditions Generator.

Third-party Social Media Service means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.

You means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.

Acknowledgment
These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.

Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.

By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.

You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.

Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.

Links to Other Websites
Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.

The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.

We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.

Termination
We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.

Upon termination, Your right to use the Service will cease immediately.

Limitation of Liability
Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service.

To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.

Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party's liability will be limited to the greatest extent permitted by law.

"AS IS" and "AS AVAILABLE" Disclaimer
The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.

Without limiting the foregoing, neither the Company nor any of the company's provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components.

Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law.

Governing Law
The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.

Disputes Resolution
If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.

For European Union (EU) Users
If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which You are resident.

United States Legal Compliance
You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, or that has been designated by the United States government as a "terrorist supporting" country, and (ii) You are not listed on any United States government list of prohibited or restricted parties.

Severability and Waiver
Severability
If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.

Waiver
Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not affect a party's ability to exercise such right or require such performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach.

Translation Interpretation
These Terms and Conditions may have been translated if We have made them available to You on our Service. You agree that the original English text shall prevail in the case of a dispute.

Changes to These Terms and Conditions
We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.

By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.

Contact Us
If you have any questions about these Terms and Conditions, You can contact us:

By email: yorappsolution@gmail.com`,
    },
    {
      id: 2,
      name: "Nutrition Scanner",
      description: "Advanced nutrition scanning and analysis application",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800",
      price: "Free",
      website: "https://example.com/nutrition-scanner",
      playStoreLink: "https://play.google.com/store/apps/details?id=com.nutrition.scanner",
      privacyPolicy: `Privacy Policy

This privacy policy applies to the Nutrition Scanner app (hereby referred to as "Application") for mobile devices that was created by Madhusudan Das (hereby referred to as "Service Provider") as a Free service. This service is intended for use "AS IS".

Information Collection and Use
The Application collects information when you download and use it. This information may include information such as:

• Your device's Internet Protocol address (e.g. IP address)
• The pages of the Application that you visit, the time and date of your visit, the time spent on those pages
• The time spent on the Application
• The operating system you use on your mobile device

The Application does not gather precise information about the location of your mobile device.

The Service Provider may use the information you provided to contact you from time to time to provide you with important information, required notices and marketing promotions.

For a better experience, while using the Application, the Service Provider may require you to provide us with certain personally identifiable information, including but not limited to email. The information that the Service Provider request will be retained by them and used as described in this privacy policy.

Third Party Access
Only aggregated, anonymized data is periodically transmitted to external services to aid the Service Provider in improving the Application and their service. The Service Provider may share your information with third parties in the ways that are described in this privacy statement.

Please note that the Application utilizes third-party services that have their own Privacy Policy about handling data. Below are the links to the Privacy Policy of the third-party service providers used by the Application:

• Google Play Services

The Service Provider may disclose User Provided and Automatically Collected Information:
• as required by law, such as to comply with a subpoena, or similar legal process;
• when they believe in good faith that disclosure is necessary to protect their rights, protect your safety or the safety of others, investigate fraud, or respond to a government request;
• with their trusted services providers who work on their behalf, do not have an independent use of the information we disclose to them, and have agreed to adhere to the rules set forth in this privacy statement.

Opt-Out Rights
You can stop all collection of information by the Application easily by uninstalling it. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network.

Data Retention Policy
The Service Provider will retain User Provided data for as long as you use the Application and for a reasonable time thereafter. If you'd like them to delete User Provided Data that you have provided via the Application, please contact them at madhusudan707@gmail.com and they will respond in a reasonable time.

Children
The Service Provider does not use the Application to knowingly solicit data from or market to children under the age of 13.

The Application does not address anyone under the age of 13. The Service Provider does not knowingly collect personally identifiable information from children under 13 years of age. In the case the Service Provider discover that a child under 13 has provided personal information, the Service Provider will immediately delete this from their servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact the Service Provider (madhusudan707@gmail.com) so that they will be able to take the necessary actions.

Security
The Service Provider is concerned about safeguarding the confidentiality of your information. The Service Provider provides physical, electronic, and procedural safeguards to protect information the Service Provider processes and maintains.

Changes
This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes to the Privacy Policy by updating this page with the new Privacy Policy. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes.

This privacy policy is effective as of 2025-01-26

Your Consent
By using the Application, you are consenting to the processing of your information as set forth in this Privacy Policy now and as amended by us.

Contact Us
If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the Service Provider via email at madhusudan707@gmail.com.`,
      termsOfUse: `Terms & Conditions

These terms and conditions apply to the Nutrition Scanner app (hereby referred to as "Application") for mobile devices that was created by Madhusudan Das (hereby referred to as "Service Provider") as a Free service.

Upon downloading or utilizing the Application, you are automatically agreeing to the following terms. It is strongly advised that you thoroughly read and understand these terms prior to using the Application. Unauthorized copying, modification of the Application, any part of the Application, or our trademarks is strictly prohibited. Any attempts to extract the source code of the Application, translate the Application into other languages, or create derivative versions are not permitted. All trademarks, copyrights, database rights, and other intellectual property rights related to the Application remain the property of the Service Provider.

The Service Provider is dedicated to ensuring that the Application is as beneficial and efficient as possible. As such, they reserve the right to modify the Application or charge for their services at any time and for any reason. The Service Provider assures you that any charges for the Application or its services will be clearly communicated to you.

The Application stores and processes personal data that you have provided to the Service Provider in order to provide the Service. It is your responsibility to maintain the security of your phone and access to the Application. The Service Provider strongly advise against jailbreaking or rooting your phone, which involves removing software restrictions and limitations imposed by the official operating system of your device. Such actions could expose your phone to malware, viruses, malicious programs, compromise your phone's security features, and may result in the Application not functioning correctly or at all.

Please note that the Application utilizes third-party services that have their own Terms and Conditions. Below are the links to the Terms and Conditions of the third-party service providers used by the Application:

• Google Play Services

Please be aware that the Service Provider does not assume responsibility for certain aspects. Some functions of the Application require an active internet connection, which can be Wi-Fi or provided by your mobile network provider. The Service Provider cannot be held responsible if the Application does not function at full capacity due to lack of access to Wi-Fi or if you have exhausted your data allowance.

If you are using the application outside of a Wi-Fi area, please be aware that your mobile network provider's agreement terms still apply. Consequently, you may incur charges from your mobile provider for data usage during the connection to the application, or other third-party charges. By using the application, you accept responsibility for any such charges, including roaming data charges if you use the application outside of your home territory (i.e., region or country) without disabling data roaming. If you are not the bill payer for the device on which you are using the application, they assume that you have obtained permission from the bill payer.

Similarly, the Service Provider cannot always assume responsibility for your usage of the application. For instance, it is your responsibility to ensure that your device remains charged. If your device runs out of battery and you are unable to access the Service, the Service Provider cannot be held responsible.

In terms of the Service Provider's responsibility for your use of the application, it is important to note that while they strive to ensure that it is updated and accurate at all times, they do rely on third parties to provide information to them so that they can make it available to you. The Service Provider accepts no liability for any loss, direct or indirect, that you experience as a result of relying entirely on this functionality of the application.

The Service Provider may wish to update the application at some point. The application is currently available as per the requirements for the operating system (and for any additional systems they decide to extend the availability of the application to) may change, and you will need to download the updates if you want to continue using the application. The Service Provider does not guarantee that it will always update the application so that it is relevant to you and/or compatible with the particular operating system version installed on your device. However, you agree to always accept updates to the application when offered to you. The Service Provider may also wish to cease providing the application and may terminate its use at any time without providing termination notice to you. Unless they inform you otherwise, upon any termination, (a) the rights and licenses granted to you in these terms will end; (b) you must cease using the application, and (if necessary) delete it from your device.

Changes to These Terms and Conditions
The Service Provider may periodically update their Terms and Conditions. Therefore, you are advised to review this page regularly for any changes. The Service Provider will notify you of any changes by posting the new Terms and Conditions on this page.

These terms and conditions are effective as of 2025-01-26

Contact Us
If you have any questions or suggestions about the Terms and Conditions, please do not hesitate to contact the Service Provider at madhusudan707@gmail.com.`,
    },
    {
      id: 3,
      name: "Cloud Security Pro",
      description: "Enterprise-grade security solution",
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=800",
      price: "$149/mo",
      website: "https://example.com/security",
      privacyPolicy: "We take your security seriously...",
      termsOfUse: "Security terms and conditions..."
    },
    // Add more products as needed
  ];

  const blogPosts = [
    {
      title: "The Future of AI in Enterprise",
      excerpt: "Exploring how artificial intelligence is transforming business operations...",
      author: "Sarah Johnson",
      date: "Mar 15, 2024",
      imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800"
    },
    {
      title: "Cloud Computing Trends 2024",
      excerpt: "Key trends shaping the future of cloud computing and infrastructure...",
      author: "Michael Chen",
      date: "Mar 12, 2024",
      imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800"
    },
    {
      title: "Cybersecurity Best Practices",
      excerpt: "Essential security measures for modern businesses...",
      author: "Alex Rivera",
      date: "Mar 10, 2024",
      imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800"
    }
  ];

  const aiTools = [
    {
      name: "TextAI Pro",
      description: "Advanced text analysis and generation tool",
      category: "Text Processing",
      imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800"
    },
    {
      name: "ImageSense AI",
      description: "Intelligent image recognition and processing",
      category: "Computer Vision",
      imageUrl: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?auto=format&fit=crop&w=800"
    },
    {
      name: "DataMind Analytics",
      description: "AI-powered data analysis and insights",
      category: "Data Analytics",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800"
    }
  ];

  return (
    <Router>
      <div className="App">
      <Header />
        <Routes>
        <Route path="/" element={<Suspense fallback={<div>Loading Let AI Build It...</div>}><LetAIBuildIt /></Suspense>} />
          <Route path="products" element={
      <main className="pt-16">
        <section id="products" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Product Catalog</h2>
                  <Container sx={{ py: 8 }} maxWidth="lg">
                    <Grid container spacing={4}>
                      {products.map((product) => (
                        <Grid item key={product.id} xs={12} sm={6} md={4}>
                          <ProductCard {...product} />
                        </Grid>
                      ))}
                    </Grid>
                  </Container>
          </div>
        </section>
              {/* Blog and AI Tools sections */}
            </main>
          } />
          <Route path="/product/:id" element={<ProductDetail products={products} />} />
          <Route 
            path="/product/:id/:name/privacy-policy" 
            element={<PrivacyPolicy products={products} />} 
          />
          <Route 
            path="/product/:id/:name/terms-of-use" 
            element={<TermsOfUse products={products} />} 
          />
         
        </Routes>
        <Newsletter />
          </div>
    </Router>
  );
};

export default App;