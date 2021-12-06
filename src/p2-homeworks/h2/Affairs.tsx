import React, {Dispatch, SetStateAction} from "react"
import Affair from './Affair'
import {AffairType, FilterType} from "./HW2"
import s from './Affairs.module.css';

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: Dispatch<SetStateAction<FilterType>>
    deleteAffairCallback: (_id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = (e: React.MouseEvent<HTMLButtonElement>) => {
        props.setFilter(e.currentTarget.value as FilterType)
    } // need to fix
    const setHigh = (e: React.MouseEvent<HTMLButtonElement>) => {
        props.setFilter(e.currentTarget.value as FilterType)
    }
    const setMiddle = (e: React.MouseEvent<HTMLButtonElement>) => {
        props.setFilter(e.currentTarget.value as FilterType)
    }
    const setLow = (e: React.MouseEvent<HTMLButtonElement>) => {
        props.setFilter(e.currentTarget.value as FilterType)
    }

    // const onAll = s.button + ' ' + (props.filter === 'all' ? s.active: '');
    // const onHigh = s.button + ' ' + (props.filter === 'high' ? s.active: '');
    // const onMiddle = s.button + ' ' + (props.filter === 'middle' ? s.active: '');
    // const onlow = s.button + ' ' + (props.filter === 'low' ? s.active: '');
    const setClass = (filter: FilterType) => {
       return s.button + (props.filter === filter ? ' ' + s.active : '')
    }

    return (
        <div>
            {mappedAffairs}
            <button onClick={setAll} className={setClass('all')} value={'all'}>All</button>
            <button onClick={setHigh} className={setClass('high')} value={'high'}>High</button>
            <button onClick={setMiddle} className={setClass('middle')} value={'middle'}>Middle</button>
            <button onClick={setLow} className={setClass('low')} value={'low'}>Low</button>
        </div>
    )
}

export default Affairs
