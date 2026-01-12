# API Automation Project (Cypress)

![CI](https://github.com/007will/API_Automation_Project_Cypress/actions/workflows/ci.yml/badge.svg)

Project focused on API automation using Cypress (or similar), with examples of contract validation, mocking and reusable test utilities. Designed to demonstrate API test design and integration with CI reporting.

Quickstart
- Install: `npm ci`
- Run: `npm run test:ci`

What to review
- API test organization, use of fixtures/mocks, CI artifact generation.

Author: José Willams — https://github.com/007will
# 🧪 API Automation Project — Cypress

![Cypress](https://img.shields.io/badge/Cypress-API%20Automation-green?logo=cypress)
![API Testing](https://img.shields.io/badge/API-Testing-blue)
![QA](https://img.shields.io/badge/Quality-Assurance-brightgreen)
![CI Ready](https://img.shields.io/badge/CI%2FCD-Ready-success)

## 📌 Overview

This repository contains an **API Test Automation project built with Cypress**, focused on validating REST APIs through automated test scenarios, assertions, and reusable test structures.

The project was designed to demonstrate **QA Engineering best practices**, including:

- API automation using Cypress
- Clean test organization
- Reusable commands and data
- Readiness for CI/CD pipelines

---

## 🎯 Project Goals

- Validate API endpoints using automated tests
- Ensure response integrity (status codes, body, headers)
- Cover positive and negative scenarios
- Demonstrate professional QA automation structure
- Serve as a portfolio project for QA / QE roles

---

## 📁 Project Structure

```bash
API_Automation_Project_Cypress/
├── cypress/
│   ├── e2e/
│   │   └── api/
│   │       └── api-tests.cy.js   # API test scenarios
│   ├── fixtures/
│   │   └── apiData.json          # Test data and payloads
│   ├── support/
│   │   ├── commands.js           # Custom API commands
│   │   └── e2e.js                # Global configurations
├── cypress.config.js             # Cypress configuration
├── package.json                  # Dependencies and scripts
└── README.md                     # Documentation

🚀 Requirements

To run this project, you need:

Node.js (LTS recommended)

npm or yarn

⚙️ Installation

Clone the repository:

git clone https://github.com/007will/API_Automation_Project_Cypress.git
cd API_Automation_Project_Cypress


Install dependencies:

npm install
# or
yarn install

▶️ Running the Tests
Interactive mode (Cypress UI)
npx cypress open

Headless mode (CLI / CI)
npx cypress run

🧪 Test Coverage

The automated tests validate:

HTTP status codes

Response body structure

Business rules validation

Error handling and negative scenarios

API contract consistency

Examples of validations include:

Successful responses (200, 201)

Client errors (400, 404)

Server errors (500)

Required fields validation

🛠️ Custom Commands

Custom commands are defined in:

cypress/support/commands.js


These commands improve:

Code reuse

Test readability

Maintenance scalability

📦 Test Data

Test data and payloads are stored in:

cypress/fixtures/apiData.json


This approach allows:

Separation of data from logic

Easy maintenance

Reusability across multiple tests

🔄 CI/CD Ready

This project is structured to be easily integrated with:

GitHub Actions

Azure DevOps Pipelines

GitLab CI

A CI pipeline only needs to run:

npm install
npx cypress run

🎯 Portfolio Value

This repository demonstrates:

API automation expertise

Cypress beyond UI testing

QA Engineering mindset

Professional project documentation

Test scalability and maintainability

👤 Author

José Willams
Quality Assurance • Test Automation • API Testing

🔗 GitHub: https://github.com/007will

🔗 LinkedIn: https://linkedin.com/in/007will
