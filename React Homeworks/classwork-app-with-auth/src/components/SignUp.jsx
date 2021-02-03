import { Form, Input, Button } from 'antd'
import { connect } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'

import { createUser } from '../store/auth.js'

export const SignUp = connect(null, { createUser })(({ createUser }) => {
    const history = useHistory()
    const layout = {
        labelCol: {
            span: 10,
        },
        wrapperCol: {
            span: 14,
        },
    }
    const tailLayout = {
        wrapperCol: {
            offset: 8,
            span: 16,
        },
    }

    const onSubmit = ({ username, password }) => {
        createUser(username, password, history)
    }

    return (
        <Form
            {...layout}
            name="signUp"
            initialValues={{
                remember: true,
            }}
            onFinish={onSubmit}
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                    { message: 'Password must be longer than 8 chararters!', min: 8 },
                ]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item
                label="Password confrim"
                name="password confrim"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                    { message: 'Password must be longer than 8 chararters!', min: 8 },
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Register
                </Button>
            </Form.Item>
            <Link to="/signin">Already registered ?</Link>
        </Form>
    )
})
export default SignUp
