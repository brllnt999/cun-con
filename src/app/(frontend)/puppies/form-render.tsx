'use client'
import { Button, Drawer } from '@heroui/react'

export function PuppyForm({ children, id }: { children: React.ReactNode; id: string }) {
  return (
    <Drawer>
      <Button variant="primary" size="lg">
        Liên hệ
      </Button>
      <Drawer.Backdrop>
        <Drawer.Content placement="top">
          <Drawer.Dialog>
            {/* <Drawer.Header>
              <Drawer.Heading>Liên hệ</Drawer.Heading>
            </Drawer.Header> */}
            <Drawer.Body className="flex items-center justify-center w-full h-full">
              {children}
            </Drawer.Body>
          </Drawer.Dialog>
        </Drawer.Content>
      </Drawer.Backdrop>
    </Drawer>
  )
}
