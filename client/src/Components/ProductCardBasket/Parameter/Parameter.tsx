import React from 'react'

const Parameter = ({ name, value }: any) => {

    return (
        <div className='parameter'>
            <img src={`/image/${name}.svg`} width={18}/>
            <p>{value}</p>
        </div>
    )

}

export default Parameter