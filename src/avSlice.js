/* --- GLOBAL STYLES & FONT IMPROVEMENT --- */
body {
    font-family: 'Poppins', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f8f9fa; 
    margin: 0;
    /* FIX: Prevent body scrollbar issues often caused by 100vw */
    overflow-x: hidden; 
}

/* Define accent color variable for consistency */
:root {
    --primary-blue: #1786c7; /* Standardized Blue */
    --accent-yellow: #facc15;
    --background-dark: #1f2937;
    --success-green: #22c55e;
    --danger-red: #ef4444;
    --header-height: 70px; /* Define header height for content spacing */
}

/* --- SCROLL BAR FIXES --- */

/* 1. Target and disable scrollbar in the list view (ItemsDisplay) */
.display_box1 {
    /* FIX: Ensure content expands fully, relying on the main page scroll */
    overflow-y: visible !important;
    max-height: none !important; 
    padding-left: 0;
}
.display_box1::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
}
/* 2. Remove scrollbar for Firefox (if it was an issue) */
.display_box1 {
    scrollbar-width: none;
}


/* --- NAVBAR STYLES (FIXED & STICKY HEADER) --- */
.app-navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 40px;
    background-color: var(--background-dark);
    color: white;
    width: 100%;
    height: var(--header-height); /* Set fixed height */
    position: fixed; /* Ensures it stays at the top */
    top: 0;
    left: 0;
    z-index: 1000;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
    box-sizing: border-box;
}

.company_logo {
    font-size: 26px;
    color: var(--primary-blue);
    font-weight: 700;
    letter-spacing: 0.5px;
}

.left_navbar {
    display: flex;
    align-items: center;
    gap: 50px;
}

.nav_links {
    display: flex;
    gap: 30px;
}

.nav_links a {
    text-decoration: none;
    color: #ffffff;
    font-size: 16px;
    font-weight: 500;
    transition: color 0.3s ease;
    padding: 5px 0;
}

.nav_links a:hover {
    color: var(--primary-blue);
    border-bottom: 2px solid var(--primary-blue);
}

.details_button {
    padding: 10px 20px;
    background-color: var(--primary-blue); 
    color: white;
    font-size: 16px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    transition: background-color 0.3s;
}

.details_button:hover {
    background-color: #126fb2;
}

/* --- MAIN CONTENT LAYOUT --- */
.main_container {
    display: flex;
    width: 100%;
    justify-content: center;
}

.content-area {
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;
    padding: 20px;
    /* FIX: Add spacing equal to header height to push content down */
    padding-top: var(--header-height); 
}

.items-information {
    display: flex;
    flex-direction: column;
    gap: 60px;
    width: 100%;
    align-items: center;
}

/* SECTION HEADERS (H1) */
.text h1 {
    width: 100%;
    font-size: 30px;
    background-color: #133b6a;
    color: white;
    height: 60px;
    margin: 0 0 30px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    letter-spacing: 1px;
    font-weight: 600;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

/* SECTION CONTAINERS (VENUE/ADDONS/MEALS) */
.venue_container {
    width: 100%;
    padding: 40px;
    border-radius: 12px;
    background-color: #ffffff;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
    margin-bottom: 40px;
}

/* ITEM GRID */
.venue_selection, .addons_selection, .meal_selection {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    width: 100%;
}

/* ITEM CARDS */
.venue_main, .av_data {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    padding: 20px;
    background-color: #ffffff;
    transition: transform 0.2s, box-shadow 0.2s;
}

.venue_main:hover, .av_data:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.venue_main .img img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 8px;
}

/* BUTTON OVERHAUL (Contained Look) */
.button_container, .addons_btn {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #ccc;
    border-radius: 8px;
    overflow: hidden;
    gap: 0;
}

.btn-add, .btn-remove {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    width: 40px;
    height: 40px;
    font-size: 28px;
    font-weight: 700;
    border: none;
    cursor: pointer;
    transition: background-color 0.2s;
    flex-shrink: 0;
    border-radius: 0;
}

.btn-add {
    background-color: var(--primary-blue);
}
.btn-add:hover {
    background-color: #126fb2;
}

.btn-remove {
    background-color: var(--danger-red);
}
.btn-remove:hover {
    background-color: #c0392b;
}

.selected_count, .quantity-value {
    font-size: 20px;
    font-weight: 600;
    color: #333;
    padding: 0 10px;
    background-color: #fff;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 30px;
}

.btn-disabled {
    opacity: 0.4;
    cursor: not-allowed;
    box-shadow: none;
}

/* TOTAL COST DISPLAY */
.total_cost {
    justify-content: center;
    align-items: center;
    gap: 20px;
    font-size: 30px;
    font-weight: 700;
    color: #133b6a;
    background-color: #eef2f5;
    border-radius: 8px;
    padding: 20px;
    width: 100%;
    max-width: 450px;
    margin-top: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

/* TABLE STYLING */
.table_item_data {
    width: 100%;
    border-collapse: collapse;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
}

.table_item_data th, .table_item_data td {
    padding: 15px;
    border: none;
    border-bottom: 1px solid #f0f0f0;
    font-size: 16px;
}

.table_item_data th {
    background-color: #133b6a;
    color: white;
    font-weight: 600;
}

/* --- SCROLL TO TOP BUTTON (FINAL FIX) --- */
.scroll-to-top {
    display: none;
    position: fixed; /* Ensures it scrolls with the page */
    bottom: 30px;
    right: 30px;
    z-index: 9999;
    background-color: var(--primary-blue);
    color: white;
    width: 50px;
    height: 50px;
    border-radius: 8px;
    font-size: 34px;
    line-height: 1;
    font-weight: 700;
    border: none;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    transition: background-color 0.2s, transform 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
}

.scroll-to-top:hover {
    background-color: #126fb2;
    transform: translateY(-2px);
}

/* --- FOOTER STYLES --- */
.app-footer {
    background-color: var(--background-dark);
    color: #ffffff;
    padding: 40px 20px 20px 20px;
    margin-top: 60px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    max-width: 1400px;
    margin: 0 auto;
    gap: 40px;
    padding-bottom: 30px;
    border-bottom: 1px solid #374151;
}

.footer-section h4 {
    color: var(--primary-blue);
    font-size: 18px;
    margin-bottom: 15px;
    font-weight: 600;
}

.footer-section p, .footer-section a {
    color: #d1d5db;
    font-size: 14px;
    line-height: 1.8;
    text-decoration: none;
}

.footer-section a:hover {
    color: var(--accent-yellow);
}

.footer-section ul {
    list-style: none;
    padding: 0;
}

.footer-bottom {
    text-align: center;
    padding-top: 20px;
    font-size: 13px;
    color: #9ca3af;
}

/* --- MEDIA QUERIES --- */
@media (max-width: 1000px) {
    .app-navbar {
        padding: 15px 20px;
    }
    .left_navbar {
        gap: 20px;
    }
    .nav_links {
        gap: 15px;
    }
    .footer-content {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 700px) {
    .app-navbar {
        flex-direction: column;
        align-items: flex-start;
        padding-bottom: 10px;
        height: auto; /* Allow height to adjust for stacked elements */
    }
    .left_navbar {
        width: 100%;
        justify-content: space-between;
        margin-top: 10px;
    }
    .nav_links {
        display: none;
    }
    .footer-content {
        grid-template-columns: 1fr;
    }
    .content-area {
        padding-top: 150px; /* Increase spacing for stacked header on mobile */
    }
}