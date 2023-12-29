export async function Calculator (req: any, res: any){
    const purchasePrice = req.body.purchasePrice;
    const monthlyRent = req.body.monthlyRent;
    const annualRentalFee = req.body.annualRentalFee;

    const annualRent = monthlyRent * 12;
    const annualIncome = annualRent - annualRentalFee;

    const agencyFees1 = annualIncome * 0.3
    const agencyFees2 = annualIncome * 0.25
    const agencyFees3 = annualIncome * 0.20

    const roiY1 = (((annualIncome - agencyFees1)/purchasePrice) * 100).toFixed(2);
    const roiY2 = (((annualIncome - agencyFees2)/purchasePrice) * 100).toFixed(2);
    const roiY3 = (((annualIncome - agencyFees3)/purchasePrice) * 100).toFixed(2);

    const overallROI = ((((annualIncome - agencyFees1) + (annualIncome - agencyFees2) + (annualIncome - agencyFees3)) / purchasePrice) * 100).toFixed(2);
    
    res.json({
        roiY1,
        roiY2,
        roiY3,
        overallROI
    });
}
export default Calculator