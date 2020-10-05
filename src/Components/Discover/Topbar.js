import React from 'react'



const Topbar = () => {

    const data =
    {
        city: "Brussels",
        zone: "Capital",
        area: "2464",
        population: "2",
        quantity: "millions",
        time: "17:05",
        timezone: "GMT+1",
        currency: "Euro"
    }


    return (
        <nav className="topbar">
            <ul>
                <li>
                    {data.city}
                    <small className="text-muted">{data.zone}</small>
                </li>
                <li>
                    {data.area}
                    <small className="text-muted">Area, sq.km</small>
                </li>
                <li>
                    {data.population}
                    <small className="text-muted">Population, {data.quantity}</small>
                </li>
                <li>
                    {data.time}
                    <small className="text-muted">{data.timezone}</small>
                </li>
                <li>
                    {data.currency}
                    <small className="text-muted">Local currency</small>
                </li>
            </ul>
        </nav>
    )
}

export default Topbar
