import React from 'react';
import './TotalCost.css';

const TotalCost = ({ totalCosts, ItemsDisplay }) => {
    const grandTotal = totalCosts.venue + totalCosts.av + totalCosts.meals;

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
                </div>

                <div className="items-list-details">
                    <h3>Itemized Breakdown</h3>
                    <ItemsDisplay />
                </div>
            </div>
        </div>
    );
};

export default TotalCost;
