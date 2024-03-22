import React from 'react';
import { Button, Container, Input } from '@/components';

import './style.css'

export default function UIPage() {
    return (
        <Container.Root>
            <Container.AutoWidthSize className='ui-page'>
                <div className='ui-page-item'>
                    <h1>UI Buttons - Main variants</h1>
                    <div className='ui-page-grid'>
                        <Button.Root variant='primary' size='medium'>Primary</Button.Root>
                        <Button.Root variant='sub-primary' size='medium'>Sub-Primary</Button.Root>
                        <Button.Root variant='secondary' size='medium' >Secondary</Button.Root>
                        <Button.Root size='medium'>Default</Button.Root>
                        <Button.Root variant='disabled' size='medium' >Disabled</Button.Root>
                    </div>
                </div>
                <div className='ui-page-item'>
                    <h1>UI - Buttons - System variants</h1>
                    <div className='ui-page-grid'>
                        <Button.Root variant='destruct-primary' size='medium'>Destruct Primary</Button.Root>
                        <Button.Root variant='destruct-secondary' size='medium'>Destruct Secondary</Button.Root>
                        <Button.Root variant='success-primary' size='medium'>Success Primary</Button.Root>
                        <Button.Root variant='success-secondary' size='medium'>Success Secondary</Button.Root>
                        <Button.Root variant='warning-primary' size='medium'>Warning Primary</Button.Root>
                        <Button.Root variant='warning-secondary' size='medium'>Warning Secondary</Button.Root>
                    </div>
                </div>
                <div className='ui-page-item'>
                    <h1>UI Buttons - Sizes</h1>
                    <div className='ui-page-grid'>
                        <Button.Root variant='primary' size='small'>Small</Button.Root>
                        <Button.Root variant='primary' size='medium'>Medium</Button.Root>
                        <Button.Root variant='primary' size='large'>Large</Button.Root>
                    </div>
                </div>
                <div className='ui-page-item'>
                    <h1>UI Input</h1>
                    <div className='ui-page-grid'>
                        <Input.Root placeholder='Placeholder' type='text' />
                    </div>
                </div>
            </Container.AutoWidthSize>
        </Container.Root>
    )
}