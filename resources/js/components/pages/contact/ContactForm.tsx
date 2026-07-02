import { Button } from '@/components/ui/button'
import Input from '@/components/ui/input'
import Label from '@/components/ui/label'
import Textarea from '@/components/ui/textarea'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { Send } from 'lucide-react'

const inputs = [
    { label: "Full Name", name: "name", placeHolder: "John Doe" },
    { label: "Email Address", name: "email", placeHolder: "john@example.com", type: "email" },
    { label: "Phone Number", name: "phone", placeHolder: "+234 800 000 0000", type : "tel", required : false},
    { label: "Subject", name: "subject", placeHolder: "How can we help?", required: false }
]

const ContactForm = () => {

    const [contactForm, setContactForm] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message : ""
    })

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setContactForm({...contactForm, [name] : value})
    }

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        alert(JSON.stringify(contactForm))
    }
    return (
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-deep-navy mb-6">Send Us a Message</h3>
            <form className="space-y-5" onSubmit={handleFormSubmit}>
                <div className="grid sm:grid-cols-2 gap-5">
                    {
                        inputs.map((input) => (
                            <div key={input.name} className="space-y-1.5">
                                <Label htmlFor={input.name}>{input.label}</Label>
                                <Input
                                    id={input.name}
                                    name={input.name}
                                    placeholder={input.placeHolder}
                                    type={input.type ? input.type : 'text'}
                                    required={input.required === false ? false : true}
                                    onChange={handleInputChange}
                                />
                            </div>
                        ))
                    }
                </div>

                <div className="space-y-1.5">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" name="message" placeholder="Write your message here..." onChange={handleInputChange} />
                </div>
                <Button
                    type="submit"
                    className="w-full mx-auto md:w-fit flex bg-royal-purple hover:bg-royal-purple/90 text-white cursor-pointer text-base py-7 md:text-lg font-medium items-center gap-3 md:px-7"
                >
                    Send Message
                    <Send size={20} />
                </Button>
            </form>
        </div>
    )
}

export default ContactForm