// First, let's process our data and create an Excel file
const XLSX = require('xlsx');
const fs = require('fs');

const categories = {
    "AI_Tools": {
        name: "AI & Automation Tools",
        description: "AI-powered services and automation tools"
    },
    "Software_Subscriptions": {
        name: "Software & Subscriptions",
        description: "Core software services and general subscriptions"
    },
    "Infrastructure": {
        name: "Infrastructure & Hosting",
        description: "Hosting, domains, and technical infrastructure"
    },
    "Marketing_Tools": {
        name: "Marketing & Design Tools",
        description: "Email marketing, design, and creative tools"
    },
    "Office_Space": {
        name: "Office & Workspace",
        description: "Physical and virtual office expenses"
    },
    "Professional_Services": {
        name: "Professional Services",
        description: "Freelancers, contractors, and professional services"
    }
};

const expenses = [
    {
        vendor: "Adobe Creative Suite",
        category: "Software_Subscriptions",
        amount: 16.66,
        frequency: "Monthly",
        notes: "Creative design software suite"
    },
    {
        vendor: "AppSumo",
        category: "Software_Subscriptions",
        amount: 103.50,
        frequency: "As needed",
        notes: "Software deals platform - check with manager before purchases"
    },
    {
        vendor: "AT&T",
        category: "Infrastructure",
        amount: 86.56,
        frequency: "Monthly",
        notes: "Business internet/phone"
    },
    {
        vendor: "Beefree",
        category: "Marketing_Tools",
        amount: 30.00,
        frequency: "Monthly",
        notes: "Email design tool"
    },
    {
        vendor: "ChatGPT (OpenAI)",
        category: "AI_Tools",
        amount: 20.00,
        frequency: "Monthly",
        notes: "Premium ChatGPT subscription"
    },
    {
        vendor: "Claude AI",
        category: "AI_Tools",
        amount: 20.00,
        frequency: "Monthly",
        notes: "Claude AI subscription"
    },
    {
        vendor: "Codeium",
        category: "AI_Tools",
        amount: 10.00,
        frequency: "Monthly",
        notes: "AI coding assistant"
    },
    {
        vendor: "Creasquare",
        category: "Marketing_Tools",
        amount: 174.00,
        frequency: "Variable",
        notes: "Design services"
    },
    {
        vendor: "Cursor AI IDE",
        category: "AI_Tools",
        amount: 20.00,
        frequency: "Monthly",
        notes: "AI-powered development environment"
    },
    {
        vendor: "Dialpad Inc",
        category: "Infrastructure",
        amount: 4.04,
        frequency: "Monthly",
        notes: "Business phone system"
    },
    {
        vendor: "GoDaddy",
        category: "Infrastructure",
        amount: 35.16,
        frequency: "Variable",
        notes: "Domain registrations and renewals"
    },
    {
        vendor: "Google Cloud",
        category: "Infrastructure",
        amount: "4-12",
        frequency: "Monthly",
        notes: "Variable cost based on usage"
    },
    {
        vendor: "Google Workspace",
        category: "Software_Subscriptions",
        amount: 16.80,
        frequency: "Monthly",
        notes: "Business email and collaboration tools"
    },
    {
        vendor: "Lifearchitect.AI",
        category: "AI_Tools",
        amount: 20.00,
        frequency: "Monthly",
        notes: "AI productivity tool"
    },
    {
        vendor: "Microsoft Services",
        category: "Software_Subscriptions",
        amount: "12.50-25.00",
        frequency: "Monthly",
        notes: "Various Microsoft subscriptions - consolidate if possible"
    },
    {
        vendor: "Midjourney",
        category: "AI_Tools",
        amount: 10.00,
        frequency: "Monthly",
        notes: "AI image generation (currently inactive)"
    },
    {
        vendor: "Notion",
        category: "Software_Subscriptions",
        amount: 29.61,
        frequency: "Monthly",
        notes: "Project management and documentation"
    },
    {
        vendor: "Palaciobox LLC",
        category: "Professional_Services",
        amount: 1260.00,
        frequency: "Monthly",
        notes: "Highest priority expense - verify amount monthly"
    },
    {
        vendor: "Print N Save",
        category: "Professional_Services",
        amount: 140.08,
        frequency: "Variable",
        notes: "Print services"
    },
    {
        vendor: "QuickBooks Online",
        category: "Software_Subscriptions",
        amount: 22.22,
        frequency: "Monthly",
        notes: "Accounting software"
    },
    {
        vendor: "Regus Management Group",
        category: "Office_Space",
        amount: 352.31,
        frequency: "Monthly",
        notes: "Office space rental"
    },
    {
        vendor: "Scraper API",
        category: "Infrastructure",
        amount: 49.00,
        frequency: "Monthly",
        notes: "Web scraping service"
    },
    {
        vendor: "SiteGround Hosting",
        category: "Infrastructure",
        amount: 539.88,
        frequency: "Quarterly",
        notes: "Website hosting - large quarterly payment"
    },
    {
        vendor: "Upwork",
        category: "Professional_Services",
        amount: "200-207",
        frequency: "Variable",
        notes: "Freelancer payments - verify each transaction"
    },
    {
        vendor: "UVI.NET",
        category: "Marketing_Tools",
        amount: 24.00,
        frequency: "Monthly",
        notes: "Marketing tool"
    },
    {
        vendor: "WPMU DEV",
        category: "Infrastructure",
        amount: 126.20,
        frequency: "Semi-annual",
        notes: "WordPress development tools"
    },
    {
        vendor: "Zoho Campaigns",
        category: "Marketing_Tools",
        amount: 7.00,
        frequency: "Monthly",
        notes: "Email marketing platform"
    },
    {
        vendor: "Zoho Corp",
        category: "Software_Subscriptions",
        amount: 40.00,
        frequency: "Monthly",
        notes: "Business software suite"
    },
    {
        vendor: "Zoom",
        category: "Software_Subscriptions",
        amount: 167.90,
        frequency: "Annual",
        notes: "Video conferencing platform"
    }
];

// Create workbook and worksheet
const wb = XLSX.utils.book_new();
const ws = XLSX.utils.aoa_to_sheet([
    ['Vendor', 'Category', 'Amount ($)', 'Frequency', 'Notes']
]);

// Sort expenses by category, then alphabetically by vendor
const sortedExpenses = expenses.sort((a, b) => {
    if (a.category === b.category) {
        return a.vendor.localeCompare(b.vendor);
    }
    return a.category.localeCompare(b.category);
});

// Add data rows
const data = sortedExpenses.map(expense => [
    expense.vendor,
    categories[expense.category].name,
    expense.amount,
    expense.frequency,
    expense.notes
]);

XLSX.utils.sheet_add_aoa(ws, data, {origin: -1});

// Add category descriptions worksheet
const categoryWs = XLSX.utils.aoa_to_sheet([
    ['Category', 'Description']
]);

const categoryData = Object.values(categories).map(cat => [
    cat.name,
    cat.description
]);

XLSX.utils.sheet_add_aoa(categoryWs, categoryData, {origin: -1});

// Add worksheets to workbook
XLSX.utils.book_append_sheet(wb, ws, 'Expense Tracking');
XLSX.utils.book_append_sheet(wb, categoryWs, 'Categories');

// Set column widths
ws['!cols'] = [
    {wch: 20}, // Vendor
    {wch: 25}, // Category
    {wch: 12}, // Amount
    {wch: 15}, // Frequency
    {wch: 50}  // Notes
];

categoryWs['!cols'] = [
    {wch: 25}, // Category
    {wch: 50}  // Description
];

// Write to file
XLSX.writeFile(wb, 'Expense_Tracking_Cheat_Sheet.xlsx');