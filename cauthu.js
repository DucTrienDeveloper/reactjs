import React from 'react'

function CauThu(props) {
    return ( < div >
        <
        h3 > Quocgia: { props.quocgia1 } < /h3> {
        props.Quocgia.filter(function(item, i) {
            return item.Tuoi == 30
        }).map(function(item, i) {
            return <div > < h2 > { item.CauThu } < /h2> <
                /div>
        })
    } < /div>
)
}

export default CauThu;