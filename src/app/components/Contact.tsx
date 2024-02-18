import emailjs from "@emailjs/browser";
import { Card, Input, Textarea } from "@nextui-org/react";
import { useRef, useState, type FormEvent } from "react";
import { toast } from "sonner";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  const validateForm = (): boolean => {
    const newErrors = { name: "", email: "", message: "" };
    let formIsValid = true;

    if (name.length === 0) {
      formIsValid = false;
      newErrors.name = "No se permiten campos vacíos";
    }

    if (email.length === 0 || !email.includes("@")) {
      formIsValid = false;
      newErrors.email = "Por favor, introduce un correo electrónico válido";
    }

    if (message.length === 0) {
      formIsValid = false;
      newErrors.message = "No se permiten campos vacíos";
    }

    setErrors(newErrors);
    return formIsValid;
  };
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent): void => {
    e.preventDefault();
    if (form.current != null && validateForm()) {
      const promise = emailjs
        .sendForm(
          "service_hie27kx",
          "template_00nbtzs",
          form.current,
          "aQwAg3DFDgmw6ivUR",
        )
        .then(
          (result) => {
            return result;
          },
          (error) => {
            throw error;
          },
        );

      toast.promise(promise, {
        loading: "Cargando...",
        success: (result) => {
          return `Email enviado correctamente: ${result.text}`;
        },
        error: "Error al enviar email",
      });
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <Card className="relative flex w-full flex-col gap-4 p-5">
      <h3 className="font-semibold">Contacto</h3>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex w-full flex-col gap-4"
      >
        <Input
          label="Username"
          type="text"
          variant="bordered"
          name="user_name"
          labelPlacement="outside"
          placeholder="Enter your username"
          isRequired
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        {errors.name.length > 0 && (
          <p className="font-bold text-red-500">{errors.name}</p>
        )}
        <Input
          label="Email"
          name="user_email"
          variant="bordered"
          placeholder="Enter your email"
          value={email}
          type={"text"}
          labelPlacement="outside"
          isRequired
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        {errors.email.length > 0 && (
          <p className="font-bold text-red-500">{errors.email}</p>
        )}
        <Textarea
          isRequired
          name="message"
          label="Mensaje"
          labelPlacement="outside"
          placeholder="Enter your mensaje"
          value={message}
          variant="bordered"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        {errors.message.length > 0 && (
          <p className="font-bold text-red-500">{errors.message}</p>
        )}
        <input
          type="submit"
          value="Enviar"
          className="mt-4 flex cursor-pointer items-center justify-center gap-0.5 rounded-md bg-red-500 py-2 font-semibold text-white transition-all duration-300 ease-in-out hover:bg-red-600"
        />
      </form>
    </Card>
  );
};

export default Contact;
