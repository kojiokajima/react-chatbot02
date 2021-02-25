import { makeStyles } from '@material-ui/core'
import React from 'react'
import {Answer} from './index'

const useStyles = makeStyles(() => {
    
})

const AnswersList = (props) => {
    const classes = useStyles()

    return (
        <div className="c-grid__answer">
            {props.answers.map((value, index) => {
                return <Answer content={value.content} nextId={value.nextId} key={index.toString()} select={props.select} />
            })}
        </div>
    )
}

export default AnswersList