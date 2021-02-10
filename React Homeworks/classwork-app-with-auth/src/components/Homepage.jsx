import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { LogOutBtn } from './LogOutBtn'
import { setList } from '../store/list.js'

const mapStateToProps = (state) => ({ listItems: state.list.listItems })

export const Homepage = connect(mapStateToProps, { setList })(({ setList }) => {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    useEffect(() => setList(), [])

    const onSubmitHandler = () => {}
    return (
        <div>
            <h1>Homepage</h1>

            <form onSubmit={onSubmitHandler} style={{ marginBottom: '30px' }}>
                <input value={title} onChange={(e) => setTitle(e.target.value)} name="title" type="text" />
                <input value={price} onChange={(e) => setPrice(e.target.value)} name="price" type="text" />
                <button type="submit">Create</button>
            </form>

            <LogOutBtn />
        </div>
    )
})
export default Homepage
