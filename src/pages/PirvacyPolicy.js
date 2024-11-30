import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Layout from '../components/layout/Layout';

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div
        style={{
          backgroundColor: '#f8f9fa',
          paddingTop: '40px',
          paddingBottom: '40px',
        }}
      >
        <Container>
          <Row className="justify-content-center">
            <Col md={10} lg={8}>
              <Card
                className="p-4"
                style={{
                  backgroundColor: '#ffffff',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                  borderRadius: '8px',
                }}
              >
                <h2 className="text-center mb-4" style={{ color: '#6b21a8' }}>
                  Privacy Policy
                </h2>
                <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#495057' }}>
                  At LearnMate, we care deeply about your privacy and keeping your personal information safe. This Privacy Policy explains what data we collect, why we need it, and how we use it to make LearnMate a secure and helpful platform for students. By using LearnMate, you agree to the terms described below.
                </p>

                <h4 className="mt-4" style={{ color: '#6b21a8' }}>
                  1. What Information We Collect
                </h4>
                <ul style={{ fontSize: '16px', lineHeight: '1.6', color: '#495057' }}>
                  <li><strong>Personal Details:</strong> We collect your name, email address, student ID, and academic info when you sign up.</li>
                  <li><strong>Payment Information:</strong> If you buy or sell notes, we securely handle your payment details and transaction history.</li>
                  <li><strong>Platform Activity:</strong> We track how you use the platform, like your logins, browsing preferences, and favorite features, to improve your experience.</li>
                  <li><strong>Feedback & Messages:</strong> Any feedback, messages, or support requests you share with us are collected to help us make things better.</li>
                </ul>

                <h4 className="mt-4" style={{ color: '#6b21a8' }}>
                  2. How We Use Your Information
                </h4>
                <ul style={{ fontSize: '16px', lineHeight: '1.6', color: '#495057' }}>
                  <li><strong>To Run the Platform:</strong> This includes helping you buy, sell, and access notes or book career counseling sessions.</li>
                  <li><strong>To Handle Payments:</strong> Secure payment systems process transactions smoothly and safely.</li>
                  <li><strong>To Offer Support:</strong> If you face any issues or have questions, your information helps us respond effectively.</li>
                </ul>

                <h4 className="mt-4" style={{ color: '#6b21a8' }}>
                  3. When We Share Your Information
                </h4>
                <ul style={{ fontSize: '16px', lineHeight: '1.6', color: '#495057' }}>
                  <li><strong>With Service Providers:</strong> Trusted partners (like payment ways) help us keep the platform running smoothly.</li>
                  <li><strong>When Legally Required:</strong> If the law requires it, we may share your data with authorities for investigations or compliance.</li>
                </ul>

                <h4 className="mt-4" style={{ color: '#6b21a8' }}>
                  4. How We Protect Your Information
                </h4>
                <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#495057' }}>
                  We take your data security seriously. LearnMate uses encryption, secure payment gateways, and regular checks to ensure everything is safe from unauthorized access.
                </p>

                <h4 className="mt-4" style={{ color: '#6b21a8' }}>
                  5. How Long We Keep Your Data
                </h4>
                <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#495057' }}>
                  We keep your information only as long as necessary to provide our services and meet legal requirements. Once it’s no longer needed, we securely delete it.
                </p>

                <h4 className="mt-4" style={{ color: '#6b21a8' }}>
                  6. Your Rights
                </h4>
                <ul style={{ fontSize: '16px', lineHeight: '1.6', color: '#495057' }}>
                  <li><strong>Access:</strong> You can access, update, or delete your information anytime through your account.</li>
                  <li><strong>Unsubscribe:</strong> Unsubscribe from emails or notifications if you don’t want them.</li>
                  <li><strong>Request Data:</strong> Request a copy of the data we have about you.</li>
                </ul>

                <h4 className="mt-4" style={{ color: '#6b21a8' }}>
                  7. Updates to This Privacy Policy
                </h4>
                <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#495057' }}>
                  We may update this Privacy Policy from time to time. If we make significant changes, we’ll let you know via email or on the platform.
                </p>

                <h4 className="mt-4" style={{ color: '#6b21a8' }}>
                  8. Contact Us
                </h4>
                <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#495057' }}>
                  Have questions or concerns about your data or this policy? Feel free to reach out to us at [Insert Email Here].
                </p>

                <div className="text-center mt-4">
                  <Button
                    variant="primary"
                    href="/"
                    style={{
                      padding: '10px 30px',
                      fontSize: '16px',
                      backgroundColor: '#6b21a8',
                      borderRadius: '50px',
                      borderColor: '#6b21a8',
                      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    Go Back to Home
                  </Button>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
