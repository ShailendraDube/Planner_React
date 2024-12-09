import Card from "./Card";

function Tours({tours,removebtn,}) {
    
    return(
        <div className="container">

            <div className="heading-ka-div">
                <h2 className="title">Plan With Love</h2>
            </div>

            <div className="card-ka-div">
                {
                    tours.map( (tour) => {
                        {/* ...tour is basically used to create copy 
                        or duplicate for it */}
                        {/* we have passed id because as an good practice whenever we are using 
                        map function we have to pass any unique is or if there is not any unique
                        id then we can pass index in it */}
                        return <Card key={tour.id} {...tour} removebtn = {removebtn}></Card>
                    })
                }
            </div>
        </div>
    )
}

export default Tours;