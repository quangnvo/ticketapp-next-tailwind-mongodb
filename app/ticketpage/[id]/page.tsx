import React from 'react'

const TicketPage = ({ params }: { params: { id: string } }) => {
    return (
        <div>
            <p>TicketPage {params.id}</p>
        </div>
    )
}

export default TicketPage