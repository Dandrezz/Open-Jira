import { InboxOutlined, MailOutlineOutlined } from '@mui/icons-material'
import { Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'

const menuItems: string[] = ['Inbox', 'Stanrred', 'Send Email', 'Draft']

export const Sidebar = () => {


    return (
        <Drawer
            anchor='left'
            open={true}
            onClose={() => console.log('cerrando')}
        >
            <Box sx={{ width: 250 }}>
                <Box sx={{ padding: '5px 10px' }}>
                    <Typography variant='h4'>Menu</Typography>
                </Box>
                <List>
                    {
                        menuItems.map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>
                                    {index % 2 ? <InboxOutlined /> : <MailOutlineOutlined /> }
                                </ListItemIcon>
                                <ListItemText primary={ text }/>
                            </ListItem>
                        ))
                    }
                </List>

                <Divider />

                <List>
                    {
                        menuItems.map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>
                                    {index % 2 ? <InboxOutlined /> : <MailOutlineOutlined /> }
                                </ListItemIcon>
                                <ListItemText primary={ text }/>
                            </ListItem>
                        ))
                    }
                </List>


            </Box>
        </Drawer>
    )
}