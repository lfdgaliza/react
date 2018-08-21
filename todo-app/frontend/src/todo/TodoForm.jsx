import React from 'react'
import Grid from '../template/Grid'
import IconButton from '../template/IconButton';

export default props => (
    <div role="form" className="todoForm">

        <Grid cols="12 9 10">
            <input type="text" id="description"
                className="form-control" placeholder="Adicione uma tarefa"
                value={props.description} onChange={props.handleChange} />
        </Grid>

        <Grid cols="12 3 2">
            <IconButton onClick={props.handleAdd}></IconButton>
        </Grid>
    </div>
) 