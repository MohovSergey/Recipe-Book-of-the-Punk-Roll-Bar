'use client';

import { Form } from "@heroui/form";
import { Input } from "@heroui/input";
import { Button } from "@heroui/react";
import { useState } from "react";

interface ModalProps {
    onClose: () => void;
}

const LoginForm = ({onClose}: ModalProps) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted', formData);
        onClose();
    }

    return (
        <Form className="w-full" onSubmit={handleSubmit}>
            <Input
                aria-label="Email"
                isRequired
                name="email"
                placeholder="введите адрес электронной почты"
                type="email"
                value={formData.email}
                classNames={{
                    inputWrapper: 'bg-default-100',
                    input: 'text-sm focus: outline-none'
                }}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                validate={(value) => {
                    if(!value) return 'Почта обязательна';
                    return null;
                }}
            />
            <Input
                aria-label='Password'
                isRequired
                name="password"
                placeholder="введите пароль"
                type="password"
                value={formData.password}
                classNames={{
                    inputWrapper: 'bg-default-100',
                    input: 'text-sm focus: outline-none'
                }}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                validate={(value) => {
                    if(!value) return 'Пароль обязателен';
                    return null;
                }}
            />

            <div className="flex w-full gap-4 items-center pt-8 justify-end"></div>
            <Button variant="light" onPress={onClose}>
                Отмена
            </Button>
            <Button color="primary" type="submit">
                Войти
            </Button>

            
        </Form>
    );
};

export default LoginForm;