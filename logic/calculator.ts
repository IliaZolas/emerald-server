export async function Calculator (req: any, res: any){
    // create calculator logic
    const purchasePrice = req.body.purchasePrice;
    const monthlyRent = req.body.monthlyRent;
    const annualRentalFee = req.body.annualRentalFee;
    console.log("vars", purchasePrice, monthlyRent, annualRentalFee)

    const annualRent = monthlyRent * 12;
    console.log("annual rent",annualRent)

    // Annual Income = (Monthly Rent * 12) -  Annual rental fees
    const annualIncome = annualRent - annualRentalFee;
    console.log("annual income",annualIncome)

    // Agency Fees Year 1 =  Annual Income * 30%
    const agencyFees1 = annualIncome * 0.3
    console.log("agency fee 1",agencyFees1)

    // Agency Fees Year 2 =  Annual Income * 25%
    const agencyFees2 = annualIncome * 0.25
    console.log("agency fee 2",agencyFees2)

    // Agency Fees Year 3 =  Annual Income * 20%
    const agencyFees3 = annualIncome * 0.20
    console.log("agency fee 3",agencyFees3)

    // ROI Y1= ((Annual Income - Agency Fees Year 1) / Purchase Price) * 100
    const roiY1 = (((annualIncome - agencyFees1)/purchasePrice) * 100).toFixed(2);
    console.log("roi year 1",roiY1)
    // ROI Y2= ((Annual Income - Agency Fees Year 2) / Purchase Price) * 100
    const roiY2 = (((annualIncome - agencyFees2)/purchasePrice) * 100).toFixed(2);
    console.log("roi year 2",roiY2)
    // ROI Y3= ((Annual Income - Agency Fees Year 3) / Purchase Price) * 100
    const roiY3 = (((annualIncome - agencyFees3)/purchasePrice) * 100).toFixed(2);
    console.log("roi year 3",roiY3)
    // Overall ROI = ((Annual Income - Agency Fees Year 1 - Agency Fees Year 2 - Agency Fees Year 3) / Purchase Price) * 100
    const overallROI = ((((annualIncome - agencyFees1) + (annualIncome - agencyFees2) + (annualIncome - agencyFees3)) / purchasePrice) * 100).toFixed(2);
    console.log("roi overall", overallROI)
    // Send the results to the front end
    res.json({
        roiY1,
        roiY2,
        roiY3,
        overallROI
    });
}
export default Calculator