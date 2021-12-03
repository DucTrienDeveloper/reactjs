import React from 'react'
import { useState } from 'react';
import CauThu from './component/CauThu'
import { cauthu } from './fake/cauthu';



function App() {
    const [list, setList] = useState(cauthu)
    return ( < div > {
            list.map(
                function(item, i) {
                    return <CauThu quocgia1 = { item.quoc_gia }
                    Quocgia = { item.danh_sach }
                    /> 
                }
            )
        } < /div>

    )
}

export default App