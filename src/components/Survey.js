import { useState } from 'react'

var lastindex = 0;
export default function Survey() {
    const [loading, setLoading] = useState("");
    const [para, setPara] = useState(0);
    const paraDiv = ['Did you or a loved one serve, live, or work at Camp lejeune for at least 30 days between 1953 and 1987? *', 'Did you or a family member who lived with you experience any serious health illness or injuries like cancer, organ failure, reproductive issues, death or other? *', 'Is the affected party represented by an attorney for this matter? *'];

    const loadingDiv = ['Reviewing Your Answers...', 'Matching You with the Best Options...', 'Confirming Eligibility...'];

    const handleClick = () => {
        setPara(para + 1);
        if (para === 2) {
            setInterval(() => {
                setLoading(loadingDiv[lastindex]);
                lastindex++;
            }, 2000);
        }
    }

    const contactElement = (<div id='maincontactdiv'>
        <div id='eligible'>Last Step - You are eligible and qualify for compensation</div>
        <span id='callheading'>FREE CONSULTATION CALL</span>
        <p>There are absolutely NO costs or commitments incurred for calling and talking to our legal team.</p>
        <h1><b>TAP TO CALL</b></h1>
        <button>+1(346) 799-6952</button>
        <p id='terms-cond'>By clicking the button above and calling, you provide your electronic signature & consent to receive automated promotional messafes from At Camp Lejeune Settlement & its partners at the phone number you call from. You agree to the <a href="/#">Terms & Conditions</a> and <a href="/#">Privacy Policy</a>. This agreement isn't a condition of any purchase. You can revoke this consent at any time. For SMS campaigns: Text STOP to cancel and HELP for help message and data rates may apply. Recurring msgs up to 10 msgs per month.</p>
    </div>)



    const buttonElement = (<div id='buttondiv'>
        <button onClick={handleClick}>No</button>
        <br />
        <button onClick={handleClick}>Yes</button>
    </div>)

    return <div id='mainsurveydiv'>
        <div>Take this short quick survey if you qualify</div>
        {(para < 3 && <div id='paradiv'> <div id='content'> {paraDiv[para]}</div> {buttonElement}</div>) || (lastindex < 3 && para >= 3 ? <span id='loadingdiv'>{loading}</span> : <div> {contactElement}
        </div>)}
        <hr />
    </div>
}
