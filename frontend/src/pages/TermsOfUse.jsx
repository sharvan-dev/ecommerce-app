import React from 'react'

const TermsOfUse = () => {
  return (
    <div className='max-w-5xl mx-auto py-10 px-4 text-gray-700'>
      <h1 className='text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900'>Terms of Use</h1>

      <div className='space-y-6 text-sm md:text-base leading-7'>
        <p>
          This document constitutes a legally binding agreement between you ("User" or "Customer") and Loom Heritage
          Private Limited ("Company", "We", "Us", or "Our"), governing the access to and use of the website located at
          www.loomheritage.com (the "Site") and any commercial transactions conducted thereunder.
        </p>

        <section>
          <h2 className='text-xl font-semibold text-gray-900 mt-8 mb-3'>1. Definitions</h2>
          <ul className='list-disc pl-6 space-y-2'>
            <li><strong>1.1 "Company":</strong> Refers exclusively to Loom Heritage Private Limited, a corporate entity incorporated, registered, and existing under the provisions of the Companies Act, 2013 (or any preceding Indian company law framework), having its registered corporate office situated in India.</li>
            <li><strong>1.2 "Products" or "Goods":</strong> Refers collectively and individually to all physical items, including but not limited to textile materials, garments, apparel, fashion accessories, home furnishings, and handloomed items displayed, cataloged, or offered for retail transaction on the Site.</li>
            <li><strong>1.3 "User" or "Customer":</strong> Refers to any natural person or legal entity accessing, browsing, interacting with, registering an account upon, or placing commercial purchase orders via the Site.</li>
            <li><strong>1.4 "Carrier":</strong> Refers to third-party logistics firms, express courier providers, postal operators, and fulfillment agency partners contracted directly or indirectly by the Company to handle transportation, transit, and final physical delivery of Products.</li>
            <li><strong>1.5 "Intellectual Property Rights":</strong> Refers to all statutory, common law, and registered rights existing worldwide regarding patents, trademarks, service marks, trade names, registered designs, copyrights, domain names, trade secrets, know-how, moral rights, and proprietary technical architecture embedded in or associated with the Site and Products.</li>
          </ul>
        </section>

        <section>
          <h2 className='text-xl font-semibold text-gray-900 mt-8 mb-3'>2. Modification of Terms & Site Access</h2>
          <p><strong>2.1 Right to Amend:</strong> The Company retains the absolute statutory right to modify, revise, amend, insert, or delete any provision contained within these Terms at its sole discretion, without serving individual prior notice to Users. All changes take immediate binding effect upon being rendered publicly accessible on the Site.</p>
          <p><strong>2.2 User Duty:</strong> It remains the sole responsibility of the User to periodically review these Terms for modifications. Continued interaction with, browsing of, or commercial ordering through the Site following the publication of revised Terms constitutes express, unambiguous assent to all revised provisions.</p>
          <p><strong>2.3 Account Registration:</strong> Accessing certain features of the Site requires account creation. The User explicitly covenants to supply true, accurate, current, and complete personal identification data during registration. Supplying false, misleading, or deceptive credentials constitutes a direct material breach of this Agreement.</p>
          <p><strong>2.4 Account Security & Access Control:</strong> The User retains sole responsibility for maintaining credentials confidentiality, including passwords and authentication tokens. The Company bears zero liability for unauthorized transactions, data breaches, or financial losses stemming from User negligence regarding credential security. The Company reserves the right to unilaterally terminate, freeze, or delete accounts suspected of identity impersonation, credentials sharing, or scraping.</p>
        </section>

        <section>
          <h2 className='text-xl font-semibold text-gray-900 mt-8 mb-3'>3. Formation of Contract & Pricing</h2>
          <p><strong>3.1 Invitation to Offer:</strong> Product display listings, descriptions, and price postings on the Site do not constitute a legally binding offer to sell under Section 2 of the Indian Contract Act, 1872. Instead, they represent a mere "invitation to offer". An order submitted by a User constitutes a revocable purchase offer subject to formal acceptance by the Company. Automated order confirmations issued via SMS, email, or messaging apps acknowledge receipt of the offer only and do not establish binding contract formation.</p>
          <p><strong>3.2 Contract Binding:</strong> A legally enforceable contract of sale between the Company and the User comes into existence exclusively when the ordered Product is physically inspected, packaged, assigned a tracking bill, and dispatched from the Company’s fulfillment facility.</p>
          <p><strong>3.3 Pricing Errors & Adjustments:</strong> Product pricing and inventory status remain subject to revision without prior notice. In instances where a Product is listed at an incorrect price due to typographical errors, database glitches, or technical anomalies, the Company reserves the absolute right to decline or cancel any orders placed under the incorrect listing. For prepaid orders canceled under this clause, the Company’s total legal liability is strictly capped at processing a full refund of the exact purchase amount received, issued back to the original payment source within 5 to 7 business days.</p>
        </section>

        <section>
          <h2 className='text-xl font-semibold text-gray-900 mt-8 mb-3'>4. Commercial Use & Quantity Restrictions</h2>
          <p><strong>4.1 Personal End-User Consumption:</strong> Products cataloged on the Site are supplied exclusively for personal, non-commercial retail consumption by end-user consumers. To protect inventory allocation, the Company retains the unilateral right to enforce maximum order limits per individual, household, registered account, payment card, or delivery address.</p>
          <p><strong>4.2 Prohibition of Resale & Commercial Exploitation:</strong> Purchasing Products for commercial resale, unauthorized distribution, drop-shipping, market arbitrage, or systematically acquiring goods through automated bots or scripts is strictly prohibited. The Company reserves the right to unilaterally void and cancel orders identified as violating this anti-commercial resale covenant.</p>
          <p><strong>4.3 Tax Invoicing & Input Tax Credit (ITC):</strong> Invoices compliant with the Central Goods and Services Tax (CGST) Act, 2017, State Goods and Services Tax (SGST) Act, 2017, and Integrated Goods and Services Tax (IGST) Act, 2017, will be generated. Input Tax Credit (ITC) tax invoices will be issued exclusively if the User inputs a valid, verified Goods and Services Tax Identification Number (GSTIN) during checkout prior to transaction processing. Post-dispatch GSTIN modifications or manual tax invoice re-issuances will not be processed.</p>
        </section>

        <section>
          <h2 className='text-xl font-semibold text-gray-900 mt-8 mb-3'>5. Cancellation & Order Fulfillment</h2>
          <p><strong>5.1 Material & Operational Unavailability:</strong> The Company retains the legal right to cancel orders prior to physical dispatch due to raw material non-availability, unexpected stock depletion, or failure to pass internal quality inspection during pre-packing audits.</p>
          <p><strong>5.2 Address Inaccuracy:</strong> The Company reserves the right to decline or cancel order fulfillment if the User provides incomplete, unverified, inaccurate, or unserviceable address details.</p>
          <p><strong>5.3 Risk & Fraud Mitigation:</strong> The Company reserves the right to cancel orders flagged as high-risk, potentially fraudulent, or unserviceable by partner logistics Carriers, fraud-detection algorithms, or payment gateway providers.</p>
        </section>

        <section>
          <h2 className='text-xl font-semibold text-gray-900 mt-8 mb-3'>6. Delivery & Passing of Risk</h2>
          <p><strong>6.1 Transfer of Risk:</strong> In full compliance with Section 26 of the Sale of Goods Act, 1930, risk of loss, physical damage, deterioration, or destruction of the Goods transfers completely from the Company to the User at the precise moment physical custody of the package is delivered to the designated shipping address. Delivery is deemed legally completed upon verification via Carrier logs, digital signature collection, OTP confirmation, or timestamped delivery tracking logs.</p>
          <p><strong>6.2 Delivery Dispute Exclusions:</strong> The Company disclaims liability for theft, package interception, or destruction occurring post-delivery verification by the Carrier. Furthermore, shipping destination details cannot be altered once the order enters dispatch processing.</p>
        </section>

        <section>
          <h2 className='text-xl font-semibold text-gray-900 mt-8 mb-3'>7. Unboxing Evidence Requirement</h2>
          <p><strong>7.1 Verification Mandate:</strong> Due to the physical nature of retail textile logistics, Users are advised to record an unedited, continuous, single-take unboxing video starting from the outer sealed shipping bag/box, clearly showing the intact Carrier shipping label, up through the complete opening and inspection of the internal contents.</p>
          <p><strong>7.2 Claim Adjudication:</strong> In claims alleging missing components, incorrect product fulfillment, transit damage, or physical tampering, the Company reserves the right to mandate the submission of unedited unboxing video evidence as a prerequisite for adjudicating replacements, store credits, or monetary refunds.</p>
        </section>

        <section>
          <h2 className='text-xl font-semibold text-gray-900 mt-8 mb-3'>8. Returns, Exchanges & Quality Audit</h2>
          <p><strong>8.1 Mandatory Return Window:</strong> Requests for return or exchange must be logged through the designated portal on the Site within exactly 7 calendar days from verified physical delivery. Requests logged outside this 7-day period are void and barred.</p>
          <p><strong>8.2 Condition Precedent for Return Acceptance:</strong> Products returned for credit or exchange must remain unworn, unwashed, unaltered, undamaged, and entirely free of odors, makeup, or stains. All original hangtags, barcode labels, dust bags, designer boxes, and original packaging must be returned intact.</p>
          <p><strong>8.3 Non-Returnable Categories:</strong> Tailored garments, customized textiles, intimate wear, innerwear, and items purchased during specific "Clearance", "Final Sale", or deep-discount promotional events are strictly non-returnable and non-exchangeable, except where verified manufacturing defects exist.</p>
          <p><strong>8.4 Warehouse Quality Check (QC) & Rejection:</strong> Returned merchandise is subjected to mandatory physical inspection at the Company’s fulfillment warehouse. If inspection reveals evidence of wear, washing, alteration, scent contamination, missing tags, or deliberate damage, the return will be formally rejected. Rejected items will be re-shipped to the User solely at the User's expense. Items remaining unclaimed for 14 calendar days post-rejection notice shall be deemed abandoned by the User and disposed of without liability or refund obligations.</p>
        </section>

        <section>
          <h2 className='text-xl font-semibold text-gray-900 mt-8 mb-3'>9. Promotional Codes & Discounts</h2>
          <p><strong>9.1 Usage Terms:</strong> Promotional codes, campaign vouchers, and credit points are non-transferable, time-bound, non-redeemable for cash, and limited to single-use per customer account.</p>
          <p><strong>9.2 Refund Recalculation:</strong> When a partial order return occurs on a multi-item purchase made using a bundle discount or promotional code, the full un-discounted retail price of the retained items will be recalculated. The value of the applied promotional discount attributed to returned items shall be forfeited and deducted from the refundable balance.</p>
        </section>

        <section>
          <h2 className='text-xl font-semibold text-gray-900 mt-8 mb-3'>10. Cash on Delivery (COD) Terms</h2>
          <p><strong>10.1 Order Verification:</strong> Cash on Delivery (COD) transactions are conditional upon successful pre-dispatch verification via automated OTP (One-Time Password) verification or IVR phone validation.</p>
          <p><strong>10.2 Service Revocation for Non-Acceptance:</strong> Refusal to accept a COD shipment upon doorstep delivery without valid justification will result in permanent suspension of COD payment privileges for that User account and shipping destination.</p>
          <p><strong>10.3 Refund Processing:</strong> Refunds for approved COD returns shall be issued solely via store credit or electronic bank transfer (NEFT/UPI) to a bank account matching the verified Customer profile name. Physical cash payments will not be issued under any circumstances.</p>
        </section>

        <section>
          <h2 className='text-xl font-semibold text-gray-900 mt-8 mb-3'>11. Textile & Artisanal Disclaimers</h2>
          <p><strong>11.1 Color Variance:</strong> Minor variations in color, hue, saturation, or fabric sheen between online product photographs and physical goods may occur due to studio lighting, digital photography limitations, or user monitor display calibrations. Such variances do not constitute product defects.</p>
          <p><strong>11.2 Artisanal Characteristics:</strong> Products constructed from handloomed textiles, artisanal weaves, or hand-dyed fabrics naturally display subtle structural irregularities, slubs, thread variations, or minor dye shade variations. These characteristics are inherent markers of handcrafted textile processes and are legally recognized as unique product attributes rather than manufacturing faults.</p>
          <p><strong>11.3 Wash & Care Compliance:</strong> The Company disclaims all liability for fabric damage, color bleeding, shrinkage, stretching, or fiber degradation resulting from a User's failure to adhere to specific dry-cleaning or wash-care instructions accompanying the Product.</p>
        </section>

        <section>
          <h2 className='text-xl font-semibold text-gray-900 mt-8 mb-3'>12. Intellectual Property & Takedown Procedure</h2>
          <p><strong>12.1 Ownership:</strong> All creative assets, design patterns, apparel silhouettes, brand logos, copy, digital photography, UI layout, software code, and promotional media hosted on the Site are the exclusive intellectual property of Loom Heritage Private Limited.</p>
          <p><strong>12.2 Prohibited Use:</strong> Unauthorized scraping, copying, replicating, reverse-engineering, commercial distribution, or competitive benchmarking of any Site content or product designs without prior express written consent is prohibited.</p>
          <p><strong>12.3 Safe Harbor & Takedown:</strong> In compliance with Rule 3 of the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, rights holders who believe content on the Site infringes their intellectual property must submit a written notice to the designated Grievance Officer containing ownership proof. The Company will review and execute appropriate administrative takedown action within statutory timeframes.</p>
        </section>

        <section>
          <h2 className='text-xl font-semibold text-gray-900 mt-8 mb-3'>13. Platform Uptime & Limitation of Liability</h2>
          <p><strong>13.1 Service Availability:</strong> The Site is provided strictly on an "as-is" and "as-available" basis. The Company does not warrant that access to the platform, servers, or payment processing networks will remain uninterrupted, fully secure, or error-free. The Company shall not be held liable for cart drop-outs, payment gateway failures, server timeouts, or transaction drops occurring during flash sales or maintenance cycles.</p>
          <p><strong>13.2 Aggregate Liability Cap:</strong> To the maximum extent permitted by applicable Indian law, the total cumulative liability of the Company, its directors, officers, employees, and agents for all claims arising out of or related to the use of the Site or purchase of Products shall be strictly limited to the net purchase price actually paid by the Customer for the specific product item giving rise to the claim.</p>
          <p><strong>13.3 Exclusion of Consequential Damages:</strong> The Company disclaims liability for indirect, incidental, special, punitive, or consequential damages, including commercial loss of profit, business interruption, loss of reputation, loss of data, or mental agony arising from platform usage or product purchase.</p>
        </section>

        <section>
          <h2 className='text-xl font-semibold text-gray-900 mt-8 mb-3'>14. Indemnification</h2>
          <p>
            The User agrees to defend, indemnify, and hold harmless Loom Heritage Private Limited, its parent entity,
            directors, officers, employees, logistics partners, and agents from and against all third-party claims,
            legal demands, liabilities, damages, operational losses, court expenses, and legal fees resulting from the
            User’s breach of these Terms, violation of applicable statutory laws, or infringement of third-party
            intellectual property or privacy rights.
          </p>
        </section>

        <section>
          <h2 className='text-xl font-semibold text-gray-900 mt-8 mb-3'>15. Force Majeure</h2>
          <p>
            Neither party shall be held liable for failure or delay in fulfilling performance obligations (excluding
            monetary payment obligations) if such failure stems from a Force Majeure Event beyond reasonable operational
            control. Force Majeure Events include, but are not limited to: Acts of God, floods, earthquakes, fires,
            epidemics, pandemics, government emergency declarations, import/export blockades, trade embargoes, civil
            unrest, labor strikes, national logistics failures, cyber-attacks, or widespread payment gateway
            infrastructure breakdowns. If a Force Majeure Event continues unabated for more than 45 consecutive calendar
            days, either party may terminate unfulfilled orders, with prepaid balances refunded in full.
          </p>
        </section>

        <section>
          <h2 className='text-xl font-semibold text-gray-900 mt-8 mb-3'>16. General Legal Provisions</h2>
          <p><strong>16.1 Severability:</strong> If any provision of these Terms is adjudicated to be invalid, illegal, or unenforceable by a court or tribunal of competent jurisdiction, such invalidity shall affect only that specific clause. The remaining provisions shall continue in full force and effect.</p>
          <p><strong>16.2 Entire Agreement:</strong> These Terms, together with the Privacy Policy, Return & Refund Guidelines, and operational policies published on the Site, constitute the complete, integrated, and exclusive agreement between the User and the Company regarding Site usage and sales transactions, superseding all prior communications, proposals, or understandings.</p>
          <p><strong>16.3 Non-Waiver:</strong> Failure or delay by the Company to enforce any right, power, or legal remedy under these Terms shall not operate as a waiver of that right, nor shall a single or partial exercise preclude further enforcement of any other contractual right.</p>
        </section>

        <section>
          <h2 className='text-xl font-semibold text-gray-900 mt-8 mb-3'>17. Dispute Resolution, Governing Law & Arbitration</h2>
          <p><strong>17.1 Governing Law:</strong> These Terms, their interpretation, construction, and all non-contractual obligations arising out of them shall be governed exclusively by the substantive statutory laws of the Republic of India.</p>
          <p><strong>17.2 Binding Arbitration:</strong> In the event of any dispute, claim, or controversy arising out of or relating to these Terms, including disputes regarding validity, breach, or termination, the parties agree to resolve the dispute through binding arbitration under the provisions of the Arbitration and Conciliation Act, 1996. The arbitration shall be conducted by a Sole Arbitrator mutually appointed by the Company and the User. The seat and venue of arbitration shall be New Delhi, India, and all proceedings shall be conducted in the English language.</p>
          <p><strong>17.3 Court Jurisdiction:</strong> Subject to arbitration proceedings under Section 17.2 and mandatory statutory remedies under the Consumer Protection Act, 2019, the competent civil courts situated exclusively in New Delhi, India, shall possess exclusive jurisdiction over all legal disputes arising hereunder.</p>
        </section>

        <section>
          <h2 className='text-xl font-semibold text-gray-900 mt-8 mb-3'>18. Statutory Compliance & Grievance Redressal</h2>
          <p>
            In compliance with Rule 3(2) of the Information Technology (Intermediary Guidelines and Digital Media Ethics
            Code) Rules, 2021, Rule 4(5) of the Consumer Protection (E-Commerce) Rules, 2020, and the Digital Personal
            Data Protection Act, 2023, the contact details of the statutory Grievance Officer are set forth below:
          </p>

          <div className='mt-4 border rounded-lg p-4 bg-gray-50'>
            <p><strong>Statutory Designation:</strong> Grievance Officer</p>
            <p><strong>Name:</strong> Nandini Rajbhar </p>
            <p><strong>Designation:</strong> Head of Legal & Compliance</p>
            <p><strong>Corporate Entity:</strong> Partnership Firm</p>
            <p><strong>Registered Address:</strong> Shivnandanpur, Bishrampur, Dist. Surajpur, Chhattisgarh, 497226 India</p>
            <p><strong>Contact Email:</strong> info.loomheritage.com@gmail.com</p>
            <p><strong>Contact Phone:</strong> +91 7800133604</p>
            <p><strong>Service Timelines:</strong> Grievance Acknowledgment: within 48 hours; Complete Grievance Resolution: within 30 calendar days.</p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default TermsOfUse
