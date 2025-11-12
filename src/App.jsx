import React, { useState, useEffect } from "react";
import "./App.css";
import ConferenceEvent from "./ConferenceEvent";
import AboutUs from "./AboutUs";
import TotalCost from "./TotalCost"; 

// New Footer Component (Defined locally)
const Footer = () => (
    <footer className="app-footer">
        <div className="footer-content">
            <div className="footer-section">
                <h4>Event Planner Co.</h4>
                <p>Simplifying your event budgeting needs since 2024.</p>
            </div>
            <div className="footer-section">
                <h4>Resources</h4>
                <ul>
                    <li><a href="#venue">Venue Booking</a></li>
                    <li><a href="#addons">Add-ons</a></li>
                    <li><a href="#meals">Meal Selection</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h4>Contact</h4>
                <ul>
                    <li><p>Email: info@planner.com</p></li>
                    <li><p>Phone: +1 (555) 123-4567</p></li>
                </ul>
            </div>
            <div className="footer-section">
                <h4>Legal</h4>
                <ul>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms of Service</a></li>
                </ul>
            </div>
        </div>
        <div className="footer-bottom">
            &copy; {new Date().getFullYear()} Conference Event Planner. All rights reserved.
        </div>
    </footer>
);

// Scroll-to-Top Button (Defined locally)
const ScrollToTopButton = () => {
    useEffect(() => {
        const handleScroll = () => {
            const btn = document.getElementById("scrollToTopBtn");
            if (btn) {
                if (window.scrollY > 300) {
                    btn.style.display = "flex";
                } else {
                    btn.style.display = "none";
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <button
            id="scrollToTopBtn"
            className="scroll-to-top"
            title="Go to top"
            onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
        >
            &uarr;
        </button>
    );
};

// ItemsDisplay component (defined here for modal rendering)
const ItemsDisplay = ({ items }) => {
    if (!items || items.length === 0) return <p>No items selected</p>;

    return (
        <div className="display_box1"> 
            <table className="table_item_data">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Unit Cost</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>${item.cost}</td>
                            <td>
                                {/* Note: Quantity logic simplified here as the exact logic relies on multiple states inside ConferenceEvent */}
                                {item.type === "meals" ? ` For {numberOfPeople} people` : item.quantity} 
                            </td>
                            <td>
                                {item.type === "meals" ? `${item.cost * (item.numberOfPeople || 1)}` : `${item.cost * item.quantity}`}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};


function App() {
  const [showVenue, setShowVenue] = useState(false);
  const [showItems, setShowItems] = useState(false); 
  const [itemsData, setItemsData] = useState([]);
  const [totalCostData, setTotalCostData] = useState({});


  const navigateToProducts = (idType) => {
    if (!showVenue) {
        setShowVenue(true);
    }
    setTimeout(() => {
        document.querySelector(idType).scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleGetStarted = () => {
    setShowVenue(true);
    setTimeout(() => {
        document.querySelector('.event-list-container').scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };
  
  // Modal Component (FIXED CLOSING LOGIC)
  const CostModal = () => (
      // FIX: Clicking outside the modal calls setShowItems(false)
      <div className="total-cost-modal-overlay" onClick={() => setShowItems(false)}>
          {/* FIX: Stop propagation to prevent internal clicks from closing the modal */}
          <div className="total-cost-modal-content" onClick={(e) => e.stopPropagation()}>
              {/* FIX: X button calls setShowItems(false) */}
              <button className="modal-close-btn" onClick={() => setShowItems(false)}>&times;</button> 
              <TotalCost 
                  totalCosts={totalCostData} 
                  ItemsDisplay={() => <ItemsDisplay items={itemsData} />} 
              />
          </div>
      </div>
  );


  return (
    <>
      {/* 1. FIXED HEADER */}
      <header className="app-navbar navbar_event_conference">
          <div className="company_logo">Conference Expense Planner</div>
          <div className="left_navbar">
              <div className="nav_links">
                  <a href="#venue" onClick={() => navigateToProducts("#venue")}>Venue</a>
                  <a href="#addons" onClick={() => navigateToProducts('#addons')}>Add-ons</a>
                  <a href="#meals" onClick={() => navigateToProducts('#meals')}>Meals</a>
              </div>
              <button 
                  className="details_button" 
                  onClick={() => setShowItems(!showItems)} 
              >
                  Show Details
              </button>
          </div>
      </header>

      {/* 2. FIRST PAGE CONTENT */}
      <div className="first-page-wrapper">
          <div className="first_page">
            <div className="main_event">
              <div className="first_page_name_btn">
                <h1 className="budget_heading">Conference Expense Planner</h1>
                <p className="budget_sentence"> Plan your next major event with us!</p>
                <div className="getstarted_btn">
                  <button onClick={() => handleGetStarted()} className="get-started-btn">
                    Get Started
                  </button>
                </div>
              </div>
              <div className="aboutus_main">
                <AboutUs />
              </div>
            </div>
          </div>
      </div>

      {/* 3. EVENT PLANNER SECTION (Toggled visibility) */}
      <div className={`event-list-container ${showVenue ? 'visible' : ''}`}>
        <ConferenceEvent 
            setItemsData={setItemsData}
            setTotalCostData={setTotalCostData}
        />
      </div>

      <ScrollToTopButton />
      <Footer />
      
      {/* 4. MODAL RENDERING AT THE TOP LEVEL */}
      {showItems && <CostModal />} 
    </>
  );
}

export default App;