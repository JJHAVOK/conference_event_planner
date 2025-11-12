import React from 'react';
import './TotalCost.css';

import React, { useState, useEffect } from 'react';
import "./TotalCost.css";
const TotalCost = ({ totalCosts, ItemsDisplay }) => {
    const grandTotal = totalCosts.venue + totalCosts.av + totalCosts.meals;

    const total_amount = totalCosts.venue + totalCosts.av + totalCosts.meals;
return (
        // ADDED .content-wrapper HERE
        <div className="content-wrapper"> 
            <div className="total-cost-summary">
                <h2>Expense Summary</h2>
                
                <div className="cost-breakdown">
                    <div className="cost-item">
                        <span>Venue Cost:</span>
                        <span className="cost-value">${totalCosts.venue}</span>
                    </div>
                    <div className="cost-item">
                        <span>Add-ons Cost:</span>
                        <span className="cost-value">${totalCosts.av}</span>
                    </div>
                    <div className="cost-item">
                        <span>Meals Cost:</span>
                        <span className="cost-value">${totalCosts.meals}</span>
                    </div>
                    <div className="grand-total">
                        <span>Grand Total:</span>
                        <span className="total-value">${grandTotal}</span>
                    </div>
        <div className="pricing-app">
            <div className="display_box">
                <div className="header">
                    <p className="preheading"><h3>Total cost for the event</h3></p>
</div>

                <div className="items-list-details">
                    <h3>Itemized Breakdown</h3>
                    <ItemsDisplay />
                <div>
                <h2 id="pre_fee_cost_display" className="price">
    ${total_amount}
</h2>
<div className="render_items">
    <ItemsDisplay />
</div>
</div>
</div>
</div>
);
};

export default TotalCost;
