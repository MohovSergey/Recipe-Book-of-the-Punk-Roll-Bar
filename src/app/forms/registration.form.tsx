import { Form } from "@heroui/form";
import { Input } from "@heroui/input";


const RegistrationForm = () => {
    return (
        <Form className="w-full" onSubmit={handleSubmit}>
            <Input
                aria-label="Email"
                isRequired
            />
            
        </Form>
    );
};

export default RegistrationForm;