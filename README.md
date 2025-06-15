# 💼 Specifi Profit Optimiser — Frontend (Nuxt 3)

This is the frontend for the **Specifi Profit Optimiser**, built using [Nuxt 3](https://nuxt.com) and Vue 3.

It allows AV dealers to input quote data, view profitability calculations, receive AI-driven suggestions, and export professional reports.

---

## ✨ Features

- 🔧 **Quote Builder**
  - Add products/services with quantity, cost, and sell price
  - Enter labor hours, cost/hour, fixed overheads
  - Set target profit margin

- 📊 **Profitability Analysis**
  - Calculates gross profit, margin, and health (Green, Amber, Red)
  - Flags underperforming quotes

- 🤖 **AI Suggestions (OpenAI)**
  - Suggests pricing, product swaps, or labor adjustments
  - Writes summaries in client-friendly language

- 📦 **Product Catalog View**
  - Displays available product list (fetched from backend)

- 📤 **Export Tools**
  - Download quote summary as PDF or CSV

---

## ⚙️ Project Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-org/profit-frontend.git
cd profit-frontend

### 2. Install Dependencies
npm install 

### 🚀 Development
Start the dev server:
npm run dev

### 📦 Build & Preview (Production)
npm run build

### 🛠 Technologies
Nuxt 3
Vue 3
Tailwind CSS
OpenAI API