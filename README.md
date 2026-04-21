# Amber Enterprises SAP MM Procure-to-Pay (P2P) Simulator

## Overview

This project is a web-based simulator of the **SAP MM Procure-to-Pay (P2P)** business process developed as a capstone project for the **SAP BTP Developer Program**.

It is based on the procurement workflow of **Amber Enterprises (India) Ltd.** and demonstrates practical understanding of SAP Materials Management (MM) transaction flow in the absence of direct SAP system access.

---

## Objective

To simulate the complete procurement lifecycle in SAP ERP, starting from vendor and material creation to final vendor payment.

---

## Modules Implemented

| SAP T-Code | Description                  |
| ---------- | ---------------------------- |
| XK01       | Create Vendor Master         |
| MM01       | Create Material Master       |
| ME51N      | Create Purchase Requisition  |
| ME41       | Create Request for Quotation |
| ME21N      | Create Purchase Order        |
| MIGO       | Goods Receipt Posting        |
| MIRO       | Invoice Verification         |
| F-53       | Vendor Payment               |

---

## Procure-to-Pay Workflow

Requirement Identification → Purchase Requisition → RFQ → Vendor Selection → Purchase Order → Goods Receipt → Invoice Verification → Vendor Payment

---

## Tech Stack

* Frontend: HTML, CSS, JavaScript
* Backend: Node.js
* Framework: Express.js
* IDE: Visual Studio Code

---

## How to Run the Project

```bash id="b4p9ww"
npm install
node server.js
```

Open browser:

```text id="s80pkw"
http://localhost:5000
```

---

## Features

* SAP ERP styled dashboard
* Interactive transaction pages
* Professional UI design
* SAP MM learning simulator
* End-to-end P2P process flow

---

## Submitted By

**Name:** Seerat Kohli 
**Roll Number:** 23053681
**Program/Batch:** SAP BTP Developer
