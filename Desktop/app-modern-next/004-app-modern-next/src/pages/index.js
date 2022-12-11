import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import KeyFeature from 'sections/key-feature';
import WorkFlow from 'sections/workflow';
import SecurePayment from 'sections/secure-payment';
import Package from 'sections/package';
import Faq from 'sections/faq';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="TDI" />
          <Banner />
          <KeyFeature />
          <WorkFlow />
          <Faq />
          <Package />
          <SecurePayment />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
