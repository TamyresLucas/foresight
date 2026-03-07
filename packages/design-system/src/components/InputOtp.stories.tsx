import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
    InputOTPSeparator,
} from './ui/input-otp';

// Wrapper for 4-digit OTP
const InputOTP4Digit = () => (
    <InputOTP maxLength={4}>
        <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
        </InputOTPGroup>
    </InputOTP>
);

// Wrapper for 6-digit OTP
const InputOTP6Digit = () => (
    <InputOTP maxLength={6}>
        <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
        </InputOTPGroup>
    </InputOTP>
);

// Wrapper for disabled OTP
const InputOTPDisabled = () => (
    <InputOTP maxLength={6} disabled>
        <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
        </InputOTPGroup>
    </InputOTP>
);

const meta = {
    title: 'Components/Form Elements/InputOTP',
    component: InputOTP4Digit,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof InputOTP4Digit>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => <InputOTP4Digit />,
};

export const SixDigit: Story = {
    render: () => <InputOTP6Digit />,
};

export const Disabled: Story = {
    render: () => <InputOTPDisabled />,
};
