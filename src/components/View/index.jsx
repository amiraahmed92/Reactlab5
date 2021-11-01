import { Sup } from "../sup";
export const ViewSup =(props) => {
return (
    <div className="card p-2 m-2" style={{height:"95vh"}}>
        <h1> Posts</h1>
        <button className="btn btn-danger m-2" onClick={props.onDelete}>
            delete posts
        </button>
        {props.sups.map((s ,i)=>(< Sup key={i} title={s.title}/>))}




    </div>
)
}