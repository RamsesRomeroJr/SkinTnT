import OpeningOpen from "../OpeningOpen"
import OpeningClosed from "../OpeningClosed"


const Openings = ({Openings}) =>{
    const open = [];
    const closed = [];
    //map through openings to check userId null or not
    //if null go to OpeningOpen compnent
    //not null go to OpeningClosed
    // const checking = Openings.map( opening => {
    //     if(opening.userId === null){
    //         open.push(opening)
    //     }
    //     else if(opening.userId !== null){
    //         closed.push(opening)
    //     }
    // })
    {console.log(Openings)}
    return (
        <div>
            <div id="Opening-Dropdown">
                <OpeningOpen Opening = {open} />
            </div>
            <div id="Openings-closed">
            <OpeningClosed Opening = {closed} />
            </div>

        </div>
    )
}

export default Openings;
