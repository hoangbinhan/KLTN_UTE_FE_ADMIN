//libs
import React from 'react'
import {Tabs} from 'antd'
import { SettingOutlined, UserOutlined } from '@ant-design/icons';
//components
import ChangePassword from '../ChangePassword'
import Information from '../Information'

const { TabPane } = Tabs;

const DetailStaffTab = () => {
    return (
        <Tabs defaultActiveKey="1">
            <TabPane
                tab={
                    <span>
                    <UserOutlined />
                    Information
                    </span>
                }
                key="1"
            >
                <Information/>
            </TabPane>
            <TabPane
                tab={
                    <span>
                        <SettingOutlined />
                        ChangePassword
                    </span>
                }
                key="2"
            >
                <ChangePassword/>
            </TabPane>
        </Tabs>
    )
}


export default DetailStaffTab
