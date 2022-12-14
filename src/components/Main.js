import Survey from "./Survey";
import img1 from '../images/camp-lejeune-map.jpg'
import img2 from '../images/approved.jpg'

export default function Main() {
    return (<div id="main">
        <header id="main-header"><span> ATTENTION! </span> Did you serve, live or work at Marine Corps Base Camp Lejeune, North Carolina between <span>August 1953, and December 1987?</span> <span>You may be entitled to compensation.</span></header>
        <div></div>
        <div id="image-block">
            <div> <p>AFFECTED DUE TO CAMP LEJEUNE TOXIC WATER?</p></div>
            <div id="image-div">
                <img src={img2} alt="approvedimg" />
                <img src={img1} alt="globalmap" />
            </div>
            <div><p>Hope For Victims</p></div>
        </div>
        <p>U.S Veterans, their family members or others may have been exposed to contaminated drinking water between 1953 and 1987 at Camp Lejeune, Noth Carolina and developed cancer or other serious health issues year later. Some of these servicemen, families or others present at the base have been deemed ineligible or had their claim denied by the Veterans Administration, but a new law may allow them compensation.</p>
        <Survey />

    </div>)

}