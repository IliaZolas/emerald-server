# Emerald Calculator - Backend

This is the backend of a simple calculator that determines the ROI of managing a property with Emerald Stay. To see the frontend repo, click [here](https://github.com/IliaZolas/emerald-client).

## How is ROI Calculated? 📝

In the case of this project, 3 inputs and 1 parameter was provided:

Inputs
- Purchase price of the property
- Monthly rent amount
- Annual rental fee

Restrictions
- Agency fees on the rent: 1st year 30%, 2nd year 25%, then 20% for the following years.

This is how the logic was calculated:


```
Annual Income = (Monthly Rent * 12) - Annual rental fees

Agency Fees Year 1 = Annual Income * 30%
Agency Fees Year 2 = Annual Income * 25%
Agency Fees Year 3 = Annual Income * 20%

ROI Y1= ((Annual Income - Agency Fees Year 1) / Purchase Price) * 100
ROI Y2= ((Annual Income - Agency Fees Year 2) / Purchase Price) * 100
ROI Y3= ((Annual Income - Agency Fees Year 3) / Purchase Price) * 100

Overall ROI = (((Annual Income - Agency Fees Year 1) + (Annual Income - Agency Fees Year 2) + (Annual Income - Agency Fees Year 3)) / Purchase Price ) * 100
```
The calculator can be found in its own folder called "logic".

## How to get started with the backend 🚩

The backend app is built with:

- Node
- Express

To get started, clone this repo and cd into the app directory and install the app dependancies.

```bash
cd server
npm install
```

Once completed, you should be able to launch the backend on localhost:4000

```bash
npm run dev
```

## App architecture - Microservices ⚙️

As this app has been built with microservices in mind, you will need to clone and configure the client repo in order to have a functioning app.

Clone the client repo [here](https://github.com/IliaZolas/emerald-client).

## Project Management 🚧

This project was managed using [Linear](https://linear.app/) and was synced with Github for automated issue and pull request tracking.

## Hosting

This application is hosted on [Railway.app](https://railway.app/), one of my favourite hosting providers. Both client and server repos are hosted seperately from each other.

## Conclusion 👨‍🚀

I enjoyed building this project and have some thoughts on how it could be more practical

- User should be able to input a desired time period
- Error margin could be considered regarding fluctuation in market
- Deeper sanitisation could be implemented
- Refactoring of calculator logic

Thank you for your time. If you are satisfied with this application, please get in touch!

Ilia 🍻

