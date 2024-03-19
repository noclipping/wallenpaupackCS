import { useState, useRef } from "react";
import "./App.css";
import Hero from "./Hero";
import Navbar from "./Navbar";
import PricingCard from "./PricingCard";
import Testimonial from "./Testimonials";
import Contact from "./Contact";
import Lindsey from "./assets/lindsey.webp";
import Susan from "./assets/susan.webp";
import Jack from "./assets/jack.webp";
import Faq from "./Faq";
import Team from "./Team";
import Footer from "./Footer";
import Nav from "./Nav";
function App() {
  const [selectedPlan, setSelectedPlan] = useState("");
  const [activeSection, setActiveSection] = useState("");
  const contactRef = useRef(null); // Ref for the Contact component
  const plansRef = useRef(null);
  const teamRef = useRef(null);
  const faqRef = useRef(null);
  const heroRef = useRef(null);
  const reviewsRef = useRef(null);
  // Function to handle plan selection
  const scrollToElement = (ref) => {
    if (ref.current) {
      // Calculate the position to scroll to taking into account the navbar height
      const navbarHeight = 64; // Adjust this value to match your navbar's height
      const elementPosition =
        ref.current.getBoundingClientRect().top + window.scrollY - navbarHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };
  const handlePlanSelect = (plan) => {
    // console.log(plan);
    setSelectedPlan(plan);
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToReviews = () => {
    scrollToElement(reviewsRef);
  };

  const scrollToPlans = () => {
    scrollToElement(plansRef);
  };

  const scrollToTeam = () => {
    scrollToElement(teamRef);
  };

  const scrollToFaq = () => {
    scrollToElement(faqRef);
  };

  const scrollToHero = () => {
    scrollToElement(heroRef);
  };

  const scrollToContact = () => {
    scrollToElement(contactRef);
  };
  return (
    <div>
      <div class="fixed z-50 w-full">
        <Nav
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          scrollToPlans={scrollToPlans}
          scrollToTeam={scrollToTeam}
          scrollToFaq={scrollToFaq}
          scrollToHero={scrollToHero}
          scrollToReviews={scrollToReviews}
          scrollToContact={scrollToContact}
        />
      </div>
      <div class="py-20 border" ref={heroRef}>
        <Hero
          scrollToPlans={scrollToPlans}
          handlePlanSelect={handlePlanSelect}
        />
      </div>
      <div class="sm:flex sm:w-full sm:justify-around py-20" ref={plansRef}>
        <PricingCard
          handlePlanSelect={handlePlanSelect}
          title="Regular Cleaning"
          price="90"
          period="per cleaning"
          features={[
            "Bathrooms/kitchen clean",
            "Dusting",
            "Mopping",
            "Vacuuming",
          ]}
          disabledFeatures={[
            "Appliances cleaning",
            "Cleaning walls",
            "Baseboard cleaning",
            "Deep clean entire home",
            "Garbage removal",
          ]}
          description="Covering all your basic cleaning needs, this package includes bathroom, kitchen, dusting, mopping, and vacuuming, ideal for maintaining a clean home environment."
        />

        <PricingCard
          handlePlanSelect={handlePlanSelect}
          title="Deep Clean"
          price="150"
          period="per cleaning"
          features={[
            "Bathrooms/kitchen clean",
            "Dusting",
            "Mopping",
            "Vacuuming",
            "Appliances cleaning",
            "Cleaning walls",
            "Baseboard cleaning",
            "Deep clean entire home",
          ]}
          disabledFeatures={["Garbage removal"]}
          description="This extensive service delves deeper with appliance cleaning, wall scrubbing, and baseboard dusting, perfect for thorough cleaning needs."
        />

        <PricingCard
          handlePlanSelect={handlePlanSelect}
          title="Move In/Move Out Cleaning"
          price="280"
          period="per cleaning"
          features={[
            "Bathrooms/kitchen clean",
            "Dusting",
            "Mopping",
            "Vacuuming",
            "Appliances cleaning",
            "Cleaning walls",
            "Baseboard cleaning",
            "Deep clean entire home",
            "Garbage removal",
          ]}
          disabledFeatures={[]}
          description="Our comprehensive package ensures every nook and cranny is spotless, offering a complete deep clean ideal for moving situations."
        />
      </div>

      <div class="sm:flex w-full justify-around py-20" ref={reviewsRef}>
        <Testimonial
          imageUrl={Jack}
          name="Jack M."
          review="Wallenpaupack Cleaning Services did an amazing job cleaning my home. I will be continuing business with them and highly recommend them to anyone who needs their home cleaned."
          timeAgo="5 days ago"
        />
        <Testimonial
          imageUrl={Lindsey}
          name="Lindsey S"
          review="I’m so thankful for you and your company. I just got home. I feel relieved that my house feels and smells cleaner. I’m sure your cleaner can let you know how much dust build up we truly did have! My laundry is up to the ceiling. I just have no time with all the sports we coach for our community and help to organize for the kids in addition to teaching. Thank you thank you thank you! She did an amazing job. I’ll definitely write a review and share your business card on Facebook. Please send me quotes for if we ever want to use you guys again! I’d highly recommend you ☺️"
          timeAgo="3 weeks ago"
        />

        <Testimonial
          imageUrl={Susan}
          name="Susan S."
          review="I hired Wallenpaupack Cleaning to get me started with my spring cleaning. I figured that I would still have things to do when they were done! Imagine my surprise when there was nothing left for me to do!! They did a fantastic job and I would recommend them to anyone looking for house cleaners! The price was perfect."
          timeAgo="4 months ago"
        />
      </div>
      <div ref={teamRef}>
        <Team />
      </div>

      <div ref={faqRef}>
        <Faq />
      </div>
      <div ref={contactRef} class="flex w-full justify-center pb-20">
        <Contact selectedPlan={selectedPlan} ref={contactRef} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
