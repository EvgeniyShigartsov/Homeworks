import { Form, Input, Button } from 'antd'
import { connect } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { loginUser } from '../store/auth.js'

export const SignIn = connect(null, { loginUser })(({ loginUser }) => {
    const history = useHistory()

    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 16,
        },
    }
    const tailLayout = {
        wrapperCol: {
            offset: 8,
            span: 16,
        },
    }

    const onSubmit = ({ username, password }) => {
        loginUser(username, password, history)
    }

    return (
        <Form
            {...layout}
            name="basic"
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

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Login
                </Button>
            </Form.Item>
            <Link to="/signup">Not registered ?</Link>
        </Form>
    )
})
export default SignIn
