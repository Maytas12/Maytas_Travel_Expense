import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaPlane, 
  FaCreditCard, 
  FaChartLine, 
  FaShieldAlt, 
  FaUsers, 
  FaGlobe,
  FaQuoteLeft,
  FaStar,
  FaCheckCircle,
  FaArrowRight,
  FaPlay,
  FaLinkedin,
  FaTwitter,
  FaChevronLeft,
  FaChevronRight
} from 'react-icons/fa';

// Enhanced Hero Section
const HeroSection = styled.section`
  height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80') center/cover;
    opacity: 0.3;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(102, 126, 234, 0.9), rgba(118, 75, 162, 0.9));
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  padding: 0 2rem;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.6rem;
  margin-bottom: 2.5rem;
  opacity: 0.9;
  line-height: 1.5;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.2rem;
  }
`;

const CTAButton = styled(motion(Link))`
  display: inline-block;
  padding: 1.2rem 2.5rem;
  background: ${({ theme }) => theme.colors.accent};
  color: white;
  border-radius: 50px;
  font-size: 1.2rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  }
`;

// Stats Section
const StatsSection = styled.section`
  padding: 4rem 0;
  background: white;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  text-align: center;
`;

const StatCard = styled(motion.div)`
  padding: 2rem;
`;

const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.8;
`;

// Features Section
const FeaturesSection = styled.section`
  padding: 6rem 0;
  background: ${({ theme }) => theme.colors.light};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: 2.8rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

const SectionSubtitle = styled(motion.p)`
  text-align: center;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.7;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;
  margin-top: 3rem;
`;

const FeatureCard = styled(motion.div)`
  background: white;
  padding: 3rem;
  border-radius: 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid #f0f0f0;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
`;

const FeatureIcon = styled.div`
  font-size: 3.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.5rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

const FeatureDescription = styled.p`
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.8;
  line-height: 1.6;
`;

// Testimonials Section
const TestimonialsSection = styled.section`
  padding: 6rem 0;
  background: white;
  overflow: hidden;
`;

const TestimonialsContainer = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SliderContainer = styled.div`
  position: relative;
  margin-top: 3rem;
  overflow: hidden;
`;

const SliderTrack = styled(motion.div)`
  display: flex;
  gap: 2rem;
  padding: 1rem 0;
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  width: 50px;
  height: 50px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transform: translateY(-50%);

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
    transform: translateY(-50%) scale(1.1);
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: translateY(-50%) scale(1);
  }

  &.prev {
  
    left: 0px;
    width: 33px;
    height: 39PX;
  }

  &.next {
    right: 0;
    width: 33px;
    height: 39PX;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    &.prev {
      left: -20px;
    }
    &.next {
      right: -20px;
    }
  }
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
`;

const Dot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: ${({ active, theme }) => 
    active ? theme.colors.primary : '#ddd'};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    transform: scale(1.2);
  }
`;

const TestimonialCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.light};
  padding: 2.5rem;
  border-radius: 1.5rem;
  position: relative;
  border: 1px solid #e5e5e5;
  min-width: 350px;
  flex: 0 0 calc(33.333% - 1.333rem);
  transition: transform 0.3s ease;
  
  @media (max-width: 768px) {
    min-width: 280px;
    flex: 0 0 calc(100% - 1rem);
  }
`;

const QuoteIcon = styled(FaQuoteLeft)`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  opacity: 0.3;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
`;

const TestimonialText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1.5rem;
  font-style: italic;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const AuthorAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

const AuthorInfo = styled.div`
  flex: 1;
`;

const AuthorName = styled.div`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

const AuthorTitle = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.7;
`;

const StarRating = styled.div`
  display: flex;
  gap: 0.2rem;
  color: #fbbf24;
  margin-top: 0.5rem;
`;

// Process Section
const ProcessSection = styled.section`
  padding: 6rem 0;
  background: ${({ theme }) => theme.colors.light};
`;

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ProcessStep = styled(motion.div)`
  text-align: center;
  padding: 2rem;
`;

const StepNumber = styled.div`
  width: 60px;
  height: 60px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 auto 1rem;
`;

const StepTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.text};
`;

const StepDescription = styled.p`
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.8;
`;

// CTA Section
const CTASection = styled.section`
  padding: 6rem 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
`;

const CTATitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const CTADescription = styled.p`
  font-size: 1.3rem;
  margin-bottom: 2rem;
  opacity: 0.9;
`;

const CTAButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const SecondaryButton = styled(Link)`
  display: inline-block;
  padding: 1rem 2rem;
  background: transparent;
  color: white;
  border: 2px solid white;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: white;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

  const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoSliding, setIsAutoSliding] = useState(true);
  const [cardsToShow, setCardsToShow] = useState(2);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setCardsToShow(1);
      } else {
        setCardsToShow(2);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const features = [
    {
      icon: <FaPlane />,
      title: "Travel Booking",
      description: "Seamless flight, hotel, and car rental bookings with corporate rates and preferred vendors."
    },
    {
      icon: <FaCreditCard />,
      title: "Expense Management",
      description: "Easy expense tracking with receipt capture, automated categorization, and policy compliance."
    },
    {
      icon: <FaChartLine />,
      title: "Analytics & Reporting",
      description: "Real-time insights into travel spend, policy violations, and cost-saving opportunities."
    },
    {
      icon: <FaShieldAlt />,
      title: "Policy Compliance",
      description: "Automated policy enforcement with customizable rules and approval workflows."
    },
    {
      icon: <FaUsers />,
      title: "Team Collaboration",
      description: "Shared itineraries, group bookings, and centralized expense management for teams."
    },
    {
      icon: <FaGlobe />,
      title: "Global Support",
      description: "24/7 customer support and assistance in over 100 countries worldwide."
    }
  ];

  const testimonials = [
    {
      text: "Maytas has completely transformed our travel management process. We've saved 30% on travel costs while improving employee satisfaction.",
      author: "Sarah Johnson",
      title: "CFO, TechCorp Inc.",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      rating: 2
    },
    {
      text: "The automated expense reporting is a game-changer. Our finance team now spends 70% less time processing expense reports.",
      author: "Michael Chen",
      title: "Finance Director, Global Solutions",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      rating: 3
    },
    {
      text: "Implementation was seamless and the support team was exceptional. Within 2 weeks, our entire team was up and running.",
      author: "Emily Rodriguez",
      title: "Operations Manager, StartupXYZ",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 5
    },
    {
      text: "Implementation was seamless and the support team was exceptional. Within 2 weeks, our entire team was up and running.",
      author: "Satyam",
      title: "Operations Manager, StartupXYZ",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      rating:4
    }
  ];

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = Math.max(0, testimonials.length - cardsToShow);
      return prevIndex === 0 ? maxIndex : prevIndex - 1;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = Math.max(0, testimonials.length - cardsToShow);
      return prevIndex === maxIndex ? 0 : prevIndex + 1;
    });
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isAutoSliding) {
      const interval = setInterval(() => {
        const maxIndex = Math.max(0, testimonials.length - cardsToShow);
        setCurrentIndex((prevIndex) => 
          prevIndex === maxIndex ? 0 : prevIndex + 1
        );
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoSliding, testimonials.length, cardsToShow]);

  const processSteps = [
    {
      number: 1,
      title: "Sign Up",
      description: "Create your account and set up your company profile"
    },
    {
      number: 2,
      title: "Configure Policies",
      description: "Customize travel policies and approval workflows"
    },
    {
      number: 3,
      title: "Book Travel",
      description: "Start booking flights, hotels, and cars with preferred rates"
    },
    {
      number: 4,
      title: "Track & Report",
      description: "Monitor expenses and generate comprehensive reports"
    }
  ];

  return (
    <>
      <HeroSection>
        <HeroContent>
          <HeroTitle
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Simplify Your Travel & Expense Management
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Streamline business travel, automate expense reporting, and gain complete control over your travel spend with Maytas.
          </HeroSubtitle>
          <CTAButton
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            to="/contact"
          >
            Get Started Today
          </CTAButton>
        </HeroContent>
      </HeroSection>

      <StatsSection>
        <Container>
          <StatsGrid>
            <StatCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <StatNumber>500+</StatNumber>
              <StatLabel>Companies Trust Us</StatLabel>
            </StatCard>
            <StatCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <StatNumber>30%</StatNumber>
              <StatLabel>Average Cost Savings</StatLabel>
            </StatCard>
            <StatCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <StatNumber>50K+</StatNumber>
              <StatLabel>Trips Managed</StatLabel>
            </StatCard>
            <StatCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <StatNumber>99%</StatNumber>
              <StatLabel>Customer Satisfaction</StatLabel>
            </StatCard>
          </StatsGrid>
        </Container>
      </StatsSection>

      <FeaturesSection>
        <Container>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Why Choose Maytas?
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Discover how our comprehensive platform transforms your travel and expense management
          </SectionSubtitle>
          <FeaturesGrid>
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <FeatureIcon>{feature.icon}</FeatureIcon>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
              </FeatureCard>
            ))}
          </FeaturesGrid>
        </Container>
      </FeaturesSection>

      <TestimonialsSection>
        <Container>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Trusted by Industry Leaders
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            See what our clients say about their experience with Maytas
          </SectionSubtitle>
          
          <SliderContainer>
            <NavigationButton 
              className="prev"
              onClick={handlePrevious}
              aria-label="Previous testimonial"
            >
              <FaChevronLeft />
            </NavigationButton>
            
            <NavigationButton 
              className="next"
              onClick={handleNext}
              aria-label="Next testimonial"
            >
              <FaChevronRight />
            </NavigationButton>
            
            <SliderTrack
              animate={{ x: `-${currentIndex * (100 / cardsToShow)}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              style={{ 
                display: 'flex', 
                width: `${testimonials.length * (100 / cardsToShow)}%`,
                gap: '2rem'
              }}
            >
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  style={{ 
                    flex: `0 0 calc(${100 / cardsToShow}% - ${(cardsToShow - 1) * 2 / cardsToShow}rem)`,
                    marginRight: index === testimonials.length - 1 ? '0' : '2rem'
                  }}
                  onMouseEnter={() => setIsAutoSliding(false)}
                  onMouseLeave={() => setIsAutoSliding(true)}
                >
                  <QuoteIcon />
                  <TestimonialText>{testimonial.text}</TestimonialText>
                  <TestimonialAuthor>
                    <AuthorAvatar src={testimonial.avatar} alt={testimonial.author} />
                    <AuthorInfo>
                      <AuthorName>{testimonial.author}</AuthorName>
                      <AuthorTitle>{testimonial.title}</AuthorTitle>
                      <StarRating>
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <FaStar key={i} />
                        ))}
                      </StarRating>
                    </AuthorInfo>
                  </TestimonialAuthor>
                </TestimonialCard>
              ))}
            </SliderTrack>
            
            <DotsContainer>
              {Array.from({ length: Math.max(1, testimonials.length - cardsToShow + 1) }).map((_, index) => (
                <Dot
                  key={index}
                  active={index === currentIndex}
                  onClick={() => handleDotClick(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </DotsContainer>
          </SliderContainer>
        </Container>
      </TestimonialsSection>

      <ProcessSection>
        <Container>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Get Started in 4 Simple Steps
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            From setup to savings in less than 24 hours
          </SectionSubtitle>
          <ProcessGrid>
            {processSteps.map((step, index) => (
              <ProcessStep
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <StepNumber>{step.number}</StepNumber>
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </ProcessStep>
            ))}
          </ProcessGrid>
        </Container>
      </ProcessSection>

      <CTASection>
        <Container>
          <CTATitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Travel Management?
          </CTATitle>
          <CTADescription
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Join thousands of companies already saving time and money with Maytas
          </CTADescription>
          <CTAButtons>
            <CTAButton
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              to="/contact"
            >
              Start Free Trial
            </CTAButton>
            <SecondaryButton
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              to="/contact"
            >
              Schedule Demo
            </SecondaryButton>
          </CTAButtons>
        </Container>
      </CTASection>
    </>
  );
};

export default Home;
