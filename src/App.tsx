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
      id: 2,
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