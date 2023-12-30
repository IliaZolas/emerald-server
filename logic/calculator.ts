export async function Calculator (req: any, res: any){
    const purchasePrice = parseFloat(req.body.purchasePrice);
    const monthlyRent = parseFloat(req.body.monthlyRent);
    const annualRentalFee = parseFloat(req.body.annualRentalFee);

    if (
        isNaN(purchasePrice) ||
        isNaN(monthlyRent) ||
        isNaN(annualRentalFee) ||
        purchasePrice <= 0 ||
        monthlyRent <= 0 ||
        annualRentalFee < 0
    ) {
        return res.status(400).json({ error: 'Invalid input. Please enter valid numeric values.' });
    }

    const annualRent = monthlyRent * 12;
    const annualIncome = annualRent - annualRentalFee;

    const agencyFees1 = annualIncome * 0.3;
    const agencyFees2 = annualIncome * 0.25;
    const agencyFees3 = annualIncome * 0.20;

    const overallROI = ((((annualIncome - agencyFees1) + (annualIncome - agencyFees2) + (annualIncome - agencyFees3)) / purchasePrice) * 100).toFixed(2);
    
    res.json({
        overallROI
    });
}
export default Calculator