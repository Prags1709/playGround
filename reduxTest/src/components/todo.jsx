
let arr = [
    {id:1, subject:"Math"},
    {id:2, subject:"Node.js"},
    {id:3, subject:"React.js"},
]

export const Todo = ()=>{

    return (
        <div>
            {arr.map((ele, i)=>{
                return <div className="dataBox" key={ele.id+i}>
                    <h3>{ele.id}</h3>
                    <h4>{ele.subject}</h4>
                    <button>Delete</button>
                </div>
            })}
        </div>
    )
}