# 🌐 Zaplof — Brand Portfolio Website

**Zaplof** is a creative brand portfolio showcasing projects, services, and assets built under the Zaplof brand. It highlights agency-level digital work, including WordPress websites, marketing services, and web app development — all in one interactive React-based interface.

---

## 🎨 Overview

Zaplof serves as a central hub for displaying brand identity, client projects, and offered services.  
The repository also contains:

- **Frontend** – Main portfolio website built in React.  
- **Dashboard/Panel** – Admin or management interface (planned or included).  
- **Posters** – Visual marketing and promotional assets.  
- **Assets** – Logos, images, icons, and other brand files.

---

## 🚀 Features

### 🧩 Portfolio Highlights
Showcases real client projects across multiple industries with detailed descriptions, features, and tech stacks:
- **Adzzly** – Brand portfolio site built with WordPress, GSAP, and Framer.  
- **Bids Estimating** – Construction estimating website with Elementor and PHP.  
- **AMW Fire Management** – WordPress rebuild for a UAE-based firm.  
- **Simply Divines** – U.S. service business website with custom HTML/CSS integration.  
- **Loan Expert** – FinTech landing page with a dynamic loan application form.

### 💼 Services Offered
Visual grid displaying Zaplof’s primary digital services:
- SEO  
- Social Media Marketing  
- WordPress  
- Shopify  
- Mobile App Development  
- Custom Full Stack Apps  
- Desktop Apps  

### 🎥 Visual Assets
All projects and services use dynamically imported images and icons for optimized loading:
```js
import.meta.glob('../assets/projects/*.png')
import.meta.glob('../assets/services/*.svg')
